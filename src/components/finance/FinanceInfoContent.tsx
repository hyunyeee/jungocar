import { useEffect, useState } from "react";
import { VehicleDetail } from "@/types/vehiclePreview";

interface Props {
  vehicle: VehicleDetail;
  type: "lease" | "rent";
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export function FinanceInfoContent({ vehicle, type }: Props) {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/lease-info?vehicleId=${vehicle.id}&type=${type}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          setData(null);
          return;
        }

        const result = await res.json();

        const content = result?.data?.content ?? result?.data ?? "정보가 없습니다.";

        setData(content);
      } catch (e) {
        console.error(e);
        setData(null);
      }
    };

    fetchData();
  }, [vehicle.id, type]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-sm leading-relaxed whitespace-pre-wrap text-neutral-800">
        {data ?? "정보가 없습니다."}
      </div>
    </div>
  );
}
