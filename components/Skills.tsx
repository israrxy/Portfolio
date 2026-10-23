import React from 'react';

const Skills: React.FC = () => {
  const stackCategories = [
    {
      index: '01',
      title: 'Android & UI',
      items: ['Kotlin', 'Jetpack Compose', 'Material 3 Expressive', 'Clean Architecture (MVVM)', 'Coroutines & Flow']
    },
    {
      index: '02',
      title: 'Media & Protocols',
      items: ['Media3 (ExoPlayer)', 'libtorrent4j (Native BitTorrent)', 'NewPipeExtractor', 'Local HTTP Range Server']
    },
    {
      index: '03',
      title: 'Data, Web & AI',
      items: ['Room Database', 'Retrofit & OkHttp', 'TypeScript & React', 'Prompt Engineering & AI Workflows']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-28 px-5 sm:px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start justify-between">
          <div className="lg:w-5/12 w-full">
            <div className="mono text-xs text-indigo-400 font-bold mb-2">03. Technical Stack</div>
            <h2 className="syne text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
              TECH <br /><span className="text-slate-500">EXPERTISE</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-md">
              I don't just write code—I orchestrate how native engines, streaming protocols, and modern UI toolkits speak to each other.
            </p>
          </div>
          
          <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stackCategories.map((group) => (
              <div key={group.index} className="indie-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="mono text-xs text-indigo-400 font-bold mb-2">
                    {group.index}. {group.title}
                  </div>
                  <ul className="space-y-2.5 mt-4">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm font-medium text-slate-200 flex items-center gap-2">
                        <span className="text-indigo-500 font-mono">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

