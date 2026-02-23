# jungocar (승계랜드)

> 자동차 리스·렌트 승계 플랫폼 마케팅 웹사이트  
> Next.js(App Router) 기반 SSR + 전환 중심 UX 설계

🔗 **Website**: [승계랜드.com](https://www.xn--989an7ml9bdtr.com/)

---

## Overview

리스·렌트 승계는 인지도가 낮고 절차가 복잡한 서비스입니다.  
본 프로젝트는 **SEO 최적화 + 신뢰 구축 + 상담 전환**(Lead Generation)을 목표로 설계된 마케팅 웹사이트입니다.

---

## Architecture

### SSR 기반 렌더링 전략

- Next.js App Router 사용
- 주요 랜딩 페이지 SSR 처리
- 메타데이터 및 OG 태그 최적화
- 초기 HTML 선렌더링으로 빠른 FCP 확보

```tsx
export default async function Home() {
  const reviewData = await getReviews(0);

  return (
    <main>
      <CarouselBanner />
      <ExplainGrid />
      <Suspense fallback={null}>
        <VehiclesPreviewSection />
      </Suspense>
      <FloatingCustomerForm />
    </main>
  );
}
```

**선택 이유**

- 검색 노출 최적화 (리스 승계 관련 키워드)
- 소셜 공유 시 메타데이터 제공
- 모바일 환경 초기 로드 성능 개선

---

## Lead Generation 구조

- 전 페이지 노출 Floating 상담 폼
- Inquiry 전용 페이지 분리
- 섹션별 CTA 배치
- RootLayout에서 Floating 컴포넌트 단일 마운트

```tsx
<Navbar />
{children}
<FloatingButtonGroup />
<Footer />
```

---

## Animation Strategy

- GSAP + ScrollTrigger 적용
- 스크롤 기반 진입 애니메이션
- `prefers-reduced-motion` 접근성 고려
- `gsap.context()`로 메모리 정리

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      el,
      { x: 40, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.6,
        scrollTrigger: { trigger: el },
      },
    );
  });
  return () => ctx.revert();
}, []);
```

---

## Performance Optimization

- Next.js `Image` 컴포넌트 사용 (자동 최적화)
- Lazy Loading 적용
- CLS 최소화
- 전역 상태 도입 없이 Local State 중심 설계

---

## Tech Stack

- Next.js (App Router, SSR)
- TypeScript
- React Hook Form
- GSAP
- Tailwind CSS
- Vercel Deployment

---

## Key Design Decisions

- SEO 중심 마케팅 사이트 → SSR 선택
- 서버를 단일 진실(Source of Truth)로 유지
- 구조 단순화를 통한 유지보수성 확보
- 애니메이션은 신뢰감 강화 목적에 한해 사용

---
