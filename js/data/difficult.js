window.NVC = window.NVC || {};

window.NVC.difficult = {
  principles: [
    { title: "Behaviour is a strategy to meet a need", text: "Marshall Rosenberg taught that every action, however tragic, is an attempt to meet a universal need. Look past the behaviour to the need underneath." },
    { title: "Empathy before education", text: "People can’t hear advice or limits while they feel unheard. Reflect feelings and needs first; teach or problem-solve once they’ve calmed." },
    { title: "Regulate yourself first", text: "You can’t calm someone else from outside your own window of tolerance (Dan Siegel). Take a few slow breaths, relax your shoulders and lower your voice before you speak." },
    { title: "Assume a need, not malice", text: "Ask yourself, “What might they be needing right now?” instead of “Why are they doing this to me?” Curiosity softens your body and your words." },
    { title: "Protective use of force", text: "Rosenberg distinguished protective force (stopping harm, without intent to punish) from punitive force. Keep people safe first; save understanding for later." },
    { title: "Boundaries are requests to yourself", text: "A boundary says what you will do, not what the other person must do: “If the shouting continues, I’ll leave the room and come back in ten minutes.”" },
    { title: "Separate observation from evaluation", text: "Describe what a camera would record (“You interrupted three times”) rather than labels (“You’re rude”). Labels invite defence; observations invite dialogue." },
    { title: "Hear the “please” in the “no”", text: "Every “no” is a “yes” to another need. Get curious about what they are saying yes to before you push your request." },
    { title: "Requests, not demands", text: "A request is something the other person can decline without punishment. If you would punish a “no”, it’s a demand — and people resist demands." },
    { title: "Self-empathy is not optional", text: "Difficult people stir up our own pain. Notice your feelings and needs privately so you respond by choice instead of reacting." },
    { title: "Connection over being right", text: "Aim for a quality of connection where both sets of needs matter, not for winning. Solutions follow connection." },
    { title: "Repair is always possible", text: "When you lose it, own your part without excuses and try again. Repair builds more trust than never making mistakes." }
  ],
  deescalate: [
    { step: "Regulate yourself", text: "Notice your heartbeat and breath. Take three slow breaths, exhaling longer than you inhale, and soften your face and hands.", say: "(to yourself) I’m safe. I can handle this. Breathe." },
    { step: "Ensure safety", text: "Create physical space, stand at an angle, remove hazards or onlookers. Use protective force only if someone could be hurt.", say: "Let’s step over here where it’s quieter." },
    { step: "Connect", text: "Use the person’s name, a calm low voice and an open posture. Show you’re on their side, not against them.", say: "Sam, I’m here. I want to understand." },
    { step: "Reflect feelings", text: "Guess the feeling out loud, briefly and tentatively. Being accurately named often lowers intensity.", say: "You sound really furious right now." },
    { step: "Guess the need", text: "Link the feeling to a universal need, without agreeing or disagreeing with their story.", say: "Is it because you need to be treated fairly?" },
    { step: "Listen fully", text: "Let them say more. Don’t defend, correct or fix yet. Silence and nodding are powerful.", say: "Tell me more. I’m listening." },
    { step: "Express honestly", text: "Once they’re calmer, share your observation, feeling and need in a few words.", say: "When voices get loud, I feel tense because I want us both to be heard." },
    { step: "Make a request", text: "Offer a concrete, doable next step that they can say yes or no to.", say: "Would you be willing to sit down with me and look at options?" }
  ],
  types: [
    {
      id: "exploder", name: "The Exploder", icon: "🌋",
      signs: ["Sudden yelling or rage", "Slamming, throwing or pounding", "Says things they later regret", "Calms down as quickly as they flare"],
      likelyNeeds: ["To be heard", "Respect", "Control or predictability", "Relief from overwhelm"],
      dont: ["Shout back", "Argue facts mid-explosion", "Tell them to “calm down”", "Stand over them or crowd them"],
      do: ["Breathe slowly and lower your own voice", "Give physical space", "Reflect the feeling in a few words", "Wait for the wave to pass before problem-solving", "Revisit later with curiosity"],
      boundary: "When the yelling starts, I’m going to step outside for ten minutes. I want to talk this through, and I’ll come back when we’re both calmer.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A four-year-old screams and throws toys when told it’s time to leave.", say: "You’re so mad! You wanted to stay. I won’t let you throw. I’m right here.", why: "Short words and safety help a flooded child settle." },
        { stage: "Child", maturity: "mature", situation: "A calm nine-year-old talks about losing his temper at football.", say: "You got really angry when the ref called the foul. What did your body feel like just before?", why: "Builds awareness of early warning signs." },
        { stage: "Teen", maturity: "immature", situation: "A teen yells and punches a door after a curfew argument.", say: "You’re furious. I’m going to give you some space and come back in 20 minutes.", why: "Space prevents escalation and models self-regulation." },
        { stage: "Young adult", maturity: "mature", situation: "A housemate apologises after shouting about bills.", say: "Thanks for coming back. I’d like to understand what was going on for you, and then share what it was like for me.", why: "Honours their repair and opens two-way dialogue." },
        { stage: "Adult", maturity: "immature", situation: "A colleague bangs the desk and shouts in a meeting.", say: "Lena, I can see this matters a lot. Let’s pause for five minutes and pick it up again.", why: "A calm pause gives face-saving time to regulate." },
        { stage: "Older adult", maturity: "immature", situation: "An elderly father shouts at the carer during dressing.", say: "That feels uncomfortable. Let’s slow right down. Do you want to do this sleeve yourself?", why: "Restores control and lowers threat." },
        { stage: "Adult", maturity: "mature", situation: "A partner who has calmed down wants to talk about last night’s blow-up.", say: "When you shouted, I felt scared because I need safety. What was happening for you just before?", why: "Full NVC once both are regulated." }
      ]
    },
    {
      id: "sniper", name: "The Sniper", icon: "🎯",
      signs: ["Sarcastic jabs disguised as jokes", "Put-downs in front of others", "“Just kidding!” when challenged", "Eye-rolls and smirks"],
      likelyNeeds: ["Recognition", "Belonging", "Power or influence", "Safety to express hurt directly"],
      dont: ["Laugh along to keep the peace", "Fire back with your own sarcasm", "Ignore a pattern for months", "Confront them publicly with labels"],
      do: ["Bring the jab into the open calmly", "Ask what they really mean", "Guess the need behind the joke", "Talk privately afterwards", "Make a clear request about future comments"],
      boundary: "When I hear jokes about my work in meetings, I’m going to ask what you mean right there. I’d rather hear concerns directly.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "A ten-year-old mocks her brother’s drawing: “Nice scribble, Picasso.”", say: "That sounded like teasing. Are you feeling left out of the art time?", why: "Names the jab and guesses the need underneath." },
        { stage: "Teen", maturity: "immature", situation: "A teen says “Wow, great parenting” under her breath.", say: "I heard that. It sounds like you’re angry with me. I’d like to hear it straight.", why: "Invites directness without punishing." },
        { stage: "Teen", maturity: "mature", situation: "A teen who is calm admits he uses sarcasm when nervous.", say: "So joking helps when you feel awkward. What else might help you feel more at ease?", why: "Supports insight and new strategies." },
        { stage: "Young adult", maturity: "immature", situation: "A friend keeps calling you “Miss Perfect” in the group chat.", say: "I notice “Miss Perfect” comes up a lot. Is there something bothering you about me?", why: "Brings the subtext into the open." },
        { stage: "Adult", maturity: "immature", situation: "A colleague says “Nice of you to join us” when you arrive on time.", say: "I’m not sure what you meant by that. Is there something about my timing you’d like to discuss?", why: "Calmly surfaces the hidden message." },
        { stage: "Adult", maturity: "mature", situation: "A manager who values feedback asks how her humour lands.", say: "Sometimes the jokes about my accent sting. I want to feel respected. Could we leave those out?", why: "Honest and specific with a doable request." },
        { stage: "Older adult", maturity: "immature", situation: "A grandmother says, “I suppose takeaway counts as cooking now.”", say: "It sounds like home-cooked meals matter to you. Would you like to cook together on Sunday?", why: "Translates criticism into a need and invites connection." }
      ]
    },
    {
      id: "passive-aggressive", name: "The Passive-Aggressive", icon: "🙃",
      signs: ["Says “fine” when it clearly isn’t", "Agrees then quietly doesn’t follow through", "Leaves pointed notes", "Uses silence or lateness to signal displeasure"],
      likelyNeeds: ["Safety to disagree", "Autonomy", "Respect", "Being heard"],
      dont: ["Accuse them of being passive-aggressive", "Match their indirectness", "Let resentment build silently", "Over-interpret every sigh"],
      do: ["Name the observation without labels", "Make it safe to say no", "Ask directly for their opinion", "Guess the unspoken feeling", "Agree on clear next steps in writing"],
      boundary: "If I don’t hear a clear yes or no, I’ll assume it’s a no and make other plans. I’d really like to know what you think.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A five-year-old says “OK” but drags her feet for twenty minutes.", say: "Your feet are going really slowly. I think you don’t want to leave. You can tell me, “I don’t want to!”", why: "Gives permission to say no out loud." },
        { stage: "Child", maturity: "immature", situation: "A child “forgets” every chore he dislikes.", say: "I notice the bins get forgotten but feeding the cat doesn’t. Do you hate the bin job?", why: "Observation invites honesty." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen admits she agreed to babysit just to avoid an argument.", say: "Thanks for telling me. I want your yes to be a real yes. What would you have liked to say?", why: "Rewards honesty and builds directness." },
        { stage: "Young adult", maturity: "immature", situation: "A roommate leaves a note: “Some of us actually clean.”", say: "I saw the note. I’d rather talk face to face. What’s bothering you about the cleaning?", why: "Shifts from notes to direct dialogue." },
        { stage: "Adult", maturity: "immature", situation: "A partner says “Whatever, do what you want” and goes quiet.", say: "I hear “whatever,” and I sense you’re upset. I want to know what you actually want.", why: "Names the gap between words and tone." },
        { stage: "Adult", maturity: "mature", situation: "A colleague is open to discussing why tasks stall.", say: "When deadlines pass without a word, I feel anxious because I need predictability. Would you tell me early if you can’t do something?", why: "Clear request for future honesty." },
        { stage: "Older adult", maturity: "immature", situation: "An aunt says “Don’t worry about me, I’ll just sit here alone.”", say: "It sounds like you’d like some company. Would you like to join us in the garden?", why: "Responds to the need rather than the guilt." }
      ]
    },
    {
      id: "know-it-all", name: "The Know-It-All", icon: "🧐",
      signs: ["Corrects others constantly", "Struggles to admit mistakes", "Lectures rather than discusses", "Dismisses other viewpoints"],
      likelyNeeds: ["Competence", "Respect", "Security", "Contribution"],
      dont: ["Try to out-expert them", "Humiliate them when they are wrong", "Give up sharing your view", "Roll your eyes"],
      do: ["Acknowledge their knowledge genuinely", "Ask questions rather than contradict", "Share your view as “another perspective”", "Use observations and facts gently", "Offer face-saving ways to change course"],
      boundary: "I’d like five minutes to finish my idea before we discuss it. If I’m interrupted, I’ll pause and ask to finish.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "A seven-year-old shouts “Wrong! You don’t know anything!” at a classmate.", say: "You know a lot about dinosaurs. Jaya has an idea too. Let’s hear hers, then yours.", why: "Values competence while making room for others." },
        { stage: "Teen", maturity: "immature", situation: "A teen insists you’re wrong about everything in the news.", say: "You’ve clearly read a lot about this. I see it differently. Want to hear why?", why: "Respects their knowledge and invites exchange." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen wants to debate climate policy.", say: "I love how you think. What would change your mind? I’ll tell you what would change mine.", why: "Models intellectual humility." },
        { stage: "Young adult", maturity: "mature", situation: "A new graduate colleague corrects your process openly.", say: "Thanks — I’d like to hear your idea. Can we compare it to how we’ve done it and choose together?", why: "Channels their competence into collaboration." },
        { stage: "Adult", maturity: "immature", situation: "A brother-in-law lectures everyone at dinner.", say: "You’ve got strong views on this. I’d love to hear what others at the table think too.", why: "Redirects without shaming." },
        { stage: "Older adult", maturity: "immature", situation: "A retired engineer insists the young technician is doing it wrong.", say: "You have decades of experience. Would you be willing to explain what you’d check first?", why: "Honours expertise and lowers threat." },
        { stage: "Adult", maturity: "mature", situation: "A respected peer asks for honest feedback on meetings.", say: "When your points take most of the time, I feel frustrated because I value everyone’s input. Could we try timed turns?", why: "Specific, honest and actionable." }
      ]
    },
    {
      id: "complainer", name: "The Chronic Complainer", icon: "😩",
      signs: ["Constant focus on what’s wrong", "Rejects suggestions with “yes, but”", "Repeats the same complaint", "Rarely moves to action"],
      likelyNeeds: ["Empathy", "To be heard", "Hope", "Support"],
      dont: ["Jump in with solutions", "Agree and add your own complaints", "Dismiss with “Look on the bright side”", "Avoid them completely"],
      do: ["Listen and reflect for a set time", "Name the need behind the complaint", "Ask “What would you like?”", "Gently shift toward one small action", "Set limits on time and topic"],
      boundary: "I care about what’s happening for you, and I can listen for ten minutes. After that, I’d like to talk about something else.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A six-year-old whines all afternoon that she’s bored.", say: "You’re bored and want something fun. Would you like to choose from the idea jar?", why: "Validates and offers a choice." },
        { stage: "Child", maturity: "mature", situation: "A calm eleven-year-old complains about a teacher.", say: "It sounds frustrating. What would you like to happen? Is there anything you could try?", why: "Moves from venting to agency." },
        { stage: "Teen", maturity: "immature", situation: "A teen complains everything is “so unfair” every evening.", say: "You’re really fed up. Fairness matters to you. Which bit feels the most unfair?", why: "Narrows focus so it feels manageable." },
        { stage: "Young adult", maturity: "immature", situation: "A friend complains about her job every time you meet.", say: "You sound worn down. Do you want me to listen, or would ideas help today?", why: "Clarifies what kind of support is wanted." },
        { stage: "Adult", maturity: "mature", situation: "A colleague acknowledges she’s been negative lately.", say: "Thanks for noticing. I’d like to support you. What’s one thing that could make work better this week?", why: "Builds hope with a small step." },
        { stage: "Older adult", maturity: "immature", situation: "A neighbour complains daily about the council and his health.", say: "It sounds like a lot is hard right now. You want to feel cared for. Is there one thing I can help with?", why: "Responds to the underlying need for care." }
      ]
    },
    {
      id: "withdrawer", name: "The Silent Withdrawer", icon: "🐢",
      signs: ["Goes quiet in conflict", "Avoids eye contact", "Leaves the room or changes the subject", "Says “I don’t know” or “Nothing”"],
      likelyNeeds: ["Safety", "Space", "Acceptance", "Time to process"],
      dont: ["Chase or interrogate", "Interpret silence as agreement", "Demand an answer right now", "Label them “cold” or “sulky”"],
      do: ["Offer time and a way back in", "Use low-pressure settings (walking, driving)", "Guess feelings gently", "Accept small responses", "Follow up kindly later"],
      boundary: "I’m going to give you space now. I’d like to talk tonight after dinner — can you let me know if that works?",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A three-year-old hides under the table after being told off.", say: "You’re hiding. Maybe you feel sad. I’ll sit right here until you’re ready.", why: "Presence without pressure." },
        { stage: "Child", maturity: "immature", situation: "An eight-year-old won’t talk about a fight at school.", say: "You don’t have to talk. Want to draw what happened instead?", why: "Offers a non-verbal channel." },
        { stage: "Teen", maturity: "immature", situation: "A teen grunts “Nothing” and goes to her room.", say: "Okay. I’m here if you want to talk later. I’ll bring you a snack.", why: "Keeps the door open without chasing." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen says he needs time to think after an argument.", say: "That makes sense. Can we check in tomorrow after school?", why: "Respects processing time while agreeing a return." },
        { stage: "Adult", maturity: "immature", situation: "A partner goes silent during a money discussion.", say: "I notice you’ve gone quiet. Are you feeling overwhelmed? We can pause and come back.", why: "Names the observation and offers a break." },
        { stage: "Adult", maturity: "mature", situation: "A colleague says she prefers to reply by email after meetings.", say: "That works. Could you send your thoughts by Friday so we can decide Monday?", why: "Honours style with a clear request." },
        { stage: "Older adult", maturity: "immature", situation: "A grandfather stops talking after his diagnosis.", say: "This is a lot to take in. I’m here. Would you like to just sit together for a while?", why: "Companionship without demand." }
      ]
    },
    {
      id: "manipulator", name: "The Manipulator / Guilt-tripper", icon: "🕸️",
      signs: ["“After all I’ve done for you…”", "Uses emotional pressure to get a yes", "Twists your words", "Plays people against each other"],
      likelyNeeds: ["Security", "Connection", "Being valued", "Control or predictability"],
      dont: ["Give in to stop the guilt", "Over-explain or justify", "Accuse them of manipulation", "Make decisions under pressure"],
      do: ["Empathise with the feeling, keep your decision", "Take time before answering", "Speak in short, clear statements", "Name what you will do", "Check facts with others directly"],
      boundary: "I can hear you’re disappointed. My answer is still no. I’m happy to talk about another way I can help.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A five-year-old says, “You don’t love me if I can’t have sweets.”", say: "I love you always. You really want sweets. The answer is no, and you can be sad about it.", why: "Separates love from limits." },
        { stage: "Child", maturity: "immature", situation: "A ten-year-old tells Dad that Mum said yes when she didn’t.", say: "I’d like us all to be honest. Let’s go and check with Mum together.", why: "Calm, transparent checking." },
        { stage: "Teen", maturity: "immature", situation: "A teen says, “If you don’t let me go, I’ll have no friends and it’s your fault.”", say: "You’re worried about losing friends. That matters. I still need to know an adult will be there.", why: "Empathy without giving up the boundary." },
        { stage: "Young adult", maturity: "mature", situation: "A friend who is self-aware admits she guilt-trips when scared.", say: "Thanks for saying that. When you’re scared, could you tell me what you need directly?", why: "Invites direct requests." },
        { stage: "Adult", maturity: "immature", situation: "A mother says, “After everything I did, you can’t visit for Christmas?”", say: "I hear how much you want us there. We’re not coming this year. Could we visit in January?", why: "Short, warm and firm with an alternative." },
        { stage: "Older adult", maturity: "immature", situation: "An elderly relative says, “I’ll be dead soon, so it doesn’t matter.”", say: "It sounds like you feel lonely and want to be important to us. You are. I can come Thursday.", why: "Responds to the need, not the pressure." }
      ]
    },
    {
      id: "bully", name: "The Bully", icon: "👊",
      signs: ["Intimidates, threatens or humiliates", "Targets those with less power", "Uses physical or verbal aggression", "Enjoys others’ discomfort"],
      likelyNeeds: ["Power or control", "Respect", "Belonging", "Safety (often from their own past hurt)"],
      dont: ["Stay silent or let others take the hit", "Bully back", "Meet privately when unsafe", "Blame the target"],
      do: ["Protect the target first", "Use protective force if needed", "Name the behaviour and the limit firmly", "Involve others or authorities", "Later, explore the bully’s needs and support change"],
      boundary: "I won’t stay in a conversation where I’m being threatened. If it continues, I’ll leave and report it.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A six-year-old repeatedly pushes a smaller child off the slide.", say: "Stop. I won’t let you push. Rafi, are you okay? (Later) You wanted the slide to yourself. Let’s practise asking.", why: "Safety first, skill-building later." },
        { stage: "Child", maturity: "immature", situation: "A twelve-year-old calls a classmate names at lunch.", say: "That stops now. Everyone here deserves respect. Come with me so we can talk.", why: "Firm, protective and private." },
        { stage: "Teen", maturity: "immature", situation: "A teen posts humiliating photos of a peer.", say: "Those photos come down now. I’m worried about the harm this causes. We’ll talk about what was going on for you.", why: "Stops harm, then seeks understanding." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen reflects on why he picked on others.", say: "It sounds like you wanted to feel strong after being picked on yourself. What else could help you feel strong?", why: "Connects behaviour to needs and alternatives." },
        { stage: "Adult", maturity: "immature", situation: "A manager shouts and threatens to sack someone in front of the team.", say: "I want to discuss this, and I need us to do it without threats. Let’s talk privately with HR present.", why: "Protective boundary and support." },
        { stage: "Older adult", maturity: "immature", situation: "A resident in a care home bullies another at meals.", say: "Mr. Novak, I won’t let you grab her plate. Let’s sit you here by the window. Are you hungry?", why: "Protects, redirects and checks needs." }
      ]
    },
    {
      id: "self-focused", name: "The Narcissistic-style Self-focused Person", icon: "🪞",
      signs: ["Turns conversations back to themselves", "Struggles to show empathy", "Reacts badly to criticism", "Needs admiration"],
      likelyNeeds: ["Being valued", "Recognition", "Security", "Acceptance"],
      dont: ["Try to diagnose them", "Expect deep empathy in return", "Get into long debates", "Share vulnerabilities you need protected"],
      do: ["Keep expectations realistic", "Give genuine, specific appreciation", "Use short, clear requests", "Protect your own needs", "Seek support from others"],
      boundary: "I’d like equal time in our conversations. If it keeps turning back, I’ll end the call and try again another day.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "An eight-year-old interrupts every story to talk about himself.", say: "You have lots to share! First let’s hear Ana’s story, then it’s your turn.", why: "Teaches turn-taking kindly." },
        { stage: "Teen", maturity: "immature", situation: "A teen insults friends who don’t admire her posts.", say: "You want people to notice you. I see how much you put into your posts. How do you think Tomas felt?", why: "Acknowledges need and builds empathy." },
        { stage: "Young adult", maturity: "immature", situation: "A partner dismisses your promotion news and talks about his day.", say: "I’d like you to hear my news first — it matters to me. Then I want to hear about your day.", why: "Clear request for reciprocity." },
        { stage: "Adult", maturity: "immature", situation: "A boss reacts with fury to mild feedback.", say: "Your vision for the project is strong. I have one concern I’d like to raise about timelines.", why: "Genuine appreciation lowers threat before feedback." },
        { stage: "Adult", maturity: "mature", situation: "A friend acknowledges she often dominates conversations.", say: "Thanks for noticing. It would mean a lot if you asked about my life sometimes.", why: "Honest, specific request." },
        { stage: "Older adult", maturity: "immature", situation: "An elderly father only talks about his achievements.", say: "You’ve done amazing things, Dad. I’d love to share something about my life too.", why: "Honours his need and asks for space." }
      ]
    },
    {
      id: "martyr", name: "The Martyr", icon: "🕯️",
      signs: ["Does everything, then resents it", "Refuses help, then complains", "Sighs heavily and says “I’m fine”", "Keeps score of sacrifices"],
      likelyNeeds: ["Appreciation", "Support", "Being valued", "Rest"],
      dont: ["Ignore the sighs", "Argue about who does more", "Take over without asking", "Mock their sacrifices"],
      do: ["Appreciate specific efforts", "Ask directly what help they want", "Guess the unmet need", "Encourage them to make requests", "Accept help being refused, kindly"],
      boundary: "I’d love to help with dinner. If you say no, I’ll trust that, and I won’t be able to fix it if you’re upset later.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "A ten-year-old says, “I always have to do everything for my brother.”", say: "You feel like you’re doing a lot. You want things to be fair. Let’s look at the jobs list together.", why: "Validates fairness and makes it concrete." },
        { stage: "Teen", maturity: "mature", situation: "A teen who is calm says she’s exhausted from helping everyone.", say: "You give so much. What would you like to say no to this week?", why: "Builds the skill of saying no." },
        { stage: "Young adult", maturity: "immature", situation: "A housemate cleans loudly while sighing and saying nothing.", say: "I notice you’re cleaning and seem frustrated. Would you like help, or would you like to talk about the rota?", why: "Names the observation and offers choices." },
        { stage: "Adult", maturity: "immature", situation: "A partner says, “Don’t worry, I’ll do it all myself as usual.”", say: "It sounds like you’re worn out and want more support. What would help most tonight?", why: "Translates martyrdom into a need." },
        { stage: "Adult", maturity: "mature", situation: "A colleague admits she takes on too much.", say: "I appreciate your effort. Could you tell me which tasks I can take off your plate?", why: "Appreciation plus practical request." },
        { stage: "Older adult", maturity: "immature", situation: "A grandmother insists on hosting while complaining of exhaustion.", say: "You make every holiday special. This year, would you let us bring the dessert and do the dishes?", why: "Honours her role while offering rest." }
      ]
    },
    {
      id: "critic", name: "The Constant Critic", icon: "🔍",
      signs: ["Finds fault with everything", "Rarely gives appreciation", "Uses “always” and “never”", "Focuses on small mistakes"],
      likelyNeeds: ["Order", "Competence", "Respect", "Security"],
      dont: ["Defend every point", "Criticise back", "Take every remark as truth about you", "Withdraw completely"],
      do: ["Translate criticism into their need", "Ask for specifics and requests", "Agree with what’s accurate", "Share how the criticism lands", "Ask for appreciation too"],
      boundary: "I’m open to feedback when it’s specific. When I hear “always” or “never”, I’ll ask for one example and what you’d like instead.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A five-year-old says, “Your pancakes are yucky, you always burn them.”", say: "You wanted pancakes just the way you like them. Want to help me flip the next one?", why: "Turns criticism into participation." },
        { stage: "Child", maturity: "immature", situation: "An eleven-year-old criticises her friends’ every choice.", say: "You notice details. How do you think Mei felt when you said her idea was dumb?", why: "Values strength, builds empathy." },
        { stage: "Teen", maturity: "immature", situation: "A teen says, “You never get anything right.”", say: "Sounds like you’re really frustrated with me. What’s one thing you’d like me to do differently?", why: "Asks for a specific request." },
        { stage: "Young adult", maturity: "mature", situation: "A partner open to feedback criticises your tidiness.", say: "I hear that order matters to you. I’d also love to hear what you appreciate. Can we agree on two key spots to keep tidy?", why: "Balances needs and invites appreciation." },
        { stage: "Adult", maturity: "immature", situation: "A boss marks up every email with red comments.", say: "I want to meet your standards. Could you tell me the top two things that matter most to you?", why: "Focuses criticism into clear priorities." },
        { stage: "Older adult", maturity: "immature", situation: "A mother-in-law criticises the way you raise the children.", say: "I can see you care about the kids. I’m making different choices, and I’d value your support.", why: "Acknowledges care, holds the boundary." }
      ]
    },
    {
      id: "steamroller", name: "The Steamroller / Interrupter", icon: "🚜",
      signs: ["Talks over others", "Finishes your sentences", "Pushes decisions through quickly", "Doesn’t notice others’ discomfort"],
      likelyNeeds: ["Efficiency", "To be heard", "Influence", "Enthusiasm and contribution"],
      dont: ["Raise your voice to compete", "Sit silently and stew", "Shame them in public", "Assume they’re doing it on purpose"],
      do: ["Name the pattern calmly", "Use a hand signal or turn-taking tool", "Ask to finish your point", "Summarise their idea to show it’s heard", "Agree on meeting norms"],
      boundary: "I’d like to finish my thought. If I’m interrupted, I’ll pause and say so, then continue.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A four-year-old keeps interrupting phone calls.", say: "You have something important! Put your hand on my arm, and I’ll squeeze it to say I know you’re waiting.", why: "Gives a concrete waiting tool." },
        { stage: "Child", maturity: "mature", situation: "A calm nine-year-old realises she interrupts in group work.", say: "You have lots of ideas! What could help you remember to let others finish?", why: "Builds self-management." },
        { stage: "Teen", maturity: "immature", situation: "A teen talks over his sister at dinner.", say: "I want to hear you both. Aisha first, then you — I promise you’ll get your turn.", why: "Fair turns lower urgency." },
        { stage: "Young adult", maturity: "immature", situation: "A study partner rushes decisions without asking.", say: "I want to move fast too. I need two minutes to give my view before we decide.", why: "Shared value plus a clear request." },
        { stage: "Adult", maturity: "immature", situation: "A colleague interrupts you three times in a meeting.", say: "Raj, I’d like to finish my point, and then I want to hear yours.", why: "Calm, direct and respectful." },
        { stage: "Adult", maturity: "mature", situation: "A manager asks for honest feedback on meetings.", say: "When ideas get cut short, I notice people go quiet. Could we try a round where everyone speaks once?", why: "Observation plus a concrete strategy." },
        { stage: "Older adult", maturity: "immature", situation: "An uncle dominates every family gathering.", say: "Uncle Femi, you have great stories! I’d love to hear from the kids for a bit too.", why: "Warm redirection without shame." }
      ]
    },
    {
      id: "victim", name: "The Victim Stance", icon: "🥀",
      signs: ["Sees themselves as helpless", "Blames others or circumstances", "Rejects their own role or choices", "Seeks rescue"],
      likelyNeeds: ["Empathy", "Support", "Hope", "Agency"],
      dont: ["Rescue them every time", "Lecture about responsibility", "Dismiss real hardship", "Argue about who’s to blame"],
      do: ["Empathise with real pain", "Ask what they’d like to happen", "Highlight small choices they do have", "Encourage tiny steps", "Celebrate effort"],
      boundary: "I care about you and I can’t solve this for you. I’m happy to brainstorm options together.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "A nine-year-old says, “Everyone hates me, it’s not fair.”", say: "That sounds so lonely. You want friends. Who’s one person you’d like to play with tomorrow?", why: "Empathy then a small step." },
        { stage: "Teen", maturity: "immature", situation: "A teen blames teachers for every bad grade.", say: "You feel let down by your teachers. What part of this do you have some control over?", why: "Builds agency without blame." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen admits she gives up easily.", say: "Thanks for seeing that. What helped you keep going last time something was hard?", why: "Draws on past strengths." },
        { stage: "Young adult", maturity: "immature", situation: "A friend says no one will ever hire him.", say: "It’s really discouraging to get rejections. Would you like help with one application this week?", why: "Practical, concrete hope." },
        { stage: "Adult", maturity: "mature", situation: "A sibling wants to move on from blaming their parents.", say: "That’s a brave choice. What would you like your life to look like now?", why: "Future-focused agency." },
        { stage: "Older adult", maturity: "immature", situation: "An elderly neighbour says, “Nobody cares about old people.”", say: "You feel forgotten. You want to matter. Would you like to come to the community lunch with me?", why: "Meets need for belonging with action." }
      ]
    },
    {
      id: "gossip", name: "The Gossip", icon: "🗣️",
      signs: ["Shares others’ private information", "Talks about people behind their backs", "Spreads rumours", "Seeks allies against someone"],
      likelyNeeds: ["Belonging", "Connection", "Importance", "Safety"],
      dont: ["Join in", "Pass the gossip on", "Publicly shame them", "Assume the rumour is true"],
      do: ["Redirect the conversation", "Express your value of trust", "Encourage direct conversation", "Model speaking well of others", "Talk privately about the impact"],
      boundary: "I’d rather not talk about Mia when she’s not here. If something’s bothering you, I can help you talk to her directly.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "An eleven-year-old whispers rumours about a classmate.", say: "I value kindness here. How do you think Zara would feel if she heard that?", why: "Builds empathy and values." },
        { stage: "Teen", maturity: "immature", situation: "A teen shares screenshots of a friend’s private messages.", say: "I’m worried because trust matters. How would you feel if your messages were shared?", why: "Perspective-taking without shaming." },
        { stage: "Teen", maturity: "mature", situation: "A teen admits she gossips to fit in.", say: "Wanting to belong is so important. What are other ways you could connect with that group?", why: "Finds new strategies for belonging." },
        { stage: "Young adult", maturity: "immature", situation: "A coworker in her twenties tells you about a colleague’s divorce.", say: "I’d rather not hear private stuff about Ben. Want to grab a coffee and talk about your weekend?", why: "Redirects warmly." },
        { stage: "Adult", maturity: "immature", situation: "A neighbour spreads rumours on the street.", say: "I prefer not to talk about the Garcias without them. Have you thought about speaking to them directly?", why: "Encourages directness." },
        { stage: "Older adult", maturity: "immature", situation: "A retiree at the club gossips about other members.", say: "You seem to know everyone! Tell me about something fun happening at the club instead.", why: "Uses their social interest positively." }
      ]
    },
    {
      id: "defiant", name: "The Defiant / Oppositional", icon: "🚫",
      signs: ["Automatically says no", "Argues with every rule", "Deliberately does the opposite", "Resents authority"],
      likelyNeeds: ["Autonomy", "Respect", "Control or choice", "Fairness"],
      dont: ["Get into power struggles", "Issue ultimatums you can’t enforce", "Take it personally", "Pile on consequences"],
      do: ["Offer choices within limits", "Use collaborative problem-solving (Ross Greene)", "Explain the need behind rules", "Pick your battles", "Notice and appreciate cooperation"],
      boundary: "I’m not going to argue. The car leaves at eight. You can choose to come with breakfast in the car or eaten here.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A three-year-old screams “NO!” at bath time.", say: "You don’t want a bath. Do you want to bring the duck or the boat?", why: "Choice meets autonomy." },
        { stage: "Child", maturity: "immature", situation: "An eight-year-old refuses to do homework.", say: "I’m noticing homework is really hard to start. What’s up?", why: "Ross Greene’s empathy step starts problem-solving." },
        { stage: "Child", maturity: "mature", situation: "A calm twelve-year-old wants to change screen-time rules.", say: "My concern is sleep. Your concern is time with friends. What could work for both of us?", why: "Collaborative problem-solving." },
        { stage: "Teen", maturity: "immature", situation: "A teen says, “You can’t make me do anything!”", say: "You’re right, I can’t make you. I’d like to understand what’s going on and find a plan we can both live with.", why: "Removes the power struggle." },
        { stage: "Adult", maturity: "immature", situation: "A team member flatly refuses a new procedure.", say: "Sounds like the change feels imposed. What concerns do you have about it?", why: "Respects autonomy and invites input." },
        { stage: "Older adult", maturity: "immature", situation: "An elderly father refuses to see a doctor.", say: "You want to decide about your own health. I’m worried about your breathing. What would make a visit feel okay?", why: "Honours autonomy with honest concern." }
      ]
    },
    {
      id: "catastrophiser", name: "The Catastrophiser", icon: "🌪️",
      signs: ["Jumps to worst-case scenarios", "“This is a disaster!”", "Spirals into panic", "Struggles to see options"],
      likelyNeeds: ["Safety", "Reassurance", "Predictability", "Support"],
      dont: ["Say “You’re overreacting”", "Argue with the feeling", "Catch the panic yourself", "Rush to solutions"],
      do: ["Breathe slowly together", "Reflect the fear", "Separate facts from fears", "Look at what’s in their control", "Plan one small next step"],
      boundary: "I want to support you. I can help you think through this for twenty minutes, then I need to get back to work.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A five-year-old cries that a storm will destroy the house.", say: "Thunder sounds so scary. Our house is strong. Let’s cuddle and count the seconds between flashes.", why: "Safety plus a calming activity." },
        { stage: "Child", maturity: "immature", situation: "A ten-year-old says one bad test means he’ll fail school.", say: "You’re really worried. One test feels huge right now. Let’s look at what actually happened.", why: "Separates fact from fear." },
        { stage: "Teen", maturity: "immature", situation: "A teen panics that a text was “left on read” and everyone hates her.", say: "That feels scary. Let’s take a few slow breaths together. What do we actually know so far?", why: "Regulation first, facts second." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen notices she catastrophises before exams.", say: "Nice noticing. What’s a kinder thought you could try when the worries start?", why: "Builds self-talk skills." },
        { stage: "Adult", maturity: "immature", situation: "A colleague says losing one client means the company will fold.", say: "You’re worried about the company’s future. What’s one thing we can do this week?", why: "Moves from spiral to action." },
        { stage: "Older adult", maturity: "immature", situation: "A grandmother fears every cough means something serious.", say: "You want to feel safe and well. Let’s write down your symptoms and call the nurse together.", why: "Concrete support for fear." }
      ]
    },
    {
      id: "people-pleaser", name: "The People-pleaser", icon: "🙂",
      signs: ["Says yes to everything", "Rarely states needs or preferences", "Apologises constantly", "Builds silent resentment or burnout"],
      likelyNeeds: ["Acceptance", "Belonging", "Safety", "Self-expression"],
      dont: ["Take advantage of their yes", "Pressure them to decide on the spot", "Mock their apologies", "Assume yes always means yes"],
      do: ["Ask open questions about their preferences", "Make it safe to say no", "Appreciate honesty", "Give time to answer", "Model stating your own needs"],
      boundary: "I want your honest answer. If you need time, I’ll wait until tomorrow — and a no is completely okay.",
      scripts: [
        { stage: "Young child", maturity: "immature", situation: "A six-year-old always gives up her toys to keep friends happy.", say: "You can say, “I’m still using it.” Your wants matter too.", why: "Teaches simple self-advocacy." },
        { stage: "Child", maturity: "mature", situation: "A calm eleven-year-old admits she agreed to a sleepover she didn’t want.", say: "It’s hard to say no. What could you say next time?", why: "Practises assertive words." },
        { stage: "Teen", maturity: "immature", situation: "A teen agrees to everyone’s plans, then breaks down crying.", say: "It sounds like you’re overwhelmed. What do you actually want this weekend?", why: "Invites their own needs." },
        { stage: "Young adult", maturity: "immature", situation: "A new employee takes on every extra task.", say: "I appreciate your help. Before you say yes, check what’s on your plate. It’s okay to say no.", why: "Gives explicit permission." },
        { stage: "Adult", maturity: "mature", situation: "A partner open to change wants to say what she needs more often.", say: "I’d love to hear your preferences. What would you choose for dinner tonight?", why: "Small, safe practice." },
        { stage: "Older adult", maturity: "immature", situation: "A grandfather always says “Whatever you want” when asked.", say: "Your opinion really matters to me. If you could choose, where would you like to go?", why: "Values his voice." }
      ]
    },
    {
      id: "stonewaller", name: "The Stonewaller", icon: "🧱",
      signs: ["Shuts down in conflict", "Refuses to respond or engage", "Turns away or walks out", "Blank face, no eye contact"],
      likelyNeeds: ["Safety", "Relief from overwhelm", "Space", "Respect"],
      dont: ["Escalate to get a reaction", "Follow them room to room", "Label them uncaring", "Give up on repair"],
      do: ["Recognise flooding (John Gottman)", "Suggest a break of at least 20 minutes", "Agree when to come back", "Lower intensity when resuming", "Start gently with empathy"],
      boundary: "I can see you need a break. I’m going to stop now, and I’d like us to come back to this at 7pm.",
      scripts: [
        { stage: "Child", maturity: "immature", situation: "A seven-year-old crosses arms and refuses to speak after a scolding.", say: "You don’t want to talk. That’s okay. I’ll be nearby when you’re ready.", why: "Removes pressure and keeps connection." },
        { stage: "Teen", maturity: "immature", situation: "A teen puts headphones in mid-conversation.", say: "I get that you need a break. Can we finish this after dinner?", why: "Respects flooding and sets a return time." },
        { stage: "Teen", maturity: "mature", situation: "A calm teen says he shuts down when people raise their voices.", say: "That makes sense. What could we do to keep our talks calm enough for you?", why: "Co-creates safety." },
        { stage: "Young adult", maturity: "immature", situation: "A boyfriend stops responding during an argument.", say: "I notice you’ve gone silent. Would a break help? Let’s talk again in half an hour.", why: "Names it without blame." },
        { stage: "Adult", maturity: "immature", situation: "A spouse walks out every time money comes up.", say: "Money talks seem to overwhelm you. I need us to talk about it. When would feel more manageable?", why: "Honours need for space and keeps the issue alive." },
        { stage: "Older adult", maturity: "immature", situation: "A father refuses to discuss moving to assisted living.", say: "This is a hard topic. I’ll leave it today. Can we come back to it on Sunday?", why: "Gentle, patient pacing." }
      ]
    }
  ],
  matrix: [
    {
      stage: "Young child (2–6)", icon: "🧸",
      immature: { signs: ["Tantrums, hitting or biting", "Can’t use words when upset", "Runs off or collapses on the floor"], approach: ["Keep everyone safe", "Get low and use few words", "Breathe slowly so they can borrow your calm", "Teach after calm returns"], say: "You’re so upset. I’m here. You’re safe." },
      mature: { signs: ["Can name feelings", "Accepts simple choices", "Calms with a little help"], approach: ["Offer two choices", "Name feelings and needs simply", "Problem-solve with pictures or play", "Notice and describe effort"], say: "You were sad, and you took deep breaths. Now, which game shall we play?" }
    },
    {
      stage: "Child (7–12)", icon: "🎒",
      immature: { signs: ["Shouting or storming off", "“It’s not fair!” meltdowns", "Blaming others"], approach: ["Give space with a calm-down option", "Reflect feelings briefly", "Avoid lectures in the moment", "Revisit later with curiosity"], say: "You’re really angry. Let’s take a break and talk when we’re calmer." },
      mature: { signs: ["Explains their view", "Can listen to others", "Suggests solutions"], approach: ["Use collaborative problem-solving", "Ask for their ideas", "Share your concern honestly", "Agree a plan and review it"], say: "What could we try that works for both of us?" }
    },
    {
      stage: "Teen (13–18)", icon: "🎧",
      immature: { signs: ["Yelling, swearing or slamming doors", "Shutting down or stonewalling", "Risky or impulsive actions"], approach: ["Don’t match their intensity", "Offer a break and a return time", "Keep safety limits clear", "Repair and reconnect later"], say: "I want to hear you. Let’s take 20 minutes and come back to this." },
      mature: { signs: ["Can debate respectfully", "Reflects on their feelings", "Open to negotiation"], approach: ["Listen more than you talk", "Share honest feelings and needs", "Negotiate agreements together", "Respect their growing autonomy"], say: "Here’s what I’m worried about. What matters most to you here?" }
    },
    {
      stage: "Adult", icon: "💼",
      immature: { signs: ["Shouting, blaming or contempt", "Stonewalling or walking out", "Sarcasm and personal attacks"], approach: ["Regulate yourself first", "Suggest a break when flooded", "Reflect feelings and needs", "Hold boundaries about your actions"], say: "I want to sort this out. I need us to pause and come back in 20 minutes." },
      mature: { signs: ["Listens and reflects back", "Owns their part", "Looks for win–win solutions"], approach: ["Use the full four NVC steps", "Invite their needs", "Brainstorm strategies together", "Agree clear next steps"], say: "When this happens, I feel frustrated because I need reliability. What would work for you?" }
    },
    {
      stage: "Older adult (65+)", icon: "🧓",
      immature: { signs: ["Agitation or confusion", "Repeated complaints or accusations", "Refusing care or help"], approach: ["Slow down and speak clearly", "Validate feelings, not facts", "Check for pain, hunger or tiredness", "Gently redirect"], say: "You sound worried. I’m here with you. Let’s sit together." },
      mature: { signs: ["Shares wisdom and stories", "Discusses wishes calmly", "Open to options"], approach: ["Honour their experience", "Ask about values and wishes", "Share concerns honestly", "Make decisions together"], say: "Your independence matters. What would help you feel safe and in charge?" }
    }
  ]
};
