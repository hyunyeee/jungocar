import React from "react";

interface ScenarioCardProps {
  index: number;
  id: string;
  title: string;
  subtitle: string;
  hint: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export function ScenarioCard({
  index,
  id,
  title,
  subtitle,
  hint,
  icon,
  active,
  onClick,
}: ScenarioCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className={`scenario-card relative w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 p-4 shadow transition-all ${
        active ? "bg-main/20 border-main/20" : "hover:bg-neutral-100"
      }`}
      aria-pressed={active}
      data-index={index}
      data-id={id}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full">{icon}</div>
        <div className="flex-1 text-start">
          <h4 className="text-md font-semibold">{title}</h4>
          <p className="mt-0.5 text-xs text-neutral-600">{subtitle}</p>
        </div>
      </div>
      <p className="mt-3 text-start text-sm text-neutral-700">{hint}</p>
    </article>
  );
}
