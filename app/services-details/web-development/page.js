"use client";;
import Layout from "@/components/layout/Layout";
import { CTA } from "@/components/web-development/CTA";
import { Hero } from "@/components/web-development/Hero";
import { MidCTA } from "@/components/web-development/MidCTA";
import { Pricing } from "@/components/web-development/Pricing";
import { ServicesGrid } from "@/components/web-development/ServicesGrid";
import { EngagementModels } from "@/components/web-development/EngagementModels";
const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <Hero/>
        {/* <TrustBar/> */}
        <ServicesGrid/>
        <MidCTA/>
        {/* <Portfolio/> */}
        <EngagementModels/>
        <Pricing/>
        {/* <Process/>
        <Testimonials/>  */}
        <CTA/>
      </Layout>
    </div>
  );
};

export default page;
