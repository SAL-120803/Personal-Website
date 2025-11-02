"use client";
import React from "react";
import Link from "next/link";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  const EMAIL = "mailto:dianisalma220@gmail.com";
  const INSTAGRAM = "https://www.instagram.com/p1ratessss?igsh=MTljbjUxenMybnpuYQ==";
  const GITHUB = "https://github.com/SAL-120803";

  return (
    <section
      id="contact"
      className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50/50 to-transparent dark:from-zinc-900/20 dark:to-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        {/* Section Label */}
        <h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-400">
          Contact
        </h3>

        {/* Card Container */}
        <div className="relative mx-auto max-w-3xl rounded-2xl backdrop-blur-sm bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug mb-4">
            Kunjungi saya di platform berikut.
          </h2>

          <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Saya senang mendengar dari Anda! Hubungi saya melalui media sosial
            atau email, dan mari berdiskusi tentang ide atau kolaborasi menarik.
          </p>

          {/* Contact info */}
          <div className="mt-8 space-y-4 text-left md:text-center">
            <div className="flex items-center justify-center gap-3 group">
              <BiEnvelope className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors" />
              <a
                href={EMAIL}
                className="text-zinc-800 dark:text-zinc-200 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                dianisalma220@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 group">
              <BiMap className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors" />
              <p className="text-zinc-800 dark:text-zinc-200">
                Bontang, Kalimantan Timur
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-6">
            <Link
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 hover:bg-indigo-100 dark:bg-zinc-800 dark:hover:bg-indigo-950 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 hover:bg-indigo-100 dark:bg-zinc-800 dark:hover:bg-indigo-950 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}