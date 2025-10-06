// app/epk/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function EPKPage() {
  return (
    <main className="min-h-screen bg-[#F9F8E9] text-[#1E1E1E] font-sans overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#F9F8E9]/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="font-black text-sm md:text-base tracking-wide uppercase">
            Waiting for Smith
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#tour" className="hover:underline">
              Tour
            </a>
            <a href="#music" className="hover:underline">
              Music
            </a>
            <a href="#press" className="hover:underline">
              Press
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/portwater.jpg"
            alt="Waiting for Smith Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>

        <div className="relative z-10 px-6">
          <h2 className="font-black uppercase text-5xl md:text-6xl text-[#F9E158] drop-shadow-xl">
            Bringing More Magic & More Light
          </h2>
          <p className="mt-3 text-2xl font-light italic text-white/90">
            Sharing joy, love & freedom
          </p>
          <a
            href="#music"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-[#F9E158] text-[#1E1E1E] font-bold hover:bg-[#E17742] hover:text-white transition"
          >
            Listen Here
          </a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 px-4 bg-[#F9F8E9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <div className="relative inline-block">
              <div className="absolute top-3 left-3 w-full h-full bg-[#E17742] rounded-lg -z-10"></div>
              <div className="absolute top-1 left-1 w-full h-full bg-[#D07063] rounded-lg -z-10"></div>
              <div className="bg-[#F9E158] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-black uppercase mb-3">About</h3>
                <p className="text-sm leading-relaxed">
                  “I’m Harry, aka Waiting for Smith. I named the project after
                  waiting for my first drummer—Smith—who never showed up. Before
                  music, I motorbiked across Cuba, taught skiing in France,
                  learned Russian, broke my back, died for five minutes, and
                  came back. Moving to Amsterdam and spending four months in
                  South Africa brought healing and joy. Now I make music for
                  people to feel more joyous, free, light, and loved.”
                </p>
                <Link
                  href="#music"
                  className="inline-block mt-4 text-[#1E1E1E] font-semibold underline hover:text-[#E17742]"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/assets/portscope.jpg"
              alt="Waiting for Smith portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== TOUR ===== */}
      <section id="tour" className="py-24 bg-white text-center">
        <h3 className="text-3xl font-black uppercase mb-12 text-[#1E1E1E]">
          The Joy of Living Tour
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { date: "Nov 13", city: "Amsterdam", venue: "Melkweg UP" },
            { date: "Nov 18", city: "Berlin", venue: "Lark" },
            { date: "Nov 19", city: "Cologne", venue: "Helios 37" },
            { date: "Nov 20", city: "Hamburg", venue: "Nochtspeicher" },
            { date: "Nov 22", city: "Cologne", venue: "Helios 37" },
            { date: "Nov 25", city: "Hamburg", venue: "Nochtspeicher" },
          ].map((show) => (
            <div
              key={show.date + show.city}
              className="bg-gradient-to-b from-[#C3E8F6] to-[#88D5E7] rounded-lg shadow-md p-4 border border-[#F9E158]"
            >
              <p className="text-3xl font-black text-[#F9E158]">{show.date}</p>
              <p className="font-semibold uppercase">{show.city}</p>
              <p className="text-sm">{show.venue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EP HIGHLIGHT ===== */}
      <section className="relative py-24 bg-[#F9F8E9] overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/assets/watermelon.avif"
              alt="I Like Life EP cover"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 text-[#F9E158] font-black text-5xl drop-shadow-xl">
              I LIKE LIFE
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black uppercase mb-4 text-[#E17742]">
              The Latest
            </h3>
            <p className="mb-6">
              The new EP <strong>I Like Life</strong> (out September 26th)
              features four upbeat dance-indie pop tracks that celebrate
              self-acceptance, kindness, and joy. With spins on BBC Radio 1’s
              Future New Pop and BBC Introducing, the mission to spread
              positivity across the UK and Europe is well underway.
            </p>
            <Link
              href="#music"
              className="inline-block px-6 py-2 rounded-full bg-[#F9E158] font-semibold text-[#1E1E1E] hover:bg-[#E17742] hover:text-white transition"
            >
              Listen Here
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MUSIC ===== */}
      <section id="music" className="py-24 bg-[#FFFBEA] text-center">
        <h3 className="text-3xl font-black uppercase mb-10">Music</h3>
        <p className="mb-10">
          Listen to the singles from the <strong>I Like Life</strong> EP.
        </p>
        <div className="flex flex-col items-center gap-10">
          <iframe
            src="https://open.spotify.com/embed/track/4dJXtT8mdVCzpx9ROre4RN?utm_source=generator
"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg max-w-lg"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/4pebyMKXx3H5JppnIZmN9U?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg max-w-lg"
          ></iframe>
        </div>
      </section>

      {/* ===== PRESS ===== */}
      <section id="press" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-black uppercase mb-10 text-center">
            Press
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 border-[#E17742] pl-4 italic">
              “A fresh, soulful sound that balances honesty with light.”
              <span className="block mt-2 font-semibold">
                — Wonderland Magazine
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-[#E17742] pl-4 italic">
              “His optimism feels effortless — Waiting for Smith writes like
              someone who’s truly lived both sides of joy.”
              <span className="block mt-2 font-semibold">— GQ Magazine</span>
            </blockquote>
            <blockquote className="border-l-4 border-[#E17742] pl-4 italic">
              “An artist whose work radiates warmth and humanity.”
              <span className="block mt-2 font-semibold">
                — Noctis Magazine
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-[#E17742] pl-4 italic">
              “A masterclass in vulnerability and hope, set to danceable
              indie-pop beats.”
              <span className="block mt-2 font-semibold">— Metal Magazine</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 text-center bg-[#F9E158]/30">
        <h3 className="text-3xl font-black uppercase mb-6">
          Bookings & Contact
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          For booking inquiries, press requests, or management contact, please
          fill in the details below.
        </p>
        <div className="inline-block bg-white rounded-xl border border-gray-300 p-6 shadow-md text-left">
          <p>
            <strong>Bookings:</strong> [Name / Email / Phone]
          </p>
          <p>
            <strong>Press:</strong> [Name / Email / Phone]
          </p>
          <p>
            <strong>Management:</strong> [Name / Email / Phone]
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-sm font-medium">
          <a
            href="https://open.spotify.com/artist/57oieIojgviKMyTtzG4kn2"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/waitingforsmith/"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@waitingforsmith"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            TikTok
          </a>
          <a
            href="https://www.waitingforsmith.co.uk/"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            Website
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Waiting for Smith · All rights reserved.
      </footer>
    </main>
  );
}
