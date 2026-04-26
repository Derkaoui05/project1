import { motion } from 'framer-motion';
import { Process } from '../../data/packages';

const stepVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const WorkProcess = () => {
  return (
    <section id="process" className="border-b border-neutral-900 pb-16">
      {/* Section heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        How I Work
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical connector line */}
        <div className="absolute left-6 top-4 bottom-4 w-px bg-neutral-800 hidden sm:block" />

        <div className="flex flex-col gap-10">
          {Process.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start gap-6 sm:pl-14 relative"
            >
              {/* Step bubble */}
              <div className="absolute left-0 top-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1593E6] bg-neutral-950 text-[#1593E6] font-bold text-lg shadow-md shadow-[#1593E6]/20">
                {item.step}
              </div>

              {/* Content card */}
              <div className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-600 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-neutral-700 px-3 py-0.5 text-xs text-neutral-400">
                    ⏱ {item.duration}
                  </span>
                </div>

                <p className="mb-4 text-sm text-neutral-400 leading-relaxed">{item.description}</p>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-2">
                  {item.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="rounded bg-neutral-800 px-2 py-0.5 text-xs font-medium text-[#1593E6]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
