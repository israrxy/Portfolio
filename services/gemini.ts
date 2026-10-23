/**
 * Architecture Knowledge Engine for Israr's Portfolio
 * Provides detailed architectural answers about Zenim Android, Raazi Music, and Israr's development workflow.
 */

export const askIsrarLogic = async (problem: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 450));
  const q = problem.toLowerCase();

  if (q.includes('zenim') || q.includes('torrent') || q.includes('range')) {
    return "Zenim Android (v1.1.0) pairs native libtorrent4j with a local HTTP range server and Media3 ExoPlayer. When a user taps Stream, Zenim prioritizes sequential pieces at the start and seek-head of the torrent file, serving byte-ranges over localhost directly to ExoPlayer—allowing instant video/audio playback before the download completes.";
  }

  if (q.includes('raazi') || q.includes('queue') || q.includes('lyrics') || q.includes('music')) {
    return "Raazi Music (v6.0.0) uses Kotlin + Jetpack Compose with an inlined NewPipeExtractor stack and Media3 ExoPlayer. In v6.0.0, playing a song from search starts a clean single-track session, non-shuffle mode enforces strict playlist ordering, and the synced lyrics parser handles both fractional and [mm:ss] timestamps while auto-centering the active line.";
  }

  if (q.includes('compose') || q.includes('ai') || q.includes('workflow') || q.includes('logic')) {
    return "I treat LLMs as high-level compilers while keeping architectural control human-first. Jetpack Compose + Material 3 Expressive lets me define declarative UI state, while Kotlin Coroutines/Flow + Room handle concurrency and caching (like Raazi's 150ms IO search debounce and 50-entry LRU cache).";
  }

  return "Both Zenim Android (v1.1.0, Material 3 Expressive + libtorrent4j) and Raazi Music (v6.0.0, NewPipeExtractor + Media3 ExoPlayer) are built around the same core principle: combine resilient native engines with expressive, ad-free Material 3 interfaces.";
};

