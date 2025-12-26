export const TermsContent = () => {
  return (
    <div className="space-y-6 text-left text-[14px] leading-relaxed text-gray-700">
      <p className="text-gray-600">
        승계 상담 서비스를 제공하기 위해 필요한 최소한의 개인정보 수집·이용에 대한 안내입니다.
        주식회사 요한(이하 “회사”)는 관련 법령을 준수하며 고객님의 정보를 안전하게 관리합니다.
      </p>

      {/* 1 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">1. 수집하는 개인정보 항목</h3>
        <ul className="space-y-1 pl-4 text-gray-600">
          <li>- 이름</li>
          <li>- 전화번호</li>
          <li>- 상담 요청 관련 정보(차종 등)</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">2. 개인정보 이용 목적</h3>
        <ul className="space-y-1 pl-4 text-gray-600">
          <li>- 상담 접수 및 서비스 제공</li>
          <li>- 상담 진행 및 결과 안내</li>
          <li>- 추가 정보 확인을 위한 연락</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">3. 보유 및 이용 기간</h3>
        <ul className="space-y-1 pl-4 text-gray-600">
          <li>
            - 상담 목적 달성 후 <span className="font-medium text-gray-900">1주일 이내 파기</span>
          </li>
          <li>- 법령에 따른 보관 의무가 있는 경우 해당 기간 동안 보관</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">4. 개인정보 파기 절차 및 방법</h3>
        <ul className="space-y-1 pl-4 text-gray-600">
          <li>- 목적 달성 즉시 파기</li>
          <li>- 전자 파일은 복구 불가능한 방식으로 삭제</li>
          <li>- 종이 문서는 분쇄 또는 소각 처리</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">5. 제3자 제공 및 위탁</h3>
        <p className="pl-4 text-gray-600">
          - 회사는 개인정보를 외부에 제공하거나 위탁하지 않습니다.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">6. 고객님의 권리</h3>
        <ul className="space-y-1 pl-4 text-gray-600">
          <li>- 개인정보 열람, 정정, 삭제 요청 가능</li>
          <li>- 요청 시 지체 없이 처리</li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-2">
        <h3 className="font-semibold text-gray-900">7. 시행일</h3>
        <p className="pl-4 text-gray-600">
          본 개인정보 이용 동의는{" "}
          <span className="font-semibold text-gray-900">2024년 12월 10일</span>부터 적용됩니다.
        </p>
      </section>
    </div>
  );
};
