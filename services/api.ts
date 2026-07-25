const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch<T>(
  endpoint: string
): Promise<T> {
  const url = `${API_BASE_URL}/${endpoint.replace(/^\/+/, "")}`;

  console.log("Fetching:", url);

  const response = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", response.status);

  if (!response.ok) {
    console.log("Response body:", await response.text());

    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  return response.json();
}

export const IMAGE_BASE_URL =
  API_BASE_URL.replace("/api/v1", "");