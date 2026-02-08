"use client";
import Footer3 from "@/components/layout/footer/Footer3";
import Header3 from "@/components/layout/header/Header3";
import Layout from "@/components/layout/Layout";
import { BuiltForScale } from "@/components/qa/built-for-scale";
import { BusinessImpact } from "@/components/qa/business-impact";
import { CoreCapabilities } from "@/components/qa/core-capabilities";
import { DeliveryApproach } from "@/components/qa/delivery-approach";
import { EngagementModels } from "@/components/qa/engagement-models";
import { FinalCTA } from "@/components/qa/final-cta";
import { Footer } from "@/components/qa/footer";
import { HeroSection } from "@/components/qa/hero-section";
import { IndustriesServed } from "@/components/qa/industries-served";
import { IndustryChallenge } from "@/components/qa/industry-challenge";
import { OurRole } from "@/components/qa/our-role";
import { WhyPartner } from "@/components/qa/why-partner";
import React from "react";

const page = () => {
  let Nothome = true;
  return (
    <div className="min-h-screen bg-white">
      
        <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
        <HeroSection />
        <BuiltForScale />
        <IndustryChallenge />
        {/* <OurRole /> */}
        <CoreCapabilities />
        <IndustriesServed />
        <WhyPartner />
        {/* <BusinessImpact /> */}
        {/* <EngagementModels /> */}
        <DeliveryApproach />
        <FinalCTA />
      </Layout>
    </div>
  );
};

export default page;
