import { SupportFeeType } from "@/types/vehiclePreview";

export function getSupportFeeDisplay(supportFeeType: SupportFeeType) {
  if (supportFeeType === "TAKEOVER") {
    return {
      label: "인수금",
      valueClassName: "text-red-500",
      description: "인수금 (판매자에게 지급)",
    };
  }

  return {
    label: "지원금",
    valueClassName: "text-main",
    description: "지원금",
  };
}
