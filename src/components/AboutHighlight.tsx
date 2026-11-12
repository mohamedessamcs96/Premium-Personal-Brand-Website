import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { achievements } from "./About";

export default function AboutHighlight() {
  return (
    <section id="about-highlight" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-5 gap-10 items-center overflow-hidden relative"
        >
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-white/5" />

          {/* Left — story */}
          <div className="lg:col-span-3 relative">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-widest mb-5">
              ABOUT
            </div>
            <h2 className="text-3xl sm:text-[40px] font-extrabold tracking-[-0.02em] leading-[1.1] mb-4">
              Senior Software Engineer,{" "}
              <span className="text-brand-accent">AI Engineer</span> &amp;
              Researcher
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 max-w-xl">
              I build scalable backend systems and integrate AI into production
              applications — working with GPT, Claude, and Gemini, fine-tuning
              LLMs and Vision-Language Models, and researching pedestrian
              intention prediction at GIU.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <MapPin size={14} />
              Berlin, Germany · Currently Senior Software Engineer at Soft Blue
              Ocean
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-2xl font-bold text-sm hover:bg-brand-light transition-colors"
            >
              Read the Full Story
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — highlights */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-3 relative">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {a.label}
                    </div>
                    <div className="text-xs text-white/60">{a.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
