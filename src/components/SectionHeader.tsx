import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 bg-brand-light border border-brand/15 text-brand px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-widest mb-5 ${center ? "" : ""}`}
        >
          {badge}
        </div>
      )}
      <h2 className="text-4xl sm:text-[52px] font-extrabold text-text-primary tracking-[-0.02em] leading-[1.05]">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed font-light ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
