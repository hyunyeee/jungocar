"use client";

import { useState } from "react";
import { FinanceType, VehicleDetail } from "@/types/vehiclePreview";
import { FinanceInfoContent } from "@/components/finance/FinanceInfoContent";

interface Props {
  vehicle: VehicleDetail;
}

export function FinanceTabs({ vehicle }: Props) {
  const [tab, setTab] = useState<FinanceType>("rent");

  return (
    <>
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setTab("rent")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
            tab === "rent" ? "bg-main text-white" : "bg-gray-100 text-neutral-600"
          }`}
        >
          렌트 정보
        </button>

        <button
          onClick={() => setTab("lease")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
            tab === "lease" ? "bg-main text-white" : "bg-gray-100 text-neutral-600"
          }`}
        >
          리스 정보
        </button>
      </div>

      <FinanceInfoContent vehicle={vehicle} type={tab} />
    </>
  );
}
