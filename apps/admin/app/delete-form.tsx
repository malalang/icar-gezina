"use client";

import type { FormAction } from "@icar-gezina/contracts/actionResult";
import { Trash2 } from "lucide-react";

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
