window.NVC = window.NVC || {};

window.NVC.languages = {
  jackalGiraffe: [
    { jackal: "You’re so lazy.", giraffe: "When I see the laundry still on the floor since Sunday, I feel discouraged because I need help with the housework. Would you put it in the basket now?", pattern: "Moralistic judgment" },
    { jackal: "You’re selfish.", giraffe: "When you took the last slice without asking, I felt disappointed because I value sharing. Could we check with each other next time?", pattern: "Moralistic judgment" },
    { jackal: "That was a stupid idea.", giraffe: "I’m worried this plan might go over budget, because I need financial security. Could we look at the costs together?", pattern: "Moralistic judgment" },
    { jackal: "You’re rude.", giraffe: "When you looked at your phone while I was talking, I felt hurt because I want to be heard. Would you put it down for a few minutes?", pattern: "Moralistic judgment" },
    { jackal: "He’s a bully.", giraffe: "When he pushed Amara at recess, I felt scared because I want every child to be safe.", pattern: "Moralistic judgment" },
    { jackal: "You’re being dramatic.", giraffe: "It sounds like you’re really overwhelmed. Do you need some space to talk it through?", pattern: "Moralistic judgment" },
    { jackal: "Why can’t you be more like your sister?", giraffe: "I notice homework is hard for you to start. I’d love to understand what gets in the way.", pattern: "Comparison" },
    { jackal: "Other teams finish on time — what’s wrong with ours?", giraffe: "We’ve missed the last two deadlines. I’m concerned because I value reliability. What would help us plan better?", pattern: "Comparison" },
    { jackal: "My last partner never did this.", giraffe: "When plans change at the last minute, I feel anxious because I need predictability. Could you let me know a day ahead?", pattern: "Comparison" },
    { jackal: "In my day, kids respected their elders.", giraffe: "When you rolled your eyes, I felt sad because I want respect between us. Can we talk about what’s bothering you?", pattern: "Comparison" },
    { jackal: "I had to — it’s company policy.", giraffe: "I chose to follow the policy because I value keeping my job and treating everyone consistently.", pattern: "Denial of responsibility" },
    { jackal: "You made me angry.", giraffe: "I feel angry because I was telling myself you don’t care, and I need consideration.", pattern: "Denial of responsibility" },
    { jackal: "I couldn’t help it, I was just so stressed.", giraffe: "I yelled because I was stressed and didn’t take a break. I want to handle stress in a way that protects our connection.", pattern: "Denial of responsibility" },
    { jackal: "Everyone else was doing it.", giraffe: "I joined in because I wanted to belong. I’m not happy with that choice now.", pattern: "Denial of responsibility" },
    { jackal: "My boss told me to, so it’s not my fault.", giraffe: "I did it because I was afraid of losing my position, and I want to find another way next time.", pattern: "Denial of responsibility" },
    { jackal: "I have to cook dinner every night.", giraffe: "I choose to cook dinner because I value my family eating healthy meals.", pattern: "Denial of responsibility" },
    { jackal: "Clean your room now, or no phone!", giraffe: "I’d like the room tidy before guests arrive at six. Would you be willing to do it before then?", pattern: "Demand" },
    { jackal: "You must call me every day.", giraffe: "I feel lonely when we don’t talk. Would you be willing to call me three evenings a week?", pattern: "Demand" },
    { jackal: "Apologise right now!", giraffe: "I’m hurting and would love to hear how you feel about what happened. Are you willing to talk about it?", pattern: "Demand" },
    { jackal: "Do it because I said so.", giraffe: "I want you home by ten because I worry about your safety. What would make that work for you?", pattern: "Demand" },
    { jackal: "He deserves to be punished.", giraffe: "I’m upset about what he did and want him to understand the impact. What could help him make it right?", pattern: "Deserve-thinking" },
    { jackal: "She doesn’t deserve a raise.", giraffe: "I’m concerned about the missed targets, and I value fairness. Can we discuss what support she needs?", pattern: "Deserve-thinking" },
    { jackal: "You got what you deserved.", giraffe: "I see you’re hurting. I was frustrated earlier, but I care about how you are now.", pattern: "Deserve-thinking" },
    { jackal: "You should know better.", giraffe: "I’m surprised this happened again because I hoped we had a plan. What made it hard to stick to?", pattern: "Moralistic judgment" },
    { jackal: "You never listen to me.", giraffe: "When you started talking before I finished, I felt frustrated because I want to be understood. Could you let me finish first?", pattern: "Moralistic judgment" },
    { jackal: "You always ruin everything.", giraffe: "When the cake fell, I felt disappointed because I’d hoped it would be special. Can we figure out a plan B together?", pattern: "Moralistic judgment" },
    { jackal: "This is the worst team I’ve ever managed.", giraffe: "I’m stressed about the deadline and want us to work well together. What’s getting in the way for you?", pattern: "Comparison" },
    { jackal: "You’re too sensitive.", giraffe: "It sounds like what I said really hurt. Would you tell me more?", pattern: "Moralistic judgment" },
    { jackal: "Stop crying, you’re fine.", giraffe: "You’re crying; it seems like you’re really sad. I’m here.", pattern: "Demand" },
    { jackal: "Boys don’t cry.", giraffe: "It’s okay to feel sad. What happened?", pattern: "Denial of responsibility" },
    { jackal: "If you loved me, you’d do this.", giraffe: "I’d really appreciate your help because I’m tired. Would you be willing to?", pattern: "Demand" },
    { jackal: "You people are all the same.", giraffe: "I’m frustrated by what just happened and need to feel respected. Can we talk about it?", pattern: "Moralistic judgment" }
  ],

  lifeAlienating: [
    {
      type: "Moralistic judgments",
      description: "Statements that imply wrongness or badness in people who don’t act in harmony with our values, such as labels, insults and diagnoses.",
      examples: ["“You’re lazy.”", "“He’s so arrogant.”", "“That’s inappropriate.”", "“She’s a terrible mother.”"],
      transform: "Separate observation from evaluation, and express the value or need behind the judgment: “I value cooperation, and when…”."
    },
    {
      type: "Comparisons",
      description: "Comparing people to others or to ideals; Rosenberg called comparison a form of judgment that blocks compassion for self and others.",
      examples: ["“Why can’t you be like your brother?”", "“Her house is so much cleaner than ours.”", "“Other kids your age can read already.”"],
      transform: "Look at the person on their own terms: describe what you observe and what you need, without measuring against others."
    },
    {
      type: "Denial of responsibility",
      description: "Language that obscures our choice and responsibility for our own thoughts, feelings and actions, e.g. “have to” and “makes me feel.” Rosenberg named several sub-types below.",
      examples: ["“I had to.”", "“You make me feel guilty.”", "“It’s not my decision.”"],
      transform: "Replace “have to” with “I choose to … because I want/need …”, and “you make me feel” with “I feel … because I need …”."
    },
    {
      type: "Denial of responsibility: vague, impersonal forces",
      description: "Attributing our actions to unnamed outside forces.",
      examples: ["“I cleaned my room because I had to.”", "“It just happened.”", "“Things got out of hand.”"],
      transform: "“I chose to clean my room because I wanted…”."
    },
    {
      type: "Denial of responsibility: our condition, diagnosis or history",
      description: "Attributing our actions to a psychological label, condition or personal history.",
      examples: ["“I drink because I’m an alcoholic.”", "“I can’t focus — I have ADHD.”", "“I’m like this because of how I was raised.”"],
      transform: "Acknowledge the influence while naming the choice and need: “I drink when I want relief from stress.”"
    },
    {
      type: "Denial of responsibility: actions of others",
      description: "Saying someone else caused our actions.",
      examples: ["“I hit my child because he ran into the street.”", "“You made me yell.”", "“She started it.”"],
      transform: "“I hit my child because I was scared and didn’t know another way. I want to find a safer way to protect him.”"
    },
    {
      type: "Denial of responsibility: dictates of authority",
      description: "Saying we acted because someone in authority told us to.",
      examples: ["“I lied to the client because my boss told me to.”", "“The principal said so.”", "“Orders are orders.”"],
      transform: "“I chose to do what my boss said because I was afraid of losing my job.”"
    },
    {
      type: "Denial of responsibility: group pressure",
      description: "Saying we acted because of what others around us were doing.",
      examples: ["“I started smoking because all my friends did.”", "“Everyone was laughing, so I did too.”", "“We all agreed, so I went along.”"],
      transform: "“I started smoking because I wanted to fit in with my friends.”"
    },
    {
      type: "Denial of responsibility: institutional policies, rules and regulations",
      description: "Hiding behind rules as if they act on their own.",
      examples: ["“I have to suspend you; it’s school policy.”", "“Rules are rules.”", "“The system doesn’t allow it.”"],
      transform: "“I’m choosing to follow this policy because I value consistency and fairness.”"
    },
    {
      type: "Denial of responsibility: gender, social or age roles",
      description: "Attributing actions to the role we occupy.",
      examples: ["“I hate going to work, but I do it because I’m a husband and father.”", "“Girls don’t do that.”", "“As the eldest, I have to fix it.”"],
      transform: "“I go to work because I want to support my family.”"
    },
    {
      type: "Denial of responsibility: uncontrollable impulses",
      description: "Claiming we were overcome by urges.",
      examples: ["“I was overcome by my urge to eat the cake.”", "“I just snapped.”", "“I couldn’t stop myself.”"],
      transform: "“I ate the cake because I wanted comfort, and I want to find other ways to get it.”"
    },
    {
      type: "Demands",
      description: "Requests that carry an implied or explicit threat of blame or punishment if not met.",
      examples: ["“Do it now or you’re grounded.”", "“You have to call me back today.”", "“I expect an apology.”"],
      transform: "Make a clear, doable request and be open to “no” — then empathise with what stops the other person from saying yes."
    },
    {
      type: "Deserve-thinking",
      description: "The idea that certain actions merit reward or punishment, which Rosenberg saw as fueling violence.",
      examples: ["“He deserves to be punished.”", "“She doesn’t deserve my help.”", "“They got what was coming to them.”"],
      transform: "Focus on needs and restoration: “What would help everyone’s needs be met and harm be repaired?”"
    }
  ],

  phraseFrames: [
    { lang: "English", english: "English", code: "en", dir: "ltr", frames: { observe: "When I see/hear …", feel: "I feel …", need: "because I need/value …", request: "Would you be willing to …?", empathy: "Are you feeling … because you need …?", gratitude: "Thank you for …; it met my need for …" } },
    { lang: "Español", english: "Spanish", code: "es", dir: "ltr", frames: { observe: "Cuando veo/oigo …", feel: "me siento …", need: "porque necesito/valoro …", request: "¿Estarías dispuesto/a a …?", empathy: "¿Te sientes … porque necesitas …?", gratitude: "Gracias por …; eso satisfizo mi necesidad de …" } },
    { lang: "Français", english: "French", code: "fr", dir: "ltr", frames: { observe: "Quand je vois/j’entends …", feel: "je me sens …", need: "parce que j’ai besoin de … / je tiens à …", request: "Est-ce que tu serais d’accord pour … ?", empathy: "Est-ce que tu te sens … parce que tu as besoin de … ?", gratitude: "Merci pour … ; cela a nourri mon besoin de …" } },
    { lang: "Deutsch", english: "German", code: "de", dir: "ltr", frames: { observe: "Wenn ich sehe/höre, dass …,", feel: "fühle ich mich …", need: "weil ich … brauche / weil mir … wichtig ist", request: "Wärst du bereit, … ?", empathy: "Fühlst du dich …, weil du … brauchst?", gratitude: "Danke für …; das hat mein Bedürfnis nach … erfüllt." } },
    { lang: "Português", english: "Portuguese", code: "pt", dir: "ltr", frames: { observe: "Quando eu vejo/ouço …", feel: "eu me sinto …", need: "porque eu preciso de / valorizo …", request: "Você estaria disposto/a a …?", empathy: "Você está se sentindo … porque precisa de …?", gratitude: "Obrigado/a por …; isso atendeu à minha necessidade de …" } },
    { lang: "Italiano", english: "Italian", code: "it", dir: "ltr", frames: { observe: "Quando vedo/sento …", feel: "mi sento …", need: "perché ho bisogno di … / per me è importante …", request: "Saresti disposto/a a …?", empathy: "Ti senti … perché hai bisogno di …?", gratitude: "Grazie per …; ha soddisfatto il mio bisogno di …" } },
    { lang: "हिन्दी", english: "Hindi", code: "hi", dir: "ltr", frames: { observe: "जब मैं … देखता/देखती या सुनता/सुनती हूँ,", feel: "तो मुझे … महसूस होता है", need: "क्योंकि मुझे … की ज़रूरत है / मैं … को महत्व देता/देती हूँ", request: "क्या आप … करने के लिए तैयार होंगे?", empathy: "क्या आप … महसूस कर रहे हैं क्योंकि आपको … की ज़रूरत है?", gratitude: "… के लिए धन्यवाद; इससे मेरी … की ज़रूरत पूरी हुई।" } },
    { lang: "தமிழ்", english: "Tamil", code: "ta", dir: "ltr", frames: { observe: "நான் … பார்க்கும்போது/கேட்கும்போது,", feel: "நான் … உணர்கிறேன்", need: "ஏனென்றால் எனக்கு … தேவை / நான் … மதிக்கிறேன்", request: "நீங்கள் … செய்யத் தயாராக இருப்பீர்களா?", empathy: "உங்களுக்கு … தேவைப்படுவதால் நீங்கள் … உணர்கிறீர்களா?", gratitude: "… க்கு நன்றி; அது என் … தேவையை நிறைவேற்றியது." } },
    { lang: "Kiswahili", english: "Swahili", code: "sw", dir: "ltr", frames: { observe: "Ninapoona/Ninaposikia …", feel: "ninajisikia …", need: "kwa sababu ninahitaji/ninathamini …", request: "Je, ungekuwa tayari …?", empathy: "Je, unajisikia … kwa sababu unahitaji …?", gratitude: "Asante kwa …; ilitimiza hitaji langu la …" } },
    { lang: "Yorùbá", english: "Yoruba", code: "yo", dir: "ltr", frames: { observe: "Nígbà tí mo bá rí/gbọ́ …", feel: "mo ní ìmọ̀lára …", need: "nítorí pé mo nílò …", request: "Ṣé wàá fẹ́ …?", empathy: "Ṣé o ní ìmọ̀lára … nítorí pé o nílò …?", gratitude: "Ẹ ṣé fún …; ó pèsè ohun tí mo nílò, ìyẹn …" } },
    { lang: "العربية", english: "Arabic", code: "ar", dir: "rtl", frames: { observe: "عندما أرى/أسمع …", feel: "أشعر بـ…", need: "لأنني أحتاج إلى … / أُقدّر …", request: "هل أنت مستعد لـ…؟", empathy: "هل تشعر بـ… لأنك تحتاج إلى …؟", gratitude: "شكرًا لك على …؛ لقد لبّى ذلك حاجتي إلى …" } },
    { lang: "中文", english: "Mandarin Chinese", code: "zh", dir: "ltr", frames: { observe: "当我看到/听到……", feel: "我感到……", need: "因为我需要/看重……", request: "你愿意……吗？", empathy: "你感到……，是因为你需要……吗？", gratitude: "谢谢你……；这满足了我对……的需要。" } },
    { lang: "日本語", english: "Japanese", code: "ja", dir: "ltr", frames: { observe: "…を見ると／聞くと、", feel: "私は…と感じます", need: "なぜなら、私は…を必要としている／大切にしているからです", request: "…してもらえますか？", empathy: "…が必要だから、…と感じているのですか？", gratitude: "…してくれてありがとう。おかげで、私の…というニーズが満たされました。" } },
    { lang: "한국어", english: "Korean", code: "ko", dir: "ltr", frames: { observe: "…을/를 보거나 들을 때,", feel: "저는 …(이)라고 느껴요", need: "왜냐하면 저에게는 …이/가 필요하기 때문이에요 / 저는 …을/를 소중히 여겨요", request: "…해 주실 수 있을까요?", empathy: "…이/가 필요해서 … 느끼시는 건가요?", gratitude: "…해 주셔서 고마워요. 덕분에 …에 대한 제 욕구가 채워졌어요." } }
  ],

  registers: [
    {
      name: "Jackal ears out",
      description: "Rosenberg’s first ear: hearing a hard message as the other person’s fault and blaming them back.",
      examples: ["“Well, you’re the one who’s always late!”", "“Who do you think you are?”", "“That’s ridiculous.”"]
    },
    {
      name: "Jackal ears in",
      description: "Hearing a hard message as proof that something is wrong with you, which leads to guilt, shame or depression.",
      examples: ["“I’m such a failure.”", "“I always mess things up.”", "“They’re right, I’m selfish.”"]
    },
    {
      name: "Giraffe ears in",
      description: "Turning attention to your own feelings and needs when you hear something difficult.",
      examples: ["“I feel hurt because I want to be seen as caring.”", "“I’m anxious; I need reassurance.”", "“I notice I’m tense — I need respect.”"]
    },
    {
      name: "Giraffe ears out",
      description: "Hearing the feelings and needs behind the other person’s words, however they are expressed.",
      examples: ["“Are you frustrated because you need more help?”", "“Sounds like you’re worried about fairness?”", "“Are you tired and wanting rest?”"]
    },
    {
      name: "Body language and nonverbal cues",
      description: "Posture, facial expression, eye contact, gesture, tone and pace carry much of our meaning and can support or contradict our words. Cues vary across cultures, so check your guesses.",
      examples: ["Sitting at eye level with a child to listen", "Uncrossed arms and a relaxed face while hearing criticism", "Slowing your voice and pausing to show you’re not rushing", "Noticing a friend avoids eye contact and gently asking how they are"]
    },
    {
      name: "Love Languages",
      description: "Gary Chapman’s five ways people tend to express and receive love: words of affirmation, quality time, receiving gifts, acts of service and physical touch.",
      examples: ["Leaving a note: “I loved how you handled that call today.”", "A phone-free walk together", "Fixing a parent’s leaky tap without being asked", "A long hug after a hard day"]
    },
    {
      name: "Requests vs demands",
      description: "In NVC, a request is a clear, positive, doable ask where “no” is safe; a demand carries blame or punishment if refused. You can tell which it was by how you respond to “no.”",
      examples: ["Demand: “Clean your room or no screens.” Request: “Would you tidy your room before dinner?”", "Demand: “You need to call me.” Request: “Would you call me Thursday evening?”", "Positive action: “Please walk” instead of “Don’t run.”"]
    },
    {
      name: "Observation vs evaluation",
      description: "Rosenberg drew on Jiddu Krishnamurti’s idea that observing without evaluating is a high form of intelligence. Observations are specific and camera-like; evaluations mix in judgment.",
      examples: ["Evaluation: “You’re always late.” Observation: “You arrived after 9 three times this week.”", "Evaluation: “She’s lazy.” Observation: “She hasn’t handed in the last two essays.”", "Evaluation: “He’s a great cook.” Observation: “He made dinner for twelve people on Sunday.”"]
    },
    {
      name: "Feelings vs thoughts disguised as feelings",
      description: "Words like “abandoned,” “ignored” or “manipulated” describe what we think others did to us rather than our feelings; NVC invites naming the felt emotion instead.",
      examples: ["“I feel ignored” → “I feel lonely and sad.”", "“I feel like you don’t care” → “I feel hurt.”", "“I feel attacked” → “I feel scared and defensive.”"]
    }
  ],

  wordSwaps: [
    { from: "You always…", to: "On the last three Mondays…", why: "Specific observations are easier to hear than generalisations." },
    { from: "You never…", to: "This week I didn’t see…", why: "“Never” invites argument, not connection." },
    { from: "You make me feel…", to: "I feel… because I need…", why: "Takes responsibility for your own feelings." },
    { from: "I have to…", to: "I choose to… because…", why: "Reconnects you to your choice and values." },
    { from: "You should…", to: "Would you be willing to…?", why: "Turns a demand into a request." },
    { from: "Don’t run!", to: "Please walk.", why: "Positive language says what you do want." },
    { from: "You’re lazy.", to: "I see the dishes from yesterday still in the sink.", why: "Swaps a label for an observation." },
    { from: "I feel like you don’t care.", to: "I feel hurt.", why: "“I feel like” is usually a thought, not a feeling." },
    { from: "I feel ignored.", to: "I feel lonely and want connection.", why: "Names a feeling and need, not what others did." },
    { from: "I feel manipulated.", to: "I feel uneasy and want honesty.", why: "Avoids blame disguised as feeling." },
    { from: "Why did you do that?", to: "Can you help me understand what was going on for you?", why: "“Why” can sound like an accusation." },
    { from: "But…", to: "And…", why: "“But” erases what came before." },
    { from: "Calm down.", to: "It seems like you’re really upset. I’m listening.", why: "Being told to calm down rarely calms anyone." },
    { from: "It’s not a big deal.", to: "This really matters to you.", why: "Validates instead of minimising." },
    { from: "I know how you feel.", to: "I imagine that must be hard. Is that right?", why: "Offers a guess rather than claiming certainty." },
    { from: "Good job!", to: "You finished the whole puzzle — I enjoyed watching you stick with it.", why: "Specific appreciation beats generic praise." },
    { from: "You’re so smart.", to: "You kept trying different strategies until it worked.", why: "Describes effort rather than fixed traits." },
    { from: "Stop crying.", to: "It’s okay to be sad. I’m here.", why: "Accepts feelings while offering presence." },
    { from: "That’s wrong.", to: "I see it differently. Can I share how?", why: "Opens dialogue instead of closing it." },
    { from: "You’re overreacting.", to: "This seems really big for you right now.", why: "Avoids judging someone’s feelings." },
    { from: "Whatever.", to: "I need a break; can we come back to this at seven?", why: "States a need instead of withdrawing." },
    { from: "If you loved me, you would…", to: "It would mean a lot to me if you…", why: "Removes guilt and pressure." },
    { from: "You need to…", to: "I’d like you to… Would that work for you?", why: "Invites cooperation instead of compliance." },
    { from: "That’s just how I am.", to: "I tend to… and I’m willing to work on it.", why: "Takes responsibility instead of hiding behind identity." },
    { from: "It’s company policy.", to: "I’m following this policy because I value fairness.", why: "Owns your choice behind rules." },
    { from: "Everyone thinks you’re…", to: "I’ve noticed… and I’m concerned.", why: "Speak for yourself, not a crowd." },
    { from: "You’re being difficult.", to: "It seems we want different things. What matters most to you here?", why: "Moves from labels to needs." },
    { from: "I’m sorry you feel that way.", to: "I’m sorry my words hurt you.", why: "Takes ownership rather than deflecting." },
    { from: "No offence, but…", to: "I want to share something that might be hard to hear.", why: "Honest framing beats a disclaimer." },
    { from: "You’re wrong.", to: "I see it differently.", why: "Two perspectives can exist side by side." },
    { from: "Hurry up!", to: "We need to leave in five minutes so we’re on time. Shoes on, please.", why: "Clear time and action reduce stress." },
    { from: "You ruined it.", to: "I’m disappointed this didn’t go as planned.", why: "Express feelings instead of blame." },
    { from: "What’s wrong with you?", to: "Are you okay? You seem upset.", why: "Curiosity instead of attack." },
    { from: "Be good.", to: "Please use gentle hands with your sister.", why: "Concrete behaviour is easier to do." },
    { from: "You can’t…", to: "You can… instead.", why: "Offers a positive alternative." },
    { from: "Fine, do what you want.", to: "I’m frustrated; I need some time to think, then let’s decide together.", why: "Avoids passive aggression." },
    { from: "You don’t appreciate anything I do.", to: "I’d love to hear when something I do helps you.", why: "Asks for what you need." },
    { from: "He deserves it.", to: "I’m angry and want what happened to be repaired.", why: "Replaces deserve-thinking with needs." },
    { from: "I can’t.", to: "I’m not willing to right now because…", why: "Honest about your choice and needs." },
    { from: "Obviously…", to: "From my perspective…", why: "Avoids implying the other is foolish." },
    { from: "Always remember to…", to: "Would it help to set a reminder for…?", why: "Supports rather than lectures." },
    { from: "Stop complaining.", to: "It sounds like something’s not working for you. What would help?", why: "Hears the need behind the complaint." }
  ]
};
