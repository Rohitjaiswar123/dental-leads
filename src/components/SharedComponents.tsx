"use client";

import { useState } from "react";

// Star rating indicator
export function StarRating({ rating = "5.0", count = 100 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-semibold text-slate-900 dark:text-white">{rating}</span>
      <span className="text-slate-500 text-sm">({count} Google Reviews)</span>
    </div>
  );
}

// Map mock that behaves beautifully
export function MapMockup({ address = "", mapsLink = "", name = "" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 flex flex-col justify-between min-h-[300px]">
      {/* Abstract Map Background Grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
          <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">Clinic Location</h4>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">{name}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">{address}</p>
      </div>

      <div className="relative mt-8">
        <a 
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all shadow-md shadow-teal-500/10 hover:translate-y-[-1px] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

// Client booking form
export function BookingForm({ themeColor = "bg-teal-600 hover:bg-teal-500 focus:ring-teal-500" }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", time: "", service: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-900 border border-teal-500/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[380px] shadow-2xl animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-400 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-100 mb-2">Booking Confirmed!</h3>
        <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
          Thank you, <span className="text-teal-300 font-semibold">{formData.name}</span>. We&apos;ve reserved your slot on <span className="text-teal-300 font-semibold">{formData.date}</span> at <span className="text-teal-300 font-semibold">{formData.time || "scheduled time"}</span>.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "" }); }}
          className="text-teal-400 hover:text-teal-300 font-semibold text-xs transition duration-200 border-b border-teal-500/30 hover:border-teal-400 cursor-pointer"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">Book Free Consultation</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs">Request your appointment slot in under 60 seconds.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Name *</label>
          <input 
            type="text" 
            required 
            placeholder="John Doe" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Phone Number *</label>
          <input 
            type="tel" 
            required 
            placeholder="+91 99999 99999" 
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Preferred Date *</label>
          <input 
            type="date" 
            required 
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Preferred Time Slot</label>
          <select 
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
          >
            <option value="">Select a slot</option>
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Desired Treatment</label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-900 dark:text-slate-100"
        >
          <option value="">Select treatment type</option>
          <option value="Root Canal Treatment">Root Canal (Endodontics)</option>
          <option value="Dental Implants">Dental Implants</option>
          <option value="Teeth Whitening / Veneers">Teeth Whitening / Veneers</option>
          <option value="Orthodontics (Braces/Aligners)">Orthodontics (Braces/Aligners)</option>
          <option value="General Consultation">General Checkup / Cleaning</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white transition duration-200 flex justify-center items-center shadow-lg cursor-pointer ${themeColor} disabled:opacity-50`}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          "Book Consultation Now"
        )}
      </button>
    </form>
  );
}
