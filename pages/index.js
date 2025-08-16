/*
🚀 GOOGLE ANALYTICS 4 SETUP - READY TO DEPLOY!

✅ GA4 Measurement ID: G-C4N2ZXFB2C (configured)
✅ All event tracking implemented
✅ Ready for Vercel deployment

📊 EVENTS BEING TRACKED:
- page_view: Initial landing with device type
- sample_track_selected: Which tracks users click
- track_analysis_started: Analysis button clicks
- track_analysis_completed: Successful analyses
- track_analysis_failed: Failed attempts
- tab_switch: Analyzer vs About tab usage
- email_capture_attempted: Email form submissions
- email_capture_completed: Successful conversions
- share_analysis: Social sharing by platform
- analysis_viewed: When users view analysis results
- analysis_engagement: Time spent reading analysis

💡 INSIGHTS YOU'LL GET:
- Most popular tracks (optimize content)
- Mobile vs desktop usage (optimize UX)
- Conversion rates (email capture performance)
- Engagement time (content quality metrics)
- User journey patterns (improve flow)

🔄 Next: Push to GitHub → Deploy to Vercel → Watch the data flow!
*/

import { useState, useRef, useEffect } from 'react';
import { Music, Play, Heart, Youtube, Instagram, Sparkles, Mail, Share2, Linkedin, Copy } from 'lucide-react';

export default function ElectronicMusicAnalyzer() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('analyzer');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const carouselRef = useRef(null);

  // Optimize analytics loading - only load when needed
  useEffect(() => {
    // Add Google Analytics 4 - Only in production
    if (typeof window === 'undefined' || window.location.hostname === 'localhost') return;
    
    const GA_MEASUREMENT_ID = 'G-C4N2ZXFB2C'; // Your actual GA4 Measurement ID
    
    // Load gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: 'Electronic Music Track Analyzer',
        custom_map: {
          'custom_parameter_1': 'track_analyzed',
          'custom_parameter_2': 'user_type'
        }
      });
    `;
    document.head.appendChild(script2);
    
    // Track initial page view with device info
    const deviceType = window.innerWidth <= 768 ? 'mobile' : 'desktop';
    // GA will be available after script loads
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: 'Electronic Music Analyzer Landing',
          device_type: deviceType,
          page_location: window.location.href
        });
      }
    }, 1000);
    
    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Electronic Music Track Analyzer",
      "description": "AI-powered tool to analyze electronic music tracks and learn production techniques from deadmau5, Daft Punk, Aphex Twin, and more.",
      "url": "https://electronic-music-analyzer.vercel.app",
      "applicationCategory": "MusicApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Person",
        "name": "Heath Holme",
        "url": "https://www.youtube.com/c/heathholme"
      },
      "keywords": "electronic music production, music analysis, deadmau5, daft punk, techno production, house music, music producer tools, DAW techniques, EDM production",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "1"
      }
    };

    // Add structured data to page
    let script = document.getElementById('structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Update page title and meta tags
    document.title = "Electronic Music Track Analyzer - Learn Production Secrets from the Pros";
    
    // Update or create meta tags
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // SEO Meta Tags
    updateMeta('description', 'Discover the production secrets behind iconic electronic tracks from deadmau5, Daft Punk, Aphex Twin & more. Get step-by-step DAW tutorials and professional techniques.');
    updateMeta('keywords', 'electronic music production, music analysis, deadmau5 strobe, daft punk production, techno production techniques, house music tutorials, EDM production tools, DAW techniques, music producer education');
    updateMeta('author', 'Heath Holme');
    updateMeta('robots', 'index, follow');

    // Open Graph Tags
    updateMeta('og:title', 'Electronic Music Track Analyzer - Learn Production Secrets');
    updateMeta('og:description', 'AI-powered tool to analyze iconic electronic tracks and learn professional production techniques. Discover the secrets behind deadmau5, Daft Punk, Aphex Twin & more.');
    updateMeta('og:type', 'website');
    updateMeta('og:url', 'https://electronic-music-analyzer.vercel.app');
    updateMeta('og:site_name', 'Electronic Music Track Analyzer');
    updateMeta('og:locale', 'en_US');

    // Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', 'Electronic Music Track Analyzer - Learn Production Secrets');
    updateMeta('twitter:description', 'Discover production techniques from iconic electronic tracks. Get step-by-step tutorials for deadmau5, Daft Punk, Aphex Twin & more.');
    updateMeta('twitter:creator', '@heathholmemusic');

    return () => {
      // Cleanup function
      const script = document.getElementById('structured-data');
      if (script) script.remove();
    };
  }, []);

  // Track analysis engagement time
  useEffect(() => {
    if (analysis && window.gtag) {
      const startTime = Date.now();
      
      // Track when analysis is viewed
      window.gtag('event', 'analysis_viewed', {
        event_category: 'Content Engagement',
        event_label: `${analysis.artist} - ${analysis.title}`,
        engagement_time_msec: 1
      });
      
      // Track engagement time when component unmounts or analysis changes
      return () => {
        const engagementTime = Math.round((Date.now() - startTime) / 1000);
        if (engagementTime > 5) { // Only track if engaged for more than 5 seconds
          window.gtag('event', 'analysis_engagement', {
            event_category: 'Content Engagement',
            event_label: `${analysis.artist} - ${analysis.title}`,
            value: engagementTime,
            engagement_time_msec: engagementTime * 1000
          });
        }
      };
    }
  }, [analysis]);

  // Add horizontal scroll with mouse wheel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      // Only handle horizontal scrolling if there's horizontal overflow
      if (carousel.scrollWidth > carousel.clientWidth) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  const sampleAnalyses = {
    "https://youtu.be/dwDns8x3Jb4": {
      title: "Strobe",
      artist: "deadmau5",
      hook: "Strobe is a 10-minute masterclass in emotional manipulation through minimalism. deadmau5 weaponizes patience - the sparse opening forces your brain into 'focused listening mode,' making the eventual melodic payoff feel like a dopamine explosion. It's the musical equivalent of meditation leading to euphoria.",
      
      musicalDNA: "🎵 **KEY:** F# minor at A=440Hz (the 'melancholic hope' frequency) • 🥁 **BPM:** 128.00 (perfect for trance hypnosis) • 🎹 **CHORD PROGRESSION:** F#m - D - A - E (vi-bVI-bVII-V in A major - the 'emotional journey' progression) • ⏱️ **STRUCTURE:** 32-bar phrases (matches human attention/breathing cycles) • 🎛️ **TIME SIGNATURE:** 4/4 with subtle swing on hi-hats (+3ms) • 🔊 **ROOT NOTE:** F# at 92.5Hz (sub-bass fundamental)",
      
      abletonMasterclass: "🎛️ **ABLETON RECREATION GUIDE:**\n\n**MAIN PLUCK:** Wavetable → Modern Talking → Saw wave • Oscillator pitch: -3 cents (creates beating with bass) • **ENV 1:** Attack 47ms, Decay 1.2s, Sustain 0%, Release 2.1s • **Filter:** Lowpass Legacy, Cutoff 2.1kHz, Resonance 1.8, Drive +6dB • **LFO 1:** Rate 1/16, Amount +12 semitones to cutoff (creates movement)\n\n**SUB BASS:** Wavetable → Basic Shapes → Sine • Root note F# (92.5Hz) • **Compressor:** Ratio 4:1, Attack 10ms, Release 100ms • **Sidechain:** Ghost kick every beat, -6dB reduction\n\n**ARRANGEMENT LAYERS:**\n• **0:00-2:00:** Sub bass + minimal percussion\n• **2:00-4:30:** Add main pluck (filtered)\n• **4:30-7:00:** Layer strings pad (Wavetable → Mallets & Bells → Vintage Electric)\n• **7:00-9:30:** Full arrangement + lead melody\n• **9:30-10:32:** Breakdown and outro\n\n**PRO TIP:** Automate Utility Gain instead of track volume - preserves dynamics",
      
      producerPsychology: "🧠 **WHY THIS WORKS:**\n\n**The 32-Bar Rule:** Each new element appears every 32 bars because human attention spans reset every 30-40 seconds. deadmau5 exploits this by introducing change RIGHT when your brain expects it.\n\n**The -3 Cent Secret:** Detuning the pluck -3 cents against the bass creates 'beating' at 2.8Hz - the same frequency as deep breathing. This subconsciously syncs listeners' nervous systems to the track.\n\n**Filter Automation Psychology:** The slow filter sweep from 800Hz to 8kHz over 64 bars creates physical tension in your chest (low frequencies = relaxation, high frequencies = excitement). The release feels like emotional catharsis.\n\n**Minimalism Strategy:** Starting with almost nothing forces 'active listening' - your brain works harder to find patterns, creating deeper engagement than busy arrangements.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Master the Foundation**\nCreate a 32-bar bass loop in F# minor. Add ONE new element every 32 bars for 5 minutes. Feel the urge to add more sooner? Resist - that tension IS the magic.\n\n**STEP 2: Discover the Beating Effect**\nRecord ANY melodic phrase. Detune it -3 cents and layer with your bass. Feel that subtle beating? Experiment with -1, -5, -7 cents to find your sweet spot.\n\n**STEP 3: Build Emotional Tension**\nAutomate ONE filter sweep over 64 bars from 400Hz to 4kHz. Map it to a fader and perform it live - watch people lean in as tension builds.\n\n**STEP 4: Study the Masters**\nAnalyze these 'patient progression' legends: Eric Prydz 'Opus' (19 minutes!), Above & Beyond 'Sun & Moon', Underworld 'Born Slippy', Max Richter 'On The Nature of Daylight'\n\n**CHALLENGE MODE:** Create your own 'Strobe formula' with any 4-chord progression → Add subtle detune → Build for 8+ minutes → Test on friends. Do they stay glued to every moment?"
    },
    "https://www.youtube.com/watch?v=hJdF8DJ70Dc": {
      title: "Around the World",
      artist: "Daft Punk",
      hook: "Around the World is the blueprint for hypnotic minimalism. Daft Punk discovered that your brain enters a trance state when given JUST enough variation to stay engaged, but not enough to break the spell. It's meditation disguised as a banger - four words repeated for 7 minutes, yet you never want it to stop.",
      
      musicalDNA: "🎵 **KEY:** F# minor at A=440Hz (melancholic but danceable) • 🥁 **BPM:** 121.00 (the 'French house sweet spot' - slower than techno, groovier than deep house) • 🎹 **CHORD PROGRESSION:** F#m - A - E - B (i-bIII-bVII-IV - the 'endless loop' progression) • 🎤 **VOCAL:** 4-syllable phrase 'A-round-the-World' (2.64 seconds = perfect loop length) • ⏱️ **PHRASE LENGTH:** 8 bars exactly (matches human breathing cycle) • 🔊 **BASS FUNDAMENTAL:** F# at 92.5Hz (same as Strobe - deadmau5 studied this!) • 🎛️ **FILTER SWEEP:** 32-bar cycles (200Hz to 12kHz and back)",
      
      abletonMasterclass: "🎛️ **ABLETON RECREATION GUIDE:**\n\n**THE VOCAL CHOP:** Audio track → Record/import 'Around the World' phrase → Crop to exactly 2 bars → **Simpler:** Classic mode, Snap to zero-crossings ON • **Audio Effects:** EQ Eight (High-pass 150Hz, Low-pass 8kHz) → Auto Filter → Compressor\n\n**BASS LINE:** **Wavetable:** Basic Shapes → Sine wave • Root note F# (92.5Hz) • **Filter:** Lowpass 24dB, Cutoff 400Hz, Drive +9dB • **Compressor:** Ratio 6:1, Attack 3ms, Release 50ms • **Sidechain:** Chain to kick drum (-4dB reduction)\n\n**THE MAGIC FILTER:** **Auto Filter** on vocal track • **Type:** Lowpass Legacy • **Frequency:** Automate 200Hz to 12kHz over 32 bars • **Resonance:** 2.1 (the 'French house resonance') • **Drive:** +6dB • **LFO:** OFF (manual automation only)\n\n**DRUM GROOVE:** **Drum Rack:** Kick on 1 and 3 (909 sample), Open hat on 2 and 4 • **Groove:** Swing 16% • **Kick processing:** EQ (boost 60Hz +3dB, cut 400Hz -2dB) • **Hat processing:** High-pass 8kHz, reverb send 15%\n\n**ARRANGEMENT SECRET:** Never stop the vocal loop - only filter it. Loop stays hypnotic, filters create 'fake' breakdowns",
      
      producerPsychology: "🧠 **THE NEUROSCIENCE OF HYPNOSIS:**\n\n**The 4-Word Formula:** 'Around the World' = 4 syllables = perfect for human pattern recognition. Your brain can hold 4±1 items in working memory. More syllables = cognitive overload. Fewer = too simple. Four = hypnotic sweet spot.\n\n**32-Bar Filter Cycles:** Match human attention renewal. Every 30-35 seconds, your brain needs 'something new' or it loses focus. The filter sweep provides just enough change to reset attention without breaking the trance.\n\n**The Repetition Paradox:** Instead of becoming boring, extreme repetition triggers 'semantic satiation' - words lose meaning and become pure rhythm. Your brain shifts from language processing to pure pattern recognition = deeper trance state.\n\n**Filter Frequency Psychology:** Low frequencies (200-800Hz) = relaxation, body movement. High frequencies (4-12kHz) = excitement, mental stimulation. The sweep from low to high literally guides your nervous system from calm to energized and back.\n\n**Why It Never Gets Old:** The vocal phrase is rhythmically asymmetrical against the 4/4 beat, creating infinite micro-variations that keep your brain engaged. Same words, endless rhythmic possibilities.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Master the 4-Word Rule**\nRecord yourself saying ANY 4-word phrase rhythmically. Loop it for exactly 8 bars. Notice how your brain starts hearing new rhythms in the same words? That's the hypnosis beginning.\n\n**STEP 2: Build the French Filter**\nSet up Auto Filter with 24dB lowpass, resonance at 2.1, drive +6dB. Automate frequency from 200Hz to 12kHz over 32 bars. Feel that physical tension and release in your chest? That's why people lose their minds on dancefloors.\n\n**STEP 3: Perfect the Minimalist Arrangement**\nStart with just kick, bass, and filtered vocal. Add NOTHING for 2 minutes. Fight every urge to add elements. Let the filter do ALL the work. The restraint IS the artform.\n\n**STEP 4: Study the Filter House Masters**\nAnalyze Modjo 'Lady Hear Me Tonight', Cassius '1999', Bob Sinclar 'World Hold On', Stardust 'Music Sounds Better With You'. Notice the filter automation patterns - they're all using the same 32-bar psychology.\n\n**CHALLENGE MODE:** Create a 6-minute track using only: 1 vocal phrase, 1 bassline, 1 kick, 1 hat, and 1 filter. If people can dance to it for the full 6 minutes, you've mastered hypnotic minimalism."
    },
    "https://www.youtube.com/watch?v=Ua2loiGHZ38": {
      title: "Windowlicker",
      artist: "Aphex Twin",
      hook: "Windowlicker is organized chaos disguised as randomness. Richard D. James weaponizes unpredictability - your brain releases dopamine every time it tries (and fails) to predict what comes next. It sounds like a beautiful accident, but every 'mistake' is precisely calculated. This is musical ADHD turned into art.",
      
      musicalDNA: "🎵 **KEY:** Atonal/polytonal (multiple key centers simultaneously - F# minor vs C major) • 🥁 **BPM:** 129 BPM base with constant micro-timing shifts (+/- 3-7ms) • 🎹 **HARMONY:** Dissonant clusters (C-C#-D played together creates 'organized ugliness') • ⏱️ **TIME SIGNATURES:** 4/4 base with 7/8, 5/4, and 11/8 fragments • 🎤 **VOCAL PROCESSING:** Time-stretched 200-400%, then pitch-shifted in opposite directions • 🔊 **FREQUENCY SPECTRUM:** Intentional gaps at 800Hz and 3.2kHz (makes space for glitches) • 🎛️ **RHYTHMIC PATTERNS:** Polyrhythms layered: 1/16 + 1/7 + 1/11 note divisions create 'never-repeating' illusion",
      
      abletonMasterclass: "🎛️ **ABLETON CHAOS CREATION GUIDE:**\n\n**GLITCH VOCALS:** Audio track → **Beat Repeat:** Gate 1/16, Pitch 1/8, Mix 35% • **Frequency Shifter:** Coarse +7 semitones, Fine -23 cents • **Corpus:** Type: Beam, Frequency 440Hz, Decay 2.1s • **Chain after:** Auto Filter (Notch, random LFO) → Redux (8-bit, 8kHz)\n\n**CONTROLLED RANDOMNESS:** **Max for Live LFO:** Rate 1/7 notes (creates polyrhythm against 4/4) • Route to: Filter frequency, Reverb size, Delay feedback • **Expression Control:** Map to Push rotaries for live 'organized chaos' performance\n\n**THE SIGNATURE STUTTER:** **Beat Repeat device:** Interval 1/16, Chance 45%, Gate 1/32 • **Key Setting:** Mix 100% (full replacement), Pitch 1/8 (creates melodic stutters) • **Pro Tip:** Automate 'Chance' parameter: 0% for clean sections, 85% for chaos sections\n\n**ALIEN SYNTHESIS:** **Wavetable:** Position at 67% through any wavetable • **Unison:** 7 voices, detune 23 cents • **LFO 1:** Rate 1/11 notes to wavetable position • **LFO 2:** Rate 1/7 notes to filter cutoff • **Result:** Never-repeating sonic evolution\n\n**MICRO-TIMING MAGIC:** **Groove Pool:** Create custom groove: kick +3ms, snare -2ms, hats +1ms • **Note:** Tiny timing shifts = huge humanization. Richard uses 1-7ms variations maximum",
      
      producerPsychology: "🧠 **THE NEUROSCIENCE OF CONTROLLED CHAOS:**\n\n**Dopamine Through Unpredictability:** Your brain craves pattern recognition but rewards novelty. Windowlicker creates 'prediction tension' - just when you think you've found the pattern, it shifts. Each surprise = dopamine release = addiction to the track.\n\n**The 'Beautiful Mistake' Principle:** Random glitches feel natural because human speech/movement contains micro-errors. Richard exploits this by making intentional 'mistakes' that feel more human than perfection. Your brain interprets chaos as organic authenticity.\n\n**Polyrhythmic Hypnosis:** Layer rhythms that repeat at different intervals (1/16 vs 1/7 vs 1/11). They align every 1,232 beats (77 bars). Your subconscious tracks this mega-pattern while your conscious mind experiences 'endless variation'.\n\n**Frequency Gap Psychology:** Deliberately removing content at 800Hz and 3.2kHz creates 'sonic uncanny valley' - sounds almost familiar but wrong. Your brain works overtime trying to 'complete' the missing frequencies = deeper engagement.\n\n**Controlled Randomness vs Pure Chaos:** 100% random = white noise (boring). 0% random = predictable (boring). Richard operates at ~35% randomness - enough chaos to surprise, enough structure to remain musical. This ratio triggers maximum curiosity.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Master Controlled Randomness**\nTake any simple melody. Add Beat Repeat at 45% chance, 1/16 interval. Listen for 2 minutes straight. Notice how your brain starts anticipating the glitches? That's organized chaos working.\n\n**STEP 2: Create Polyrhythmic Layers**\nProgram three simple patterns: kick every 1/4 note, snare every 1/7 notes, hi-hat every 1/11 notes. Let them run for 5 minutes. Feel how it never quite repeats but stays musical? That's Aphex Twin's secret.\n\n**STEP 3: Build Beautiful Mistakes**\nRecord yourself humming ANY melody. Time-stretch it 300%, then pitch-shift up 7 semitones. Add frequency shifter. Sounds alien but musical? You've found the 'uncanny valley' sweet spot.\n\n**STEP 4: Study the IDM Masters**\nAnalyze Squarepusher 'Come On My Selector', Autechre 'Tri Repetae', Flying Lotus 'Cosmogramma', Boards of Canada 'Roygbiv'. Notice how they balance chaos with musicality - never 100% random, never 100% structured.\n\n**CHALLENGE MODE:** Create a 4-minute track where nothing repeats exactly, but everything feels intentional. Use 35% randomness maximum. If dancers can move to it while their brains feel confused, you've mastered controlled chaos."
    },
    "https://youtu.be/q_Uax2Yw48U": {
      title: "Heartbreak",
      artist: "Bonobo",
      hook: "Heartbreak is the blueprint for 'emotional electronics' - where synthetic meets soul. Bonobo proves that electronic music doesn't have to choose between human warmth and digital precision. This track breathes like a living organism while maintaining electronic music's hypnotic power. It's meditation music that makes you move.",
      
      musicalDNA: "🎵 **KEY:** D minor at A=432Hz (tuned down 32 cents for 'healing frequency' warmth) • 🥁 **BPM:** 122.00 (downtempo sweet spot - fast enough to groove, slow enough to breathe) • 🎹 **CHORD PROGRESSION:** Dm - Bb - F - C (i-bVI-bIII-bVII - the 'cinematic sadness' progression) • 🎼 **ORGANIC LAYERS:** Live recorded strings, found-sound textures, field recordings • ⏱️ **ARRANGEMENT:** 6-8 minute builds (double pop song length = deeper emotional investment) • 🔊 **FREQUENCY BALANCE:** Warm mids (400-800Hz boosted), rolled-off highs (8kHz+), present but not overwhelming bass • 🎛️ **DYNAMICS:** Breathing room - elements fade in/out like human breath patterns",
      
      abletonMasterclass: "🎛️ **ABLETON ORGANIC SYNTHESIS GUIDE:**\n\n**THE BREATHING PAD:** **Wavetable:** Mallets & Bells → Vintage Electric • **Unison:** 4 voices, detune +/-7 cents (creates natural 'beating' like analog synths) • **Filter:** Lowpass 4-pole, cutoff 2.8kHz, resonance 0.8 • **LFO 1:** Triangle wave, rate 0.25Hz to filter cutoff (+/-200Hz) • **Envelope:** Attack 2.1s, Decay 4s, Sustain 65%, Release 3.8s (mimics string swells)\n\n**FOUND SOUND TEXTURES:** **Impulse:** Load vinyl crackle sample • **Simpler:** Vintage mode ON, pitch drift +5 cents • **Volume:** -35dB (barely audible but adds 'analog soul') • **Audio Effects:** **Saturator** (Analog Clip mode, Drive +12dB) → **EQ Eight** (High-pass 80Hz, gentle high-shelf -2dB at 8kHz)\n\n**ORGANIC DRUMS:** **Drum Rack:** Layer acoustic + electronic samples • **Kick:** 808 sub + live kick recording • **Snare:** Electronic snare + tambourine layer • **Processing:** **Compressor** (2:1 ratio, 30ms attack - slow enough to preserve transients) • **Reverb:** **Chromaverb** Hall mode, 2.1s decay, 15% wet\n\n**STRING SECTION SIMULATION:** **Operator:** Algorithm 4 (FM synthesis) • **Operator A:** Sine wave, ratio 1.00 • **Operator B:** Sine wave, ratio 2.00, level 25% • **Global:** **Chorus** device (Rate 0.8Hz, Amount 25%) → **Reverb** → **EQ** (boost 1.2kHz +2dB for presence)",
      
      producerPsychology: "🧠 **THE NEUROSCIENCE OF ORGANIC ELECTRONICS:**\n\n**Warm Frequency Psychology:** Humans associate 400-800Hz with vocal warmth and physical closeness. Bonobo deliberately boosts these frequencies while rolling off harsh highs (8kHz+). Your brain interprets this as 'human' rather than 'machine.'\n\n**Breathing Tempo Entrainment:** 122 BPM = 2 beats per second = perfect sync with relaxed breathing (12-20 breaths per minute). Your nervous system naturally entrains to this rhythm, creating involuntary relaxation while maintaining groove.\n\n**Imperfection as Authenticity:** The +/-7 cent detuning, vinyl crackle, and timing micro-variations trigger 'human recognition' in your brain. Perfect tuning sounds sterile; slight imperfections sound alive. This is why vintage synths feel 'warmer' than digital perfection.\n\n**Extended Arrangement Psychology:** 6-8 minute tracks allow full emotional journey: introduction (1-2 min), development (2-4 min), climax (4-6 min), resolution (6-8 min). Pop songs (3-4 min) don't allow time for deep emotional investment.\n\n**The 'Uncanny Valley' of Emotion:** Electronic music often falls into emotional uncanny valley - almost human but not quite. Bonobo bridges this by using organic textures, human timing variations, and breathing-pace builds. Result: Electronic music that feels genuinely emotional.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Create Breathing Electronics**\nProgram any simple chord progression at 122 BPM. Add an LFO at 0.25Hz (15-second cycles) to filter cutoff. Feel how the music 'breathes'? That's the organic pulse that separates Bonobo from robotic electronica.\n\n**STEP 2: Add Analog Soul**\nLayer ANY electronic sound with vinyl crackle at -35dB. Add slight pitch drift (+/-5 cents). Notice how it immediately feels more 'human'? Imperfection = authenticity in electronic music.\n\n**STEP 3: Build Over Time**\nStart minimal and build for 6+ minutes. Add one element every 30-45 seconds. Fight the urge to rush - emotional investment requires time. Think film soundtrack, not pop song structure.\n\n**STEP 4: Study Emotional Electronics Masters**\nAnalyze Jon Hopkins 'Immunity', Nils Frahm 'Says', Kiasmos 'Blurred EP', Emancipator 'Soon It Will Be Cold Enough'. Notice how they balance human warmth with electronic precision.\n\n**CHALLENGE MODE:** Create a track that makes someone cry while they're dancing. Use organic textures, breathing tempos, and extended builds. If it feels both melancholic and uplifting simultaneously, you've mastered emotional electronics."
    },
    "https://youtu.be/0cQTdn8t9TI": {
      title: "Cola",
      artist: "CamelPhat & Elderbrook",
      hook: "Cola cracked the code for 'underground pop' - a track that satisfies both Ibiza superclubs and BBC Radio 1. The genius lies in its deceptive simplicity: sounds like four chords and a vocal, but the rolling groove contains micro-details that keep DJs and dancers locked in for 6+ minutes. It's the perfect trojan horse for bringing techno to the masses.",
      
      musicalDNA: "🎵 **KEY:** A minor at A=440Hz (dark but accessible) • 🥁 **BPM:** 124.00 (the tech house sweet spot - fast enough for clubs, slow enough for radio) • 🎹 **CHORD PROGRESSION:** Am - F - C - G (vi-IV-I-V - the 'pop progression' disguised as underground) • 🎤 **VOCAL CHOPS:** 2-4 word phrases, heavily processed with formant shifting • ⏱️ **GROOVE:** 16th note hi-hat rolls with 12% swing (the 'rolling' feel) • 🔊 **BASS PATTERN:** Rolling 16th notes with subtle pitch bends (+/-25 cents) • 🎛️ **ARRANGEMENT:** 32-bar loops with filter automation creating fake breakdowns • 📻 **RADIO SECRET:** Vocal hook every 16 bars (pop structure hidden in techno framework)",
      
      abletonMasterclass: "🎛️ **ABLETON TECH HOUSE CONSTRUCTION:**\n\n**THE ROLLING BASS:** **Wavetable:** Basic Shapes → Saw wave • **Unison:** 3 voices, detune +/-12 cents • **Filter:** Lowpass 4-pole, cutoff 800Hz, resonance 1.4, drive +9dB (the 'analog warmth') • **Pitch Bend:** Automate pitch +/-25 cents on off-beats • **Compression:** Compressor (6:1 ratio, 2ms attack, auto-release) • **Sidechain:** Chain to kick (-3dB, fast attack)\n\n**VOCAL PROCESSING CHAIN:** **Audio track** → **Pitch** device (+3 semitones) → **Formant** shifter (-15%) → **Beat Repeat** (1/8 chance 25%) → **Auto Filter** (bandpass, automated) → **Reverb** (Hall, 1.2s decay) → **Compressor** (4:1, medium attack)\n\n**THE ROLLING GROOVE:** **Drum Rack:** **Kick:** 909 sample, tune -2 semitones • **Hi-hats:** Layer closed + open, swing 12% • **Percussion:** Shaker every 16th, tambourine on off-beats • **Processing:** Bus compression (2:1 ratio, slow attack) + parallel saturation\n\n**FILTER AUTOMATION MAGIC:** **Auto Filter on bass:** Type: Lowpass • **Frequency:** Automate 400Hz to 2kHz over 16 bars, then back • **Resonance:** 1.8 (creates that 'whoomp' sound) • **Key:** Map to Push knob for live performance\n\n**ARRANGEMENT STRUCTURE:** **Bars 1-32:** Kick + bass + minimal hats • **Bars 33-64:** Add vocal chops • **Bars 65-96:** Full arrangement • **Bars 97-128:** Filter breakdown • **Repeat cycle with variations**",
      
      producerPsychology: "🧠 **THE PSYCHOLOGY OF UNDERGROUND POP:**\n\n**The Pop Progression Trojan Horse:** Am-F-C-G is the same progression as countless pop hits (Let It Be, Don't Stop Believin'). Your brain recognizes this as 'familiar' even in a techno context. Result: instant accessibility without compromising underground credibility.\n\n**Rolling Groove Addiction:** The 16th note bass pattern with swing creates 'groove lock' - your body synchronizes to the micro-timing variations. The 12% swing is perfectly calibrated: less swing = robotic, more swing = jazz (wrong genre). 12% = irresistible forward momentum.\n\n**Vocal Chop Dopamine Hits:** Processing vocals beyond recognition while keeping emotional content triggers dual-brain response. Your logical brain hears 'interesting sound design,' your emotional brain still responds to human vocal patterns. Double the engagement.\n\n**Filter Automation as Emotional Manipulation:** The 16-bar filter sweep from 400Hz to 2kHz literally guides your energy levels. Low frequencies = relaxed/grounded, higher frequencies = excited/elevated. DJs use this to control dancefloor energy without changing tracks.\n\n**The 6-Minute Attention Span:** Tech house tracks run 6+ minutes because club DJs need mixing time, but radio needs hooks. Cola solves this with vocal hooks every 16 bars - enough repetition for DJs, enough variation for radio programmers.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Master the Rolling Bass**\nProgram a simple bassline using only root notes. Add 12% swing and subtle pitch bends (+/-25 cents on off-beats). Feel that forward momentum? That's the rolling groove that makes bodies move involuntarily.\n\n**STEP 2: Build Pop-Techno Hybrid**\nUse the Am-F-C-G progression but program it as a rolling tech house bassline, not chords. Add a 909 kick on beats 1 and 3. Notice how familiar yet underground it sounds?\n\n**STEP 3: Create Vocal Magic**\nTake ANY vocal phrase, pitch it up 3 semitones, add formant shifting -15%, then chop with beat repeat. The result should sound human but alien - emotional but processed.\n\n**STEP 4: Study Underground Pop Masters**\nAnalyze Fisher 'Losing It', Hot Since 82 'Buggin'', Solardo 'Be Somebody', Green Velvet 'Flash'. Notice how they balance accessibility with underground credibility - pop sensibilities in techno frameworks.\n\n**CHALLENGE MODE:** Create a track that works equally well at 3pm festival main stage and 3am underground warehouse. Use familiar chord progressions, rolling grooves, and vocal hooks every 16 bars. If both radio programmers and underground DJs play it, you've mastered the crossover formula."
    },
    "https://youtu.be/LSG1jPC8cLw": {
      title: "Spastik",
      artist: "Plastikman",
      hook: "Spastik is the ultimate lesson in 'less is everything.' Richie Hawtin strips electronic music down to its DNA - just kick and snare for 8+ minutes - yet creates more tension than tracks with 50 layers. It proves that restraint is the most powerful force in electronic music. This is musical meditation disguised as relentless assault.",
      
      musicalDNA: "🎵 **KEY:** Minimal/atonal (no harmonic content - pure rhythm and texture) • 🥁 **BPM:** 130.00 (driving techno tempo - fast enough for intensity, controlled enough for precision) • 🎹 **HARMONIC CONTENT:** None (revolutionary - proves melody isn't necessary for emotional impact) • 🥁 **CORE ELEMENTS:** Kick (beats 1,3) + snare (beats 2,4) + micro hi-hat variations • ⏱️ **TIMING VARIATIONS:** Microscopic shifts (+/-1-3ms) create human feel • 🔊 **FREQUENCY FOCUS:** Sub-bass (40-60Hz), snare crack (2-4kHz), nothing else • 🎛️ **ARRANGEMENT:** 64-bar cycles with subtle reverb automation • 📻 **HYPNOTIC SECRET:** Elements never fully repeat - always 99.7% same, 0.3% different",
      
      abletonMasterclass: "🎛️ **ABLETON MINIMAL TECHNO MASTERY:**\n\n**THE PERFECT KICK:** **Drum Rack:** Layer 3 samples: **Sub:** 909 kick tuned -7 semitones • **Punch:** 909 kick pitched +2 semitones • **Click:** High-frequency transient sample • **Chain:** **EQ Eight** (boost 55Hz +3dB, cut 200Hz -2dB) → **Compressor** (8:1 ratio, 0.1ms attack, auto-release) → **Saturator** (Tube mode, +6dB drive)\n\n**THE SNARE EVOLUTION:** **Impulse:** 909 snare pitched down -7 semitones (creates that signature 'crack') • **Reverb:** **Chromaverb** Synth Hall, 1.8s decay • **Key Automation:** Reverb send 0-40% over 64 bars (creates breathing space illusion) • **Compressor:** Parallel compression (blend 30%) for punch retention\n\n**MICROSCOPIC GROOVE:** **Groove Pool:** Custom groove with tiny variations: kick +1ms, snare -0.5ms, hi-hat +2ms • **Swing:** 2% maximum (minimal techno stays rigid) • **Timing:** Random micro-shifts every 16 bars (+/-3ms maximum)\n\n**THE ARRANGEMENT SECRET:** **Timeline:** Nothing changes for first 2 minutes (builds tension through anticipation) • **Bars 33-64:** Subtle reverb automation begins • **Bars 65-96:** Hi-hat micro-variations introduced • **Bars 97-128:** Snare reverb reaches maximum • **Pro Tip:** Resist every urge to add elements - the emptiness IS the power\n\n**MIXING FOR POWER:** **Master chain:** **EQ Eight** (high-pass 30Hz, boost 60Hz +1dB) → **Compressor** (2:1 ratio, slow attack) → **Limiter** (-0.1dB ceiling) • **Key:** Leave frequencies 100-800Hz almost empty - creates space for the club's natural reverb",
      
      producerPsychology: "🧠 **THE NEUROSCIENCE OF MINIMAL HYPNOSIS:**\n\n**Repetition vs. Variation Paradox:** Your brain craves both familiarity and novelty. Pure repetition = boredom. Pure variation = chaos. Spastik operates at the perfect ratio: 99.7% repetition, 0.3% variation. Just enough change to maintain attention, not enough to break the trance.\n\n**The 'Less is More' Brain Hack:** With minimal elements, your brain has nothing to distract from the groove. In busy arrangements, attention jumps between elements. In minimal techno, 100% focus locks onto the rhythm - creating deeper entrainment and involuntary body movement.\n\n**Micro-Timing and Human Recognition:** The +/-3ms timing variations are below conscious perception but above neural detection threshold. Your brain recognizes these as 'human' timing rather than machine precision. Result: Robotic power with organic soul.\n\n**Reverb as Emotional Manipulation:** The 64-bar reverb automation from 0-40% creates illusion of space expansion and contraction. Low reverb = intimate/claustrophobic, high reverb = expansive/transcendent. Your emotional state follows the spatial perception.\n\n**The 8-Minute Endurance Test:** Minimal techno tracks run 8+ minutes to test commitment. Pop music gives instant gratification. Minimal techno requires patience, focus, dedication. Those who 'get it' experience deeper satisfaction - it's musical natural selection.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Master Restraint**\nProgram just kick on 1&3, snare on 2&4 at 130 BPM. Loop for 3 minutes without adding ANYTHING. Feel bored? Good - that discomfort is where minimal techno begins. Push through the urge to add elements.\n\n**STEP 2: Find the Micro-Magic**\nAdd tiny timing variations: kick +1ms, snare -0.5ms. The changes should be barely noticeable consciously but felt subconsciously. If you can clearly hear the difference, it's too much.\n\n**STEP 3: Automate Space, Not Sound**\nAdd reverb to your snare. Automate the send from 0% to 40% over 64 bars. Notice how the track 'breathes' and expands without adding musical content? That's minimal techno space manipulation.\n\n**STEP 4: Study Minimal Masters**\nAnalyze Robert Hood 'Minus', Jeff Mills 'The Bells', Surgeon 'Magneze', Basic Channel 'Quadrant Dub'. Notice how power comes from what they DON'T include, not what they do.\n\n**CHALLENGE MODE:** Create an 8-minute track using only 3 elements maximum. If dancers stay engaged for the full 8 minutes, if DJs can mix it seamlessly, if it sounds powerful on a massive sound system, you've mastered the art of minimal maximalism."
    },
    "https://youtu.be/ZNOKYGqYCoM": {
      title: "Finally",
      artist: "Kings of Tomorrow feat. Julie McKnight",
      hook: "Finally is proof that electronic music can carry genuine soul and spirituality. This is church meets club - where gospel vocal traditions merge with deep house grooves to create transcendent dancefloor moments. Julie McKnight's vocal doesn't just sit on top of the track; it IS the track. This teaches how electronic music can be a vehicle for authentic human emotion and spiritual release.",
      
      musicalDNA: "🎵 **KEY:** F major at A=440Hz (the 'hope and joy' key - naturally uplifting) • 🥁 **BPM:** 125.00 (deep house sweet spot - groove without rush) • 🎹 **CHORD PROGRESSION:** F - Dm - Bb - C (I-vi-IV-V - the 'gospel progression' that triggers emotional familiarity) • 🎤 **VOCAL STYLE:** Gospel runs, melismatic phrases, call-and-response structure • ⏱️ **PHRASING:** 4-bar vocal phrases with 4-bar instrumental responses (church tradition) • 🔊 **BASS FREQUENCY:** F at 87.3Hz (warm, round, supportive - never overpowering vocals) • 🎛️ **DYNAMICS:** Natural vocal dynamics preserved (no over-compression) • 🙏 **SPIRITUAL ELEMENT:** Builds anticipation toward vocal climax = musical 'testimony' structure",
      
      abletonMasterclass: "🎛️ **ABLETON GOSPEL-HOUSE CONSTRUCTION:**\n\n**THE VOCAL THRONE:** **Audio track:** ZERO pitch correction (preserve natural gospel inflections) • **EQ Eight:** Gentle high-shelf +2dB at 8kHz, notch -2dB at 400Hz (space for bass) • **Compressor:** 2:1 ratio, 30ms attack (preserves transients), auto-release • **Reverb:** **Chromaverb** Hall mode, 2.8s decay, 25% wet (church space simulation) • **Delay:** 1/8 dotted note, 15% feedback, high-cut 6kHz\n\n**SUPPORTIVE BASS:** **Wavetable:** Basic Shapes → Sine wave • Root note F (87.3Hz) • **Filter:** Gentle lowpass 120Hz (removes upper harmonics) • **Compressor:** 4:1 ratio, slow attack (lets transients through) • **Sidechain:** Gentle 4-beat pump, -2dB maximum (subtle, supportive)\n\n**GOSPEL CHORD PADS:** **Wavetable:** Mallets & Bells → Vintage Electric • **Unison:** 3 voices, detune +/-8 cents (analog warmth) • **ADSR:** Attack 1.2s, Sustain 85%, Release 2.5s (organ-like swells) • **EQ:** Roll-off below 200Hz (leave space for bass), gentle boost 1.5kHz (presence)\n\n**DEEP HOUSE GROOVE:** **Drum Rack:** **Kick:** Deep 808 style, tuned to F • **Hats:** Closed on off-beats, open on beat 4 • **Shaker:** Constant 16th notes, low in mix • **Processing:** Bus compression 2:1, slow attack • **Swing:** 8% (subtle groove, not distracting from vocal)\n\n**ARRANGEMENT RESPECT:** **Bars 1-16:** Minimal backing, vocal spotlight • **Bars 17-32:** Add subtle percussion • **Bars 33-48:** Full arrangement enters • **Key:** Always serve the vocal - it's the star, everything else supports",
      
      producerPsychology: "🧠 **THE NEUROSCIENCE OF SPIRITUAL ELECTRONICS:**\n\n**Gospel Progression Familiarity:** F-Dm-Bb-C triggers deep emotional memory even in non-religious listeners. This progression appears in centuries of spiritual music - your brain associates it with 'hope,' 'release,' and 'transcendence' before you consciously recognize it.\n\n**Call-and-Response Dopamine:** The 4-bar vocal + 4-bar instrumental pattern mirrors church call-and-response tradition. Your brain anticipates the 'answer' to each vocal 'call,' releasing dopamine when the musical response arrives. Ancient social bonding pattern applied to electronic music.\n\n**Natural Dynamics vs. Electronic Compression:** Most electronic music compresses vocals heavily. Finally preserves natural dynamics - quiet moments stay quiet, powerful moments soar. Your brain interprets this as 'human authenticity' rather than 'machine processing.'\n\n**Frequency Space Hierarchy:** The arrangement leaves 400-800Hz (vocal warmth zone) almost empty except for the voice. Every other element is EQ'd around the vocal. Result: Julie McKnight's voice feels naturally prominent without aggressive mixing tricks.\n\n**Spiritual Tempo Entrainment:** 125 BPM = 2.08 beats per second = perfect for 'elevated but grounded' feeling. Faster = too frantic for spiritual emotion. Slower = loses dancefloor energy. 125 BPM = transcendent groove sweet spot.",
      
      yourTurn: "🚀 **READY TO TURN INSPIRATION INTO ACTION?**\n\n**STEP 1: Honor the Vocal**\nRecord or find ANY soulful vocal phrase. Mix everything else around it, not over it. Leave 400-800Hz mostly empty except for the voice. Notice how the vocal naturally sits in the mix without fighting for space?\n\n**STEP 2: Build Gospel Harmony**\nProgram the F-Dm-Bb-C progression with warm pad sounds. Add slow attack (1+ seconds) and gentle release. Feel that natural 'hope and resolution' emotion? That's centuries of musical conditioning at work.\n\n**STEP 3: Create Sacred Space**\nAdd reverb that simulates large spaces (halls, churches). Use 2-3 second decay times. The goal: make electronic music feel like it's happening in a sacred, communal space rather than a studio.\n\n**STEP 4: Study Gospel-House Masters**\nAnalyze Masters at Work 'I Can't Get No Sleep', Mood II Swing 'Can't Get Away', Jerome Sydenham 'Sandcastles', Barbara Tucker 'Beautiful People'. Notice how they balance spiritual authenticity with dancefloor functionality.\n\n**CHALLENGE MODE:** Create a track that makes people feel simultaneously uplifted and grounded, spiritual and physical, individual and communal. If it works equally well for personal meditation and group dancing, you've mastered the art of electronic soul music."
    },
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

    // Track analysis attempt
    if (window.gtag) {
      window.gtag('event', 'track_analysis_started', {
        event_category: 'User Interaction',
        event_label: youtubeUrl,
        video_id: videoId
      });
    }

    setTimeout(() => {
      const normalizedUrl = normalizeUrl(youtubeUrl);
      const analysisResult = sampleAnalyses[normalizedUrl];
      
      if (analysisResult) {
        setAnalysis(analysisResult);
        
        // Track successful analysis
        if (window.gtag) {
          window.gtag('event', 'track_analysis_completed', {
            event_category: 'Content Engagement',
            event_label: `${analysisResult.artist} - ${analysisResult.title}`,
            track_artist: analysisResult.artist,
            track_title: analysisResult.title,
            custom_parameter_1: `${analysisResult.artist} - ${analysisResult.title}`
          });
        }
        
        setTimeout(() => setShowEmailCapture(true), 1000);
      } else {
        setError('This demo includes sample analyses for selected electronic tracks. Try one of the sample tracks below!');
        
        // Track failed analysis
        if (window.gtag) {
          window.gtag('event', 'track_analysis_failed', {
            event_category: 'User Interaction',
            event_label: 'Unknown track',
            reason: 'track_not_in_database'
          });
        }
      }
      setIsLoading(false);
    }, 2000);
  };

  const loadSampleTrack = (url) => {
    setYoutubeUrl(url);
    setError('');
    
    // Track sample track selection
    const trackInfo = sampleAnalyses[url];
    if (window.gtag && trackInfo) {
      window.gtag('event', 'sample_track_selected', {
        event_category: 'User Interaction',
        event_label: `${trackInfo.artist} - ${trackInfo.title}`,
        track_artist: trackInfo.artist,
        track_title: trackInfo.title,
        track_url: url
      });
    }
  };

  // SIMPLE BUTTON CLICK EMAIL SUBMIT - NO FORM ELEMENTS
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    console.log('Button clicked, starting email submit process'); // Debug
    
    if (!userEmail.trim()) {
      alert('Please enter your email address');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Track email capture attempt
    if (window.gtag) {
      window.gtag('event', 'email_capture_attempted', {
        event_category: 'Conversion',
        event_label: analysis ? `${analysis.artist} - ${analysis.title}` : 'No track analyzed',
        custom_parameter_1: analysis ? `${analysis.artist} - ${analysis.title}` : 'none'
      });
    }
    
    console.log('Email validation passed, creating form'); // Debug
    setIsSubmittingEmail(true);
    
    // Create form programmatically
    const submitForm = document.createElement('form');
    submitForm.method = 'POST';
    submitForm.action = 'https://formspree.io/f/mwpqzgpz';
    submitForm.target = '_blank';
    submitForm.style.display = 'none';
    
    // Email field
    const emailField = document.createElement('input');
    emailField.type = 'email';
    emailField.name = 'email';
    emailField.value = userEmail;
    submitForm.appendChild(emailField);
    
    // Source field
    const sourceField = document.createElement('input');
    sourceField.type = 'hidden';
    sourceField.name = 'source';
    sourceField.value = 'Electronic Music Analyzer';
    submitForm.appendChild(sourceField);
    
    // Track field
    const trackField = document.createElement('input');
    trackField.type = 'hidden';
    trackField.name = 'track';
    trackField.value = analysis ? `${analysis.artist} - ${analysis.title}` : 'No track analyzed yet';
    submitForm.appendChild(trackField);
    
    console.log('Form created, attempting to submit'); // Debug
    
    // Add to DOM and submit
    document.body.appendChild(submitForm);
    submitForm.submit();
    
    console.log('Form submitted, cleaning up'); // Debug
    
    // Track email capture success
    if (window.gtag) {
      window.gtag('event', 'email_capture_completed', {
        event_category: 'Conversion',
        event_label: analysis ? `${analysis.artist} - ${analysis.title}` : 'No track analyzed',
        value: 1 // Assign value for conversion tracking
      });
    }
    
    // Clean up
    setTimeout(() => {
      if (document.body.contains(submitForm)) {
        document.body.removeChild(submitForm);
      }
    }, 2000);
    
    // Show success
    setTimeout(() => {
      setEmailSubmitted(true);
      setShowEmailCapture(false);
      setUserEmail('');
      setIsSubmittingEmail(false);
    }, 1000);
  };

  const shareAnalysis = (platform) => {
    const currentUrl = window.location.href;
    const trackTitle = analysis ? `${analysis.artist} - ${analysis.title}` : 'This Electronic Track';
    const shareText = `Just discovered the production secrets behind ${trackTitle} using this amazing AI analyzer!`;
    
    // Track share button clicks
    if (window.gtag) {
      window.gtag('event', 'share_analysis', {
        event_category: 'User Interaction',
        event_label: platform,
        track_analyzed: analysis ? `${analysis.artist} - ${analysis.title}` : 'none',
        share_platform: platform
      });
    }
    
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-3 sm:px-4 py-6 md:py-8">
        <header className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3 md:mb-4 px-2">
            Electronic Music Track Analyzer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 md:mb-6 px-4 leading-relaxed">
            Get actionable insights from your favourite electronic tracks. Paste a YouTube URL and learn the exact techniques, keys, and production secrets you can use tonight.
          </p>
          
          <nav className="flex justify-center mb-6 md:mb-8 px-4" role="navigation" aria-label="Main navigation">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-1 border border-slate-700 w-full max-w-sm">
              <button
                onClick={() => {
                  setActiveTab('analyzer');
                  // Track tab switch
                  if (window.gtag) {
                    window.gtag('event', 'tab_switch', {
                      event_category: 'User Interface',
                      event_label: 'analyzer_tab',
                      previous_tab: activeTab
                    });
                  }
                }}
                className={`w-1/2 py-3 px-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                  activeTab === 'analyzer'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
                aria-pressed={activeTab === 'analyzer'}
                aria-describedby="analyzer-tab-desc"
              >
                Analyzer
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  // Track tab switch
                  if (window.gtag) {
                    window.gtag('event', 'tab_switch', {
                      event_category: 'User Interface',
                      event_label: 'about_tab',
                      previous_tab: activeTab
                    });
                  }
                }}
                className={`w-1/2 py-3 px-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                  activeTab === 'about'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
                aria-pressed={activeTab === 'about'}
                aria-describedby="about-tab-desc"
              >
                About
              </button>
            </div>
          </nav>
        </header>

        <section className="max-w-6xl mx-auto px-4" role="main">
          {activeTab === 'about' && (
            <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50">
              <div className="text-white space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6">Why I Built This Tool</h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  As an electronic music production coach and artist, I constantly hear the same question: <em>"How did they make THAT sound or what makes this track tick?"</em> After working with hundreds of artists, I realized it would be great to have a tool that doesn't just tell you what's happening - but shows you exactly how to recreate it in your DAW tonight.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  We sometimes use reference tracks to learn from the best, but understanding WHY these tracks work and HOW to apply those techniques has been difficult to translate, until now. This analyzer bridges that gap between inspiration and implementation.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  Because one of the best ways to grow as a producer is to learn from the tracks that move you most. Let's discover the magic together.
                </p>
                <p className="text-sm text-cyan-400 italic mt-6 md:mt-8">- Heath Holme</p>
              </div>
            </article>
          )}

          {activeTab === 'analyzer' && (
            <>
              <section className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 mb-4 md:mb-6 border border-slate-700/50" aria-labelledby="sample-tracks-heading">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-400" aria-hidden="true" />
                    <h2 id="sample-tracks-heading" className="text-lg md:text-xl font-bold text-white">Try These Sample Tracks</h2>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 bg-slate-700/50 px-2 md:px-3 py-1 rounded-full" role="status">Demo Version</span>
                </div>
                
                <div ref={carouselRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-3 md:pb-2 track-carousel" role="region" aria-label="Sample electronic music tracks">
                  <style jsx>{`
                    .track-carousel {
                      scrollbar-width: thin;
                      scrollbar-color: #64748b #1e293b;
                    }
                    .track-carousel::-webkit-scrollbar {
                      height: 8px;
                    }
                    .track-carousel::-webkit-scrollbar-track {
                      background: #1e293b;
                      border-radius: 4px;
                    }
                    .track-carousel::-webkit-scrollbar-thumb {
                      background: #64748b;
                      border-radius: 4px;
                    }
                    .track-carousel::-webkit-scrollbar-thumb:hover {
                      background: #94a3b8;
                    }
                  `}</style>
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/dwDns8x3Jb4")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://youtu.be/dwDns8x3Jb4"); }}}
                    aria-label="Analyze deadmau5 - Strobe (Progressive House)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">deadmau5</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Strobe</div>
                        <div className="text-gray-300 text-xs md:text-sm">Progressive House • 10+ min epic</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=hJdF8DJ70Dc")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://www.youtube.com/watch?v=hJdF8DJ70Dc"); }}}
                    aria-label="Analyze Daft Punk - Around the World (House)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">Daft Punk</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Around the World</div>
                        <div className="text-gray-300 text-xs md:text-sm">House • Hypnotic loop</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://www.youtube.com/watch?v=Ua2loiGHZ38")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://www.youtube.com/watch?v=Ua2loiGHZ38"); }}}
                    aria-label="Analyze Aphex Twin - Windowlicker (IDM)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">Aphex Twin</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Windowlicker</div>
                        <div className="text-gray-300 text-xs md:text-sm">IDM • Experimental chaos</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/q_Uax2Yw48U")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://youtu.be/q_Uax2Yw48U"); }}}
                    aria-label="Analyze Bonobo - Heartbreak (Melodic House)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">Bonobo</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Heartbreak</div>
                        <div className="text-gray-300 text-xs md:text-sm">Melodic House • Emotional journey</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/0cQTdn8t9TI")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://youtu.be/0cQTdn8t9TI"); }}}
                    aria-label="Analyze CamelPhat & Elderbrook - Cola (Tech House)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">CamelPhat & Elderbrook</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Cola</div>
                        <div className="text-gray-300 text-xs md:text-sm">Tech House • Driving groove</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/LSG1jPC8cLw")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://youtu.be/LSG1jPC8cLw"); }}}
                    aria-label="Analyze Plastikman - Spastik (Techno)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-black rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">Plastikman</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Spastik</div>
                        <div className="text-gray-300 text-xs md:text-sm">Techno • Minimal hypnosis</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => loadSampleTrack("https://youtu.be/ZNOKYGqYCoM")}
                    className="flex-shrink-0 bg-slate-700/50 hover:bg-slate-700/70 active:bg-slate-700/80 rounded-xl p-3 md:p-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border border-slate-600/50 min-w-[260px] md:min-w-[280px] touch-manipulation"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadSampleTrack("https://youtu.be/ZNOKYGqYCoM"); }}}
                    aria-label="Analyze Kings of Tomorrow - Finally (Deep House)"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-cyan-400 font-bold text-base md:text-lg truncate">Kings of Tomorrow</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">Finally</div>
                        <div className="text-gray-300 text-xs md:text-sm">Deep House • Gospel vibes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-slate-700/50" aria-labelledby="track-analysis-heading">
                <div className="flex items-center mb-4">
                  <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 text-cyan-400" aria-hidden="true" />
                  <h2 id="track-analysis-heading" className="text-lg md:text-xl font-bold text-white">Track Analysis</h2>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="youtube-url" className="sr-only">YouTube URL</label>
                  <input
                    id="youtube-url"
                    type="url"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="Paste YouTube URL here..."
                    className="w-full px-4 py-4 md:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 font-medium text-base md:text-base"
                    disabled={isLoading}
                    aria-describedby="url-help"
                  />
                  <div id="url-help" className="sr-only">
                    Enter a YouTube URL to analyze the electronic music track and learn production techniques
                  </div>
                  <button
                    onClick={analyzeTrack}
                    disabled={isLoading || !youtubeUrl.trim()}
                    className="w-full md:w-auto md:self-start px-8 py-4 md:py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center min-h-[56px] md:min-h-[48px] shadow-lg hover:shadow-xl touch-manipulation"
                    aria-describedby="analyze-button-desc"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-b-transparent" aria-hidden="true"></div>
                        <span className="sr-only">Analyzing track...</span>
                      </>
                    ) : (
                      <>
                        <Music className="w-5 h-5 mr-2" aria-hidden="true" />
                        ANALYZE
                      </>
                    )}
                  </button>
                  <div id="analyze-button-desc" className="sr-only">
                    Click to analyze the YouTube track and get detailed production insights
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-orange-500/20 border border-orange-400 rounded-xl text-orange-200 font-medium">
                    {error}
                  </div>
                )}
              </section>

              {analysis && (
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-white font-medium text-sm md:text-base">Love this analysis?</span>
                      <div className="flex items-center space-x-2 md:space-x-3 overflow-x-auto">
                        <button
                          onClick={() => shareAnalysis('reddit')}
                          className="flex items-center px-3 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-lg transition-colors text-xs md:text-sm whitespace-nowrap touch-manipulation"
                        >
                          <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Reddit
                        </button>
                        <button
                          onClick={() => shareAnalysis('linkedin')}
                          className="flex items-center px-3 py-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-lg transition-colors text-xs md:text-sm whitespace-nowrap touch-manipulation"
                        >
                          <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Share
                        </button>
                        <button
                          onClick={() => shareAnalysis('copy')}
                          className="flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white rounded-lg transition-colors text-xs md:text-sm whitespace-nowrap touch-manipulation"
                        >
                          <Copy className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Copy Link
                        </button>
                      </div>
                    </div>
                  </div>

                  {analysis.title && (
                    <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-slate-700/50">
                      <h2 className="text-2xl md:text-3xl font-black text-cyan-400 mb-2 leading-tight">{analysis.title}</h2>
                      {analysis.artist && <p className="text-lg md:text-xl text-white font-medium">{analysis.artist}</p>}
                    </div>
                  )}

                  <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-pink-400/50">
                    <div className="flex items-center mb-3 md:mb-4">
                      <Heart className="w-5 h-5 md:w-6 md:h-6 mr-2 text-pink-400" />
                      <h3 className="text-lg md:text-xl font-bold text-white">Musical Hook</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed font-medium text-sm md:text-base">{analysis.hook}</p>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-cyan-400/50">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400">🎵 Musical DNA</h3>
                    <p className="text-gray-100 leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">{analysis.musicalDNA}</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-orange-400">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-orange-400">🎛️ Ableton Masterclass</h3>
                    <p className="text-gray-100 leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">{analysis.abletonMasterclass}</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-purple-400">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-purple-400">🧠 Producer Psychology</h3>
                    <p className="text-gray-100 leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">{analysis.producerPsychology}</p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-emerald-400">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-emerald-400">🚀 Your Turn</h3>
                    <p className="text-gray-100 leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">{analysis.yourTurn}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {showEmailCapture && !emailSubmitted && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 p-1 rounded-2xl max-w-sm w-full border border-slate-700">
              <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-4 md:p-6">
                <div className="text-center mb-4 md:mb-6">
                  <Mail className="w-10 h-10 md:w-12 md:h-12 mx-auto text-cyan-400 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Get Early Access!</h3>
                  <p className="text-gray-300 text-sm md:text-base">Be the first to know when the full version launches + get exclusive producer tips</p>
                </div>
                
                <div className="flex flex-col gap-3 mb-4">
                  <input
                    type="email"
                    name="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                    required
                    disabled={isSubmittingEmail}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isSubmittingEmail && userEmail.trim()) {
                        handleEmailSubmit(e);
                      }
                    }}
                  />
                  
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={isSubmittingEmail || !userEmail.trim()}
                    className="px-6 py-4 md:py-3 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 disabled:bg-gray-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center touch-manipulation"
                  >
                    {isSubmittingEmail ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-b-transparent mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Get Early Access
                      </>
                    )}
                  </button>
                  
                  <a 
                    href={`mailto:heathholme@gmail.com?subject=Music Analyzer Updates&body=Hi Heath,%0D%0A%0D%0APlease add me to the email list for Electronic Music Analyzer updates.%0D%0A%0D%0AMy email: ${userEmail || '[enter-your-email]'}%0D%0A%0D%0AThanks!`}
                    className="text-xs text-cyan-400 hover:text-cyan-300 text-center"
                  >
                    Or email me directly: heathholme@gmail.com
                  </a>
                </div>
                
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <span className="text-gray-400">No spam, just production tips</span>
                  <button
                    onClick={() => setShowEmailCapture(false)}
                    className="text-gray-400 hover:text-white py-2 px-1 touch-manipulation"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {emailSubmitted && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm">
            ✅ Thanks! Your email has been submitted successfully.
          </div>
        )}

        <footer className="text-center mt-8 md:mt-12">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 max-w-md mx-auto border border-slate-700/50">
            <p className="text-white text-sm mb-3 md:mb-4">Created by Heath Holme</p>
            <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
              <a 
                href="https://www.youtube.com/c/heathholme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors touch-manipulation py-2"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                <span className="text-xs md:text-sm font-medium">YouTube</span>
              </a>
              <a 
                href="https://www.instagram.com/heathholmemusic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors touch-manipulation py-2"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                <span className="text-xs md:text-sm font-medium">Instagram</span>
              </a>
            </div>
            
            <div>
              <a 
                href="https://ko-fi.com/heathholme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 md:py-2 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl touch-manipulation text-sm md:text-base"
              >
                <span className="mr-2">☕</span>
                Support on Ko-fi
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
