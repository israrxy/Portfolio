import React, { useState } from 'react';

type ZenimScreenKey = 'search' | 'downloads' | 'library';
type RaaziTabKey = 'overview' | 'v6_changelog' | 'architecture';

const ZENIM_SCREENS: Record<ZenimScreenKey, {
  label: string;
  caption: string;
  image: string;
  fallbackUrl: string;
  badge: string;
}> = {
  search: {
    label: 'Live Search',
    caption: 'Sort modes, category filters (All / Movies / TV / Audio / Files), quality indicators, seed counts, magnet copy, and direct stream or download triggers.',
    image: '/assets/zenim/search.jpeg',
    fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/search.jpeg',
    badge: 'Search & Stream'
  },
  downloads: {
    label: 'Downloads Engine',
    caption: 'Pause, resume, recheck, per-torrent selective file picking, bandwidth & connection limits, and sequential piece prioritization for instant streaming.',
    image: '/assets/zenim/downloads.jpeg',
    fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/downloads.jpeg',
    badge: 'libtorrent4j Core'
  },
  library: {
    label: 'Media Library',
    caption: '2-column poster grid with automatic video thumbnails and built-in Media3 ExoPlayer featuring rotation, playback speed, 10s skip, and caption support.',
    image: '/assets/zenim/library.jpeg',
    fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/library.jpeg',
    badge: 'Media3 ExoPlayer'
  }
};

interface ProjectsProps {
  onOpenAppsStore: (app?: 'zenim' | 'raazi' | null) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenAppsStore }) => {
  const [activeAppFilter, setActiveAppFilter] = useState<'all' | 'zenim' | 'raazi'>('all');
  const [zenimScreen, setZenimScreen] = useState<ZenimScreenKey>('search');
  const [raaziTab, setRaaziTab] = useState<RaaziTabKey>('overview');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-16 md:py-28 px-4 sm:px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header + Mobile-Familiar Segmented App Switcher */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <div className="mono text-xs font-bold text-indigo-600 mb-2">
              02. Production Releases · Android Ecosystem
            </div>
            <h2 className="syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              THE <span className="text-indigo-600">DROPS</span>
            </h2>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenAppsStore(null)}
              className="min-h-[42px] px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
              </svg>
              <span>Open Play Store View</span>
            </button>

            <div className="grid grid-cols-3 bg-slate-100 p-1 rounded-xl border border-black/10">
              <button
                type="button"
                onClick={() => setActiveAppFilter('all')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                  activeAppFilter === 'all'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                All Drops (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveAppFilter('zenim')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                  activeAppFilter === 'zenim'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                Zenim 🌸
              </button>
              <button
                type="button"
                onClick={() => setActiveAppFilter('raazi')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                  activeAppFilter === 'raazi'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                Raazi Music
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* =========================================================
              PROJECT 1: ZENIM ANDROID (israrxy/zenim-android)
             ========================================================= */}
          {(activeAppFilter === 'all' || activeAppFilter === 'zenim') && (
            <article 
              id="zenim" 
              className="rounded-3xl bg-[#faf7f8] border border-rose-200/80 p-5 sm:p-8 md:p-12 transition-all"
            >
              {/* Top App Metadata Line (Unboxed clean metadata) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-6 md:mb-10 border-b border-rose-950/10 text-xs font-mono text-slate-600">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-rose-600">israrxy/zenim-android</span>
                  <span aria-hidden="true">·</span>
                  <span>Release v1.1.0 (Code 2)</span>
                  <span aria-hidden="true">·</span>
                  <span>Android 7.0+ (API 24–36)</span>
                </div>
                <div className="tabular-nums font-semibold text-slate-500">
                  APK Size: 59.9 MB · Material 3 Expressive
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                {/* Left Column: Mobile-Familiar Interactive Phone Frame Showcase */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between bg-gradient-to-b from-[#181216] to-[#0f0b0e] text-white rounded-2xl p-5 sm:p-7 border border-rose-500/20">
                  {/* Top Phone Bar Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="text-xs font-mono text-rose-300 font-bold">
                      {ZENIM_SCREENS[zenimScreen].badge}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Tap screenshot to expand
                    </div>
                  </div>

                  {/* Mobile Horizontal Snap Carousel / Interactive Switcher */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 my-auto items-center">
                    {(Object.keys(ZENIM_SCREENS) as ZenimScreenKey[]).map((key) => {
                      const item = ZENIM_SCREENS[key];
                      const isSelected = zenimScreen === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setZenimScreen(key)}
                          className={`group relative rounded-xl overflow-hidden border transition-all duration-200 focus:outline-none ${
                            isSelected
                              ? 'border-rose-400 ring-2 ring-rose-400/40 scale-[1.02] shadow-xl shadow-rose-950/50'
                              : 'border-white/10 opacity-65 hover:opacity-100'
                          }`}
                        >
                          <div className="aspect-[9/19] w-full bg-black/60 overflow-hidden relative">
                            <img
                              src={item.image}
                              alt={`Zenim Android ${item.label} screenshot`}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                if (e.currentTarget.src !== item.fallbackUrl) {
                                  e.currentTarget.src = item.fallbackUrl;
                                }
                              }}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-left">
                              <span className="block text-[10px] sm:text-xs font-mono font-bold text-white truncate">
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Screen Caption + Fullscreen Inspect Button */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-rose-300 font-semibold">{ZENIM_SCREENS[zenimScreen].label}:</strong>{' '}
                      {ZENIM_SCREENS[zenimScreen].caption}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: ZENIM_SCREENS[zenimScreen].image,
                          title: `Zenim Android — ${ZENIM_SCREENS[zenimScreen].label}`
                        })
                      }
                      className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white/10 hover:bg-rose-500/30 border border-white/15 text-xs font-mono font-bold text-rose-200 whitespace-nowrap shrink-0 self-start sm:self-center transition-colors"
                    >
                      Inspect Fullscreen
                    </button>
                  </div>
                </div>

                {/* Right Column: Full Repo Information & Features */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-rose-600 mb-2">
                      Material 3 Expressive · Native libtorrent4j · Local Range Server
                    </div>
                    <h3 className="syne text-3xl sm:text-5xl font-black tracking-tight uppercase mb-4">
                      Zenim Android 🌸
                    </h3>
                    <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed mb-6">
                      A calm, expressive torrent client for Android — search, download, and stream torrents directly on your phone before downloads finish, wrapped in a soft Material 3 Expressive interface with 5 dynamic themes (Rose, Violet, Blue, Green, Amber) plus AMOLED dark mode.
                    </p>

                    {/* Key Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                      <div className="p-4 rounded-2xl bg-white border border-rose-900/10">
                        <div className="text-xs font-mono text-rose-600 font-bold mb-1">Stream While Downloading</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                          Priority piece fetching + local HTTP range server feeds built-in Media3 ExoPlayer immediately.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-rose-900/10">
                        <div className="text-xs font-mono text-rose-600 font-bold mb-1">Granular Torrent Control</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                          Cherry-pick individual files, sequential mode, speed & connection limits, magnet & .torrent save.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-rose-900/10">
                        <div className="text-xs font-mono text-rose-600 font-bold mb-1">Phone-Style Streaming Bar</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                          Keeps active torrent streams alive across navigation and parks cleanly when playback finishes.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-rose-900/10">
                        <div className="text-xs font-mono text-rose-600 font-bold mb-1">v1.1.0 HyperOS & Setup Fix</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                          Fixed All-Files permission bounce on HyperOS with a retry escape hatch + hardened OTA updater.js.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons (44px+ Mobile Ergonomic Hitboxes) */}
                  <div className="pt-4 border-t border-rose-950/10 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://github.com/israrxy/zenim-android/releases/download/v1.1.0/zenim-v1.1.0.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] flex-1 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-rose-600/20"
                    >
                      <span>Download APK (v1.1.0)</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                      </svg>
                    </a>
                    <button
                      type="button"
                      onClick={() => onOpenAppsStore('zenim')}
                      className="min-h-[48px] px-5 py-3.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Store Page</span>
                    </button>
                    <a
                      href="https://github.com/israrxy/zenim-android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-6 py-3.5 rounded-xl border border-black/20 hover:bg-black hover:text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>View Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* =========================================================
              PROJECT 2: RAAZI MUSIC (israrxy/Raazi)
             ========================================================= */}
          {(activeAppFilter === 'all' || activeAppFilter === 'raazi') && (
            <article 
              id="raazi" 
              className="rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-8 md:p-12 transition-all"
            >
              {/* Top App Metadata Line (Unboxed clean metadata) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-6 md:mb-10 border-b border-black/10 text-xs font-mono text-slate-600">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-indigo-600">israrxy/Raazi</span>
                  <span aria-hidden="true">·</span>
                  <span>Release v6.0.0 (Version Code 8)</span>
                  <span aria-hidden="true">·</span>
                  <span>GPL-3.0 License</span>
                </div>
                <div className="tabular-nums font-semibold text-slate-500">
                  Kotlin · Jetpack Compose · Media3 ExoPlayer
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                {/* Left Column: App Visual & Interactive Release/Feature Explorer */}
                <div className="w-full lg:w-5/12 flex flex-col justify-between rounded-2xl bg-[#0e1017] text-white p-6 sm:p-8 border border-indigo-500/20">
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      YouTube Music · SoundCloud · Bandcamp
                    </span>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      v1.0 → v6.0.0
                    </span>
                  </div>

                  <div className="my-auto flex flex-col items-center text-center py-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white/5 border border-white/10 p-4 flex items-center justify-center mb-6 shadow-2xl">
                      <img 
                        src="/assets/raazi/Raazi.png" 
                        alt="Raazi Music App Icon" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = "https://raw.githubusercontent.com/israrxy/Raazi/main/Raazi.png";
                        }}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h4 className="syne text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                      Raazi Music Player
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                      Zero ads, zero tracking, no account required. Built with Clean Architecture & NewPipeExtractor.
                    </p>
                  </div>

                  {/* Quick Release Evolution Strip */}
                  <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <div className="text-[10px] text-slate-400">Cache</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">50-Entry LRU</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <div className="text-[10px] text-slate-400">Debounce</div>
                      <div className="text-xs sm:text-sm font-bold text-white tabular-nums">150ms IO</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <div className="text-[10px] text-slate-400">Latest Build</div>
                      <div className="text-xs sm:text-sm font-bold text-indigo-400 tabular-nums">v6.0.0 (8)</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Mobile-Familiar Tabs for Overview, v6.0.0 Changelog, Architecture */}
                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="syne text-3xl sm:text-5xl font-black tracking-tight uppercase">
                        Raazi Music
                      </h3>

                      {/* Mobile-friendly Segmented Tab Control */}
                      <div className="flex bg-slate-200/80 p-1 rounded-xl">
                        <button
                          type="button"
                          onClick={() => setRaaziTab('overview')}
                          className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                            raaziTab === 'overview' ? 'bg-black text-white' : 'text-slate-600 hover:text-black'
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          type="button"
                          onClick={() => setRaaziTab('v6_changelog')}
                          className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                            raaziTab === 'v6_changelog' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-black'
                          }`}
                        >
                          v6.0.0 Notes
                        </button>
                        <button
                          type="button"
                          onClick={() => setRaaziTab('architecture')}
                          className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap shrink-0 ${
                            raaziTab === 'architecture' ? 'bg-black text-white' : 'text-slate-600 hover:text-black'
                          }`}
                        >
                          Tech Stack
                        </button>
                      </div>
                    </div>

                    {raaziTab === 'overview' && (
                      <div className="space-y-5">
                        <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                          A privacy-first, open-source Android music player built with Jetpack Compose and Kotlin. Streams high-quality audio from YouTube Music, SoundCloud, and Bandcamp with background playback, synced lyrics, and offline downloads.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="p-4 rounded-2xl bg-white border border-black/10">
                            <div className="text-xs font-mono text-indigo-600 font-bold mb-1">Smart Queue & Session Logic</div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                              Playing from search starts a clean single-track session; stable mode follows strict playlist order while shuffle adds radio picks.
                            </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white border border-black/10">
                            <div className="text-xs font-mono text-indigo-600 font-bold mb-1">Centered Synced Lyrics</div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                              Supports both fractional and [mm:ss] timestamps with auto-centering active lyric lines during playback.
                            </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white border border-black/10">
                            <div className="text-xs font-mono text-indigo-600 font-bold mb-1">Spotify Import & Ringtone Trimmer</div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                              Import playlists seamlessly, trim audio for ringtones, and rank home feeds using local interaction metrics.
                            </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white border border-black/10">
                            <div className="text-xs font-mono text-indigo-600 font-bold mb-1">Inlined Playback Stack</div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                              Stream resolution inlined directly into the APK for smaller installs, ANR timeout protection, and seamless OTA upgrades.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {raaziTab === 'v6_changelog' && (
                      <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-4">
                        <div className="flex items-center justify-between border-b border-black/10 pb-3">
                          <span className="font-mono text-xs font-bold text-indigo-600">Release v6.0.0 — Queue Overhaul & Lyrics Polish</span>
                          <span className="font-mono text-xs text-slate-500">Version Code 8</span>
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <li><strong>Queue Overhaul:</strong> Playing a song from search now starts a fresh single-track session instead of flooding your queue with search results.</li>
                          <li><strong>Stable vs. Shuffle Mode:</strong> Non-shuffle mode acts as a strict ordered playlist with radio suggestions hidden; Shuffle mode keeps YouTube-style Up Next suggestions.</li>
                          <li><strong>Player Controls:</strong> Dedicated Shuffle and Repeat buttons restored; deprecated dead video toggle removed for cleaner audio focus.</li>
                          <li><strong>Synced Lyrics Fix:</strong> Fixed parser skipping lines with standard [mm:ss] timestamps and centered the active lyric line on screen.</li>
                          <li><strong>v4.5 & v3.1 Foundations:</strong> Time-based greeting feed (Keep Listening, Quick Picks, Forgotten Favorites), 150ms IO search debounce, and crash-safe Room DB recovery.</li>
                        </ul>
                      </div>
                    )}

                    {raaziTab === 'architecture' && (
                      <div className="p-5 rounded-2xl bg-white border border-black/10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Language & UI</div>
                            <div className="font-bold text-slate-900 mt-0.5">Kotlin + Jetpack Compose (M3)</div>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Audio Engine</div>
                            <div className="font-bold text-slate-900 mt-0.5">AndroidX Media3 (ExoPlayer)</div>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Extractor Core</div>
                            <div className="font-bold text-slate-900 mt-0.5">NewPipeExtractor (Inlined)</div>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Concurrency</div>
                            <div className="font-bold text-slate-900 mt-0.5">Kotlin Coroutines & Flow</div>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Persistence & Cache</div>
                            <div className="font-bold text-slate-900 mt-0.5">Room DB + 50-Item LRU</div>
                          </div>
                          <div>
                            <div className="font-mono text-[11px] text-slate-400">Networking & Images</div>
                            <div className="font-bold text-slate-900 mt-0.5">Retrofit, OkHttp & Coil</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-black/10 flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://raazi-music-player.en.uptodown.com/android" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-h-[48px] flex-1 bg-black hover:bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Get App</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                      </svg>
                    </a>
                    <a 
                      href="https://raazi.pages.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-5 py-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Direct Download</span>
                    </a>
                    <a 
                      href="https://github.com/israrxy/Raazi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-5 py-3.5 rounded-xl border border-black/20 hover:bg-black hover:text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-sm w-full bg-[#121214] border border-white/15 rounded-3xl p-4 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-rose-300 truncate">
                {lightboxImage.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="min-h-[36px] min-w-[36px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-bold"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

