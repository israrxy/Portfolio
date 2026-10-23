import React, { useState } from 'react';
import { askIsrarLogic } from '../services/gemini';

const QUICK_PROMPTS = [
  "How does Zenim stream torrents while downloading?",
  "How does Raazi v6.0.0 handle queue & synced lyrics?",
  "Why pair Jetpack Compose with AI workflows?"
];

const LogicPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (customPrompt?: string) => {
    const query = (customPrompt ?? input).trim();
    if (!query) return;
    if (customPrompt) setInput(customPrompt);
    setLoading(true);
    setAnswer(null);
    const result = await askIsrarLogic(query);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <section id="playground" className="py-16 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border border-white/10 bg-[#0c0c0c] rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Header Bar */}
          <div className="bg-[#151518] px-5 py-3.5 flex items-center justify-between border-b border-white/5">
            <div className="mono text-xs text-indigo-400 font-bold">
              04. Interactive Architecture Q&A
            </div>
            <div className="mono text-xs text-slate-400">
              Logic Playground
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-12">
            <h2 className="syne text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tight uppercase">
              ASK THE LOGIC <span className="text-indigo-500">ARCHITECT</span>
            </h2>
            <p className="text-slate-400 mb-6 text-xs sm:text-sm">
              Explore how Zenim Android, Raazi Music, or AI-assisted workflows are architected.
            </p>

            {/* Mobile-Friendly One-Tap Prompt Suggestions */}
            <div className="flex flex-wrap gap-2 mb-4">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleAsk(prompt)}
                  className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-colors text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <textarea
                  className="w-full bg-[#111] border border-white/10 rounded-xl p-4 mono text-xs md:text-sm text-indigo-100 focus:border-indigo-500 focus:outline-none transition-all resize-none h-28 md:h-36"
                  placeholder="Ask about torrent range streaming, NewPipeExtractor, or app architecture..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              
              <button
                type="button"
                onClick={() => handleAsk()}
                disabled={loading}
                className="min-h-[48px] w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide transition-all disabled:opacity-50 flex items-center justify-center gap-3 rounded-xl relative overflow-hidden"
              >
                <span className="relative z-10">
                  {loading ? 'Analyzing Architecture...' : 'Analyze Architecture'}
                </span>
              </button>

              {answer && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="mono text-xs text-indigo-400 font-bold mb-2">Response</div>
                  <div className="mono text-slate-200 leading-relaxed text-xs md:text-sm bg-black/50 p-4 md:p-6 rounded-xl border border-white/10">
                    {answer}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicPlayground;

