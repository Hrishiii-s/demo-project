import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-blue-400" />
              <span className="font-semibold text-xl text-white">Ecesis</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Process quality assurance and verification services for real estate and financial institutions globally.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Process Validation</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Data Verification</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Vendor Monitoring</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#industries" className="hover:text-white transition-colors">Banks & Financial Institutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Asset Management</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Valuation Firms</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">PropTech Companies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 Ecesis. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
