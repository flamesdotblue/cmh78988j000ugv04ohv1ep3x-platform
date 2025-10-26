import Spline from '@splinetool/react-spline';
import { Rocket, QrCode } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
      </div>
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-500/20">
              <QrCode className="h-6 w-6 text-black" />
            </div>
            <div>
              <p className="text-sm tracking-widest text-cyan-300/80">RUSHD</p>
              <p className="text-xs text-white/60">Verified Learning, Real Projects</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#journey" className="hover:text-white">Journey</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="hidden md:block">
            <a href="#get-started" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:opacity-90">Get Started</a>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Rushd — The Right Path to Verified Learning
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Learn from anywhere. Verify with AI. Earn QR-certified proof. Showcase real projects. Where what you learn meets what you build.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-black shadow-lg shadow-cyan-500/20">
                <Rocket className="h-5 w-5" /> Explore Rushd
              </a>
              <a href="#journey" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5">
                See the Journey
              </a>
            </div>
            <div className="mt-6 text-sm text-white/60">
              Open-source LLMs + Supabase + QR Verification
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-cyan-300">AI-Powered Assessments</p>
                <p className="text-xs text-white/60">Adaptive MCQs, coding tasks, and reasoning checks</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-fuchsia-300">QR-Verified Certificates</p>
                <p className="text-xs text-white/60">Scan to view live authenticity on Supabase</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-emerald-300">Project Showcasing</p>
                <p className="text-xs text-white/60">Upload files or link GitHub and demos</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-amber-300">Portfolio Dashboard</p>
                <p className="text-xs text-white/60">Shareable profile of verified skills and work</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
