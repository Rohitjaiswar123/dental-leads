import Image from "next/image";
import Link from "next/link";
import { StarRating, MapMockup, BookingForm } from "../../components/SharedComponents";

export default function FourthRootDental() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600/10 selection:text-blue-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-white font-extrabold text-lg group-hover:scale-105 transition-transform">4</span>
            <span className="font-extrabold text-blue-900 tracking-wider">4th ROOT DENTAL</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-900 transition">Treatments</a>
            <a href="#about" className="hover:text-blue-900 transition">Why Us</a>
            <a href="#location" className="hover:text-blue-900 transition">Location</a>
          </div>
          <a 
            href="tel:+919167643491" 
            className="bg-blue-900 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition hover:bg-blue-800 shadow-md shadow-blue-900/10 cursor-pointer"
          >
            Call +91 91676 43491
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/clinic-interior.jpg" 
            alt="4th Root Dental Clinic Interior" 
            fill
            className="object-cover opacity-25 filter brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 bg-blue-500/10 border border-blue-500/30 rounded-full px-3.5 py-1 text-blue-300 font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Specialist Endodontics & Micro-Dentistry
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white mb-6">
              Advanced Painless Root Canals in Airoli
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Experience the future of dental care. Under the expertise of top dental specialists, we provide laser-assisted, microscopic treatments designed for maximum comfort and lasting precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a 
                href="#book" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition text-center cursor-pointer"
              >
                Book Free Consultation
              </a>
              <div className="flex flex-col justify-center bg-slate-900/60 backdrop-blur border border-slate-800 rounded-xl px-5 py-2.5">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                  <span>★</span><span>5.0</span>
                  <span className="text-slate-400 font-normal text-xs">(442+ reviews)</span>
                </div>
                <span className="text-xs text-slate-400">100% Verified Google Rating</span>
              </div>
            </div>
          </div>
          
          <div id="book" className="lg:col-span-5 w-full">
            <BookingForm themeColor="bg-blue-900 hover:bg-blue-800 focus:ring-blue-900" />
          </div>
        </div>
      </section>

      {/* Trust Rating Banner */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-extrabold text-2xl text-slate-900">Highest Rated Dental Clinic in Sector 3, Airoli</h3>
            <p className="text-slate-500 text-sm mt-1">Recognized for exceptional precision and painless dental treatments.</p>
          </div>
          <StarRating rating="5.0" count={442} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Our Treatments</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Expert Oral Care Tailored For You</h2>
          <p className="text-slate-500 mt-2">Providing a complete range of dental services using cutting-edge medical equipment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-slate-100 rounded-2xl p-8 hover:border-blue-900/10 hover:shadow-xl transition group bg-white">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-6 font-bold group-hover:bg-blue-950 group-hover:text-white transition">RC</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Microscopic Root Canals</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We specialize in saving natural teeth. Using advanced magnification and cleaning procedures, we guarantee quick, highly successful, and painless root canal treatments.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-slate-100 rounded-2xl p-8 hover:border-blue-900/10 hover:shadow-xl transition group bg-white">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-6 font-bold group-hover:bg-blue-950 group-hover:text-white transition">IM</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Permanent Dental Implants</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Restore your natural smile and bite. Our dental implants are crafted from bio-compatible titanium and look, feel, and function exactly like your original teeth.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border border-slate-100 rounded-2xl p-8 hover:border-blue-900/10 hover:shadow-xl transition group bg-white">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-6 font-bold group-hover:bg-blue-950 group-hover:text-white transition">LA</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Laser & Family Care</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Faster healing, less bleeding, and zero anxiety. We utilize specialized soft-tissue lasers for precise dental treatments, gum therapies, and pediatric dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="about" className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/dentist-operating.jpg" 
              alt="Advanced Micro-Dentistry Tech" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Our Technology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-6 leading-tight">
              Microscopic Precision. Faster Healing.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At 4th Root Dental, we believe that modern dentistry should be precise and comfortable. We utilize high-power magnification dental microscopes that allow us to identify microscopic canal issues that other practices might overlook.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Enhanced diagnostic accuracy with digital X-rays",
                "Advanced rotary instruments for single-session root canals",
                "Ultraviolet sterilization autoclaves for absolute safety",
                "Ultrasonic tools for stress-free scaling and cleaning"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">How to Reach Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-4 mb-6">Conveniently Located in Sector 3, Airoli</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our clinic is located right opposite the Airoli Railway Station in the Akanksha Housing Society, making it extremely easy to access for commuters from Navi Mumbai, Thane, and Mumbai.
            </p>
            <div className="flex flex-col gap-4 text-sm mb-8">
              <div className="flex gap-3">
                <span className="font-bold text-slate-900 w-24">Clinic Hours:</span>
                <span className="text-slate-600">Monday – Saturday: 10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-slate-900 w-24">Address:</span>
                <span className="text-slate-600">Akanksha Co-op. Housing Society, Sector 3, Airoli, Navi Mumbai</span>
              </div>
            </div>
            <a 
              href="tel:+919167643491"
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-bold py-3.5 px-6 rounded-xl text-sm transition hover:bg-blue-50 cursor-pointer"
            >
              ☎ Call to Inquire
            </a>
          </div>
          <MapMockup 
            name="4th ROOT DENTAL"
            address="Opposite Airoli Railway Station, Akanksha Co-op. Housing Society, Swatantryaveer Sawarkar Marg, Sector 3, Airoli, Navi Mumbai, Maharashtra 400708, India"
            mapsLink="https://www.google.com/maps/search/?api=1&query=4th%20ROOT%20DENTAL&query_place_id=ChIJa_-YEEy_5zsRdRivJn9QM9Q"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-blue-900 flex items-center justify-center text-white font-black text-xs">4</span>
            <span className="font-extrabold text-white text-sm tracking-widest">4th ROOT DENTAL</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} 4th Root Dental Clinic. All Rights Reserved. Designed for Airoli Leads.</p>
        </div>
      </footer>
    </div>
  );
}
