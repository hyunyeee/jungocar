"use client";

import Image from "next/image";
import { useState } from "react";

export function ReviewTab({
  data,
}: {
  data: { id: number | string; image: string; title?: string }[];
}) {
  const [currentData, setCurrentData] = useState(0);

  return (
    <div className="w-full">
      {/* 가로로 나열되는 카드들 */}
      <div className="flex h-[420px] w-full gap-4">
        {data.map((d, idx) => {
          const selected = idx === currentData;
          return (
            <button
              key={d.id}
              onClick={() => setCurrentData(idx)}
              className={`relative cursor-pointer overflow-hidden rounded-xl border border-neutral-200 transition-all duration-500 ease-out ${selected ? "flex-1" : "flex-[0.3]"} `}
              aria-pressed={selected}
              // 버튼이니 포커스 스타일 원하면 추가
            >
              <div className="relative h-full w-full">
                <Image src={d.image} alt={d.title ?? `item-${idx}`} fill className="object-cover" />
                {/* 선택된 카드에 간단한 오버레이와 타이틀 */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                    selected
                      ? "bg-transparent text-black"
                      : "bg-gradient-to-t from-black/80 to-transparent opacity-100"
                  }`}
                >
                  <h3
                    className={`font-bold ${selected ? "text-xl text-black" : "text-base text-white"}`}
                  >
                    {d.title}
                  </h3>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* 선택된 항목의 상세뷰(선택카드 외 상세 내용 보여주기 원하면 아래 사용) */}
    </div>
  );
}
