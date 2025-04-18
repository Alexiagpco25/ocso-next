"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData) {
  const locationId = formData.get("deleteValue");
  if (!locationId) return;
  const response = await fetch(`${API_URL}/locations/${locationId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
  });
  console.log(response)
  console.log((await response).json)
  revalidateTag("dashboard:locations");
  redirect("/dashboard");
}
