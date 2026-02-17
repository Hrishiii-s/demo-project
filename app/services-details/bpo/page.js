"use client";;
import Layout from "@/components/layout/Layout";
import { BpoHero } from "@/components/bpo/bpo_hero";
import { BpoBrokerage } from "@/components/bpo/bpo_brokerage";
import { BpoSupportingWorkflows } from "@/components/bpo/bpo_supporting_workflows";
import { BpoBrokerNetworks } from "@/components/bpo/bpo_broker_networks";
import BpoFinalCta from "@/components/bpo/bpo_final_cta";

const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      
      <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <BpoHero />
        <BpoBrokerage/>
        <BpoSupportingWorkflows/>
        <BpoBrokerNetworks />
        <BpoFinalCta />
      </Layout>
    </div>
  );
};

export default page;
