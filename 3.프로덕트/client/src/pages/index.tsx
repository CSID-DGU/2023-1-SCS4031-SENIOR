import ContentCard from "../components/ContentCard";

const MainPage = () => {
  return (
    <>
      <div className="w-full h-[180px]">
        <ContentCard cardName="오늘의 업무 경로 확인하기" cardType="TODAY_MAP">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          <div className="mt-2">오늘의 업무 경로를 확인하세요</div>
        </ContentCard>
      </div>

      <div className="flex w-full h-[180px] mt-6">
        <div className="w-full h-full">
          <ContentCard cardName="배송 상품 확인하기" cardType="TODAY_ITEM">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <div className="mt-2">오늘의 배송상품 목록</div>
          </ContentCard>
        </div>
        {/*<div className="w-full h-full">*/}
        {/*  <ContentCard cardName="메모하기" cardType="MEMO_LIST">*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      strokeWidth={1.5}*/}
        {/*      stroke="currentColor"*/}
        {/*      className="w-6 h-6"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*    <div className="mt-2">저장할 메모</div>*/}
        {/*  </ContentCard>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default MainPage;
