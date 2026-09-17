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
