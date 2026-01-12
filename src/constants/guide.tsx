import { HandCoins, ReceiptText, Clock, User } from "lucide-react";
import React from "react";

export type GuideMode = "complete" | "consign" | null;

export const LEASE_COMPARE = [
  {
    key: "normal",
    title: "리스 일반 승계",
    pros: [
      "높은 위약금 대신 비교적 저렴한 승계료만 납부하여 리스 손해율을 최소화할 수 있습니다.",
      "완납 승계나 리스·렌트 반납 대비 전체적인 손해 부담이 훨씬 적은 편입니다.",
      "초기 목돈 없이도 승계 진행이 가능하여 자금 부담을 줄일 수 있습니다.",
    ],
    cons: [
      "승계자를 직접 찾거나 매칭하는 데 시간이 소요될 수 있습니다.",
      "서류 처리 및 심사 절차가 복잡하여 전체 진행 기간이 길어질 수 있습니다.",
      "승계 완료 전까지 매월 리스료를 지속적으로 부담해야 합니다.",
      "잔여 계약 기간이 길수록 차량 감가상각이 발생할 수 있습니다.",
    ],
  },
  {
    key: "complete",
    title: "리스 완납 승계",
    pros: [
      "절차가 단순하고 필요한 서류가 적어 빠르게 승계 처리가 가능합니다.",
      "리스 반납 대비 패널티 부담이 상대적으로 적은 편입니다.",
      "별도의 승계자 매칭 없이 즉시 승계 및 정리가 가능합니다.",
      "승계와 동시에 완납이 이루어져 이후 차량 감가상각을 고려할 필요가 없습니다.",
    ],
    cons: ["리스 완납 패널티로 인해 일시적으로 목돈이 필요한 경우가 발생할 수 있습니다."],
  },
] as const;

export const SCENARIOS = [
  {
    id: "immediate",
    title: "바로 차량을 인수하고 싶어요",
    subtitle: "중고차 구매처럼 즉시 인수",
    hint: "잔여금 완납으로 소유권을 바로 이전",
    match: "complete" as GuideMode,
    icon: <HandCoins className="size-5" />,
  },
  {
    id: "no-paperwork",
    title: "서류·심사 처리가 귀찮아요",
    subtitle: "업체가 다 해주면 편하겠어요",
    hint: "플랫폼이 매칭·서류·심사 전부 대행",
    match: "consign" as GuideMode,
    icon: <ReceiptText className="size-5" />,
  },
  {
    id: "fast-close",
    title: "절차는 빠르게 끝내고 싶어요",
    subtitle: "시간을 아끼고 싶을 때",
    hint: "완납 승계가 절차는 단순한 편",
    match: "complete" as GuideMode,
    icon: <Clock className="size-5" />,
  },
  {
    id: "safety",
    title: "안전하게 맡기고 싶어요",
    subtitle: "직거래 부담이 커요",
    hint: "위탁 승계로 심사·안전성 확보",
    match: "consign" as GuideMode,
    icon: <User className="size-5" />,
  },
] as const;

export const RECOMMENDATION_MAP = {
  complete: {
    title: "완납 승계 추천",
    desc: "바로 차량을 인수하고 싶을 때 적합해요.",
    bullets: [
      "리스료 부담 없이 차량만 인수 가능",
      "절차 단순하고 매우 빠른 인수",
      "기존 계약자 잔여금 명세 확인 필요",
    ],
    img: "/images/installment.webp",
    cta: { href: "/vehicle", label: "승계 차량 보기" },
    icon: HandCoins,
    color: "from-main/20 to-main/5",
  },
  consign: {
    title: "위탁 승계 추천",
    desc: "절차를 업체가 대행해주길 원한다면 적합해요.",
    bullets: ["매칭·서류·심사 전체 대행", "가장 간편하고 안전한 방식", "일부 수수료 발생 가능"],
    img: "/images/receipt.webp",
    cta: { href: "/vehicle", label: "승계 차량 보기" },
    icon: ReceiptText,
    color: "from-indigo-200/30 to-indigo-50/40",
  },
} as const;
