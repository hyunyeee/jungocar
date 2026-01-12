import { SectionWrapper } from "../SectionWrapper";

export function BranchedTimeLineSection() {
  return (
    <SectionWrapper type="gray">
      <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
      <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>

      <div className="space-y-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="size-24 rounded-full bg-gray-300" />
            <div className="text-start font-bold">
              <p className="text-sm text-neutral-700">STEP {1}</p>
              <p className="text-main mb-1 text-lg">제목을 입력하세요.</p>
              <p className="text-sm font-medium text-neutral-600">텍스트를 입력하세요.</p>
            </div>
          </div>
          <div className="h-12 w-[3px] bg-gray-300" />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="size-24 rounded-full bg-gray-300" />
            <div className="text-start font-bold">
              <p className="text-sm text-neutral-700">STEP {2}</p>
              <p className="text-main mb-1 text-lg">제목을 입력하세요.</p>
              <p className="text-sm font-medium text-neutral-600">텍스트를 입력하세요.</p>
            </div>
          </div>
          {/* Mobile Connector */}
          <div className="block h-12 w-[3px] bg-gray-300 md:hidden" />
          {/* Desktop Branching Connector */}
          <div className="relative hidden h-16 w-full md:block">
            {/* Top Stem (Connecting to Step 2) */}
            <div className="absolute -top-3 left-1/2 h-11 w-[3px] -translate-x-1/2 bg-gray-300" />
            {/* Horizontal Bar */}
            <div className="absolute top-8 right-[calc(25%-3px)] left-[calc(25%-3px)] h-[3px] rounded-full bg-gray-300" />
            {/* Left Branch (Connecting to Step 3) */}
            <div className="absolute top-8 left-[calc(25%-3px)] h-[calc(2rem+0.8rem)] w-[3px] -translate-x-1/2 bg-gray-300" />
            {/* Right Branch (Connecting to Step 4) */}
            <div className="absolute top-8 right-[calc(25%-3px)] h-[calc(2rem+0.8rem)] w-[3px] translate-x-1/2 bg-gray-300" />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <div className="size-24 rounded-full bg-gray-300" />
              <div className="text-start font-bold">
                <p className="text-sm text-neutral-700">STEP {3}</p>
                <p className="text-main mb-1 text-lg">제목을 입력하세요.</p>
                <p className="text-sm font-medium text-neutral-600">텍스트를 입력하세요.</p>
              </div>
            </div>
            {/* Mobile Connector */}
            <div className="block h-12 w-[3px] bg-gray-300 md:hidden" />
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <div className="size-24 rounded-full bg-gray-300" />
              <div className="text-start font-bold">
                <p className="text-sm text-neutral-700">STEP {4}</p>
                <p className="text-main mb-1 text-lg">제목을 입력하세요.</p>
                <p className="text-sm font-medium text-neutral-600">텍스트를 입력하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
