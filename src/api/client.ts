const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

export async function client(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || "Something went wrong");
  }

  return response.json();
}
