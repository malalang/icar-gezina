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
