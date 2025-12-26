import { Check, X } from "lucide-react";
import { LEASE_COMPARE } from "@/constants/guide";

export function LeaseCompareSection() {
  return (
    <section className="mt-20 rounded-2xl border border-neutral-200 p-6 md:p-8">
      <h3 className="mb-6 text-2xl font-bold">리스 승계 방식 비교</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {LEASE_COMPARE.map(({ key, title, pros, cons }) => (
          <div key={key} className="rounded-2xl bg-white p-5 shadow-sm">
            <h4 className="mb-4 text-lg font-semibold">{title}</h4>

            {/* 장점 */}
            <div className="mb-5">
              <p className="text-main mb-2 font-medium">장점</p>
              <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                {pros.map((text, idx) => (
                  <li key={idx} className="flex gap-2">
                    <Check className="text-main mt-0.5 size-4 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* 단점 */}
            <div>
              <p className="mb-2 font-medium text-red-500">단점</p>
              <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                {cons.map((text, idx) => (
                  <li key={idx} className="flex gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
