import Image from "next/image";
import Link from "next/link";
import { StarRating, MapMockup, BookingForm } from "../../components/SharedComponents";

export default function VetaSmiles() {
  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#2e2638] font-sans selection:bg-purple-600/10 selection:text-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#faf8fc]/90 backdrop-blur border-b border-purple-100/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-lg group-hover:scale-105 transition-transform">V</span>
            <span className="font-extrabold text-[#4c3a5c] tracking-wider text-xl">Veta smiles</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5c4a6c]">
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#services" className="hover:text-purple-600 transition">Aesthetics</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </div>
          <a 
            href="tel:+918452843320" 
            className="bg-purple-700 text-white font-bold py-2.5 px-5 rounded-full text-sm transition hover:bg-purple-600 shadow-md shadow-purple-900/10 cursor-pointer"
          >
            Call +91 84528 43320
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#2f1f3a] via-[#1e1425] to-[#150d1a] text-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-purple-500/10 blur-3xl pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              Aesthetic & Laser Dental Studio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-6">
              Crafting Radiant & Confident Smiles
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Veta smiles combines gentle, patient-focused dental treatments with modern aesthetic enhancements. Bring out the best in your smile in Kopar Khairane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="#booking" 
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition text-center text-sm cursor-pointer"
              >
                Book Smile Analysis
              </a>
              <div className="flex items-center gap-3 bg-purple-950/60 backdrop-blur border border-purple-800 rounded-full px-5 py-2.5">
                <span className="text-amber-400 font-bold text-lg">328+</span>
                <div className="flex flex-col">
                  <span className="text-xs text-amber-400 font-bold">5.0 ★ Google Rating</span>
                  <span className="text-[10px] text-slate-300">Top-Rated Dentist in Sector 19</span>
                </div>
              </div>
            </div>
          </div>

          <div id="booking" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-purple-800 hover:bg-purple-700 focus:ring-purple-800" />
          </div>
        </div>
      </section>

      {/* Trust Badge Banner */}
      <section className="bg-purple-50 border-y border-purple-100/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-xl text-[#3c2a4c]">Personalized Oral Care & Smile Transformation</h3>
            <p className="text-[#5c4a6c] text-sm mt-1">Providing safe, gentle aesthetic veneers and general dentist solutions.</p>
          </div>
          <StarRating rating="5.0" count={328} />
        </div>
      </section>

      {/* Aesthetic Focus Gallery */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-600 text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Aesthetic Enhancements</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c2a4c] mt-4">Discover Dental Aesthetics</h2>
          <p className="text-[#6c5a7c] mt-2">Get healthy teeth and a beautiful smile with custom whitening and restoration techniques.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl bg-purple-100">
            <Image 
              src="/images/happy-smile.jpg" 
              alt="Beautiful confident smile model" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#3c2a4c] mb-2">Teeth Whitening & Cleanings</h3>
              <p className="text-[#5c4a6c] text-sm leading-relaxed">
                Remove tough stains and restore your teeth to their natural bright shade. We offer office whitening sessions and take-home custom bleaching trays.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#3c2a4c] mb-2">Porcelain & Composite Veneers</h3>
              <p className="text-[#5c4a6c] text-sm leading-relaxed">
                Correct chipped, misaligned, or heavily stained teeth with ultra-thin, highly customized composite or porcelain laminates that fit over your teeth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#3c2a4c] mb-2">Painless Gum Contouring</h3>
              <p className="text-[#5c4a6c] text-sm leading-relaxed">
                Correct a &quot;gummy&quot; smile safely using soft-tissue dental lasers that contour your gum line with minimal bleeding and very quick recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Dental section */}
      <section id="about" className="bg-[#f3edf7] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">General Care</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c2a4c] mt-4 mb-6 leading-tight">
              Gentle Family Dentistry in Kopar Khairane
            </h2>
            <p className="text-[#5c4a6c] mb-6 leading-relaxed">
              Veta smiles is committed to providing outstanding regular dental maintenance alongside cosmetic makeovers. We focus on preventive diagnosis to protect your teeth and gums for the long run.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Routine checkups, cleanings, and deep scaling",
                "Mercury-free composite dental fillings",
                "Advanced root canal therapies under local anesthesia",
                "Safe, comfortable extractions and wisdom teeth removal"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="text-[#5c4a6c] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/clinic-interior.jpg" 
              alt="Elegant Clinic Lobby" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MapMockup 
            name="Veta smiles"
            address="Snehalprabha, 107, MSEB road, near Ranjandevi mandir temple, Gaothan, Sector 19, koperkhairne, Navi Mumbai, Maharashtra 400709, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=Veta%20smiles&query_place_id=ChIJwWs6brXB5zsROB9EOYp_igE"
          />
          <div>
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Visit Us Today</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c2a4c] mt-4 mb-6">Located Near Ranjandevi Mandir</h2>
            <p className="text-[#5c4a6c] mb-6 leading-relaxed">
              Our modern studio is located at Snehalprabha building (MSEB road, near the Ranjandevi temple) in Kopar Khairane. We recommend booking in advance to ensure minimal waiting times.
            </p>
            <div className="flex flex-col gap-3 text-sm mb-8 border-l-4 border-purple-600 pl-4">
              <div>
                <span className="font-bold text-[#3c2a4c]">Direct Line: </span>
                <span className="text-[#5c4a6c]">+91 84528 43320</span>
              </div>
              <div>
                <span className="font-bold text-[#3c2a4c]">Working Hours: </span>
                <span className="text-[#5c4a6c]">10:00 AM – 9:00 PM (Sunday Closed)</span>
              </div>
            </div>
            <a 
              href="tel:+918452843320"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-bold py-3.5 px-6 rounded-full text-sm transition shadow-lg cursor-pointer"
            >
              ☎ Call Veta Smiles
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-extrabold text-white text-lg">Veta smiles</span>
          <p className="text-xs">© {new Date().getFullYear()} Veta Smiles Dental Studio. Kopar Khairane. Demo layout.</p>
        </div>
      </footer>
    </div>
  );
}
