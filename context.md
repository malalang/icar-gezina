This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
apps/admin/.gitignore
apps/admin/app/[resource]/[id]/edit/page.tsx
apps/admin/app/[resource]/[id]/page.tsx
apps/admin/app/[resource]/new/page.tsx
apps/admin/app/[resource]/page.tsx
apps/admin/app/admin-shell.tsx
apps/admin/app/admin/[...path]/page.tsx
apps/admin/app/admin/actions.ts
apps/admin/app/admin/layout.tsx
apps/admin/app/admin/login/page.tsx
apps/admin/app/admin/page.tsx
apps/admin/app/admin/unauthorized/page.tsx
apps/admin/app/crud-actions.ts
apps/admin/app/dashboard/page.tsx
apps/admin/app/delete-form.tsx
apps/admin/app/globals.css
apps/admin/app/inventory/[id]/edit/page.tsx
apps/admin/app/inventory/[id]/page.tsx
apps/admin/app/inventory/actions.ts
apps/admin/app/inventory/components/feature-manager.tsx
apps/admin/app/inventory/components/gallery-manager.tsx
apps/admin/app/inventory/delete-button.tsx
apps/admin/app/inventory/new/page.tsx
apps/admin/app/inventory/page.tsx
apps/admin/app/inventory/vehicle-form.tsx
apps/admin/app/layout.tsx
apps/admin/app/lead-edit-styles.tsx
apps/admin/app/lead-vehicle-details.tsx
apps/admin/app/page.tsx
apps/admin/app/resource-config.ts
apps/admin/app/resource-form.tsx
apps/admin/app/settings/page.tsx
apps/admin/lib/revalidation.ts
apps/admin/next.config.ts
apps/admin/package.json
apps/admin/tsconfig.json
apps/client/.gitignore
apps/client/app/_lib/cached-public-data.ts
apps/client/app/(client)/actions.ts
apps/client/app/(client)/articles/page.tsx
apps/client/app/(client)/cars/[id]/page.tsx
apps/client/app/(client)/cars/inventory-client.tsx
apps/client/app/(client)/cars/page.tsx
apps/client/app/(client)/contact/page.tsx
apps/client/app/(client)/faq/page.tsx
apps/client/app/(client)/finance/page.tsx
apps/client/app/(client)/layout.tsx
apps/client/app/(client)/page.tsx
apps/client/app/(client)/testimonials/page.tsx
apps/client/app/api/revalidate/route.ts
apps/client/app/globals.css
apps/client/app/layout.tsx
apps/client/components/CarLeadForms.tsx
apps/client/components/ContactForm.tsx
apps/client/components/FinanceForm.tsx
apps/client/components/WhatsAppButton.tsx
apps/client/hooks/use-mobile.ts
apps/client/lib/utils.ts
apps/client/metadata.json
apps/client/next-env.d.ts
apps/client/next.config.ts
apps/client/package.json
apps/client/postcss.config.mjs
apps/client/proxy.ts
apps/client/public/.gitkeep
apps/client/public/Bakkies.png
apps/client/public/Coupes.png
apps/client/public/Hatchbacks.png
apps/client/public/hyundia-1536x664.png
apps/client/public/iCAR-LOGO.png
apps/client/public/lexus.png
apps/client/public/mers-1536x1536.png
apps/client/public/nissan-1536x1308.png
apps/client/public/SUVs.png
apps/client/public/toy.png
apps/client/public/vw-1536x1533.png
apps/client/tsconfig.json
biome.json
package.json
packages/contracts/package.json
packages/contracts/src/actionResult.ts
packages/contracts/src/article.ts
packages/contracts/src/car.ts
packages/contracts/src/contact.ts
packages/contracts/src/env.ts
packages/contracts/src/lead.ts
packages/contracts/src/revalidation.ts
packages/contracts/src/service.ts
packages/contracts/src/testimonial.ts
packages/contracts/tsconfig.json
packages/supabase/package.json
packages/supabase/sql/add_articles_table.sql
packages/supabase/sql/add_leads_table.sql
packages/supabase/sql/icargezina_bucket.sql
packages/supabase/sql/mockData.sql
packages/supabase/sql/schema.sql
packages/supabase/src/auth.ts
packages/supabase/src/cache.ts
packages/supabase/src/client.ts
packages/supabase/src/Mutations/articles.ts
packages/supabase/src/Mutations/carParts.ts
packages/supabase/src/Mutations/cars.ts
packages/supabase/src/Mutations/leads.ts
packages/supabase/src/Mutations/reviews.ts
packages/supabase/src/Mutations/testimonials.ts
packages/supabase/src/Queries/articles.ts
packages/supabase/src/Queries/cars.ts
packages/supabase/src/Queries/leads.ts
packages/supabase/src/Queries/testimonials.ts
packages/supabase/src/server.ts
packages/supabase/src/session.ts
packages/supabase/src/supabaseType.ts
packages/supabase/tsconfig.json
pnpm-workspace.yaml
README.md
turbo.json
```

# Files

## File: apps/admin/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", ".next/types/**/*.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## File: README.md
```markdown
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f3b56690-c0a4-4c08-97e7-e9de526d372c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
```

## File: apps/admin/.gitignore
```
.vercel
.env*
```

## File: apps/admin/app/admin-shell.tsx
```typescript
"use client";

import {
  BarChart3,
  CarFront,
  FileText,
  Inbox,
  LayoutDashboard,
  MessageSquareQuote,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/inventory", label: "Vehicles", icon: CarFront },
  { href: "/leads", label: "Leads", icon: Inbox },
  { href: "/reviews", label: "Reviews", icon: MessageSquareQuote },
  { href: "/testimonials", label: "Testimonials", icon: Users },
  { href: "/car-parts", label: "Car Parts", icon: Wrench },
  { href: "/articles", label: "Articles", icon: FileText },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="admin-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">iC</div>
          <div>
            <strong>ICar Gezina</strong>
            <span>Administration</span>
          </div>
        </div>

        <div className="sidebar-section-label">Operations</div>
        <nav className="nav-list" aria-label="Admin navigation">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`nav-item ${active ? "active" : ""}`}
              >
                <Icon size={18} strokeWidth={1.9} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-section-label">System</div>
        <Link
          href="/settings"
          className={`nav-item ${pathname.startsWith("/settings") ? "active" : ""}`}
        >
          <Settings size={18} strokeWidth={1.9} />
          <span>Settings</span>
        </Link>
        <div className="admin-badge">
          <ShieldCheck size={18} />
          <div>
            <strong>Admin access</strong>
            <span>Protected workspace</span>
          </div>
        </div>
      </aside>

      <div className="admin-main">
        <header className="topbar">
          <div>
            <span className="eyebrow">ICar Gezina</span>
            <span className="topbar-title">Dealership workspace</span>
          </div>
          <div className="topbar-actions">
            <Link href="/inventory" className="topbar-link">
              View showroom
            </Link>
            <div className="avatar">A</div>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
```

## File: apps/admin/app/admin/actions.ts
```typescript
"use server";
import { createSupabaseServerClient } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";
export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return redirect("/admin/login?error=Could not authenticate user");
  return redirect("/admin");
}
export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return redirect("/admin/login");
}
```

## File: apps/admin/app/admin/layout.tsx
```typescript
import { createSupabaseServerClient } from "@icar-gezina/supabase/server";
import Link from "next/link";
import { logout } from "./actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen bg-slate-100">
      <aside className="fixed inset-y-0 w-64 bg-slate-900 text-white p-6">
        <Link href="/admin" className="text-xl font-bold">
          ICar Admin
        </Link>
        <nav className="mt-8 space-y-2">
          <Link className="block" href="/admin">
            Dashboard
          </Link>
          <Link className="block" href="/admin/cars">
            Inventory
          </Link>
          <Link className="block" href="/admin/leads">
            Leads
          </Link>
        </nav>
        {data.user && (
          <form action={logout} className="mt-8">
            <button type="submit">Sign out</button>
          </form>
        )}
      </aside>
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
```

## File: apps/admin/app/admin/login/page.tsx
```typescript
"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <section className="panel" style={{ width: "100%", maxWidth: 420 }}>
        <div className="panel-body">
          <h1>ICar Gezina Admin</h1>
          <p>Sign in with an authorized dealership account.</p>
          <form onSubmit={submit} className="vehicle-form">
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </label>
            {error && (
              <p role="alert" style={{ color: "#b91c1c" }}>
                {error}
              </p>
            )}
            <button className="button" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
```

## File: apps/admin/app/admin/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminHomePage() {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  redirect("/dashboard");
}
```

## File: apps/admin/app/admin/unauthorized/page.tsx
```typescript
import Link from "next/link";
export default function UnauthorizedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <section className="panel" style={{ maxWidth: 520, width: "100%" }}>
        <div className="panel-body">
          <h1>Access denied</h1>
          <p>
            Your Supabase account is authenticated but is not marked as an ICar
            Gezina administrator.
          </p>
          <Link href="/admin/login" className="button">
            Back to sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
```

## File: apps/admin/app/dashboard/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { CarFront, Eye, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { supabase, user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  const { data: cars } = await supabase
    .from("cars")
    .select("id, make, model, year, price, created_at")
    .order("created_at", { ascending: false });
  const vehicles = cars ?? [];
  const inventoryValue = vehicles.reduce(
    (total, car) => total + (car.price ?? 0),
    0,
  );
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Current ICar Gezina showroom overview.</p>
        </div>
        <Link href="/inventory/new" className="button">
          <Plus size={16} /> Add vehicle
        </Link>
      </div>
      <section className="stats" aria-label="Dealership overview">
        <article className="stat-card">
          <div className="stat-label">Total vehicles</div>
          <div className="stat-value">{vehicles.length}</div>
          <div className="stat-meta">
            <CarFront
              size={12}
              style={{ verticalAlign: "middle", marginRight: 4 }}
            />
            Live from Supabase PHB
          </div>
        </article>
        <article className="stat-card">
          <div className="stat-label">Inventory value</div>
          <div className="stat-value">
            R {inventoryValue.toLocaleString("en-ZA")}
          </div>
          <div className="stat-meta">
            <TrendingUp
              size={12}
              style={{ verticalAlign: "middle", marginRight: 4 }}
            />
            Current listed value
          </div>
        </article>
        <article className="stat-card">
          <div className="stat-label">Live inventory</div>
          <div className="stat-value">{vehicles.length}</div>
          <div className="stat-meta">
            <Eye
              size={12}
              style={{ verticalAlign: "middle", marginRight: 4 }}
            />
            Public catalogue records
          </div>
        </article>
        <article className="stat-card">
          <div className="stat-label">Admin access</div>
          <div className="stat-value">ON</div>
          <div className="stat-meta">Authenticated administrator</div>
        </article>
      </section>
      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Recent vehicles</h2>
            <p>Latest records from the PHB cars table.</p>
          </div>
          <Link href="/inventory">View all</Link>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Year</th>
                <th>Price</th>
                <th>Added</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.slice(0, 5).map((car) => (
                <tr key={car.id}>
                  <td>
                    <strong>
                      {car.make} {car.model}
                    </strong>
                  </td>
                  <td>{car.year}</td>
                  <td>R {car.price.toLocaleString("en-ZA")}</td>
                  <td>
                    {new Date(car.created_at).toLocaleDateString("en-ZA")}
                  </td>
                </tr>
              ))}
              {!vehicles.length && (
                <tr>
                  <td colSpan={4}>No vehicles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
```

## File: apps/admin/app/inventory/delete-button.tsx
```typescript
"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteVehicle } from "./actions";

export function DeleteVehicleButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      className="button secondary"
      style={{ padding: 8 }}
      type="button"
      disabled={pending}
      aria-label={`Delete ${name}`}
      onClick={() => {
        if (!window.confirm(`Delete ${name}? This cannot be undone.`)) return;
        const formData = new FormData();
        formData.set("id", id);
        startTransition(() => {
          void deleteVehicle(formData);
        });
      }}
    >
      <Trash2 size={15} />
    </button>
  );
}
```

## File: apps/admin/app/inventory/new/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";
import { createVehicle } from "../actions";
import { VehicleForm } from "../vehicle-form";

export default async function NewVehiclePage() {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Add vehicle</h1>
          <p>Create a vehicle listing in the PHB inventory.</p>
        </div>
      </div>
      <section className="panel">
        <div className="panel-body">
          <VehicleForm
            values={{
              make: "",
              model: "",
              year: new Date().getFullYear(),
              price: 0,
              mileage: 0,
              fuelType: "",
              transmission: "",
              bodyType: "",
              color: "",
              imageUrl: "",
              galleryUrls: [],
              description: "",
              features: [],
            }}
            action={createVehicle}
            submitLabel="Create vehicle"
          />
        </div>
      </section>
    </>
  );
}
```

## File: apps/admin/lib/revalidation.ts
```typescript
import type { RevalidationRequest } from "@icar-gezina/contracts/revalidation";

const fallbackClientUrls: string[] = [
  process.env.CLIENT_REVALIDATION_URL,
  process.env.NEXT_PUBLIC_CLIENT_URL,
  process.env.ICARGEZINA_CLIENT_URL,
  "https://icargezina.co.za",
].filter((url): url is string => Boolean(url));

export async function triggerRevalidation(request: RevalidationRequest) {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) return;

  const body = JSON.stringify(request);
  await Promise.allSettled(
    fallbackClientUrls.map((baseUrl) =>
      fetch(`${baseUrl}/api/revalidate`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${secret}`,
        },
        body,
        cache: "no-store",
      }),
    ),
  );
}
```

## File: apps/admin/next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  output: "standalone",
};

export default nextConfig;
```

## File: apps/client/.gitignore
```
.vercel
.env*
```

## File: apps/client/app/_lib/cached-public-data.ts
```typescript
import { CACHE_TAGS } from "@icar-gezina/supabase/cache";
import { getPublishedArticles } from "@icar-gezina/supabase/Queries/articles";
import { getCarById, getCars } from "@icar-gezina/supabase/Queries/cars";
import { getTestimonials } from "@icar-gezina/supabase/Queries/testimonials";
import { unstable_cache } from "next/cache";

export const getCachedCars = async () =>
  unstable_cache(async () => getCars(), ["cars"], {
    tags: [CACHE_TAGS.cars],
  })();

export const getCachedCarById = async (id: string) =>
  unstable_cache(async () => getCarById(id), [`car-${id}`], {
    tags: [CACHE_TAGS.car(id)],
  })();

export const getCachedTestimonials = async () =>
  unstable_cache(async () => getTestimonials(), ["testimonials"], {
    tags: [CACHE_TAGS.testimonials],
  })();

export const getCachedArticles = async () =>
  unstable_cache(async () => getPublishedArticles(), ["articles"], {
    tags: [CACHE_TAGS.articles],
  })();
```

## File: apps/client/app/(client)/actions.ts
```typescript
"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { leadInputSchema } from "@icar-gezina/contracts/lead";
import { submitLead as submitLeadMutation } from "@icar-gezina/supabase/Mutations/leads";

export async function submitLead(formData: FormData): Promise<ActionResult> {
  const parsed = leadInputSchema.safeParse({
    type: formData.get("type"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message") || undefined,
    carId: formData.get("carId") || undefined,
    preferredDate: formData.get("preferredDate") || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "message");
      fieldErrors[key] = [issue.message];
    }
    return {
      ok: false,
      error: "Please check your details and try again.",
      fieldErrors,
    };
  }

  try {
    await submitLeadMutation(parsed.data);
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    message:
      "Thanks! We have received your enquiry and will be in touch shortly.",
  };
}
```

## File: apps/client/app/(client)/articles/page.tsx
```typescript
import { ArrowRight, CalendarDays, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "8 reasons why you should buy your car from ICar Gezina",
    category: "Buying Guide",
    date: "Buying advice",
    image: "/SUVs.png",
    copy: "From quality pre-owned vehicles to friendly service, discover what makes the ICar Gezina buying experience different.",
  },
  {
    title: "How to choose the right car for your lifestyle",
    category: "Buying Guide",
    date: "Car advice",
    image: "/Coupes.png",
    copy: "SUV, coupe, bakkie or hatchback? A practical guide to choosing a vehicle that fits the way you live.",
  },
  {
    title: "What documents do you need when selling your car?",
    category: "Sell Your Car",
    date: "Helpful guide",
    image: "/Bakkies.png",
    copy: "Understand the basic paperwork and information you may need when changing ownership or selling your vehicle.",
  },
  {
    title: "Making car finance simple",
    category: "Finance",
    date: "Finance guide",
    image: "/Hatchbacks.png",
    copy: "Learn what to prepare for a vehicle finance application and how our team can help you through the process.",
  },
  {
    title: "Looking after your car after purchase",
    category: "After Sales",
    date: "Ownership tips",
    image: "/SUVs.png",
    copy: "Simple habits and checks that can help you keep your vehicle reliable, safe and enjoyable for longer.",
  },
  {
    title: "Questions to ask before buying a pre-owned vehicle",
    category: "Buying Guide",
    date: "Buyer checklist",
    image: "/Coupes.png",
    copy: "Use these practical questions to compare vehicles confidently and make a more informed purchase.",
  },
];
const categories = [
  "All",
  "Buying Guide",
  "Finance",
  "Sell Your Car",
  "After Sales",
];

export default function ArticlesPage() {
  return (
    <div className="bg-[#282828] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#171717]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(232,117,26,0.25),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(0,114,188,0.2),transparent_36%)]" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#E8751A] via-[#E8751A] to-[#0072BC]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#E8751A]/40 bg-[#E8751A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              ICar Gezina Journal
            </span>
            <h1 className="mt-6 text-5xl font-black uppercase italic leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Drive smarter.
              <br />
              <span className="text-[#E8751A]">Know more.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Buying advice, finance guidance and practical ownership tips to
              help you make confident decisions on your next vehicle.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 rounded-lg bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#d76712]"
              >
                Explore showroom <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/80 hover:border-white/40 hover:text-white"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/10 bg-[#303030]">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-5 sm:px-6 lg:px-8">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition ${index === 0 ? "bg-[#E8751A] text-white" : "border border-white/10 text-white/55 hover:border-[#E8751A]/60 hover:text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8751A]">
                Latest articles
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                From the ICar Gezina team.
              </h2>
            </div>
            <Link
              href="/cars"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0072BC] sm:inline-flex"
            >
              Browse vehicles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#303030] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#353535]">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#181818]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#E8751A]">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-white/30">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-tight transition group-hover:text-[#E8751A]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {article.copy}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0072BC]"
                  >
                    Read more{" "}
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#303030] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              Need help choosing?
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Talk to the ICar Gezina team.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
              If you have questions about a vehicle, finance or the buying
              process, we are ready to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]"
            >
              View showroom <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/75 hover:border-white/30 hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## File: apps/client/app/(client)/cars/[id]/page.tsx
```typescript
import {
  ArrowLeft,
  ArrowRight,
  CarFront,
  CheckCircle2,
  CircleCheck,
  Fuel,
  Gauge,
  Info,
  Settings2,
  ShieldCheck,
  Star,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCachedCarById } from "@/app/_lib/cached-public-data";
import { CarLeadForms } from "@/components/CarLeadForms";

function titleCase(value: string) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCachedCarById(id);

  if (!car) notFound();

  const vehicleName = `${car.year} ${car.make} ${car.model}`;

  const specifications = [
    ["Make", car.make],
    ["Model", car.model],
    ["Year", String(car.year)],
    ["Mileage", `${car.mileage.toLocaleString()} Km`],
    ["Fuel type", car.fuelType],
    ["Transmission", car.transmission],
    ["Body type", car.bodyType],
    ["Colour", car.color],
  ];

  const overviewFacts = [
    { label: "Year", value: String(car.year) },
    { label: "Mileage", value: `${car.mileage.toLocaleString()} Km` },
    { label: "Fuel", value: car.fuelType },
    { label: "Transmission", value: car.transmission },
    { label: "Body type", value: car.bodyType },
    { label: "Colour", value: car.color },
  ];

  const features = Array.from(
    new Set(
      (car.features ?? []).map((feature) => feature?.trim()).filter(Boolean),
    ),
  );

  const healthChecks = (car.parts ?? []).filter(
    (part) => part?.name?.trim() && part?.condition?.trim(),
  );

  const conditionClass = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "excellent":
        return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
      case "good":
        return "border-sky-400/20 bg-sky-400/10 text-sky-300";
      case "fair":
        return "border-amber-400/20 bg-amber-400/10 text-amber-300";
      default:
        return "border-orange-400/20 bg-orange-400/10 text-orange-300";
    }
  };

  return (
    <main className="min-h-screen bg-[#2b2b2b] pb-20 text-white">
      <section className="relative isolate min-h-[345px] overflow-hidden bg-[#202020] pt-[86px] sm:min-h-[380px]">
        <Image
          src={car.imageUrl}
          alt={vehicleName}
          fill
          priority
          unoptimized
          referrerPolicy="no-referrer"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[259px] max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
          <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-12">
            <div className="min-w-0">
              <Link
                href="/cars"
                className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/65 transition hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Showroom
              </Link>
              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px]">
                {vehicleName}
              </h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-[10px] font-medium text-white/75">Price</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                R {car.price.toLocaleString()}
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#12a8b8] px-5 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-[#0f98a7] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#12a8b8] focus:ring-offset-2 focus:ring-offset-black/20 lg:mb-0.5"
            >
              Enquire About This Vehicle
            </Link>
          </div>
        </div>
      </section>

      <nav
        aria-label="Vehicle sections"
        className="border-b border-[#12a8b8]/70 bg-[#737477]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-0 px-4 sm:px-6 lg:px-8">
          <a
            href="#vehicle"
            className="relative flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#E8751A]"
          >
            Vehicle
          </a>
          <a
            href="#finance"
            className="flex min-w-[150px] justify-center px-6 py-5 text-sm font-medium text-white/85 transition hover:text-white"
          >
            Vehicle Finance
          </a>
        </div>
      </nav>

      <div
        id="vehicle"
        className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10"
      >
        <section className="mb-7 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-bold text-white">
          <div className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.mileage.toLocaleString()} Km</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings2 className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-3">
            <Fuel className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6 text-[#F28A2E]" />
            <span>{car.color}</span>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.8fr)]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-xl bg-[#242424] shadow-sm">
              <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden bg-[#202020] sm:min-h-[430px]">
                <Image
                  src={car.imageUrl}
                  alt={vehicleName}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm">
                  <CarFront className="h-3.5 w-3.5 text-[#F28A2E]" /> Vehicle
                  gallery
                </div>
              </div>
              {car.galleryUrls.length > 0 && (
                <div className="grid grid-cols-4 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-6">
                  {car.galleryUrls.map((url, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#333]"
                    >
                      <Image
                        src={url}
                        alt={`${vehicleName} view ${idx + 1}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">
                    About this vehicle
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    Vehicle overview
                  </h2>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold text-white/60">
                  <Info className="h-3.5 w-3.5 text-[#F28A2E]" /> Supplied
                  vehicle information
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-white/70">
                {car.description?.trim() ||
                  `${vehicleName} is currently listed in the ICar Gezina showroom. The information below reflects the vehicle fields recorded in our inventory.`}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {overviewFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white">
                      {titleCase(fact.value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">
                    Features & equipment
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    What this vehicle includes
                  </h2>
                </div>
                <span className="text-xs font-medium text-white/40">
                  {features.length} recorded{" "}
                  {features.length === 1 ? "feature" : "features"}
                </span>
              </div>

              {features.length > 0 ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-[#F28A2E]/30 hover:bg-white/[0.055]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F28A2E]/10">
                        <CheckCircle2 className="h-4 w-4 text-[#F28A2E]" />
                      </span>
                      <span className="text-sm font-medium text-white/75">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/[0.025] p-6">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-white/35" />
                    <div>
                      <p className="text-sm font-semibold text-white/65">
                        Equipment details not recorded
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/40">
                        No additional features have been supplied for this
                        vehicle in the current inventory record.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#242424] p-6 text-white shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">
                    Vehicle confidence
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Vehicle health check
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                    Only condition information explicitly recorded against this
                    vehicle is shown here.
                  </p>
                </div>
                {healthChecks.length > 0 && (
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                    <ShieldCheck className="h-4 w-4" /> Recorded condition
                  </div>
                )}
              </div>

              {healthChecks.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {healthChecks.map((part, idx) => (
                    <article
                      key={`${part.name}-${idx}`}
                      className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                            Component
                          </p>
                          <h3 className="mt-1 text-sm font-bold text-white">
                            {part.name}
                          </h3>
                        </div>
                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${conditionClass(part.condition)}`}
                        >
                          {part.condition}
                        </span>
                      </div>
                      {part.description?.trim() && (
                        <p className="mt-3 text-xs leading-5 text-white/50">
                          {part.description}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/[0.025] p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                      <ShieldCheck className="h-5 w-5 text-white/35" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/65">
                        No health-check results recorded
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-white/40">
                        A vehicle health assessment has not been recorded for
                        this vehicle in Supabase yet. We will not infer,
                        estimate, or invent inspection results.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {healthChecks.length > 0 && (
                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-xs leading-5 text-white/40">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    These condition entries are displayed from the vehicle's
                    recorded health-check data and should be treated as the
                    dealership's supplied vehicle information.
                  </span>
                </div>
              )}
            </section>

            <section className="rounded-xl border border-white/10 bg-[#333333] p-6 shadow-sm sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28A2E]">
                    Customer experience
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    Reviews
                  </h2>
                </div>
                {car.reviews.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-sm font-bold">
                    <Star className="h-4 w-4 fill-current text-[#F28A2E]" />{" "}
                    {car.reviews[0].rating}/5
                  </span>
                )}
              </div>
              {car.reviews.length === 0 ? (
                <div className="mt-6 rounded-xl bg-white/5 p-6 text-center">
                  <p className="text-sm text-white/45">
                    No reviews for this specific vehicle yet.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {car.reviews.map((review) => (
                    <article
                      key={review.id}
                      className="rounded-xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex gap-1 text-[#F28A2E]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${i < review.rating ? "fill-current" : "text-white/15"}`}
                          />
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/60">
                        “{review.comment}”
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-wider">
                        <span>{review.author}</span>
                        <span className="text-white/30">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside id="finance" className="lg:sticky lg:top-28 lg:self-start">
            <div
              id="contact"
              className="overflow-hidden rounded-xl border border-black/5 bg-white text-[#292929] shadow-xl"
            >
              <div className="border-b border-black/5 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">
                  Interested in this vehicle?
                </p>
                <h2 className="mt-2 text-2xl font-bold">Contact Us</h2>
                <p className="mt-2 text-sm leading-6 text-black/45">
                  Talk to our team about this vehicle, arrange a viewing or
                  request finance options.
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 rounded-xl bg-[#eeeeee] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
                    Vehicle
                  </p>
                  <p className="mt-1 font-bold">{vehicleName}</p>
                  <p className="mt-1 text-xl font-black">
                    R {car.price.toLocaleString()}
                  </p>
                </div>
                <CarLeadForms carId={car.id} />
              </div>
              <div className="flex items-center gap-3 border-t border-black/5 px-6 py-4 text-xs text-black/45">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#E8751A]" />
                <span>Buy with confidence from ICar Gezina.</span>
              </div>
            </div>
            <Link
              href="/cars"
              className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#333333] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:border-[#E8751A]/50 hover:text-[#F28A2E]"
            >
              <span className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Browse more vehicles
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
```

## File: apps/client/app/(client)/cars/page.tsx
```typescript
import { getCachedCars } from "@/app/_lib/cached-public-data";
import CarsInventoryClient from "./inventory-client";

export const revalidate = 60;

export default async function CarsInventoryPage() {
  const cars = await getCachedCars();
  return <CarsInventoryClient cars={cars} />;
}
```

## File: apps/client/app/(client)/contact/page.tsx
```typescript
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const dealership = {
  address: "669 Johan Heyns Dr, Gezina, Pretoria, 0031, South Africa",
  phone: "+27 12 329 5560",
  phoneHref: "+27123295560",
  email: "sales@icargezina.co.za",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ICar%20Gezina%20669%20Johan%20Heyns%20Dr%20Gezina%20Pretoria",
  whatsappUrl:
    "https://wa.me/27123295560?text=Hi%20ICar%20Gezina%2C%20I%27d%20like%20to%20get%20in%20touch.",
};

const hours = [
  ["Monday", "08:30 – 17:30"],
  ["Tuesday", "08:30 – 17:30"],
  ["Wednesday", "08:30 – 17:30"],
  ["Thursday", "08:30 – 17:30"],
  ["Friday", "08:30 – 17:30"],
  ["Saturday", "08:30 – 13:00"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#282828] text-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1b1b1b] via-[#282828] to-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(232,117,26,0.28),transparent_38%),radial-gradient(circle_at_15%_80%,rgba(0,114,188,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#E8751A]/40 bg-[#E8751A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              ICar Gezina
            </div>
            <h1 className="text-5xl font-black uppercase italic tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s talk <span className="text-[#E8751A]">cars.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Whether you are looking for your next vehicle, need help with
              finance, or simply have a question, our team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
              <span className="rounded-full bg-white/5 px-4 py-2">
                Vehicle enquiries
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2">
                Finance assistance
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2">
                Showroom support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#202020]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <a
            href={`tel:${dealership.phoneHref}`}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"
          >
            <Phone className="mb-4 h-6 w-6 text-[#E8751A]" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Call us
            </p>
            <p className="mt-1 font-semibold">{dealership.phone}</p>
          </a>
          <a
            href={`mailto:${dealership.email}`}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"
          >
            <Mail className="mb-4 h-6 w-6 text-[#E8751A]" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Email
            </p>
            <p className="mt-1 font-semibold break-all">{dealership.email}</p>
          </a>
          <a
            href={dealership.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"
          >
            <MessageCircle className="mb-4 h-6 w-6 text-[#E8751A]" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              WhatsApp
            </p>
            <p className="mt-1 font-semibold">Chat with our team</p>
          </a>
          <a
            href={dealership.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E8751A]/50 hover:bg-white/[0.06]"
          >
            <MapPin className="mb-4 h-6 w-6 text-[#E8751A]" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Visit us
            </p>
            <p className="mt-1 font-semibold">Gezina, Pretoria</p>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] shadow-2xl">
          <div className="p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#E8751A]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8751A]">
                  Find us
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  Visit the ICar Gezina showroom
                </h2>
              </div>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Come through to our Gezina showroom, browse the latest arrivals
              and speak to our team in person.
            </p>
            <p className="mt-5 font-semibold text-white">
              {dealership.address}
            </p>
            <a
              href={dealership.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0072BC] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0064a7]"
            >
              Get directions <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="min-h-[300px] bg-[#111] p-3">
            <iframe
              title="ICar Gezina location map"
              src="https://www.google.com/maps?q=ICar%20Gezina%20669%20Johan%20Heyns%20Dr%20Gezina%20Pretoria&output=embed"
              className="h-[300px] w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white p-7 text-slate-900 shadow-2xl sm:p-9">
          <div className="flex items-center gap-3">
            <Clock3 className="h-6 w-6 text-[#E8751A]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8751A]">
                Showroom hours
              </p>
              <h2 className="mt-1 text-2xl font-black">When to visit</h2>
            </div>
          </div>
          <div className="mt-7 divide-y divide-slate-100">
            {hours.map(([day, time]) => (
              <div
                key={day}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="font-semibold">{day}</span>
                <span
                  className={
                    time === "Closed"
                      ? "font-semibold text-slate-400"
                      : "text-slate-600"
                  }
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-xl bg-slate-50 p-5">
            <p className="font-bold">Planning a visit?</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Call ahead or message us on WhatsApp and we can help you prepare
              for your visit.
            </p>
            <a
              href={dealership.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-bold text-[#0072BC]"
            >
              Message us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1d] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Tell us what you need.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Looking for a specific car, need finance guidance, or have a
              question about our showroom? Send us a message and our team will
              get back to you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-[#E8751A] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Ready for your next car?
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Explore the ICar Gezina showroom.
            </h2>
          </div>
          <a
            href="/cars"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#282828] px-7 py-4 font-bold text-white transition hover:bg-[#1a1a1a]"
          >
            View vehicles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
```

## File: apps/client/app/(client)/faq/page.tsx
```typescript
import { Banknote, Car, HelpCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we work with all major banks and financial institutions to offer competitive financing rates. Our finance team will assist you in finding the best plan that fits your budget.",
      icon: <Banknote className="w-5 h-5 text-blue-500" />,
    },
    {
      question: "Are your vehicles inspected before sale?",
      answer:
        "Absolutely. Every vehicle in our inventory undergoes a rigorous 116-point inspection by our certified mechanics. We ensure every car meets our strict quality and safety standards before it reaches the showroom.",
      icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
    },
    {
      question: "Can I trade in my current vehicle?",
      answer:
        "Yes! We offer highly competitive trade-in valuations. Simply bring your car in for a quick appraisal, or fill out our online Contact form with your vehicle details to get a preliminary estimate.",
      icon: <Car className="w-5 h-5 text-yellow-500" />,
    },
    {
      question: "Do you offer warranties?",
      answer:
        "We offer various extended warranty options ranging from 1 to 2 years, covering major mechanical and electrical components. Our sales team can guide you through the available packages for your specific vehicle.",
      icon: <HelpCircle className="w-5 h-5 text-purple-500" />,
    },
    {
      question: "How do I book a test drive?",
      answer:
        "You can book a test drive directly from any vehicle's detail page. Just click the 'Book a Test Drive' button, select your preferred date, and submit your details. Our team will verify and confirm your appointment.",
      icon: <Car className="w-5 h-5 text-blue-500" />,
    },
    {
      question: "Do you deliver vehicles nationwide?",
      answer:
        "Yes, we offer nationwide delivery across South Africa. Delivery fees are calculated based on your location. Please speak with our sales advisors for an exact quote.",
      icon: <HelpCircle className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold italic tracking-tight text-slate-900 uppercase">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">
            Find answers to common questions about buying a car, applying for
            finance, our inspection processes, and more.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 flex items-start gap-4 hover:shadow-md transition"
            >
              <div className="p-3 bg-slate-50 rounded-lg shrink-0 border border-slate-100">
                {faq.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold italic uppercase tracking-tight mb-4">
            Still have <span className="text-blue-500">questions?</span>
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our friendly
            team is here to help you with any inquiries you might have regarding
            our vehicles or services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold rounded-lg px-8 py-4 shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition uppercase tracking-widest text-xs"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## File: apps/client/app/(client)/finance/page.tsx
```typescript
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FinanceForm } from "@/components/FinanceForm";

const steps = [
  {
    number: "01",
    title: "Choose your vehicle",
    copy: "Browse our showroom and find the vehicle that fits your budget and lifestyle.",
  },
  {
    number: "02",
    title: "Complete your application",
    copy: "Give us a few details and our team will guide you through the finance application.",
  },
  {
    number: "03",
    title: "Get a decision",
    copy: "We work with trusted finance partners to help make the process simple and straightforward.",
  },
  {
    number: "04",
    title: "Drive away happy",
    copy: "Once approved and everything is finalised, we help you get behind the wheel.",
  },
];
const requirements = [
  "South African ID or valid identification",
  "Latest proof of income",
  "Latest proof of residential address",
  "Three months bank statements where required",
];

export default function FinancePage() {
  return (
    <div className="bg-[#282828] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#171717]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(232,117,26,0.28),transparent_34%),radial-gradient(circle_at_12%_90%,rgba(0,114,188,0.2),transparent_38%)]" />
        <div className="absolute right-[-10%] top-[-25%] h-[620px] w-[620px] rounded-full border border-[#E8751A]/10" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#E8751A] via-[#E8751A] to-[#0072BC]" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:min-h-[680px] lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#E8751A]/40 bg-[#E8751A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              ICar Gezina Finance
            </span>
            <h1 className="mt-6 text-5xl font-black uppercase italic leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              Your next car.
              <br />
              <span className="text-[#E8751A]">Your way.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Make the journey to your next vehicle easier with guided finance
              support from the ICar Gezina team and trusted finance partners.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#application"
                className="inline-flex items-center gap-2 rounded-lg bg-[#E8751A] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#d76712]"
              >
                Apply for finance <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-[#0072BC]/70 hover:text-white"
              >
                Browse vehicles
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              <span>Guided application</span>
              <span>Trusted partners</span>
              <span>Personal support</span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#303030] py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Banknote className="h-6 w-6 text-[#E8751A]" />
            <h2 className="mt-5 text-lg font-bold">Easy finance</h2>
            <p className="mt-2 text-sm leading-6 text-white/45">
              We make the finance journey clear, with friendly guidance from
              application to approval.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <BadgeCheck className="h-6 w-6 text-[#0072BC]" />
            <h2 className="mt-5 text-lg font-bold">Trusted process</h2>
            <p className="mt-2 text-sm leading-6 text-white/45">
              Our team works with established finance partners to help find a
              suitable solution.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <ShieldCheck className="h-6 w-6 text-white/80" />
            <h2 className="mt-5 text-lg font-bold">Personal support</h2>
            <p className="mt-2 text-sm leading-6 text-white/45">
              You are never left to figure it out alone. We explain each step
              before you proceed.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#282828] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8751A]">
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Finance made simple.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
              From choosing your vehicle to completing the paperwork, our team
              is here to keep things moving.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="bg-[#292929] p-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#E8751A]">
                  {step.number}
                </span>
                <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="application" className="bg-[#303030] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8751A]">
              Start your application
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Let&apos;s get you moving.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50">
              Complete the details below and our finance team can contact you
              about your application and next steps.
            </p>
            <div className="mt-8 space-y-3">
              {requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0072BC]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <FinanceForm />
        </div>
      </section>
      <section className="bg-[#282828] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <FileText className="h-6 w-6 text-[#E8751A]" />
            <h2 className="mt-4 text-2xl font-black">
              Already know what you want?
            </h2>
            <p className="mt-2 text-sm text-white/45">
              Find a vehicle and start your journey today.
            </p>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] hover:border-[#0072BC] hover:text-[#0072BC]"
          >
            Explore the showroom <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
```

## File: apps/client/app/(client)/layout.tsx
```typescript
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Showroom" },
  { href: "/finance", label: "Finance" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact Us" },
];

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.16V2h-3.74v13.58a2.89 2.89 0 1 1-2-2.75V9.06a6.63 6.63 0 1 0 5.74 6.52V8.26a8.52 8.52 0 0 0 4.99 1.61V6.15c-.42 0-.83-.04-1.22-.12Z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.7" r="0.8" className="fill-current stroke-none" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.94 21 3 13.06 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 6 7.03 5.27a2 2 0 0 0 2.44 0L20.25 6"
      />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 5.25-7.5 10.5-7.5 10.5S4.5 15.75 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
      <circle cx="12" cy="10.5" r="2.25" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.3-.04-1.33-.14-2.54-.14-2.51 0-4.23 1.53-4.23 4.35V10H7v3h2.93v8h3.57Z" />
    </svg>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black/15 text-white backdrop-blur-[2px]">
        <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:min-h-[82px] lg:px-8">
          <Link href="/" aria-label="ICar Gezina home" className="shrink-0">
            <Image
              src="/iCAR-LOGO.png"
              alt="ICar Gezina"
              width={220}
              height={60}
              priority
              className="h-auto w-[150px] object-contain sm:w-[175px]"
            />
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex h-full items-center gap-8 xl:gap-10"
          >
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative flex h-[82px] items-center text-[13px] font-medium text-white/85 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-center after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 sm:flex">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ICar Gezina on YouTube"
              className="text-[#ff0000] transition hover:scale-110"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ICar Gezina on TikTok"
              className="text-white transition hover:scale-110"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ICar Gezina on Instagram"
              className="text-[#e1306c] transition hover:scale-110"
            >
              <InstagramIcon />
            </a>
          </div>
          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-12 w-72 rounded-2xl border border-white/15 bg-[#202020]/95 p-2 shadow-2xl backdrop-blur-xl">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-4 border-t border-white/10 px-4 pt-3">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-[#ff0000]"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-white"
                  >
                    <TikTokIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#e1306c]"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
      <footer className="relative shrink-0 overflow-hidden border-t border-white/10 bg-[#282828] text-slate-300">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_10%,rgba(232,117,26,0.16),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(0,114,188,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr_1fr_1.25fr]">
            <div className="max-w-sm">
              <Link
                href="/"
                aria-label="ICar Gezina home"
                className="inline-flex"
              >
                <Image
                  src="/iCAR-LOGO.png"
                  alt="ICar Gezina"
                  width={220}
                  height={60}
                  className="h-auto w-[175px] object-contain"
                />
              </Link>
              <div className="mt-5 h-0.5 w-12 bg-[#E8751A]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Your trusted destination for quality pre-owned vehicles in
                Gezina. Find your next car, explore our showroom and let us help
                you drive away with confidence.
              </p>
              <Link
                href="/cars"
                className="mt-7 inline-flex items-center rounded-full bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#F28A2E]"
              >
                Explore Our Vehicles
              </Link>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Vehicles
              </h2>
              <div className="mt-5 space-y-3 text-sm">
                <Link
                  href="/cars"
                  className="block transition hover:text-[#F28A2E]"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/cars"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Featured Cars
                </Link>
                <Link
                  href="/cars?type=SUV"
                  className="block transition hover:text-[#F28A2E]"
                >
                  SUVs
                </Link>
                <Link
                  href="/cars?type=Bakkie"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Bakkies
                </Link>
                <Link
                  href="/cars?type=Hatchback"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Hatchbacks
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Useful Links
              </h2>
              <div className="mt-5 space-y-3 text-sm">
                <Link
                  href="/"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Home
                </Link>
                <Link
                  href="/cars"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Showroom
                </Link>
                <Link
                  href="/finance"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Finance
                </Link>
                <Link
                  href="/articles"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Articles
                </Link>
                <Link
                  href="/testimonials"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Customer Reviews
                </Link>
                <Link
                  href="/contact"
                  className="block transition hover:text-[#F28A2E]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Visit ICar Gezina
              </h2>
              <div className="mt-5 space-y-4 text-sm">
                <a
                  href="tel:0123295560"
                  className="group flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-0.5 text-[#E8751A]">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Call us
                    </span>
                    <span className="mt-1 block">012 329 5560</span>
                  </span>
                </a>
                <a
                  href="mailto:sales@icargezina.co.za"
                  className="group flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-0.5 text-[#E8751A]">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Email
                    </span>
                    <span className="mt-1 block break-all">
                      sales@icargezina.co.za
                    </span>
                  </span>
                </a>
                <a
                  href="https://maps.google.com/?q=ICar+Gezina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-0.5 text-[#E8751A]">
                    <MapPinIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Showroom
                    </span>
                    <span className="mt-1 block">Gezina, Pretoria</span>
                  </span>
                </a>
              </div>
              <div className="mt-7 flex items-center gap-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ICar Gezina on Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ICar Gezina on Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ICar Gezina on TikTok"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#E8751A]/60 hover:bg-[#E8751A] hover:text-white"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} ICar Gezina. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="transition hover:text-white">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
```

## File: apps/client/app/(client)/page.tsx
```typescript
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CarFront,
  ChevronRight,
  Headphones,
  MapPin,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  getCachedCars,
  getCachedTestimonials,
} from "@/app/_lib/cached-public-data";

const filters: Array<[string, string[]]> = [
  [
    "Make",
    ["All Makes", "Toyota", "BMW", "Volkswagen", "Ford", "Mercedes-Benz"],
  ],
  ["Model", ["All Models", "Golf", "Polo", "Ranger", "X3", "D-Max"]],
  [
    "Vehicle Type",
    ["All Types", "SUV", "Sedan", "Bakkie", "Hatchback", "Coupe"],
  ],
  ["Year", ["All Years", "2026", "2025", "2024", "2023", "2022"]],
  ["Colour", ["All Colours", "Black", "White", "Silver", "Grey", "Blue"]],
  [
    "Max Price",
    [
      "Under R200 000",
      "R200 000 – R400 000",
      "R400 000 – R600 000",
      "R600 000 – R800 000",
      "R800 000+",
    ],
  ],
];

const benefits = [
  {
    Icon: BadgeCheck,
    title: "Quality vehicles",
    copy: "Carefully selected pre-owned stock",
  },
  {
    Icon: Banknote,
    title: "Finance made easy",
    copy: "Simple, guided application support",
  },
  {
    Icon: Headphones,
    title: "Friendly service",
    copy: "A team ready to help you buy with confidence",
  },
  {
    Icon: CarFront,
    title: "Wide selection",
    copy: "Cars for city, family, work and adventure",
  },
];

export default async function Home() {
  const cars = await getCachedCars();
  const globalTestimonials = await getCachedTestimonials();
  const newArrivals = cars.slice(0, 6);
  const categories = [
    {
      name: "SUVs",
      copy: "A perfect blend of comfort, space, and presence for every lifestyle.",
      type: "SUV",
      image: "/SUVs.png",
    },
    {
      name: "Coupes",
      copy: "Sleek, stylish, and built for speed with dynamic performance.",
      type: "Coupe",
      image: "/Coupes.png",
    },
    {
      name: "Bakkies",
      copy: "Rugged durability and powerful capability, ready for work or weekend.",
      type: "Bakkie",
      image: "/Bakkies.png",
    },
    {
      name: "Hatchbacks",
      copy: "Convenient, efficient and fun to drive for everyday life.",
      type: "Hatchback",
      image: "/Hatchbacks.png",
    },
  ];
  const makes = [
    { name: "Hyundai", image: "/hyundia-1536x664.png" },
    { name: "Lexus", image: "/lexus.png" },
    { name: "Mercedes-Benz", image: "/mers-1536x1536.png" },
    { name: "Nissan", image: "/nissan-1536x1308.png" },
    { name: "Toyota", image: "/toy.png" },
    { name: "Volkswagen", image: "/vw-1536x1533.png" },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#282828] text-white">
      <section className="relative min-h-[650px] overflow-visible bg-black sm:min-h-[690px] lg:min-h-[720px]">
        <Image
          src="https://icargezina.co.za/wp-content/uploads/2025/05/1003_14989_I1.jpg"
          alt="Vehicles inside the ICar Gezina showroom"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#282828] to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center justify-center px-4 pb-24 pt-28 text-center sm:min-h-[690px] sm:px-6 lg:min-h-[720px] lg:px-8">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">
              ICar Gezina
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[64px]">
              Find the car of your dreams at{" "}
              <span className="block">ICar Gezina</span>
            </h1>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-white/75 sm:text-base">
              At ICar Gezina, we make car buying simple, affordable, and
              enjoyable. Explore our wide range of quality vehicles and take
              advantage of our easy, on-site finance options. With friendly
              service, expert advice, and a streamlined process, getting behind
              the wheel has never been easier.
            </p>
          </div>
        </div>
        <section className="absolute inset-x-4 bottom-[-74px] z-30 sm:inset-x-6 lg:inset-x-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/15 bg-[#171717]/95 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))_auto]">
              {filters.map(([label, options]) => (
                <select
                  key={label}
                  aria-label={label}
                  className="h-12 w-full border-0 border-b border-[#E8751A]/70 bg-transparent px-4 text-xs font-medium text-white/75 outline-none transition focus:border-[#E8751A] focus:ring-0 [&>option]:bg-[#303030] [&>option]:text-white"
                >
                  <option value="">{label}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
              <Link
                href="/cars"
                className="flex h-12 items-center justify-center rounded-lg bg-[#16A6B8] px-7 text-xs font-semibold text-white transition hover:bg-[#1192A2]"
              >
                Search
              </Link>
            </div>
          </div>
        </section>
      </section>

      <div className="h-24 bg-[#282828]" />

      <section className="bg-[#282828] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F28A2E]">
                Latest stock
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                New Arrivals
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/45">
                Freshly added vehicles ready for their next owner.
              </p>
            </div>
            <Link
              href="/cars"
              className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold sm:inline-flex hover:border-[#16A6B8] hover:text-[#16A6B8]"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {newArrivals.map((car) => (
              <Link
                href={`/cars/${car.id}`}
                key={car.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#303030] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    fill
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur">
                    {car.year}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#16A6B8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider">
                    View vehicle
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
                    {car.mileage.toLocaleString()} km • {car.bodyType}
                  </p>
                  <h3 className="mt-2 min-h-12 text-lg font-bold leading-tight">
                    {car.make} {car.model}
                  </h3>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="text-2xl font-black text-white">
                      R {car.price.toLocaleString()}
                    </span>
                    <ChevronRight className="h-5 w-5 text-[#16A6B8] transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold"
            >
              View all vehicles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#303030] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative min-h-[460px] overflow-hidden rounded-2xl">
            <Image
              src={
                newArrivals[0]?.imageUrl ||
                "https://picsum.photos/seed/showroom/1200/800"
              }
              alt="ICar Gezina showroom"
              fill
              unoptimized
              referrerPolicy="no-referrer"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F28A2E]">
                Welcome to ICar Gezina
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Explore our showroom
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
                Discover a wide selection of quality vehicles. If we don't have
                what you're looking for, let our team know and we'll help find
                it.
              </p>
              <Link
                href="/cars"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#16A6B8] px-6 py-3 text-xs font-bold transition hover:bg-[#1192A2]"
              >
                View showroom <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#242424] p-7 sm:p-9">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#16A6B8]/10 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16A6B8]/15 text-[#16A6B8]">
                <Banknote className="h-7 w-7" />
              </div>
              <div className="mt-auto pt-20">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F28A2E]">
                  Easy on-site finance
                </p>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Get behind the wheel sooner.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
                  Our streamlined finance application process makes it simple to
                  move from browsing to driving, with friendly guidance along
                  the way.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                  <div>
                    <ShieldCheck className="h-4 w-4 text-[#16A6B8]" />
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                      Guided
                    </p>
                  </div>
                  <div>
                    <Banknote className="h-4 w-4 text-[#16A6B8]" />
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                      Convenient
                    </p>
                  </div>
                  <div>
                    <Headphones className="h-4 w-4 text-[#16A6B8]" />
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">
                      Personal
                    </p>
                  </div>
                </div>
                <Link
                  href="/finance"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold transition hover:border-[#16A6B8] hover:text-[#16A6B8]"
                >
                  Apply for finance <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#282828] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F28A2E]">
              Find your style
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              The right car for your lifestyle.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              From rugged bakkies and spacious SUVs to sporty coupes and
              practical hatchbacks, discover a vehicle built around the way you
              live.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                href={`/cars?bodyType=${encodeURIComponent(category.type)}`}
                key={category.name}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#202020] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
                  <Image
                    src={category.image}
                    alt={`${category.name} vehicles`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-3 transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-[10px] font-bold text-white/80 backdrop-blur-md">
                    0{index + 1}
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/70 backdrop-blur-md transition duration-300 group-hover:border-[#16A6B8]/70 group-hover:bg-[#16A6B8] group-hover:text-white">
                    <ArrowRight className="h-4 w-4 -rotate-45 transition duration-300 group-hover:rotate-0" />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="mb-4 h-px w-10 bg-[#E8751A] transition-all duration-500 group-hover:w-16" />
                  <h3 className="text-2xl font-black tracking-tight sm:text-[26px]">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {category.copy}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                      Browse {category.name}
                    </span>
                    <span className="text-xs font-bold text-[#16A6B8] transition group-hover:text-white">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#242424]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
          {benefits.map(({ Icon, title, copy }) => (
            <div key={title} className="flex gap-4 px-4 py-7 sm:px-6 lg:px-8">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#16A6B8]" />
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-white/40">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F28A2E]">
                Explore our vehicles
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Explore Our Vehicles
              </h2>
              <p className="mt-2 text-sm text-white/45">
                Filter by your favourite make!
              </p>
            </div>
            <Link
              href="/cars"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45 transition hover:text-[#16A6B8] sm:inline-flex"
            >
              View all makes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <button
              type="button"
              aria-label="Previous makes"
              className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/35 text-white/70 transition hover:bg-black/70 hover:text-white md:flex"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {makes.map((make) => (
                <Link
                  key={make.name}
                  href={`/cars?make=${encodeURIComponent(make.name)}`}
                  className="group relative flex h-28 items-center justify-center overflow-hidden bg-transparent sm:h-32"
                >
                  <Image
                    src={make.image}
                    alt={`${make.name} vehicles`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain px-5 py-3 opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#16A6B8] transition-all duration-300 group-hover:w-10" />
                </Link>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next makes"
              className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/35 text-white/70 transition hover:bg-black/70 hover:text-white md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-7 flex justify-center gap-1.5">
            <span className="h-1.5 w-5 rounded-full bg-[#16A6B8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="mt-7 text-center sm:hidden">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16A6B8]"
            >
              View all makes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#282828] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F28A2E]">
                Happy customers
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                What our customers say
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <Star className="h-4 w-4 fill-[#F28A2E] text-[#F28A2E]" /> Real
              customer experiences
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {globalTestimonials.slice(0, 6).map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-2xl border border-white/10 bg-[#303030] p-6 transition hover:border-white/20"
              >
                <div className="flex gap-1 text-[#F28A2E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-white/65">
                  “{testimonial.content}”
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-bold">{testimonial.author}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/35">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#303030] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-black">
            <Image
              src={
                newArrivals[1]?.imageUrl ||
                newArrivals[0]?.imageUrl ||
                "https://picsum.photos/seed/icar/1200/800"
              }
              alt="ICar Gezina vehicle"
              fill
              unoptimized
              referrerPolicy="no-referrer"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#16A6B8] shadow-2xl shadow-black/30">
                <Play className="ml-1 h-8 w-8 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur">
              The ICar Gezina experience
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F28A2E]">
              Simple. Affordable. Enjoyable.
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              More than buying a car.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50">
              We believe buying a vehicle should feel straightforward and
              personal. From your first search to finance, delivery and
              after-sales support, our team is here to make the journey easier.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-[#282828] p-4">
                <MapPin className="h-4 w-4 text-[#16A6B8]" />
                <p className="mt-3 text-xs font-bold">Visit us in Gezina</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#282828] p-4">
                <Phone className="h-4 w-4 text-[#16A6B8]" />
                <p className="mt-3 text-xs font-bold">Talk to our team</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-[#282828] transition hover:bg-white/90"
            >
              Contact ICar Gezina <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## File: apps/client/app/(client)/testimonials/page.tsx
```typescript
import Image from "next/image";
import { getCachedTestimonials } from "@/app/_lib/cached-public-data";

export default async function TestimonialsPage() {
  const testimonials = await getCachedTestimonials();

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold italic tracking-tight text-slate-900 uppercase">
            Customer <span className="text-blue-500">Testimonials</span>
          </h1>
          <p className="mt-4 text-slate-600">
            See what our satisfied customers have to say about their experience
            with Icar gezina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm mb-8">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## File: apps/client/app/api/revalidate/route.ts
```typescript
import { revalidationPayloadSchema } from "@icar-gezina/contracts/revalidation";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const authorization = request.headers.get("authorization");
  if (authorization !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = revalidationPayloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { tags, paths, tag, path, mode } = parsed.data;

  for (const value of tags ?? []) {
    revalidateTag(value, mode === "immediate" ? { expire: 0 } : "max");
  }
  if (tag) {
    revalidateTag(tag, mode === "immediate" ? { expire: 0 } : "max");
  }
  for (const value of paths ?? []) {
    revalidatePath(value);
  }
  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

## File: apps/client/app/globals.css
```css
@import "tailwindcss";
```

## File: apps/client/app/layout.tsx
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Icar gezina | Premium Vehicles",
  description:
    "Find your next premium used vehicle with detailed specifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
```

## File: apps/client/components/CarLeadForms.tsx
```typescript
"use client";

import { useState } from "react";
import { submitLead } from "@/app/(client)/actions";

export function CarLeadForms({ carId }: { carId: string }) {
  const [modal, setModal] = useState<"none" | "enquire" | "test_drive">("none");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("carId", carId);
    formData.append("type", modal === "enquire" ? "Enquiry" : "Test Drive");

    const result = await submitLead(formData);
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center">
        <div className="font-bold mb-1">Success!</div>
        <p className="text-sm">
          We&apos;ve received your details. Our team will contact you shortly.
        </p>
        <button
          onClick={() => {
            setModal("none");
            setStatus("idle");
          }}
          className="mt-3 text-xs font-bold uppercase text-green-700 hover:underline"
        >
          Close
        </button>
      </div>
    );
  }

  if (modal === "none") {
    return (
      <div className="space-y-3">
        <button
          onClick={() => setModal("enquire")}
          className="w-full bg-blue-600 text-white font-bold rounded-lg py-3 text-sm shadow-lg shadow-blue-200 transition hover:bg-blue-700"
        >
          Enquire Now
        </button>
        <button
          onClick={() => setModal("test_drive")}
          className="w-full bg-slate-100 text-slate-900 font-bold rounded-lg py-3 text-sm transition hover:bg-slate-200"
        >
          Book a Test Drive
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          {modal === "enquire" ? "Vehicle Enquiry" : "Test Drive Booking"}
        </h4>
        <button
          onClick={() => setModal("none")}
          className="text-slate-400 hover:text-red-500 text-lg leading-none"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-800">
            {errorMessage}
          </div>
        )}
        <div>
          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {modal === "test_drive" && (
          <div>
            <input
              name="preferredDate"
              type="date"
              required
              className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 text-slate-500"
            />
          </div>
        )}

        <div>
          <textarea
            name="message"
            rows={2}
            placeholder="Any specific questions?"
            className="w-full border border-slate-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          disabled={status === "submitting"}
          type="submit"
          className="w-full bg-slate-900 text-white font-bold rounded-lg py-3 text-sm transition hover:bg-slate-800 disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Submit Details"}
        </button>
      </form>
    </div>
  );
}
```

## File: apps/client/components/ContactForm.tsx
```typescript
"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/app/(client)/actions";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-2 text-3xl font-bold text-green-600">
          &#10003; Success!
        </div>
        <p className="text-green-800 mx-auto max-w-sm">
          Thank you for reaching out. We&apos;ve received your message and will
          contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-2xl">
      <div className="border-b border-slate-200 bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Send us a message</h2>
        <p className="mt-2 text-sm text-slate-400">
          Tell us what you need and the ICar Gezina team will get back to you.
        </p>
      </div>
      <div className="p-8 md:p-12">
        {status === "error" && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="type" value="Contact Us" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                Full Name <b className="text-[#E8751A]">*</b>
              </span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
                Phone Number <b className="text-[#E8751A]">*</b>
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="082 123 4567"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
              Email Address <b className="text-[#E8751A]">*</b>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-500">
              Your Message <b className="text-[#E8751A]">*</b>
            </span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="How can we help you?"
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#E8751A] focus:bg-white focus:ring-2 focus:ring-[#E8751A]/10"
            />
          </label>
          <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-400">
              By submitting, you agree that ICar Gezina may contact you
              regarding your enquiry.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-8 py-3.5 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}{" "}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
```

## File: apps/client/components/FinanceForm.tsx
```typescript
"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/app/(client)/actions";

export function FinanceForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = new FormData(e.currentTarget);
    const employment = String(form.get("employment") ?? "");
    const vehicle = String(form.get("vehicle") ?? "");

    const payload = new FormData();
    payload.set("type", "Finance Application");
    payload.set("name", String(form.get("name") ?? ""));
    payload.set("phone", String(form.get("phone") ?? ""));
    payload.set("email", String(form.get("email") ?? ""));
    payload.set(
      "message",
      ["Employment status:", employment, "Vehicle of interest:", vehicle]
        .filter(Boolean)
        .join(" "),
    );

    const result = await submitLead(payload);
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 6000);
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-green-400/20 bg-green-50 p-10 text-center">
        <div className="text-3xl font-black text-green-600">
          &#10003; Submissions received!
        </div>
        <p className="mx-auto mt-2 max-w-sm text-green-800">
          Thanks for your finance enquiry. Our finance team will contact you
          about your application and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[#202020] p-6 shadow-2xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-semibold text-white/65">
          Full name
          <input
            name="name"
            required
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Phone number
          <input
            name="phone"
            required
            type="tel"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Email address
          <input
            name="email"
            required
            type="email"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-[#0072BC]"
          />
        </label>
        <label className="text-xs font-semibold text-white/65">
          Employment status
          <select
            name="employment"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#202020] px-4 text-sm text-white/70 outline-none transition focus:border-[#0072BC]"
          >
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-white/65 sm:col-span-2">
          Vehicle of interest
          <input
            name="vehicle"
            placeholder="e.g. BMW X3"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#0072BC]"
          />
        </label>
      </div>
      {status === "error" && (
        <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-medium text-red-200">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E8751A] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-[#d76712] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit finance enquiry"}{" "}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-center text-[11px] leading-5 text-white/30">
        Submitting this form does not guarantee finance approval. Final approval
        is subject to the relevant lender&apos;s assessment and terms.
      </p>
    </form>
  );
}
```

## File: apps/client/components/WhatsAppButton.tsx
```typescript
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27633320124"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
```

## File: apps/client/hooks/use-mobile.ts
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // eslint-disable-next-line
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## File: apps/client/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## File: apps/client/metadata.json
```json
{
  "name": "Icar gezina",
  "description": "A modern platform for buying and selling certified used cars with detailed specifications and parts.",
  "requestFramePermissions": [],
  "majorCapabilities": []
}
```

## File: apps/client/next-env.d.ts
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## File: apps/client/next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // This allows any path under the hostname
      },
      {
        protocol: "https",
        hostname: "icargezina.co.za",
        port: "",
        pathname: "/**", // This allows any path under the hostname
      },
    ],
  },
  output: "standalone",
  transpilePackages: ["motion"],
  turbopack: {},
  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
```

## File: apps/client/package.json
```json
{
  "name": "@icar-gezina/client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf .next"
  },
  "dependencies": {
    "@google/genai": "catalog:",
    "@hookform/resolvers": "catalog:",
    "@icar-gezina/contracts": "workspace:*",
    "@icar-gezina/supabase": "workspace:*",
    "@supabase/ssr": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "autoprefixer": "catalog:",
    "class-variance-authority": "catalog:",
    "clsx": "catalog:",
    "lucide-react": "catalog:",
    "motion": "catalog:",
    "next": "catalog:",
    "postcss": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:",
    "tailwind-merge": "catalog:"
  },
  "devDependencies": {
    "@biomejs/biome": "catalog:",
    "@tailwindcss/postcss": "catalog:",
    "@tailwindcss/typography": "catalog:",
    "@types/node": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "tailwindcss": "catalog:",
    "tw-animate-css": "catalog:",
    "typescript": "catalog:"
  }
}
```

## File: apps/client/postcss.config.mjs
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
```

## File: apps/client/public/.gitkeep
```

```

## File: apps/client/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## File: packages/contracts/src/contact.ts
```typescript
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  createdAt: z.string().optional(),
});

export type ContactType = z.infer<typeof contactSchema>;
```

## File: packages/contracts/src/env.ts
```typescript
import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  REVALIDATION_SECRET: z.string().min(1),
  NEXT_PUBLIC_CLIENT_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_CLIENT_URL: z.string().url(),
});

export const adminEnvSchema = envSchema.extend({
  CLIENT_REVALIDATION_URL: z.string().url().optional(),
  ICARGEZINA_CLIENT_URL: z.string().url().optional(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type AdminEnv = z.infer<typeof adminEnvSchema>;
```

## File: packages/contracts/src/revalidation.ts
```typescript
import { z } from "zod";

export const revalidationModeSchema = z.enum(["max", "immediate"]);
export type RevalidationMode = z.infer<typeof revalidationModeSchema>;

export const revalidationPayloadSchema = z.object({
  tags: z.array(z.string()).optional(),
  paths: z.array(z.string()).optional(),
  tag: z.string().optional(),
  path: z.string().optional(),
  mode: revalidationModeSchema.optional(),
});

export type RevalidationPayload = z.infer<typeof revalidationPayloadSchema>;
export type RevalidationRequest = RevalidationPayload;
```

## File: packages/contracts/src/service.ts
```typescript
import { z } from "zod";

export const serviceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  price: z.number().optional(),
  createdAt: z.string().optional(),
});

export type ServiceType = z.infer<typeof serviceSchema>;
```

## File: packages/contracts/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "isolatedModules": true
  },
  "include": ["src"]
}
```

## File: packages/supabase/sql/add_articles_table.sql
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  category text,
  excerpt text,
  content text NOT NULL,
  cover_image_url text,
  published boolean DEFAULT false,
  published_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Public read access to published articles
CREATE POLICY "Allow public read on published articles" ON articles FOR SELECT USING (published = true);

-- Only authenticated admins can read drafts, create, update, or delete articles
CREATE POLICY "Allow admin read all articles" ON articles FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin insert on articles" ON articles FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow admin update on articles" ON articles FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin delete on articles" ON articles FOR DELETE USING (auth.role() = 'authenticated');
```

## File: packages/supabase/sql/add_leads_table.sql
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID REFERENCES cars(id) ON DELETE SET NULL,
  type text NOT NULL, -- 'Enquiry', 'Test Drive', 'Contact'
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date text,
  message text,
  status text DEFAULT 'New', -- 'New', 'Contacted', 'Resolved'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (anonymous insert)
CREATE POLICY "Allow public inserts on leads" ON leads FOR INSERT WITH CHECK (true);

-- Only authenticated admins can read, update, or delete leads
CREATE POLICY "Allow admin read on leads" ON leads FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin update on leads" ON leads FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin delete on leads" ON leads FOR DELETE USING (auth.role() = 'authenticated');
```

## File: packages/supabase/sql/icargezina_bucket.sql
```sql
-- Ensure extensions needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the Storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('icargezina', 'icargezina', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public access to icargezina" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'icargezina');

CREATE POLICY "Admin access to insert icargezina" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'icargezina' AND auth.role() = 'authenticated');

CREATE POLICY "Admin access to update icargezina" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'icargezina' AND auth.role() = 'authenticated');

CREATE POLICY "Admin access to delete icargezina" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'icargezina' AND auth.role() = 'authenticated');
```

## File: packages/supabase/sql/mockData.sql
```sql
-- Note: This uses standard UUIDs to ensure relationships work.
-- Remove existing mock data if this script is run multiple times to avoid duplicate key errors.
DELETE FROM cars WHERE id IN (
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  '33333333-3333-3333-3333-333333333333',
  '44444444-4444-4444-4444-444444444444',
  '55555555-5555-5555-5555-555555555555',
  '66666666-6666-6666-6666-666666666666'
);
DELETE FROM testimonials WHERE author IN ('Mark J.', 'Sarah M.', 'Johan D.');

WITH inserted_cars AS (
  INSERT INTO cars (id, make, model, year, price, mileage, fuel_type, transmission, body_type, color, image_url, gallery_urls, description, features)
  VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Volkswagen', 'Polo 1.0 TSI Comfortline', 2021, 289900, 45000, 'Petrol', 'Manual', 'Hatchback', 'Pure White', 'https://picsum.photos/seed/vwpolo/800/600', ARRAY['https://picsum.photos/seed/vwpolo/800/600', 'https://picsum.photos/seed/vwpolo-2/800/600', 'https://picsum.photos/seed/vwpolo-3/800/600'], 'A pristine condition Volkswagen Polo, carefully maintained by a single owner. This economical hatchback delivers excellent fuel efficiency and a comfortable ride, packed with modern safety and entertainment features perfect for city commutes and long road trips alike.', ARRAY['Bluetooth Audio', 'Air Conditioning', 'Power Steering', 'Electric Windows', 'ABS Brakes', 'Touch Screen Display', 'Multi-function Steering Wheel']),
    ('22222222-2222-2222-2222-222222222222', 'Ford', 'Ranger 2.0 Bi-Turbo Double Cab Wildtrak', 2022, 769000, 32000, 'Diesel', 'Automatic', 'Bakkie', 'Saber Orange', 'https://picsum.photos/seed/fordranger/800/600', ARRAY['https://picsum.photos/seed/fordranger/800/600', 'https://picsum.photos/seed/fordranger-interior/800/600', 'https://picsum.photos/seed/fordranger-back/800/600'], 'The ultimate adventure vehicle. This Ford Ranger Wildtrak combines off-road capability with luxury interior comfort. Fully accessorized and ready for any terrain.', ARRAY['4x4', 'Navigation System', 'Leather Seats', 'Tow Bar', 'Roll Bar', 'Keyless Entry', 'Adaptive Cruise Control', 'Apple CarPlay/Android Auto']),
    ('33333333-3333-3333-3333-333333333333', 'Toyota', 'Fortuner 2.8 GD-6 VX Auto', 2023, 899900, 15600, 'Diesel', 'Automatic', 'SUV', 'Attitude Black', 'https://picsum.photos/seed/fortuner/800/600', ARRAY['https://picsum.photos/seed/fortuner/800/600', 'https://picsum.photos/seed/fortuner-2/800/600'], 'Practically brand new Toyota Fortuner VX. Top of the range with all the bells and whistles. Seven seats, unmatched reliability, and premium comfort.', ARRAY['7 Seater', 'JBL Sound System', 'Panoramic View Monitor', 'Lane Departure Alert', 'Power Tailgate']),
    ('44444444-4444-4444-4444-444444444444', 'Audi', 'A4 40 TFSI S Line Auto', 2020, 459000, 68000, 'Petrol', 'Automatic', 'Sedan', 'Daytona Grey', 'https://picsum.photos/seed/audia4/800/600', ARRAY['https://picsum.photos/seed/audia4/800/600', 'https://picsum.photos/seed/audia4-2/800/600'], 'Sleek, sophisticated, and sporty. This Audi A4 S Line offers brilliant performance, a premium interior cabin, and advanced technology for an exceptional driving dynamic.', ARRAY['Virtual Cockpit', 'Sunroof', 'Matrix LED Headlights', 'Sport Seats', 'Bang & Olufsen Sound System']),
    ('55555555-5555-5555-5555-555555555555', 'BMW', '3 Series 320d M Sport', 2021, 529000, 54000, 'Diesel', 'Automatic', 'Sedan', 'Alpine White', 'https://picsum.photos/seed/bmw320/800/600', ARRAY['https://picsum.photos/seed/bmw320/800/600'], 'Iconic BMW 3 Series with the highly sought-after M Sport package. Excellent fuel economy combined with sporty aesthetics.', ARRAY['M Sport Package', 'Ambient Lighting', 'Live Cockpit Professional', 'Reverse Camera', 'Parking Assist']),
    ('66666666-6666-6666-6666-666666666666', 'Toyota', 'Starlet 1.4 XR', 2022, 239000, 28000, 'Petrol', 'Manual', 'Hatchback', 'Shadow Grey', 'https://picsum.photos/seed/starlet/800/600', ARRAY['https://picsum.photos/seed/starlet/800/600'], 'Reliable and spacious compact hatchback. The Toyota Starlet is perfect for first-time buyers or anyone looking for a dependable daily commuter.', ARRAY['Alloy Wheels', 'Push Button Start', 'Reverse Camera', 'Apple CarPlay', 'Cruise Control'])
  RETURNING id
)
SELECT * FROM inserted_cars;


INSERT INTO car_parts (car_id, name, condition, description)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Engine', 'Excellent', 'Runs perfectly, recent major service.'),
  ('11111111-1111-1111-1111-111111111111', 'Transmission', 'Excellent', 'Smooth shifting, clutch in great condition.'),
  ('11111111-1111-1111-1111-111111111111', 'Brakes', 'Good', 'Pads have 60% life remaining.'),
  ('11111111-1111-1111-1111-111111111111', 'Tires', 'Excellent', 'Brand new set of premium tires fitted 1000km ago.'),
  ('11111111-1111-1111-1111-111111111111', 'Interior', 'Excellent', 'No tears or stains on upholstery.'),
  ('11111111-1111-1111-1111-111111111111', 'Suspension', 'Good', 'No knocks or squeaks.'),
  ('22222222-2222-2222-2222-222222222222', 'Engine', 'Excellent', 'Bi-turbo pulls strong, fully serviced.'),
  ('22222222-2222-2222-2222-222222222222', 'Transmission', 'Excellent', '10-speed auto is flawless.'),
  ('22222222-2222-2222-2222-222222222222', 'Brakes', 'Excellent', 'Recently replaced front pads and discs.'),
  ('22222222-2222-2222-2222-222222222222', 'Tires', 'Good', 'All-terrain tires with 70% tread.'),
  ('22222222-2222-2222-2222-222222222222', '4x4 System', 'Excellent', 'Tested and fully operational.'),
  ('33333333-3333-3333-3333-333333333333', 'Engine', 'Excellent', 'Like new.'),
  ('33333333-3333-3333-3333-333333333333', 'Transmission', 'Excellent', 'Like new.'),
  ('33333333-3333-3333-3333-333333333333', 'Interior', 'Excellent', 'Still has the new car smell.'),
  ('44444444-4444-4444-4444-444444444444', 'Engine', 'Good', 'Serviced regularly at Audi.'),
  ('44444444-4444-4444-4444-444444444444', 'Transmission', 'Excellent', 'DSG shifts incredibly fast.'),
  ('44444444-4444-4444-4444-444444444444', 'Brakes', 'Good', 'Standard wear.'),
  ('44444444-4444-4444-4444-444444444444', 'Exterior', 'Good', 'Minor scratch on the rear bumper, polished out.'),
  ('55555555-5555-5555-5555-555555555555', 'Engine', 'Excellent', 'Outstanding torque and economy.'),
  ('55555555-5555-5555-5555-555555555555', 'Transmission', 'Excellent', 'ZF 8-speed is perfect.'),
  ('66666666-6666-6666-6666-666666666666', 'Overall', 'Excellent', 'Full service history, near perfect condition.');


INSERT INTO car_reviews (car_id, author, rating, comment, date)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Michael T.', 5, 'Car was exactly as described. Great buying experience.', '2023-11-12'),
  ('11111111-1111-1111-1111-111111111111', 'Sarah L.', 4, 'Very clean vehicle, slightly higher consumption than expected but overall very happy.', '2024-01-05'),
  ('22222222-2222-2222-2222-222222222222', 'David W.', 5, 'Incredible machine. Dealership was very transparent about the vehicle history.', '2024-02-20'),
  ('44444444-4444-4444-4444-444444444444', 'Jessica R.', 5, 'Beautiful car, exactly what I was looking for.', '2023-12-10');

INSERT INTO testimonials (author, role, content, avatar)
VALUES
  ('Mark J.', 'Verified Buyer', 'Bought a Ford Ranger and the experience was seamless from start to finish. Highly recommend Auto Market.', 'https://picsum.photos/seed/user1/100/100'),
  ('Sarah M.', 'Verified Buyer', 'I loved being able to see the detailed condition of the car parts before visiting. It saved me so much time!', 'https://picsum.photos/seed/user2/100/100'),
  ('Johan D.', 'Verified Buyer', 'The 116-point check gave me peace of mind. Traded my old Polo in for a newer model without a single hiccup.', 'https://picsum.photos/seed/user3/100/100');
```

## File: packages/supabase/sql/schema.sql
```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Custom Types
CREATE TYPE car_condition AS ENUM ('Excellent', 'Good', 'Fair', 'Needs Replacement');

-- Tables
CREATE TABLE cars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price INTEGER NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type TEXT NOT NULL,
  transmission TEXT NOT NULL,
  body_type TEXT NOT NULL,
  color TEXT NOT NULL,
  image_url TEXT NOT NULL,
  gallery_urls TEXT[] NOT NULL DEFAULT '{}',
  description TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE car_parts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  condition car_condition NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE car_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) - Admins have full access via Service Role or Auth, public has read-only.
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE car_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE car_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON cars FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON car_parts FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON car_reviews FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON testimonials FOR SELECT USING (true);

-- Allow authenticated users (Admins) to do everything
CREATE POLICY "Admins have full access" ON cars TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON car_parts TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON car_reviews TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON testimonials TO authenticated USING (true) WITH CHECK (true);
```

## File: packages/supabase/src/auth.ts
```typescript
import { createSupabaseServerClient } from "./server";

export async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");

  if (adminError || isAdmin !== true) {
    throw new Error("Forbidden");
  }

  return user;
}
```

## File: packages/supabase/src/cache.ts
```typescript
import type { RevalidationRequest } from "@icar-gezina/contracts/revalidation";

export const CACHE_TAGS = {
  cars: "cars",
  car: (id: string) => `car:${id}`,
  testimonials: "testimonials",
  articles: "articles",
} as const;

export const CACHE_PATHS = {
  home: "/",
  cars: "/cars",
  carDetail: (id: string) => `/cars/${id}`,
  testimonials: "/testimonials",
} as const;

export interface MutationResult<T> {
  data: T;
  revalidate: RevalidationRequest;
}

export function mutationResult<T>(
  data: T,
  revalidate: RevalidationRequest,
): MutationResult<T> {
  return { data, revalidate };
}
```

## File: packages/supabase/src/client.ts
```typescript
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const createSupabaseBrowserClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
};
```

## File: packages/supabase/src/Mutations/articles.ts
```typescript
import type { ArticleType } from "@icar-gezina/contracts/article";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type ArticleInsertPayload = Omit<ArticleType, "id" | "createdAt">;

export async function createArticle(data: ArticleInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: article, error } = await supabase
    .from("articles")
    .insert({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt ?? null,
      content: data.content,
      category: data.category ?? null,
      cover_image_url: data.coverImageUrl ?? null,
      published: data.published,
      published_at: data.publishedAt ?? null,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create article: ${error.message}`);
  }

  return article;
}

export async function updateArticle(id: string, data: ArticleInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("articles")
    .update({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt ?? null,
      content: data.content,
      category: data.category ?? null,
      cover_image_url: data.coverImageUrl ?? null,
      published: data.published,
      published_at: data.publishedAt ?? null,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update article: ${error.message}`);
  }

  return { id };
}

export async function deleteArticle(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete article: ${error.message}`);
  }

  return { id };
}
```

## File: packages/supabase/src/Mutations/carParts.ts
```typescript
import type { CarPartType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarPartInsertPayload = Omit<CarPartType, "id"> & {
  carId: string;
};

export async function createCarPart(data: CarPartInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: part, error } = await supabase
    .from("car_parts")
    .insert({
      car_id: data.carId,
      name: data.name,
      condition: data.condition,
      description: data.description,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create car part: ${error.message}`);
  }

  return part;
}

export async function updateCarPart(id: string, data: CarPartInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("car_parts")
    .update({
      car_id: data.carId,
      name: data.name,
      condition: data.condition,
      description: data.description,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update car part: ${error.message}`);
  }

  return { id };
}

export async function deleteCarPart(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("car_parts")
    .select("car_id")
    .eq("id", id)
    .maybeSingle();
  const { error } = await supabase.from("car_parts").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete car part: ${error.message}`);
  }

  return { id, carId: data?.car_id ?? undefined };
}
```

## File: packages/supabase/src/Mutations/cars.ts
```typescript
import type { CarType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarInsertPayload = Omit<
  CarType,
  "id" | "createdAt" | "parts" | "reviews"
>;

export async function createCar(data: CarInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: car, error } = await supabase
    .from("cars")
    .insert({
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      mileage: data.mileage,
      fuel_type: data.fuelType,
      transmission: data.transmission,
      body_type: data.bodyType,
      color: data.color,
      image_url: data.imageUrl,
      gallery_urls: data.galleryUrls,
      description: data.description,
      features: data.features,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create vehicle: ${error.message}`);
  }

  return car;
}

export async function updateCar(id: string, data: CarInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: car, error } = await supabase
    .from("cars")
    .update({
      make: data.make,
      model: data.model,
      year: data.year,
      price: data.price,
      mileage: data.mileage,
      fuel_type: data.fuelType,
      transmission: data.transmission,
      body_type: data.bodyType,
      color: data.color,
      image_url: data.imageUrl,
      gallery_urls: data.galleryUrls,
      description: data.description,
      features: data.features,
    })
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to update vehicle: ${error.message}`);
  }

  return car;
}

export async function deleteCar(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete vehicle: ${error.message}`);
  }

  return { id };
}
```

## File: packages/supabase/src/Mutations/reviews.ts
```typescript
import type { CarReviewType } from "@icar-gezina/contracts/car";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type CarReviewInsertPayload = Omit<CarReviewType, "id"> & {
  carId: string;
};

export async function createCarReview(data: CarReviewInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: review, error } = await supabase
    .from("car_reviews")
    .insert({
      car_id: data.carId,
      author: data.author,
      rating: data.rating,
      comment: data.comment,
      date: data.date,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create review: ${error.message}`);
  }

  return review;
}

export async function updateCarReview(
  id: string,
  data: CarReviewInsertPayload,
) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("car_reviews")
    .update({
      car_id: data.carId,
      author: data.author,
      rating: data.rating,
      comment: data.comment,
      date: data.date,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update review: ${error.message}`);
  }

  return { id };
}

export async function deleteCarReview(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("car_reviews")
    .select("car_id")
    .eq("id", id)
    .maybeSingle();
  const { error } = await supabase.from("car_reviews").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete review: ${error.message}`);
  }

  return { id, carId: data?.car_id ?? undefined };
}
```

## File: packages/supabase/src/Mutations/testimonials.ts
```typescript
import type { TestimonialType } from "@icar-gezina/contracts/testimonial";
import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export type TestimonialInsertPayload = Omit<
  TestimonialType,
  "id" | "createdAt"
>;

export async function createTestimonial(data: TestimonialInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: testimonial, error } = await supabase
    .from("testimonials")
    .insert({
      author: data.author,
      role: data.role,
      content: data.content,
      avatar: data.avatar,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create testimonial: ${error.message}`);
  }

  return testimonial;
}

export async function updateTestimonial(
  id: string,
  data: TestimonialInsertPayload,
) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("testimonials")
    .update({
      author: data.author,
      role: data.role,
      content: data.content,
      avatar: data.avatar,
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update testimonial: ${error.message}`);
  }

  return { id };
}

export async function deleteTestimonial(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete testimonial: ${error.message}`);
  }

  return { id };
}
```

## File: packages/supabase/src/server.ts
```typescript
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { Database } from "./supabaseType";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot write cookies. Server Actions and Route
          // Handlers can, so refreshed sessions are persisted where supported.
        }
      },
    },
  });
}

export function createSupabasePublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { supabase, user: null, profile: null };

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, username, avatar_url, is_admin")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) return { supabase, user, profile: null };

  return { supabase, user, profile };
}
```

## File: packages/supabase/src/session.ts
```typescript
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const _supabase = createServerClient<Database>(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );

        supabaseResponse = NextResponse.next({
          request,
        });

        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  return supabaseResponse;
};

export async function updateSession(request: NextRequest) {
  return createClient(request);
}
```

## File: packages/supabase/src/supabaseType.ts
```typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      cars: {
        Row: {
          id: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls: string[];
          description: string;
          features: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls?: string[];
          description: string;
          features?: string[];
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls: string[];
          description: string;
          features: string[];
          created_at: string;
        }>;
        Relationships: [];
      };
      car_parts: {
        Row: {
          id: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      car_reviews: {
        Row: {
          id: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      testimonials: {
        Row: {
          id: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      leads: {
        Row: {
          id: string;
          car_id: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string | null;
          message: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id?: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date?: string | null;
          message?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string | null;
          message: string | null;
          status: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          category: string | null;
          excerpt: string | null;
          content: string;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          category?: string | null;
          excerpt?: string | null;
          content: string;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          title: string;
          slug: string;
          category: string | null;
          excerpt: string | null;
          content: string;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
        }>;
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
          avatar_url: string | null;
          is_admin: boolean;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
        };
        Update: Partial<{
          id: string;
          username: string | null;
          avatar_url: string | null;
          is_admin: boolean;
        }>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      car_condition: ("Excellent" | "Good" | "Fair" | "Needs Replacement")[];
    };
    CompositeTypes: Record<string, never>;
  };
};
```

## File: packages/supabase/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "isolatedModules": true
  },
  "include": ["src"]
}
```

## File: .gitignore
```
node_modules/
.next/
.turbo/
*.tsbuildinfo
coverage/
.DS_Store
*.log
.env*
!.env.example
.vercel
```

## File: apps/admin/app/[resource]/new/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createRecord } from "../../crud-actions";
import { getResource } from "../../resource-config";
import { ResourceForm } from "../../resource-form";

const valid = new Set([
  "leads",
  "reviews",
  "testimonials",
  "car-parts",
  "articles",
]);

export default async function NewResourcePage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { user, profile, supabase } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  const { resource } = await params;
  const config = getResource(resource);
  if (!config || !valid.has(resource)) notFound();
  const { data: cars } = await supabase
    .from("cars")
    .select("id,make,model,year")
    .order("make")
    .order("model");
  return (
    <>
      <div className="page-header">
        <div>
          <Link href={`/${resource}`} className="topbar-link">
            ← Back
          </Link>
          <h1>New {config.label.slice(0, -1)}</h1>
          <p>Create a new record in Supabase PHB.</p>
        </div>
      </div>
      <section className="panel">
        <ResourceForm
          resource={resource as any}
          action={createRecord}
          cars={cars ?? []}
        />
      </section>
    </>
  );
}
```

## File: apps/admin/app/admin/[...path]/page.tsx
```typescript
import { redirect } from "next/navigation";

const redirects: Record<string, string> = {
  dashboard: "/dashboard",
  inventory: "/inventory",
  leads: "/leads",
  reviews: "/reviews",
  testimonials: "/testimonials",
  "car-parts": "/car-parts",
  articles: "/articles",
  settings: "/settings",
};

export default async function LegacyAdminRoute({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path } = await params;
  const key = path.join("/");
  if (redirects[key]) redirect(redirects[key]);
  redirect("/dashboard");
}
```

## File: apps/admin/app/delete-form.tsx
```typescript
"use client";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { Trash2 } from "lucide-react";

type FormAction = (formData: FormData) => Promise<ActionResult>;

export function DeleteForm({
  action,
  id,
  resourceName,
}: {
  action: FormAction;
  id: string;
  resourceName: string;
}) {
  async function handleSubmit(formData: FormData) {
    await action(formData);
  }

  return (
    <form action={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      {resourceName && (
        <input type="hidden" name="resource" value={resourceName} />
      )}
      <button className="button danger" type="submit">
        <Trash2 size={15} /> Delete
      </button>
    </form>
  );
}
```

## File: apps/admin/app/inventory/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { CarFront, Eye, Plus, Search } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DeleteVehicleButton } from "./delete-button";

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { supabase, user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");

  const rawQuery = (await searchParams).q?.trim() ?? "";
  const q = rawQuery.replace(/[^a-zA-Z0-9\s-]/g, " ").trim();
  let query = supabase
    .from("cars")
    .select(
      "id,make,model,year,price,mileage,fuel_type,transmission,body_type,image_url,created_at",
    )
    .order("created_at", { ascending: false });
  if (q)
    query = query.or(
      `make.ilike.%${q}%,model.ilike.%${q}%,body_type.ilike.%${q}%`,
    );
  const { data: vehicles, error } = await query;

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Vehicles</h1>
          <p>Manage the vehicles displayed across the ICar Gezina showroom.</p>
        </div>
        <Link href="/inventory/new" className="button">
          <Plus size={16} /> Add vehicle
        </Link>
      </div>
      <form className="inventory-toolbar" method="get">
        <div style={{ position: "relative", flex: 1 }}>
          <Search
            size={15}
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              color: "#9ca3af",
            }}
          />
          <input
            className="search"
            name="q"
            defaultValue={rawQuery}
            style={{ paddingLeft: 36 }}
            placeholder="Search make, model, body type..."
            aria-label="Search vehicles"
          />
        </div>
        <button className="button secondary" type="submit">
          Search
        </button>
        {rawQuery && (
          <Link href="/inventory" className="button secondary">
            Clear
          </Link>
        )}
      </form>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Year</th>
              <th>Price</th>
              <th>Mileage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td colSpan={5}>Unable to load vehicles: {error.message}</td>
              </tr>
            )}
            {(vehicles ?? []).map((vehicle) => (
              <tr key={vehicle.id}>
                <td>
                  <div className="vehicle-cell">
                    <div className="vehicle-thumb">
                      {vehicle.image_url ? (
                        <img
                          src={vehicle.image_url}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <CarFront size={20} />
                      )}
                    </div>
                    <div>
                      <div className="vehicle-name">
                        {vehicle.make} {vehicle.model}
                      </div>
                      <div className="vehicle-meta">
                        {vehicle.body_type || "Body type not set"} ·{" "}
                        {vehicle.fuel_type || "Fuel not set"} ·{" "}
                        {vehicle.transmission || "Transmission not set"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{vehicle.year || "—"}</td>
                <td>R {Number(vehicle.price || 0).toLocaleString("en-ZA")}</td>
                <td>
                  {Number(vehicle.mileage || 0).toLocaleString("en-ZA")} km
                </td>
                <td>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link
                      href={`/inventory/${vehicle.id}`}
                      className="button secondary"
                      style={{ padding: "8px 10px" }}
                    >
                      <Eye size={14} /> View
                    </Link>
                    <Link
                      href={`/inventory/${vehicle.id}/edit`}
                      className="button secondary"
                      style={{ padding: "8px 10px" }}
                    >
                      Edit
                    </Link>
                    <DeleteVehicleButton
                      id={vehicle.id}
                      name={`${vehicle.make} ${vehicle.model}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!error && !vehicles?.length && (
              <tr>
                <td colSpan={5}>
                  <div style={{ padding: "28px 0", textAlign: "center" }}>
                    <strong>No vehicles found.</strong>
                    <p>
                      {q
                        ? "Try another search."
                        : "Add your first vehicle to start building inventory."}
                    </p>
                    {!q && (
                      <Link href="/inventory/new" className="button">
                        <Plus size={16} /> Add vehicle
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
```

## File: apps/admin/app/lead-edit-styles.tsx
```typescript
"use client";

export function LeadEditStyles() {
  return (
    <style jsx global>{`
    .lead-edit-shell{display:grid;grid-template-columns:minmax(0,1fr) 350px;gap:20px;align-items:start}
    .lead-edit-context{display:grid;gap:20px;position:sticky;top:92px}
    .lead-edit-form-card{padding:0;overflow:hidden}
    .lead-edit-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 24px;border-bottom:1px solid #e5e7eb;background:#fff}
    .lead-edit-heading h2{margin:6px 0 0;font-size:22px;line-height:1.15;letter-spacing:-.03em;color:#111827}
    .lead-edit-heading p{margin:6px 0 0;max-width:640px;color:#6b7280;font-size:11px;line-height:1.6}
    .lead-id-badge{background:#111827;color:#fff;padding:8px 10px;font:700 10px/1 monospace;letter-spacing:.08em}
    .lead-edit-form-card :global(.form-grid){padding:24px}
    .lead-edit-form-card :global(.form-actions){position:sticky;bottom:0;z-index:5;display:flex;justify-content:flex-end;padding:16px 24px;background:rgba(247,248,249,.96);border-top:1px solid #e5e7eb;backdrop-filter:blur(8px);margin:0}
    .lead-edit-form-card :global(.form-actions .button){min-height:44px;padding:0 20px;background:#e65b1f;border-radius:0;text-transform:uppercase;letter-spacing:.08em;font-size:10px}
    .lead-context-card{padding:20px}
    .lead-context-card h3{margin:6px 0 0;font-size:15px;color:#111827}
    .lead-step{display:grid;grid-template-columns:28px 1fr;gap:10px;padding:14px 0;border-bottom:1px solid #edf0f2}
    .lead-step b{width:28px;height:28px;display:grid;place-items:center;background:#18212b;color:#fff;font-size:9px}
    .lead-step strong{display:block;color:#374151;font-size:11px}.lead-step span{display:block;margin-top:4px;color:#8a929d;font-size:9px;line-height:1.5}
    .lead-note{margin-top:14px;padding:11px 12px;background:#fff8e8;border:1px solid #f1dfb1;color:#8b6c26;font-size:9px;line-height:1.6}
    @media(max-width:1000px){.lead-edit-shell{grid-template-columns:1fr}.lead-edit-context{position:static;grid-template-columns:1fr 1fr}}
    @media(max-width:640px){.lead-edit-context{grid-template-columns:1fr}.lead-edit-heading{padding:18px;flex-direction:column}.lead-edit-form-card :global(.form-grid){padding:18px}.lead-edit-form-card :global(.form-actions){padding:12px 18px}.lead-edit-form-card :global(.form-actions .button){width:100%}}
  `}</style>
  );
}
```

## File: apps/admin/app/lead-vehicle-details.tsx
```typescript
"use client";

import {
  CarFront,
  ExternalLink,
  Fuel,
  Gauge,
  Palette,
  Settings2,
} from "lucide-react";
import Link from "next/link";

type LeadVehicle = {
  id: string;
  make?: string | null;
  model?: string | null;
  year?: number | null;
  price?: number | null;
  mileage?: number | null;
  fuel_type?: string | null;
  transmission?: string | null;
  body_type?: string | null;
  color?: string | null;
  image_url?: string | null;
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0
    ? `R ${amount.toLocaleString("en-ZA")}`
    : "—";
}

function number(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0
    ? `${amount.toLocaleString("en-ZA")} km`
    : "—";
}

export function LeadVehicleDetails({
  vehicle,
}: {
  vehicle?: LeadVehicle | null;
}) {
  if (!vehicle) {
    return (
      <section className="lead-vehicle-card lead-vehicle-empty">
        <div className="lead-vehicle-empty-icon">
          <CarFront size={20} />
        </div>
        <div>
          <span className="lead-vehicle-kicker">Vehicle details</span>
          <h3>No vehicle linked</h3>
          <p>
            This lead is not currently associated with a vehicle in the
            inventory.
          </p>
        </div>
      </section>
    );
  }

  const title =
    `${vehicle.year ?? ""} ${vehicle.make ?? ""} ${vehicle.model ?? ""}`
      .replace(/\s+/g, " ")
      .trim();

  const specs = [
    [Gauge, "Mileage", number(vehicle.mileage)],
    [Settings2, "Transmission", vehicle.transmission || "—"],
    [Fuel, "Fuel", vehicle.fuel_type || "—"],
    [CarFront, "Body type", vehicle.body_type || "—"],
    [Palette, "Colour", vehicle.color || "—"],
  ] as const;

  return (
    <section className="lead-vehicle-card">
      <div className="lead-vehicle-top">
        <div className="lead-vehicle-photo">
          {vehicle.image_url ? (
            <img src={vehicle.image_url} alt="" />
          ) : (
            <CarFront size={28} />
          )}
        </div>
        <div className="lead-vehicle-main">
          <span className="lead-vehicle-kicker">Vehicle details</span>
          <h3>{title || "Vehicle"}</h3>
          <div className="lead-vehicle-price">{money(vehicle.price)}</div>
        </div>
        <Link href={`/inventory/${vehicle.id}`} className="lead-vehicle-open">
          Open vehicle <ExternalLink size={13} />
        </Link>
      </div>
      <div className="lead-vehicle-specs">
        {specs.map(([Icon, label, value]) => (
          <div className="lead-vehicle-spec" key={label}>
            <Icon size={14} />
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LeadVehicleDetailsStyles() {
  return (
    <style jsx global>{`
    .lead-vehicle-card{margin:18px 0;background:#fff;border:1px solid #e5e7eb;border-radius:9px;overflow:hidden}
    .lead-vehicle-top{display:flex;align-items:center;gap:16px;padding:18px 20px;background:#18212b;color:#fff}
    .lead-vehicle-photo{width:88px;height:64px;flex:0 0 88px;background:#26313d;display:grid;place-items:center;color:#7f8a97;overflow:hidden}
    .lead-vehicle-photo img{width:100%;height:100%;object-fit:cover;display:block}
    .lead-vehicle-main{min-width:0;flex:1}
    .lead-vehicle-kicker{display:block;color:#aeb7c4;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.16em}
    .lead-vehicle-main h3{margin:4px 0 0;font-size:17px;line-height:1.2;font-weight:800;letter-spacing:-.02em}
    .lead-vehicle-price{margin-top:5px;color:#e65b1f;font-size:13px;font-weight:800}
    .lead-vehicle-open{display:inline-flex;align-items:center;gap:6px;flex:0 0 auto;border:1px solid #3c4855;padding:9px 12px;color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}
    .lead-vehicle-open:hover{border-color:#e65b1f;color:#f3c1a8}
    .lead-vehicle-specs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid #e5e7eb}
    .lead-vehicle-spec{display:flex;align-items:center;gap:9px;padding:13px 15px;border-right:1px solid #eef0f2}
    .lead-vehicle-spec:last-child{border-right:0}.lead-vehicle-spec>svg{color:#e65b1f;flex:0 0 auto}
    .lead-vehicle-spec span{display:block;color:#8a929d;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}
    .lead-vehicle-spec strong{display:block;margin-top:3px;color:#303841;font-size:10px;font-weight:800}
    .lead-vehicle-empty{display:flex;align-items:center;gap:14px;padding:18px 20px}.lead-vehicle-empty-icon{width:42px;height:42px;display:grid;place-items:center;background:#f5f6f8;color:#9aa2ab;flex:0 0 42px}.lead-vehicle-empty h3{margin:4px 0 0;font-size:14px}.lead-vehicle-empty p{margin:4px 0 0;color:#7b8490;font-size:10px}
    @media(max-width:900px){.lead-vehicle-specs{grid-template-columns:repeat(2,minmax(0,1fr))}.lead-vehicle-spec:nth-child(2n){border-right:0}.lead-vehicle-open{display:none}}
    @media(max-width:640px){.lead-vehicle-top{align-items:flex-start}.lead-vehicle-photo{width:72px;height:54px;flex-basis:72px}.lead-vehicle-main h3{font-size:14px}.lead-vehicle-specs{grid-template-columns:1fr}.lead-vehicle-spec{border-right:0;border-bottom:1px solid #eef0f2}.lead-vehicle-spec:last-child{border-bottom:0}}
  `}</style>
  );
}
```

## File: apps/admin/app/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminHomePage() {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  redirect("/dashboard");
}
```

## File: apps/admin/app/settings/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Administrator and application configuration.</p>
        </div>
      </div>
      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Administrator</h2>
              <p>Authenticated Supabase profile.</p>
            </div>
          </div>
          <div className="panel-body">
            <div className="detail-fields">
              <div>
                <span>Username</span>
                <strong>{profile.username}</strong>
              </div>
              <div>
                <span>Admin access</span>
                <strong>Enabled</strong>
              </div>
              <div>
                <span>User ID</span>
                <strong style={{ overflowWrap: "anywhere" }}>{user.id}</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Data source</h2>
              <p>Connected dealership database.</p>
            </div>
          </div>
          <div className="panel-body">
            <p>
              <strong>Supabase PHB</strong>
            </p>
            <p>
              Vehicles, leads, reviews, testimonials, inspections and articles
              are managed through the protected admin workspace.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
```

## File: apps/admin/package.json
```json
{
  "name": "@icar-gezina/admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf .next"
  },
  "dependencies": {
    "@icar-gezina/contracts": "workspace:*",
    "@icar-gezina/supabase": "workspace:*",
    "@supabase/ssr": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "lucide-react": "catalog:",
    "next": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:"
  },
  "devDependencies": {
    "@biomejs/biome": "catalog:",
    "@tailwindcss/postcss": "catalog:",
    "@types/node": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "tailwindcss": "catalog:",
    "typescript": "catalog:"
  }
}
```

## File: apps/client/app/(client)/cars/inventory-client.tsx
```typescript
"use client";

import type { CarType } from "@icar-gezina/contracts/car";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function CarsInventoryClient({ cars }: { cars: CarType[] }) {
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [bodyFilter, setBodyFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const uniqueMakes = useMemo(
    () => Array.from(new Set(cars.map((car) => car.make))).sort(),
    [cars],
  );
  const uniqueYears = useMemo(
    () =>
      Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => b - a),
    [cars],
  );
  const uniqueBodies = useMemo(
    () => Array.from(new Set(cars.map((car) => car.bodyType))).sort(),
    [cars],
  );

  const filteredCars = useMemo(
    () =>
      cars.filter((car) => {
        if (makeFilter && car.make !== makeFilter) return false;
        if (
          modelFilter &&
          !`${car.make} ${car.model}`
            .toLowerCase()
            .includes(modelFilter.toLowerCase())
        )
          return false;
        if (yearFilter && car.year.toString() !== yearFilter) return false;
        if (bodyFilter && car.bodyType !== bodyFilter) return false;
        if (maxPrice && car.price > Number(maxPrice)) return false;
        return true;
      }),
    [cars, makeFilter, modelFilter, yearFilter, bodyFilter, maxPrice],
  );

  const clearFilters = () => {
    setMakeFilter("");
    setModelFilter("");
    setYearFilter("");
    setBodyFilter("");
    setMaxPrice("");
  };

  const hasFilters = Boolean(
    makeFilter || modelFilter || yearFilter || bodyFilter || maxPrice,
  );

  return (
    <div className="min-h-screen bg-[#171717] pb-20 text-white">
      <section
        className="relative min-h-[490px] overflow-hidden bg-[#111]"
        style={{
          backgroundImage:
            "url('https://img.autotrader.co.za/45276051/Fit1280x960')",
          backgroundPosition: "center 58%",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-[#171717]" />
        <div className="relative mx-auto flex min-h-[490px] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E8751A]">
              ICar Gezina Showroom
            </p>
            <h1 className="text-5xl font-bold tracking-[-0.045em] text-white sm:text-6xl lg:text-[58px] lg:leading-[1.02]">
              Find the right car
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Whether you&apos;re after efficiency, space, or performance,
              browse our live inventory and find the car that fits your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-20 -mt-1 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#1f1f1f] p-5 shadow-2xl sm:p-6 lg:p-7">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">
                Vehicle search
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Search our inventory
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>
          <div
            className={`${filtersOpen ? "grid" : "hidden"} grid-cols-1 gap-3 md:grid-cols-2 lg:grid lg:grid-cols-5`}
          >
            <label className="relative block">
              <span className="sr-only">Make</span>
              <select
                value={makeFilter}
                onChange={(e) => setMakeFilter(e.target.value)}
                className="h-12 w-full appearance-none rounded-lg bg-white px-4 pr-10 text-sm font-medium text-[#333]"
              >
                <option value="">Make</option>
                {uniqueMakes.map((make) => (
                  <option key={make}>{make}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>
            <label className="block">
              <span className="sr-only">Model</span>
              <input
                value={modelFilter}
                onChange={(e) => setModelFilter(e.target.value)}
                placeholder="Model"
                className="h-12 w-full rounded-lg bg-white px-4 text-sm font-medium text-[#333] placeholder:text-black/40"
              />
            </label>
            <label className="relative block">
              <span className="sr-only">Year</span>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="h-12 w-full appearance-none rounded-lg bg-white px-4 pr-10 text-sm font-medium text-[#333]"
              >
                <option value="">Year</option>
                {uniqueYears.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>
            <label className="relative block">
              <span className="sr-only">Body type</span>
              <select
                value={bodyFilter}
                onChange={(e) => setBodyFilter(e.target.value)}
                className="h-12 w-full appearance-none rounded-lg bg-white px-4 pr-10 text-sm font-medium text-[#333]"
              >
                <option value="">Body Type</option>
                {uniqueBodies.map((body) => (
                  <option key={body}>{body}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>
            <label className="relative block">
              <span className="sr-only">Maximum price</span>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="h-12 w-full appearance-none rounded-lg bg-white px-4 pr-10 text-sm font-medium text-[#333]"
              >
                <option value="">Max Price</option>
                <option value="250000">R 250,000</option>
                <option value="500000">R 500,000</option>
                <option value="750000">R 750,000</option>
                <option value="1000000">R 1,000,000</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            </label>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-white/45">
            <span className="inline-flex items-center gap-2">
              <Search className="h-4 w-4" />
              {filteredCars.length} vehicles matching your search
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 font-semibold text-[#F28A2E]"
              >
                <X className="h-3.5 w-3.5" /> Clear filters
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8751A]">
              Our vehicles
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Explore our showroom
            </h2>
          </div>
          <p className="text-sm text-white/45">
            Showing{" "}
            <span className="font-bold text-white/75">
              {filteredCars.length}
            </span>{" "}
            vehicles
          </p>
        </div>
        {filteredCars.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#1f1f1f] px-6 py-20 text-center">
            <SlidersHorizontal className="mx-auto h-10 w-10 text-white/20" />
            <h3 className="mt-5 text-xl font-bold">No vehicles found</h3>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#E8751A] px-6 py-3 text-xs font-bold uppercase"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <Link
                href={`/cars/${car.id}`}
                key={car.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2a2a2a]">
                  <Image
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#E8751A] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em]">
                    Featured
                  </span>
                  <span className="absolute bottom-4 right-4 text-xs font-semibold">
                    {car.year}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8751A]">
                    {car.make}
                  </p>
                  <h3 className="mt-1 min-h-[48px] text-lg font-bold leading-6 group-hover:text-[#F28A2E]">
                    {car.model}
                  </h3>
                  <p className="mt-3 text-2xl font-extrabold">
                    R {car.price.toLocaleString()}
                  </p>
                  <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                        Mileage
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white/65">
                        {car.mileage.toLocaleString()} km
                      </p>
                    </div>
                    <div className="border-x border-white/10 px-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                        Fuel
                      </p>
                      <p className="mt-1 truncate text-xs font-semibold text-white/65">
                        {car.fuelType}
                      </p>
                    </div>
                    <div className="pl-3">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                        Body
                      </p>
                      <p className="mt-1 truncate text-xs font-semibold text-white/65">
                        {car.bodyType}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider">
                    <span>View vehicle</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#E8751A]">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
```

## File: apps/client/proxy.ts
```typescript
import { updateSession } from "@icar-gezina/supabase/session";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
```

## File: biome.json
```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!**/node_modules", "!**/.next", "!**/dist", "!**/build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "noAriaHiddenOnFocusable": "off",
        "noLabelWithoutControl": "off",
        "noStaticElementInteractions": "off",
        "noSvgWithoutTitle": "off",
        "useButtonType": "off",
        "useKeyWithClickEvents": "off",
        "useMediaCaption": "off",
        "useSemanticElements": "off"
      },
      "correctness": {
        "noInvalidUseBeforeDeclaration": "off",
        "useExhaustiveDependencies": "off"
      },
      "performance": {
        "noImgElement": "off"
      },
      "security": {
        "noDangerouslySetInnerHtml": "off"
      },
      "style": {
        "noNonNullAssertion": "off"
      },
      "suspicious": {
        "noArrayIndexKey": "off",
        "noAssignInExpressions": "off",
        "noExplicitAny": "off",
        "noImplicitAnyLet": "off",
        "useIterableCallbackReturn": "off",
        "noUnknownAtRules": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
```

## File: package.json
```json
{
  "name": "icar-gezina",
  "version": "0.1.2",
  "private": true,
  "packageManager": "pnpm@10.0.0",
  "engines": {
    "node": "22.x"
  },
  "scripts": {
    "dev": "turbo run dev --parallel",
    "build": "turbo run build --concurrency=1",
    "start": "turbo run start",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "typecheck": "turbo run typecheck",
    "gen:types": "pnpm --filter @icar-gezina/supabase supabase:types",
    "clean": "turbo run clean",
    "dev:client": "pnpm --filter @icar-gezina/client dev",
    "dev:admin": "pnpm --filter @icar-gezina/admin dev",
    "build:client": "pnpm --filter @icar-gezina/client build",
    "build:admin": "pnpm --filter @icar-gezina/admin build",
    "lint:client": "pnpm --filter @icar-gezina/client lint",
    "lint:admin": "pnpm --filter @icar-gezina/admin lint",
    "typecheck:client": "pnpm --filter @icar-gezina/client typecheck",
    "typecheck:admin": "pnpm --filter @icar-gezina/admin typecheck"
  },
  "devDependencies": {
    "@biomejs/biome": "catalog:",
    "turbo": "catalog:"
  }
}
```

## File: packages/contracts/src/article.ts
```typescript
import { z } from "zod";

export const articleSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  slug: z.string(),
  category: z.string().nullish(),
  excerpt: z.string().nullish(),
  content: z.string(),
  coverImageUrl: z.string().nullish(),
  published: z.boolean().default(false),
  publishedAt: z.string().nullish(),
  createdAt: z.string().optional(),
});

export type ArticleType = z.infer<typeof articleSchema>;
```

## File: packages/contracts/src/car.ts
```typescript
import { z } from "zod";

export const carPartSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  condition: z.string(),
  description: z.string(),
});

export const carReviewSchema = z.object({
  id: z.string().optional(),
  author: z.string(),
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
});

export const carSchema = z.object({
  id: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  price: z.number(),
  mileage: z.number(),
  fuelType: z.string(),
  transmission: z.string(),
  bodyType: z.string(),
  color: z.string(),
  imageUrl: z.string(),
  galleryUrls: z.array(z.string()).default([]),
  description: z.string(),
  features: z.array(z.string()).default([]),
  createdAt: z.string().optional(),
  parts: z.array(carPartSchema).default([]),
  reviews: z.array(carReviewSchema).default([]),
});

export type CarType = z.infer<typeof carSchema>;
export type CarPartType = z.infer<typeof carPartSchema>;
export type CarReviewType = z.infer<typeof carReviewSchema>;
```

## File: packages/contracts/src/lead.ts
```typescript
import { z } from "zod";

export const leadTypeSchema = z.enum([
  "Enquiry",
  "Test Drive",
  "Contact Us",
  "Finance Application",
]);

export const leadInputSchema = z.object({
  type: leadTypeSchema,
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().optional(),
  carId: z.string().optional(),
  preferredDate: z.string().optional(),
});

export const leadSchema = leadInputSchema.extend({
  id: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;
export type LeadType = z.infer<typeof leadSchema>;
```

## File: packages/contracts/src/testimonial.ts
```typescript
import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  author: z.string(),
  role: z.string(),
  content: z.string(),
  avatar: z.string(),
  createdAt: z.string().optional(),
});

export type TestimonialType = z.infer<typeof testimonialSchema>;
```

## File: packages/supabase/src/Queries/articles.ts
```typescript
import type { ArticleType } from "@icar-gezina/contracts/article";
import { createSupabasePublicClient } from "../server";
import type { Database } from "../supabaseType";

type ArticleRow = Database["public"]["Tables"]["articles"]["Row"];

function normalizeArticle(row: ArticleRow): ArticleType {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category ?? undefined,
    excerpt: row.excerpt ?? undefined,
    content: row.content,
    coverImageUrl: row.cover_image_url ?? undefined,
    published: row.published,
    publishedAt: row.published_at ?? undefined,
    createdAt: row.created_at,
  };
}

export async function getPublishedArticles(): Promise<ArticleType[]> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load articles: ${error.message}`);
  }

  return (data ?? []).map(normalizeArticle);
}
```

## File: packages/supabase/src/Queries/cars.ts
```typescript
import type {
  CarPartType,
  CarReviewType,
  CarType,
} from "@icar-gezina/contracts/car";
import { createSupabasePublicClient } from "../server";
import type { Database } from "../supabaseType";

type CarsRow = Database["public"]["Tables"]["cars"]["Row"];
type CarPartsRow = Database["public"]["Tables"]["car_parts"]["Row"];
type CarReviewsRow = Database["public"]["Tables"]["car_reviews"]["Row"];

type CarsRowWithRelations = CarsRow & {
  parts: CarPartsRow[];
  reviews: CarReviewsRow[];
};

function normalizePart(row: CarPartsRow): CarPartType {
  return {
    id: row.id,
    name: row.name,
    condition: row.condition,
    description: row.description,
  };
}

function normalizeReview(row: CarReviewsRow): CarReviewType {
  return {
    id: row.id,
    author: row.author,
    rating: row.rating,
    comment: row.comment,
    date: row.date,
  };
}

function normalizeCar(row: CarsRowWithRelations): CarType {
  return {
    id: row.id,
    make: row.make,
    model: row.model,
    year: row.year,
    price: row.price,
    mileage: row.mileage,
    fuelType: row.fuel_type,
    transmission: row.transmission,
    bodyType: row.body_type,
    color: row.color,
    imageUrl: row.image_url,
    galleryUrls: row.gallery_urls ?? [],
    description: row.description,
    features: row.features ?? [],
    createdAt: row.created_at,
    parts: (row.parts ?? []).map(normalizePart),
    reviews: (row.reviews ?? []).map(normalizeReview),
  };
}

export async function getCars(): Promise<CarType[]> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("cars")
    .select("*, parts:car_parts(*), reviews:car_reviews(*)")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load vehicles: ${error.message}`);
  }

  return (data ?? []).map(normalizeCar);
}

export async function getCarById(id: string): Promise<CarType | undefined> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("cars")
    .select("*, parts:car_parts(*), reviews:car_reviews(*)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to load vehicle: ${error.message}`);
  }

  return data ? normalizeCar(data as CarsRowWithRelations) : undefined;
}

export async function getCarSummaries(): Promise<CarType[]> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, make, model, year, price, mileage, fuel_type, transmission, body_type, color, image_url, description, created_at",
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load vehicles: ${error.message}`);
  }

  return (data ?? []).map((row) =>
    normalizeCar({
      ...row,
      gallery_urls: [],
      features: [],
      parts: [],
      reviews: [],
    }),
  );
}
```

## File: packages/supabase/src/Queries/leads.ts
```typescript
import type { LeadType } from "@icar-gezina/contracts/lead";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type LeadRow = Database["public"]["Tables"]["leads"]["Row"];

function normalizeLead(row: LeadRow): LeadType {
  return {
    id: row.id,
    type: row.type as LeadType["type"],
    name: row.name,
    email: row.email,
    phone: row.phone,
    message: row.message ?? undefined,
    carId: row.car_id ?? undefined,
    preferredDate: row.preferred_date ?? undefined,
    status: row.status,
    createdAt: row.created_at,
  };
}

export async function getLeads(): Promise<LeadType[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load leads: ${error.message}`);
  }

  return (data ?? []).map(normalizeLead);
}
```

## File: packages/supabase/src/Queries/testimonials.ts
```typescript
import type { TestimonialType } from "@icar-gezina/contracts/testimonial";
import { createSupabasePublicClient } from "../server";
import type { Database } from "../supabaseType";

type TestimonialRow = Database["public"]["Tables"]["testimonials"]["Row"];

function normalizeTestimonial(row: TestimonialRow): TestimonialType {
  return {
    id: row.id,
    author: row.author,
    role: row.role,
    content: row.content,
    avatar: row.avatar,
    createdAt: row.created_at,
  };
}

export async function getTestimonials(): Promise<TestimonialType[]> {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, author, role, content, avatar, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load testimonials: ${error.message}`);
  }

  return (data ?? []).map(normalizeTestimonial);
}
```

## File: apps/admin/app/resource-config.ts
```typescript
export type ResourceKey =
  | "leads"
  | "reviews"
  | "testimonials"
  | "car-parts"
  | "articles";

type Field = {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "number"
    | "date"
    | "datetime-local"
    | "textarea"
    | "checkbox"
    | "select";
  required?: boolean;
  options?: string[];
};

export const resources: Record<
  ResourceKey,
  {
    table: string;
    label: string;
    description: string;
    columns: string[];
    fields: Field[];
  }
> = {
  leads: {
    table: "leads",
    label: "Leads",
    description: "Vehicle enquiries and finance/contact leads.",
    columns: ["name", "type", "email", "phone", "status", "created_at"],
    fields: [
      { name: "type", label: "Lead type", required: true },
      { name: "name", label: "Name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", required: true },
      { name: "car_id", label: "Vehicle ID" },
      { name: "preferred_date", label: "Preferred date" },
      {
        name: "status",
        label: "Status",
        options: ["New", "Contacted", "Qualified", "Closed", "Lost"],
      },
      { name: "message", label: "Message", type: "textarea" },
    ],
  },
  reviews: {
    table: "car_reviews",
    label: "Reviews",
    description: "Customer reviews attached to vehicles.",
    columns: ["author", "rating", "comment", "date"],
    fields: [
      { name: "car_id", label: "Vehicle ID", required: true },
      { name: "author", label: "Author", required: true },
      { name: "rating", label: "Rating", type: "number", required: true },
      { name: "comment", label: "Comment", type: "textarea", required: true },
      { name: "date", label: "Date", type: "date" },
    ],
  },
  testimonials: {
    table: "testimonials",
    label: "Testimonials",
    description: "Customer testimonials shown on the public website.",
    columns: ["author", "role", "content", "created_at"],
    fields: [
      { name: "author", label: "Author", required: true },
      { name: "role", label: "Role", required: true },
      { name: "avatar", label: "Avatar URL" },
      { name: "content", label: "Content", type: "textarea", required: true },
    ],
  },
  "car-parts": {
    table: "car_parts",
    label: "Car Parts",
    description: "Inspection and vehicle condition records.",
    columns: ["name", "condition", "description", "created_at"],
    fields: [
      { name: "car_id", label: "Vehicle ID", required: true },
      { name: "name", label: "Part name", required: true },
      {
        name: "condition",
        label: "Condition",
        options: [
          "Excellent",
          "Good",
          "Fair",
          "Needs Replacement",
          "Not Inspected",
        ],
        required: true,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
    ],
  },
  articles: {
    table: "articles",
    label: "Articles",
    description: "Editorial content managed in Supabase.",
    columns: ["title", "category", "published", "published_at", "created_at"],
    fields: [
      { name: "title", label: "Title", required: true },
      { name: "slug", label: "Slug", required: true },
      { name: "category", label: "Category" },
      { name: "excerpt", label: "Excerpt", type: "textarea" },
      { name: "content", label: "Content", type: "textarea", required: true },
      { name: "cover_image_url", label: "Cover image URL" },
      { name: "published", label: "Published", type: "checkbox" },
      { name: "published_at", label: "Published at", type: "datetime-local" },
    ],
  },
};

export function getResource(value: string) {
  return (resources as Record<string, (typeof resources)[ResourceKey]>)[value];
}
```

## File: packages/contracts/package.json
```json
{
  "name": "@icar-gezina/contracts",
  "version": "0.1.0",
  "private": true,
  "exports": {
    "./car": "./src/car.ts",
    "./lead": "./src/lead.ts",
    "./contact": "./src/contact.ts",
    "./testimonial": "./src/testimonial.ts",
    "./article": "./src/article.ts",
    "./service": "./src/service.ts",
    "./actionResult": "./src/actionResult.ts",
    "./revalidation": "./src/revalidation.ts",
    "./env": "./src/env.ts"
  },
  "scripts": {
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "zod": "catalog:"
  },
  "devDependencies": {
    "typescript": "catalog:"
  }
}
```

## File: packages/supabase/src/Mutations/leads.ts
```typescript
import type { LeadInput } from "@icar-gezina/contracts/lead";
import { requireAdminUser } from "../auth";
import {
  createSupabasePublicClient,
  createSupabaseServerClient,
} from "../server";

export type LeadInsertPayload = {
  type: string;
  name: string;
  email: string;
  phone: string;
  message?: string | null;
  carId?: string | null;
  preferredDate?: string | null;
  status?: string;
};

// Public-facing insert used by the client lead form
// (apps/client/app/(client)/actions.ts). Auth is intentionally omitted
// because this runs as an unauthenticated public submission.
export async function submitLead(input: LeadInput) {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("leads")
    .insert({
      type: input.type,
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.message ?? null,
      car_id: input.carId ?? null,
      preferred_date: input.preferredDate ?? null,
      status: "New",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to submit enquiry: ${error.message}`);
  }

  return data;
}

export async function createLead(data: LeadInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data: lead, error } = await supabase
    .from("leads")
    .insert({
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message ?? null,
      car_id: data.carId ?? null,
      preferred_date: data.preferredDate ?? null,
      status: data.status ?? "New",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Unable to create lead: ${error.message}`);
  }

  return lead;
}

export async function updateLead(id: string, data: LeadInsertPayload) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("leads")
    .update({
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message ?? null,
      car_id: data.carId ?? null,
      preferred_date: data.preferredDate ?? null,
      status: data.status ?? "New",
    })
    .eq("id", id);

  if (error) {
    throw new Error(`Unable to update lead: ${error.message}`);
  }

  return { id };
}

export async function deleteLead(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("leads").delete().eq("id", id);

  if (error) {
    throw new Error(`Unable to delete lead: ${error.message}`);
  }

  return { id };
}
```

## File: pnpm-workspace.yaml
```yaml
packages:
  - "apps/*"
  - "packages/*"

catalog:
  "next": "16.2.7"
  "react": "19.2.4"
  "react-dom": "19.2.4"
  "typescript": "5.9.3"
  "postcss": "^8.5.14"
  "autoprefixer": "^10.4.21"
  "lucide-react": "^1.17.0"
  "tailwindcss": "^4.3.0"
  "@tailwindcss/postcss": "^4.1.14"
  "@tailwindcss/typography": "^0.5.19"
  "@types/node": "^22.19.19"
  "@types/react": "19.2.4"
  "@types/react-dom": "19.2.3"
  "@supabase/ssr": "^0.10.3"
  "@supabase/supabase-js": "^2.107.0"
  "@hookform/resolvers": "^5.2.2"
  "zod": "^4.4.3"
  "@biomejs/biome": "2.2.0"
  "@google/genai": "^1.17.0"
  "class-variance-authority": "^0.7.1"
  "clsx": "^2.1.1"
  "tailwind-merge": "^3.3.1"
  "motion": "^12.23.24"
  "tw-animate-css": "^1.4.0"
  "turbo": "^2.9.14"
```

## File: turbo.json
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalEnv": [
    "ENABLE_EXPERIMENTAL_COREPACK",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "REVALIDATION_SECRET"
  ],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "clean": {
      "cache": false
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"]
    }
  }
}
```

## File: apps/admin/app/[resource]/[id]/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { deleteRecord } from "../../crud-actions";
import { DeleteForm } from "../../delete-form";
import {
  LeadVehicleDetails,
  LeadVehicleDetailsStyles,
} from "../../lead-vehicle-details";
import { getResource } from "../../resource-config";

const tableFor = (resource: string) =>
  (
    ({
      leads: "leads",
      reviews: "car_reviews",
      testimonials: "testimonials",
      "car-parts": "car_parts",
      articles: "articles",
    }) as Record<string, string>
  )[resource];
const human = (value: string) =>
  value.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ resource: string; id: string }>;
}) {
  const { user, profile, supabase } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  const { resource, id } = await params;
  const config = getResource(resource);
  const table = tableFor(resource);
  if (!config || !table) notFound();
  const { data: record }: any = await supabase
    .from(table as any)
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (!record) notFound();
  const { data: vehicle } =
    resource === "leads" && record.car_id
      ? await supabase
          .from("cars")
          .select(
            "id,make,model,year,price,mileage,fuel_type,transmission,body_type,color,image_url",
          )
          .eq("id", record.car_id)
          .maybeSingle()
      : { data: null };

  return (
    <>
      {resource === "leads" && <LeadVehicleDetailsStyles />}
      <div className="page-header">
        <div>
          <Link href={`/${resource}`} className="topbar-link">
            ← Back to {config.label}
          </Link>
          <h1>{config.label.slice(0, -1)} details</h1>
          <p>Record ID: {id}</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link href={`/${resource}/${id}/edit`} className="button">
            <Pencil size={16} /> Edit
          </Link>
          <DeleteForm action={deleteRecord} id={id} resourceName={resource} />
        </div>
      </div>
      {resource === "leads" && <LeadVehicleDetails vehicle={vehicle} />}
      <section className="panel">
        <div className="detail-fields">
          {Object.entries(record).map(([key, value]) => (
            <div key={key}>
              <span>{human(key)}</span>
              <strong
                style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
              >
                {key.endsWith("_at") && value
                  ? new Date(String(value)).toLocaleString("en-ZA")
                  : Array.isArray(value)
                    ? value.join(", ")
                    : typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : String(value ?? "—")}
              </strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
```

## File: apps/admin/app/[resource]/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { Plus } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { deleteRecord } from "../crud-actions";
import { DeleteForm } from "../delete-form";
import { LeadVehicleDetailsStyles } from "../lead-vehicle-details";
import { getResource } from "../resource-config";

const tableFor = (resource: string) =>
  (
    ({
      leads: "leads",
      reviews: "car_reviews",
      testimonials: "testimonials",
      "car-parts": "car_parts",
      articles: "articles",
    }) as Record<string, string>
  )[resource];

export default async function ResourceListPage({
  params,
}: {
  params: Promise<{ resource: string }>;
}) {
  const { user, profile, supabase } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  const { resource } = await params;
  const config = getResource(resource);
  const table = tableFor(resource);
  if (!config || !table) notFound();

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });
  const leadRows =
    resource === "leads"
      ? ((data ?? []) as any[]).filter((row) => row.car_id)
      : [];
  const carIds = [...new Set(leadRows.map((row) => row.car_id))];
  const { data: cars } =
    resource === "leads" && carIds.length
      ? await supabase
          .from("cars")
          .select(
            "id,make,model,year,price,mileage,fuel_type,transmission,body_type,color,image_url",
          )
          .in("id", carIds)
      : { data: [] as any[] };
  const carMap = new Map((cars ?? []).map((car) => [car.id, car]));

  return (
    <>
      {resource === "leads" && <LeadVehicleDetailsStyles />}
      <div className="page-header">
        <div>
          <h1>{config.label}</h1>
          <p>{config.description}</p>
        </div>
        <Link href={`/${resource}/new`} className="button">
          <Plus size={16} /> Add{" "}
          {resource === "articles"
            ? "article"
            : resource === "leads"
              ? "lead"
              : resource === "reviews"
                ? "review"
                : resource === "testimonials"
                  ? "testimonial"
                  : "part"}
        </Link>
      </div>
      {error && (
        <section className="panel">
          <strong>Unable to load records.</strong>
          <p>{error.message}</p>
        </section>
      )}
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {config.columns.map((c) => (
                <th key={c}>{c.replaceAll("_", " ")}</th>
              ))}
              {resource === "leads" && <th>Vehicle</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((row: any) => (
              <tr key={row.id}>
                {config.columns.map((c) => (
                  <td key={c}>
                    {c === "created_at" || c === "published_at"
                      ? row[c]
                        ? new Date(row[c]).toLocaleString("en-ZA")
                        : "—"
                      : c === "published"
                        ? row[c]
                          ? "Published"
                          : "Draft"
                        : String(row[c] ?? "—").slice(0, 120)}
                  </td>
                ))}
                {resource === "leads" && (
                  <td>
                    {row.car_id && carMap.get(row.car_id)
                      ? `${carMap.get(row.car_id).make} ${carMap.get(row.car_id).model} (${carMap.get(row.car_id).year})`
                      : "No vehicle linked"}
                  </td>
                )}
                <td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Link
                      href={`/${resource}/${row.id}`}
                      className="button secondary"
                      style={{ padding: "8px 10px" }}
                    >
                      View
                    </Link>
                    <Link
                      href={`/${resource}/${row.id}/edit`}
                      className="button secondary"
                      style={{ padding: "8px 10px" }}
                    >
                      Edit
                    </Link>
                    <DeleteForm
                      action={deleteRecord}
                      id={row.id}
                      resourceName={resource}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!error && !data?.length && (
              <tr>
                <td
                  colSpan={
                    config.columns.length + (resource === "leads" ? 2 : 1)
                  }
                >
                  <div className="empty-state">
                    No {config.label.toLowerCase()} found.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
```

## File: apps/admin/app/globals.css
```css
@import "tailwindcss";

:root {
  --ink: #111827;
  --muted: #6b7280;
  --line: #e5e7eb;
  --surface: #fff;
  --canvas: #f5f6f8;
  --dark: #111827;
  --dark-soft: #1b2431;
  --accent: #c7a45a;
}
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  min-height: 100%;
}
body {
  background: var(--canvas);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
select,
textarea {
  font: inherit;
}
.admin-app {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 252px;
  background: var(--dark);
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px 14px;
  position: fixed;
  inset: 0 auto 0 0;
}
.brand {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 4px 10px 30px;
}
.brand-mark {
  width: 38px;
  height: 38px;
  border: 1px solid #596273;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: -0.08em;
}
.brand strong {
  display: block;
  font-size: 15px;
}
.brand span,
.admin-badge span {
  display: block;
  color: #9ca3af;
  font-size: 11px;
  margin-top: 3px;
}
.sidebar-section-label {
  padding: 0 12px 9px;
  color: #7f8998;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 10px;
  font-weight: 700;
}
.nav-list {
  display: grid;
  gap: 4px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 11px;
  min-height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  color: #b9c0ca;
  font-size: 13px;
  transition: 0.15s ease;
}
.nav-item:hover {
  background: #202a39;
  color: #fff;
}
.nav-item.active {
  background: #fff;
  color: var(--ink);
  font-weight: 700;
}
.sidebar-spacer {
  flex: 1;
  min-height: 28px;
}
.admin-badge {
  margin: 18px 4px 0;
  padding: 13px;
  border: 1px solid #2c3747;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  color: #d9dee5;
}
.admin-badge svg {
  color: var(--accent);
  flex: 0 0 auto;
}
.admin-badge strong {
  font-size: 11px;
}
.admin-main {
  width: calc(100% - 252px);
  margin-left: 252px;
}
.topbar {
  height: 72px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  padding: 0 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.eyebrow {
  display: block;
  color: #9ca3af;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.topbar-title {
  display: block;
  margin-top: 3px;
  font-size: 13px;
  font-weight: 600;
}
.topbar-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}
.topbar-link {
  color: #4b5563;
  font-size: 12px;
  font-weight: 600;
}
.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #111827;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
}
.content {
  padding: 34px;
  max-width: 1500px;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 20px;
}
.page-header h1 {
  margin: 8px 0 0;
  font-size: 28px;
  letter-spacing: -0.03em;
}
.page-header p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 7px;
  padding: 11px 15px;
  background: var(--dark);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.button.secondary {
  background: #fff;
  color: var(--ink);
  border: 1px solid var(--line);
}
.button.danger {
  background: #9f2f2f;
}
.button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-size: 11px;
  font-weight: 700;
}
.back-link:hover {
  color: var(--ink);
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.stat-card,
.panel {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 9px;
}
.stat-card {
  padding: 19px;
}
.stat-label {
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
}
.stat-value {
  margin-top: 8px;
  font-size: 26px;
  font-weight: 750;
  letter-spacing: -0.04em;
}
.stat-meta {
  margin-top: 7px;
  color: #7b8490;
  font-size: 10px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.75fr);
  gap: 18px;
  margin-top: 18px;
}
.panel-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.panel-header h2 {
  margin: 0;
  font-size: 14px;
}
.panel-header a {
  font-size: 11px;
  color: #6b7280;
  font-weight: 700;
}
.panel-body {
  padding: 20px;
}
.inventory-toolbar {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 14px;
}
.search {
  flex: 1;
  min-height: 40px;
  border: 1px solid var(--line);
  border-radius: 7px;
  padding: 0 12px;
  background: #fff;
  outline: none;
  font-size: 12px;
}
.table-wrap {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 9px;
  overflow: hidden;
}
th {
  background: #fafafa;
  color: #6b7280;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 9px;
  padding: 13px 15px;
}
td {
  padding: 14px 15px;
  border-top: 1px solid #f0f1f3;
  font-size: 12px;
}
.vehicle-cell {
  display: flex;
  gap: 11px;
  align-items: center;
}
.vehicle-thumb {
  width: 58px;
  height: 40px;
  background: #eceef1;
  border-radius: 5px;
  display: grid;
  place-items: center;
  color: #9ca3af;
  overflow: hidden;
}
.vehicle-name {
  font-weight: 700;
}
.vehicle-meta {
  color: #8b929c;
  font-size: 10px;
  margin-top: 3px;
}
.status {
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 999px;
  background: #eef7f0;
  color: #2f6e43;
  font-size: 9px;
  font-weight: 800;
}
.vehicle-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: -4px 0 22px;
}
.vehicle-summary span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 7px 10px;
  color: #59616d;
  font-size: 10px;
  font-weight: 700;
}
.vehicle-summary svg {
  color: #8b929c;
}
.vehicle-editor {
  padding-bottom: 30px;
}
.editor-toolbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 246, 248, 0.94);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0 16px;
  margin-bottom: 2px;
}
.editor-toolbar h2 {
  margin: 7px 0 0;
  font-size: 17px;
  letter-spacing: -0.02em;
}
.editor-toolbar p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 11px;
}
.editor-actions {
  display: flex;
  gap: 8px;
}
.editor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: 18px;
  align-items: start;
}
.editor-main,
.editor-side {
  display: grid;
  gap: 18px;
}
.editor-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 20px;
}
.editor-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 18px;
}
.editor-card-header h3,
.editor-card > h3 {
  margin: 0;
  font-size: 14px;
}
.editor-card-header p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 10px;
}
.editor-card-header > svg {
  color: var(--accent);
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}
.field {
  display: grid;
  gap: 7px;
  min-width: 0;
}
.field-wide {
  grid-column: 1 / -1;
}
.field-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #4b5563;
  font-size: 10px;
  font-weight: 700;
}
.field-hint {
  color: #9ca3af;
  font-weight: 600;
}
.input-wrap {
  display: flex;
  align-items: center;
}
.input {
  width: 100%;
  min-height: 42px;
  border: 1px solid #dfe3e8;
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  outline: none;
  font-size: 12px;
  padding: 10px 12px;
}
.input-wrap .input {
  border-radius: 7px;
}
.input-affix {
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 10px;
  background: #f8f9fa;
  border: 1px solid #dfe3e8;
  color: #7b8490;
  font-size: 11px;
  font-weight: 700;
}
.input-wrap .input-affix:first-child {
  border-radius: 7px 0 0 7px;
  border-right: 0;
}
.input-wrap .input-affix:last-child {
  border-radius: 0 7px 7px 0;
  border-left: 0;
}
.input-wrap .input:has(+ .input-affix) {
  border-radius: 7px 0 0 7px;
}
.input-wrap .input-affix:first-child + .input {
  border-radius: 0 7px 7px 0;
}
.field-textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.6;
}
.input:focus {
  border-color: #aeb5bf;
  box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.05);
}
select.input {
  cursor: pointer;
}
.form-error {
  margin: 0 0 15px;
  padding: 12px 14px;
  border: 1px solid #f0caca;
  background: #fff4f4;
  color: #9f2f2f;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
}
.image-preview {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  background: #eef0f3;
  border: 1px solid #e1e4e8;
  display: grid;
  place-items: center;
  overflow: hidden;
  margin-bottom: 14px;
  color: #9ca3af;
}
.image-preview.large {
  height: 230px;
}
.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.image-preview > div {
  display: grid;
  place-items: center;
  gap: 8px;
  font-size: 10px;
}
.image-clear {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #9f2f2f;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}
.gallery-mini-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
}
.gallery-mini {
  position: relative;
  aspect-ratio: 1;
  border-radius: 7px;
  overflow: hidden;
  background: #eef0f3;
  border: 1px solid #e1e4e8;
}
.gallery-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-mini span {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(17, 24, 39, 0.8);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
}
.checklist {
  display: grid;
  gap: 10px;
}
.checklist span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 10px;
  font-weight: 700;
}
.checklist .check-ok {
  color: #2f6e43;
}
.checklist .check-missing {
  color: #9f2f2f;
}
.check-dot {
  width: 14px;
  height: 14px;
  border: 1px solid #d9dde2;
  border-radius: 50%;
  display: inline-block;
}
.help-card {
  background: #111827;
  color: #fff;
  border-color: #111827;
}
.help-card h3 {
  margin: 0;
  font-size: 13px;
}
.help-card p {
  color: #aeb7c4;
  font-size: 10px;
  line-height: 1.6;
  margin: 8px 0 13px;
}
.text-link {
  color: #e7d19a;
  font-size: 10px;
  font-weight: 800;
}
.detail-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 18px;
}
.detail-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
}
.detail-fields > div {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f1f3;
  display: grid;
  gap: 5px;
}
.detail-fields span {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8a929d;
  font-weight: 700;
}
.detail-fields strong {
  font-size: 12px;
  font-weight: 700;
}
.empty-state {
  padding: 32px;
  text-align: center;
  color: #7b8490;
  font-size: 12px;
}
.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 20px;
  margin: 0;
  list-style: none;
}
.feature-list li {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 10px;
  color: #59616d;
}
@media (max-width: 1000px) {
  .sidebar {
    width: 74px;
    padding: 18px 10px;
  }
  .brand {
    justify-content: center;
    padding-inline: 0;
  }
  .brand > div:last-child,
  .sidebar-section-label,
  .nav-item span,
  .admin-badge div {
    display: none;
  }
  .nav-item {
    justify-content: center;
    padding: 0;
  }
  .admin-badge {
    justify-content: center;
    padding: 10px 0;
  }
  .admin-main {
    width: calc(100% - 74px);
    margin-left: 74px;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .dashboard-grid,
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .editor-layout {
    grid-template-columns: 1fr;
  }
  .editor-side {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .topbar {
    padding: 0 18px;
  }
  .topbar-link {
    display: none;
  }
  .content {
    padding: 22px 16px;
  }
  .page-header {
    align-items: flex-start;
    flex-direction: column;
  }
  .stats {
    grid-template-columns: 1fr;
  }
  .editor-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }
  .editor-actions {
    width: 100%;
  }
  .editor-actions .button {
    flex: 1;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .field-wide {
    grid-column: 1;
  }
  .detail-fields {
    grid-template-columns: 1fr;
  }
  .editor-side {
    grid-template-columns: 1fr;
  }
  .gallery-mini-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .vehicle-summary {
    margin-bottom: 15px;
  }
}

/* ICar Gezina automotive editor layer — inspired by the measured automotive patterns in awesome-design-md/BMW. */
.editor-automotive {
  --editor-blue: #e65b1f;
  --editor-dark: #18212b;
  --editor-dark-2: #26313d;
  --editor-ink: #20262d;
  --editor-muted: #68727d;
  --editor-line: #dfe3e7;
  --editor-soft: #f7f8f9;
}
.editor-automotive .editor-toolbar {
  padding: 20px 0 18px;
  background: rgba(247, 248, 249, 0.96);
  border-bottom: 1px solid var(--editor-line);
}
.editor-automotive .editor-kicker {
  display: block;
  color: #7b858f;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.editor-automotive .editor-toolbar h2 {
  font-size: 30px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--editor-ink);
}
.editor-automotive .editor-toolbar p {
  font-size: 12px;
  color: var(--editor-muted);
}
.editor-automotive .editor-actions .button {
  height: 46px;
  border-radius: 0;
  padding: 0 22px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
}
.editor-automotive .editor-actions .button:not(.secondary) {
  background: var(--editor-blue);
  color: #fff;
}
.editor-automotive .editor-actions .button:not(.secondary):hover {
  background: #c94c17;
}
.editor-automotive .editor-actions .button.secondary {
  border: 1px solid #bfc6cd;
  background: #fff;
  color: var(--editor-ink);
}
.editor-automotive .vehicle-summary {
  gap: 0;
  margin: 0 0 22px;
  border-bottom: 1px solid var(--editor-line);
  padding-bottom: 18px;
}
.editor-automotive .vehicle-summary span {
  border: 0;
  border-right: 1px solid var(--editor-line);
  border-radius: 0;
  background: transparent;
  padding: 0 18px;
  color: #56616c;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.editor-automotive .vehicle-summary span:first-child {
  padding-left: 0;
}
.editor-automotive .vehicle-summary span:last-child {
  border-right: 0;
}
.editor-automotive .vehicle-summary svg {
  color: var(--editor-blue);
}
.editor-automotive .editor-layout {
  grid-template-columns: minmax(0, 1fr) 350px;
  gap: 24px;
}
.editor-automotive .editor-main,
.editor-automotive .editor-side {
  gap: 24px;
}
.editor-automotive .editor-card {
  border-radius: 0;
  border: 1px solid var(--editor-line);
  box-shadow: none;
  padding: 24px;
  background: #fff;
}
.editor-automotive .editor-card-header {
  margin-bottom: 22px;
  padding-bottom: 15px;
  border-bottom: 1px solid #edf0f2;
}
.editor-automotive .editor-card-header h3 {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--editor-ink);
}
.editor-automotive .editor-card-header p {
  font-size: 11px;
  line-height: 1.5;
  color: var(--editor-muted);
}
.editor-automotive .editor-card-header > svg {
  color: var(--editor-blue);
}
.editor-automotive .field-label {
  text-transform: uppercase;
  letter-spacing: 0.11em;
  font-size: 9px;
  color: #59646f;
}
.editor-automotive .field-hint {
  letter-spacing: 0;
  text-transform: none;
  color: #8b949e;
}
.editor-automotive .input {
  min-height: 48px;
  border-radius: 0;
  border: 1px solid #cfd5da;
  padding: 13px 14px;
  font-size: 13px;
  color: var(--editor-ink);
}
.editor-automotive .input:hover {
  border-color: #aeb7bf;
}
.editor-automotive .input:focus {
  border-color: var(--editor-ink);
  box-shadow:
    inset 0 0 0 1px var(--editor-ink),
    0 0 0 3px rgba(24, 33, 43, 0.06);
}
.editor-automotive .input-affix {
  border-radius: 0 !important;
  background: var(--editor-soft);
  border-color: #cfd5da;
  color: #65707a;
}
.editor-automotive .field-textarea {
  min-height: 150px;
}
.editor-automotive .image-preview {
  border-radius: 0;
  background: #eef1f3;
  border: 0;
  height: 260px;
  margin-bottom: 16px;
}
.editor-automotive .image-preview.large {
  height: 260px;
}
.editor-automotive .gallery-mini {
  border-radius: 0;
  border-color: #d6dbe0;
}
.editor-automotive .gallery-mini span {
  border-radius: 0;
  background: rgba(24, 33, 43, 0.9);
  width: 22px;
  height: 22px;
}
.editor-automotive .checklist span {
  font-size: 11px;
}
.editor-automotive .help-card {
  background: var(--editor-dark);
  border-color: var(--editor-dark);
  padding: 24px;
}
.editor-automotive .help-card h3 {
  font-size: 16px;
  font-weight: 800;
}
.editor-automotive .help-card p {
  font-size: 11px;
  line-height: 1.65;
  color: #c0c8d0;
}
.editor-automotive .text-link {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.editor-automotive .form-error {
  border-radius: 0;
  border-left: 3px solid #c53b32;
  background: #fff7f6;
}
@media (max-width: 1000px) {
  .editor-automotive .editor-layout {
    grid-template-columns: 1fr;
  }
  .editor-automotive .editor-side {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .editor-automotive .editor-toolbar h2 {
    font-size: 25px;
  }
  .editor-automotive .vehicle-summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .editor-automotive .vehicle-summary span {
    border-right: 0;
    padding: 0 !important;
  }
  .editor-automotive .editor-card {
    padding: 18px;
  }
  .editor-automotive .editor-side {
    grid-template-columns: 1fr;
  }
  .editor-automotive .editor-actions {
    gap: 0;
  }
  .editor-automotive .editor-actions .button {
    padding: 0 14px;
  }
}
```

## File: apps/admin/app/inventory/actions.ts
```typescript
"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { CACHE_PATHS, CACHE_TAGS } from "@icar-gezina/supabase/cache";
import {
  createCar,
  deleteCar,
  updateCar,
} from "@icar-gezina/supabase/Mutations/cars";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { triggerRevalidation } from "../../lib/revalidation";

const text = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();
const number = (formData: FormData, name: string) => {
  const value = Number(formData.get(name) ?? 0);
  return Number.isFinite(value) ? value : 0;
};
const array = (formData: FormData, name: string) =>
  text(formData, name)
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean);

function validateVehicle(formData: FormData): string | null {
  const make = text(formData, "make");
  const model = text(formData, "model");
  const year = number(formData, "year");
  const price = number(formData, "price");
  const mileage = number(formData, "mileage");

  if (!make || !model) return "Make and model are required.";
  if (year < 1900 || year > new Date().getFullYear() + 1)
    return "Please enter a valid vehicle year.";
  if (price < 0) return "Price cannot be negative.";
  if (mileage < 0) return "Mileage cannot be negative.";
  return null;
}

function vehiclePayload(formData: FormData) {
  return {
    make: text(formData, "make"),
    model: text(formData, "model"),
    year: number(formData, "year"),
    price: number(formData, "price"),
    mileage: number(formData, "mileage"),
    fuelType: text(formData, "fuelType"),
    transmission: text(formData, "transmission"),
    bodyType: text(formData, "bodyType"),
    color: text(formData, "color"),
    imageUrl: text(formData, "imageUrl"),
    galleryUrls: array(formData, "galleryUrls"),
    description: text(formData, "description"),
    features: array(formData, "features"),
  };
}

export async function createVehicle(formData: FormData): Promise<ActionResult> {
  const validationError = validateVehicle(formData);
  if (validationError) return { ok: false, error: validationError };

  let vehicle: { id: string };
  try {
    const created = await createCar(vehiclePayload(formData));
    vehicle = created as { id: string };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${vehicle.id}`);
  revalidatePath(`/inventory/${vehicle.id}/edit`);
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars],
  });
  redirect(`/inventory/${vehicle.id}/edit`);
}

export async function updateVehicle(formData: FormData): Promise<ActionResult> {
  const validationError = validateVehicle(formData);
  if (validationError) return { ok: false, error: validationError };

  const id = text(formData, "id");
  if (!id)
    return {
      ok: false,
      error:
        "Vehicle ID is missing. Please reopen the edit page and try again.",
    };

  try {
    const updated = await updateCar(id, vehiclePayload(formData));
    if (!updated)
      return {
        ok: false,
        error: "Vehicle was not found or could not be updated.",
      };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${id}`);
  revalidatePath(`/inventory/${id}/edit`);
  revalidatePath("/", "layout");
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars, CACHE_TAGS.car(id)],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars, CACHE_PATHS.carDetail(id)],
  });
  redirect(`/inventory/${id}`);
}

export async function deleteVehicle(formData: FormData): Promise<ActionResult> {
  const id = text(formData, "id");
  if (!id) return { ok: false, error: "Vehicle ID is missing." };

  try {
    await deleteCar(id);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath("/inventory");
  revalidatePath(`/inventory/${id}`);
  await triggerRevalidation({
    tags: [CACHE_TAGS.cars, CACHE_TAGS.car(id)],
    paths: [CACHE_PATHS.home, CACHE_PATHS.cars, CACHE_PATHS.carDetail(id)],
  });
  redirect("/inventory");
}
```

## File: apps/admin/app/resource-form.tsx
```typescript
"use client";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import type { ResourceKey } from "./resource-config";
import { resources } from "./resource-config";

type FormAction = (formData: FormData) => Promise<ActionResult>;

export function ResourceForm({
  resource,
  action,
  record,
  cars = [],
}: {
  resource: ResourceKey;
  action: FormAction;
  record?: any;
  cars?: any[];
}) {
  const config = resources[resource];

  async function handleSubmit(formData: FormData) {
    await action(formData);
  }

  return (
    <form action={handleSubmit} className="form-grid">
      <input type="hidden" name="resource" value={resource} />
      {record?.id && <input type="hidden" name="id" value={record.id} />}
      {config.fields.map((field) => {
        const value = record?.[field.name] ?? "";
        const common: any = {
          name: field.name,
          required: field.required,
          defaultValue: field.type === "checkbox" ? undefined : value,
          className: "input",
        };
        const label = (
          <label className="field-label" htmlFor={field.name}>
            {field.label}
            {field.required ? " *" : ""}
          </label>
        );
        if (field.type === "checkbox")
          return (
            <div className="field" key={field.name}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name={field.name}
                  defaultChecked={Boolean(value)}
                />
                {field.label}
              </label>
            </div>
          );
        if (field.name === "car_id" && cars.length)
          return (
            <div className="field" key={field.name}>
              {label}
              <select {...common} defaultValue={value || ""}>
                <option value="">Select vehicle</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.make} {car.model} ({car.year})
                  </option>
                ))}
              </select>
            </div>
          );
        if (field.options)
          return (
            <div className="field" key={field.name}>
              {label}
              <select {...common}>
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        if (field.type === "textarea")
          return (
            <div className="field field-wide" key={field.name}>
              {label}
              <textarea {...common} rows={6} />
            </div>
          );
        return (
          <div className="field" key={field.name}>
            {label}
            <input {...common} type={field.type ?? "text"} />
          </div>
        );
      })}
      <div className="form-actions">
        <button className="button" type="submit">
          {record ? "Save changes" : "Create record"}
        </button>
      </div>
    </form>
  );
}
```

## File: packages/contracts/src/actionResult.ts
```typescript
import { z } from "zod";

export const actionErrorSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
  fieldErrors: z.record(z.string(), z.array(z.string())).optional(),
});

export const actionSuccessSchema = z.object({
  ok: z.literal(true),
  message: z.string().optional(),
  data: z.unknown().optional(),
  revalidate: z
    .object({
      paths: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
    })
    .optional(),
});

export type ActionError = z.infer<typeof actionErrorSchema>;
export type ActionSuccess = z.infer<typeof actionSuccessSchema>;

export type ActionResult<TData = undefined> =
  | {
      ok: true;
      data?: TData;
      message?: string;
      revalidate?: {
        paths?: string[];
        tags?: string[];
      };
    }
  | {
      ok: false;
      error: string;
      fieldErrors?: Record<string, string[]>;
    };
```

## File: packages/supabase/package.json
```json
{
  "name": "@icar-gezina/supabase",
  "version": "0.1.0",
  "private": true,
  "exports": {
    "./client": "./src/client.ts",
    "./server": "./src/server.ts",
    "./auth": "./src/auth.ts",
    "./session": "./src/session.ts",
    "./cache": "./src/cache.ts",
    "./supabaseType": "./src/supabaseType.ts",
    "./Queries/*": "./src/Queries/*.ts",
    "./Mutations/*": "./src/Mutations/*.ts"
  },
  "scripts": {
    "typecheck": "tsc --noEmit",
    "supabase:types": "supabase gen types typescript --local > src/supabaseType.ts"
  },
  "dependencies": {
    "@icar-gezina/contracts": "workspace:*",
    "@supabase/ssr": "catalog:",
    "@supabase/supabase-js": "catalog:",
    "next": "catalog:",
    "typescript": "catalog:"
  }
}
```

## File: apps/admin/app/[resource]/[id]/edit/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { updateRecord } from "../../../crud-actions";
import { LeadEditStyles } from "../../../lead-edit-styles";
import {
  LeadVehicleDetails,
  LeadVehicleDetailsStyles,
} from "../../../lead-vehicle-details";
import { getResource } from "../../../resource-config";
import { ResourceForm } from "../../../resource-form";

const tableFor = (resource: string) =>
  (
    ({
      leads: "leads",
      reviews: "car_reviews",
      testimonials: "testimonials",
      "car-parts": "car_parts",
      articles: "articles",
    }) as Record<string, string>
  )[resource];

export default async function EditResourcePage({
  params,
}: {
  params: Promise<{ resource: string; id: string }>;
}) {
  const { user, profile, supabase } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");
  const { resource, id } = await params;
  const config = getResource(resource);
  const table = tableFor(resource);
  if (!config || !table) notFound();

  const [{ data: record, error }, { data: cars }]: any = await Promise.all([
    supabase
      .from(table as any)
      .select("*")
      .eq("id", id)
      .maybeSingle(),
    supabase
      .from("cars")
      .select(
        "id,make,model,year,price,mileage,fuel_type,transmission,body_type,color,image_url",
      )
      .order("make")
      .order("model"),
  ]);
  if (error || !record) notFound();

  const vehicle =
    resource === "leads"
      ? (cars ?? []).find((car: any) => car.id === record.car_id)
      : null;

  return (
    <>
      {resource === "leads" && <LeadVehicleDetailsStyles />}
      <div className="page-header">
        <div>
          <Link href={`/${resource}/${id}`} className="back-link">
            <ArrowLeft size={13} /> Back to record
          </Link>
          <span className="eyebrow" style={{ marginTop: 12 }}>
            Lead management / Edit
          </span>
          <h1>Edit Lead</h1>
          <p>
            Update customer details, lead status and the vehicle attached to
            this enquiry.
          </p>
        </div>
      </div>

      {resource === "leads" ? (
        <div className="lead-edit-shell">
          <section className="panel lead-edit-form-card">
            <div className="lead-edit-heading">
              <div>
                <span className="eyebrow">Customer enquiry</span>
                <h2>Edit lead details</h2>
                <p>
                  Keep the customer information and vehicle relationship
                  accurate for the sales team.
                </p>
              </div>
              <span className="lead-id-badge">{id.slice(0, 8)}</span>
            </div>
            <ResourceForm
              resource={resource as any}
              action={updateRecord}
              record={record}
              cars={cars ?? []}
            />
          </section>

          <aside className="lead-edit-context">
            <LeadVehicleDetails vehicle={vehicle} />
            <section className="panel lead-context-card">
              <span className="eyebrow">Edit guidance</span>
              <h3>Lead workflow</h3>
              <div className="lead-step">
                <b>01</b>
                <div>
                  <strong>Confirm customer</strong>
                  <span>Name, email and phone are correct.</span>
                </div>
              </div>
              <div className="lead-step">
                <b>02</b>
                <div>
                  <strong>Confirm vehicle</strong>
                  <span>
                    Make sure the enquiry is linked to the right vehicle.
                  </span>
                </div>
              </div>
              <div className="lead-step">
                <b>03</b>
                <div>
                  <strong>Update status</strong>
                  <span>
                    Move the lead from New through the sales pipeline.
                  </span>
                </div>
              </div>
              <div className="lead-note">
                Changes are saved directly to Supabase PHB when you submit the
                form.
              </div>
            </section>
          </aside>
        </div>
      ) : (
        <section className="panel">
          <ResourceForm
            resource={resource as any}
            action={updateRecord}
            record={record}
            cars={cars ?? []}
          />
        </section>
      )}

      <LeadEditStyles />
    </>
  );
}
```

## File: apps/admin/app/layout.tsx
```typescript
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AdminShell } from "./admin-shell";

export const metadata: Metadata = {
  title: "ICar Gezina Admin",
  description: "ICar Gezina dealership administration workspace",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
```

## File: apps/admin/app/crud-actions.ts
```typescript
"use server";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { CACHE_PATHS, CACHE_TAGS } from "@icar-gezina/supabase/cache";
import {
  createArticle,
  deleteArticle,
  updateArticle,
} from "@icar-gezina/supabase/Mutations/articles";
import {
  createCarPart,
  deleteCarPart,
  updateCarPart,
} from "@icar-gezina/supabase/Mutations/carParts";
import {
  createLead,
  deleteLead,
  updateLead,
} from "@icar-gezina/supabase/Mutations/leads";
import {
  createCarReview,
  deleteCarReview,
  updateCarReview,
} from "@icar-gezina/supabase/Mutations/reviews";
import {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
} from "@icar-gezina/supabase/Mutations/testimonials";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { triggerRevalidation } from "../lib/revalidation";

const adminResources = new Set([
  "leads",
  "reviews",
  "testimonials",
  "car-parts",
  "articles",
]);

const text = (fd: FormData, name: string) => String(fd.get(name) ?? "").trim();
const nullable = (fd: FormData, name: string) => text(fd, name) || null;
const bool = (fd: FormData, name: string) =>
  fd.get(name) === "on" || fd.get(name) === "true";
const int = (fd: FormData, name: string) => {
  const value = Number(fd.get(name));
  return Number.isFinite(value) ? value : 0;
};

function assertResource(resource: string) {
  if (!adminResources.has(resource)) throw new Error("Unsupported resource");
}

function leadPayload(fd: FormData) {
  return {
    type: text(fd, "type"),
    name: text(fd, "name"),
    email: text(fd, "email"),
    phone: text(fd, "phone"),
    message: nullable(fd, "message"),
    carId: nullable(fd, "car_id"),
    preferredDate: nullable(fd, "preferred_date"),
    status: text(fd, "status") || "New",
  };
}

function reviewPayload(fd: FormData) {
  return {
    carId: text(fd, "car_id"),
    author: text(fd, "author"),
    rating: Math.max(1, Math.min(5, int(fd, "rating"))),
    comment: text(fd, "comment"),
    date: text(fd, "date"),
  };
}

function testimonialPayload(fd: FormData) {
  return {
    author: text(fd, "author"),
    role: text(fd, "role"),
    content: text(fd, "content"),
    avatar: text(fd, "avatar"),
  };
}

function carPartPayload(fd: FormData) {
  return {
    carId: text(fd, "car_id"),
    name: text(fd, "name"),
    condition: text(fd, "condition"),
    description: text(fd, "description"),
  };
}

function articlePayload(fd: FormData) {
  return {
    title: text(fd, "title"),
    slug: text(fd, "slug")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    excerpt: nullable(fd, "excerpt"),
    content: text(fd, "content"),
    category: nullable(fd, "category"),
    coverImageUrl: nullable(fd, "cover_image_url"),
    published: bool(fd, "published"),
    publishedAt: nullable(fd, "published_at"),
  };
}

function publicRevalidation(
  resource: string,
  fd: FormData,
  carId?: string,
): { tag: string; path?: string } | undefined {
  if (resource === "testimonials") return { tag: CACHE_TAGS.testimonials };
  if (resource === "articles") return { tag: CACHE_TAGS.articles };
  if (resource === "reviews" || resource === "car-parts") {
    const resolvedCarId = text(fd, "car_id") || carId;
    if (resolvedCarId)
      return {
        tag: CACHE_TAGS.car(resolvedCarId),
        path: CACHE_PATHS.carDetail(resolvedCarId),
      };
    return { tag: CACHE_TAGS.cars };
  }
  return undefined;
}

export async function createRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  assertResource(resource);

  let createdId = "";
  try {
    if (resource === "leads") {
      const lead = await createLead(leadPayload(formData));
      createdId = lead.id;
    } else if (resource === "reviews") {
      const review = await createCarReview(reviewPayload(formData));
      createdId = review.id;
    } else if (resource === "testimonials") {
      const testimonial = await createTestimonial(testimonialPayload(formData));
      createdId = testimonial.id;
    } else if (resource === "car-parts") {
      const part = await createCarPart(carPartPayload(formData));
      createdId = part.id;
    } else {
      const article = await createArticle(articlePayload(formData));
      createdId = article.id;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  revalidatePath(`/${resource}/${createdId}`);
  const revalidate = publicRevalidation(resource, formData, createdId);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}/${createdId}`);
}

export async function updateRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  const id = text(formData, "id");
  assertResource(resource);

  try {
    if (resource === "leads") {
      await updateLead(id, leadPayload(formData));
    } else if (resource === "reviews") {
      await updateCarReview(id, reviewPayload(formData));
    } else if (resource === "testimonials") {
      await updateTestimonial(id, testimonialPayload(formData));
    } else if (resource === "car-parts") {
      await updateCarPart(id, carPartPayload(formData));
    } else {
      await updateArticle(id, articlePayload(formData));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  revalidatePath(`/${resource}/${id}`);
  const revalidate = publicRevalidation(resource, formData, id);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}/${id}`);
}

export async function deleteRecord(formData: FormData): Promise<ActionResult> {
  const resource = text(formData, "resource");
  const id = text(formData, "id");
  assertResource(resource);

  let carId: string | undefined;
  try {
    if (resource === "leads") {
      await deleteLead(id);
    } else if (resource === "reviews") {
      const deleted = await deleteCarReview(id);
      carId = deleted.carId;
    } else if (resource === "testimonials") {
      await deleteTestimonial(id);
    } else if (resource === "car-parts") {
      const deleted = await deleteCarPart(id);
      carId = deleted.carId;
    } else {
      await deleteArticle(id);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }

  revalidatePath(`/${resource}`);
  const revalidate = publicRevalidation(resource, formData, carId);
  if (revalidate) await triggerRevalidation(revalidate);
  redirect(`/${resource}`);
}
```

## File: apps/admin/app/inventory/components/feature-manager.tsx
```typescript
"use client";

import { Check, Plus, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

type FeatureManagerProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

type Group = { label: string; items: string[] };

const GROUPS: Group[] = [
  {
    label: "Comfort",
    items: [
      "Air conditioning",
      "Climate control",
      "Leather interior",
      "Electric windows",
      "Keyless entry",
      "Heated seats",
      "Electric seats",
      "Central locking",
    ],
  },
  {
    label: "Technology",
    items: [
      "Bluetooth",
      "Apple CarPlay",
      "Android Auto",
      "Navigation system",
      "USB connectivity",
      "Wireless charging",
      "Digital instrument cluster",
      "Premium sound system",
    ],
  },
  {
    label: "Safety",
    items: [
      "Parking sensors",
      "Reverse camera",
      "Blind spot monitoring",
      "Lane departure warning",
      "Adaptive cruise control",
      "ABS",
      "Traction control",
      "Tyre pressure monitoring",
    ],
  },
  {
    label: "Exterior",
    items: [
      "Alloy wheels",
      "LED headlights",
      "Panoramic glass roof",
      "Roof rails",
      "Tow bar",
      "Daytime running lights",
      "Sunroof",
      "Fog lights",
    ],
  },
];

export function FeatureManager({ value, onChange }: FeatureManagerProps) {
  const [activeGroup, setActiveGroup] = useState("Comfort");
  const [query, setQuery] = useState("");
  const [custom, setCustom] = useState("");

  const selected = useMemo(() => new Set(value), [value]);
  const active =
    GROUPS.find((group) => group.label === activeGroup) ?? GROUPS[0];
  const searchable = GROUPS.flatMap((group) => group.items);
  const source = query.trim() ? searchable : active.items;
  const items = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? source.filter((item) => item.toLowerCase().includes(term))
      : source;
  }, [query, source]);

  function toggle(item: string) {
    onChange(
      selected.has(item)
        ? value.filter((feature) => feature !== item)
        : [...value, item],
    );
  }

  function addCustom() {
    const item = custom.trim();
    if (!item || selected.has(item)) return;
    onChange([...value, item]);
    setCustom("");
  }

  function selectVisible() {
    const additions = items.filter((item) => !selected.has(item));
    if (additions.length) onChange([...value, ...additions]);
  }

  return (
    <div className="feature-editor">
      <div className="feature-editor-head">
        <div>
          <span className="eyebrow">Vehicle equipment</span>
          <h3>Features &amp; extras</h3>
          <p>
            Select the equipment that is genuinely present on this vehicle.
            These items are published to the customer-facing listing.
          </p>
        </div>
        <div className="feature-count">
          <strong>{value.length}</strong>
          <span>selected</span>
        </div>
      </div>

      <div className="feature-editor-toolbar">
        <div className="feature-search">
          <Search size={14} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search equipment…"
            aria-label="Search equipment"
          />
        </div>
        <button
          type="button"
          className="feature-select-all"
          onClick={selectVisible}
        >
          <Check size={13} /> Select visible
        </button>
      </div>

      <div
        className="feature-tabs"
        role="tablist"
        aria-label="Equipment categories"
      >
        {GROUPS.map((group) => {
          const count = group.items.filter((item) => selected.has(item)).length;
          const activeTab = !query && group.label === activeGroup;
          return (
            <button
              key={group.label}
              type="button"
              role="tab"
              aria-selected={activeTab}
              className={activeTab ? "feature-tab active" : "feature-tab"}
              onClick={() => {
                setActiveGroup(group.label);
                setQuery("");
              }}
            >
              <span>{group.label}</span>
              {count > 0 && <b>{count}</b>}
            </button>
          );
        })}
      </div>

      <div className="feature-canvas">
        <div className="feature-canvas-head">
          <div>
            <span className="feature-label">
              {query ? "Search results" : activeGroup}
            </span>
            <span className="feature-meta">
              {items.length} available ·{" "}
              {items.filter((item) => selected.has(item)).length} selected
            </span>
          </div>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="feature-clear-search"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="feature-grid">
          {items.map((item) => {
            const isSelected = selected.has(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggle(item)}
                className={
                  isSelected ? "feature-option selected" : "feature-option"
                }
              >
                <span className="feature-option-copy">
                  <strong>{item}</strong>
                  <small>{query ? "Equipment" : activeGroup}</small>
                </span>
                <span className="feature-check">
                  {isSelected && <Check size={13} />}
                </span>
              </button>
            );
          })}
        </div>

        {!items.length && (
          <div className="feature-empty">
            <p>No matching equipment.</p>
            <span>Add it as a custom extra below.</span>
          </div>
        )}
      </div>

      <div className="feature-selected-panel">
        <div className="feature-selected-head">
          <div>
            <span className="feature-label">Selected equipment</span>
            <span className="feature-meta">
              Review before saving this vehicle
            </span>
          </div>
          {value.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="feature-remove-all"
            >
              Remove all
            </button>
          )}
        </div>

        {value.length ? (
          <div className="feature-chips">
            {value.map((item) => (
              <button
                key={item}
                type="button"
                className="feature-chip"
                onClick={() => toggle(item)}
                title={`Remove ${item}`}
              >
                <Check size={11} /> <span>{item}</span> <X size={11} />
              </button>
            ))}
          </div>
        ) : (
          <div className="feature-selected-empty">
            No equipment selected yet.
          </div>
        )}
      </div>

      <div className="feature-custom">
        <div>
          <span className="feature-label">Custom extra</span>
          <span className="feature-meta">
            Use this for an item not covered by the categories above.
          </span>
        </div>
        <div className="feature-custom-row">
          <input
            value={custom}
            onChange={(event) => setCustom(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addCustom();
              }
            }}
            placeholder="e.g. Harman Kardon sound system"
            aria-label="Custom vehicle extra"
          />
          <button type="button" onClick={addCustom}>
            <Plus size={13} /> Add
          </button>
        </div>
      </div>

      <input type="hidden" name="features" value={value.join("\n")} readOnly />

      <style jsx>{`
        .feature-editor{background:#fff;border:1px solid #dfe3e7;border-radius:9px;overflow:hidden;color:#111827}
        .feature-editor-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:22px 22px 20px;border-bottom:1px solid #edf0f2}
        .feature-editor-head h3{margin:5px 0 0;font-size:16px;font-weight:800;letter-spacing:-.01em}
        .feature-editor-head p{margin:6px 0 0;max-width:650px;color:#68727d;font-size:10px;line-height:1.6}
        .feature-count{min-width:68px;border-left:1px solid #e5e7eb;padding-left:18px;text-align:right}
        .feature-count strong{display:block;font-size:25px;line-height:1;font-weight:800;letter-spacing:-.04em}
        .feature-count span{display:block;margin-top:5px;color:#8a929d;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .feature-editor-toolbar{display:flex;gap:9px;align-items:center;padding:14px 22px;background:#fafbfc;border-bottom:1px solid #edf0f2}
        .feature-search{display:flex;align-items:center;gap:8px;flex:1;border:1px solid #dfe3e7;background:#fff;padding:0 12px;height:38px;color:#8a929d}
        .feature-search input{width:100%;border:0;outline:0;background:transparent;font-size:11px;color:#111827}
        .feature-search input::placeholder{color:#9aa2ab}
        .feature-select-all{display:inline-flex;align-items:center;gap:6px;height:38px;padding:0 12px;border:1px solid #dfe3e7;background:#fff;color:#4b5563;font-size:10px;font-weight:800;cursor:pointer}
        .feature-select-all:hover{border-color:#e65b1f;color:#c94c17}
        .feature-tabs{display:flex;gap:0;overflow-x:auto;padding:0 22px;background:#fff;border-bottom:1px solid #edf0f2}
        .feature-tab{display:inline-flex;align-items:center;gap:7px;padding:14px 14px;border:0;border-bottom:2px solid transparent;background:transparent;color:#7a838d;font-size:10px;font-weight:800;cursor:pointer;white-space:nowrap}
        .feature-tab:first-child{padding-left:2px}
        .feature-tab:hover{color:#111827}
        .feature-tab.active{border-bottom-color:#e65b1f;color:#20262d}
        .feature-tab b{min-width:17px;height:17px;padding:0 4px;display:inline-grid;place-items:center;background:#e65b1f;color:#fff;font-size:8px}
        .feature-canvas{background:#f7f8f9;padding:16px 22px 20px}
        .feature-canvas-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:10px}
        .feature-label{display:block;color:#4b5563;font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
        .feature-meta{display:block;margin-top:3px;color:#9aa2ab;font-size:9px}
        .feature-clear-search{border:0;background:transparent;color:#9f2f2f;font-size:9px;font-weight:800;cursor:pointer}
        .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:#dfe3e7;border:1px solid #dfe3e7}
        .feature-option{min-height:58px;display:flex;align-items:center;justify-content:space-between;gap:12px;border:0;background:#fff;padding:11px 13px;text-align:left;cursor:pointer;transition:.12s ease;box-shadow:inset 2px 0 transparent}
        .feature-option:hover{background:#fbfbfc}
        .feature-option.selected{box-shadow:inset 2px 0 #e65b1f;background:#fffdfb}
        .feature-option-copy{min-width:0}
        .feature-option-copy strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#374151;font-size:10px;font-weight:800}
        .feature-option-copy small{display:block;margin-top:4px;color:#9aa2ab;font-size:8px;text-transform:uppercase;letter-spacing:.08em}
        .feature-check{width:19px;height:19px;flex:0 0 19px;display:grid;place-items:center;border:1px solid #cfd5db;background:#fff;color:#fff}
        .feature-option.selected .feature-check{border-color:#e65b1f;background:#e65b1f}
        .feature-empty{padding:34px;text-align:center;border:1px solid #dfe3e7;background:#fff}
        .feature-empty p{margin:0;color:#4b5563;font-size:11px;font-weight:800}.feature-empty span{display:block;margin-top:4px;color:#9aa2ab;font-size:9px}
        .feature-selected-panel{padding:17px 22px;background:#18212b;color:#fff}
        .feature-selected-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
        .feature-selected-panel .feature-label{color:#aeb7c4}.feature-selected-panel .feature-meta{color:#7f8a97}
        .feature-remove-all{border:0;background:transparent;color:#e7b7a1;font-size:9px;font-weight:800;cursor:pointer}
        .feature-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px;max-height:96px;overflow:auto}
        .feature-chip{display:inline-flex;align-items:center;gap:5px;max-width:100%;border:1px solid #3c4855;background:#26313d;color:#e8edf2;padding:6px 8px;font-size:9px;font-weight:700;cursor:pointer}
        .feature-chip span{max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.feature-chip:hover{border-color:#e65b1f}
        .feature-selected-empty{margin-top:10px;padding:12px;border:1px dashed #3f4c59;color:#7f8a97;font-size:9px}
        .feature-custom{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.95fr);gap:20px;align-items:center;padding:18px 22px;background:#fff}
        .feature-custom-row{display:flex;gap:8px}.feature-custom-row input{flex:1;min-width:0;height:38px;border:1px solid #dfe3e7;padding:0 11px;outline:0;font-size:10px}.feature-custom-row input:focus{border-color:#aeb5bf;box-shadow:0 0 0 3px rgba(17,24,39,.05)}
        .feature-custom-row button{height:38px;display:inline-flex;align-items:center;gap:6px;border:0;background:#111827;color:#fff;padding:0 12px;font-size:10px;font-weight:800;cursor:pointer}.feature-custom-row button:hover{background:#e65b1f}
        @media(max-width:640px){.feature-editor-head{padding:18px;}.feature-editor-toolbar{padding:12px 18px;}.feature-tabs{padding:0 18px}.feature-canvas{padding:14px 18px 18px}.feature-grid{grid-template-columns:1fr}.feature-custom{grid-template-columns:1fr;padding:16px 18px}.feature-count{display:none}.feature-select-all{display:none}}
      `}</style>
    </div>
  );
}
```

## File: apps/admin/app/inventory/[id]/edit/page.tsx
```typescript
import { requireAdmin } from "@icar-gezina/supabase/server";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Fuel,
  Gauge,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { updateVehicle } from "../../actions";
import { VehicleForm } from "../../vehicle-form";

export default async function EditVehiclePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { supabase, user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");

  const { id } = await params;
  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error || !car) notFound();

  const galleryUrls = Array.isArray(car.gallery_urls)
    ? car.gallery_urls.filter(Boolean)
    : [];
  const features = Array.isArray(car.features)
    ? car.features.filter(Boolean)
    : [];
  const title = `${car.make ?? ""} ${car.model ?? ""}`.trim() || "Vehicle";
  const price = Number(car.price || 0).toLocaleString("en-ZA");
  const mileage = Number(car.mileage || 0).toLocaleString("en-ZA");

  return (
    <>
      <div className="page-header">
        <div>
          <Link href={`/inventory/${id}`} className="back-link">
            <ArrowLeft size={14} /> Back to vehicle
          </Link>
          <h1>Edit {title}</h1>
          <p>
            Update the vehicle information, customer-facing content and media
            used across the showroom.
          </p>
        </div>
        <Link href={`/cars/${id}`} target="_blank" className="button secondary">
          <ExternalLink size={15} /> View public listing
        </Link>
      </div>

      <div className="stats" style={{ marginBottom: 20 }}>
        <Summary
          label="Year"
          value={car.year || "—"}
          icon={<CalendarDays size={17} />}
        />
        <Summary
          label="Mileage"
          value={`${mileage} km`}
          icon={<Gauge size={17} />}
        />
        <Summary
          label="Fuel"
          value={car.fuel_type || "—"}
          icon={<Fuel size={17} />}
        />
        <Summary label="Price" value={`R ${price}`} icon={<Tag size={17} />} />
      </div>

      <div
        style={{
          marginBottom: 18,
          padding: "13px 16px",
          border: "1px solid #e5e7eb",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2f6e43",
            }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#4b5563" }}>
            Editing active inventory
          </span>
          <span style={{ fontSize: 11, color: "#9ca3af" }}>
            · {features.length} features · {galleryUrls.length} gallery images
          </span>
        </div>
        <span
          style={{ fontSize: 10, color: "#9ca3af", fontFamily: "monospace" }}
        >
          {id}
        </span>
      </div>

      <VehicleForm
        values={{
          id: car.id,
          make: car.make ?? "",
          model: car.model ?? "",
          year: Number(car.year || new Date().getFullYear()),
          price: Number(car.price || 0),
          mileage: Number(car.mileage || 0),
          fuelType: car.fuel_type ?? "",
          transmission: car.transmission ?? "",
          bodyType: car.body_type ?? "",
          color: car.color ?? "",
          imageUrl: car.image_url ?? "",
          galleryUrls,
          description: car.description ?? "",
          features,
        }}
        action={updateVehicle}
        submitLabel="Save changes"
      />
    </>
  );
}

function Summary({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="stat-card">
      <div style={{ color: "#c7a45a" }}>{icon}</div>
      <div className="stat-label" style={{ marginTop: 10 }}>
        {label}
      </div>
      <div className="stat-value" style={{ fontSize: 20 }}>
        {value}
      </div>
    </div>
  );
}
```

## File: apps/admin/app/inventory/[id]/page.tsx
```typescript
import { getCarById } from "@icar-gezina/supabase/Queries/cars";
import { requireAdmin } from "@icar-gezina/supabase/server";
import {
  ArrowLeft,
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  ExternalLink,
  Fuel,
  Gauge,
  Pencil,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { deleteVehicle } from "../actions";
import { DeleteForm } from "../../delete-form";

function money(input: unknown) {
  const n = Number(input ?? 0);
  return Number.isFinite(n) ? `R ${n.toLocaleString("en-ZA")}` : "—";
}

function display(input: unknown, fallback = "Not specified") {
  if (input === null || input === undefined || String(input).trim() === "")
    return fallback;
  return String(input);
}

const specItems = [
  ["year", CalendarDays, "Year"],
  ["mileage", Gauge, "Mileage"],
  ["fuelType", Fuel, "Fuel"],
  ["transmission", CircleGauge, "Transmission"],
  ["bodyType", Tag, "Body type"],
  ["color", CarFront, "Colour"],
] as const;

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { user, profile } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!profile) redirect("/admin/unauthorized");

  const { id } = await params;
  let car: any;
  try {
    car = await getCarById(id);
  } catch {
    notFound();
  }
  if (!car) notFound();

  const gallery = Array.from(
    new Set(
      [
        car.imageUrl,
        ...(Array.isArray(car.galleryUrls) ? car.galleryUrls : []),
      ].filter(Boolean),
    ),
  ) as string[];
  const features = Array.isArray(car.features)
    ? car.features.filter(Boolean)
    : [];
  const title =
    `${display(car.make, "")} ${display(car.model, "")}`.trim() || "Vehicle";
  const mileage = Number(car.mileage || 0).toLocaleString("en-ZA");

  return (
    <>
      <div className="page-header">
        <div>
          <Link href="/inventory" className="back-link">
            <ArrowLeft size={14} /> Back to inventory
          </Link>
          <h1>{title}</h1>
          <p>
            Review the dealership listing, vehicle specifications, media and
            customer-facing content.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link
            href={`/cars/${id}`}
            target="_blank"
            className="button secondary"
          >
            <ExternalLink size={15} /> View showroom
          </Link>
          <Link href={`/inventory/${id}/edit`} className="button">
            <Pencil size={15} /> Edit vehicle
          </Link>
          <DeleteForm action={deleteVehicle} id={id} resourceName="" />
        </div>
      </div>

      <section
        className="panel"
        style={{ overflow: "hidden", marginBottom: 18 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.35fr) minmax(280px,.65fr)",
          }}
        >
          <div
            style={{
              minHeight: 340,
              background: "#eef0f3",
              overflow: "hidden",
            }}
          >
            {car.imageUrl ? (
              <img
                src={car.imageUrl}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 340,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div
                className="empty-state"
                style={{
                  height: "100%",
                  minHeight: 340,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div>
                  <CarFront size={38} />
                  <div style={{ marginTop: 8 }}>No primary image</div>
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              padding: 28,
              background: "#111827",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: "#9ca3af" }}>
                Active vehicle
              </span>
              <h2
                style={{
                  fontSize: 26,
                  margin: "8px 0 0",
                  letterSpacing: "-.03em",
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: "#aeb7c4",
                }}
              >
                {display(car.description, "No description has been added yet.")}
              </p>
            </div>
            <div
              style={{
                borderTop: "1px solid #2c3747",
                paddingTop: 18,
                marginTop: 24,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 10,
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                Asking price
              </span>
              <strong style={{ display: "block", marginTop: 5, fontSize: 30 }}>
                {money(car.price)}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <div className="stats" style={{ marginBottom: 18 }}>
        {specItems.slice(0, 4).map(([key, Icon, label]) => (
          <div className="stat-card" key={key}>
            <Icon size={18} style={{ color: "#c7a45a" }} />
            <div className="stat-label" style={{ marginTop: 12 }}>
              {label}
            </div>
            <div className="stat-value" style={{ fontSize: 20 }}>
              {key === "mileage" ? `${mileage} km` : display(car[key])}
            </div>
          </div>
        ))}
      </div>

      <div className="detail-grid">
        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Vehicle profile</span>
              <h2 style={{ marginTop: 4 }}>Specifications</h2>
            </div>
            <span style={{ fontSize: 10, color: "#9ca3af" }}>ID {id}</span>
          </div>
          <div className="detail-fields">
            {specItems.map(([key, Icon, label]) => (
              <div key={key}>
                <span>
                  <Icon
                    size={12}
                    style={{ display: "inline", marginRight: 5 }}
                  />{" "}
                  {label}
                </span>
                <strong>
                  {key === "mileage" ? `${mileage} km` : display(car[key])}
                </strong>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Customer-facing content</span>
              <h2 style={{ marginTop: 4 }}>Description</h2>
            </div>
          </div>
          <div className="panel-body">
            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.8,
                color: "#4b5563",
                whiteSpace: "pre-wrap",
              }}
            >
              {display(car.description, "No description has been added.")}
            </p>
          </div>
        </section>
      </div>

      <section className="panel" style={{ marginTop: 18 }}>
        <div className="panel-header">
          <div>
            <span className="eyebrow">Vehicle media</span>
            <h2 style={{ marginTop: 4 }}>Gallery</h2>
          </div>
          <Link
            href={`/inventory/${id}/edit`}
            className="button secondary"
            style={{ padding: "8px 11px" }}
          >
            Manage media <ChevronRight size={14} />
          </Link>
        </div>
        {gallery.length ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              gap: 10,
              padding: 20,
            }}
          >
            {gallery.map((url, index) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={`${url}-${index}`}
                style={{
                  position: "relative",
                  display: "block",
                  aspectRatio: index === 0 ? "4/3" : "4/3",
                  overflow: "hidden",
                  background: "#eef0f3",
                  gridColumn: index === 0 ? "span 2" : "span 1",
                  gridRow: index === 0 ? "span 2" : "span 1",
                }}
              >
                <img
                  src={url}
                  alt={`${title} gallery ${index + 1}`}
                  loading={index > 1 ? "lazy" : "eager"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {index === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      left: 10,
                      bottom: 10,
                      padding: "5px 8px",
                      background: "#111827",
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Cover
                  </span>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            No gallery images have been added. Use Edit vehicle to add
            photography.
          </div>
        )}
      </section>

      <div className="detail-grid" style={{ marginTop: 18 }}>
        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Equipment</span>
              <h2 style={{ marginTop: 4 }}>Features & extras</h2>
            </div>
            <span className="status">
              {features.length} {features.length === 1 ? "feature" : "features"}
            </span>
          </div>
          {features.length ? (
            <ul className="feature-list">
              {features.map((feature: string) => (
                <li key={feature}>
                  <CheckCircle2
                    size={13}
                    style={{
                      display: "inline",
                      marginRight: 5,
                      color: "#c7a45a",
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">No features have been added.</div>
          )}
        </section>
        <section className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Record</span>
              <h2 style={{ marginTop: 4 }}>Inventory metadata</h2>
            </div>
          </div>
          <div className="detail-fields">
            <div>
              <span>Vehicle ID</span>
              <strong style={{ wordBreak: "break-all" }}>{id}</strong>
            </div>
            <div>
              <span>Created</span>
              <strong>
                {car.createdAt
                  ? new Date(car.createdAt).toLocaleString("en-ZA")
                  : "—"}
              </strong>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
```

## File: apps/admin/app/inventory/components/gallery-manager.tsx
```typescript
"use client";

import {
  ArrowDown,
  ArrowUp,
  GripVertical,
  Image as ImageIcon,
  ImagePlus,
  Link2,
  Plus,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type GalleryManagerProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

function isValidUrl(url: string) {
  return /^https?:\/\/[^\s]+$/i.test(url.trim());
}

const MEDIA_GUIDE = [
  { label: "01", title: "Lead", hint: "Best exterior angle" },
  { label: "02", title: "Walkaround", hint: "Front, rear & sides" },
  { label: "03", title: "Cabin", hint: "Interior & dashboard" },
  { label: "04", title: "Details", hint: "Wheels, trim & extras" },
];

export function GalleryManager({ value, onChange }: GalleryManagerProps) {
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);

  const failedCount = failedImages.filter((url) => value.includes(url)).length;
  const healthyCount = value.length - failedCount;
  const galleryStatus = useMemo(() => {
    if (!value.length) return { label: "Needs photography", tone: "warning" };
    if (failedCount)
      return {
        label: `${healthyCount} ready · ${failedCount} broken`,
        tone: "danger",
      };
    if (value.length === 1)
      return { label: "Lead photo only", tone: "caution" };
    return { label: "Gallery ready", tone: "success" };
  }, [value.length, healthyCount, failedCount]);

  function add() {
    const urls = draft
      .split(/\r?\n/)
      .map((url) => url.trim())
      .filter(Boolean);
    if (!urls.length) return;
    if (value.length >= 20)
      return setError("This vehicle already has the maximum of 20 photos.");
    const invalid = urls.find((url) => !isValidUrl(url));
    if (invalid) return setError("Use valid http:// or https:// image URLs.");
    const unique = urls
      .filter((url) => !value.includes(url))
      .slice(0, 20 - value.length);
    if (!unique.length)
      return setError("Those photos are already in the gallery.");
    onChange([...value, ...unique]);
    setDraft("");
    setError("");
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  function makeLead(index: number) {
    if (index === 0) return;
    const next = [...value];
    const [lead] = next.splice(index, 1);
    next.unshift(lead);
    onChange(next);
  }

  function remove(index: number) {
    const url = value[index];
    onChange(value.filter((_, i) => i !== index));
    setFailedImages((current) => current.filter((item) => item !== url));
    if (preview === url) setPreview(null);
  }

  return (
    <div className="vehicle-media">
      <section className="vehicle-media-head">
        <div className="vehicle-media-head-main">
          <div className="vehicle-media-icon">
            <ImagePlus size={18} />
          </div>
          <div>
            <div className="vehicle-media-title-row">
              <h4>Vehicle media</h4>
              <span className="vehicle-media-count">
                {value.length}/20 photos
              </span>
            </div>
            <p>
              Build the photography set customers will see. Lead with the
              strongest exterior image.
            </p>
          </div>
        </div>
        <div className={`vehicle-media-status ${galleryStatus.tone}`}>
          <span className="vehicle-media-status-dot" />
          <div>
            <strong>{galleryStatus.label}</strong>
            <small>Media status</small>
          </div>
        </div>
      </section>

      <div className="vehicle-media-guide">
        {MEDIA_GUIDE.map((item) => (
          <div className="vehicle-media-guide-item" key={item.label}>
            <span>{item.label}</span>
            <div>
              <strong>{item.title}</strong>
              <small>{item.hint}</small>
            </div>
          </div>
        ))}
      </div>

      <section className="vehicle-media-add">
        <div className="vehicle-media-section-title">
          <div>
            <strong>Add photography</strong>
            <small>Paste one URL or multiple URLs, one per line.</small>
          </div>
          <span>Max 20</span>
        </div>
        <div className="vehicle-media-add-row">
          <div className="vehicle-media-url-wrap">
            <Link2 size={15} />
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  add();
                }
              }}
              placeholder="https://…/vehicle-front.jpg\nhttps://…/vehicle-interior.jpg"
              rows={3}
              aria-label="Vehicle image URLs"
            />
          </div>
          <button
            type="button"
            onClick={add}
            disabled={value.length >= 20}
            className="vehicle-media-add-button"
          >
            <Plus size={15} /> Add photos
          </button>
        </div>
        {error && (
          <div className="vehicle-media-error">
            <X size={13} />
            {error}
          </div>
        )}
        <div className="vehicle-media-add-foot">
          <span>Duplicates are ignored automatically.</span>
          <span>
            <kbd>Ctrl/⌘ + Enter</kbd> to add quickly.
          </span>
        </div>
      </section>

      {!value.length ? (
        <div className="vehicle-media-empty">
          <div className="vehicle-media-empty-icon">
            <ImageIcon size={23} />
          </div>
          <strong>Start the vehicle gallery</strong>
          <p>
            Add the strongest exterior photo first. The first image becomes the
            vehicle cover.
          </p>
        </div>
      ) : (
        <section className="vehicle-media-gallery">
          <header className="vehicle-media-gallery-head">
            <div>
              <div className="vehicle-media-section-title-inline">
                <strong>Gallery sequence</strong>
                <span>{value.length} photos</span>
              </div>
              <small>Photo 01 is the customer-facing cover image.</small>
            </div>
            <div className="vehicle-media-order">
              <GripVertical size={13} /> Ordered gallery
            </div>
          </header>
          <div className="vehicle-media-grid">
            {value.map((url, index) => {
              const failed = failedImages.includes(url);
              return (
                <article
                  className={`vehicle-media-card ${index === 0 ? "is-lead" : ""}`}
                  key={`${url}-${index}`}
                >
                  <button
                    type="button"
                    className="vehicle-media-photo"
                    onClick={() => !failed && setPreview(url)}
                    aria-label={`Preview vehicle photo ${index + 1}`}
                  >
                    {!failed ? (
                      <img
                        src={url}
                        alt={`Vehicle ${index + 1}`}
                        loading="lazy"
                        onError={() =>
                          setFailedImages((current) =>
                            current.includes(url) ? current : [...current, url],
                          )
                        }
                      />
                    ) : (
                      <div className="vehicle-media-broken">
                        <ImageIcon size={22} />
                        <strong>Photo unavailable</strong>
                        <small>Replace or remove</small>
                      </div>
                    )}
                    <span className="vehicle-media-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index === 0 ? (
                      <span className="vehicle-media-lead">
                        <Star size={10} className="fill-current" /> Lead photo
                      </span>
                    ) : (
                      <span
                        className={`vehicle-media-ready ${failed ? "is-broken" : ""}`}
                      >
                        {failed ? "Broken" : "Ready"}
                      </span>
                    )}
                  </button>
                  <div className="vehicle-media-card-body">
                    <div className="vehicle-media-card-meta">
                      <div>
                        <strong>
                          {index === 0
                            ? "Primary vehicle photo"
                            : `Gallery photo ${index + 1}`}
                        </strong>
                        <span title={url}>{url}</span>
                      </div>
                      <GripVertical size={14} />
                    </div>
                    <div className="vehicle-media-actions">
                      <div className="vehicle-media-actions-left">
                        <button
                          type="button"
                          disabled={index === 0}
                          onClick={() => move(index, -1)}
                          aria-label="Move photo up"
                        >
                          <ArrowUp size={13} />
                        </button>
                        <button
                          type="button"
                          disabled={index === value.length - 1}
                          onClick={() => move(index, 1)}
                          aria-label="Move photo down"
                        >
                          <ArrowDown size={13} />
                        </button>
                        <button
                          type="button"
                          disabled={index === 0}
                          onClick={() => makeLead(index)}
                          aria-label="Make lead photo"
                        >
                          <Star size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="vehicle-media-remove"
                        onClick={() => remove(index)}
                      >
                        <Trash2 size={13} /> Remove
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="vehicle-media-tip">
            <strong>Recommended order:</strong> strongest exterior → front/rear
            → interior → dashboard → wheels → detail shots.
          </div>
        </section>
      )}

      {preview && (
        <div
          className="vehicle-media-preview"
          role="dialog"
          aria-modal="true"
          aria-label="Vehicle image preview"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
          <img
            src={preview}
            alt="Vehicle gallery preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <input
        type="hidden"
        name="galleryUrls"
        value={value.join("\n")}
        readOnly
      />

      <style jsx>{`
        .vehicle-media{margin-top:4px;background:#fff;border:1px solid #dfe3e7;border-radius:9px;overflow:hidden;color:#111827}
        .vehicle-media-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:22px;border-bottom:1px solid #edf0f2;background:#18212b;color:#fff}
        .vehicle-media-head-main{display:flex;gap:14px;min-width:0}.vehicle-media-icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;background:#e65b1f}.vehicle-media-title-row{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.vehicle-media-title-row h4{margin:0;font-size:16px;font-weight:800}.vehicle-media-count{border:1px solid rgba(255,255,255,.16);padding:5px 8px;color:#adb7c2;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.vehicle-media-head p{margin:6px 0 0;max-width:660px;color:#9eabb8;font-size:10px;line-height:1.6}
        .vehicle-media-status{min-width:180px;display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid rgba(255,255,255,.1);background:#202b37}.vehicle-media-status-dot{width:8px;height:8px;border-radius:50%;background:currentColor}.vehicle-media-status strong{display:block;font-size:10px;font-weight:800}.vehicle-media-status small{display:block;margin-top:3px;color:#71808e;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.vehicle-media-status.success{color:#79b48d}.vehicle-media-status.caution{color:#e2b75f}.vehicle-media-status.warning,.vehicle-media-status.danger{color:#df7777}
        .vehicle-media-guide{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#33404d;border-bottom:1px solid #dfe3e7}.vehicle-media-guide-item{display:flex;align-items:center;gap:10px;padding:12px;background:#202b37}.vehicle-media-guide-item>span{width:26px;height:26px;display:grid;place-items:center;background:#2b3947;color:#b8c2cc;font-size:8px;font-weight:800}.vehicle-media-guide-item strong{display:block;color:#edf1f4;font-size:9px;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-guide-item small{display:block;margin-top:3px;color:#81909e;font-size:8px}
        .vehicle-media-add{padding:17px 22px;background:#f7f8f9;border-bottom:1px solid #dfe3e7}.vehicle-media-section-title{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.vehicle-media-section-title strong,.vehicle-media-section-title-inline strong{display:block;color:#303841;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.vehicle-media-section-title small{display:block;margin-top:4px;color:#8a929d;font-size:9px}.vehicle-media-section-title>span{color:#9aa2ab;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-add-row{display:grid;grid-template-columns:minmax(0,1fr) 145px;gap:9px}.vehicle-media-url-wrap{position:relative}.vehicle-media-url-wrap svg{position:absolute;left:12px;top:12px;color:#8a929d;pointer-events:none}.vehicle-media-url-wrap textarea{width:100%;min-height:76px;resize:vertical;border:1px solid #dfe3e7;background:#fff;padding:12px 12px 12px 35px;outline:0;color:#20262d;font-size:11px;line-height:1.5}.vehicle-media-url-wrap textarea:focus{border-color:#aeb5bf;box-shadow:0 0 0 3px rgba(17,24,39,.05)}.vehicle-media-add-button{display:flex;align-items:center;justify-content:center;gap:7px;border:0;background:#e65b1f;color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;cursor:pointer}.vehicle-media-add-button:hover{background:#c94c17}.vehicle-media-add-button:disabled{opacity:.45;cursor:not-allowed}.vehicle-media-error{display:flex;align-items:center;gap:6px;margin-top:9px;color:#9f2f2f;font-size:9px;font-weight:800}.vehicle-media-add-foot{display:flex;justify-content:space-between;gap:10px;margin-top:9px;color:#9aa2ab;font-size:8px}.vehicle-media-add-foot kbd{border:1px solid #dfe3e7;background:#fff;padding:2px 5px;font-family:monospace}
        .vehicle-media-empty{padding:48px 22px;text-align:center;background:#fafbfc;border:1px dashed #cfd5db}.vehicle-media-empty-icon{width:52px;height:52px;margin:0 auto 13px;display:grid;place-items:center;background:#fff;border:1px solid #e1e5e8;color:#9aa2ab}.vehicle-media-empty strong{display:block;color:#303841;font-size:11px;font-weight:800}.vehicle-media-empty p{max-width:420px;margin:5px auto 0;color:#7b858f;font-size:9px;line-height:1.6}
        .vehicle-media-gallery{border:1px solid #dfe3e7;background:#fff}.vehicle-media-gallery-head{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:17px 22px;border-bottom:1px solid #edf0f2}.vehicle-media-section-title-inline{display:flex;align-items:center;gap:8px}.vehicle-media-section-title-inline span{background:#18212b;color:#fff;padding:4px 7px;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.vehicle-media-gallery-head small{display:block;margin-top:4px;color:#8a929d;font-size:9px}.vehicle-media-order{display:flex;align-items:center;gap:5px;color:#8a929d;font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.vehicle-media-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#dfe3e7}.vehicle-media-card{background:#fff;min-width:0}.vehicle-media-card.is-lead{box-shadow:inset 0 3px #e65b1f}.vehicle-media-photo{position:relative;display:block;width:100%;aspect-ratio:4/3;border:0;padding:0;background:#edf0f2;overflow:hidden;cursor:pointer;text-align:left}.vehicle-media-photo img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .3s ease}.vehicle-media-photo:hover img{transform:scale(1.025)}.vehicle-media-number{position:absolute;left:10px;top:10px;padding:5px 7px;background:rgba(24,33,43,.92);color:#fff;font-size:9px;font-weight:800}.vehicle-media-lead{position:absolute;right:10px;top:10px;display:flex;align-items:center;gap:4px;padding:5px 7px;background:#e65b1f;color:#fff;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.vehicle-media-ready{position:absolute;right:10px;top:10px;padding:5px 7px;background:rgba(255,255,255,.92);color:#52606d;font-size:8px;font-weight:800;text-transform:uppercase}.vehicle-media-ready.is-broken{background:#fff0f0;color:#9f2f2f}.vehicle-media-broken{height:100%;display:grid;place-items:center;align-content:center;gap:5px;color:#9aa2ab}.vehicle-media-broken strong{font-size:9px}.vehicle-media-broken small{font-size:8px;color:#9f2f2f}.vehicle-media-card-body{padding:13px}.vehicle-media-card-meta{display:flex;justify-content:space-between;gap:8px}.vehicle-media-card-meta>div{min-width:0}.vehicle-media-card-meta strong{display:block;color:#303841;font-size:9px;font-weight:800}.vehicle-media-card-meta span{display:block;overflow:hidden;margin-top:4px;color:#9aa2ab;font:8px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;text-overflow:ellipsis;white-space:nowrap}.vehicle-media-card-meta>svg{color:#c4cad0;flex:0 0 auto}.vehicle-media-actions{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:11px;padding-top:11px;border-top:1px solid #edf0f2}.vehicle-media-actions-left{display:flex;gap:5px}.vehicle-media-actions button{width:30px;height:30px;display:grid;place-items:center;border:1px solid #dfe3e7;background:#fff;color:#5f6974;cursor:pointer}.vehicle-media-actions button:hover{border-color:#aeb5bf;background:#f7f8f9}.vehicle-media-actions button:disabled{opacity:.3;cursor:not-allowed}.vehicle-media-actions .vehicle-media-remove{width:auto;display:flex;align-items:center;gap:5px;padding:0 9px;color:#9f2f2f;border-color:#efd4d4;font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.vehicle-media-actions .vehicle-media-remove:hover{background:#fff4f4;border-color:#e5bcbc}.vehicle-media-tip{margin:14px;padding:11px 13px;border:1px solid #dfe3e7;background:#f7f8f9;color:#68727d;font-size:9px;line-height:1.5}.vehicle-media-tip strong{color:#303841}
        .vehicle-media-preview{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:28px;background:rgba(17,24,39,.92)}.vehicle-media-preview img{max-width:94vw;max-height:88vh;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.4)}.vehicle-media-preview>button{position:absolute;right:20px;top:20px;width:40px;height:40px;display:grid;place-items:center;border:0;background:#fff;color:#18212b;cursor:pointer}
        @media(max-width:900px){.vehicle-media-head{flex-direction:column}.vehicle-media-status{width:100%}.vehicle-media-grid{grid-template-columns:repeat(2,1fr)}.vehicle-media-guide{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.vehicle-media-head{padding:18px}.vehicle-media-guide{grid-template-columns:1fr}.vehicle-media-add{padding:15px}.vehicle-media-add-row{grid-template-columns:1fr}.vehicle-media-add-button{min-height:44px}.vehicle-media-add-foot{flex-direction:column}.vehicle-media-gallery-head{align-items:flex-start;flex-direction:column;padding:15px}.vehicle-media-grid{grid-template-columns:1fr}.vehicle-media-card-body{padding:12px}}
      `}</style>
    </div>
  );
}
```

## File: apps/admin/app/inventory/vehicle-form.tsx
```typescript
"use client";

import type { ActionResult } from "@icar-gezina/contracts/actionResult";
import { Check, Image as ImageIcon, Save, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FeatureManager } from "./components/feature-manager";
import { GalleryManager } from "./components/gallery-manager";

type FormAction = (formData: FormData) => Promise<ActionResult>;

export type VehicleFormValues = {
  id?: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;
  imageUrl: string;
  galleryUrls: string[];
  description: string;
  features: string[];
};
type VehicleFormProps = {
  values: VehicleFormValues;
  action: FormAction;
  submitLabel: string;
};
const bodyTypes = [
  "SUV",
  "Bakkie",
  "Hatchback",
  "Sedan",
  "Coupe",
  "Convertible",
  "MPV",
  "Station Wagon",
  "Other",
];
const fuelTypes = [
  "Petrol",
  "Diesel",
  "Hybrid",
  "Plug-in Hybrid",
  "Electric",
  "Other",
];
const transmissions = ["Automatic", "Manual", "CVT", "DCT", "Other"];

function isNextRedirect(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const digest =
    "digest" in error ? (error as { digest?: unknown }).digest : undefined;
  return typeof digest === "string" && digest.startsWith("NEXT_REDIRECT");
}
function validImageUrl(url: string) {
  return /^https?:\/\/[^\s]+$/i.test(url.trim());
}

export function VehicleForm({ values, action, submitLabel }: VehicleFormProps) {
  const [imageUrl, setImageUrl] = useState(values.imageUrl);
  const [gallery, setGallery] = useState(values.galleryUrls);
  const [features, setFeatures] = useState(values.features);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const checklist = [
    ["Vehicle identity", Boolean(values.id)],
    ["Pricing", Number(values.price) > 0],
    ["Specifications", Boolean(values.year && values.make && values.model)],
    ["Cover image", validImageUrl(imageUrl)],
    ["Gallery", gallery.length > 0],
  ] as const;

  async function submit(formData: FormData) {
    setSaving(true);
    setSaved(false);
    setError("");
    formData.set("galleryUrls", gallery.join("\n"));
    formData.set("features", features.join("\n"));
    try {
      await action(formData);
      setSaved(true);
    } catch (err) {
      if (isNextRedirect(err)) throw err;
      setError(err instanceof Error ? err.message : "Unable to save vehicle.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form action={submit} className="vehicle-editor">
      {values.id && <input type="hidden" name="id" value={values.id} />}
      <div className="editor-toolbar">
        <div>
          <span className="eyebrow">Inventory / Edit vehicle</span>
          <h2>
            {values.make} {values.model}
          </h2>
          <p>Update the customer-facing listing, specifications and media.</p>
        </div>
        <div className="editor-actions">
          <Link
            href={values.id ? `/inventory/${values.id}` : "/inventory"}
            className="button secondary"
          >
            Cancel
          </Link>
          <button className="button" type="submit" disabled={saving}>
            <Save size={15} />{" "}
            {saving ? "Saving…" : saved ? "Saved" : submitLabel}
          </button>
        </div>
      </div>
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
      <div className="editor-layout">
        <div className="editor-main">
          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Vehicle details</h3>
                <p>
                  Core information displayed across the showroom and vehicle
                  page.
                </p>
              </div>
            </div>
            <div className="form-grid">
              <Field
                label="Make"
                name="make"
                defaultValue={values.make}
                required
                placeholder="e.g. BMW"
              />
              <Field
                label="Model"
                name="model"
                defaultValue={values.model}
                required
                placeholder="e.g. X3 xDrive20d"
              />
              <Field
                label="Year"
                name="year"
                type="number"
                min="1900"
                max="2100"
                defaultValue={values.year}
                required
              />
              <Field
                label="Price"
                name="price"
                type="number"
                min="0"
                step="1"
                defaultValue={values.price}
                required
                prefix="R"
              />
              <Field
                label="Mileage"
                name="mileage"
                type="number"
                min="0"
                step="1"
                defaultValue={values.mileage}
                required
                suffix="km"
              />
              <SelectField
                label="Fuel type"
                name="fuelType"
                defaultValue={values.fuelType}
                options={fuelTypes}
              />
              <SelectField
                label="Transmission"
                name="transmission"
                defaultValue={values.transmission}
                options={transmissions}
              />
              <SelectField
                label="Body type"
                name="bodyType"
                defaultValue={values.bodyType}
                options={bodyTypes}
              />
              <Field
                label="Colour"
                name="color"
                defaultValue={values.color}
                placeholder="e.g. Alpine White"
              />
            </div>
          </section>

          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Description</h3>
                <p>
                  Keep the customer-facing vehicle summary clear and useful.
                </p>
              </div>
            </div>
            <div className="field field-wide">
              <label className="field-label" htmlFor="description">
                Vehicle description
              </label>
              <textarea
                id="description"
                className="input field-textarea"
                name="description"
                defaultValue={values.description}
                placeholder="Describe condition, specification, service history and standout features…"
              />
            </div>
          </section>

          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Features & extras</h3>
                <p>
                  Add individual equipment items. Each item is saved separately.
                </p>
              </div>
              <span className="field-hint">
                {features.length}{" "}
                {features.length === 1 ? "feature" : "features"}
              </span>
            </div>
            <FeatureManager value={features} onChange={setFeatures} />
          </section>

          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Vehicle media</h3>
                <p>
                  Add, preview, remove and reorder customer-facing photography.
                  The first image is the gallery lead.
                </p>
              </div>
              <span className="field-hint">
                {gallery.length} {gallery.length === 1 ? "image" : "images"}
              </span>
            </div>
            <GalleryManager value={gallery} onChange={setGallery} />
          </section>
        </div>

        <aside className="editor-side">
          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Cover image</h3>
                <p>Primary image used across the showroom.</p>
              </div>
              <ImageIcon size={18} />
            </div>
            <div className="image-preview large">
              {imageUrl && validImageUrl(imageUrl) ? (
                <img
                  src={imageUrl}
                  alt={`${values.make} ${values.model} cover preview`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div>
                  <ImageIcon size={26} />
                  <span>
                    {imageUrl ? "Invalid image URL" : "No cover image"}
                  </span>
                </div>
              )}
            </div>
            <div className="field">
              <label className="field-label" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                id="imageUrl"
                className="input"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://…"
              />
            </div>
            {imageUrl && (
              <button
                type="button"
                className="image-clear"
                onClick={() => setImageUrl("")}
              >
                <X size={13} /> Remove cover image
              </button>
            )}
          </section>

          <section className="editor-card">
            <div className="editor-card-header">
              <div>
                <h3>Publishing checklist</h3>
                <p>Quick quality check before saving.</p>
              </div>
            </div>
            <div className="checklist">
              {checklist.map(([label, ok]) => (
                <span key={label} className={ok ? "check-ok" : "check-missing"}>
                  {ok ? <Check size={14} /> : <i className="check-dot" />}
                  {label}
                </span>
              ))}
            </div>
          </section>

          <section className="editor-card help-card">
            <h3>Verify the listing</h3>
            <p>
              Save your changes, then open the vehicle details page to confirm
              the final customer-facing listing.
            </p>
            <Link
              href={values.id ? `/inventory/${values.id}` : "/inventory"}
              className="text-link"
            >
              View vehicle →
            </Link>
          </section>
        </aside>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required = false,
  placeholder,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  name: string;
  defaultValue: string | number;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
  max?: string;
  step?: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="input-wrap">
        {prefix && <span className="input-affix">{prefix}</span>}
        <input
          className="input"
          name={name}
          type={type}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
        />
        {suffix && <span className="input-affix">{suffix}</span>}
      </div>
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue: string;
  options: string[];
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <select className="input" name={name} defaultValue={defaultValue}>
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
```
