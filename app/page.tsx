"use client";

import { useEffect, useState } from "react";
import { 
  BookOpen, 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Users,
  Star,
  Quote,
  Target,
  Globe
} from "lucide-react";

export default function PrimeTuitionCentre() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#003366] selection:text-white">
      
      {/* --- DESIGN SYSTEM --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-heading { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- TOP BAR --- */}
      <div className="bg-[#003366] text-white/80 py-3 hidden md:block border-b border-white/10 z-50 relative">
         <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-[11px] font-body font-bold uppercase tracking-widest">
             <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#ff6600]" />
                <span>South C, Nairobi | Next to Belleview Hospital</span>
             </div>
             <div className="flex gap-8">
                 <a href="tel:0723999810" className="hover:text-white transition-colors flex items-center gap-2">
                   Admissions: 0723 999 810
                 </a>
                 <span className="text-white/30">|</span>
                 <span className="text-[#ff6600]">Mon - Sun: Open Daily</span>
             </div>
         </div>
      </div>

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
         {/* Highly Realistic AI-Generated Hero Image - Somali Students */}
         <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/hero-students.png')" }} 
         ></div>
         {/* Deep Navy Overlay for contrast */}
         <div className="absolute inset-0 bg-[#003366]/90 z-0"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto pt-10">
             <div className="mb-8 flex flex-col items-center justify-center animate-fade-in-up">
                 <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 shadow-2xl">
                     <GraduationCap className="w-10 h-10 text-[#ff6600]" />
                 </div>
                 <h2 className="font-heading text-2xl font-bold text-white tracking-tight drop-shadow-lg">PRIME TUITION CENTRE</h2>
                 <p className="font-heading text-xs italic text-[#ff6600] font-bold tracking-widest mt-2">KNOWLEDGE • EXCELLENCE • FUTURE</p>
             </div>

             <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-xl">
                 Unlock Your <br/>
                 <span className="text-[#ff6600] italic">Potential.</span>
             </h1>
             
             <p className="font-body text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md">
                 Nairobi's premier academic hub for <span className="font-bold text-white">IGCSE, A-Levels</span>, and <span className="font-bold text-white">SAT Prep</span>. We shape tomorrow's leaders today.
             </p>

             <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <a href="#curriculum" className="px-8 py-4 bg-[#ff6600] text-white font-body text-sm font-bold uppercase tracking-widest rounded shadow-lg shadow-orange-500/30 hover:bg-[#cc5200] transition-all transform hover:-translate-y-1">
                     Explore Programs
                 </a>
                 <a href="tel:0723999810" className="px-8 py-4 bg-transparent border border-white text-white font-body text-sm font-bold uppercase tracking-widest rounded hover:bg-white hover:text-[#003366] transition-all">
                     Call Admissions
                 </a>
             </div>
         </div>
      </section>

      {/* --- STATS / TRUST BAR --- */}
      <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 mx-6 md:mx-auto max-w-[1000px] rounded-xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center">
          <div>
            <h3 className="text-4xl font-heading font-bold text-[#003366]">100%</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">Pass Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-heading font-bold text-[#003366]">50+</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">Global Uni Placements</p>
          </div>
          <div>
            <h3 className="text-4xl font-heading font-bold text-[#003366]">15+</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">Expert Tutors</p>
          </div>
          <div>
            <h3 className="text-4xl font-heading font-bold text-[#003366]">A*</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">Average Grade</p>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Alternative: Grid Layout) --- */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003366] to-transparent"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff6600] font-bold text-xs uppercase tracking-widest mb-2 block">The Prime Advantage</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#003366] font-bold mb-6">A Tradition of Academic Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Prime Tuition Centre, we go beyond standard tutoring. We provide a rigorous, supportive academic environment designed to foster critical thinking, deep understanding, and unparalleled success in global examinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#003366]/5 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#ff6600]" />
              </div>
              <h4 className="font-bold text-[#003366] text-xl mb-3">Small Class Sizes</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Personalized attention ensuring no student is left behind, allowing for customized learning paces.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#ff6600]/5 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#003366]" />
              </div>
              <h4 className="font-bold text-[#003366] text-xl mb-3">Elite Faculty</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Taught by experienced examiners and subject-matter experts who know exactly what it takes to get an A*.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#003366]/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#ff6600]" />
              </div>
              <h4 className="font-bold text-[#003366] text-xl mb-3">Exam Strategy</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Intensive mastery of past papers, advanced exam techniques, and rigorous mock examinations.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#ff6600]/5 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-[#003366]" />
              </div>
              <h4 className="font-bold text-[#003366] text-xl mb-3">Uni Placements</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Dedicated counseling for SAT, AP, and A-Level transitions into prestigious universities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CURRICULUM --- */}
      <section id="curriculum" className="py-24 px-6 bg-white border-t border-slate-100">
         <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-[#ff6600] font-bold text-xs uppercase tracking-widest mb-2 block">Our Programs</span>
                <h2 className="font-heading text-4xl md:text-5xl text-[#003366] font-bold mb-4">Academic Pathways</h2>
                <p className="text-slate-600">Tailored curriculums designed to open doors to the world's most prestigious universities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
               {/* British */}
               <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-[#003366]/30 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#003366]/5 rounded-bl-full -z-10 group-hover:bg-[#003366]/10 transition-colors"></div>
                   <div className="w-14 h-14 bg-[#003366] rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:-translate-y-1 transition-transform">
                       <ShieldCheck className="w-7 h-7 text-white" />
                   </div>
                   <h3 className="font-heading text-3xl text-[#003366] mb-2 font-bold">British System</h3>
                   <p className="font-body text-xs font-bold text-[#ff6600] uppercase tracking-widest mb-4">Edexcel / Pearson / Cambridge</p>
                   <p className="font-body text-slate-600 mb-8 text-sm leading-relaxed">
                       Comprehensive tuition for IGCSE and A-Levels with a strong focus on STEM subjects, Mathematics, and Business.
                   </p>
                   <ul className="space-y-4 pt-6 border-t border-slate-100">
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#ff6600]" /> Pure & Further Mathematics</li>
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#ff6600]" /> Physics, Chemistry & Biology</li>
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#ff6600]" /> Economics & Business Studies</li>
                   </ul>
               </div>

               {/* American */}
               <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-[#ff6600]/30 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6600]/5 rounded-bl-full -z-10 group-hover:bg-[#ff6600]/10 transition-colors"></div>
                   <div className="w-14 h-14 bg-[#ff6600] rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:-translate-y-1 transition-transform">
                       <BookOpen className="w-7 h-7 text-white" />
                   </div>
                   <h3 className="font-heading text-3xl text-[#003366] mb-2 font-bold">American System</h3>
                   <p className="font-body text-xs font-bold text-[#ff6600] uppercase tracking-widest mb-4">College Prep</p>
                   <p className="font-body text-slate-600 mb-8 text-sm leading-relaxed">
                       Specialized preparation for standardized testing and Advanced Placement (AP) for US University admissions.
                   </p>
                   <ul className="space-y-4 pt-6 border-t border-slate-100">
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#003366]" /> SAT Digital Reasoning</li>
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#003366]" /> ACT Preparation</li>
                       <li className="flex items-center gap-3 font-body text-sm font-medium text-slate-700"><CheckCircle2 className="w-5 h-5 text-[#003366]" /> AP Calculus & Sciences</li>
                   </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-[#003366] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Hear from students who achieved their target grades and unlocked their future with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#002244] p-8 rounded-2xl relative shadow-xl border border-white/5">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#ff6600]/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff6600] text-[#ff6600]" />)}
              </div>
              <p className="text-blue-100 italic mb-6 leading-relaxed">"Pure Math tuition helped me jump from a low grade to a top mark in a few months. It was exactly what I needed to prepare for A-Levels."</p>
              <div>
                <h4 className="font-bold text-white">Hodan A.</h4>
                <p className="text-xs text-[#ff6600] uppercase tracking-wider mt-1">A-Level Mathematics Student</p>
              </div>
            </div>
            
            <div className="bg-[#002244] p-8 rounded-2xl relative shadow-xl border border-white/5">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#ff6600]/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff6600] text-[#ff6600]" />)}
              </div>
              <p className="text-blue-100 italic mb-6 leading-relaxed">"The special AP and SAT strategies were amazing. My scores went up way more than I expected and the past paper work really paid off."</p>
              <div>
                <h4 className="font-bold text-white">Abdi H.</h4>
                <p className="text-xs text-[#ff6600] uppercase tracking-wider mt-1">American System & SAT Prep</p>
              </div>
            </div>

            <div className="bg-[#002244] p-8 rounded-2xl relative shadow-xl border border-white/5">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#ff6600]/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff6600] text-[#ff6600]" />)}
              </div>
              <p className="text-blue-100 italic mb-6 leading-relaxed">"IGCSE Business Studies was hard until I came here. My teacher made everything very simple and the revision packs were great for exams."</p>
              <div>
                <h4 className="font-bold text-white">Fatuma K.</h4>
                <p className="text-xs text-[#ff6600] uppercase tracking-wider mt-1">IGCSE Business & Economics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section id="location" className="py-24 px-6 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                  
                  {/* LEFT: Address & Details */}
                  <div className="md:col-span-5 flex flex-col gap-8">
                      <div>
                          <span className="text-[#ff6600] font-bold text-xs uppercase tracking-widest mb-2 block">Visit Us</span>
                          <h2 className="font-heading text-4xl font-bold mb-6 text-[#003366]">Campus Location</h2>
                          <p className="font-body text-slate-600 text-lg leading-relaxed">
                              Located in the secure Popo Road environs of South C, conveniently next to Belleview South Hospital.
                          </p>
                      </div>

                      <div className="space-y-6">
                          <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-[#003366]/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-[#ff6600]" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg text-[#003366]">South C, Nairobi</h4>
                                  <p className="text-sm text-slate-500 mt-1">Next to Belleview Hospital</p>
                              </div>
                          </div>
                          
                          <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-[#003366]/10 flex items-center justify-center shrink-0">
                                <Clock className="w-5 h-5 text-[#ff6600]" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg text-[#003366]">Opening Hours</h4>
                                  <p className="text-sm text-slate-500 mt-1">Monday — Sunday (Open Daily)</p>
                              </div>
                          </div>
                      </div>

                      <a 
                        href="https://www.google.com/maps/search/Belleview+South+Hospital+South+C+Nairobi" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#003366] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[#ff6600] transition-colors w-fit shadow-xl"
                      >
                          Get Directions <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>

                  {/* RIGHT: The Map Visual */}
                  <div className="md:col-span-7 w-full h-[450px] bg-white rounded-xl p-3 shadow-2xl border border-slate-100">
                      <div className="w-full h-full rounded-lg relative overflow-hidden">
                          <iframe 
                            src="https://maps.google.com/maps?q=Belleview%20South%20Hospital%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            className="transition-all duration-500"
                            title="Map of Prime Tuition Centre"
                          ></iframe>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#001a33] text-white pt-16 pb-8 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-[#ff6600]" />
                <h3 className="font-heading text-xl font-bold tracking-widest">PRIME TUITION</h3>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">Shaping the future through rigorous academic preparation and expert guidance in the heart of Nairobi.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li><a href="#curriculum" className="hover:text-[#ff6600] transition-colors">Our Programs</a></li>
                <li><a href="#location" className="hover:text-[#ff6600] transition-colors">Campus Location</a></li>
                <li><a href="tel:0723999810" className="hover:text-[#ff6600] transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li>Call: 0723 999 810</li>
                <li>Location: South C, Nairobi</li>
                <li>Open Daily</li>
              </ul>
            </div>
          </div>
          <div className="text-center font-body text-xs text-white/40 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Prime Tuition Centre. All Rights Reserved.</p>
          </div>
      </footer>

    </main>
  );
}