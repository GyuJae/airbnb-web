import type { NextPage } from "next";
import Layout from "../../components/Layout";

const Room: NextPage = () => {
  return (
    <Layout title={"Room Name"}>
      <div className="px-40 space-y-3">
        <div className="text-2xl font-semibold">Title</div>
        <div className="flex space-x-1 items-center">
          <div className="flex justify-center items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill="#FF385C"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <div className="text-sm font-semibold">4.95</div>
          </div>
          <span>&#183;</span>
          <div className="flex items-center text-sm font-semibold underline cursor-pointer">
            Reviews 56
          </div>
          <span className="text-gray-500">&#183;</span>
          <div className="flex items-center  space-x-1">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="#FF385C"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">슈퍼호스트</div>
          </div>
          <span className="text-gray-500">&#183;</span>
          <div className="text-xs text-gray-500 font-semibold underline cursor-pointer">
            Namwon-eup, Seogwipo-si, 제주도, 한국
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 h-[360px]">
          <div className="bg-red-200 row-span-2 col-span-2 rounded-l-md">
            01
          </div>
          <div className="bg-red-200">02</div>
          <div className="bg-red-200 rounded-tr-md">03</div>
          <div className="bg-red-200">04</div>
          <div className="bg-red-200 rounded-br-md">05</div>
        </div>
        <div className="flex space-x-4 items-baseline">
          <div className="w-2/3 px-1">
            <div className="flex justify-between items-center py-5 border-b-[1px]">
              <div className=" flex flex-col space-y-1">
                <div className="text-xl font-semibold">
                  Jay님이 호스팅하는 숙소
                </div>
                <div>
                  최대 인원 4명 <span>&#183;</span> 침실 2갤 <span>&#183;</span>{" "}
                  침대 3개 <span>&#183;</span> 욕실 2개
                </div>
              </div>
              <div className="h-14 w-14 rounded-full bg-gray-300 cursor-pointer"></div>
            </div>
            <div className="flex flex-col py-7 space-y-5 border-b-[1px]">
              <div className="flex space-x-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">셀프 체크인</div>
                  <div className="text-sm text-gray-500">
                    열쇠보관함을 이용해 체크해주세요.
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">무선인터넷</div>
                  <div className="text-sm text-gray-500">
                    무선인터넷 등의 편의 기능을 사용할 수 있습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-b-[1px]">
              <p>
                새롭게 리노베이션된 농가주택 남가원입니다. 우리나라에서 일조량이
                제일 많고 따뜻한 지역이며, 옛 제주 시골마을의 모습이 그대로 남아
                있는 서귀포 남원에 위치하고 있습니다. 1000평의 귤 농장과 집
                전체를 방해없이 오직 손님만이 지내시며 힐링을 즐기실수 있는
                프라이빗한 단독독채...
              </p>
              <div className="mt-5  font-semibold cursor-pointer flex">
                {" "}
                <span className=" underline">더 보기</span>
                <span className="ml-1"> {">"}</span>
              </div>
            </div>
            <div className="py-8 border-b-[1px]">
              <div className="font-semibold text-xl mb-2">숙박 장소</div>
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="py-2 px-5 border-[1px] flex flex-col justify-around space-y-2 w-52 h-40 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">침실 {i}</span>
                      <span className="text-sm">
                        침실 description {i + 1}개
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky top-16 w-1/3 h-auto px-4 py-5 shadow-xl border-[1px] rounded-lg space-y-3">
            <div className="flex justify-between ">
              <div>
                <span className="text-xl font-semibold">\226,000 </span>/ 박
              </div>
              <div className="flex justify-center items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill="#FF385C"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <div className="text-sm font-semibold">4.95</div>
                <span>&#183;</span>
                <div className="flex items-center text-sm font-semibold underline cursor-pointer">
                  Reviews 56
                </div>
              </div>
            </div>
            <div>
              <form>
                <div className="grid grid-cols-2 justify-center items-center">
                  <input
                    type={"date"}
                    name="checkIn"
                    className=" px-3 py-2 border-[1px] border-gray-500 border-r-0 rounded-tl-lg text-sm"
                  />
                  <input
                    type={"date"}
                    name="checkOut"
                    className=" px-3 py-2 border-[1px] border-gray-500 rounded-tr-lg text-sm"
                  />
                  <input
                    type={"number"}
                    min={0}
                    placeholder="Guest Number"
                    className="col-span-2 px-3 py-2 border-[1px] border-gray-500  rounded-b-lg text-sm"
                  />
                </div>
                <button className="mt-3 rounded-lg bg-pink-600 text-white text-base font-semibold flex justify-center items-center w-full py-2">
                  예약하기
                </button>
              </form>
              <div className="h-[0.5px] bg-gray-300 my-4"></div>
              <div className="flex justify-between font-semibold">
                <div>총 합계</div>
                <div>\1,624,345</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Room;
