'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

import GetStartedForm from '@/components/sections/GetStartedForm';

import {
  BG_COLORS,
  BUSSINESS_DATA,
  FAQS,
  PRODUCT_FEATURES,
  SERVICE_DATA,
  SERVICES,
  TESTIMONIALS,
  TRUSTED_BRANDS,
} from './data';

const New = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tabRefs = useRef([]);
  const hasShownModal = useRef(false);
  const sliderRef = useRef(null);

  const activeKey = SERVICES[activeService];
  const activeData = SERVICE_DATA[activeKey];

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownModal.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 10) {
        setTimeout(() => setShowModal(true), 800);
        hasShownModal.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId = null;
    let lastTime = 0;
    const pixelsPerSecond = 60;

    const autoScroll = time => {
      if (!slider) return;

      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      const distance = (pixelsPerSecond * delta) / 1000;
      slider.scrollLeft += distance;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const handleMouseLeave = () => {
      if (animationId === null) {
        lastTime = 0; // reset so delta is correct
        animationId = requestAnimationFrame(autoScroll);
      }
    };

    animationId = requestAnimationFrame(autoScroll);

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId !== null) cancelAnimationFrame(animationId);
    };
  }, []);

  const brandColors = useMemo(() => {
    return TRUSTED_BRANDS.map(() => {
      const randomIndex = Math.floor(Math.random() * BG_COLORS.length);
      return BG_COLORS[randomIndex];
    });
  }, []);

  const handleTabClick = index => {
    setActiveService(index);

    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="relative">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-white dark:bg-[#222831] shadow-md">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between lg:gap-16 py-2">
          <div>
            <img
              src="/assets/img/logo/Logo.webp"
              alt="Logo"
              className="w-[6rem] lg:w-[12rem] object-contain h-[5rem]"
            />
          </div>

          <div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-violet-700 py-2 px-4 text-white rounded-md text-sm lg:text-base hover:bg-violet-800 transition"
            >
              Book A Consultation
            </button>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-start lg:gap-16">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold leading-tight lg:text-5xl text-black">
              <span className="text-violet-800">AI Software</span> for <br />
              Digital Marketing <br />
              and Lead Generation
            </h1>

            <p className="mt-6 text-base text-gray-600 lg:text-lg">
              Our AI-powered software creates, executes, and optimizes custom
              digital marketing strategies to deliver high-quality results at
              minimal cost.
            </p>

            <div className="mt-8 relative">
              <div className=" hidden lg:block pointer-events-none absolute -left-25 top-8 h-[20rem] w-[20rem] rounded-full bg-violet-400/30 blur-[80px] -z-10" />

              <p className="text-lg font-semibold text-gray-800">
                Our Offerings include:
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>AI-driven Social Media Optimization</li>
                <li>AI-powered Lead Generation</li>
                <li>Automated Campaign Management</li>
                <li>Performance Tracking & Analytics</li>
                <li>Multi-platform Ad Optimization</li>
                <li>Conversion Rate Optimization</li>
                <li>AI-based Content Strategy</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/3">
            <div className="rounded-xl bg-violet-200 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Get Free Consultation
              </h3>

              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h5 className="text-sm text-start font-semibold uppercase tracking-wider text-violet-700">
            Why LeadMetrics
          </h5>

          <h2 className="mt-2 text-start text-3xl font-bold text-gray-900 sm:text-4xl">
            Digital Marketing with AI <br className="hidden sm:block" />
            for Every Business
          </h2>

          <div className="mt-[3rem] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUSSINESS_DATA.map((data, index) => (
              <div
                key={index}
                className="group rounded-xl bg-violet-50 p-6 text-left transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-100">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {data.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {data.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="inline-flex items-center gap-2 rounded-md bg-violet-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-violet-900 hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h5 className="text-center text-sm font-semibold uppercase tracking-wider text-violet-700">
            Services
          </h5>

          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900">
            Our Services
          </h2>

          <div className="mt-10 flex gap-3 overflow-x-auto scrollbar-hide rounded-lg bg-gray-100 px-2 py-3">
            {SERVICES.map((service, index) => (
              <button
                key={index}
                ref={el => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`whitespace-nowrap rounded-md px-4 py-3 text-sm font-medium transition
        ${
          index === activeService
            ? 'bg-violet-800 text-white shadow'
            : 'text-gray-700 hover:bg-white'
        }`}
              >
                {service}
              </button>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 lg:w-[45%]">
                {activeData.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {activeData.description}
              </p>

              <p className="mt-8 text-sm font-semibold text-violet-800">
                Our services include:
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                {activeData.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-violet-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-violet-900">
                Read More
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="/assets/img/services/service.png"
                alt={activeData.title}
                className="w-full max-w-md rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h5 className="text-sm text-start font-semibold uppercase tracking-wider text-violet-700">
            FEATURES
          </h5>

          <h2 className="mt-2 text-start text-3xl font-bold text-gray-900 sm:text-4xl">
            Other Product Features
          </h2>

          <div className="mt-[3rem] grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {PRODUCT_FEATURES.map((data, index) => (
              <div
                key={index}
                className="group rounded-xl p-4 lg:p-6 text-left transition-all duration-300 max-lg:shadow-lg lg:shadow-none lg:hover:shadow-xl lg:hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-100">
                  <img
                    src={data.imageUrl}
                    alt="Product"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <p className="text-sm leading-relaxed text-gray-900">
                  {data.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="inline-flex items-center gap-2 rounded-md bg-violet-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-violet-900 hover:shadow-lg">
              Get A Call Back
            </button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Brands that trust us
          </h2>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
            {TRUSTED_BRANDS.map((img, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center rounded-xl p-4 ${brandColors[index]}`}
                >
                  <img
                    src={img}
                    alt="Trusted brand"
                    className="h-12 w-28 object-contain md:h-16 md:w-32 mix-blend-multiply"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
              <p className="mt-2 max-w-xl text-gray-600">
                Our clients' success stories are the best <br />
                proof of the impact we create!
              </p>
            </div>

            <button className="w-fit rounded-md bg-violet-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800">
              View All
            </button>
          </div>

          <div
            ref={sliderRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth py-2"
          >
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[48%] lg:min-w-[32%] flex flex-col justify-between rounded-xl bg-white p-6 shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>

                <p className="my-6 text-sm leading-relaxed text-gray-600">
                  {item.message}
                </p>

                <button className="w-fit text-sm font-semibold text-violet-700 hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm tracking-widest text-violet-700 font-semibold">
              WHY LEADMETRICS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our core Principles & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF7E6] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-white/60">
                <img
                  src="/assets/icons/target.svg"
                  alt="Result Driven Strategy"
                  className="h-20 w-20"
                />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Result Driven Strategy
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We focus on results and all the activities implementing on the
                software are 100% aligned with the core strategy recommendation
                by the Digital Media Platforms using Data Analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F7FBEA] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-white/60">
                <img
                  src="/assets/icons/data.svg"
                  alt="Data Driven Approach"
                  className="h-20 w-20"
                />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Data-Driven Approach
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Our Digital Media strategies are meticulously crafted using data
                analytics, ensuring accuracy and alignment with your business’s
                unique nature and requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F2F1FF] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-white/60">
                <img
                  src="/assets/icons/ai.svg"
                  alt="AI Powered Implementation"
                  className="h-20 w-20"
                />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                AI-Powered Implementation
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We implement Digital Marketing Strategies with the assistance of
                Generative Artificial Intelligence, guaranteeing optimal results
                in minimal time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#642c89] bg-[url('/assets/img/bg/bottom-form-bg.png')] bg-cover bg-center bg-no-repeat border-b-[16px] border-b-[#FAAA01]">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="flex-1 text-start lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to start <br />
                <span className="text-yellow-400">sourcing leads online?</span>
              </h1>

              <p className="mt-4 max-w-lg text-white/90">
                Explore smarter, AI-powered digital marketing solutions with
                Leadmetrics and grow your business faster.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="rounded-2xl p-6">
                <GetStartedForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl bg-gray-50 transition hover:bg-gray-100"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-3 md:px-5 py-3 text-left"
                  >
                    <span className="text-sm font-semibold text-gray-900 sm:text-base w-[85%] ">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 px-2 items-center justify-center rounded-full border border-violet-600 text-violet-600 transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden px-3 md:px-5 transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] pb-4 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#642c89] overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="flex-1 text-start lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Stay ahead of the game
              </h1>

              <p className="mt-3 max-w-xl text-white/90">
                Get the latest insights, tips, and strategies delivered straight
                to your inbox. Join thousands of marketers who trust our
                expertise.
              </p>

              <ul className="mt-6 flex flex-wrap justify-center gap-6 lg:justify-start">
                {['Weekly insights', 'Tech trends', 'Expert tips'].map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-white"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex items-center gap-3 rounded-xl bg-white p-1 md:p-2 shadow-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg ps-2 md:px-4 py-1 md:py-3 text-sm outline-none placeholder:text-gray-400"
                />
                <button className="rounded-lg bg-yellow-500 px-3 md:px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:text-black">
                  Subscribe
                </button>
              </div>

              <p className="mt-4 text-xs text-white/80">
                By subscribing, you agree to our{' '}
                <span className="cursor-pointer text-yellow-400 underline">
                  privacy policy
                </span>
                . Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row justify-between">
            <di>
              <h2 className="text-3xl font-bold leading-tight">
                <span className="block">Evolve.</span>
                <span className="block">Transform.</span>
                <span className="block text-violet-800">Grow.</span>
              </h2>

              <div className="mt-6 rounded-xl bg-violet-800 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Let's Create Something <br /> Extraordinary Together!
                </h3>

                <button className="rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400">
                  Let’s Connect
                </button>
              </div>
            </di>

            <div className="mt-4 md:mt-0 flex flex-col items-start lg:items-end">
              <img
                src="/assets/img/logo/Logo.webp"
                alt="Logo"
                className="w-40 object-contain"
              />

              <div className="mt-5 text-left lg:text-right">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Follow Us On
                </p>

                <ul className="flex gap-3 lg:justify-end">
                  {[
                    {
                      icon: 'facebook-f',
                      url: 'https://www.facebook.com/ecesisservices/',
                    },
                    {
                      icon: 'twitter',
                      url: 'https://x.com/ecesisservices?s=21',
                    },
                    {
                      icon: 'instagram',
                      url: 'https://www.instagram.com/ecesistech/',
                    },
                    {
                      icon: 'linkedin-in',
                      url: 'https://in.linkedin.com/company/ecesis',
                    },
                  ].map(item => (
                    <li key={item.icon}>
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-700 text-white transition hover:bg-violet-900"
                      >
                        <i className={`fab fa-${item.icon}`} />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <MdEmail />
                    <Link
                      href="mailto:info@ecesistech.com"
                      className="text-black hover:text-violet-800"
                    >
                      info@ecesistech.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t bg-white py-4">
          <p className="text-center text-xs text-gray-600">
            © ECESIS {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </footer>

      <div className="fixed bottom-[30px] right-[30px]">
        <Link
          href="https://wa.me/9061111304?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            size={70}
            className="text-green-500 bg-white shadow-lg p-3 rounded-md"
          />
        </Link>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Get Free Consultation
            </h3>

            {/* Render your form */}
            <GetStartedForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default New;
