window.NVC = window.NVC || {};

/* ---------- FEELINGS (based on the CNVC Feelings Inventory) ---------- */
window.NVC.feelings = {
  met: [
    { group: "Affectionate", hue: 340, words: ["compassionate", "friendly", "loving", "open-hearted", "sympathetic", "tender", "warm", "caring", "fond", "close", "connected", "appreciative"] },
    { group: "Engaged", hue: 25, words: ["absorbed", "alert", "curious", "engrossed", "enchanted", "fascinated", "interested", "intrigued", "involved", "spellbound", "stimulated", "focused"] },
    { group: "Hopeful", hue: 160, words: ["expectant", "encouraged", "optimistic", "trusting", "reassured", "heartened", "uplifted", "looking forward", "buoyant", "confident about the future"] },
    { group: "Confident", hue: 210, words: ["empowered", "open", "proud", "safe", "secure", "capable", "self-assured", "steady", "strong", "grounded", "brave"] },
    { group: "Excited", hue: 15, words: ["amazed", "animated", "ardent", "aroused", "astonished", "dazzled", "eager", "energetic", "enthusiastic", "invigorated", "lively", "passionate", "surprised", "vibrant"] },
    { group: "Grateful", hue: 95, words: ["appreciative", "moved", "thankful", "touched", "blessed", "humbled", "glad", "warmed", "fortunate", "full"] },
    { group: "Inspired", hue: 280, words: ["amazed", "awed", "wonder", "inspired", "uplifted", "stirred", "creative", "motivated", "visionary", "reverent"] },
    { group: "Joyful", hue: 45, words: ["amused", "delighted", "glad", "happy", "jubilant", "pleased", "tickled", "cheerful", "elated", "giddy", "playful", "radiant", "overjoyed"] },
    { group: "Exhilarated", hue: 5, words: ["blissful", "ecstatic", "elated", "enthralled", "exuberant", "radiant", "rapturous", "thrilled", "electrified", "on top of the world"] },
    { group: "Peaceful", hue: 185, words: ["calm", "clear-headed", "comfortable", "centred", "content", "equanimous", "fulfilled", "mellow", "quiet", "relaxed", "relieved", "satisfied", "serene", "still", "tranquil", "trusting"] },
    { group: "Refreshed", hue: 130, words: ["enlivened", "rejuvenated", "renewed", "rested", "restored", "revived", "energised", "light", "recharged", "awake"] }
  ],
  unmet: [
    { group: "Afraid", hue: 270, words: ["apprehensive", "dread", "foreboding", "frightened", "mistrustful", "panicked", "petrified", "scared", "suspicious", "terrified", "wary", "worried"] },
    { group: "Annoyed", hue: 20, words: ["aggravated", "dismayed", "disgruntled", "displeased", "exasperated", "frustrated", "impatient", "irritated", "irked", "cranky", "fed up"] },
    { group: "Angry", hue: 0, words: ["enraged", "furious", "incensed", "indignant", "irate", "livid", "outraged", "resentful", "bitter", "seething", "hostile"] },
    { group: "Aversion", hue: 100, words: ["animosity", "appalled", "contempt", "disgusted", "dislike", "hate", "horrified", "hostile", "repulsed", "revolted", "averse"] },
    { group: "Confused", hue: 55, words: ["ambivalent", "baffled", "bewildered", "dazed", "hesitant", "lost", "mystified", "perplexed", "puzzled", "torn", "uncertain", "unsure"] },
    { group: "Disconnected", hue: 220, words: ["alienated", "aloof", "apathetic", "bored", "cold", "detached", "distant", "distracted", "indifferent", "numb", "removed", "uninterested", "withdrawn"] },
    { group: "Disquiet", hue: 35, words: ["agitated", "alarmed", "discombobulated", "disconcerted", "disturbed", "perturbed", "rattled", "restless", "shocked", "startled", "troubled", "turbulent", "uneasy", "unsettled", "upset"] },
    { group: "Embarrassed", hue: 330, words: ["ashamed", "chagrined", "flustered", "guilty", "mortified", "self-conscious", "humiliated", "sheepish", "exposed", "awkward"] },
    { group: "Fatigue", hue: 240, words: ["beat", "burnt out", "depleted", "exhausted", "lethargic", "listless", "sleepy", "tired", "weary", "worn out", "drained", "heavy"] },
    { group: "Pain", hue: 350, words: ["agony", "anguished", "bereaved", "devastated", "grief", "heartbroken", "hurt", "lonely", "miserable", "regretful", "remorseful", "aching"] },
    { group: "Sad", hue: 230, words: ["depressed", "dejected", "despair", "despondent", "disappointed", "discouraged", "disheartened", "forlorn", "gloomy", "heavy-hearted", "hopeless", "melancholy", "unhappy", "wretched"] },
    { group: "Tense", hue: 290, words: ["anxious", "cranky", "distressed", "distraught", "edgy", "fidgety", "frazzled", "irritable", "jittery", "nervous", "overwhelmed", "restless", "stressed out"] },
    { group: "Vulnerable", hue: 300, words: ["fragile", "guarded", "helpless", "insecure", "leery", "reserved", "sensitive", "shaky", "tender", "raw", "exposed"] },
    { group: "Yearning", hue: 260, words: ["envious", "jealous", "longing", "nostalgic", "pining", "wistful", "homesick", "aching for", "missing"] }
  ]
};

/* ---------- NEEDS (based on the CNVC Needs Inventory) ---------- */
window.NVC.needs = [
  { group: "Connection", icon: "🤝", hue: 200, words: ["acceptance", "affection", "appreciation", "belonging", "closeness", "communication", "community", "companionship", "consideration", "empathy", "inclusion", "intimacy", "love", "mutuality", "nurturing", "respect", "support", "to know and be known", "to see and be seen", "trust", "warmth"] },
  { group: "Physical well-being", icon: "🌿", hue: 120, words: ["air", "food", "water", "movement", "exercise", "rest", "sleep", "touch", "shelter", "health", "comfort", "sexual expression", "warmth", "ease"] },
  { group: "Honesty", icon: "💎", hue: 190, words: ["authenticity", "integrity", "presence", "transparency", "truth", "openness", "congruence", "clarity", "directness"] },
  { group: "Play", icon: "🎈", hue: 45, words: ["joy", "humour", "fun", "lightness", "spontaneity", "adventure", "delight", "laughter", "discovery"] },
  { group: "Peace", icon: "🕊️", hue: 170, words: ["beauty", "communion", "ease", "equality", "harmony", "inspiration", "order", "calm", "rest", "simplicity", "space", "tranquillity"] },
  { group: "Autonomy", icon: "🧭", hue: 30, words: ["choice", "freedom", "independence", "space", "spontaneity", "self-determination", "dignity", "agency", "self-expression"] },
  { group: "Meaning", icon: "✨", hue: 280, words: ["awareness", "celebration of life", "challenge", "clarity", "competence", "consciousness", "contribution", "creativity", "discovery", "efficacy", "effectiveness", "hope", "learning", "participation", "purpose", "self-expression", "stimulation", "to matter", "understanding"] },
  { group: "Safety / Security", icon: "🛡️", hue: 220, words: ["safety", "security", "stability", "predictability", "consistency", "protection", "reassurance", "trust", "order", "structure", "emotional safety"] },
  { group: "Celebration & Mourning", icon: "🕯️", hue: 320, words: ["celebration", "mourning", "ritual", "remembrance", "acknowledgement", "marking transitions", "honouring loss", "gratitude", "rejoicing"] },
  { group: "Contribution", icon: "🌱", hue: 100, words: ["contribution", "to give", "to help", "to make a difference", "to enrich life", "usefulness", "generosity", "service", "to be of value"] },
  { group: "Understanding", icon: "💡", hue: 55, words: ["understanding", "to be heard", "to be understood", "clarity", "comprehension", "to understand others", "shared reality", "being seen", "information"] },
  { group: "Growth", icon: "🌻", hue: 75, words: ["growth", "learning", "mastery", "competence", "challenge", "development", "progress", "self-realisation", "healing", "wisdom", "evolving"] }
];

/* ---------- FAUX FEELINGS (thoughts disguised as feelings) ---------- */
window.NVC.fauxFeelings = [
  { word: "abandoned", feelings: ["scared", "lonely", "hurt"], needs: ["connection", "belonging", "support"] },
  { word: "abused", feelings: ["angry", "frightened", "hurt"], needs: ["safety", "care", "respect"] },
  { word: "attacked", feelings: ["scared", "defensive", "angry"], needs: ["safety", "respect", "understanding"] },
  { word: "belittled", feelings: ["hurt", "angry", "embarrassed"], needs: ["respect", "recognition", "dignity"] },
  { word: "betrayed", feelings: ["hurt", "angry", "shocked"], needs: ["trust", "honesty", "reliability"] },
  { word: "blamed", feelings: ["frustrated", "hurt", "defensive"], needs: ["fairness", "understanding", "acknowledgement"] },
  { word: "bullied", feelings: ["scared", "powerless", "angry"], needs: ["safety", "respect", "protection"] },
  { word: "cheated", feelings: ["angry", "disappointed", "resentful"], needs: ["fairness", "honesty", "trust"] },
  { word: "cornered", feelings: ["anxious", "panicked", "tense"], needs: ["choice", "space", "autonomy"] },
  { word: "criticised", feelings: ["hurt", "embarrassed", "discouraged"], needs: ["appreciation", "understanding", "acceptance"] },
  { word: "dismissed", feelings: ["frustrated", "hurt", "discouraged"], needs: ["to be heard", "respect", "consideration"] },
  { word: "disrespected", feelings: ["angry", "hurt", "indignant"], needs: ["respect", "dignity", "consideration"] },
  { word: "ignored", feelings: ["lonely", "hurt", "sad"], needs: ["to be seen", "connection", "inclusion"] },
  { word: "insulted", feelings: ["angry", "hurt", "embarrassed"], needs: ["respect", "dignity", "consideration"] },
  { word: "interrupted", feelings: ["irritated", "frustrated", "impatient"], needs: ["to be heard", "respect", "consideration"] },
  { word: "intimidated", feelings: ["scared", "nervous", "uneasy"], needs: ["safety", "equality", "empowerment"] },
  { word: "invisible", feelings: ["lonely", "sad", "discouraged"], needs: ["to be seen", "recognition", "belonging"] },
  { word: "judged", feelings: ["hurt", "anxious", "defensive"], needs: ["acceptance", "understanding", "respect"] },
  { word: "left out", feelings: ["lonely", "sad", "hurt"], needs: ["inclusion", "belonging", "connection"] },
  { word: "let down", feelings: ["disappointed", "sad", "frustrated"], needs: ["reliability", "trust", "support"] },
  { word: "manipulated", feelings: ["angry", "suspicious", "powerless"], needs: ["autonomy", "honesty", "trust"] },
  { word: "misunderstood", feelings: ["frustrated", "lonely", "confused"], needs: ["understanding", "to be heard", "clarity"] },
  { word: "neglected", feelings: ["lonely", "sad", "hurt"], needs: ["care", "attention", "connection"] },
  { word: "overworked", feelings: ["exhausted", "resentful", "overwhelmed"], needs: ["rest", "balance", "consideration"] },
  { word: "patronised", feelings: ["irritated", "resentful", "hurt"], needs: ["respect", "equality", "recognition of competence"] },
  { word: "pressured", feelings: ["anxious", "tense", "resentful"], needs: ["choice", "autonomy", "ease"] },
  { word: "provoked", feelings: ["angry", "irritated", "agitated"], needs: ["respect", "peace", "consideration"] },
  { word: "put down", feelings: ["hurt", "embarrassed", "angry"], needs: ["respect", "dignity", "acceptance"] },
  { word: "rejected", feelings: ["hurt", "sad", "lonely"], needs: ["acceptance", "belonging", "love"] },
  { word: "smothered", feelings: ["frustrated", "restless", "suffocated"], needs: ["space", "autonomy", "freedom"] },
  { word: "taken for granted", feelings: ["sad", "resentful", "tired"], needs: ["appreciation", "acknowledgement", "mutuality"] },
  { word: "threatened", feelings: ["scared", "alarmed", "anxious"], needs: ["safety", "security", "protection"] },
  { word: "trapped", feelings: ["desperate", "anxious", "frustrated"], needs: ["freedom", "choice", "autonomy"] },
  { word: "unappreciated", feelings: ["sad", "discouraged", "resentful"], needs: ["appreciation", "recognition", "acknowledgement"] },
  { word: "unheard", feelings: ["frustrated", "sad", "lonely"], needs: ["to be heard", "understanding", "respect"] },
  { word: "unloved", feelings: ["sad", "lonely", "hurt"], needs: ["love", "affection", "belonging"] },
  { word: "unsupported", feelings: ["overwhelmed", "discouraged", "lonely"], needs: ["support", "help", "partnership"] },
  { word: "unwanted", feelings: ["sad", "lonely", "hurt"], needs: ["belonging", "acceptance", "love"] },
  { word: "used", feelings: ["angry", "hurt", "resentful"], needs: ["mutuality", "respect", "consideration"] },
  { word: "violated", feelings: ["shocked", "angry", "scared"], needs: ["safety", "respect", "autonomy"] }
];

/* ---------- JACKAL WORDS (signals of evaluation or demand) ---------- */
window.NVC.jackalWords = [
  { w: "always", kind: "generalisation", hint: "Name a specific time: “On Monday and Thursday…”" },
  { w: "never", kind: "generalisation", hint: "Describe one concrete instance instead." },
  { w: "constantly", kind: "generalisation", hint: "Count it: “three times this week…”" },
  { w: "every time", kind: "generalisation", hint: "Pick one recent moment you can describe." },
  { w: "again", kind: "generalisation", hint: "Say what happened this time, without the history." },
  { w: "as usual", kind: "generalisation", hint: "Drop it and describe today’s event." },
  { w: "typical", kind: "generalisation", hint: "Describe the action, not the pattern you see." },
  { w: "everyone", kind: "generalisation", hint: "Who exactly? Name the people or speak for yourself." },
  { w: "nobody", kind: "generalisation", hint: "Say what you noticed and who was involved." },
  { w: "all the time", kind: "generalisation", hint: "Replace with when and how often." },
  { w: "lazy", kind: "label", hint: "What did you see? “The dishes were in the sink at 10pm.”" },
  { w: "rude", kind: "label", hint: "Describe the words or action that bothered you." },
  { w: "selfish", kind: "label", hint: "Name the action, then your need for consideration." },
  { w: "stupid", kind: "label", hint: "Express your frustration and the need behind it." },
  { w: "disrespectful", kind: "label", hint: "Quote what was said or done; name your need for respect." },
  { w: "immature", kind: "label", hint: "Describe the behaviour and what you’d like instead." },
  { w: "irresponsible", kind: "label", hint: "Name the agreement and what happened." },
  { w: "crazy", kind: "label", hint: "Try: “I’m confused — can you tell me more?”" },
  { w: "drama", kind: "label", hint: "Guess their feeling and need instead." },
  { w: "overreacting", kind: "judgment", hint: "Try empathy: “You seem really upset — is it about…?”" },
  { w: "too sensitive", kind: "judgment", hint: "Get curious about what matters to them." },
  { w: "annoying", kind: "label", hint: "Own it: “I feel irritated because I need quiet.”" },
  { w: "useless", kind: "label", hint: "Say what you hoped for and what happened." },
  { w: "ungrateful", kind: "label", hint: "Name your need for appreciation directly." },
  { w: "spoiled", kind: "label", hint: "Describe the request or behaviour you saw." },
  { w: "bossy", kind: "label", hint: "Name your need for choice or collaboration." },
  { w: "naughty", kind: "label", hint: "Describe what the child did and what you want them to do." },
  { w: "bad", kind: "judgment", hint: "What specifically did not meet your needs?" },
  { w: "wrong", kind: "judgment", hint: "Share your view as yours: “I see it differently.”" },
  { w: "ridiculous", kind: "judgment", hint: "Try: “I’m having trouble understanding — help me.”" },
  { w: "pathetic", kind: "judgment", hint: "Name your disappointment and the need behind it." },
  { w: "unacceptable", kind: "judgment", hint: "Say what you need and what you’re requesting." },
  { w: "inappropriate", kind: "judgment", hint: "Describe the action and the value it touched." },
  { w: "obviously", kind: "judgment", hint: "Drop it — what’s obvious to you may not be to them." },
  { w: "clearly", kind: "judgment", hint: "Share your interpretation as yours." },
  { w: "should", kind: "demand", hint: "Try “I’d like…” or “Would you be willing to…?”" },
  { w: "shouldn’t", kind: "demand", hint: "Say what you would like instead." },
  { w: "must", kind: "demand", hint: "Connect to the need, then make a request." },
  { w: "have to", kind: "demand", hint: "Try “I choose to… because I value…”" },
  { w: "need you to", kind: "demand", hint: "That’s a strategy — name your need, then ask." },
  { w: "or else", kind: "demand", hint: "Threats invite resistance — share your need instead." },
  { w: "because I said so", kind: "demand", hint: "Share the need behind your request." },
  { w: "do it now", kind: "demand", hint: "Add why it matters and check willingness." },
  { w: "you’d better", kind: "demand", hint: "Make a request they can say yes or no to." },
  { w: "you make me", kind: "blame", hint: "Own it: “I feel… because I need…”" },
  { w: "your fault", kind: "blame", hint: "Shift from blame to what you need now." },
  { w: "fault", kind: "blame", hint: "Look for needs, not culprits." },
  { w: "because of you", kind: "blame", hint: "Connect your feeling to your need, not their action." },
  { w: "you never listen", kind: "blame", hint: "Try: “I’d really like to feel heard — can I share again?”" },
  { w: "look what you did", kind: "blame", hint: "Describe what happened and what you need." },
  { w: "deserve", kind: "deserve", hint: "Drop reward/punishment thinking — what needs are at stake?" },
  { w: "had it coming", kind: "deserve", hint: "Ask what would restore connection and safety." },
  { w: "serves you right", kind: "deserve", hint: "Notice the pain under it; name your need." },
  { w: "earned it", kind: "deserve", hint: "Celebrate the needs met instead of the reward." },
  { w: "like your sister", kind: "comparison", hint: "Speak only about this person and this moment." },
  { w: "why can’t you be like", kind: "comparison", hint: "Say what you’d like, without comparing." },
  { w: "better than", kind: "comparison", hint: "Describe what you value, not who ranks higher." },
  { w: "at your age", kind: "comparison", hint: "Describe the skill you’d like to support." },
  { w: "no choice", kind: "denial", hint: "Find the choice: “I choose to… because…”" },
  { w: "made me do it", kind: "denial", hint: "Own your choice and the need it served." },
  { w: "just following orders", kind: "denial", hint: "Name your own values in the choice." },
  { w: "it’s policy", kind: "denial", hint: "Share the need the policy serves." },
  { w: "can’t", kind: "denial", hint: "Is it “won’t” or “choose not to”? Name the need." },
  { w: "totally", kind: "absolute", hint: "Soften to what actually happened." },
  { w: "completely", kind: "absolute", hint: "Describe the specific part that bothered you." },
  { w: "the worst", kind: "absolute", hint: "Name the feeling the intensity points to." },
  { w: "impossible", kind: "absolute", hint: "Try: “I’m finding this really hard.”" },
  { w: "whatever", kind: "sarcasm", hint: "Name what you’re feeling — maybe hopeless or hurt." },
  { w: "nice going", kind: "sarcasm", hint: "Say directly what you’re disappointed about." },
  { w: "thanks a lot", kind: "sarcasm", hint: "Share your real feeling and need." },
  { w: "oh great", kind: "sarcasm", hint: "Say what you’re actually feeling." },
  { w: "good for you", kind: "sarcasm", hint: "If it stings, name the need it touches." },
  { w: "real mature", kind: "sarcasm", hint: "Describe the behaviour and make a request." },
  { w: "what’s wrong with you", kind: "judgment", hint: "Try: “What’s going on for you?”" }
];

/* ---------- STRATEGY vs NEED ---------- */
window.NVC.strategyVsNeed = [
  { strategy: "I need you to call me every night", needs: ["connection", "reassurance"] },
  { strategy: "I need you to clean your room", needs: ["order", "ease", "cooperation"] },
  { strategy: "I need a new phone", needs: ["connection", "ease", "efficiency"] },
  { strategy: "I need you to stop texting at dinner", needs: ["presence", "connection"] },
  { strategy: "I need my boss to give me a raise", needs: ["recognition", "fairness", "security"] },
  { strategy: "I need you to say sorry", needs: ["acknowledgement", "understanding", "repair"] },
  { strategy: "I need everyone to be quiet", needs: ["peace", "rest", "focus"] },
  { strategy: "I need you to do the dishes tonight", needs: ["support", "rest", "mutuality"] },
  { strategy: "I need a holiday", needs: ["rest", "renewal", "spaciousness"] },
  { strategy: "I need you to agree with me", needs: ["understanding", "to be heard"] },
  { strategy: "I need my kids to listen the first time", needs: ["cooperation", "ease", "respect"] },
  { strategy: "I need you to text me when you arrive", needs: ["safety", "reassurance", "peace of mind"] },
  { strategy: "I need you to come to my game", needs: ["support", "to be seen", "belonging"] },
  { strategy: "I need my team to reply within an hour", needs: ["reliability", "efficiency", "predictability"] },
  { strategy: "I need you to leave me alone", needs: ["space", "rest", "autonomy"] },
  { strategy: "I need my mum to stop giving advice", needs: ["autonomy", "trust", "respect"] },
  { strategy: "I need a bigger house", needs: ["space", "comfort", "order"] },
  { strategy: "I need you to tell me I did well", needs: ["appreciation", "recognition", "reassurance"] },
  { strategy: "I need you to stop shouting", needs: ["safety", "calm", "respect"] },
  { strategy: "I need my partner to plan the weekend", needs: ["support", "shared responsibility", "ease"] },
  { strategy: "I need you to invite me to the meeting", needs: ["inclusion", "participation", "contribution"] },
  { strategy: "I need to win this argument", needs: ["to be understood", "respect", "competence"] },
  { strategy: "I need my neighbour to turn down the music", needs: ["rest", "peace", "consideration"] },
  { strategy: "I need my son to get good grades", needs: ["security", "hope", "contribution to his future"] },
  { strategy: "I need you to put your phone away when I talk", needs: ["to be heard", "connection", "presence"] },
  { strategy: "I need my coworker to stop taking credit", needs: ["recognition", "fairness", "honesty"] },
  { strategy: "I need a coffee right now", needs: ["energy", "comfort", "a pause"] },
  { strategy: "I need my dad to visit more", needs: ["connection", "closeness", "belonging"] },
  { strategy: "I need you to be on time", needs: ["reliability", "consideration", "trust"] },
  { strategy: "I need people to follow the rules", needs: ["fairness", "predictability", "safety"] }
];

/* ---------- TOOLS ---------- */
window.NVC.tools = {
  anger: [
    { step: "Stop and breathe", text: "Pause. Do nothing except breathe — don’t act on the anger yet (Marshall Rosenberg).", example: "I notice my jaw clenching. I take three slow breaths before I speak." },
    { step: "Identify the judgment thoughts", text: "Notice the “should” and blame thoughts that are fuelling the anger.", example: "“She’s so inconsiderate. She should know I hate being kept waiting.”" },
    { step: "Connect with your needs", text: "Translate each judgment into the unmet need underneath it. Anger points to a need that isn’t being met.", example: "Under “inconsiderate” I find a need for respect and for my time to matter." },
    { step: "Express feelings and unmet needs", text: "Say the feelings and needs now that you’re connected to them — often after first offering empathy to the other person.", example: "“When you arrived 40 minutes after we agreed, I felt hurt and frustrated, because I really value my time being respected. Would you tell me what happened?”" }
  ],
  pause: {
    name: "The giraffe pause",
    steps: ["Stop", "Breathe", "Notice feelings", "Find the need"],
    note: "A few seconds between trigger and response. Marshall Rosenberg encouraged pausing to hear the jackal thoughts, then translating them into feelings and needs before speaking."
  },
  breathing: [
    { name: "Box breathing", how: "Breathe in, hold, breathe out and hold again, each for the same count — trace a square with your finger if it helps.", inhale: 4, hold: 4, exhale: 4, ages: "8+ and adults" },
    { name: "4-7-8 breathing", how: "Breathe in quietly through the nose for 4, hold for 7, then exhale fully through the mouth for 8. Start with just four rounds.", inhale: 4, hold: 7, exhale: 8, ages: "Teens and adults" },
    { name: "Balloon belly breath", how: "Put a hand on your tummy. Breathe in through your nose and feel your belly fill up like a balloon, then let it slowly go flat as you breathe out.", inhale: 4, hold: 1, exhale: 5, ages: "3+" },
    { name: "Smell the flower, blow the candle", how: "Hold up one finger as a flower and breathe it in slowly through your nose. Then turn it into a candle and blow it out gently and slowly through your mouth.", inhale: 3, hold: 0, exhale: 5, ages: "3+" },
    { name: "Physiological sigh", how: "Take a full breath in through the nose, then a second short sip of air on top. Let it all out in a long, slow exhale through the mouth. Two or three rounds is plenty.", inhale: 3, hold: 0, exhale: 7, ages: "Teens and adults" }
  ],
  selfEmpathyPrompts: [
    "What happened, exactly as a camera would have recorded it?",
    "What am I telling myself about what happened?",
    "Which “shoulds” or judgments are loudest in my head right now?",
    "What am I feeling in my body, and where?",
    "If I name three feelings, which one feels most true?",
    "Which of my needs were not met in that moment?",
    "Which needs was I trying to meet with what I said or did?",
    "If I mourn something here, what is it?",
    "What would I say to a dear friend who felt this way?",
    "What might the other person have been feeling and needing?",
    "What do I want to celebrate or appreciate about myself today?",
    "Is there a request I want to make — of myself or someone else?"
  ],
  requestChecklist: [
    { key: "positive", label: "Positive (what you want, not what you don’t)" },
    { key: "concrete", label: "Concrete and doable (specific action, clear enough to picture)" },
    { key: "present", label: "In the present (something they can agree to now)" },
    { key: "genuine", label: "A genuine request (it’s okay to hear “no”)" },
    { key: "type", label: "Clear whether it’s a connection request (“How is this for you?”) or an action request" }
  ],
  gratitude: {
    steps: [
      "The action: what the person did that contributed to your well-being",
      "The needs: which of your needs were met by it",
      "The feelings: the pleasant feelings you have as a result"
    ],
    examples: [
      "“When you picked up the kids on Tuesday, my need for support was met, and I felt so relieved.”",
      "“Amara, the notes you sent after the meeting helped me feel clear and confident — I value clarity so much.”",
      "“Thank you for listening without fixing last night, Kenji. I felt understood and calmer.”",
      "“When you shared your toy with your brother, I felt happy, because I love seeing kindness in our family.”",
      "“Grandpa, hearing your stories about growing up in Lagos meets my need for belonging. I feel warm and connected.”"
    ]
  },
  conversationPlanner: [
    "What happened — what is the observation, free of judgment?",
    "What am I feeling, and what am I needing?",
    "What might they be feeling and needing?",
    "What outcome would meet both our needs?",
    "What is my opening sentence?",
    "What specific, doable request will I make?",
    "If they say no, what need might their no be protecting — and how will I respond?",
    "How will I take care of myself if I get triggered (pause, breathe, ask for a break)?"
  ],
  pocketCards: [
    { title: "OFNR", lines: ["When I see/hear…", "I feel…", "because I need/value…", "Would you be willing to…?"] },
    { title: "Empathy guesses", lines: ["Are you feeling… ?", "…because you need… ?", "Guess, don’t diagnose.", "Their “no” is a guess away from a need."] },
    { title: "When I’m triggered", lines: ["Stop. Breathe. Giraffe pause.", "Notice the jackal thoughts.", "Find my feeling and need.", "Then choose what to say."] },
    { title: "With toddlers", lines: ["Get low, slow your voice.", "Name the feeling: “You’re so mad!”", "Say what to do, not what not to do.", "Offer two choices you can live with."] },
    { title: "With teens", lines: ["Listen more than you talk.", "Curious, not furious.", "Ask: “What matters to you here?”", "Problem-solve together (Ross Greene)."] },
    { title: "With elders", lines: ["Slow down and make eye contact.", "Honour their dignity and choice.", "Reflect: “It sounds like independence matters.”", "Ask before helping."] },
    { title: "At work", lines: ["State facts, not verdicts.", "Link feelings to needs, not blame.", "Name the shared goal.", "End with a clear, doable request."] },
    { title: "Saying No with NVC", lines: ["Hear their need first.", "Name the need you’re saying yes to.", "“I’m not able to… because I need…”", "Offer another way if you can."] },
    { title: "Receiving “No”", lines: ["A no is a yes to something else.", "Get curious: “What’s stopping you?”", "Guess their need.", "Look for a strategy that meets both."] },
    { title: "Repair after rupture", lines: ["Calm yourself first.", "Own your part without excuses.", "Hear their pain fully.", "Ask: “What would help now?”"] },
    { title: "Gratitude the giraffe way", lines: ["When you… (the action)", "it met my need for…", "and I feel…", "Thank you!"] },
    { title: "De-escalation", lines: ["Lower your voice and body.", "Reflect the feeling, briefly.", "Offer space and time.", "Talk solutions only once calm."] }
  ],
  sayingNo: [
    { request: "Can you cover my shift on Saturday?", no: "I’d like to help, and I’m saying no because I’ve promised that day to my kids and connection with them really matters to me. Could I cover a weekday next week instead?" },
    { request: "Will you join the committee?", no: "Thank you for thinking of me. I’m saying no because I need some rest after a full season, and I want to keep my energy for what I’ve already committed to." },
    { request: "Can I borrow your car this weekend?", no: "I hear you need a way to get there. I’m not comfortable lending it, because I value peace of mind about my car. Could I help you look up the train times?" },
    { request: "Can we stay up late tonight?", no: "You really want more time to play! I’m saying no because I care about your rest for school tomorrow. Let’s plan a late night on Friday." },
    { request: "Could you take on this extra project?", no: "I want to contribute to the team, and I’m saying no right now because I need to protect the quality of the two deadlines I already have. Can we look at priorities together?" },
    { request: "Come out with us tonight!", no: "I love that you invited me. I’m going to say no tonight because I really need some quiet time to recharge. Could we get lunch on Sunday?" }
  ],
  repair: [
    { step: "Regulate first", text: "Calm your own body before reaching out — repair while flooded rarely works.", example: "(Takes a walk, breathes, then returns.) “I’m calmer now. Can we talk?”" },
    { step: "Name the rupture", text: "Describe what happened as an observation.", example: "“Earlier, when you told me about your day, I raised my voice and said you never listen.”" },
    { step: "Take responsibility", text: "Own your part and the impact, without justifying.", example: "“That wasn’t fair to you. I was overwhelmed and took it out on you.”" },
    { step: "Listen with empathy", text: "Invite their experience and reflect their feelings and needs before explaining yours.", example: "“How was that for you? … It sounds like you felt hurt and wanted to be heard.”" },
    { step: "Share your feelings and needs", text: "Once they feel heard, express what was going on for you.", example: "“I was really stressed and needed a few minutes of quiet when I got home.”" },
    { step: "Make a request for the future", text: "Agree together on something concrete that could help next time.", example: "“Next time, could I take ten minutes when I get in, and then we talk?”" }
  ]
};

/* ---------- CONCEPTS ---------- */
window.NVC.concepts = [
  { title: "Observation vs evaluation", icon: "🔍", text: "An observation is what a camera could record; an evaluation adds a judgment. Marshall Rosenberg noted that mixing the two makes people hear criticism." },
  { title: "Feelings vs thoughts", icon: "💓", text: "“I feel that…” or “I feel like you…” usually introduces a thought. Real feelings are emotions or sensations — sad, tense, relieved." },
  { title: "Needs are universal", icon: "🌍", text: "Every human shares the same needs — rest, safety, belonging, meaning. Conflict lives at the level of strategies, not needs." },
  { title: "Requests vs demands", icon: "🙏", text: "A request leaves room for “no”. If “no” is met with blame or punishment, it was a demand — and people tend to submit or rebel." },
  { title: "Empathy", icon: "👂", text: "Being present with someone’s feelings and needs without fixing, advising or comparing. Silent or spoken guesses: “Are you feeling… because you need…?”" },
  { title: "Self-empathy", icon: "🫶", text: "Turning the same compassionate attention inward — noticing your judgments, feelings and needs before you act." },
  { title: "Honest expression", icon: "🗣️", text: "Saying what’s alive in you — observation, feeling, need, request — without blaming or diagnosing the other person." },
  { title: "Protective use of force", icon: "🛑", text: "Rosenberg distinguished force used to protect life or rights (like grabbing a child from the road) from punitive force intended to make someone suffer." },
  { title: "Power-with vs power-over", icon: "⚖️", text: "Power-over gets compliance through fear, reward or guilt. Power-with seeks solutions that meet everyone’s needs, building willingness and trust." },
  { title: "Connection before correction", icon: "🔗", text: "People learn best when they feel safe and connected. Connect to the feeling first, then talk about the behaviour or set the limit." },
  { title: "Enemy images", icon: "👹", text: "When we see someone as the enemy — selfish, cruel, impossible — we can’t hear their needs. Rosenberg suggested translating enemy images into the unmet needs behind them." },
  { title: "Empathy before education", icon: "🤲", text: "When someone is upset, advice and explanations rarely land. Offer empathy first; once they feel heard, they’re more open to new information." },
  { title: "Jackal and giraffe", icon: "🦒", text: "Rosenberg’s puppets: the jackal speaks in judgments and demands; the giraffe — the land animal with the largest heart — speaks from feelings and needs." }
];

/* ---------- THE FOUR COMPONENTS ---------- */
window.NVC.components = [
  {
    key: "o", name: "Observation", icon: "👁️", color: 200,
    short: "What happened, as a camera would record it.",
    long: "Describe the specific action or words without adding judgment, interpretation or generalisation. Clean observations make it easier for the other person to hear you without getting defensive.",
    ask: "Could a video camera have recorded exactly this?",
    traps: ["Using generalisations like “always” and “never”", "Adding labels such as “lazy” or “rude”", "Mind-reading intentions: “You did it to annoy me”"],
    examples: [
      { bad: "You’re always late.", good: "You arrived at 9:20; we agreed on 9:00." },
      { bad: "You never help around the house.", good: "This week I cooked dinner all five nights." },
      { bad: "Your room is a disgusting mess.", good: "There are clothes and three plates on your bedroom floor." },
      { bad: "He ignored me in the meeting.", good: "When I made my suggestion, he started the next agenda item without responding." }
    ]
  },
  {
    key: "f", name: "Feeling", icon: "💓", color: 340,
    short: "The emotion or sensation alive in you.",
    long: "Name the emotion you are experiencing, taking responsibility for it as yours. Avoid words that are really thoughts about what others did to you, like “ignored” or “manipulated”.",
    ask: "What am I actually feeling in my body right now?",
    traps: ["“I feel that…” or “I feel like…” followed by a thought", "Faux feelings that blame: “I feel betrayed”", "Vague words like “bad”, “fine” or “okay”"],
    examples: [
      { bad: "I feel like you don’t care.", good: "I feel sad and lonely." },
      { bad: "I feel ignored.", good: "I feel hurt and discouraged." },
      { bad: "I feel that this is unfair.", good: "I feel frustrated." },
      { bad: "I feel bad about it.", good: "I feel regretful and uneasy." }
    ]
  },
  {
    key: "n", name: "Need", icon: "🌱", color: 120,
    short: "The universal value behind the feeling.",
    long: "Connect your feeling to a universal need, not to the other person’s behaviour. Needs contain no specific person, place, action or time — those are strategies.",
    ask: "What do I value or long for that this situation touches?",
    traps: ["Confusing strategies with needs: “I need you to…”", "Blaming: “I feel angry because you…”", "Skipping the need and jumping straight to the request"],
    examples: [
      { bad: "I feel angry because you shouted.", good: "I feel angry because I need respect and calm." },
      { bad: "I need you to call me.", good: "I need connection and reassurance." },
      { bad: "I need you to stop interrupting.", good: "I need to be heard." },
      { bad: "I need a raise.", good: "I need recognition and financial security." }
    ]
  },
  {
    key: "r", name: "Request", icon: "🙏", color: 45,
    short: "A clear, doable ask — not a demand.",
    long: "Ask for a specific, positive action that could meet your need, right now. A genuine request is open to “no” and treats that “no” as the start of a conversation, not the end.",
    ask: "Would I be okay hearing “no” — and is this specific enough to act on?",
    traps: ["Asking for what you don’t want: “Stop being so negative”", "Vague asks: “Be more respectful”", "Demands dressed up as requests, with blame if refused"],
    examples: [
      { bad: "Stop leaving your stuff everywhere.", good: "Would you be willing to put your shoes on the rack when you come in?" },
      { bad: "Be more respectful.", good: "Would you let me finish my sentence before you reply?" },
      { bad: "You need to communicate better.", good: "Could you text me if you’ll be more than 15 minutes late?" },
      { bad: "Just listen for once!", good: "Would you tell me back what you heard me say?" }
    ]
  }
];
