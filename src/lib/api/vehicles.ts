import { VehicleDetail, VehiclePageResponse } from "@/types/vehiclePreview";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getVehicleById(id: number): Promise<VehicleDetail> {
  const res = await fetch(`${BASE_URL}/vehicles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vehicle");
  }

  return res.json();
}
export async function getVehicles(page = 0): Promise<VehiclePageResponse> {
  const res = await fetch(`${BASE_URL}/vehicles?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return res.json();
}
