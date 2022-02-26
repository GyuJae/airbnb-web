import Head from "next/head";
import React from "react";

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
      {children}
    </div>
  );
};

export default Layout;
