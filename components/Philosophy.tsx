import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-28 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mono text-xs text-indigo-400 font-bold mb-2">01. Engineering Approach</div>
        <h2 className="syne text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-14 tracking-tighter uppercase">
          HOW I <span className="text-indigo-500 underline decoration-indigo-500/20 underline-offset-4">BUILD</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Logic Box */}
          <div className="md:col-span-2 md:row-span-2 indie-card rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between group">
            <div className="mb-6 md:mb-0">
              <div className="mono text-indigo-400 mb-3 text-xs font-bold">01. Logic Over Boilerplate</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors leading-tight">
                I focus on system architecture and user flow, not memorizing syntax.
              </h3>
            </div>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Syntax is a commodity; systems thinking is the real multiplier. Whether wiring a local HTTP range server over <span className="text-white font-medium">libtorrent4j</span> in Zenim or inlining <span className="text-white font-medium">NewPipeExtractor</span> streams in Raazi, I combine native Android libraries with AI-accelerated workflows to ship fast, resilient apps.
            </p>
          </div>

          {/* Prompt Box */}
          <div className="md:col-span-2 indie-card rounded-2xl p-6 sm:p-8 md:p-10 group bg-indigo-600/5">
            <div className="mono text-indigo-400 mb-3 text-xs font-bold">02. AI-Orchestrated Compilation</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              High-Fidelity Software Generation.
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              I treat LLMs as high-level compilers—decomposing complex software into modular architecture, concurrency guards, and clean state flows while maintaining strict quality control.
            </p>
          </div>

          {/* Design Box */}
          <div className="indie-card rounded-2xl p-6 md:p-8 group flex flex-col justify-between min-h-[130px]">
            <div className="mono text-xs text-rose-400 font-bold">03. Material 3 Expressive</div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-1">Mobile-Native Feel</h4>
              <p className="text-xs text-slate-400">AMOLED themes, dynamic palettes, and one-handed thumb ergonomics.</p>
            </div>
          </div>

          {/* API Box */}
          <div className="indie-card rounded-2xl p-6 md:p-8 group flex flex-col justify-between min-h-[130px]">
            <div className="mono text-xs text-indigo-400 font-bold">04. Media & Protocols</div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-1">Stream Engineering</h4>
              <p className="text-xs text-slate-400">Media3 ExoPlayer, BitTorrent sequential pieces, and multi-source audio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

