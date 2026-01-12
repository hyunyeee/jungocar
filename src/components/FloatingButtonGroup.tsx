"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "sonner";

export function FloatingButtonGroup() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <div className="relative">
        <PhoneCallBubble />
        <LinkToKakaoTalk />
      </div>
      <GoToTopButton />
    </div>
  );
}

/** !!!!!!! 전화번호 번경 필요 !!!!!!! */
const PHONE_NUMBER = "010-1234-5678";

function PhoneCallBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bubbleRef.current, {
        y: -3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bubbleRef}
      onClick={() => {
        copyToClipboard(PHONE_NUMBER, () => toast.success("번호가 복사되었습니다."));
      }}
      className="absolute right-0 bottom-full mb-5 rounded-xl bg-gray-900 px-4 py-2 whitespace-nowrap shadow-2xl"
    >
      <div className="relative z-10 text-center text-sm font-bold text-gray-50">
        <p className="mb-0.5">상담 가능</p>
        <p className="text-xs">☎️ {PHONE_NUMBER}</p>
      </div>
      {/* 말풍선 꼬리 */}
      <div className="absolute right-6 -bottom-1.5 h-4 w-4 rotate-45 bg-gray-900" />
    </div>
  );
}

function LinkToKakaoTalk() {
  return (
    <Link href="/" className="group block">
      <div className="size-14 overflow-hidden rounded-full bg-[#FEE500] shadow-lg transition-transform group-hover:scale-105">
        <div className="relative flex size-full items-center justify-center">
          <Image
            src="/images/kakao.webp"
            alt="카카오톡"
            className="object-cover"
            width={30}
            height={30}
            priority
          />
        </div>
      </div>
    </Link>
  );
}

function GoToTopButton() {
  return (
    <button
      className="flex size-14 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-lg transition-transform hover:scale-105 hover:bg-neutral-50"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp className="text-neutral-600" />
    </button>
  );
}
