"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export const GalleryCarousel = memo(({ images }: GalleryProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const goPrev = useCallback(
    () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length),
    [images.length],
  );

  const goNext = useCallback(
    () => setCurrentIdx((prev) => (prev + 1) % images.length),
    [images.length],
  );

  const goTo = useCallback((idx: number) => setCurrentIdx(idx), []);

  const thumbContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = thumbContainerRef.current;
    if (!container) return;

    const thumb = container.querySelector(`[data-thumb-idx="${currentIdx}"]`) as HTMLElement | null;

    if (!thumb) return;

    thumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentIdx]);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pb-12">
        <DesktopGallery
          images={images}
          currentIdx={currentIdx}
          goPrev={goPrev}
          goNext={goNext}
          goTo={goTo}
        />

        <MobileGallery
          images={images}
          currentIdx={currentIdx}
          thumbContainerRef={thumbContainerRef}
          goPrev={goPrev}
          goNext={goNext}
          goTo={goTo}
        />
      </div>
    </section>
  );
});

interface Props {
  images: string[];
  currentIdx: number;
  goPrev: () => void;
  goNext: () => void;
  goTo: (idx: number) => void;
}

/* ---------------- Desktop ---------------- */

function DesktopGallery({ images, currentIdx, goPrev, goNext, goTo }: Props) {
  return (
    <div className="hidden gap-1 md:grid md:grid-cols-10">
      {/* 메인 이미지 */}
      <div className="relative col-span-8 bg-neutral-900 lg:col-span-9">
        <div className="relative h-[480px] w-full">
          <Image
            src={images[currentIdx]}
            alt={`car-image-${currentIdx}`}
            fill
            priority
            className="object-contain"
            draggable={false}
          />
        </div>

        {/* 네비게이션 */}
        <div className="absolute right-4 bottom-4 left-4 flex justify-end">
          <div className="flex h-10 items-center gap-3 rounded-full bg-white/90 px-3 shadow backdrop-blur">
            <button
              onClick={goPrev}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="size-5" />
            </button>

            <span className="min-w-[60px] text-center text-sm font-medium">
              {currentIdx + 1} / {images.length}
            </span>

            <button
              onClick={goNext}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow hover:scale-105 active:scale-95"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 썸네일 */}
      <div className="col-span-2 overflow-y-auto p-1 lg:col-span-1">
        <div className="flex flex-wrap gap-1">
          {images.map((src, idx) => (
            <div
              key={idx}
              onClick={() => goTo(idx)}
              className={`relative aspect-square w-[calc(50%-2px)] cursor-pointer overflow-hidden bg-neutral-900 ${
                idx === currentIdx ? "ring-2 ring-white" : ""
              }`}
            >
              <Image
                src={src}
                alt={`thumb-${idx}`}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile ---------------- */

function MobileGallery({
  images,
  currentIdx,
  thumbContainerRef,
  goPrev,
  goNext,
  goTo,
}: Props & { thumbContainerRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="block md:hidden">
      {/* 메인 이미지 */}
      <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-neutral-900">
        <Image
          src={images[currentIdx]}
          alt={`car-${currentIdx}`}
          fill
          priority
          className="object-contain"
          draggable={false}
        />

        {/* 네비 */}
        <div className="absolute right-4 bottom-4 left-4 flex justify-end">
          <div className="flex h-10 items-center gap-3 rounded-full bg-white/90 px-3 shadow backdrop-blur">
            <button
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="min-w-[50px] text-center text-sm font-medium">
              {currentIdx + 1} / {images.length}
            </span>

            <button
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 썸네일 */}
      <div
        className="mt-3 overflow-x-auto pb-2"
        ref={thumbContainerRef}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-3 px-3">
          {images.map((src, idx) => (
            <button
              key={idx}
              data-thumb-idx={idx}
              onClick={() => goTo(idx)}
              className={`w-24 flex-none overflow-hidden rounded-xl bg-neutral-900 ${
                idx === currentIdx ? "ring-2 ring-white" : "opacity-80"
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={src}
                  alt={`thumb-${idx}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
