import React, { useState } from 'react';
import { 
  ArrowUpRight, Sparkles, CheckCircle2, TrendingUp, Globe, Monitor, 
  Search, Award, Star, ChevronRight, Send, PhoneCall, Calendar, 
  ShieldCheck, Zap, Code, BarChart3, Layers, User, X, Check, Menu,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'Website Design & SEO Management',
    budget: '₦2,500,000 - ₦5,000,000',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      if (!res.ok) throw new Error('Submission failed');
      setContactSubmitted(true);
    } catch (err: any) {
      alert('Error sending message. Please try WhatsApp or email directly.');
    } finally {
      setContactSubmitting(false);
    }
  };

  const openBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 scroll-smooth">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              AT
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-none">Amos Tech</span>
              <span className="text-xs text-teal-400 font-medium tracking-wide mt-1 block">Web Design & SEO Specialist</span>
            </div>
          </a>

          {/* Navigation Links based on page sections */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">About Me</a>
            <a href="#work" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">Selected Work</a>
            <a href="#expertise" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">Expertise</a>
            <a href="#management" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">Web & SEO Management</a>
            <a href="#process" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">Framework</a>
          </nav>

          {/* Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => openBooking('Strategy Call')}
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 whitespace-nowrap shrink-0 rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">About Me</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Selected Work</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Expertise</a>
            <a href="#management" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Web & SEO Management</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Framework</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); openBooking('Strategy Call'); }}
              className="w-full py-3 text-sm font-bold text-slate-950 bg-teal-400 rounded-xl"
            >
              Book Strategy Call
            </button>
          </div>
        )}
      </header>

      {/* Simplified, Clean Hero Banner */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Based in Lagos, Nigeria • Amos Tech
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            High-Converting Websites & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Search Dominance</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Hi, I’m <strong className="text-white">Amos Gbadebo</strong>, founder of Amos Tech. With 3 years of dedication, I help ambitious businesses build world-class digital flagships and dominate Google search rankings.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => openBooking('Strategy Call')}
              className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="#work"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold text-sm rounded-xl transition-all"
            >
              Explore Work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl aspect-[4/5] max-w-md mx-auto">
            <img 
              src="/src/assets/images/amos_portrait_1793672098440.jpg" 
              alt="Amos Gbadebo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">Amos Tech Studio</span>
                <h4 className="text-lg font-bold text-white">Lagos, Nigeria</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400">Selected Work & Portfolio</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Crafted for Impact, Built for Revenue.
              </h3>
              <p className="text-slate-400 text-base">
                Explore recent projects spanning fashion consulting web designs, luxury e-commerce flagships, fintech platforms, and organic SEO traffic scalers.
              </p>
            </div>
            <button 
              onClick={() => openBooking('Portfolio Review')}
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer"
            >
              Request Full Portfolio Deck
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Project 1: Fashion Consulting Web */}
            <div className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-teal-500/40 transition-all flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                <img 
                  src="/src/assets/images/fashion_consulting_web_1793672642977.jpg" 
                  alt="Fashion Consulting Web" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-amber-400 text-xs font-semibold rounded-full">
                    Fashion Consulting Web
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Elara & Co. Fashion Consultancy</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Minimalist editorial web design for high-end fashion styling and brand consultancy, featuring bespoke typography and effortless booking flows.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span><strong className="text-white">3.8x</strong> Client Inquiries</span>
                    <span>·</span>
                    <span><strong className="text-white">#1</strong> Brand Authority</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2: E-Commerce Boutique */}
            <div className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-teal-500/40 transition-all flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                <img 
                  src="/src/assets/images/project_ecommerce_1793672099108.jpg" 
                  alt="E-Commerce Boutique" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-teal-400 text-xs font-semibold rounded-full">
                    E-Commerce Flagship
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">Atelier Élégance E-Commerce</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    High-end luxury e-commerce store with headless Shopify architecture, lightning-fast product grids, and international SEO structure.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span><strong className="text-white">3.4x</strong> Revenue</span>
                    <span>·</span>
                    <span><strong className="text-white">99/100</strong> Speed</span>
                  </div>
                  <span className="text-xs font-semibold text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3: Fintech SaaS */}
            <div className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-teal-500/40 transition-all flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                <img 
                  src="/src/assets/images/project_fintech_1793672099322.jpg" 
                  alt="FinTech SaaS" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-400 text-xs font-semibold rounded-full">
                    FinTech SaaS Platform
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">FinFlow Financial Intelligence</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Complete UI/UX redesign and technical SEO overhaul for a leading financial technology platform scaling across Africa.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span><strong className="text-white">+210%</strong> Signups</span>
                    <span>·</span>
                    <span><strong className="text-white">#1</strong> Google Rank</span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4: Organic SEO Growth */}
            <div className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-teal-500/40 transition-all flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                <img 
                  src="/src/assets/images/seo_analytics_1793672098403.jpg" 
                  alt="SEO Dominance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-emerald-400 text-xs font-semibold rounded-full">
                    Organic SEO Growth
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Quantum Digital Organic Scaling</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Surgical keyword targeting and technical SEO framework resulting in 478k+ monthly organic sessions in 6 months.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span><strong className="text-white">+340%</strong> Traffic</span>
                    <span>·</span>
                    <span><strong className="text-white">2,450+</strong> Keywords in Top 3</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400">Core Capabilities</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Built for Speed, Conversion, & Search Supremacy.
            </h3>
            <p className="text-slate-400 text-base">
              Every website I design is engineered from scratch to load instantly, rank effortlessly on Google, and convert visitors into lifelong clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-all group space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">01. Web Design & UI/UX</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Immersive digital flagships crafted with React, Next.js, and Webflow. Uncompromising visual aesthetics tailored to your brand identity.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-all group space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Search className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">02. Technical & On-Page SEO</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Deep keyword architecture, schema markup, and site speed optimization designed to secure #1 rankings on Google search results.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-all group space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">03. Conversion Optimization</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Frictionless user flows, compelling copywriting layouts, and trust signals that systematically maximize your visitor-to-customer conversion rate.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-all group space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">04. Global Positioning</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Empowering African enterprises and global startups to command international authority, premium pricing, and stellar market reputation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Web & SEO Management Section */}
      <section id="management" className="py-24 px-6 border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400">Complete Management Scope</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What You Get Once I Start Managing Your Web & SEO.
            </h3>
            <p className="text-slate-400 text-base">
              When you partner with Amos Tech for ongoing web and SEO management, you unlock a dedicated growth engine tailored to Nigerian and global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
                01
              </div>
              <h4 className="text-xl font-bold text-white">Bespoke Web Redesign & Maintenance</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Continuous UI/UX improvements, lightning-fast React/Webflow updates, bug fixes, and responsive mobile optimization so your digital storefront always looks immaculate.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                02
              </div>
              <h4 className="text-xl font-bold text-white">Surgical SEO & Keyword Dominance</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Monthly keyword tracking, technical audits, backlink acquisition strategies, and schema markup to ensure your brand secures top Google rankings.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                03
              </div>
              <h4 className="text-xl font-bold text-white">Conversion Rate Optimization (CRO)</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                A/B testing, user journey refinement, and persuasive copywriting frameworks designed to systematically increase your sales and lead conversion rates.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                04
              </div>
              <h4 className="text-xl font-bold text-white">Monthly ROI & Analytics Reporting</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Transparent monthly reports tracking organic traffic surges, Google Search Console position gains, and Naira revenue generated from your website.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                05
              </div>
              <h4 className="text-xl font-bold text-white">Speed & Core Web Vitals Audits</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Guaranteed 95+ Google Lighthouse speed scores across mobile and desktop devices to ensure zero bounce rates due to slow loading times.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                06
              </div>
              <h4 className="text-xl font-bold text-white">Priority Direct Communication</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct access to Amos Gbadebo via WhatsApp and Slack for rapid strategy shifts, content updates, and ongoing design enhancements.
              </p>
            </div>

          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-950 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-bold text-white">Ready to hand your web & SEO management to Amos Tech?</h4>
              <p className="text-xs text-slate-300 mt-1">Starting from ₦450,000 / month for dedicated ongoing management.</p>
            </div>
            <button 
              onClick={() => openBooking('Web & SEO Management Retainer')}
              className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 shrink-0 cursor-pointer"
            >
              Secure Your Project Slot
            </button>
          </div>

        </div>
      </section>

      {/* 4-Step Framework Section */}
      <section id="process" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400">Collaboration Framework</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              How We Work Together to Scale Your Brand.
            </h3>
            <p className="text-slate-400 text-base">
              A transparent, rigorous 4-step process designed to take you from initial vision to #1 Google rankings and high-converting revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 relative">
              <div className="text-4xl font-black text-teal-500/20">01</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Discovery & Strategy</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We deep-dive into your business goals, target audience, competitors, and keyword landscape to map out a winning digital blueprint.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 relative">
              <div className="text-4xl font-black text-teal-500/20">02</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Architectural UI/UX Design</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I craft bespoke, award-winning visual wireframes and high-fidelity prototypes focused entirely on user engagement and conversion.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 relative">
              <div className="text-4xl font-black text-teal-500/20">03</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Surgical SEO Engineering</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every line of code is optimized for Core Web Vitals, speed, schema markup, and structured data for effortless Google indexing.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 relative">
              <div className="text-4xl font-black text-teal-500/20">04</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Launch & Scale Growth</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We launch your flagship digital presence, monitor search console performance, and scale your organic inbound revenue.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center justify-between">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-400 flex items-center justify-center font-bold text-slate-950 text-sm">
                AT
              </div>
              <span className="text-base font-bold text-white">Amos Tech</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Professional Website Designer and SEO Specialist based in Lagos, Nigeria. Crafting high-converting digital flagships and dominating search rankings for global brands.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:flex-row items-start md:items-center justify-end gap-6 text-xs text-slate-400">
            <div className="space-y-1 md:text-right">
              <div className="text-white font-medium">Lagos, Nigeria • Working Worldwide</div>
              <div className="text-teal-400">amos@amostech.ng</div>
            </div>
            <button 
              onClick={() => openBooking('Footer Consult')}
              className="px-5 py-2.5 bg-teal-400 text-slate-950 font-bold rounded-xl hover:bg-teal-300 transition-colors cursor-pointer"
            >
              Book Call
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Amos Tech. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#about" className="hover:text-slate-300">About Me</a>
            <a href="#work" className="hover:text-slate-300">Selected Work</a>
            <a href="#expertise" className="hover:text-slate-300">Expertise</a>
            <a href="#management" className="hover:text-slate-300">Web & SEO Management</a>
          </div>
        </div>
      </footer>

      {/* Booking / Contact Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">Schedule Consultation</span>
                <h3 className="text-2xl font-bold text-white mt-1">Let’s Build Something Iconic</h3>
              </div>
              <button 
                onClick={() => setBookingModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {contactSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Consultation Request Received!</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{contactForm.name}</strong>. Amos Tech has received your inquiry and will reach out via email within 24 hours.
                </p>
                <button 
                  onClick={() => { setBookingModalOpen(false); setContactSubmitted(false); }}
                  className="px-6 py-2.5 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-700 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {selectedService && (
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                    Inquiry Topic: {selectedService}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Jane Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="jane@company.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Project Type</label>
                    <select 
                      value={contactForm.projectType}
                      onChange={(e) => setContactForm({...contactForm, projectType: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    >
                      <option value="Website Design & SEO Management">Website Design & SEO Management</option>
                      <option value="Fashion Consulting Web">Fashion Consulting Web</option>
                      <option value="E-Commerce Flagship">E-Commerce Flagship</option>
                      <option value="Monthly SEO Retainer">Monthly SEO Retainer (₦450k+/mo)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Budget Range</label>
                    <select 
                      value={contactForm.budget}
                      onChange={(e) => setContactForm({...contactForm, budget: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500"
                    >
                      <option value="₦1,500,000 - ₦2,500,000">₦1,500,000 - ₦2,500,000</option>
                      <option value="₦2,500,000 - ₦5,000,000">₦2,500,000 - ₦5,000,000</option>
                      <option value="₦5,000,000+">₦5,000,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Details & Goals</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell me about your business and goals..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-teal-500 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={contactSubmitting}
                  className="w-full py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {contactSubmitting ? 'Sending Request...' : 'Secure Your Project Slot'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
