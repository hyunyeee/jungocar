export interface VehiclePreview {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  year: string;
  price: number;
  mileage: number;
  fuelType: string;
  gearType: string;
  color: string;
}

export type FinanceType = "rent" | "lease";

export interface Vehicle {
  id: number;
  title: string;
  model: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  monthFee: number;
  supportFee: number;
  color: string;
  fuelType: string;
  gearType: string;
  accidentHistory: number;
  images: string[];
  options: string[];
}
