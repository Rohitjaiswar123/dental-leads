import Link from "next/link";

interface Clinic {
  name: string;
  slug: string;
  area: string;
  rating: string;
  reviews: number;
  phone: string;
  category: string;
  pitch: string;
  themeColor: string;
  iconBg: string;
}

const clinics: Clinic[] = [
  {
    name: "4th ROOT DENTAL",
    slug: "4th-root-dental",
    area: "Airoli",
    rating: "5.0",
    reviews: 442,
    phone: "+91 91676 43491",
    category: "Dental clinic",
    pitch: "Pitch a tech-forward Endodontics (Root Canal) & Family Dentistry landing page. Highlighting state-of-the-art tech and easy call-to-action booking.",
    themeColor: "from-blue-600 to-indigo-800",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    name: "Metro Dental Clinic",
    slug: "metro-dental-clinic",
    area: "Kharghar",
    rating: "5.0",
    reviews: 773,
    phone: "+91 75066 34878",
    category: "Dental clinic",
    pitch: "Pitch a friendly, approachable family practice layout. Featuring family packages, preventive care schedules, and direct booking for busy parents.",
    themeColor: "from-teal-600 to-cyan-800",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20"
  },
  {
    name: "Dental Happiness Clinic and Implant Centre",
    slug: "dental-happiness-clinic",
    area: "Kharghar",
    rating: "5.0",
    reviews: 336,
    phone: "+91 73852 05993",
    category: "Dental clinic",
    pitch: "Pitch a specialist Implantology & Cosmetic gallery. Features visual before-and-after smile transformations and implant explanation guides.",
    themeColor: "from-emerald-600 to-teal-800",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    name: "Veta smiles",
    slug: "veta-smiles",
    area: "Kopar Khairane",
    rating: "5.0",
    reviews: 328,
    phone: "+91 84528 43320",
    category: "Dentist",
    pitch: "Pitch a boutique aesthetic dentistry look. Warm colors focus on teeth whitening, aligners, and painless dental experiences for local residents.",
    themeColor: "from-fuchsia-600 to-purple-800",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
  },
  {
    name: "Dental Designs",
    slug: "dental-designs",
    area: "Nerul",
    rating: "5.0",
    reviews: 411,
    phone: "+91 97020 55011",
    category: "Dental clinic",
    pitch: "Pitch a luxury, ultra-premium cosmetic studio layout. Focus on digital smile makeovers, premium veneers, and VIP customer experiences.",
    themeColor: "from-slate-700 to-slate-900",
    iconBg: "bg-slate-500/10 text-slate-400 border-slate-500/20"
  },
  {
    name: "Dr mhatre dental clinic",
    slug: "dr-mhatre-dental-clinic",
    area: "Panvel",
    rating: "5.0",
    reviews: 636,
    phone: "+91 92208 66615",
    category: "Dental clinic",
    pitch: "Pitch an emergency-focused local clinic page. Reassuring trust, displaying insurance partnerships, and offering clear 1-click booking.",
    themeColor: "from-sky-600 to-blue-800",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.15),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-24">
          <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase bg-teal-400/10 px-3 py-1 rounded-full border border-teal-500/20">
            Premium Web Development Pitch Kit
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-indigo-200 to-purple-300">
            Dental Leads Demo Showcase
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Ready-to-use, high-converting website demos tailored for local dental clinics in Navi Mumbai. Open these interactive websites to close deals instantly.
          </p>
        </header>

        {/* Clinics Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic) => (
            <div 
              key={clinic.slug}
              className="flex flex-col bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700/80 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-teal-500/5 group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded px-2 py-0.5">
                  {clinic.area}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-sm bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5 font-medium">
                  <span>★</span>
                  <span>{clinic.rating}</span>
                  <span className="text-slate-400 text-xs font-normal">({clinic.reviews} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors duration-200 mb-1">
                {clinic.name}
              </h2>
              <p className="text-slate-500 text-xs mb-4">{clinic.category} • No website listed</p>

              {/* Pitch */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {clinic.pitch}
              </p>

              {/* Info Details */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{clinic.phone}</span>
              </div>

              {/* CTA Link */}
              <Link 
                href={`/${clinic.slug}`}
                className={`w-full text-center font-semibold text-sm py-3 px-4 rounded-xl text-white bg-gradient-to-r ${clinic.themeColor} shadow-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98] cursor-pointer`}
              >
                Launch Custom Demo Website
              </Link>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-24 text-center border-t border-slate-900 pt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Web Development Pitch Suite. Powered by Next.js + Tailwind v4 + TypeScript.</p>
        </footer>
      </div>
    </div>
  );
}
