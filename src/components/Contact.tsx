/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import FadeIn from './FadeIn';
import { personalInfo } from '../data';

// EmailJS configuration — see SETUP_EMAILJS.md for how to get these 3 values.
const EMAILJS_SERVICE_ID = 'service_x5vk7m3';
const EMAILJS_TEMPLATE_ID = 'template_r0qyf8s';
const EMAILJS_PUBLIC_KEY = '5knE5an0m4a_dd7FR';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: personalInfo.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden" id="contact">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[200] bg-white text-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(230,57,70,0.3)] flex items-center gap-3 border border-primary/20"
          >
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            Email Copied to Clipboard
          </motion.div>
        )}
      </AnimatePresence>

      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/[0.02] text-[25vw] font-black leading-none select-none pointer-events-none tracking-tighter font-display">
        CONTACT
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <FadeIn>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-6 block">07 / GET IN TOUCH</span>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-12 leading-[0.9] tracking-tighter font-display">
                Let's build <br />
                the <span className="accent-underline text-primary">next big</span><br />
                thing.
              </h2>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn delay={0.1}>
                <div 
                  className="flex items-center gap-6 group w-fit cursor-pointer" 
                  onClick={handleCopyEmail}
                  title="Click to copy email"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative overflow-hidden">
                    <Mail className="text-primary group-hover:text-white w-6 h-6 transition-colors relative z-10" />
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Email Me</p>
                      <span className="text-[8px] font-black bg-white/10 text-white/40 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Click to copy</span>
                    </div>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors tracking-tight font-display">{personalInfo.email}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a className="flex items-center gap-6 group w-fit" href={`tel:${personalInfo.phone}`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative overflow-hidden">
                    <Phone className="text-primary group-hover:text-white w-6 h-6 transition-colors relative z-10" />
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Call Me</p>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors tracking-tight font-display">{personalInfo.phone}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="text-xl font-black text-white tracking-tight font-display">{personalInfo.location}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="glass-card-red p-12 md:p-16 rounded-[3rem] border-white/10 relative overflow-hidden bg-primary/5">
              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                <div className="group relative">
                  <input 
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white focus:ring-0 focus:border-white transition-all placeholder:text-white/30 font-bold uppercase tracking-widest text-xs" 
                    placeholder="YOUR NAME" 
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_#fff]" />
                </div>

                <div className="group relative">
                  <input 
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white focus:ring-0 focus:border-white transition-all placeholder:text-white/30 font-bold uppercase tracking-widest text-xs" 
                    placeholder="EMAIL ADDRESS" 
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_#fff]" />
                </div>

                <div className="group relative">
                  <textarea 
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 text-white focus:ring-0 focus:border-white transition-all placeholder:text-white/30 resize-none font-bold uppercase tracking-widest text-xs" 
                    placeholder="HOW CAN I HELP?" 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_#fff]" />
                </div>

                <button 
                  className={`w-full py-6 font-black rounded-full transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95 group uppercase tracking-[0.3em] text-xs ${
                    isSubmitting ? 'bg-white/50 cursor-not-allowed text-primary' : 
                    submitStatus === 'success' ? 'bg-green-500 text-white' :
                    submitStatus === 'error' ? 'bg-red-500 text-white' :
                    'bg-white text-primary hover:bg-primary hover:text-white'
                  }`} 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 
                   submitStatus === 'success' ? 'MESSAGE SENT!' : 
                   submitStatus === 'error' ? 'ERROR SENDING' : 
                   'SEND MESSAGE'}
                  {!isSubmitting && submitStatus === 'idle' && (
                    <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  )}
                  {!isSubmitting && submitStatus === 'success' && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-widest mt-4">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
