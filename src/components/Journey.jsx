import { BookOpen, QrCode, Upload, BadgeCheck, GitBranch, Users } from 'lucide-react';

function Step({ number, title, desc, accent }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
      <div className={`absolute -top-3 left-4 inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold ${accent}`}>
        {number}
      </div>
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-widest text-emerald-300/80">USER JOURNEY</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">From learning to verified impact</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Step number="1" title="Learn from anywhere" desc="YouTube, blogs, books, podcasts, MOOCs, or mentors — your choice." accent="bg-emerald-400/20 text-emerald-300" />
        <Step number="2" title="Submit your source" desc="Paste a link and optional notes; Rushd understands context." accent="bg-cyan-400/20 text-cyan-300" />
        <Step number="3" title="AI topic analysis" desc="Open-source models extract topics, concepts, and outcomes." accent="bg-fuchsia-400/20 text-fuchsia-300" />
        <Step number="4" title="Personalized assessment" desc="Adaptive MCQs, coding tasks, and reasoning for depth." accent="bg-amber-400/20 text-amber-300" />
        <Step number="5" title="QR-verified certificate" desc="Pass to receive a scannable certificate with live proof." accent="bg-sky-400/20 text-sky-300" />
        <Step number="6" title="Upload or link a project" desc="Attach files or GitHub, describe tech and decisions." accent="bg-lime-400/20 text-lime-300" />
        <Step number="7" title="Project evaluation" desc="Peer review now; AI scoring and summaries next." accent="bg-rose-400/20 text-rose-300" />
        <Step number="8" title="Share your portfolio" desc="A living resume of verified learning and builds." accent="bg-violet-400/20 text-violet-300" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold">Example: Fatima</h3>
          <p className="mt-1 text-sm text-white/70">Learns Machine Learning from a YouTube playlist (Regression, Classification, scikit-learn).</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <GitBranch className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold">Assessment & Project</h3>
          <p className="mt-1 text-sm text-white/70">Passes a 20-question adaptive quiz; uploads a House Price Predictor repo.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <QrCode className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold">Instant Proof</h3>
          <p className="mt-1 text-sm text-white/70">Recruiter scans QR to view live verification, skills, and project score.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <Users className="h-4 w-4" /> Peer & mentor review supported
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <Upload className="h-4 w-4" /> Supabase Storage for uploads
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <BadgeCheck className="h-4 w-4" /> Portfolio-ready credentials
        </div>
      </div>
    </section>
  );
}
