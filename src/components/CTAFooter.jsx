import { Rocket, Globe, Award } from 'lucide-react';

export default function CTAFooter() {
  return (
    <footer id="get-started" className="relative z-10 mt-8 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest text-cyan-300/80">IMPACT</p>
            <h3 className="mt-2 text-2xl font-semibold">From degrees to demonstrated ability</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-white/80 md:grid-cols-2">
              <li>Credibility for self-learners</li>
              <li>Instant verification for recruiters</li>
              <li>Bridge between knowledge and application</li>
              <li>Celebrates lifelong learning and creativity</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold">Ready to build your verified portfolio?</h4>
            <p className="mt-1 text-sm text-white/70">Start free, level up to Pro anytime.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black shadow">
                <Rocket className="h-4 w-4" /> View Pricing
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5">
                <Globe className="h-4 w-4" /> Explore Features
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
              <Award className="h-4 w-4" /> QR-code verification powered by Supabase
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Rushd. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
