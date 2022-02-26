import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Layout title={"Home"}>
      <div className="grid grid-cols-4 gap-9 px-20">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <div
            key={i}
            onClick={() => router.push(`/rooms/${i}`)}
            className="space-y-1 cursor-pointer"
          >
            <div className="w-[300px] h-[300px] bg-gray-200 rounded-xl"></div>
            <div className="flex justify-between items-center">
              <div className="font-semibold">location</div>
              <div className="text-sm">\price / 박</div>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <div className="text-sm font-medium">distance</div>
              <div className="text-xs">12월6일 ~ 17일</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
