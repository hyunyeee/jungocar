import { FinanceInfoLayout } from "./FinanceInfoLayout";
import { Vehicle } from "@/types/vehiclePreview";

interface Props {
  vehicle: Vehicle;
}

export function RentInfo({ vehicle }: Props) {
  return <FinanceInfoLayout vehicle={vehicle} type="rent" />;
}
