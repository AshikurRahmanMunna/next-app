import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <h2>Home</h2>
    </>
  );
};

export default index;