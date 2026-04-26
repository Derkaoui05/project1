import { motion } from 'framer-motion';
import { Packages } from '../../data/packages';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Pricing = () => {
  return (
    <section id="packages" className="border-b border-neutral-900 pb-16">
      {/* Section heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Packages &amp; Pricing
      </motion.h2>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
      >
        {Packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300
              ${pkg.recommended
                ? 'border-[#1593E6] bg-[#0B598D]/10 shadow-lg shadow-[#1593E6]/20'
                : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-600'
              }`}
          >
            {/* Recommended badge */}
            {pkg.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1593E6] px-4 py-0.5 text-xs font-semibold text-white tracking-wide shadow">
                ★ Most Popular
              </span>
            )}

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <p className="mt-1 text-sm text-neutral-400">{pkg.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-[#1593E6]">{pkg.price}</span>
            </div>

            {/* Features */}
            <ul className="mb-6 flex flex-col gap-2 flex-1">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-0.5 shrink-0 text-[#1593E6]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Timeline badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full border border-neutral-700 px-3 py-0.5 text-xs text-neutral-400">
                ⏱ {pkg.timeline}
              </span>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className={`mt-auto block w-full rounded-xl py-2.5 text-center text-sm font-semibold transition-all duration-300
                ${pkg.recommended
                  ? 'bg-[#1593E6] text-white hover:bg-[#0B598D] hover:shadow-lg hover:shadow-[#1593E6]/30'
                  : 'border border-neutral-700 text-neutral-300 hover:border-[#1593E6] hover:text-[#1593E6]'
                }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
