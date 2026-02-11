"use client";
import Layout from "@/components/layout/Layout";
import BpoLandingPage from "@/components/bpo/bpo_landing_page";
import React from "react";

const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      
        <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <BpoLandingPage />
      </Layout>
    </div>
  );
};

export default page;
