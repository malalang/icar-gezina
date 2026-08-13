# ICar Gezina Monorepo Architecture

## Goal

Turn `malalang/icar-gezina` into a maintainable pnpm monorepo while preserving the existing Next.js public site and admin application. Supabase project `phb` (`srlnoxhqudgvskntekze`) is the shared backend.

## Repository layout

```text
icar-gezina/
├── apps/
│   ├── web/                 # Public ICar Gezina website
│   └── admin/               # Admin application (phase 2; may share Next runtime initially)
├── packages/
│   ├── ui/                  # Shared UI primitives and dealership components
│   ├── supabase/            # Supabase clients, generated types, SQL, policies
│   ├── domain/              # Shared domain types, validation and business rules
│   ├── config/              # Shared TypeScript/ESLint/Tailwind configuration
│   └── utils/               # Shared framework-agnostic utilities
├── supabase/
│   ├── migrations/          # Ordered database migrations
│   └── seed.sql             # Non-production development seed data
├── package.json             # Workspace scripts and root tooling
├── pnpm-workspace.yaml
├── turbo.json               # Task orchestration/caching when Turborepo is enabled
└── ARCHITECTURE.md
```

## Application boundaries

### `apps/web`

Owns the customer-facing routes:

- Home
- Showroom
- Vehicle details
- Finance
- Articles
- Contact
- Testimonials

It reads public dealership data from Supabase through shared packages and submits leads through server-side actions/API boundaries.

### `apps/admin`

Owns dealership operations:

- Dashboard
- Cars CRUD
- Car parts CRUD
- Car reviews CRUD
- Testimonials CRUD
- Leads CRUD/status workflow
- Articles/content management
- Finance applications
- Admin users/settings

Admin access is authenticated through Supabase Auth and authorized by `public.profiles.is_admin`. Database RLS remains the final authorization boundary; UI checks are not considered security controls.

## Supabase

Project: `phb`

Project ref: `srlnoxhqudgvskntekze`

Core existing tables:

- `profiles`
- `cars`
- `car_parts`
- `car_reviews`
- `testimonials`
- `leads`

Other existing `phb` tables (`products`, `tracks`, `follows`) are not part of the dealership domain and should not be coupled to the ICar Gezina application unless a concrete requirement appears.

### Authorization model

```text
Supabase Auth user
      |
      v
public.profiles.is_admin
      |
      +-- false -> public/customer permissions
      |
      +-- true  -> admin CRUD permissions
```

RLS is mandatory on all public tables containing dealership or user data. Admin CRUD must be enforced by RLS in addition to application-level authorization.

## Data flow

```text
Browser
  |
  v
Next.js Server Components / Server Actions / Route Handlers
  |
  v
packages/supabase
  |
  v
Supabase Postgres + Auth + Storage
```

Never expose the Supabase service-role key to browser/client components.

## Shared package rules

- `packages/domain` must not import Next.js, React, or Supabase runtime clients.
- `packages/supabase` may depend on `packages/domain` but not on app code.
- `packages/ui` may depend on domain types but should remain reusable across web/admin.
- Apps may depend on packages; packages must never import from `apps/*`.
- Keep server-only Supabase clients in server-only modules.
- Validate all form input at the server boundary.

## Inventory

`cars` is the source of truth for public vehicle inventory.

Required public behavior:

- filtering by make/model/year/body type/price
- sorting
- pagination
- stable vehicle IDs
- graceful missing-image/data states
- vehicle gallery
- vehicle enquiry
- vehicle-specific WhatsApp message

Admin behavior:

- create
- read
- update
- delete
- manage gallery URLs
- manage parts/inspection data
- manage reviews

## Leads

All customer enquiries should converge on a consistent lead workflow:

```text
Vehicle enquiry / Contact / Finance
              |
              v
            leads
              |
        New -> Contacted -> Qualified -> Closed
```

Lead access is admin-only except for controlled lead creation from public server boundaries.

## Content

The article system will eventually provide:

- `/articles`
- `/articles/[slug]`
- article categories
- rich content
- SEO metadata
- related articles
- publishing state

The database schema should be introduced through migrations rather than ad-hoc production SQL.

## Admin architecture

The admin dashboard is an operational application, not a second public website.

```text
/admin
├── dashboard
├── cars
│   ├── new
│   └── [id]/edit
├── car-parts
├── reviews
├── testimonials
├── leads
├── finance
├── articles
└── settings
```

Every mutation must:

1. authenticate the Supabase session;
2. verify admin authorization;
3. validate input;
4. perform the mutation through the server boundary;
5. rely on Supabase RLS as the final authorization check;
6. return a typed success/error result.

## Deployment

The monorepo should remain deployable on Vercel. Each deployable application gets its own Vercel project/root directory when separated physically. Shared packages are built/consumed through the workspace.

For the first migration step, preserve the current Next.js application behavior before splitting the public and admin runtimes. Physical separation of `apps/web` and `apps/admin` is a staged migration, not a reason to break the existing production site.

## Migration strategy

1. Add pnpm workspace and root tooling.
2. Move the current Next.js application into `apps/web` without changing behavior.
3. Extract shared Supabase/domain code into packages.
4. Keep admin routes working during the transition; extract them into `apps/admin` only after shared authentication and authorization are stable.
5. Move database SQL into `supabase/migrations` and `packages/supabase/sql` with one concern per migration/table folder where appropriate.
6. Add CI for typecheck, lint and build for affected apps/packages.
7. Verify public site and admin CRUD against the `phb` Supabase project before removing legacy paths/configuration.

## Non-negotiables

- No service-role secrets in client code.
- RLS remains enabled.
- Admin CRUD is database-enforced.
- Public inventory reads must not grant mutation permissions.
- Shared code belongs in `packages/*`, not duplicated between apps.
- Database changes are version-controlled.
- The public ICar Gezina visual language remains the product reference; the monorepo architecture remains our own.
