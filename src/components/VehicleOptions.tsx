"use client";

import { RectangleEllipsis } from "lucide-react";

export function VehicleOptions({ options }: { options: string[] }) {
  if (!options || options.length === 0) return null;

  return (
    <section className="mt-8 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <RectangleEllipsis className="size-6 shrink-0" />
          차량 옵션
        </h3>

        <div className="flex flex-wrap gap-3">
          {options.map((option, idx) => (
            <div
              key={option + idx}
              className="rounded-xl border border-dashed border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-500 hover:bg-neutral-50"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
