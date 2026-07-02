import Image from "next/image";
import Link from "next/link";
import { StarRating, MapMockup, BookingForm } from "../../components/SharedComponents";

export default function DrMhatreDentalClinic() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-slate-900 font-sans selection:bg-emerald-600/10 selection:text-emerald-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-emerald-100 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-extrabold text-lg group-hover:scale-105 transition-transform">M</span>
            <span className="font-extrabold text-emerald-900 tracking-tight text-xl">Dr. Mhatre Dental Clinic</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-emerald-800 transition">Treatments</a>
            <a href="#why-us" className="hover:text-emerald-800 transition">About Dr. Mhatre</a>
            <a href="#location" className="hover:text-emerald-800 transition">Find Clinic</a>
          </div>
          <a 
            href="tel:+919220866615" 
            className="bg-emerald-800 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition hover:bg-emerald-700 shadow-md shadow-emerald-800/10 cursor-pointer"
          >
            Call +91 92208 66615
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              Panvel&apos;s Trusted Family Dental Clinic Since 1998
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Compassionate & Reassuring Oral Care
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              With 630+ five-star patient reviews, Dr. Mhatre Dental Clinic offers advanced dental treatments, painless root canals, and family dental plans in Old Panvel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="#book" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-center text-sm cursor-pointer"
              >
                Book Appointment
              </a>
              <div className="flex items-center gap-3 bg-emerald-950/60 backdrop-blur border border-emerald-800 rounded-xl px-5 py-2.5">
                <span className="text-amber-400 font-bold text-lg">636+</span>
                <div className="flex flex-col">
                  <span className="text-xs text-amber-400 font-bold">5.0 ★ Google Rating</span>
                  <span className="text-[10px] text-slate-300">Verified Local Community Choice</span>
                </div>
              </div>
            </div>
          </div>

          <div id="book" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-emerald-800 hover:bg-emerald-700 focus:ring-emerald-800" />
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-emerald-50 border-y border-emerald-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-xl text-emerald-950">Trusted Dental Health Partner in Old Panvel</h3>
            <p className="text-emerald-700 text-sm mt-1">Providing painless procedures, cosmetic smile designs, and preventive checks.</p>
          </div>
          <StarRating rating="5.0" count={636} />
        </div>
      </section>

      {/* Treatments Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4">Complete Dental Maintenance</h2>
          <p className="text-slate-500 mt-2">Providing a wide array of oral healthcare solutions under strict safety and sanitation protocols.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 font-bold">01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Family Dental Maintenance</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              From kids&apos; checkups to deep scaling and composite fillings. Keep your teeth healthy and plaque-free with our gentle checkup procedures.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 font-bold">02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Painless Endodontics</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We specialize in microscopic root canal therapy that removes pain and saves your teeth. Quick single-sitting treatments are available.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 font-bold">03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Extractions</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dealing with severe tooth pain? We offer quick emergency walk-in consultation, diagnostic X-rays, and painless, safe surgical extractions.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Biography */}
      <section id="why-us" className="bg-emerald-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/dentist-operating.jpg" 
              alt="Dr Mhatre operating advanced dental machinery" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-emerald-300 font-bold uppercase tracking-wider text-xs bg-emerald-800 px-3 py-1 rounded-full">About Dr. Mhatre</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-6 leading-tight">
              Clinical Excellence & Personal Care
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Led by Dr. Mhatre, our clinic has served the Old Panvel community for over two decades. We place a massive emphasis on patient education, explaining each procedure clearly to remove dental anxiety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex gap-2">
                <span className="text-amber-400">✓</span>
                <span>20+ Years Clinical Practice</span>
              </div>
              <div className="flex gap-2">
                <span className="text-amber-400">✓</span>
                <span>Painless Laser Dentistry</span>
              </div>
              <div className="flex gap-2">
                <span className="text-amber-400">✓</span>
                <span>100% Autoclave Sterilization</span>
              </div>
              <div className="flex gap-2">
                <span className="text-amber-400">✓</span>
                <span>Friendly, Pediatric-safe approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address */}
      <section id="location" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MapMockup 
            name="Dr mhatre dental clinic"
            address="first floor, Chhatrapati Shivaji Maharaj Chowk, above axis bank, Old Panvel, Panvel, Maharashtra 410206, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=Dr%20mhatre%20dental%20clinic&query_place_id=ChIJ8yx6yeXp5zsRTnxhIIH0BGA"
          />
          <div>
            <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full">Panvel Clinic</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-6">Located at CSM Chowk, Old Panvel</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Our clinic is situated on the first floor at Chhatrapati Shivaji Maharaj Chowk, Old Panvel (directly above Axis Bank). It is a prominent, well-known landmark, easily accessible by public and private transport.
            </p>
            <div className="flex flex-col gap-3 text-sm mb-8 border-l-4 border-emerald-800 pl-4">
              <div>
                <span className="font-bold text-slate-800">Phone: </span>
                <span className="text-slate-600">+91 92208 66615</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Clinic Timings: </span>
                <span className="text-slate-600">Morning 10:00 AM – 1:30 PM | Evening 5:30 PM – 9:00 PM</span>
              </div>
            </div>
            <a 
              href="tel:+919220866615"
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition shadow-lg cursor-pointer"
            >
              ☎ Call Dr. Mhatre&apos;s Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-extrabold text-white text-sm">Dr. Mhatre Dental Clinic</span>
          <p className="text-xs">© {new Date().getFullYear()} Dr. Mhatre Dental Clinic, Old Panvel. Demo layout.</p>
        </div>
      </footer>
    </div>
  );
}
