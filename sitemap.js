const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

// Define website URL
const WEBSITE_URL = "https://www.ecesistech.com";

// Define static pages
const staticPages = [
  { url: "/", changefreq: "yearly", priority: 1 },
  { url: "/about", changefreq: "monthly", priority: 1 },
  { url: "/services-details/proptech", changefreq: "weekly", priority: 1 },
  { url: "/services-details/artificial-intelligence", changefreq: "monthly", priority: 1 },
  { url: "/services-details/business-process-automation", changefreq: "monthly", priority: 1 },
  { url: "/services-details/real-estate-valuation", changefreq: "monthly", priority: 1 },
  { url: "/services-details/accounting-finance", changefreq: "monthly", priority: 1 },
  { url: "/services-details/manpower-staffing", changefreq: "monthly", priority: 1 },
  { url: "/services-details/digital-marketing", changefreq: "monthly", priority: 1 },
    { url: "/services-details/qa-valuation-processing", changefreq: "monthly", priority: 1 },
  { url: "/contact", changefreq: "monthly", priority: 1 },
  { url: "/case-study", changefreq: "monthly", priority: 1 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 1 },
  { url: "/schedule-a-meeting", changefreq: "monthly", priority: 1 },
  { url: "/blog", changefreq: "monthly", priority: 1 },
  { url: "/blog/How-AI-is-Revolutionizing-Real-Estate-Valuation", changefreq: "monthly", priority: 1 },
  { url: "/blog/How-Proptech-Firms-Can-Scale-Operations-with-Workforce-Extension-Services", changefreq: "monthly", priority: 1 },
  { url: "/blog/How-AI-Assists-in-Property-Repairs-and-Maintenance", changefreq: "monthly", priority: 1 },
  { url: "/blog/AI-in-Mortgage-Underwriting", changefreq: "monthly", priority: 1 },
  { url: "/blog/5-Signs-Your-Business-Needs-to-Automate-Data-Entry", changefreq: "monthly", priority: 1 },
  { url: "/blog/How-ECESIS-is-Redefining-the-Real-Estate-Industry", changefreq: "monthly", priority: 1 },
  { url: "/blog/Insights-for-Real-Estate-Professionals", changefreq: "monthly", priority: 1 },
  { url: "/blog/Revolutionizing-How-Businesses-Scale-Operations", changefreq: "monthly", priority: 1 },
  { url: "/blog/Broker-Price-Opinion-Outsourcing", changefreq: "monthly", priority: 1 },
  { url: "/blog/Top-5-Reasons-Real-Estate-Agents-Should-Use-Virtual-Assistants-for-BPO-Services", changefreq: "monthly", priority: 1 }
];

// Function to generate sitemap
async function generateSitemap() {
  console.log("🚀 Generating sitemap...");

  const sitemap = new SitemapStream({ hostname: WEBSITE_URL });

  staticPages.forEach(page => sitemap.write(page));
  sitemap.end();

  const sitemapXml = await streamToPromise(sitemap).then(data => data.toString());

  // Save sitemap.xml in the public directory
  const filePath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(filePath, sitemapXml);

  console.log("✅ Sitemap successfully generated at public/sitemap.xml");
}

// Run the function
generateSitemap().catch(err => console.error("❌ Error generating sitemap:", err));
