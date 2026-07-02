import Image from "next/image";
import Link from "next/link";
import { MapMockup, BookingForm } from "../../components/SharedComponents";

export default function DentalHappinessClinic() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/10 selection:text-cyan-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-cyan-100/50 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg group-hover:rotate-6 transition-transform shadow-md shadow-cyan-500/20">😊</span>
            <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl">Dental Happiness Clinic</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#implants" className="hover:text-cyan-600 transition">Dental Implants</a>
            <a href="#services" className="hover:text-cyan-600 transition">Services</a>
            <a href="#about" className="hover:text-cyan-600 transition">About Clinic</a>
          </div>
          <a 
            href="tel:+917385205993" 
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition hover:brightness-110 shadow-md shadow-cyan-500/15 cursor-pointer"
          >
            Call +91 73852 05993
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-tr from-sky-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0891b2_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              Expert Implantology & Smile Design
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-6">
              Implants That Feel exactly Like Natural Teeth
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Restore your smile and chew with absolute confidence. Our specialized implant procedures are designed to offer life-long durability and natural look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="#booking" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:brightness-110 transition text-center text-sm cursor-pointer"
              >
                Request Consultation
              </a>
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur border border-slate-800 rounded-xl px-5 py-2.5">
                <span className="text-amber-400 text-xl">★</span>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">5.0 Star Rated</h4>
                  <p className="text-[10px] text-slate-400">336+ verified reviews in Kharghar</p>
                </div>
              </div>
            </div>
          </div>

          <div id="booking" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-cyan-700 hover:bg-cyan-600 focus:ring-cyan-700" />
          </div>
        </div>
      </section>

      {/* Implant Detail Section */}
      <section id="implants" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-100">
            <Image 
              src="/images/dental-implant.jpg" 
              alt="Dental Implant Structure Illustration" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">Specialized Treatment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-6 leading-tight">
              Advanced Lifetime Dental Implants
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dental implants are the gold standard for replacing missing teeth. They consist of a titanium root that merges with your jawbone, providing a secure, strong foundation for a custom crown that matches your natural smile.
            </p>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs">01</span>
                <div>
                  <h4 className="font-bold text-slate-900">Digital Scanning & Planning</h4>
                  <p className="text-xs text-slate-500">Exact positioning for comfortable and safe implant surgery.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs">02</span>
                <div>
                  <h4 className="font-bold text-slate-900">Highest Success Rate</h4>
                  <p className="text-xs text-slate-500">Our computer-guided surgery ensures over 98% success rate.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs">03</span>
                <div>
                  <h4 className="font-bold text-slate-900">Permanent & Natural Looks</h4>
                  <p className="text-xs text-slate-500">Matches the exact shade, texture, and size of surrounding teeth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-slate-100/50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">Our Treatments</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Restore Happiness, One Smile At A Time</h2>
            <p className="text-slate-500 mt-2">Professional, state-of-the-art procedures under a reassuring clinical environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smile Design & Makeovers</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Achieve the smile you have always dreamed of. We design customized dental veneer schemes, composite bonding, and teeth whitening procedures.
              </p>
              <span className="text-cyan-600 font-bold text-xs">Veneers & Whitening</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Implant Dentistry</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Permanent solution for single or multiple missing teeth. We utilize medical-grade titanium implants for long-term health and beautiful restorations.
              </p>
              <span className="text-cyan-600 font-bold text-xs">Full Mouth Rehab</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">General Dentistry</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Keep your natural teeth healthy. Routine cleanings, cavity fillings, gum care, and painless root canal treatments for the entire family.
              </p>
              <span className="text-cyan-600 font-bold text-xs">Preventive Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">Happiness First</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-6">Designed For Comfort and Joy</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We call our clinic Dental Happiness because we believe a visit to the dentist should leave you with a smile. From our welcoming waiting lobby to our painless surgical setups, your comfort is our absolute priority.
            </p>
            <div className="flex flex-col gap-4 border-l-4 border-cyan-500 pl-6 my-6">
              <p className="text-slate-800 italic font-semibold">
                &ldquo;Our experience was absolutely amazing. Painless treatment, great hospitality, and the implant feels completely natural. Strongly recommended!&rdquo;
              </p>
              <span className="text-slate-500 text-xs font-bold">— Actual Patient Review</span>
            </div>
          </div>
          <MapMockup 
            name="Dental Happiness Clinic and Implant Centre"
            address="Shop No.12, Siddhivinayak Residency, Plot No.18, Shilp Chowk Rd, opposite Domino's Pizza, Sector 20, Kharghar, Panvel, Maharashtra 410210, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=Dental%20Happiness%20Clinic%20and%20Implant%20Centre&query_place_id=ChIJG7IARBrC5zsR0elbhDU-T1s"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">😊 Dental Happiness Clinic</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Dental Happiness Clinic & Implant Centre. Sector 20, Kharghar. Demo layout.</p>
        </div>
      </footer>
    </div>
  );
}
