"use client";

import { useState } from "react";
import { RentInfo } from "./RentInfo";
import { LeaseInfo } from "./LeaseInfo";
import { FinanceType, Vehicle } from "@/types/vehiclePreview";

interface Props {
  vehicle: Vehicle;
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

      {tab === "rent" ? <RentInfo vehicle={vehicle} /> : <LeaseInfo vehicle={vehicle} />}
    </>
  );
}
