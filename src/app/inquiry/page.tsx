import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { SectionWrapper } from "@/components/SectionWrapper";
import CustomerInfoForm from "@/components/form/contact/CustomerInfoForm";

export default function Inquiry() {
  return (
    <main>
      <DimmedImageBanner
        title="상담 신청"
        descriptions={["텍스트를 입력하세요.", "(배너 배경으로 이미지 애니메이션)"]}
        imageSrc="/images/contact.webp"
      />
      <SectionWrapper type="white">
        <h1 className="text-xl font-bold">고객 정보</h1>
        <CustomerInfoForm />
      </SectionWrapper>
    </main>
  );
}
