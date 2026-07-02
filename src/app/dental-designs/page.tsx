import Image from "next/image";
import Link from "next/link";
import { StarRating, MapMockup, BookingForm } from "../../components/SharedComponents";

export default function DentalDesigns() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-base group-hover:scale-105 transition-transform">DD</span>
            <span className="font-bold text-white tracking-widest text-lg uppercase sm:text-xl">Dental Designs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <a href="#philosophy" className="hover:text-amber-400 transition">Philosophy</a>
            <a href="#services" className="hover:text-amber-400 transition">Design Suite</a>
            <a href="#location" className="hover:text-amber-400 transition">Atelier</a>
          </div>
          <a 
            href="tel:+919702055011" 
            className="bg-amber-500 text-slate-900 font-extrabold py-2.5 px-6 rounded text-xs uppercase tracking-wider transition hover:bg-amber-400 shadow-md shadow-amber-500/10 cursor-pointer"
          >
            Call +91 97020 55011
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/clinic-interior.jpg" 
            alt="Dental Designs Luxe Atelier" 
            fill
            className="object-cover opacity-20 filter brightness-50 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-amber-400 bg-amber-400/5 border border-amber-400/20 rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
              Exclusive Cosmetic Dentistry Studio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white mb-6 uppercase">
              Bespoke Smile <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Architecture</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              We design premium smiles utilizing computer-guided Digital Smile Design, custom porcelain restorations, and state-of-the-art procedures. Enjoy a VIP dental experience in Nerul East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="#consultation" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 px-8 rounded uppercase tracking-wider text-xs transition text-center cursor-pointer"
              >
                Schedule Consultation
              </a>
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded px-5 py-2.5">
                <span className="text-amber-400 font-extrabold text-lg">411</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">5.0 ★ Google Rating</span>
                  <span className="text-[9px] text-slate-500">Verified Luxury Cosmetic Practice</span>
                </div>
              </div>
            </div>
          </div>

          <div id="consultation" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-slate-800 hover:bg-slate-700 focus:ring-amber-500 border border-slate-700" />
          </div>
        </div>
      </section>

      {/* Trust Quote Banner */}
      <section className="bg-slate-950 border-y border-slate-800 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-white uppercase tracking-wider">Bespoke Design, Exceptional Craftsmanship</h3>
            <p className="text-slate-500 text-xs mt-1">Creating perfectly balanced, natural-looking porcelain veneers in Nerul.</p>
          </div>
          <StarRating rating="5.0" count={411} />
        </div>
      </section>

      {/* The Dental Designs Suite */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest bg-amber-400/5 border border-amber-400/20 px-3 py-1 rounded">Cosmetic Suite</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 uppercase tracking-tight">Personalized Design Procedures</h2>
          <p className="text-slate-500 mt-2 text-sm">Where clinical excellence meets artistic balance for your dream smile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design 1 */}
          <div className="bg-slate-950 border border-slate-800/80 rounded p-8 hover:border-amber-400/30 transition duration-300">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Digital Smile Design</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Visualize your final smile before the treatment even begins. We map your smile digitally using 3D modeling and photogrammetry for a perfectly customized fit.
            </p>
            <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">Digital Mockups</span>
          </div>
          {/* Design 2 */}
          <div className="bg-slate-950 border border-slate-800/80 rounded p-8 hover:border-amber-400/30 transition duration-300">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Ultra-Thin Veneers</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Crafted from premium dental ceramics, our veneers are individually designed to correct tooth gaps, chips, and color issues for a natural finish.
            </p>
            <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">Custom Ceramics</span>
          </div>
          {/* Design 3 */}
          <div className="bg-slate-950 border border-slate-800/80 rounded p-8 hover:border-amber-400/30 transition duration-300">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Smile Rejuvenation</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              A comprehensive restoration involving teeth whitening, gum contouring, and advanced alignment to completely rejuvenate your facial aesthetics.
            </p>
            <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">Full Rehabilitation</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="bg-slate-950 py-24 px-6 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest bg-amber-400/5 border border-amber-400/20 px-3 py-1 rounded">Our Atelier Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-6 uppercase tracking-tight">
              An Artistic Touch to Dentistry
            </h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              At Dental Designs, we do not believe in cookie-cutter dental procedures. A truly beautiful smile matches your facial contours, skin tone, and personal expression. We carefully construct customized restorations that are built for health, function, and high-end aesthetics.
            </p>
            <div className="flex flex-col gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Custom color shade matching under natural lighting</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Minimally invasive tooth preparations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Premium bio-compatible porcelain materials</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded overflow-hidden shadow-2xl border border-slate-800">
            <Image 
              src="/images/happy-smile.jpg" 
              alt="Bespoke Smile Design Veneer Finish" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section id="location" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MapMockup 
            name="Dental Designs"
            address="Shop - 4, Navdurga CHS, Plot - 7, Sector 19A Nerul Rd, Nerul East, Sector 19A, Nerul, Navi Mumbai, Maharashtra 400706, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=Dental%20Designs&query_place_id=ChIJb_2-YcfD5zsRdxnelhx7Xjc"
          />
          <div>
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest bg-amber-400/5 border border-amber-400/20 px-3 py-1 rounded">Our Location</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-6 uppercase tracking-tight">Located in Nerul East</h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Our luxury atelier is situated in Navdurga CHS, Nerul East, Navi Mumbai. We operate strictly by appointment to ensure each patient receives dedicated, individual care from our cosmetic specialists.
            </p>
            <div className="flex flex-col gap-3 text-xs mb-8 border-l-2 border-amber-500 pl-4 text-slate-300">
              <div>
                <span className="font-bold text-white uppercase tracking-wider">Atelier Line: </span>
                <span>+91 97020 55011</span>
              </div>
              <div>
                <span className="font-bold text-white uppercase tracking-wider">Consultations: </span>
                <span>Monday – Saturday: 10:00 AM – 8:30 PM</span>
              </div>
            </div>
            <a 
              href="tel:+919702055011"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition cursor-pointer"
            >
              ☎ Call the Atelier
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-12 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-bold text-white text-sm uppercase tracking-widest">Dental Designs</span>
          <p className="text-[10px]">© {new Date().getFullYear()} Dental Designs. Nerul East. All Rights Reserved. Demo layout.</p>
        </div>
      </footer>
    </div>
  );
}
