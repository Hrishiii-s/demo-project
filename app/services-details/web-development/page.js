"use client";;
import Footer3 from "@/components/layout/footer/Footer3";
import Layout from "@/components/layout/Layout";
import { CTA } from "@/components/web-development/CTA";
import { Footer } from "@/components/web-development/Footer";
import { Hero } from "@/components/web-development/Hero";
import { MidCTA } from "@/components/web-development/MidCTA";
import { Portfolio } from "@/components/web-development/Portfolio";
import { Pricing } from "@/components/web-development/Pricing";
import { Process } from "@/components/web-development/Process";
import { ServicesGrid } from "@/components/web-development/ServicesGrid";
import { Testimonials } from "@/components/web-development/Testimonials";
import { TrustBar } from "@/components/web-development/TrustBar";
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
