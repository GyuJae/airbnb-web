import Head from "next/head";
import React from "react";
import Header from "./Header";

interface ILayout {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<ILayout> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} | Airbnb</title>
      </Head>
      <Header />
      <div className="px-20 py-8">{children}</div>
    </div>
  );
};

export default Layout;
