import { FinanceInfoLayout } from "./FinanceInfoLayout";
import { Vehicle } from "@/types/vehiclePreview";

interface Props {
  vehicle: Vehicle;
}

export function LeaseInfo({ vehicle }: Props) {
  return <FinanceInfoLayout vehicle={vehicle} type="lease" />;
}
