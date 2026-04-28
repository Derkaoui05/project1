// ContactForm.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../lib/validators/contactSchema";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_muz5vdg",
        "template_gqm5wtj",
        { name: data.name, email: data.email, message: data.message },
        "C6x3sKPZ_OPLVE_FJ"
      );
      reset();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (error) {
      console.error(error);
    }
  };

  const inputClass =
    "w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-[#1593E6] transition-colors duration-200";

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-4 shadow-2xl"
          >
            {/* Icon */}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1593E6]/10">
              <svg className="h-4 w-4 text-[#1593E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {/* Text */}
            <div>
              <p className="text-sm font-medium text-neutral-200">Message sent!</p>
              <p className="text-xs text-neutral-500">I'll get back to you soon.</p>
            </div>
            {/* Close */}
            <button
              onClick={() => setShowToast(false)}
              className="ml-4 text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: "linear" }}
              style={{ transformOrigin: "left" }}
              className="absolute bottom-0 left-0 h-[2px] w-full rounded-b-xl bg-[#1593E6]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="border-b border-neutral-900 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-neutral-500 text-4xl"
        >
          Get In Touch
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full py-6 space-y-5">

              <div className="space-y-1">
                <input {...register("name")} placeholder="Full name" className={inputClass} />
                {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <input {...register("email")} type="email" placeholder="Email address" className={inputClass} />
                {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <textarea {...register("message")} placeholder="Your message..." rows={5} className={`${inputClass} resize-none`} />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900/80 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-700 hover:bg-[#1593E6] hover:border-[#1593E6] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}