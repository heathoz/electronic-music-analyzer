import { useState } from 'react';
import { Music, Play, Heart, Youtube, Instagram, Sparkles, Mail, Share2, Linkedin, Copy } from 'lucide-react';

export default function ElectronicMusicAnalyzer() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('analyzer');

  const sampleAnalyses = {
    "https://youtu.be/dwDns8x3Jb4": {
      title: "Strobe",
      artist: "deadmau5",
      hook: "The track's genius lies in its patient 10+ minute build-up that creates genuine emotional investment. The minimal opening tricks your brain into focusing intensely, making the eventual melody drop feel like an emotional release.",
      musicalElements: "🎵 KEY: F# minor (the 'sad but hopeful' key) • 🥁 BPM: 128 • 🎹 CHORD PROGRESSION: F#m - D - A - E",
      producerTakeaways: "🎛️ ARRANGEMENT: Build one element every 32 bars - mimics human attention spans. 🔊 SOUND DESIGN: Plucked saw wave with -3 cent detune creates 'beating'. 🎚️ AUTOMATION: Filter sweep creates physical tension that demands release.",
      tryThis: "1️⃣ Load saw wave, add pluck envelope (50ms attack). 2️⃣ Detune -3 cents. 3️⃣ Filter: Low-pass at 2kHz, automate slowly. 4️⃣ Add elements every 32 bars - patience is key.",
      similarArtists: "Eric Prydz - 'Opus', Above & Beyond - 'Sun & Moon', Underworld - 'Born Slippy'",
      whatMakesItSpecial: "Proves electronic music can create the same emotional journey as a symphony. The 10+ minute runtime builds genuine emotional investment."
    },
    "https://www.youtube.com/watch?v=hJdF8DJ70Dc": {
      title: "Around the World",
      artist: "Daft Punk",
      hook: "The hypnotic power comes from 'less is more' pushed to extremes. Your brain latches onto the simple vocal loop, but subtle variations keep it from becoming boring.",
      musicalElements: "🎵 KEY: F# minor • 🥁 BPM: 121 (slightly slower creates relaxed groove) • 🎹 CHORD PROGRESSION: F#m - A - E - B",
      producerTakeaways: "🎛️ FILTERING: Low-pass sweep every 32 bars creates anticipation/release cycles. 🔊 BASS: Deep sine wave with subtle sidechain. 🎚️ CLUB SECRET: Bass is mono below 100Hz, stereo above.",
      tryThis: "1️⃣ Record simple 4-word vocal phrase. 2️⃣ Loop for exactly 8 bars. 3️⃣ Add filter automation: 200Hz to 12kHz every 32 bars. 4️⃣ Sidechain bass with slow attack (10ms).",
      similarArtists: "Cassius - '1999', Bob Sinclar - 'World Hold On', Modjo - 'Lady'",
      whatMakesItSpecial: "Proved electronic music could be simultaneously minimal and maximal. The genius is that everyone remembers the vocal, but it's the bass and filtering that make people dance."
    },
    "https://www.youtube.com/watch?v=Ua2loiGHZ38": {
      title: "Windowlicker",
      artist: "Aphex Twin",
      hook: "The track's power lies in controlled chaos - it sounds random but every glitch is precisely placed. Your brain can't predict what's next, triggering constant dopamine releases.",
      musicalElements: "🎵 KEY: Atonal/polytonal • 🥁 BPM: 129 (shifting) • 🎹 HARMONY: Dissonant clusters • 🎛️ TIME: Polyrhythmic",
      producerTakeaways: "🎛️ GLITCH: Beat repeat at 1/32 notes with 85% feedback creates stuttering. ⚡ MODULATION: Random LFOs at different rates (1/16, 1/7, 1/11). 🔊 PROCESSING: Time-stretch vocals 400% then pitch-shift opposite direction.",
      tryThis: "1️⃣ Record phrase, time-stretch to 400%. 2️⃣ Beat repeat: 1/16 notes, 50% probability. 3️⃣ Route 3 random LFOs to filter, pitch, pan. 4️⃣ Add bit-crusher and frequency shifter.",
      similarArtists: "Squarepusher - 'Come On My Selector', Autechre - 'Tri Repetae', Flying Lotus - 'Cosmogramma'",
      whatMakesItSpecial: "Proved electronic music could be genuinely challenging art while still being danceable. Every 'mistake' is intentional, creating genuinely alien sounds that feel human."
    },
    "https://youtu.be/q_Uax2Yw48U": {
      title: "Heartbreak",
      artist: "Bonobo",
      hook: "The emotional power comes from collision of organic and synthetic - real instruments through electronic filters create 'nostalgic future' feeling.",
      musicalElements: "🎵 KEY: D minor (the saddest key) • 🥁 BPM: 122 • 🎹 CHORD PROGRESSION: Dm - Bb - F - C • 🎼 STRINGS: Live strings processed",
      producerTakeaways: "🎹 KEYS: Multiple pads detuned +/-7 cents creates natural 'breathing'. 🔊 BASS: Gentle sidechain (3:1 ratio). 🎚️ MIXING: Tape saturation on pads adds harmonic richness.",
      tryThis: "1️⃣ Layer 3-4 warm pads, detune each differently. 2️⃣ Add vinyl crackle at -40dB. 3️⃣ Gentle compression (2:1 ratio, 30ms attack). 4️⃣ Build over 6-8 minutes.",
      similarArtists: "Lane 8 - 'Road', Yotto - 'The One You Left Behind', Ben Böhmer - 'Beyond Beliefs'",
      whatMakesItSpecial: "Shows electronic music can be cinematic without losing dancefloor power. Template for 'melodic house' - sophisticated yet accessible."
    },
    "https://youtu.be/0cQTdn8t9TI": {
      title: "Cola",
      artist: "CamelPhat & Elderbrook",
      hook: "Perfect marriage of underground grit and pop sensibility. Vocal hook is memorable, but rolling bassline keeps your body moving subconsciously.",
      musicalElements: "🎵 KEY: A minor • 🥁 BPM: 124 (optimal tech house tempo) • 🎹 CHORD PROGRESSION: Am - F - C - G • 🎛️ GROOVE: Rolling 16th hi-hats",
      producerTakeaways: "🔊 BASS: 303 emulation with 16% swing timing. 🥁 DRUMS: Punchy kick (200ms decay), rimshot snare. 🎚️ CLUB SECRET: Slight mix compression (2:1) for energy consistency.",
      tryThis: "1️⃣ Program 124 BPM kick with swing (10-15%). 2️⃣ Rolling 303 bass with filter automation. 3️⃣ Layer percussion with different reverbs. 4️⃣ Chop vocals, sidechain to kick.",
      similarArtists: "Hot Since 82 - 'Buggin'', Fisher - 'Losing It', Solardo - 'Be Somebody'",
      whatMakesItSpecial: "Template for modern tech house - balancing underground credibility with mainstream appeal. Works at any point in a DJ set."
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

    setTimeout(() => {
      const normalizedUrl = normalizeUrl(youtubeUrl);
      const analysisResult = sampleAnalyses[normalizedUrl];
      
      if (analysisResult) {
        setAnalysis(analysisResult);
        setTimeout(() => setShowEmailCapture(true), 1000);
      } else {
        setError('This demo includes sample analyses for selected electronic tracks. Try one of the sample tracks below!');
      }
      setIsLoading(false);
    }, 2000);
  };

  const loadSampleTrack = (url) => {
    setYoutubeUrl(url);
    setError('');
  };

  const handleEmailSubmit = () => {
    alert('Email me at: heath@heathholme.net\nSubject: Music Analyzer Updates\n\nI will notify you when the full version launches!');
    setEmailSubmitted(true);
    setShowEmailCapture(false);
  };

  const shareAnalysis = (platform) => {
    const currentUrl = window.location.href;
    const trackTitle = analysis ? `${analysis.artist} - ${analysis.title}` : 'This Electronic Track';
    const shareText = `Just discovered the production secrets behind ${trackTitle} using this amazing AI analyzer!`;
    
    const shareUrls = {
      reddit: `https://reddit.com/submit?title=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      copy: currentUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            Electronic Music Track Analyzer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Get actionable insights from your favourite electronic tracks. Paste a YouTube URL and learn the exact techniques, keys, and production secrets you can use tonight.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-1 border border-slate-700">
              <button
                onClick={() => setActiveTab('analyzer')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'analyzer'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                Analyzer
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'about'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                About
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === 'about' && (
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="text-white space-y-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Why I Built This Tool</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  As an electronic music production coach and artist, I constantly hear the same question: <em>"How did they make THAT sound or what makes this track tick?"</em> After working with hundreds of artists, I realized it would be great to have a tool that doesn't just tell you what's happening - but shows you exactly how to recreate it in your DAW tonight.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  We sometimes use reference tracks to learn from the best, but understanding WHY these tracks work and HOW to apply those techniques has been difficult to translate, until now. This analyzer bridges that gap between inspiration and implementation.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Because one of the best ways to grow as a producer is to learn from the tracks that move you most. Let's discover the magic together.
                </p>
                <p className="text-sm text-cyan-400 italic mt-8">- Heath Holme</p>
              </div>
            </div>
          )}

          {activeTab === 'analyzer' && (
            <>
              <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
                    <h2 className="text-xl font-bold text-white">Try These Sample Tracks</h2>
                  </div>
                  <span className="text-sm text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">Demo Version</span>
                </div>
                
                <div className="flex gap-4 overflow-x-auto pb-2">
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/dwDns8x3Jb4")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 border border-slate-600/50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">deadmau5</div>
                        <div className="text-white font-medium">Strobe</div>
                        <div className="text-gray-300 text-sm">Progressive House • 10+ min epic</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=hJdF8DJ70Dc")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 border border-slate-600/50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">Daft Punk</div>
                        <div className="text-white font-medium">Around the World</div>
                        <div className="text-gray-300 text-sm">House • Hypnotic loop</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=Ua2loiGHZ38")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 border border-slate-600/50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">Aphex Twin</div>
                        <div className="text-white font-medium">Windowlicker</div>
                        <div className="text-gray-300 text-sm">IDM • Experimental chaos</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/q_Uax2Yw48U")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 border border-slate-600/50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">Bonobo</div>
                        <div className="text-white font-medium">Heartbreak</div>
                        <div className="text-gray-300 text-sm">Melodic House • Emotional journey</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/0cQTdn8t9TI")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl p-4 cursor-pointer transition-all hover:scale-105 border border-slate-600/50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">CamelPhat & Elderbrook</div>
                        <div className="text-white font-medium">Cola</div>
                        <div className="text-gray-300 text-sm">Tech House • Driving groove</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 mr-2 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white">Track Analysis</h2>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="Paste YouTube URL here..."
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 font-medium"
                    disabled={isLoading}
                  />
                  <button
                    onClick={analyzeTrack}
                    disabled={isLoading || !youtubeUrl.trim()}
                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-b-transparent"></div>
                    ) : (
                      <>
                        <Music className="w-5 h-5 mr-2" />
                        ANALYZE
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-orange-500/20 border border-orange-400 rounded-xl text-orange-200 font-medium">
                    {error}
                  </div>
                )}
              </div>

              {analysis && (
                <div className="space-y-6">
                  <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Love this analysis?</span>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => shareAnalysis('reddit')}
                          className="flex items-center px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors text-sm"
                        >
                          <Share2 className="w-4 h-4 mr-1" />
                          Reddit
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
                    <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
                      <h2 className="text-3xl font-black text-cyan-400 mb-2">{analysis.title}</h2>
                      {analysis.artist && <p className="text-xl text-white font-medium">by {analysis.artist}</p>}
                    </div>
                  )}

                  <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/50">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 mr-2 text-pink-400" />
                      <h3 className="text-xl font-bold text-white">Musical Hook</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed font-medium">{analysis.hook}</p>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/50">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">Musical Elements</h3>
                    <p className="text-gray-100 leading-relaxed font-medium">{analysis.musicalElements}</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-400">
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Production Techniques</h3>
                    <p className="text-gray-100 leading-relaxed font-medium">{analysis.producerTakeaways}</p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400">
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Step-by-Step Guide</h3>
                    <p className="text-gray-100 leading-relaxed font-medium">{analysis.tryThis}</p>
                  </div>

                  <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-rose-400">
                    <h3 className="text-xl font-bold mb-4 text-rose-400">If You Love This, Explore</h3>
                    <p className="text-gray-100 leading-relaxed font-medium">{analysis.similarArtists}</p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">What Makes It Special</h3>
                    <p className="text-white leading-relaxed font-medium">{analysis.whatMakesItSpecial}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {showEmailCapture && !emailSubmitted && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 p-1 rounded-2xl max-w-md w-full border border-slate-700">
              <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-6">
                <div className="text-center mb-6">
                  <Mail className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Get Early Access!</h3>
                  <p className="text-gray-300">Be the first to know when the full version launches + get exclusive producer tips</p>
                </div>
                
                <div className="flex flex-col gap-3 mb-4">
                  <button
                    onClick={handleEmailSubmit}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get My Email
                  </button>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">I'll show you my email address</span>
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

        {emailSubmitted && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            ✅ Email me: heath@heathholme.net (Subject: Music Analyzer)
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto border border-slate-700/50">
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
            
            <div className="mt-6">
              <a 
                href="https://ko-fi.com/heathholme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">☕</span>
                Support on Ko-fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
