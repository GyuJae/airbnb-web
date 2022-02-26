import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Home"}>
      <div className="">
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
