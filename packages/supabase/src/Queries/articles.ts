import type { Article } from "@icar-gezina/contracts/article";
import { createSupabasePublicClient } from "../server";
import type { Database } from "../supabaseType";

type ArticleRow = Database["public"]["Tables"]["articles"]["Row"];

function normalizeArticle(row: ArticleRow): Article {
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

export async function getPublishedArticles(): Promise<Article[]> {
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
