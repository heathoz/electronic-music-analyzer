import { useState } from 'react';
import { Music, Play, Clock, Waves, Headphones, Heart, Youtube, Instagram, Sparkles, Mail, Share2, Twitter, Linkedin, Copy, ExternalLink } from 'lucide-react';

export default function ElectronicMusicAnalyzer() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Sample analyses for demo
  const sampleAnalyses = {
    "https://youtu.be/dwDns8x3Jb4": {
      title: "Strobe",
      artist: "deadmau5",
      hook: "The track's genius lies in its patient 10+ minute build-up, starting with minimal ambient textures before introducing the iconic arpeggiated melody that becomes hypnotically addictive. The main hook is a simple but emotionally powerful plucked synth line that repeats with subtle variations, creating an almost meditative trance state.",
      musicalElements: "🎵 KEY: F# minor with occasional F# Dorian inflections • 🥁 BPM: 128 • 🎹 CHORD PROGRESSION: F#m - D - A - E (i - bVI - bIII - bVII) • 🎼 SCALE: F# natural minor with raised 6th (Dorian) for brightness • ⏱️ STRUCTURE: 64-bar intro, 128-bar build, 64-bar breakdown, 128-bar climax",
      producerTakeaways: "🎛️ ARRANGEMENT: Build one element every 32 bars - start minimal, add layers progressively. Use 64-bar phrases for epic progressive feel. 🔊 SOUND DESIGN: Plucked saw wave, detune -3 cents, low-pass filter at 2kHz with gentle resonance boost. 🎚️ AUTOMATION: Filter cutoff sweep from 800Hz to 8kHz over 128 bars creates signature build-up. 🎛️ MIXING: Wide stereo imaging on pads, mono bass/kick, subtle tape saturation for warmth.",
      tryThis: "1️⃣ START: Load a saw wave, add pluck envelope (fast attack, medium decay). 2️⃣ DETUNE: Slightly detune oscillator to -3 cents for analog feel. 3️⃣ FILTER: Low-pass at 2kHz, automate cutoff from 800Hz to 8kHz over 8 bars, repeat. 4️⃣ ARRANGEMENT: 4-bar kick pattern, add open hi-hats at bar 32, lead melody at bar 64. 5️⃣ EFFECTS: Add subtle reverb (2.5s decay) and gentle chorus for space.",
      similarArtists: "If you love this track, explore: Eric Prydz - 'Opus' (epic progressive builds), Above & Beyond - 'Sun & Moon' (emotional progressions), Underworld - 'Born Slippy' (long-form electronic), Sasha - 'Xpander' (progressive house masterclass), Burial - 'Archangel' (ambient electronic atmosphere).",
      whatMakesItSpecial: "Strobe proves that electronic music can be emotionally powerful without being aggressive. Its 10+ minute runtime was unusual for mainstream electronic music, showing that audiences were hungry for longer-form electronic compositions. The track's emotional arc - from contemplative beginning to euphoric climax - creates a complete listening experience rather than just a dancefloor tool.",
      overallAssessment: "A progressive house masterpiece that demonstrates the power of restraint and patience in electronic music. Its success proved that audiences were ready for more sophisticated electronic compositions, paving the way for artists like Eric Prydz, Above & Beyond, and others to explore longer-form storytelling in dance music."
    },
    
    "https://www.youtube.com/watch?v=FG0fTKAqZ5g": {
      title: "One More Time",
      artist: "Daft Punk",
      hook: "The irresistible vocal hook 'One more time, we're gonna celebrate' processed through heavy vocoder effects creates an instantly recognizable and anthemic quality. The filtered disco sample underneath provides a nostalgic foundation that triggers immediate emotional connection to classic disco while feeling completely futuristic.",
      musicalElements: "🎵 KEY: E major • 🥁 BPM: 123 • 🎹 CHORD PROGRESSION: E - C#m - A - B (I - vi - IV - V) • 🎼 SCALE: E major with chromatic passing tones • ⏱️ STRUCTURE: 32-bar intro, 64-bar main section, 32-bar breakdown, 64-bar climax • 🎛️ SWING: 16% swing on hi-hats for French house groove",
      producerTakeaways: "🎙️ VOCODER: Use Talk Box plugin or Auto-Tune at 100% correction with +200 cent formant shift for robot voice effect. 🎛️ SIDECHAIN: Compress bass/chords with 6:1 ratio, 0.1ms attack, 50ms release - triggered by kick for French house pump. 🔊 SAMPLING: Chop disco at 1/16 notes, pitch +4 semitones, filter sweep 200Hz-12kHz. Add vinyl simulation for warmth.",
      tryThis: "1️⃣ SAMPLE: Find a disco track, chop 4-bar loop into 1/16 note slices. 2️⃣ PITCH: Transpose +4 semitones, add subtle pitch wobble with LFO. 3️⃣ FILTER: Automate low-pass from 200Hz to 12kHz over 32 bars. 4️⃣ SIDECHAIN: Route kick to compressor on bassline, 6:1 ratio for pump effect. 5️⃣ VOCALS: Record phrase, process with vocoder/talk box, layer harmonies in E major.",
      similarArtists: "If you love this track, explore: Justice - 'D.A.N.C.E.' (French house perfection), Modjo - 'Lady' (disco house classic), Cassius - '1999' (filtered disco), Stardust - 'Music Sounds Better With You' (Thomas Bangalter's other classic), Bob Sinclar - 'World Hold On' (vocal house anthem).",
      whatMakesItSpecial: "One More Time bridged the gap between underground house music and mainstream pop culture like few tracks before it. The combination of familiar disco elements with alien-sounding vocoder processing made it accessible yet cutting-edge. Its euphoric energy and sing-along quality made it perfect for both clubs and radio.",
      overallAssessment: "A perfect storm of nostalgic sampling, futuristic production, and anthemic songwriting that created one of electronic music's most beloved tracks. Its influence on both house music and pop culture cannot be overstated, setting the template for celebration anthems in electronic music."
    },

    "https://www.youtube.com/watch?v=Ua2loiGHZ38": {
      title: "Windowlicker",
      artist: "Aphex Twin", 
      hook: "The track's hook is deliberately elusive and constantly morphing - a twisted, pitch-bent melody that seems to melt and reshape itself. The main melodic idea uses heavily processed and time-stretched vocals that create an unsettling but hypnotic effect, constantly keeping the listener off-balance and engaged.",
      musicalElements: "🎵 KEY: Atonal/polytonal (no fixed key center) • 🥁 BPM: 129 (constantly shifting) • 🎹 HARMONY: Dissonant clusters, microtonal intervals • 🎼 SCALE: Chromatic with microtonal deviations • ⏱️ STRUCTURE: Non-linear, morphing sections that blur traditional song boundaries • 🎛️ TIME: Polyrhythmic, multiple tempos simultaneously",
      producerTakeaways: "🎛️ GLITCH: Use beat repeat at 1/32 notes with random probability for broken rhythms. Set feedback to 85% for controlled chaos. ⚡ MODULATION: Route random LFOs (0.1-50Hz) to pitch, filter, pan - create evolving textures. 🔊 PROCESSING: Chain time-stretch (400-800%) → pitch-shift → granular delay for alien vocals. 🎚️ MIXING: Deliberately create frequency conflicts - let elements fight for space to build tension.",
      tryThis: "1️⃣ VOCAL: Record any phrase, time-stretch to 400%, pitch down 1 octave. 2️⃣ GLITCH: Add beat repeat plugin, set to 1/16 notes, 50% probability, high feedback. 3️⃣ CHAOS: Route random LFO to multiple parameters - pitch, filter, reverb size. 4️⃣ TEXTURE: Layer bit-crusher → frequency shifter → granular reverb. 5️⃣ RHYTHM: Program conflicting time signatures (4/4 kick vs 7/8 hi-hats) for polyrhythmic feel.",
      similarArtists: "If you love this experimental approach, explore: Squarepusher - 'Come On My Selector' (drill'n'bass), Autechre - 'Tri Repetae' (abstract IDM), Flying Lotus - 'Cosmogramma' (experimental hip-hop), Boards of Canada - 'Music Has The Right To Children' (nostalgic IDM), Clark - 'Body Riddle' (modern experimental electronic).",
      whatMakesItSpecial: "Windowlicker proved that electronic music could be genuinely challenging and artistic while still being somehow danceable. Its combination of beauty and ugliness, accessibility and experimentalism, created a new template for how electronic music could push boundaries while maintaining emotional impact.",
      overallAssessment: "A challenging masterpiece that expanded the possibilities of what electronic music could be. Its influence on experimental electronic music, hip-hop production, and even pop music production techniques continues today, proving that truly innovative art can have lasting impact."
    }
  };

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const normalizeUrl = (url) => {
    const videoId = extractVideoId(url);
    if (!videoId) return url;
    
    // Check if it matches any of our sample URLs
    for (const sampleUrl of Object.keys(sampleAnalyses)) {
      const sampleVideoId = extractVideoId(sampleUrl);
      if (sampleVideoId === videoId) {
        return sampleUrl;
      }
    }
    return url;
  };

  const analyzeTrack = async () => {
    if (!youtubeUrl.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnalysis(null);

    // Simulate loading time for realism
    setTimeout(() => {
      const normalizedUrl = normalizeUrl(youtubeUrl);
      const analysisResult = sampleAnalyses[normalizedUrl];
      
      if (analysisResult) {
        setAnalysis(analysisResult);
        // Show email capture after successful analysis
        setTimeout(() => setShowEmailCapture(true), 1000);
      } else {
        // Check if it's a non-YouTube URL
        if (youtubeUrl.includes('soundcloud.com') || youtubeUrl.includes('spotify.com') || youtubeUrl.includes('bandcamp.com')) {
          setError('This track isn\'t on YouTube? No problem! We can analyze it manually. Drop your email below and we\'ll send you the analysis within 24 hours.');
          setShowEmailCapture(true);
        } else {
          setError('This demo includes sample analyses for deadmau5 - Strobe, Daft Punk - One More Time, and Aphex Twin - Windowlicker. Try one of these tracks, or check back soon for the full version!');
        }
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      analyzeTrack();
    }
  };

  const loadSampleTrack = (url) => {
    setYoutubeUrl(url);
    setError('');
  };

  const handleEmailSubmit = () => {
    // Redirect to YouTube channel with subscribe confirmation
    window.open('https://www.youtube.com/@HeathHolme?sub_confirmation=1', '_blank');
    setEmailSubmitted(true);
    setShowEmailCapture(false);
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'youtube_redirect', {
        event_category: 'engagement',
        event_label: 'youtube_subscribe'
      });
    }
  };

  const shareAnalysis = (platform) => {
    const currentUrl = window.location.href;
    const trackTitle = analysis ? `${analysis.artist} - ${analysis.title}` : 'This Electronic Track';
    const shareText = `Just discovered the production secrets behind ${trackTitle} using this amazing AI analyzer! 🎵🔥`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      copy: currentUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }

    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'share', {
        event_category: 'social',
        event_label: platform
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-green-400">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Waves className="w-12 h-12 mr-3 text-yellow-300" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              ELECTRONIC MUSIC TRACK ANALYZER
            </h1>
          </div>
          <p className="text-xl text-white max-w-2xl mx-auto mb-6">
            Get actionable insights from your favourite electronic tracks. Paste a YouTube URL and learn the exact techniques, keys, and production secrets you can use tonight.
          </p>
          
          {/* Personal Foreword */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-yellow-300/30">
            <div className="text-white text-left space-y-4">
              <p className="text-lg font-medium text-yellow-300">Why I Built This Tool</p>
              <p className="leading-relaxed">
                As an electronic music production coach and artist, I constantly hear the same question: <em>"How did they make THAT sound or what makes this track tick?"</em> After working with hundreds of artists, I realized it would be great to have a tool that doesn't just tell you what's happening - but shows you exactly how to recreate it in your DAW tonight.
              </p>
              <p className="leading-relaxed">
                We sometimes use reference tracks to learn from the best, but understanding WHY these tracks work and HOW to apply those techniques has been difficult to translate, until now. This analyzer bridges that gap between inspiration and implementation.
              </p>
              <p className="leading-relaxed">
                Because one of the best ways to grow as a producer is to learn from the tracks that move you most. Let's discover the magic together.
              </p>
              <p className="text-sm text-gray-300 italic">- Heath Holme</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Demo Notice */}
          <div className="bg-yellow-300/20 backdrop-blur-lg rounded-2xl p-6 mb-6 border-2 border-yellow-300/50">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
              <h2 className="text-xl font-bold text-white">Demo Version - Try These Sample Tracks!</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => loadSampleTrack("https://youtu.be/dwDns8x3Jb4")}
                className="bg-black/30 hover:bg-black/40 rounded-lg p-4 text-left transition-colors border border-white/20"
              >
                <div className="text-cyan-400 font-bold">deadmau5</div>
                <div className="text-white">Strobe</div>
                <div className="text-gray-300 text-sm">Progressive House Masterpiece</div>
              </button>
              <button
                onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=FG0fTKAqZ5g")}
                className="bg-black/30 hover:bg-black/40 rounded-lg p-4 text-left transition-colors border border-white/20"
              >
                <div className="text-cyan-400 font-bold">Daft Punk</div>
                <div className="text-white">One More Time</div>
                <div className="text-gray-300 text-sm">French House Classic</div>
              </button>
              <button
                onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=Ua2loiGHZ38")}
                className="bg-black/30 hover:bg-black/40 rounded-lg p-4 text-left transition-colors border border-white/20"
              >
                <div className="text-cyan-400 font-bold">Aphex Twin</div>
                <div className="text-white">Windowlicker</div>
                <div className="text-gray-300 text-sm">IDM Experimental</div>
              </button>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 mb-8 border-2 border-yellow-300/50">
            <div className="flex items-center mb-4">
              <Play className="w-6 h-6 mr-2 text-yellow-300" />
              <h2 className="text-xl font-bold text-white">Track Analysis</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
                className="flex-1 px-4 py-3 bg-black/40 border-2 border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/50 font-medium"
                disabled={isLoading}
              />
              <button
                onClick={analyzeTrack}
                disabled={isLoading || !youtubeUrl.trim()}
                className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 disabled:bg-gray-600 text-black font-bold rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-black border-b-transparent"></div>
                ) : (
                  <>
                    <Music className="w-5 h-5 mr-2" />
                    ANALYZE
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-orange-500/20 border-2 border-orange-400 rounded-xl text-orange-200 font-medium">
                {error}
              </div>
            )}
          </div>

          {analysis && (
            <div className="space-y-6">
              {/* Social Sharing Section */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-300/30">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Love this analysis?</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => shareAnalysis('twitter')}
                      className="flex items-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
                    >
                      <Twitter className="w-4 h-4 mr-1" />
                      Share
                    </button>
                    <button
                      onClick={() => shareAnalysis('linkedin')}
                      className="flex items-center px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors text-sm"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      Share
                    </button>
                    <button
                      onClick={() => shareAnalysis('copy')}
                      className="flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>

              {analysis.title && (
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-yellow-300/50">
                  <h2 className="text-3xl font-black text-yellow-300 mb-2">{analysis.title}</h2>
                  {analysis.artist && <p className="text-xl text-white font-medium">by {analysis.artist}</p>}
                </div>
              )}

              <div className="grid lg:grid-cols-1 gap-6">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-pink-400/50">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 mr-2 text-pink-400" />
                    <h3 className="text-xl font-bold text-white">Musical Hook</h3>
                  </div>
                  <p className="text-gray-100 leading-relaxed font-medium">{analysis.hook}</p>
                </div>

                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400/50">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Musical Elements</h3>
                  <p className="text-gray-100 leading-relaxed font-medium">{analysis.musicalElements}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border-2 border-orange-400">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Producer Takeaways</h3>
                <p className="text-gray-100 leading-relaxed font-medium">{analysis.producerTakeaways}</p>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-6 border-2 border-emerald-400">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Try This Tonight</h3>
                <p className="text-gray-100 leading-relaxed font-medium">{analysis.tryThis}</p>
              </div>

              <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border-2 border-rose-400">
                <h3 className="text-xl font-bold mb-4 text-rose-400">If You Love This, Explore</h3>
                <p className="text-gray-100 leading-relaxed font-medium">{analysis.similarArtists}</p>
              </div>

              <div className="bg-gradient-to-r from-yellow-300/20 to-green-400/20 backdrop-blur-lg rounded-2xl p-6 border-2 border-yellow-300">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">What Makes It Special</h3>
                <p className="text-white leading-relaxed font-medium">{analysis.whatMakesItSpecial}</p>
              </div>
            </div>
          )}
        </div>

        {/* Email Capture Modal */}
        {showEmailCapture && !emailSubmitted && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 p-1 rounded-2xl max-w-md w-full">
              <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-center mb-6">
                  <Mail className="w-12 h-12 mx-auto text-yellow-300 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated!</h3>
                  <p className="text-gray-300">Subscribe to my YouTube channel for music production tips and tool updates</p>
                </div>
                
                <div className="flex flex-col gap-3 mb-4">
                  <button
                    onClick={handleEmailSubmit}
                    className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Subscribe on YouTube
                  </button>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Get production tips and new features</span>
                  <button
                    onClick={() => setShowEmailCapture(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {emailSubmitted && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            ✅ Thanks! Don't forget to hit that subscribe button!
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto border-2 border-yellow-300/50">
            <p className="text-white text-sm mb-4">Created by Heath Holme</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.youtube.com/c/heathholme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Youtube className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">YouTube</span>
              </a>
              <a 
                href="https://www.instagram.com/heathholmemusic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
