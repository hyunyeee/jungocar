interface VehicleListPlaceholderProps {
  title?: string;
  description?: string;
}

export function VehicleListPlaceholder({
  title = "차량 준비중입니다",
  description = "더 좋은 매물을 정리해서 곧 보여드릴게요. 잠시만 기다려주세요.",
}: VehicleListPlaceholderProps) {
  return (
    <section className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-14 text-center">
      <p className="text-2xl font-bold text-neutral-900 md:text-3xl">{title}</p>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
        {description}
      </p>
    </section>
  );
}
