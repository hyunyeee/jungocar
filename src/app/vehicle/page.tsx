import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import Pagination from "@/components/Pagination";
import { SectionWrapper } from "@/components/SectionWrapper";
import { VehicleCard } from "@/components/VehicleCard";
import { getVehicles } from "@/lib/api/vehicles";
import { Search } from "lucide-react";

interface Iparms {
  searchParams: Promise<{ page?: string }>;
}

export default async function Cars({ searchParams }: Iparms) {
  let page = Number((await searchParams).page);

  if (isNaN(page) || page < 1) {
    page = 1;
  }

  const vehiclePage = await getVehicles(page - 1);
  const vehicles = vehiclePage.content;

  return (
    <main>
      <DimmedImageBanner
        title="렌트 · 리스 차량"
        descriptions={[
          "검증된 렌트 · 리스 차량을 한곳에서 확인하세요.",
          "다양한 브랜드와 조건의 차량을 비교하고 선택할 수 있습니다.",
        ]}
        imageSrc="/images/main0.webp"
      />

      <SectionWrapper type="white" className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-neutral-700">
            총 <span className="font-semibold text-neutral-950">{vehiclePage.totalElements}</span>
            대의 차량이 있습니다.
          </p>

          <CarSearchInput />
        </div>

        <div className="grid grid-cols-1 gap-6 text-start sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <Pagination current={page} total={vehiclePage.totalPages} />
      </SectionWrapper>
    </main>
  );
}

function CarSearchInput() {
  return (
    <div className="relative w-60">
      <input
        className="focus:ring-main h-10 w-full rounded-full px-4 pr-12 ring ring-neutral-300 focus:ring-2 focus:outline-none"
        placeholder="차량 검색"
      />
      <button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full px-4 py-1 text-black">
        <Search className="size-5" />
      </button>
    </div>
  );
}
