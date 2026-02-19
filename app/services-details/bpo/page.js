"use client";;
import Layout from "@/components/layout/Layout";
import React from "react";
import { BpoHero } from "@/components/bpo/bpo_hero";
import { BpoValuation } from "@/components/bpo/bpo_valuation";
import { BpoMortgage } from "@/components/bpo/bpo_mortgage";
import { BpoAdvantage } from "@/components/bpo/bpo_advantage";
import BpoFinalCta from "@/components/bpo/bpo_final_cta";

const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      
      <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <BpoHero />
        <BpoValuation />
        <BpoMortgage />
        <BpoAdvantage />
        <BpoFinalCta />
      </Layout>
    </div>
  );
};

export default page;
