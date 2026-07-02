import Image from "next/image";
import Link from "next/link";
import { StarRating, MapMockup, BookingForm } from "../../components/SharedComponents";

export default function MetroDentalClinic() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500/10 selection:text-teal-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-extrabold text-lg group-hover:scale-105 transition-transform">M</span>
            <span className="font-extrabold text-teal-800 tracking-tight text-xl">Metro Dental Clinic</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#treatments" className="hover:text-teal-600 transition">Treatments</a>
            <a href="#why-us" className="hover:text-teal-600 transition">Why Metro</a>
            <a href="#map" className="hover:text-teal-600 transition">Find Us</a>
          </div>
          <a 
            href="tel:+917506634878" 
            className="bg-teal-600 text-white font-bold py-2.5 px-5 rounded-full text-sm transition hover:bg-teal-500 shadow-md shadow-teal-600/15 cursor-pointer"
          >
            Call +91 75066 34878
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              Kharghar&apos;s Trusted Family Dental Clinic
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Beautiful Smiles For The Whole Family
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              With 770+ five-star reviews, Metro Dental Clinic provides gentle, preventive, and pediatric care for families in Kharghar. Experience pain-free dentistry at our modern dental studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <a 
                href="#booking" 
                className="bg-amber-500 hover:bg-amber-400 text-teal-950 font-bold py-4 px-8 rounded-full shadow-lg transition text-center text-sm cursor-pointer"
              >
                Schedule Appointment
              </a>
              <div className="flex items-center gap-3 bg-teal-950/60 backdrop-blur border border-teal-800 rounded-full px-5 py-2.5">
                <span className="text-amber-400 text-xl font-bold">773+</span>
                <div className="flex flex-col">
                  <span className="text-xs text-amber-400 font-bold">5.0 ★ Google Rating</span>
                  <span className="text-[10px] text-slate-400">Largest Review Count in Sector 35D</span>
                </div>
              </div>
            </div>
          </div>

          <div id="booking" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-teal-700 hover:bg-teal-600 focus:ring-teal-700" />
          </div>
        </div>
      </section>

      {/* Trust Rating Strip */}
      <section className="bg-teal-50 border-y border-teal-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-extrabold text-xl text-teal-950">Over 770+ Happy Patients and Counting</h3>
            <p className="text-teal-700 text-sm mt-1">Providing compassionate family-oriented dental care near Sector 35D, Kharghar.</p>
          </div>
          <StarRating rating="5.0" count={773} />
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full">Treatments We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950 mt-4">Painless Dental Solutions</h2>
          <p className="text-slate-500 mt-2">Comprehensive services including aligners, pediatric dentistry, checkups, and root canals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.21 1.79 4 4 4 1.206 0 2.29-.533 3.038-1.378L13 18.062V20a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-3.062l-3.44-3.44C13.467 9.29 14 8.206 14 7c0-2.21-1.79-4-4-4a17.926 17.926 0 00-5.129 1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-950 mb-3">Family & Child Dentistry</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We specialize in pediatric dental care. Our gentle approach keeps kids calm, setting a foundation for a lifetime of healthy smiles and positive dentist visits.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-950 mb-3">Orthodontics & Aligners</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Straighten your smile discreetly. We offer state-of-the-art clear aligners and traditional braces for children, teens, and adults with custom treatment mapping.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.17a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-950 mb-3">Implant Restoration</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Replace missing teeth with biocompatible implants. Designed to blend naturally with your smile, our crowns and bridges offer durable oral rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="bg-teal-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-300 font-bold uppercase tracking-wider text-xs bg-teal-800 px-3 py-1 rounded-full">Why Metro Dental</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-6 leading-tight">
              Exceptional Dental Care with Reassuring Gentleness
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We understand that visiting the dentist can cause anxiety. Our clinic is built to feel calming and supportive. We make sure each procedure is explained clearly and customized for your maximum comfort.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-amber-400 text-lg font-bold">01</span>
                <div>
                  <h4 className="font-bold text-white mb-1">State-of-the-Art Care</h4>
                  <p className="text-xs text-slate-300">Using the latest dental scanners and ultra-quiet equipment.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-lg font-bold">02</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Transparent Pricing</h4>
                  <p className="text-xs text-slate-300">No hidden costs. Written quotes for all treatments.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-lg font-bold">03</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Strict Sterilization</h4>
                  <p className="text-xs text-slate-300">Exceeding standard medical sterilization protocols.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-lg font-bold">04</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Comfort-First Approach</h4>
                  <p className="text-xs text-slate-300">Sedation options and local numbing gels for zero pain.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/happy-smile.jpg" 
              alt="Happy Dental Patient Smile" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section id="map" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MapMockup 
            name="Metro Dental Clinic"
            address="Shop No 10, Plot No.3, Gokuldham CHS, near Bank of India, Sector 35D, Kutak Bandhan, Kharghar, Panvel, Maharashtra 410210, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=Metro%20Dental%20Clinic&query_place_id=ChIJn4qm19rp5zsR4KRd0VXEoTE"
          />
          <div>
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full">Easy Parking & Access</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950 mt-4 mb-6">Located in the Heart of Sector 35D, Kharghar</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our clinic is located in the Gokuldham CHS (near Bank of India) in Kharghar, Panvel. The location features ground-floor access and ample customer parking space, making it convenient for young children and elderly patients.
            </p>
            <div className="flex flex-col gap-3 text-sm mb-8 border-l-4 border-teal-600 pl-4">
              <div>
                <span className="font-bold text-slate-800">Phone: </span>
                <span className="text-slate-600">+91 75066 34878</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Timing: </span>
                <span className="text-slate-600">Morning 10 AM - 1:30 PM | Evening 5:30 PM - 9 PM</span>
              </div>
            </div>
            <a 
              href="tel:+917506634878"
              className="inline-flex items-center gap-2 bg-teal-900 hover:bg-teal-800 text-white font-bold py-3.5 px-6 rounded-full text-sm transition shadow-lg cursor-pointer"
            >
              ☎ Tap to Call Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-extrabold text-white text-lg">Metro Dental Clinic</span>
          <p className="text-xs">© {new Date().getFullYear()} Metro Dental Clinic, Kharghar. All Rights Reserved. Demo layout.</p>
        </div>
      </footer>
    </div>
  );
}
