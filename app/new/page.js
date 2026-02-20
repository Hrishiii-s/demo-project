'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoPlayCircleOutline } from 'react-icons/io5';

import GetStartedForm from '@/components/sections/GetStartedForm';

import {
  BG_COLORS,
  BUSSINESS_DATA,
  FEATURES,
  SERVICE_DATA,
  SERVICES,
  TESTIMONIALS,
  TRUSTED_BRANDS,
} from './data';

const New = () => {
  const [activeService, setActiveService] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showYtVideo, setShowYtVideo] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  }, [showConfirmation]);

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
            <h1 className="text-3xl font-bold leading-relaxed lg:text-5xl text-black lg:w-[75%]">
              <span className="text-violet-800">#1 Offshore Partner</span>
              <br /> for U.S. BPO & Valuations
            </h1>

            <p className="mt-6 text-base text-gray-600 lg:text-lg lg:w-[75%]">
              We enable valuation firms, real estate companies, and independent
              brokers to handle higher Broker Price Opinion volumes while
              maintaining accuracy, compliance, and fast turnaround times.
            </p>

            <div className="mt-8 relative">
              <div className=" hidden lg:block pointer-events-none absolute -left-25 top-8 h-[20rem] w-[20rem] rounded-full bg-violet-400/30 blur-[80px] -z-10" />

              <p className="text-lg font-semibold text-gray-800">
                Our Offerings include:
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  AI-enabled Broker price opinion order Acceptance & Routing
                </li>
                <li>End-to-End Broker price opinion Workflow Automation</li>
                <li>Valuation Review & Quality Control Automation</li>
                <li>Scalable Broker price opinion Production Support</li>
                <li>Broker & Panel Management Tools</li>
                <li>Reporting & Insights for Institutional Clients</li>
              </ul>

              <p className="text-lg font-semibold text-gray-800 mt-5">
                Designed for:
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>Broker price opinion companies and valuation vendors</li>
                <li>Institutional broker panels</li>
                <li>REO, foreclosure, and asset management teams</li>
                <li>Appraisal review & pricing support firms</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/3">
            <div className="rounded-xl bg-violet-200 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Get Free Consultation
              </h3>

              <GetStartedForm
                onSubmit={() => {
                  setShowModal(false);
                  setShowConfirmation(true);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h5 className="text-sm text-start font-semibold uppercase tracking-wider text-violet-700">
            Why Ecesis
          </h5>

          <h2 className="mt-2 text-start text-3xl font-bold text-gray-900 sm:text-4xl">
            What differentiates us
          </h2>

          <div className="mt-[3rem] flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group rounded-xl bg-violet-50 p-6 text-left transition hover:-translate-y-1 hover:shadow-lg ">
              <h1 className="mb-4 text-[2.5rem] text-[#F9BA00]">16+</h1>

              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                An established & registered service provider
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                16+ successful years in the US real estate industry.
              </p>
            </div>

            {BUSSINESS_DATA.map((data, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group rounded-xl bg-violet-50 p-6 text-left transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="size-40 object-contain"
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
                className={`rounded-md px-4 py-3 text-sm font-medium transition w-[85%] lg:w-full lg:whitespace-nowrap capitalize
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
              <h3
                className="text-2xl font-bold text-gray-900 capitalize"
                dangerouslySetInnerHTML={{ __html: activeData.title }}
              />

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
            Enhanced BPO Management with ECESIS
          </h2>

          <div className="mt-[4rem] mb-[1rem] w-full md:w-[75%] lg:w-[50%] mx-auto h-[20rem] bg-[url('/assets/img/meta/thumbnail2.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-md">
            <div className="relative flex items-center justify-center">
              <span className="absolute h-32 w-32 rounded-full bg-white opacity-20 animate-ping"></span>
              <span className="absolute h-24 w-24 rounded-full opacity-30 animate-pulse"></span>

              <IoPlayCircleOutline
                size={100}
                color="#fff"
                className="relative z-10 cursor-pointer"
                onClick={() => setShowYtVideo(true)}
              />
            </div>
          </div>

          <div className="w-full md:w-[75%] lg:w-[50%] mx-auto mb-3">
            <h2 className="">
              WATCH HOW TO GET{' '}
              <span className="text-[#60A5FA]">2X REVENUE</span> GROWTH,{' '}
              <span className="text-violet-800">92%+ ACCURACY</span> WITH ECESIS
            </h2>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Portals
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

            <div
              className={`flex items-center justify-center rounded-xl p-4 border-1 border-dashed`}
            >
              <p className="text-center capitalize text-violet-800">
                & <br /> many more
              </p>
            </div>
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
                <div className="flex flex-col items-start gap-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-semibold text-sm uppercase">
                    {item.name}
                  </div>

                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>

                <p className="my-6 text-sm leading-relaxed text-gray-600">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm tracking-widest text-violet-700 font-semibold">
              WHY ECESIS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our core Principles & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg ${brandColors[index]}`}
              >
                <h3 className="mb-3 text-lg lg:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#642c89] bg-[url('/assets/img/bg/bottom-form-bg.png')] bg-cover bg-center bg-no-repeat border-b-[16px] border-b-[#FAAA01]">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <div className="flex-1 text-start lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s review your <br />
                <span className="text-yellow-400">valuation workflow</span>
              </h1>

              <p className="mt-4 max-w-lg text-white/90">
                See how we can reduce turnaround time and increase your monthly
                capacity.
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

      <footer className="bg-gray-50 pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row justify-between">
            <di>
              <h2 className="text-2xl lg:text-3xl font-bold leading-6 flex flex-row">
                <span className="text-[#60A5FA]">Evolve.</span>
                <span className="text-[#F472B6]">Transform.</span>
                <span className="text-[#00235F]">Grow.</span>
              </h2>

              <div className="mt-4 rounded-xl bg-violet-800 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Let&apos;s Create Something <br /> Extraordinary Together!
                </h3>

                <button
                  onClick={() => setShowModal(true)}
                  className="rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400"
                >
                  Let&apos;s Connect
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
                      Icon: FaFacebookF,
                      url: 'https://www.facebook.com/ecesisservices/',
                    },
                    {
                      Icon: FaXTwitter,
                      url: 'https://x.com/ecesisservices?s=21',
                    },
                    {
                      Icon: FaInstagram,
                      url: 'https://www.instagram.com/ecesistech/',
                    },
                    {
                      Icon: FaLinkedinIn,
                      url: 'https://in.linkedin.com/company/ecesis',
                    },
                  ].map(({ Icon, url }, index) => (
                    <li key={index}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-700 text-white transition hover:bg-violet-900"
                      >
                        <Icon className="text-lg" />
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

      <div className="fixed bottom-[50px] right-[30px]">
        <Link
          href="https://wa.me/9061111304?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp size={50} className="text-green-500" />
        </Link>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Get Free Consultation
            </h3>

            <GetStartedForm
              onSubmit={() => {
                setShowModal(false);
                setShowConfirmation(true);
              }}
            />
          </div>
        </div>
      )}

      {showYtVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowYtVideo(false)}
        >
          <div className="relative w-full max-w-3xl rounded-xl p-6">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/jRHkw8liWLQ?autoplay=1"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white px-6 py-8 shadow-xl">
            <h4 className="text-center text-2xl leading-tight">Thank You!</h4>
            <p className="text-center text-[1rem] leading-tight">
              Our valuation expert will get back to you soon.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default New;
