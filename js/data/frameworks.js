window.NVC = window.NVC || {};

window.NVC.frameworks = [
  {
    id: "nvc",
    name: "Nonviolent Communication",
    author: "Marshall Rosenberg",
    year: "1960s",
    family: "Communication",
    tagline: "Observe, feel, need, request — speak so hearts can hear.",
    summary: "Marshall Rosenberg’s NVC is a way of expressing yourself and listening to others through four components: Observations, Feelings, Needs and Requests (OFNR). It shifts attention away from blame and judgment toward the universal human needs behind everyone’s actions.",
    visual: "flow",
    steps: [
      { label: "Observation", text: "Describe what you saw or heard, like a camera would, without evaluation." },
      { label: "Feeling", text: "Name the emotion that arises in you, not a thought about the other person." },
      { label: "Need", text: "Connect the feeling to a universal need or value that is met or unmet." },
      { label: "Request", text: "Ask for a concrete, doable action now, open to hearing no." }
    ],
    example: {
      situation: "Aisha’s flatmate leaves dishes in the sink for several days.",
      applied: "“When I see dishes in the sink from Monday, I feel frustrated because I need order in shared spaces. Would you be willing to wash them by tonight?”"
    },
    useCases: ["Raising a household chore issue", "Giving a colleague difficult feedback", "Talking with a teenager about curfew", "Asking a partner for more support", "Calming a classroom disagreement", "Setting a boundary with a relative"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Using the four steps as a mechanical formula, or disguising a demand as a request, loses the intention of connection.",
    pairsWith: ["nvc-empathy", "giraffe-jackal", "four-ways", "nvc-gratitude"]
  },
  {
    id: "nvc-empathy",
    name: "NVC Empathic Receiving",
    author: "Marshall Rosenberg",
    year: "1960s–2000s",
    family: "Communication",
    tagline: "Hear the feelings and needs behind any message.",
    summary: "The receiving side of NVC: rather than advising, fixing or defending, you listen for the other person’s observations, feelings, needs and requests. Rosenberg described empathy as emptying the mind and listening with our whole being.",
    visual: "flow",
    steps: [
      { label: "Be present", text: "Quiet your own agenda and give full attention to the speaker." },
      { label: "Sense feelings", text: "Guess what the person might be feeling." },
      { label: "Sense needs", text: "Guess the need or value underneath that feeling." },
      { label: "Reflect & check", text: "Offer your guess as a question, not a diagnosis." },
      { label: "Stay until relief", text: "Keep listening until you notice the person relax or say “yes, that’s it.”" }
    ],
    example: {
      situation: "Kenji’s friend says, “My boss is impossible — nothing I do is ever good enough.”",
      applied: "“Are you feeling discouraged because you want your effort to be recognised?” Kenji then waits, listening for more before saying anything about himself."
    },
    useCases: ["Supporting a grieving friend", "Hearing a customer complaint", "Listening to a child after a hard day", "Calming a partner who is upset with you", "Helping a student who failed a test", "Hearing an elderly parent’s worries"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Jumping to advice, reassurance or your own story too soon cuts empathy short.",
    pairsWith: ["nvc", "four-ways", "dbt-validation", "oars"]
  },
  {
    id: "four-ways",
    name: "Four Ways of Hearing a Difficult Message",
    author: "Marshall Rosenberg",
    year: "1990s",
    family: "Communication",
    tagline: "Blame them, blame me, sense my needs, or sense theirs.",
    summary: "Rosenberg taught that when we hear a hard message we have four options: blame ourselves, blame others, sense our own feelings and needs, or sense the other person’s feelings and needs. The first two produce guilt, shame or anger; the last two open connection.",
    visual: "matrix",
    steps: [
      { label: "Blame self", text: "Jackal ears in: take it as criticism of yourself, leading to guilt or shame." },
      { label: "Blame others", text: "Jackal ears out: find fault with the speaker, leading to anger." },
      { label: "Sense own needs", text: "Giraffe ears in: notice your own feelings and needs in reaction." },
      { label: "Sense their needs", text: "Giraffe ears out: hear the feelings and needs behind their words." }
    ],
    example: {
      situation: "Priya’s partner says, “You’re so selfish!”",
      applied: "Instead of “I’m a terrible person” or “Look who’s talking,” Priya wonders: “Are you hurt because you need more consideration for your preferences?”"
    },
    useCases: ["Receiving criticism at work", "Hearing an angry text from a sibling", "Responding to a child shouting “I hate you”", "Handling a negative online review", "Managing a critical in-law", "Reflecting after an argument"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Pretending to have giraffe ears while still silently blaming leaks through tone.",
    pairsWith: ["giraffe-jackal", "nvc-empathy", "nvc"]
  },
  {
    id: "giraffe-jackal",
    name: "Giraffe vs Jackal Language",
    author: "Marshall Rosenberg",
    year: "1980s",
    family: "Communication",
    tagline: "Two puppets, two ways of speaking.",
    summary: "Rosenberg used a giraffe puppet (largest heart of any land animal, long neck for perspective) for compassionate communication and a jackal puppet for judgment, blame and demands. Jackals are not bad; they are unskilled ways of expressing unmet needs.",
    visual: "flow",
    steps: [
      { label: "Notice jackal", text: "Catch judgments, labels, “shoulds” and demands in your words or thoughts." },
      { label: "Pause", text: "Breathe and recognise the jackal is pointing at an unmet need." },
      { label: "Translate", text: "Find the feeling and need underneath the jackal statement." },
      { label: "Speak giraffe", text: "Express the observation, feeling, need and request." }
    ],
    example: {
      situation: "A child yells at a sibling, “You’re so mean!”",
      applied: "A teacher helps translate: “When you took my crayons, I felt angry because I wanted a turn. Can I have them back now?”"
    },
    useCases: ["Teaching young children feelings words", "Family meeting games with puppets", "Self-talk reflection journal", "Classroom conflict corner", "Workplace communication training", "Couples practice exercises"],
    ages: ["Children", "Teens", "Adults"],
    pitfalls: "Calling people “jackals” turns the model itself into a judgment.",
    pairsWith: ["nvc", "four-ways", "rosenberg-anger"]
  },
  {
    id: "rosenberg-anger",
    name: "Expressing Anger Fully",
    author: "Marshall Rosenberg",
    year: "1990s",
    family: "Emotion regulation",
    tagline: "Anger is a signal of thinking that is cut off from needs.",
    summary: "Rosenberg taught that the cause of anger lies in our judgmental thinking, not in what others do. To express anger fully, we stop, identify the judgments fueling it, connect with our needs, and express our feelings and unmet needs — often after first offering empathy to the other person.",
    visual: "flow",
    steps: [
      { label: "Stop, breathe", text: "Pause and do nothing except breathe; don’t act to punish or blame." },
      { label: "Identify judgments", text: "Notice the “should” and blame thoughts making you angry." },
      { label: "Connect with needs", text: "Find the unmet needs those judgments are pointing to." },
      { label: "Express fully", text: "Say your feelings and unmet needs, often after empathising with the other first." }
    ],
    example: {
      situation: "Mateo’s colleague arrives 30 minutes late to their joint presentation.",
      applied: "Mateo notices the thought “He’s so unreliable,” connects with his need for dependability, then says: “I felt scared and angry when you arrived at 9:30, because I needed confidence we’d be ready together.”"
    },
    useCases: ["Cooling down after being cut off in traffic", "Responding to a broken promise", "Handling a child’s repeated misbehaviour", "Discussing unfair treatment at work", "Parent-teacher disagreements", "Processing old resentment with a family member"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Skipping step two leaves you voicing the judgment as if it were a feeling.",
    pairsWith: ["nvc", "giraffe-jackal", "halt", "window-tolerance"]
  },
  {
    id: "nvc-gratitude",
    name: "NVC Gratitude",
    author: "Marshall Rosenberg",
    year: "1990s",
    family: "Relationships",
    tagline: "Appreciation without praise or flattery.",
    summary: "Rosenberg suggested expressing appreciation in three parts: the specific action that contributed to our well-being, the needs it fulfilled, and the pleasant feelings it created. This avoids praise, which he saw as a subtle form of judgment.",
    visual: "triangle",
    steps: [
      { label: "Action", text: "Name the specific thing the person did." },
      { label: "Needs met", text: "Say which of your needs it fulfilled." },
      { label: "Feelings", text: "Share the pleasant feeling you have as a result." }
    ],
    example: {
      situation: "A student, Oluwaseun, helped clean the classroom without being asked.",
      applied: "“When you stacked the chairs after art, I felt relieved and happy, because I value teamwork and it gave me time to plan tomorrow.”"
    },
    useCases: ["Thanking a teacher at year end", "Appreciating a partner’s small gesture", "Recognising an employee’s work", "Thanking a nurse or carer", "Gratitude circles in class", "Writing thank-you cards with children"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Saying “good job” or “you’re so kind” labels the person instead of sharing what came alive in you.",
    pairsWith: ["nvc", "love-languages", "gottman-repair"]
  },
  {
    id: "gottman-repair",
    name: "Soft Start-up & Repair Attempts",
    author: "John Gottman",
    year: "1990s",
    family: "Relationships",
    tagline: "How a conversation starts — and how it’s rescued.",
    summary: "John Gottman found that conversations usually end the way they begin, so a gentle “soft start-up” matters. Repair attempts — any statement or action that de-escalates tension — and the partner’s willingness to accept them are key to lasting relationships.",
    visual: "flow",
    steps: [
      { label: "Start with “I”", text: "Talk about your own feelings instead of the other person’s faults." },
      { label: "Describe, don’t judge", text: "Describe the situation without blame or labels." },
      { label: "State a positive need", text: "Say what you do want, not what you don’t." },
      { label: "Notice flooding", text: "Watch for rising tension or a racing heart in either of you." },
      { label: "Make a repair", text: "Offer a de-escalating bid, like “Can we start over?” or a touch of humour." },
      { label: "Accept the repair", text: "Receive the other’s repair attempt, even if it’s clumsy." }
    ],
    example: {
      situation: "Nadia is upset that her partner Sam hasn’t helped plan their holiday.",
      applied: "“I’m feeling stressed about the trip. I’d love it if we could sit down tonight and book the hotel together.” When voices rise, Sam says, “Let me try that again — I want this trip too.”"
    },
    useCases: ["Raising a complaint with a partner", "Restarting a heated argument", "Co-parenting discussions", "Talking with adult children", "Roommate disagreements", "Team conflicts at work"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Rejecting a repair because it wasn’t perfectly worded keeps the conflict escalating.",
    pairsWith: ["gottman-horsemen", "nvc", "love-languages"]
  },
  {
    id: "gordon-roadblocks",
    name: "12 Roadblocks to Communication",
    author: "Thomas Gordon",
    year: "1970",
    family: "Communication",
    tagline: "Well-meant responses that shut people down.",
    summary: "Thomas Gordon identified twelve common responses — the “Dirty Dozen” — that tend to block communication when someone shares a problem or feeling. They often carry hidden messages of judgment or of not being heard; active listening is the alternative.",
    visual: "wheel",
    steps: [
      { label: "Order & threaten", text: "Ordering/commanding and warning/threatening: “Stop crying or else.”" },
      { label: "Moralise & advise", text: "Moralising/preaching and advising/giving solutions: “You should just…”" },
      { label: "Lecture & judge", text: "Lecturing/logical arguments and judging/criticising: “The facts are…”, “That was stupid.”" },
      { label: "Praise & label", text: "Praising/agreeing and name-calling/ridiculing: “You’re so smart,” “Don’t be a baby.”" },
      { label: "Analyse & reassure", text: "Interpreting/diagnosing and reassuring/sympathising: “You’re just jealous,” “It’ll be fine.”" },
      { label: "Probe & distract", text: "Questioning/interrogating and withdrawing/distracting: “Why did you do that?”, “Let’s talk about something nicer.”" }
    ],
    example: {
      situation: "Thandiwe’s son says, “Nobody at school likes me.”",
      applied: "Instead of “Of course they do!” (reassuring) or “Just try harder” (advising), she reflects: “You’re feeling left out at school.”"
    },
    useCases: ["Listening to a child’s worries", "Supporting a friend in crisis", "Teacher-student conferences", "Manager one-on-ones", "Helping an older parent with fears", "Peer support training"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Roadblocks aren’t always wrong — they cause harm mainly when the other person owns a problem and needs to be heard.",
    pairsWith: ["gordon-pet", "nvc-empathy", "oars"]
  },
  {
    id: "self-compassion",
    name: "Self-Compassion",
    author: "Kristin Neff",
    year: "2003",
    family: "Emotion regulation",
    tagline: "Treat yourself as you would a good friend.",
    summary: "Kristin Neff defines self-compassion as three interacting components: self-kindness, common humanity and mindfulness. Each has an opposite — self-judgment, isolation and over-identification — that it replaces.",
    visual: "triangle",
    steps: [
      { label: "Self-kindness", text: "Respond to your own pain with warmth rather than harsh self-judgment." },
      { label: "Common humanity", text: "Remember that struggle and imperfection are part of being human, not signs you are alone." },
      { label: "Mindfulness", text: "Hold painful feelings in balanced awareness without over-identifying with them." }
    ],
    example: {
      situation: "After snapping at her students, teacher Mei lies awake replaying it.",
      applied: "She places a hand on her heart: “This is a hard moment. Every teacher loses patience sometimes. May I be kind to myself and make a repair tomorrow.”"
    },
    useCases: ["After making a mistake at work", "Parent guilt", "Exam failure", "Body image struggles", "Caregiver exhaustion", "Self-talk before a difficult conversation"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Confusing self-compassion with self-pity or letting yourself off the hook misses its role in motivating growth.",
    pairsWith: ["rosenberg-anger", "circle-control", "window-tolerance"]
  },
  {
    id: "gottman-horsemen",
    name: "Four Horsemen & Antidotes",
    author: "John Gottman",
    year: "1990s",
    family: "Relationships",
    tagline: "Spot the four patterns that predict breakups — and their cures.",
    summary: "John Gottman’s research identified four communication patterns — criticism, contempt, defensiveness and stonewalling — as strong predictors of relationship breakdown. Each has a specific antidote.",
    visual: "matrix",
    steps: [
      { label: "Criticism → Gentle start-up", text: "Replace attacking character with a complaint using “I feel … about … I need …”." },
      { label: "Contempt → Appreciation", text: "Replace mockery and disgust with a culture of appreciation and respect." },
      { label: "Defensiveness → Responsibility", text: "Replace counter-attack or innocent victimhood by accepting part of the responsibility." },
      { label: "Stonewalling → Self-soothing", text: "Replace shutting down by taking a 20-minute break to physiologically self-soothe." }
    ],
    example: {
      situation: "Sofia says to her husband, “You never think about anyone but yourself.”",
      applied: "Gentle start-up: “I feel lonely when plans get made without me. I’d love it if we checked with each other first.”"
    },
    useCases: ["Couples arguments", "Co-parenting after divorce", "Roommate tension", "Workplace team conflict", "Adult siblings disagreeing", "Premarital education"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Using the horsemen labels to accuse your partner becomes a new form of criticism.",
    pairsWith: ["emotion-coaching", "nvc", "love-languages"]
  },
  {
    id: "emotion-coaching",
    name: "Emotion Coaching",
    author: "John Gottman",
    year: "1997",
    family: "Classroom & parenting",
    tagline: "Every emotion is a chance to connect and teach.",
    summary: "From Gottman’s book “Raising an Emotionally Intelligent Child,” emotion coaching is a five-step approach for helping children understand and manage feelings. All feelings are accepted; not all behaviours are.",
    visual: "flow",
    steps: [
      { label: "Be aware", text: "Notice the child’s emotion, including lower-intensity ones." },
      { label: "See opportunity", text: "Recognise the emotion as a chance for closeness and teaching." },
      { label: "Listen & validate", text: "Listen empathically and validate the child’s feelings." },
      { label: "Label", text: "Help the child find words for the emotion." },
      { label: "Limits & solutions", text: "Set limits on behaviour while problem-solving together." }
    ],
    example: {
      situation: "Ravi, 8, is furious his tablet time ended.",
      applied: "“You’re really mad; you were right in the middle of a level. Hitting the couch isn’t okay. What could you do with mad feelings instead?”"
    },
    useCases: ["Bedtime meltdowns", "Sibling jealousy", "First day of school nerves", "Teen heartbreak", "Losing a game", "Grief after a pet dies"],
    ages: ["Children", "Teens"],
    pitfalls: "Rushing to fix or dismissing small feelings (“you’re fine”) skips the connection.",
    pairsWith: ["self-compassion", "gottman-horsemen", "dbt-validation"]
  },
  {
    id: "gordon-pet",
    name: "I-Messages & Active Listening (P.E.T.)",
    author: "Thomas Gordon",
    year: "1962",
    family: "Classroom & parenting",
    tagline: "Who owns the problem decides which skill you use.",
    summary: "Thomas Gordon’s Parent Effectiveness Training teaches adults to decide who owns a problem: when the child does, use active listening; when the adult does, use an I-message. Conflicts of needs are solved with the “no-lose” Method III.",
    visual: "flow",
    steps: [
      { label: "Problem ownership", text: "Decide whose needs are unmet by the behaviour." },
      { label: "Active listening", text: "If the child owns it, reflect back their feelings without judging or advising." },
      { label: "I-message", text: "If you own it, state the behaviour, its tangible effect on you, and your feeling." },
      { label: "Method III", text: "For conflicts of needs, find a no-lose solution together." }
    ],
    example: {
      situation: "Chen’s son leaves his bike in the driveway.",
      applied: "I-message: “When the bike is in the driveway, I can’t park the car, and I feel annoyed.”"
    },
    useCases: ["Parenting school-age children", "Teacher-student conflicts", "Workplace manager feedback", "Roommate disputes", "Youth sports coaching", "Family meetings"],
    ages: ["Children", "Teens", "Adults"],
    pitfalls: "A “you-message” disguised as an I-message (“I feel you are lazy”) still blames.",
    pairsWith: ["nvc", "cps", "nvc-empathy"]
  },
  {
    id: "cps",
    name: "Collaborative & Proactive Solutions (Plan B)",
    author: "Ross Greene",
    year: "1998",
    family: "Classroom & parenting",
    tagline: "Kids do well if they can.",
    summary: "Ross Greene’s CPS model sees challenging behaviour as a sign of lagging skills and unsolved problems. Plan B solves those problems collaboratively and proactively, rather than imposing adult will (Plan A) or dropping expectations (Plan C).",
    visual: "flow",
    steps: [
      { label: "Empathy step", text: "Gather information to understand the child’s concern about a specific unsolved problem." },
      { label: "Define adult concerns", text: "Share the adult’s concern about the same problem." },
      { label: "Invitation", text: "Brainstorm solutions that are realistic and mutually satisfactory." }
    ],
    example: {
      situation: "Fatima often refuses to start homework after school.",
      applied: "“I’ve noticed homework’s been hard to start after school. What’s up?” After hearing she’s exhausted, Mom shares, “My concern is it doesn’t get done,” and they agree on a snack and 30-minute break first."
    },
    useCases: ["Chronic homework battles", "School refusal", "Explosive behaviour at home", "Classroom disruptions", "Teen screen-time limits", "Residential care settings"],
    ages: ["Children", "Teens"],
    pitfalls: "Doing Plan B during a meltdown instead of proactively, at a calm time, rarely works.",
    pairsWith: ["gordon-pet", "nvc", "restorative"]
  },
  {
    id: "restorative",
    name: "Restorative Questions",
    author: "Restorative Practices (IIRP; Ted Wachtel)",
    year: "1990s",
    family: "Conflict",
    tagline: "Repair harm instead of assigning punishment.",
    summary: "Restorative practices use a set of questions to help those who caused harm and those affected understand the impact and make things right. They focus on relationships rather than rule-breaking alone.",
    visual: "flow",
    steps: [
      { label: "What happened?", text: "Invite the person to tell their account." },
      { label: "Thinking then", text: "Ask what they were thinking at the time." },
      { label: "Thinking since", text: "Ask what they have thought about since." },
      { label: "Who was affected?", text: "Explore who has been affected and in what way." },
      { label: "Make it right", text: "Ask what needs to happen to make things right." }
    ],
    example: {
      situation: "Two teens, Jamal and Lucas, scuffle in the hallway.",
      applied: "A mentor meets them in a circle, asking each, “What happened? Who has been affected? What do you think you need to do to make things right?”"
    },
    useCases: ["School discipline incidents", "Sports team conflicts", "Workplace harm", "Neighbour disputes", "Youth justice conferencing", "Family repair after a hurtful event"],
    ages: ["Children", "Teens", "Adults"],
    pitfalls: "Forcing apologies or rushing to agreements makes repair hollow.",
    pairsWith: ["cps", "nvc", "thomas-kilmann"]
  },
  {
    id: "thomas-kilmann",
    name: "Thomas–Kilmann Conflict Modes",
    author: "Kenneth Thomas & Ralph Kilmann",
    year: "1974",
    family: "Conflict",
    tagline: "Five styles, each right in the right moment.",
    summary: "The Thomas–Kilmann Conflict Mode Instrument maps conflict behaviour on two dimensions — assertiveness and cooperativeness — giving five modes. No mode is always best; skill lies in choosing well.",
    visual: "wheel",
    steps: [
      { label: "Competing", text: "Assertive and uncooperative: pursue your own concerns." },
      { label: "Collaborating", text: "Assertive and cooperative: find a solution that fully satisfies both." },
      { label: "Compromising", text: "Middle ground: each gives a little to reach a quick agreement." },
      { label: "Avoiding", text: "Unassertive and uncooperative: sidestep or postpone the conflict." },
      { label: "Accommodating", text: "Unassertive and cooperative: yield to the other’s concerns." }
    ],
    example: {
      situation: "Two coworkers, Hana and Diego, want the same vacation week.",
      applied: "They choose to collaborate: discussing why each needs that week, they split it and swap a holiday later in the year."
    },
    useCases: ["Team project disputes", "Negotiating salary", "Family holiday planning", "Board meetings", "Sibling rivalry", "Community group decisions"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Getting stuck in one habitual mode for every conflict limits outcomes.",
    pairsWith: ["restorative", "crucial-state", "nvc"]
  },
  {
    id: "drama-triangle",
    name: "Karpman Drama Triangle",
    author: "Stephen Karpman",
    year: "1968",
    family: "High-conflict people",
    tagline: "Three roles that keep conflict spinning.",
    summary: "Stephen Karpman described three roles people fall into during dysfunctional conflict: Persecutor, Victim and Rescuer. People switch roles, keeping the drama going and avoiding real responsibility.",
    visual: "triangle",
    steps: [
      { label: "Persecutor", text: "Blames, criticises and controls: “It’s all your fault.”" },
      { label: "Victim", text: "Feels helpless and hopeless: “Poor me.”" },
      { label: "Rescuer", text: "Fixes and enables, often uninvited: “Let me help you.”" }
    ],
    example: {
      situation: "A parent scolds a teen (Persecutor), the teen sulks (Victim), and the other parent steps in to defend the teen (Rescuer).",
      applied: "Naming the roles helps the family notice the pattern, after which the rescuing parent might step back and invite the two to talk directly."
    },
    useCases: ["Family conflict patterns", "Workplace gossip", "Friend group drama", "Co-parenting disputes", "Therapy reflection", "Caring for an ill relative"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Labelling others “the Victim” or “the Persecutor” can itself become persecution.",
    pairsWith: ["ted", "ta-pac", "biff"]
  },
  {
    id: "ted",
    name: "The Empowerment Dynamic (TED*)",
    author: "David Emerald",
    year: "2005",
    family: "Relationships",
    tagline: "From Victim, Persecutor, Rescuer to Creator, Challenger, Coach.",
    summary: "David Emerald’s The Empowerment Dynamic offers an alternative to the Drama Triangle: the Victim becomes a Creator, the Persecutor a Challenger and the Rescuer a Coach. The focus shifts from problems to desired outcomes.",
    visual: "triangle",
    steps: [
      { label: "Creator", text: "Focuses on outcomes and takes steps toward what they want." },
      { label: "Challenger", text: "Provokes growth and learning by holding people accountable constructively." },
      { label: "Coach", text: "Asks questions that help others find their own solutions." }
    ],
    example: {
      situation: "Nia feels overwhelmed by a chaotic project.",
      applied: "Instead of rescuing, her manager coaches: “What outcome do you want by Friday? What’s one step you can take today?”"
    },
    useCases: ["Leadership development", "Coaching sessions", "Parenting teens", "Team retrospectives", "Personal goal-setting", "Recovering from setbacks"],
    ages: ["Teens", "Adults"],
    pitfalls: "Using “be a Creator” to dismiss real hardship ignores genuine constraints.",
    pairsWith: ["drama-triangle", "circle-control", "oars"]
  },
  {
    id: "ta-pac",
    name: "Parent–Adult–Child (Transactional Analysis)",
    author: "Eric Berne",
    year: "1950s–1964",
    family: "Communication",
    tagline: "Which ego state is speaking right now?",
    summary: "Eric Berne’s Transactional Analysis describes three ego states: Parent (learned attitudes from caregivers), Adult (here-and-now reasoning) and Child (feelings and responses from childhood). Communication runs smoothly when transactions are complementary and breaks down when they cross.",
    visual: "layers",
    steps: [
      { label: "Child", text: "Feelings and behaviours replayed from childhood: playful, creative, or adapted and rebellious." },
      { label: "Adult", text: "Objective, present-moment thinking that gathers facts and weighs options." },
      { label: "Parent", text: "Values and behaviours copied from parents: nurturing or critical." }
    ],
    example: {
      situation: "A manager snaps, “Why is this report late again?” (Critical Parent).",
      applied: "Rather than responding from Child (“It’s not my fault!”), Elif answers from Adult: “It needs one more data set; I can finish by 3 pm.”"
    },
    useCases: ["Workplace communication", "Parent-teen arguments", "Customer service", "Self-reflection journaling", "Couples counselling", "Leadership training"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "The ego states are not literal parents, adults or children, which can confuse learners.",
    pairsWith: ["drama-triangle", "nvc", "ladder-inference"]
  },
  {
    id: "window-tolerance",
    name: "Window of Tolerance",
    author: "Dan Siegel",
    year: "1999",
    family: "Emotion regulation",
    tagline: "The zone where we can think and feel at the same time.",
    summary: "Dan Siegel coined the Window of Tolerance to describe the optimal arousal zone where we can manage emotions and think clearly. Above it lies hyperarousal; below it, hypoarousal.",
    visual: "layers",
    steps: [
      { label: "Hypoarousal", text: "Below the window: numb, shut down, foggy, disconnected." },
      { label: "Window of Tolerance", text: "Calm enough to think, alert enough to engage; emotions are manageable." },
      { label: "Hyperarousal", text: "Above the window: anxious, panicky, angry, overwhelmed." }
    ],
    example: {
      situation: "During an exam, Kwame’s heart races and his mind goes blank.",
      applied: "He recognises he’s above his window, slows his breathing and presses his feet into the floor until he can read the question again."
    },
    useCases: ["Exam anxiety", "Trauma-informed classrooms", "Workplace stress", "Parenting under pressure", "Therapy psychoeducation", "Caring for loved ones with dementia"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Treating the window as fixed misses that it can widen with support and practice.",
    pairsWith: ["hand-model", "polyvagal-ladder", "self-compassion"]
  },
  {
    id: "hand-model",
    name: "Hand Model of the Brain",
    author: "Dan Siegel",
    year: "2010",
    family: "Emotion regulation",
    tagline: "Flipping your lid, explained with your hand.",
    summary: "Dan Siegel’s hand model uses a closed fist to show the brain: the wrist as brainstem, the thumb as the limbic area, and the fingers as the cortex. When upset, we “flip our lid” and lose access to the prefrontal cortex.",
    visual: "flow",
    steps: [
      { label: "Wrist & palm", text: "The brainstem: basic survival functions like heartbeat and fight-flight-freeze." },
      { label: "Thumb", text: "Folded in, the limbic area: emotions and memory." },
      { label: "Fingers", text: "Curled over, the cortex: thinking and perceiving." },
      { label: "Fingertips", text: "The prefrontal cortex: calming, empathy and wise choices." },
      { label: "Flip the lid", text: "Raise the fingers: when overwhelmed, the prefrontal cortex goes offline." },
      { label: "Reconnect", text: "Breathe and soothe to close the fist again." }
    ],
    example: {
      situation: "Maya, 10, slams her door after an argument.",
      applied: "Later, her mum shows the hand model: “We both flipped our lids. Let’s practise what helps us close them again.”"
    },
    useCases: ["Teaching kids about anger", "Classroom calm-down lessons", "Couples recognising flooding", "Workplace stress training", "Parent self-regulation", "Therapy with teens"],
    ages: ["Children", "Teens", "Adults"],
    pitfalls: "It is a simplification of neuroscience; don’t treat it as an exact map of the brain.",
    pairsWith: ["window-tolerance", "self-compassion", "emotion-coaching"]
  },
  {
    id: "dear-man",
    name: "DEAR MAN",
    author: "Marsha Linehan (DBT)",
    year: "1993",
    family: "Communication",
    tagline: "Ask for what you want effectively.",
    summary: "DEAR MAN is a Dialectical Behavior Therapy interpersonal effectiveness skill for asking for something or saying no. It balances clarity, assertiveness and flexibility.",
    visual: "flow",
    steps: [
      { label: "Describe", text: "Describe the situation using facts." },
      { label: "Express", text: "Express feelings and opinions with “I” statements." },
      { label: "Assert", text: "Ask clearly for what you want or say no." },
      { label: "Reinforce", text: "Explain the positive effects of getting what you want." },
      { label: "Mindful", text: "Stay focused on your goal; use a “broken record” if needed." },
      { label: "Appear confident", text: "Use a confident tone and posture." },
      { label: "Negotiate", text: "Be willing to give to get; offer alternatives." }
    ],
    example: {
      situation: "Isabela needs her landlord to fix a broken heater.",
      applied: "“The heater has been broken since Monday. I’m worried about the cold. Could you send someone by Thursday? It would prevent pipe damage too.”"
    },
    useCases: ["Asking for a raise", "Requesting repairs", "Saying no to extra shifts", "Talking with a doctor", "Negotiating with a teen", "Returning a faulty product"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Forgetting to negotiate can make assertiveness feel rigid.",
    pairsWith: ["give", "dbt-validation", "nvc"]
  },
  {
    id: "give",
    name: "GIVE",
    author: "Marsha Linehan (DBT)",
    year: "1993",
    family: "Relationships",
    tagline: "Keep the relationship while you ask.",
    summary: "GIVE is a DBT interpersonal effectiveness skill for maintaining relationships during conversations. It pairs naturally with DEAR MAN.",
    visual: "flow",
    steps: [
      { label: "Gentle", text: "No attacks, threats or judgments." },
      { label: "Interested", text: "Listen and show interest in the other person." },
      { label: "Validate", text: "Acknowledge the other person’s feelings and point of view." },
      { label: "Easy manner", text: "Use a little humour and a light, relaxed tone." }
    ],
    example: {
      situation: "Liam wants to decline a friend’s party invitation.",
      applied: "“I’m really glad you invited me — I know how much you’ve planned. I can’t make it Saturday, but could we grab lunch next week?”"
    },
    useCases: ["Declining invitations", "Friendship repair", "Workplace collaboration", "Family disagreements", "Dating conversations", "Talking with neighbours"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Being so gentle you never state your needs leads to resentment.",
    pairsWith: ["dear-man", "dbt-validation", "nvc-empathy"]
  },
  {
    id: "dbt-validation",
    name: "Six Levels of Validation",
    author: "Marsha Linehan (DBT)",
    year: "1997",
    family: "Emotion regulation",
    tagline: "Climbing from listening to radical genuineness.",
    summary: "Marsha Linehan described six levels of validation, from simply paying attention to treating someone as an equal. Validation communicates that a person’s feelings make sense, without having to agree.",
    visual: "ladder",
    steps: [
      { label: "Be present", text: "Pay attention with genuine interest." },
      { label: "Accurate reflection", text: "Reflect back what you heard without judgment." },
      { label: "Read the unspoken", text: "Guess what the person might feel or think but hasn’t said." },
      { label: "Past & biology", text: "Explain how their reaction makes sense given their history or biology." },
      { label: "Normalise", text: "Show that the reaction is reasonable in the current situation." },
      { label: "Radical genuineness", text: "Treat the person as an equal, capable human." }
    ],
    example: {
      situation: "Zainab says she’s nervous about her driving test after failing once.",
      applied: "Level 4: “Of course you’re nervous; last time was really hard.” Level 5: “Most people would feel nervous before a test.”"
    },
    useCases: ["Supporting an anxious teen", "Therapy sessions", "Comforting a friend", "Customer service", "Caring for older adults", "Managing an upset employee"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Validating behaviour that is harmful is different from validating the feeling behind it.",
    pairsWith: ["nvc-empathy", "give", "emotion-coaching"]
  },
  {
    id: "biff",
    name: "BIFF Responses",
    author: "Bill Eddy",
    year: "2011",
    family: "High-conflict people",
    tagline: "Brief, Informative, Friendly, Firm.",
    summary: "Bill Eddy’s BIFF method is for responding to hostile emails, texts and comments, especially from high-conflict people. It ends the back-and-forth without escalating.",
    visual: "flow",
    steps: [
      { label: "Brief", text: "Keep it short, usually a paragraph." },
      { label: "Informative", text: "Give accurate, useful facts, not opinions or defences." },
      { label: "Friendly", text: "Use a friendly, respectful tone." },
      { label: "Firm", text: "End the conversation or offer clear choices." }
    ],
    example: {
      situation: "An ex-partner texts, “You’re always late picking up the kids — you’re useless!”",
      applied: "“Thanks for letting me know your concern. I’ll arrive at 5 pm on Friday as scheduled. Have a good week.”"
    },
    useCases: ["Co-parenting texts", "Responding to angry customers", "Workplace email conflicts", "Neighbour disputes", "Online comment replies", "Family group chats"],
    ages: ["Adults", "Older adults"],
    pitfalls: "Adding advice, apologies or sarcasm makes a BIFF response escalate.",
    pairsWith: ["drama-triangle", "nvc", "dear-man"]
  },
  {
    id: "crucial-state",
    name: "Crucial Conversations: STATE",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan & Al Switzler",
    year: "2002",
    family: "Conflict",
    tagline: "Speak your mind without shutting others down.",
    summary: "From the book “Crucial Conversations,” STATE is a way to share your view when stakes are high, opinions differ and emotions run strong. It keeps dialogue safe while being honest.",
    visual: "flow",
    steps: [
      { label: "Share facts", text: "Start with the least controversial, most persuasive facts." },
      { label: "Tell your story", text: "Explain what you’re beginning to conclude." },
      { label: "Ask for paths", text: "Invite others to share their facts and stories." },
      { label: "Talk tentatively", text: "State your story as a story, not a fact." },
      { label: "Encourage testing", text: "Make it safe for others to disagree." }
    ],
    example: {
      situation: "Grace notices her team member missed three deadlines.",
      applied: "“The last three reports came in after the deadline. I’m starting to wonder if the workload is too heavy. How do you see it?”"
    },
    useCases: ["Performance reviews", "Raising safety concerns", "Family financial talks", "Discussing health with a parent", "Difficult partner conversations", "Board disagreements"],
    ages: ["Adults", "Older adults"],
    pitfalls: "Rushing to conclusions or speaking too tentatively can blur the message.",
    pairsWith: ["ladder-inference", "sbi", "thomas-kilmann"]
  },
  {
    id: "radical-candor",
    name: "Radical Candor",
    author: "Kim Scott",
    year: "2017",
    family: "Feedback",
    tagline: "Care personally, challenge directly.",
    summary: "Kim Scott’s Radical Candor framework maps feedback on two axes: caring personally and challenging directly. The goal is the quadrant where both are high.",
    visual: "matrix",
    steps: [
      { label: "Radical Candor", text: "Care personally and challenge directly: kind, clear, specific feedback." },
      { label: "Obnoxious Aggression", text: "Challenge directly without caring: brutal honesty." },
      { label: "Ruinous Empathy", text: "Care without challenging: being “nice” but unclear." },
      { label: "Manipulative Insincerity", text: "Neither caring nor challenging: political, insincere." }
    ],
    example: {
      situation: "Ahmed’s presentation had good data but went 15 minutes over.",
      applied: "“Your analysis was strong. You went 15 minutes over, though, and we lost the room. Want to rehearse with a timer together?”"
    },
    useCases: ["Manager feedback", "Peer reviews", "Coaching athletes", "Teacher comments on essays", "Startup team culture", "Mentoring sessions"],
    ages: ["Adults"],
    pitfalls: "Using “radical candor” as an excuse for harshness skips the caring axis.",
    pairsWith: ["sbi", "crucial-state", "nvc"]
  },
  {
    id: "sbi",
    name: "SBI Feedback",
    author: "Center for Creative Leadership",
    year: "1990s",
    family: "Feedback",
    tagline: "Situation, Behavior, Impact.",
    summary: "The Situation–Behavior–Impact model, from the Center for Creative Leadership, gives feedback that is specific and non-judgmental. It focuses on observable behaviour and its effect.",
    visual: "flow",
    steps: [
      { label: "Situation", text: "Describe when and where it happened." },
      { label: "Behavior", text: "Describe the specific, observable behaviour." },
      { label: "Impact", text: "Share the impact the behaviour had on you or others." }
    ],
    example: {
      situation: "Marisol interrupted colleagues during a meeting.",
      applied: "“In this morning’s budget meeting, you interrupted Ji-woo twice. I noticed she stopped contributing afterward.”"
    },
    useCases: ["Weekly one-on-ones", "Peer feedback", "Praising good work", "Classroom feedback", "Volunteer coordination", "Coaching sports teams"],
    ages: ["Teens", "Adults"],
    pitfalls: "Vague behaviour descriptions like “you were rude” turn into judgments.",
    pairsWith: ["radical-candor", "nvc", "crucial-state"]
  },
  {
    id: "oars",
    name: "Motivational Interviewing: OARS",
    author: "William Miller & Stephen Rollnick",
    year: "1991",
    family: "Communication",
    tagline: "Evoke change instead of pushing it.",
    summary: "Motivational Interviewing, developed by William Miller and Stephen Rollnick, helps people resolve ambivalence about change. OARS names its four core communication skills.",
    visual: "flow",
    steps: [
      { label: "Open questions", text: "Ask questions that invite more than a yes or no." },
      { label: "Affirmations", text: "Recognise strengths and efforts genuinely." },
      { label: "Reflective listening", text: "Reflect back meaning and feeling." },
      { label: "Summaries", text: "Pull together what you’ve heard, especially change talk." }
    ],
    example: {
      situation: "Darnell is unsure about cutting back on energy drinks.",
      applied: "“What do you like about them, and what worries you? … So they help you get through late shifts, and you’re also noticing you can’t sleep.”"
    },
    useCases: ["Health coaching", "Teens and substance use", "Supporting exercise goals", "Financial counselling", "Teachers motivating students", "Encouraging medication adherence"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Using OARS as a trick to steer someone toward your goal breaks trust.",
    pairsWith: ["leap", "nvc-empathy", "ted"]
  },
  {
    id: "leap",
    name: "LEAP",
    author: "Xavier Amador",
    year: "2000",
    family: "Communication",
    tagline: "Listen, Empathize, Agree, Partner.",
    summary: "Xavier Amador developed LEAP to help families connect with loved ones who lack insight into their mental illness (anosognosia). It builds trust instead of arguing over who is right.",
    visual: "flow",
    steps: [
      { label: "Listen", text: "Reflectively listen to the person’s beliefs and experiences." },
      { label: "Empathize", text: "Express empathy for their feelings, including about treatment." },
      { label: "Agree", text: "Find common ground and points you can genuinely agree on." },
      { label: "Partner", text: "Work together toward shared goals." }
    ],
    example: {
      situation: "Rosa’s brother refuses medication, saying he isn’t ill.",
      applied: "“It sounds like you hate how the pills make you feel tired. We both want you to get back to work. What might help with that?”"
    },
    useCases: ["Supporting a relative with mental illness", "Talking with someone resisting treatment", "Healthcare conversations", "Addressing a political disagreement", "Caring for older adults refusing help", "Workplace change resistance"],
    ages: ["Adults", "Older adults"],
    pitfalls: "Faking agreement destroys trust; agree only with what you genuinely can.",
    pairsWith: ["oars", "nvc-empathy", "dbt-validation"]
  },
  {
    id: "ladder-inference",
    name: "Ladder of Inference",
    author: "Chris Argyris (popularised by Peter Senge)",
    year: "1970s–1990",
    family: "Communication",
    tagline: "How we leap from facts to conclusions.",
    summary: "Chris Argyris described how we climb a mental ladder from observable data to actions, often in seconds. Climbing back down helps us check assumptions before reacting.",
    visual: "ladder",
    steps: [
      { label: "Observable data", text: "Everything that could be seen or heard." },
      { label: "Selected data", text: "The details we notice and focus on." },
      { label: "Meanings", text: "Meanings we add based on culture and experience." },
      { label: "Assumptions", text: "Assumptions we make from those meanings." },
      { label: "Conclusions", text: "Conclusions we draw." },
      { label: "Beliefs", text: "Beliefs we adopt about the world." },
      { label: "Actions", text: "Actions we take based on those beliefs." }
    ],
    example: {
      situation: "Pedro’s friend doesn’t reply to his message for two days.",
      applied: "Pedro notices he’s climbed to “She doesn’t care about me.” He steps down to the data — no reply — and asks, “Hey, is everything okay?”"
    },
    useCases: ["Unanswered messages", "Team misunderstandings", "Classroom assumptions about students", "Political disagreements", "Hiring decisions", "Family conflict"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Using it to prove the other person is wrong misses your own climb.",
    pairsWith: ["nvc", "crucial-state", "ta-pac"]
  },
  {
    id: "circle-control",
    name: "Circle of Control",
    author: "Adapted from Stephen Covey’s Circle of Concern and Influence",
    year: "1989",
    family: "Emotion regulation",
    tagline: "Focus energy where it counts.",
    summary: "Adapted from Stephen Covey’s “7 Habits,” the Circle of Control sorts worries into what we control, what we can influence, and what we can only be concerned about. Focusing inward reduces helplessness.",
    visual: "layers",
    steps: [
      { label: "Concern", text: "Things that affect us but we can’t change, like the weather or the past." },
      { label: "Influence", text: "Things we can affect but not control, like others’ choices." },
      { label: "Control", text: "Our own words, actions, effort and responses." }
    ],
    example: {
      situation: "Aaliyah is anxious about her school’s exam results.",
      applied: "She writes “my study plan and sleep” in Control, “asking the teacher for help” in Influence, and “exam questions” in Concern."
    },
    useCases: ["Exam stress", "Workplace change", "Health worries", "Climate anxiety", "Parenting teens", "Coping with ageing"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Using it to dismiss real injustice as “not my concern” can be avoidance.",
    pairsWith: ["self-compassion", "ted", "halt"]
  },
  {
    id: "erikson",
    name: "Erikson’s Psychosocial Stages",
    author: "Erik Erikson",
    year: "1950",
    family: "Development",
    tagline: "Eight life crises from birth to old age.",
    summary: "Erik Erikson proposed eight stages of psychosocial development, each centred on a tension that shapes identity and relationships. Understanding them helps us meet people’s needs at different ages.",
    visual: "ladder",
    steps: [
      { label: "Trust vs Mistrust", text: "Infancy: learning that caregivers are reliable (hope)." },
      { label: "Autonomy vs Shame", text: "Toddlerhood: developing independence (will)." },
      { label: "Initiative vs Guilt", text: "Preschool: taking initiative in play and tasks (purpose)." },
      { label: "Industry vs Inferiority", text: "School age: mastering skills and feeling competent (competence)." },
      { label: "Identity vs Role Confusion", text: "Adolescence: forming a sense of self (fidelity)." },
      { label: "Intimacy vs Isolation", text: "Young adulthood: forming close relationships (love)." },
      { label: "Generativity vs Stagnation", text: "Middle adulthood: contributing to the next generation (care)." },
      { label: "Integrity vs Despair", text: "Late adulthood: reflecting on life with acceptance (wisdom)." }
    ],
    example: {
      situation: "Fourteen-year-old Arjun keeps changing his clothing style and friend group.",
      applied: "His parents see the Identity stage at work and respond with curiosity: “What do you like about this new look?”"
    },
    useCases: ["Understanding toddler independence", "Supporting teen identity", "Mentoring young adults", "Midlife career shifts", "Life review with older adults", "Planning age-appropriate lessons"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Treating stages as rigid timelines ignores culture and individual differences.",
    pairsWith: ["self-compassion", "emotion-coaching", "love-languages"]
  },
  {
    id: "polyvagal-ladder",
    name: "Polyvagal-Informed Ladder (Simplified)",
    author: "Deb Dana, based on Stephen Porges’ Polyvagal Theory",
    year: "2018",
    family: "Emotion regulation",
    tagline: "Simplified: safe, mobilised, shut down.",
    summary: "This is a simplified teaching tool inspired by Deb Dana’s autonomic ladder, which draws on Stephen Porges’ Polyvagal Theory. It maps three states from safe and social to fight-or-flight to shutdown; the underlying theory is debated among scientists, so treat it as a helpful metaphor.",
    visual: "ladder",
    steps: [
      { label: "Shutdown (dorsal)", text: "Bottom rung: numb, collapsed, disconnected, hopeless." },
      { label: "Mobilised (sympathetic)", text: "Middle rung: fight or flight — anxious, angry, restless." },
      { label: "Safe & social (ventral)", text: "Top rung: calm, connected, curious and open." }
    ],
    example: {
      situation: "After a tense meeting, Yuki notices she feels flat and withdrawn.",
      applied: "She names it, “I’m near the bottom of my ladder,” and takes a short walk, then calls a friend to climb back toward connection."
    },
    useCases: ["Self-check-ins at work", "Trauma-informed teaching", "Therapy psychoeducation", "Parent self-regulation", "Recognising burnout", "Caregiver stress"],
    ages: ["Teens", "Adults", "Older adults"],
    pitfalls: "Presenting it as settled neuroscience overstates the evidence; use it as a simplified map.",
    pairsWith: ["window-tolerance", "hand-model", "halt"]
  },
  {
    id: "halt",
    name: "HALT Check",
    author: "Recovery communities (12-step tradition)",
    year: "20th century",
    family: "Emotion regulation",
    tagline: "Hungry, Angry, Lonely, Tired?",
    summary: "HALT is a quick self-check popular in addiction recovery and beyond. Before reacting or making decisions, ask whether you are hungry, angry, lonely or tired — and meet that need first.",
    visual: "wheel",
    steps: [
      { label: "Hungry", text: "Do I need food or water?" },
      { label: "Angry", text: "Am I carrying anger or frustration that needs attention?" },
      { label: "Lonely", text: "Do I need connection or support?" },
      { label: "Tired", text: "Do I need rest or sleep?" }
    ],
    example: {
      situation: "Omar snaps at his kids at 6 pm.",
      applied: "He pauses for a HALT check, realises he skipped lunch, eats a snack, and apologises: “I was hungry and grumpy; I’m sorry I yelled.”"
    },
    useCases: ["Before difficult conversations", "Addiction recovery", "After-school meltdowns", "Late-night arguments", "Caregiver burnout", "Workplace irritability"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Using HALT to dismiss someone else’s feelings (“you’re just tired”) invalidates them.",
    pairsWith: ["rosenberg-anger", "circle-control", "window-tolerance"]
  },
  {
    id: "love-languages",
    name: "The 5 Love Languages",
    author: "Gary Chapman",
    year: "1992",
    family: "Relationships",
    tagline: "Express love in a way the other person can receive.",
    summary: "Gary Chapman proposed that people tend to give and receive love in five main ways. Learning someone’s preferred language helps them actually feel cared for; research support for strict “types” is limited, so treat them as useful prompts.",
    visual: "wheel",
    steps: [
      { label: "Words of Affirmation", text: "Spoken or written appreciation and encouragement." },
      { label: "Quality Time", text: "Undivided attention and shared experiences." },
      { label: "Receiving Gifts", text: "Thoughtful tokens that show you were remembered." },
      { label: "Acts of Service", text: "Helpful actions that ease the other’s load." },
      { label: "Physical Touch", text: "Hugs, holding hands and other welcome touch." }
    ],
    example: {
      situation: "Elena brings flowers, but her partner Kofi most values quality time.",
      applied: "They talk about it, and Elena plans a phone-free evening walk; Kofi starts leaving her small gifts."
    },
    useCases: ["Couples connection", "Parenting different children", "Friendship maintenance", "Workplace appreciation", "Caring for older parents", "Classroom belonging"],
    ages: ["Children", "Teens", "Adults", "Older adults"],
    pitfalls: "Boxing people into one language can overlook that needs change.",
    pairsWith: ["nvc-gratitude", "gottman-horsemen", "erikson"]
  }
];
