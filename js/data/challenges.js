window.NVC = window.NVC || {};

window.NVC.challenges = {
  quizzes: [
    {
      id: "obs",
      name: "Observation or Evaluation?",
      icon: "🔍",
      description: "Can you tell what a camera would record from what your mind adds? Marshall Rosenberg called separating the two the first step of NVC.",
      items: [
        { q: "“You came home at 11:40 pm last night.”", options: ["Observation", "Evaluation"], answer: 0, explain: "A specific time and event that a camera could record — no judgment attached." },
        { q: "“You’re always late.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Always” is a generalisation. An observation would name specific occasions, like “the last three meetings”." },
        { q: "“Priya didn’t ask any questions during the meeting.”", options: ["Observation", "Evaluation"], answer: 0, explain: "It describes what happened without labelling Priya as shy, bored or disengaged." },
        { q: "“Daniel is a procrastinator.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Procrastinator” is a label about who Daniel is. An observation names what he did, e.g. “started the essay the night before it was due”." },
        { q: "“Ahmed told me three times today that he hates his job.”", options: ["Observation", "Evaluation"], answer: 0, explain: "It reports what was said and how often, without interpreting it as complaining." },
        { q: "“Keiko complains too much.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Too much” is a judgment by the speaker. What exactly did Keiko say, and when?" },
        { q: "“The report you handed in had four typos on page two.”", options: ["Observation", "Evaluation"], answer: 0, explain: "Countable and specific — it doesn’t call the report sloppy." },
        { q: "“You never listen to me.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Never” invites defensiveness. Try naming one moment: “When I was telling you about my day, you were looking at your phone.”" },
        { q: "“My teacher is unfair.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Unfair” is an interpretation. An observation might be “She gave me a detention and didn’t give one to Leo for the same thing.”" },
        { q: "“You interrupted me twice while I was explaining the budget.”", options: ["Observation", "Evaluation"], answer: 0, explain: "A specific, countable action in a specific situation." },
        { q: "“She was rude to the waiter.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Rude” is a judgment. What did she actually say or do?" },
        { q: "“When I asked for help with the dishes, you said ‘in a minute’ and kept watching TV.”", options: ["Observation", "Evaluation"], answer: 0, explain: "It quotes words and describes actions — nothing about laziness or selfishness." },
        { q: "“Luis is too generous for his own good.”", options: ["Observation", "Evaluation"], answer: 1, explain: "Even a seemingly kind label is an evaluation. Rosenberg noted that praise can be a judgment too." },
        { q: "“You haven’t replied to my last three texts.”", options: ["Observation", "Evaluation"], answer: 0, explain: "Specific and verifiable, without assuming the person is ignoring you." },
        { q: "“You’re so lazy on weekends.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Lazy” is a moralistic label. An observation: “On Saturday you stayed in bed until 1 pm.”" },
        { q: "“Grandma has phoned me every day this week.”", options: ["Observation", "Evaluation"], answer: 0, explain: "A neutral description of frequency, not “Grandma is needy”." },
        { q: "“You spend too much money.”", options: ["Observation", "Evaluation"], answer: 1, explain: "“Too much” compares to an unstated standard. Name the amount and what it was spent on instead." },
        { q: "“Amara scored 62% on the maths test.”", options: ["Observation", "Evaluation"], answer: 0, explain: "A plain fact, without calling it disappointing or great." },
        { q: "“He’s a great leader.”", options: ["Observation", "Evaluation"], answer: 1, explain: "Positive labels are still evaluations. An observation might be “He asked each of us for our view before deciding.”" },
        { q: "“Your music was playing after midnight on Friday and Saturday.”", options: ["Observation", "Evaluation"], answer: 0, explain: "Time and days are specific; there’s no label like “inconsiderate”." },
        { q: "“Kids these days are glued to their phones.”", options: ["Observation", "Evaluation"], answer: 1, explain: "A sweeping generalisation about a whole group. Observations are about specific people at specific times." },
        { q: "“Tomás left the meeting 20 minutes before it ended.”", options: ["Observation", "Evaluation"], answer: 0, explain: "It describes an action and a time without guessing why he left." }
      ]
    },
    {
      id: "feel",
      name: "Feeling or Faux-feeling?",
      icon: "💗",
      description: "Some “feelings” are really thoughts about what others did to us. Spot the genuine feelings from the faux feelings.",
      items: [
        { q: "“I feel abandoned.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "“Abandoned” describes what you believe someone did to you. Underneath might be lonely, scared or sad." },
        { q: "“I feel anxious.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Anxious describes your own inner state, not anyone else’s actions." },
        { q: "“I feel manipulated.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "It’s an interpretation of the other person’s intent. The feeling might be suspicious, uneasy or angry." },
        { q: "“I feel grateful.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "A genuine feeling that arises from a need being met." },
        { q: "“I feel like you don’t care about me.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "“I feel like…” or “I feel that…” usually introduces a thought. The feeling might be hurt or sad." },
        { q: "“I feel disappointed.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Disappointed names your internal experience without blaming." },
        { q: "“I feel ignored.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "“Ignored” implies someone is ignoring you. You might be feeling lonely, hurt or frustrated." },
        { q: "“I feel lonely.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Lonely is a feeling linked to an unmet need for connection — it doesn’t accuse anyone." },
        { q: "“I feel unappreciated.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "It’s a judgment that others don’t value you. Try: “I feel sad because I need recognition.”" },
        { q: "“I feel exhausted.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "A real body-and-mind state, not a claim about anyone else." },
        { q: "“I feel betrayed.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "Betrayed is an interpretation of another’s action. The feelings beneath may be shocked, hurt or furious." },
        { q: "“I feel hopeful.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "A genuine feeling about your own inner experience." },
        { q: "“I feel that this plan won’t work.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "That’s an opinion. The feeling might be worried or doubtful." },
        { q: "“I feel nervous.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Nervous is a feeling located in you." },
        { q: "“I feel criticised.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "It names what you think someone is doing. Underneath could be hurt, defensive or discouraged." },
        { q: "“I feel frustrated.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Frustrated is a classic genuine feeling, often linked to needs for ease or effectiveness." },
        { q: "“I feel pressured.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "It implies someone is pressuring you. You may be feeling tense or anxious, needing choice." },
        { q: "“I feel relieved.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "A genuine feeling that something you needed has happened." },
        { q: "“I feel stupid.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "That’s a self-judgment. The feeling might be embarrassed or discouraged." },
        { q: "“I feel content.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "A genuine, settled feeling when needs are met." },
        { q: "“I feel attacked.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 1, explain: "Attacked describes the other’s action. You might feel scared, defensive or angry." },
        { q: "“I feel overwhelmed.”", options: ["Feeling", "Faux-feeling (thought)"], answer: 0, explain: "Overwhelmed describes your own state; Rosenberg includes it in feeling lists." }
      ]
    },
    {
      id: "need",
      name: "Need or Strategy?",
      icon: "🌱",
      description: "Needs are universal and don’t depend on a specific person or action. Strategies are the many ways we try to meet them.",
      items: [
        { q: "Respect", options: ["Need", "Strategy"], answer: 0, explain: "A universal human need that every person shares." },
        { q: "“I need you to call me every night.”", options: ["Need", "Strategy"], answer: 1, explain: "It names a specific person and action. The need underneath might be connection or reassurance." },
        { q: "Rest", options: ["Need", "Strategy"], answer: 0, explain: "A universal physical need." },
        { q: "“I need a pay rise.”", options: ["Need", "Strategy"], answer: 1, explain: "A raise is one strategy for needs like security, fairness or recognition." },
        { q: "Connection", options: ["Need", "Strategy"], answer: 0, explain: "Shared by all people and achievable in many ways." },
        { q: "“I need you to stop texting at dinner.”", options: ["Need", "Strategy"], answer: 1, explain: "A specific request in disguise. The need may be presence, attention or connection." },
        { q: "Safety", options: ["Need", "Strategy"], answer: 0, explain: "A core universal need shared by people of every age and culture." },
        { q: "A holiday in Bali", options: ["Need", "Strategy"], answer: 1, explain: "One attractive strategy for needs like rest, adventure or beauty." },
        { q: "Autonomy", options: ["Need", "Strategy"], answer: 0, explain: "The universal need to choose for yourself." },
        { q: "“I need my kids to tidy their rooms.”", options: ["Need", "Strategy"], answer: 1, explain: "It depends on specific people doing a specific thing. The need could be order, ease or cooperation." },
        { q: "Understanding", options: ["Need", "Strategy"], answer: 0, explain: "A universal need to be heard and understood." },
        { q: "“I need you to agree with me.”", options: ["Need", "Strategy"], answer: 1, explain: "Agreement is a strategy; the need is perhaps to be understood or respected." },
        { q: "Meaning", options: ["Need", "Strategy"], answer: 0, explain: "A universal need for purpose and contribution." },
        { q: "Moving to a bigger house", options: ["Need", "Strategy"], answer: 1, explain: "A strategy for needs like space, comfort or privacy." },
        { q: "Fairness", options: ["Need", "Strategy"], answer: 0, explain: "A universal need, though people may disagree about how to meet it." },
        { q: "“I need my boss to praise me in front of the team.”", options: ["Need", "Strategy"], answer: 1, explain: "Specific person, specific action. The need is likely recognition or appreciation." },
        { q: "Play", options: ["Need", "Strategy"], answer: 0, explain: "Humans of every age need play and fun." },
        { q: "“I need a glass of wine.”", options: ["Need", "Strategy"], answer: 1, explain: "A strategy for relaxation or ease — there are many others." },
        { q: "Belonging", options: ["Need", "Strategy"], answer: 0, explain: "A universal need to be accepted as part of a group or community." },
        { q: "Having the last word in an argument", options: ["Need", "Strategy"], answer: 1, explain: "A strategy, often for needs like being heard or respected." },
        { q: "Ease", options: ["Need", "Strategy"], answer: 0, explain: "A universal need for things to flow without struggle." },
        { q: "“I need everyone to be quiet when I get home.”", options: ["Need", "Strategy"], answer: 1, explain: "It requires others to act a certain way. The need might be peace or rest." }
      ]
    },
    {
      id: "req",
      name: "Request or Demand?",
      icon: "🙏",
      description: "A request welcomes a “no” and stays curious. A demand carries blame or punishment — even when the words sound polite.",
      items: [
        { q: "“Would you be willing to put your dishes in the dishwasher tonight?”", options: ["Request", "Demand"], answer: 0, explain: "Clear, doable, and phrased so a “no” is possible." },
        { q: "“Clean your room now, or no phone for a week.”", options: ["Request", "Demand"], answer: 1, explain: "A threatened punishment makes it a demand." },
        { q: "“Would you tell me what you heard me say, so I know I was clear?”", options: ["Request", "Demand"], answer: 0, explain: "Rosenberg called this a “reflection request” — it checks for understanding." },
        { q: "“You’d better be home by ten.”", options: ["Request", "Demand"], answer: 1, explain: "“You’d better” implies consequences and leaves no room for dialogue." },
        { q: "“Could you text me when you arrive? If you’d rather not, I’d like to hear what works for you.”", options: ["Request", "Demand"], answer: 0, explain: "It invites a no and stays open to other strategies." },
        { q: "“Can you help me move on Saturday?” — said warmly, but when your friend says no, you sulk and list everything you’ve done for them.", options: ["Request", "Demand"], answer: 1, explain: "How you respond to “no” reveals it: guilt-tripping shows it was a demand." },
        { q: "“Would you be open to a 10-minute walk after dinner?” — and when your partner says no, you ask what would work for them instead.", options: ["Request", "Demand"], answer: 0, explain: "Responding to “no” with curiosity is the hallmark of a true request." },
        { q: "“Would you mind turning the music down?” — said through clenched teeth, planning to call the landlord if they hesitate.", options: ["Request", "Demand"], answer: 1, explain: "Polite words, but the intention to punish makes it a demand." },
        { q: "“Are you willing to meet Thursday to look at the schedule together?”", options: ["Request", "Demand"], answer: 0, explain: "Specific, positive and open to a no." },
        { q: "“I’m asking nicely one more time: finish the report today.”", options: ["Request", "Demand"], answer: 1, explain: "“One more time” hints at a threat; there’s no space for a no." },
        { q: "“Would you consider sharing the car this weekend? I’m open to other ideas.”", options: ["Request", "Demand"], answer: 0, explain: "It names a strategy while staying open to alternatives." },
        { q: "“If you really loved me, you’d come to my parents’ dinner.”", options: ["Request", "Demand"], answer: 1, explain: "Using love as leverage is a guilt-based demand." },
        { q: "“Please sit down. You have until I count to three.”", options: ["Request", "Demand"], answer: 1, explain: "A countdown signals consequences — a demand, even with “please”." },
        { q: "“Would you tell me one thing that would make mornings easier for you?”", options: ["Request", "Demand"], answer: 0, explain: "It invites the other person’s input — a connecting request." },
        { q: "“I need you to apologise to your sister. Right now.”", options: ["Request", "Demand"], answer: 1, explain: "Forced apologies are demands, and rarely meet anyone’s need for repair." },
        { q: "“Could you let me know by Friday whether you can take the shift? A no is completely fine.”", options: ["Request", "Demand"], answer: 0, explain: "Clear timeframe plus explicit permission to decline." },
        { q: "“Do you think you could maybe stop leaving your stuff everywhere?” — said with an eye-roll.", options: ["Request", "Demand"], answer: 1, explain: "The tone carries blame. It’s also vague: which stuff, where?" },
        { q: "“Would you try the new seating plan for one week, and then we review it together?”", options: ["Request", "Demand"], answer: 0, explain: "Time-limited, specific and collaborative." },
        { q: "“Fine, don’t help. I’ll just do everything myself like always.”", options: ["Request", "Demand"], answer: 1, explain: "A guilt-trip is an indirect demand; the need isn’t even stated." },
        { q: "“Would you put your phone away during dinner tonight? I’d love some time to talk.”", options: ["Request", "Demand"], answer: 0, explain: "It links the request to a need (connection) and is specific." },
        { q: "“Everyone has to agree to this plan by the end of the meeting.”", options: ["Request", "Demand"], answer: 1, explain: "“Has to” removes choice. A request would ask what would help people agree." },
        { q: "“Are you willing to try again tomorrow? If not, let’s figure out another time.”", options: ["Request", "Demand"], answer: 0, explain: "Flexible and focused on finding a solution together." }
      ]
    },
    {
      id: "pick",
      name: "Pick the Giraffe",
      icon: "🦒",
      description: "Here’s a jackal statement. Which option is the clearest, kindest giraffe translation using observation, feeling, need and request?",
      items: [
        { q: "“You’re so inconsiderate! You left the kitchen a mess again.”", options: ["“When I see dishes in the sink this morning, I feel discouraged because I value order. Would you be willing to wash them before work?”", "“I feel like you’re inconsiderate when you leave a mess.”", "“Why can’t you ever clean up after yourself?”", "“It’s fine, I’ll do it. I always do.”"], answer: 0, explain: "It names a specific observation, a real feeling, a need, and a doable request — without labelling the person." },
        { q: "“You never listen to me!”", options: ["“You’re always on your phone.”", "“I feel ignored by you.”", "“When I was telling you about my interview and you checked your phone, I felt hurt because I want to be heard. Would you put it down for ten minutes so I can finish?”", "“Forget it, nobody here cares what I think.”"], answer: 2, explain: "It replaces “never” with a specific moment and ends with a clear request. “Ignored” in another option is a faux feeling." },
        { q: "“This presentation is a disaster.”", options: ["“You clearly didn’t prepare.”", "“I noticed the slides have no data on the Q3 results. I’m worried because I need the client to trust our numbers. Could we add a chart before Thursday?”", "“I feel that you did a bad job.”", "“It’s okay, nobody will notice.”"], answer: 1, explain: "It turns a global judgment into a concrete observation and a solvable request." },
        { q: "“You’re a terrible friend — you forgot my birthday.”", options: ["“I can’t believe you, after everything I’ve done.”", "“I feel betrayed by you.”", "“Whatever, birthdays don’t matter anyway.”", "“When I didn’t hear from you on my birthday, I felt sad because our friendship matters to me. Would you be willing to tell me what was going on for you?”"], answer: 3, explain: "It shares the impact honestly and invites dialogue. “Betrayed” is a faux feeling that blames." },
        { q: "“Stop being so lazy and do your homework!”", options: ["“You’re going to fail if you keep this up.”", "“I feel like you’re lazy.”", "“I see the maths sheet is still blank and it’s 8 pm. I’m anxious because I want you to get enough sleep. Would you be willing to start it now, or tell me what’s getting in the way?”", "“Do it now or no screen time for a week.”"], answer: 2, explain: "Observation instead of a label, the parent’s own feeling and need, and a request that leaves room for the child’s view." },
        { q: "“You’re so selfish — you took the last of the milk again.”", options: ["“When I opened the fridge and the milk was finished, I felt frustrated because I wanted coffee before work. Would you text me when we’re running low?”", "“You only ever think about yourself.”", "“I feel disrespected.”", "“Next time I’m hiding the milk.”"], answer: 0, explain: "It focuses on what happened and what would help next time, rather than the person’s character." },
        { q: "“Your music is so loud it’s unbearable!”", options: ["“Some of us have jobs, you know.”", "“I feel attacked by your noise.”", "“You’re the worst neighbour ever.”", "“It’s past midnight and I can hear the bass in my bedroom. I’m exhausted and really need sleep. Would you be willing to turn it down now?”"], answer: 3, explain: "Specific time and impact, a genuine feeling, and an immediate, doable request." },
        { q: "“You always make us late!”", options: ["“We’ve arrived after the start time at the last three family dinners. I feel embarrassed because I value reliability with my parents. Could we agree to leave at 6:15 on Sunday?”", "“I feel you’re disorganised.”", "“Why do I even bother making plans?”", "“Fine, I’ll just go without you next time.”"], answer: 0, explain: "“Always” becomes “the last three dinners”, and the request is concrete and positive." },
        { q: "“You should be ashamed of yourself for talking to me like that.”", options: ["“How dare you speak to me that way.”", "“When you said ‘shut up’ in front of the team, I felt shocked and hurt because I need respect at work. Would you be willing to talk about it privately after lunch?”", "“I feel humiliated by you.”", "“You’re a bully and everyone knows it.”"], answer: 1, explain: "Shame is a jackal motivator. The giraffe version names the exact words and requests a conversation." },
        { q: "“You’re useless with money.”", options: ["“I feel like you can’t be trusted with money.”", "“We should split our accounts.”", "“I saw three takeaway orders on the card this week, about £90 in total. I feel worried because I want us to save for the deposit. Would you sit down with me Sunday to plan a food budget?”", "“My mother was right about you.”"], answer: 2, explain: "Concrete facts, a shared need, and a collaborative request." },
        { q: "“Why are you so dramatic?”", options: ["“You’re overreacting again.”", "“Calm down, it’s not a big deal.”", "“I feel annoyed by your drama.”", "“I see you’re crying and I’m feeling a bit lost about what happened. Would you tell me what’s going on for you?”"], answer: 3, explain: "It drops the label and opens with curiosity and honesty about your own state." },
        { q: "“You don’t care about this team.”", options: ["“You’ve missed the last two stand-ups without letting us know. I’m concerned because I need us to coordinate. Would you message the group if you can’t make it?”", "“I feel that you don’t care.”", "“Maybe this job isn’t for you.”", "“Everyone’s noticed your attitude.”"], answer: 0, explain: "It describes behaviour, shares a need for coordination, and asks for something specific." },
        { q: "“You’re spoiling the kids.”", options: ["“You always undermine me.”", "“When the kids got ice cream after I’d said no, I felt frustrated because I want us to be consistent. Would you be willing to check with me before saying yes to treats?”", "“I feel undermined.”", "“Fine, you raise them then.”"], answer: 1, explain: "A specific moment, an honest feeling and need, and a concrete agreement to try." },
        { q: "“You think you’re better than everyone.”", options: ["“I feel judged by you.”", "“You’re so arrogant.”", "“When you said my idea was ‘naive’ in the meeting, I felt discouraged because I want my contributions considered. Would you tell me what concerns you about it?”", "“Whatever, I don’t care what you think.”"], answer: 2, explain: "It names the exact word used and invites the other person’s reasoning." },
        { q: "“You’re late again — you clearly don’t value my time.”", options: ["“I feel disrespected.”", "“You do this every time.”", "“Next time I’m leaving after five minutes.”", "“We agreed on 7 and it’s 7:25. I feel irritated because I value reliability. Would you text me if you’re running more than ten minutes late?”"], answer: 3, explain: "Facts instead of mind-reading, plus a forward-looking request." },
        { q: "“Your essay is lazy.”", options: ["“I notice the essay is one page and the brief asked for three. I’m concerned because I want you to show what you know. Would you tell me what got in the way?”", "“I expected better from you.”", "“Your brother never handed in work like this.”", "“I feel let down.”"], answer: 0, explain: "Observation instead of a label, and curiosity instead of comparison." },
        { q: "“You never help around the house.”", options: ["“I feel unsupported.”", "“I’ve cooked dinner five nights this week. I’m tired and want more balance. Would you be willing to cook on Tuesdays and Thursdays?”", "“I’m not your maid.”", "“You’re just like your father.”"], answer: 1, explain: "Specific facts and a specific, doable request instead of a generalisation." },
        { q: "“That was a stupid thing to say.”", options: ["“Do you even think before you speak?”", "“I feel insulted.”", "“When you joked about my accent in front of my parents, I felt embarrassed because I want to feel accepted. Would you be willing not to make that joke again?”", "“Let’s just forget it.”"], answer: 2, explain: "It describes what happened, shares the impact and asks for a specific change." },
        { q: "“You’re impossible to work with.”", options: ["“I feel blocked by you.”", "“HR will hear about this.”", "“Nobody likes working with you.”", "“When the design changed three times this week without notice, I felt stressed because I need predictability to meet deadlines. Could we agree to flag changes in the channel first?”"], answer: 3, explain: "It moves from a global judgment to a concrete pattern and a workable agreement." },
        { q: "“You’re ungrateful after everything I’ve done for you.”", options: ["“When I drove you to practice every day this week and didn’t hear thanks, I felt sad because I’d love some appreciation. Would you be willing to tell me how the week was for you?”", "“I feel used.”", "“Kids today don’t appreciate anything.”", "“Don’t expect any favours from me.”"], answer: 0, explain: "It states the feeling and need without guilt, and invites connection rather than demanding thanks." }
      ]
    },
    {
      id: "empathy",
      name: "Best Empathic Response",
      icon: "🤝",
      description: "Someone shares something painful. Choose the response that offers empathy rather than one of Rosenberg’s blocks: advising, one-upping, consoling, interrogating, correcting or educating.",
      items: [
        { q: "“My dog died yesterday. I can’t stop crying.”", options: ["“You could always get another dog.”", "“Are you feeling heartbroken and missing the companionship you shared?”", "“At least he had a long life.”", "“When my cat died I was off work for a week.”"], answer: 1, explain: "It guesses feelings and needs. The others advise, console, and one-up." },
        { q: "“I didn’t get the job. I really thought I had it.”", options: ["“You should ask them for feedback.”", "“How many other people applied?”", "“Sounds like you’re really disappointed, and maybe a bit shaken because you’d hoped for it so much?”", "“Their loss! Something better will come along.”"], answer: 2, explain: "Empathy stays with the person’s experience. The others advise, interrogate and console." },
        { q: "“My teenage son won’t talk to me anymore.”", options: ["“Are you feeling lonely and sad, wanting the closeness you used to have?”", "“That’s just teenagers — it’s a phase.”", "“Have you tried taking his phone away?”", "“Mine didn’t talk to me for two years, so you’re lucky.”"], answer: 0, explain: "It reflects feeling and need. The others educate, advise and one-up." },
        { q: "“My boss criticised my report in front of everyone.”", options: ["“Well, was the report actually good?”", "“You need to stand up for yourself.”", "“That happens to everyone.”", "“Ouch. Were you feeling embarrassed and wanting your work to be treated with respect?”"], answer: 3, explain: "It names the likely feeling and need. The others correct, advise and minimise." },
        { q: "“I’m so tired of being the only one who cleans in this flat.”", options: ["“Sounds like you’re worn out and longing for more fairness and support?”", "“Just make a cleaning rota.”", "“Try living with four brothers like I did.”", "“Maybe your standards are too high.”"], answer: 0, explain: "Empathy first; strategies like rotas can come after the person feels heard." },
        { q: "“My mum has been diagnosed with dementia.”", options: ["“There are some great new treatments now.”", "“Oh no, how awful, poor you.”", "“I’m so sorry. Are you feeling scared and maybe grieving the mum you’ve known?”", "“When did they find out? Which hospital?”"], answer: 2, explain: "Sympathy (“poor you”) and interrogation pull focus. Empathy stays with their inner experience." },
        { q: "“I failed my driving test for the third time.”", options: ["“Third time? What went wrong?”", "“Lots of people fail. It’s not a big deal.”", "“Next time, practise roundabouts more.”", "“Are you feeling discouraged and wishing your effort would finally pay off?”"], answer: 3, explain: "It acknowledges the discouragement. The others interrogate, minimise and advise." },
        { q: "“My best friend is moving to Canada next month.”", options: ["“You can video call though!”", "“Are you sad, knowing how much you’ll miss having her close?”", "“Canada is lovely — have you been?”", "“I’ve lost touch with all my school friends, so I get it.”"], answer: 1, explain: "It reflects the sadness and the need for closeness. The others console, change the subject, and tell your own story." },
        { q: "“I yelled at my kids again today. I’m a terrible parent.”", options: ["“You’re not a terrible parent! You’re great.”", "“You should try counting to ten.”", "“Sounds like you’re really disappointed in yourself because you want to parent with patience?”", "“Everyone yells sometimes.”"], answer: 2, explain: "Empathy connects with the value beneath the self-judgment. Reassurance and advice skip past it." },
        { q: "“My partner forgot our anniversary.”", options: ["“Are you hurt and wanting to know you matter to them?”", "“Maybe they were just busy.”", "“I’d dump them.”", "“Did you remind them beforehand?”"], answer: 0, explain: "Explaining for the other person, advising and interrogating all block empathy." },
        { q: "“I’ve been feeling really anxious about money lately.”", options: ["“You should download a budgeting app.”", "“Money worries are so common right now.”", "“How much debt are you in?”", "“Sounds like you’re carrying a lot of worry and longing for some security?”"], answer: 3, explain: "It reflects the worry and the need for security without fixing or probing." },
        { q: "“My presentation went terribly. I froze.”", options: ["“Oh, I’m sure it wasn’t that bad.”", "“Are you feeling embarrassed and maybe frustrated because you’d prepared so much?”", "“I once forgot my whole speech at a wedding!”", "“Did you practise enough?”"], answer: 1, explain: "Correcting their perception, storytelling and interrogating all shift away from them." },
        { q: "“I feel invisible at family gatherings.”", options: ["“You need to speak up more.”", "“I’m sure they love you.”", "“Are you feeling lonely and wanting to be seen and included?”", "“My family is way worse, believe me.”"], answer: 2, explain: "It guesses the feeling and need beneath “invisible”, a faux feeling." },
        { q: "“My coworker got the promotion I was promised.”", options: ["“Sounds like you’re angry and wanting fairness and recognition for your work?”", "“You should start looking for another job.”", "“Who promised it to you exactly?”", "“Promotions are overrated anyway.”"], answer: 0, explain: "Empathy reflects the anger and needs. The others advise, interrogate and minimise." },
        { q: "“I’m scared about my surgery next week.”", options: ["“It’s a routine operation, you’ll be fine.”", "“What kind of surgery? How long is recovery?”", "“My uncle had the same surgery and it went badly.”", "“Are you feeling scared and wanting some reassurance that you’ll be okay?”"], answer: 3, explain: "Reassurance, questions and stories can all leave a scared person alone with their fear." },
        { q: "“Nobody at my new school talks to me.”", options: ["“Have you tried joining a club?”", "“Are you feeling lonely and wishing you had a friend there?”", "“It takes time, sweetie.”", "“When I changed schools I made friends on the first day.”"], answer: 1, explain: "It meets the child’s loneliness first. Advice and comparison can wait — or never be needed." },
        { q: "“I miscarried last month and people keep saying ‘at least it was early.’”", options: ["“They mean well.”", "“At least you know you can get pregnant.”", "“That must be so painful to hear. Are you wanting your grief to be acknowledged as real?”", "“Have you thought about counselling?”"], answer: 2, explain: "It acknowledges the pain and the need to be seen, without explaining others or consoling." },
        { q: "“My dad never says he’s proud of me.”", options: ["“Are you feeling sad and longing for his recognition?”", "“That generation just doesn’t say those things.”", "“I’m proud of you!”", "“Have you told him how you feel?”"], answer: 0, explain: "Educating, reassuring and advising all skip past the longing." },
        { q: "“I just got laid off after twelve years.”", options: ["“Twelve years! Why did they choose you?”", "“With your experience, you’ll find something fast.”", "“This could be a blessing in disguise.”", "“Twelve years… are you in shock, maybe worried about what comes next?”"], answer: 3, explain: "Empathy stays present with shock and worry instead of interrogating or silver-lining." },
        { q: "“I’m exhausted from caring for my husband after his stroke.”", options: ["“You need to take care of yourself too.”", "“Are you drained and longing for rest and some support?”", "“He’s lucky to have you.”", "“Can’t you get a carer?”"], answer: 1, explain: "It names the exhaustion and the need, rather than advising or complimenting." }
      ]
    },
    {
      id: "life",
      name: "Spot the Life-Alienating Pattern",
      icon: "🐺",
      description: "Marshall Rosenberg named patterns that disconnect us from compassion. Which one is hiding in each statement?",
      items: [
        { q: "“She’s so selfish.”", options: ["Moralistic judgment", "Comparison", "Denial of responsibility", "Demand"], answer: 0, explain: "Labelling someone as wrong or bad is moralistic judgment." },
        { q: "“Why can’t you be more like your sister?”", options: ["Demand", "Comparison", "Deserve-thinking", "Moralistic judgment"], answer: 1, explain: "Comparing people blocks compassion for both of them." },
        { q: "“I had to shout — the kids made me do it.”", options: ["Moralistic judgment", "Deserve-thinking", "Denial of responsibility", "Comparison"], answer: 2, explain: "“Made me” hands responsibility for our actions to someone else." },
        { q: "“Do it now, or else.”", options: ["Comparison", "Denial of responsibility", "Moralistic judgment", "Demand"], answer: 3, explain: "A threat of punishment turns any ask into a demand." },
        { q: "“He deserves to be punished for lying.”", options: ["Deserve-thinking", "Comparison", "Demand", "Denial of responsibility"], answer: 0, explain: "Rosenberg saw “deserve” language as making punishment and reward the goal instead of meeting needs." },
        { q: "“I’m just following company policy.”", options: ["Demand", "Moralistic judgment", "Denial of responsibility", "Deserve-thinking"], answer: 2, explain: "Pointing to rules or policy denies our own choice in acting." },
        { q: "“My neighbour is an idiot.”", options: ["Comparison", "Moralistic judgment", "Demand", "Deserve-thinking"], answer: 1, explain: "Name-calling is a classic moralistic judgment." },
        { q: "“Look how tidy Kofi’s room is compared to yours.”", options: ["Denial of responsibility", "Demand", "Moralistic judgment", "Comparison"], answer: 3, explain: "Holding one person up against another is comparison." },
        { q: "“You will apologise to me before you leave this room.”", options: ["Demand", "Deserve-thinking", "Comparison", "Denial of responsibility"], answer: 0, explain: "There’s no room for a no — it’s a demand." },
        { q: "“After all my hard work, I deserve that promotion.”", options: ["Moralistic judgment", "Comparison", "Deserve-thinking", "Demand"], answer: 2, explain: "Framing outcomes as earned rewards is deserve-thinking. The need might be recognition or fairness." },
        { q: "“I drank because I was stressed.”", options: ["Denial of responsibility", "Comparison", "Moralistic judgment", "Demand"], answer: 0, explain: "Saying a feeling forced our action hides our choice. Try “I chose to drink because I wanted relief.”" },
        { q: "“People who don’t recycle are lazy and irresponsible.”", options: ["Deserve-thinking", "Moralistic judgment", "Denial of responsibility", "Comparison"], answer: 1, explain: "It judges a whole group as bad rather than naming needs." },
        { q: "“My friends all have bigger houses than us.”", options: ["Demand", "Moralistic judgment", "Comparison", "Denial of responsibility"], answer: 2, explain: "Comparison with others is a quick route to dissatisfaction." },
        { q: "“I had no choice — my mother expected me to.”", options: ["Comparison", "Deserve-thinking", "Demand", "Denial of responsibility"], answer: 3, explain: "Attributing actions to others’ expectations denies personal choice." },
        { q: "“They got what was coming to them.”", options: ["Deserve-thinking", "Moralistic judgment", "Comparison", "Demand"], answer: 0, explain: "Classic deserve-thinking: suffering is seen as justified." },
        { q: "“If you don’t finish your plate, there’s no dessert.”", options: ["Moralistic judgment", "Demand", "Denial of responsibility", "Comparison"], answer: 1, explain: "Using a reward or punishment to get compliance is a demand." },
        { q: "“You’re too sensitive.”", options: ["Comparison", "Denial of responsibility", "Moralistic judgment", "Deserve-thinking"], answer: 2, explain: "It labels the person as wrong for having feelings." },
        { q: "“I only did it because the manager told me to.”", options: ["Denial of responsibility", "Demand", "Comparison", "Moralistic judgment"], answer: 0, explain: "Rosenberg emphasised replacing “have to” with “choose to” to reclaim responsibility." },
        { q: "“Our last intern was much quicker than you.”", options: ["Deserve-thinking", "Moralistic judgment", "Demand", "Comparison"], answer: 3, explain: "Comparing to someone else rarely motivates and often discourages." },
        { q: "“Kids who misbehave deserve detention.”", options: ["Comparison", "Deserve-thinking", "Denial of responsibility", "Demand"], answer: 1, explain: "It centres punishment rather than understanding the needs behind behaviour." },
        { q: "“You must call me every day while you’re away.”", options: ["Moralistic judgment", "Comparison", "Demand", "Deserve-thinking"], answer: 2, explain: "“Must” leaves no space for the other person’s needs." }
      ]
    },
    {
      id: "ages",
      name: "Right Approach for the Age",
      icon: "🧒",
      description: "NVC looks different with a toddler than with a teenager or an elderly parent. Choose the approach that fits the person’s age and stage.",
      items: [
        { q: "A 2-year-old screams because her banana broke in half.", options: ["Explain that it tastes the same either way.", "Get down to her level and name it simply: “You’re so sad! You wanted it whole.”", "Tell her to stop crying or she won’t get any.", "Ignore it until she stops."], answer: 1, explain: "Toddlers need short, warm naming of feelings; logic doesn’t land when big feelings are present." },
        { q: "A 3-year-old hits his baby brother.", options: ["Hold his hand gently, say “I won’t let you hit,” then guess: “Are you frustrated? You want my attention?”", "Smack his hand so he learns how it feels.", "Give a long talk about kindness.", "Send him to his room for an hour."], answer: 0, explain: "A calm limit plus a feelings-and-needs guess keeps everyone safe and teaches without shaming." },
        { q: "A 4-year-old refuses to put on shoes.", options: ["“Fine, go barefoot then.”", "“Big kids put their shoes on without fuss.”", "Offer a simple choice: “Red shoes or blue shoes? You can do it yourself or I can help.”", "Count down from three."], answer: 2, explain: "Small choices meet a young child’s need for autonomy while still getting out the door." },
        { q: "A 6-year-old says, “I hate you!” after being told screen time is over.", options: ["“That’s a horrible thing to say.”", "“You’re really disappointed — you wanted more time. I hear you.” Then hold the limit.", "Give five more minutes so he stops.", "“Then I guess you don’t want dessert either.”"], answer: 1, explain: "Hear the feeling behind the words while keeping the boundary." },
        { q: "An 8-year-old lies about finishing her homework.", options: ["Call her a liar so she learns.", "Take away her birthday party.", "Lecture about honesty for twenty minutes.", "Stay curious: “I’m guessing you were worried I’d be upset. What made it hard to tell me?”"], answer: 3, explain: "Lying often protects a need like safety or acceptance; curiosity makes honesty feel safer." },
        { q: "A 10-year-old comes home upset that friends left him out.", options: ["Listen and reflect: “That sounds really lonely. You wanted to be included.”", "“Just find new friends.”", "Phone the other parents immediately.", "“That happened to me all the time — you’ll survive.”"], answer: 0, explain: "Empathy first; problem-solving together can come later if he wants it." },
        { q: "A 12-year-old wants a phone because “everyone has one.”", options: ["“I don’t care what everyone else does.”", "“You’ll get one when you’re 18.”", "Explore the needs together — belonging, connection — and brainstorm options that meet your needs for safety too.", "Buy one so she’s not left out."], answer: 2, explain: "Naming both sets of needs opens up strategies neither of you thought of alone." },
        { q: "A 14-year-old slams the door and shouts, “Leave me alone!”", options: ["Barge in and demand an apology.", "Give space, then later: “You seemed really upset earlier. I’m here if you want to talk.”", "Take the door off its hinges.", "Text him a list of his chores."], answer: 1, explain: "Teens often need space and autonomy first; a later, low-pressure offer keeps connection open." },
        { q: "A 15-year-old wants to dye her hair green.", options: ["“Absolutely not while you live under my roof.”", "“You’ll regret it.”", "Ask what draws her to it and share any concerns honestly, respecting that it’s largely her choice.", "Say yes but complain about it later."], answer: 2, explain: "Respecting a teen’s growing autonomy builds trust for the bigger conversations." },
        { q: "A 16-year-old misses curfew by an hour without texting.", options: ["“When you weren’t home by eleven and I couldn’t reach you, I was scared. I need to know you’re safe. Can we agree on a check-in text?”", "Ground him for a month.", "Pretend you didn’t notice.", "“You’re so irresponsible.”"], answer: 0, explain: "Honest feelings and a clear need for safety, followed by a request for an agreement." },
        { q: "A 17-year-old says she doesn’t want to go to university.", options: ["“After everything we’ve sacrificed?”", "“You’ll change your mind.”", "List the statistics on graduate salaries.", "Get curious about what she does want and what needs she hopes to meet."], answer: 3, explain: "Curiosity about her dreams and needs keeps her talking rather than defending." },
        { q: "A 19-year-old at university calls in tears after a breakup.", options: ["“There are plenty more fish in the sea.”", "Listen and reflect: “You sound heartbroken. You really cared about him.”", "“I never liked him anyway.”", "Book a train to bring her home immediately."], answer: 1, explain: "Young adults still need empathy — not fixing or judgment about their choices." },
        { q: "Your 25-year-old son moves back home and sleeps till noon.", options: ["Talk adult-to-adult: share your needs for contribution and order, ask about his, and agree on house expectations together.", "Charge him rent as punishment.", "Drop hints about laziness at dinner.", "Do his laundry and say nothing."], answer: 0, explain: "Adult children respond best to honest, mutual agreements rather than parenting-style rules." },
        { q: "Your 30-year-old colleague snaps at you during a stressful deadline.", options: ["Snap back.", "Report her to HR right away.", "Later, check in: “You seemed stressed earlier. Are you feeling overwhelmed by the deadline?”", "Avoid her for a week."], answer: 2, explain: "Empathy for the stress behind the snap often restores connection quickly." },
        { q: "Your 45-year-old sister criticises your parenting at a family dinner.", options: ["Point out her own parenting flaws.", "Privately say: “When you said I’m too soft at dinner, I felt hurt. I’d love your support. Would you share concerns with me one-to-one?”", "Stop inviting her.", "Agree to keep the peace."], answer: 1, explain: "A private, honest OFNR conversation respects both of you." },
        { q: "Your 70-year-old mother keeps giving unsolicited advice about your diet.", options: ["“Mum, stop — you’re driving me crazy.”", "Nod and ignore her.", "Read her an article proving she’s wrong.", "Hear her need first — “You care about my health” — then share yours: “I want to make these choices myself.”"], answer: 3, explain: "Acknowledging the care behind the advice makes your own request easier to hear." },
        { q: "Your 80-year-old father insists he can still manage the stairs after a fall.", options: ["Empathise with his need for independence and dignity, then share your fear and explore options together.", "Move his bed downstairs without asking.", "Tell him he’s being stubborn.", "Leave it — it’s his decision alone."], answer: 0, explain: "Older adults often fear losing autonomy; naming that need opens up joint solutions." },
        { q: "Your 85-year-old grandmother with memory loss asks for her late husband.", options: ["Remind her firmly that he died years ago.", "Change the subject quickly.", "Connect with the feeling: “You’re missing him. Tell me about him.”", "Say he’s at the shop."], answer: 2, explain: "Meeting the feeling and need for connection is kinder than correcting or deceiving." },
        { q: "A 5-year-old is scared of the dark at bedtime.", options: ["“There’s nothing to be scared of.”", "“You’re scared. You want to feel safe. What would help — a night light or the door open?”", "“Big girls aren’t scared of the dark.”", "Let her sleep in your bed every night forever."], answer: 1, explain: "Acknowledge the fear and involve her in finding a strategy for safety." },
        { q: "A 13-year-old is caught cheating on a test.", options: ["Shame him in front of his siblings.", "Ban all activities for a term.", "“I know you’re better than that.”", "Ask what was going on — pressure, fear of failing — and problem-solve together about next steps."], answer: 3, explain: "Understanding the need behind the behaviour leads to real change, not just hiding it better." }
      ]
    }
  ],
  dialogues: [
    {
      id: "toddler-supermarket",
      title: "Meltdown in Aisle 5",
      icon: "🛒",
      context: "You’re at the supermarket with your 3-year-old. She spots chocolate at the checkout, you say no, and she drops to the floor.",
      you: "Parent",
      them: "Mia, age 3",
      start: "n1",
      nodes: {
        n1: { them: "I WANT THE CHOCOLATE! *drops to the floor, screaming*", choices: [
          { text: "“Stop it right now — everyone is staring at you!”", to: "b2", score: -2, note: "Jackal: shaming plus a demand. A toddler flooded with feeling can’t calm down on command." },
          { text: "*Kneel down* “You really, really want that chocolate. You’re so disappointed!”", to: "g2", score: 2, note: "Giraffe: empathy. Naming her feeling and wish helps her feel understood, which is what calms her." },
          { text: "“Okay, okay — if you stop crying I’ll get you a lolly.”", to: "m2", score: 0, note: "Bribing ends the noise but teaches that screaming works, and the feeling is never acknowledged." }
        ] },
        g2: { them: "*sobbing, quieter* I want it… I want it NOW.", choices: [
          { text: "“Let’s go and look at the fish counter!”", to: "m3", score: 1, note: "Distraction can work with toddlers, but it skips past her feeling." },
          { text: "“You wish you could have it now. The answer is no today. Do you want to hold my hand or ride in the trolley?”", to: "g3", score: 2, note: "Giraffe: empathy plus a clear limit and a choice that meets her need for autonomy." },
          { text: "“Chocolate is bad for you anyway.”", to: "b3", score: -1, note: "Jackal: correcting and educating while she’s still upset — it feels like being argued with." }
        ] },
        m2: { them: "*stops crying* I want the lolly AND the chocolate!", choices: [
          { text: "“I said one lolly. Don’t push it.”", to: "b3", score: -1, note: "Jackal: a threatening tone after setting up a bargain creates a power struggle." },
          { text: "“Fine, take both, just be quiet.”", to: "m3", score: 0, note: "Giving in avoids the scene but leaves your need for consistency unmet." },
          { text: "“You want both! That’s so hard. We’re getting one treat today — I’ll help you choose.”", to: "g3", score: 2, note: "Giraffe: empathy for the wish while holding a kind, clear limit." }
        ] },
        b2: { them: "*screams louder, kicking* NOOO! You’re MEAN!", choices: [
          { text: "*Take a slow breath and kneel* “You’re so upset. I’m right here. I’ll stay with you until you’re ready.”", to: "m3", score: 2, note: "Giraffe: calming yourself first, then offering presence — repairing after a harsh start." },
          { text: "“Right, that’s it. No park this afternoon!”", to: "b3", score: -2, note: "Jackal: punishment escalates fear and anger rather than helping her settle." },
          { text: "“I’m not mean. You’re being naughty.”", to: "b3", score: -1, note: "Jackal: defending yourself and labelling her. Her “mean” is really “I’m upset”." }
        ] },
        g3: { them: "*sniffling, takes your hand* Can I push the trolley?", choices: [
          { text: "“Only if you’re good.”", to: "endMixed", score: 0, note: "Conditional approval ties her worth to behaviour." },
          { text: "“Yes! Thank you for walking with me — that was really hard and you did it.”", to: "endGood", score: 2, note: "Giraffe: specific appreciation for her effort, celebrating her calming down." },
          { text: "“No, you’ll crash it. Just walk.”", to: "endBad", score: -1, note: "Jackal: dismissing her bid to contribute just as she’s reconnecting." }
        ] },
        m3: { them: "*quiet, pouting* I’m still sad.", choices: [
          { text: "“You’re still sad. That’s okay. Sad can come shopping with us.”", to: "endGood", score: 2, note: "Giraffe: accepting the feeling without needing to fix it." },
          { text: "“Let’s just hurry up and get home.”", to: "endMixed", score: 0, note: "Practical, but her feeling goes unheard." },
          { text: "“You shouldn’t be sad — you’re being silly.”", to: "endBad", score: -2, note: "Jackal: denying and judging feelings teaches her to hide them." }
        ] },
        b3: { them: "*wailing, shoppers staring* I WANT TO GO HOOOME!", choices: [
          { text: "“If you don’t stop, we’re never coming here again.”", to: "endBad", score: -2, note: "Jackal: an empty threat that adds fear to an already overwhelmed child." },
          { text: "*Lift her gently, step outside, and later say* “That was so hard. We were both upset. I’m sorry I shouted.”", to: "endMixed", score: 2, note: "Giraffe: repair. Owning your part models responsibility and rebuilds trust." },
          { text: "“Okay, we’re going,” in a tight voice, carrying her out.", to: "endMixed", score: 0, note: "Leaving can be wise, but without connection she may feel she’s in trouble." }
        ] },
        endGood: { end: "good", them: "*pushing the trolley, humming* Bananas! I find the bananas!", summary: "By naming her feelings and holding a kind limit, you helped Mia move through disappointment. She learned that feelings are welcome and that the limit still stands." },
        endMixed: { end: "mixed", them: "*quiet in the car seat, clutching her toy*", summary: "The moment passed, but connection was patchy. Next time, try empathy before limits — toddlers calm through connection, not logic or bargains." },
        endBad: { end: "bad", them: "*sobbing all the way home*", summary: "Threats, labels and dismissals escalated the meltdown. Both of you left drained. A repair conversation later — “I’m sorry I yelled” — can still rebuild trust." }
      }
    },
    {
      id: "teen-vaping",
      title: "The Vape in the Backpack",
      icon: "💨",
      context: "While looking for a lost charger, you find a vape in your 15-year-old’s school bag. He walks in and sees it in your hand.",
      you: "Parent",
      them: "Jayden, age 15",
      start: "n1",
      nodes: {
        n1: { them: "Why are you going through my stuff?!", choices: [
          { text: "“Don’t change the subject. You’re grounded for a month.”", to: "b2", score: -2, note: "Jackal: deflection plus punishment shuts down any chance of honest conversation." },
          { text: "“I was looking for the charger and found this. I’m scared, honestly. And I hear you’re upset I was in your bag — that’s fair.”", to: "g2", score: 2, note: "Giraffe: observation, honest feeling, and empathy for his need for privacy." },
          { text: "“I wasn’t snooping. But we need to talk about this.”", to: "m2", score: 1, note: "Partly good — honest, but defensive and skipping his feeling about privacy." }
        ] },
        g2: { them: "*arms crossed* It’s not even mine. I’m holding it for a friend.", choices: [
          { text: "“I’m not looking to catch you out. I’m worried about your lungs and I want us to be able to talk honestly. What’s going on with vaping at school?”", to: "g3", score: 2, note: "Giraffe: sharing your need (health, trust) and getting curious rather than interrogating." },
          { text: "“Do you really expect me to believe that?”", to: "b3", score: -1, note: "Jackal: sarcasm and accusation push him further into defence." },
          { text: "“Okay… well, whoever’s it is, it’s not allowed in this house.”", to: "m3", score: 1, note: "A clear boundary, but it misses the chance to understand what’s happening." }
        ] },
        m2: { them: "There’s nothing to talk about. Everyone vapes.", choices: [
          { text: "“Everyone? Name one person.”", to: "b3", score: -1, note: "Jackal: debating his words turns the talk into a contest." },
          { text: "“Sounds like it’s pretty normal where you are. Is it hard to be the one who doesn’t?”", to: "g3", score: 2, note: "Giraffe: empathy for his need for belonging." },
          { text: "“Well, I’m not everyone’s parent.”", to: "m3", score: 0, note: "Fair point, but it’s a classic parental line that ends dialogue." }
        ] },
        b2: { them: "That’s so unfair! You never trust me anyway!", choices: [
          { text: "“With behaviour like this, why would I?”", to: "b3", score: -2, note: "Jackal: moralistic judgment that confirms his belief that you don’t trust him." },
          { text: "“I reacted fast because I got scared. Can we start again? I really want to understand.”", to: "m3", score: 2, note: "Giraffe: owning your reaction and repairing in the moment." },
          { text: "“We’ll talk when you’ve calmed down.”", to: "m3", score: 0, note: "Taking a break can help, but it places all the calming on him." }
        ] },
        g3: { them: "*sighs* Some of the older kids do it at the bus stop. I tried it a few times. I didn’t want to look like a baby.", choices: [
          { text: "“Thank you for telling me. Wanting to fit in makes total sense. Could we figure out together what you might say next time it’s offered?”", to: "endGood", score: 2, note: "Giraffe: appreciation for honesty, empathy for belonging, and a collaborative request." },
          { text: "“Well, now you know it’s stupid.”", to: "endBad", score: -2, note: "Jackal: punishing honesty teaches him to hide things next time." },
          { text: "“Okay. Just don’t do it again.”", to: "endMixed", score: 0, note: "A clear message, but without understanding or a plan, it may not hold." }
        ] },
        m3: { them: "Fine. Whatever. Can I go now?", choices: [
          { text: "“Not until you promise never to touch one again.”", to: "endBad", score: -1, note: "Jackal: forcing a promise rarely produces real commitment." },
          { text: "“Yes. I’d like to talk more later — I care about you, not just the rule. Would after dinner work?”", to: "endGood", score: 2, note: "Giraffe: respecting his autonomy and making a clear, open request to reconnect." },
          { text: "“Go. But I’m keeping this.”", to: "endMixed", score: 0, note: "A boundary, but the relationship side is left hanging." }
        ] },
        b3: { them: "*storms off* I hate living here!", choices: [
          { text: "*Knock later* “I came down hard earlier. I’m sorry. I was scared. I’d like to hear your side when you’re ready.”", to: "endMixed", score: 2, note: "Giraffe: repair after rupture — owning your part reopens the door." },
          { text: "“Fine! Then you can find somewhere else to live!”", to: "endBad", score: -2, note: "Jackal: escalation and threat of rejection — deeply damaging to trust." },
          { text: "Let it go and don’t mention it again.", to: "endMixed", score: 0, note: "Avoidance keeps the peace for now, but the worry and the vaping go underground." }
        ] },
        endGood: { end: "good", them: "Maybe I could just say my mum would smell it. That’s kind of true anyway.", summary: "You stayed curious and honest, so Jayden shared what was really going on: belonging. Working on a plan together protects his health and your trust." },
        endMixed: { end: "mixed", them: "Okay. Later, I guess.", summary: "There’s a door open, but the real need — fitting in — hasn’t been explored yet. Return to it with curiosity rather than rules." },
        endBad: { end: "bad", them: "*door slams*", summary: "Accusations and punishment taught Jayden that honesty is dangerous. Repair is still possible: own your reaction and invite his side." }
      }
    },
    {
      id: "coworker-credit",
      title: "Who Gets the Credit?",
      icon: "💼",
      context: "In a team meeting, your colleague presented the analysis you built as her own. Your manager praised her. You catch her by the coffee machine afterwards.",
      you: "Analyst",
      them: "Sofia, colleague",
      start: "n1",
      nodes: {
        n1: { them: "Hey! Great meeting, right? The boss loved the analysis.", choices: [
          { text: "“Yeah, MY analysis. Nice of you to steal it.”", to: "b2", score: -2, note: "Jackal: accusation and sarcasm. She’ll defend rather than hear you." },
          { text: "“I noticed you presented the churn analysis without mentioning that I built it. I felt pretty deflated, because recognition for my work matters to me. Can we talk about it?”", to: "g2", score: 2, note: "Giraffe: full OFNR — specific observation, feeling, need and a request to talk." },
          { text: "“Mm. I guess it would’ve been nice to get a mention.”", to: "m2", score: 1, note: "Partly there — honest, but vague and a little passive." }
        ] },
        g2: { them: "Oh! I… I said ‘we’ a few times. I didn’t mean to take credit.", choices: [
          { text: "“You said ‘we’? Come on, that’s convenient.”", to: "b3", score: -1, note: "Jackal: dismissing her explanation turns it into a fight." },
          { text: "“Okay. It didn’t come across that way, but I believe you didn’t intend it.”", to: "m3", score: 1, note: "Generous, but there’s no request yet about what would help now." },
          { text: "“I hear it wasn’t your intention, and I appreciate that. Would you be willing to send a quick note to the manager mentioning my part?”", to: "g3", score: 2, note: "Giraffe: hearing her intention and making a clear, doable request." }
        ] },
        m2: { them: "Oh, sorry — it was kind of a team thing, wasn’t it?", choices: [
          { text: "“Actually, I built the whole model over two weekends. I’d really like that to be known. Could you mention it next time we present?”", to: "g3", score: 2, note: "Giraffe: getting specific with observation and request." },
          { text: "“Sure, whatever. Doesn’t matter.”", to: "b3", score: -1, note: "Jackal (towards yourself): giving up on your need breeds resentment." },
          { text: "“Kind of. Mostly mine though.”", to: "m3", score: 0, note: "True, but without a request it’s hard for her to respond." }
        ] },
        b2: { them: "Steal it? Wow. I was trying to help the team look good.", choices: [
          { text: "“That came out harsh. I’m frustrated because I worked hard on it and wanted that recognised. Can we start over?”", to: "m3", score: 2, note: "Giraffe: repairing your tone and naming the real need." },
          { text: "“Help the team, or help yourself?”", to: "b3", score: -2, note: "Jackal: more accusation of motive." },
          { text: "“Whatever. Just don’t do it again.”", to: "b3", score: -1, note: "Jackal: a demand without understanding." }
        ] },
        g3: { them: "Yes, of course. I’ll email her now. Honestly, I was nervous presenting and just wanted it to go well.", choices: [
          { text: "“Thank you. It sounds like you were under pressure too. Want to co-present next time?”", to: "endGood", score: 2, note: "Giraffe: gratitude, empathy for her need, and a creative strategy." },
          { text: "“Well, next time be nervous with your own work.”", to: "endBad", score: -2, note: "Jackal: a jab that undoes the repair." },
          { text: "“Great, thanks.”", to: "endMixed", score: 1, note: "Fine, but you miss a chance to deepen the working relationship." }
        ] },
        m3: { them: "Okay… so what do you want me to do?", choices: [
          { text: "“Would you be willing to mention my role to our manager today, and agree we credit each other by name in future?”", to: "endGood", score: 2, note: "Giraffe: a clear, positive, doable request." },
          { text: "“I don’t know. Just be fair.”", to: "endMixed", score: 0, note: "Vague requests are hard to act on." },
          { text: "“Nothing. I’ll handle it with the boss myself.”", to: "endBad", score: -1, note: "Jackal: withdrawing and escalating without dialogue." }
        ] },
        b3: { them: "I don’t need this. *walks off*", choices: [
          { text: "*Message her later* “I handled that badly. I’d like to talk about the credit issue calmly. Coffee tomorrow?”", to: "endMixed", score: 2, note: "Giraffe: taking responsibility and proposing a new attempt." },
          { text: "Complain about her to the rest of the team.", to: "endBad", score: -2, note: "Jackal: gossip damages trust for everyone." },
          { text: "Say nothing and stew about it for weeks.", to: "endBad", score: -1, note: "Suppressing your need doesn’t make it go away." }
        ] },
        endGood: { end: "good", them: "Deal. And I’m really sorry — you deserved the spotlight on that one.", summary: "Clear observation and a specific request got your work recognised, and empathy for Sofia’s nerves turned a conflict into collaboration." },
        endMixed: { end: "mixed", them: "Sure. Let’s talk tomorrow.", summary: "The relationship is intact, but your need for recognition isn’t fully met yet. Follow up with a specific request." },
        endBad: { end: "bad", them: "*avoids you for the rest of the week*", summary: "Accusations and withdrawal left both of you defensive. Kim Scott’s idea of “radical candour” — caring personally while challenging directly — is a helpful reset." }
      }
    },
    {
      id: "forgot-anniversary",
      title: "The Forgotten Anniversary",
      icon: "💐",
      context: "Today is your 10th wedding anniversary. Your partner gets home from work with no mention of it.",
      you: "Partner",
      them: "Ravi, your husband",
      start: "n1",
      nodes: {
        n1: { them: "Hey, long day. What’s for dinner?", choices: [
          { text: "“Do you know what day it is today?”", to: "m2", score: 0, note: "A test question — it may feel like a trap rather than an invitation." },
          { text: "“Unbelievable. Ten years and you can’t even remember.”", to: "b2", score: -2, note: "Jackal: blame and generalisation." },
          { text: "“It’s our anniversary today, and I was hoping we’d mark it. I’m feeling really hurt that it didn’t come up.”", to: "g2", score: 2, note: "Giraffe: clear observation and honest feeling without blame." }
        ] },
        g2: { them: "Oh no. Oh no… I completely forgot. I’m so sorry.", choices: [
          { text: "“I can see you feel bad. I need to know our relationship still matters to you. Could we plan something special this weekend?”", to: "g3", score: 2, note: "Giraffe: empathy for him, a clear need and a request." },
          { text: "“Sorry doesn’t cut it.”", to: "b3", score: -2, note: "Jackal: refusing his apology blocks repair." },
          { text: "“It’s fine. Don’t worry about it.”", to: "m3", score: 0, note: "Minimising your own hurt — it’s not really fine." }
        ] },
        m2: { them: "Uh… Thursday? Why?", choices: [
          { text: "“Wow. Just wow.”", to: "b3", score: -2, note: "Jackal: contempt, which John Gottman identifies as one of the most corrosive patterns in couples." },
          { text: "“It’s our anniversary. I’m hurt it slipped by, because I really want to feel special to you.”", to: "g3", score: 2, note: "Giraffe: dropping the test and saying it plainly." },
          { text: "“Nothing. Forget it.”", to: "m3", score: 0, note: "Withdrawal leaves him guessing." }
        ] },
        b2: { them: "Hey, I’ve been slammed at work. You know that.", choices: [
          { text: "“You’re always slammed. I’m never a priority.”", to: "b3", score: -2, note: "Jackal: “always” and “never” escalate." },
          { text: "“I know work’s been intense. I snapped because I’m hurt — I’d really hoped we’d celebrate today.”", to: "m3", score: 2, note: "Giraffe: acknowledging his stress and owning your feelings." },
          { text: "“Fine. I’ll make dinner.”", to: "m3", score: 0, note: "Stepping back avoids a fight but leaves the hurt unspoken." }
        ] },
        g3: { them: "Absolutely. Let me book that Lebanese place we went to on our first date. Tonight I’ll cook.", choices: [
          { text: "“I’d love that. Thank you for hearing me.”", to: "endGood", score: 2, note: "Giraffe: expressing appreciation completes the cycle." },
          { text: "“Fine, but you’d better not forget next year.”", to: "endMixed", score: -1, note: "Jackal: a warning that adds pressure to the repair." },
          { text: "“Okay, if you want.”", to: "endMixed", score: 0, note: "Lukewarm — your need for celebration might go unmet." }
        ] },
        m3: { them: "*awkward silence* …Should I order a takeaway?", choices: [
          { text: "“Sure.”", to: "endMixed", score: 0, note: "Practical, but the hurt is still under the surface." },
          { text: "“Before that — I want to say I’m sad about the anniversary. Would you be willing to plan something with me this weekend?”", to: "endGood", score: 2, note: "Giraffe: returning to the real issue with a clear request." },
          { text: "“Do whatever you want. You always do.”", to: "endBad", score: -2, note: "Jackal: resentment disguised as indifference." }
        ] },
        b3: { them: "You know what, I’m not doing this tonight. *goes upstairs*", choices: [
          { text: "*Later* “I came at you hard. I’m sorry. I was hurting. Can we talk?”", to: "endMixed", score: 2, note: "Giraffe: repair attempt — Gottman found these are key to lasting relationships." },
          { text: "Follow him and keep arguing.", to: "endBad", score: -2, note: "Jackal: pursuing when he’s flooded rarely helps." },
          { text: "Sleep on the sofa without a word.", to: "endBad", score: -1, note: "Silent treatment deepens the rift." }
        ] },
        endGood: { end: "good", them: "Happy anniversary. Ten years — and I’d choose you again.", summary: "By sharing your hurt without blame and making a clear request, you gave Ravi a way to show up. The forgotten date became a moment of reconnection." },
        endMixed: { end: "mixed", them: "Yeah… let’s talk tomorrow.", summary: "Some repair happened, but the hurt and need for celebration aren’t fully heard yet. Return to it with an OFNR statement." },
        endBad: { end: "bad", them: "*silence for the rest of the evening*", summary: "Blame and contempt turned hurt into a fight. A repair attempt — “I’m sorry, I was hurting” — is the way back." }
      }
    },
    {
      id: "father-driving",
      title: "Dad and the Car Keys",
      icon: "🚗",
      context: "Your 84-year-old father has had two minor scrapes this month. His doctor suggested he stop driving. You visit to talk about it.",
      you: "Adult child",
      them: "Hiroshi, your father",
      start: "n1",
      nodes: {
        n1: { them: "If you’ve come to take my keys, you can turn right around.", choices: [
          { text: "“Dad, you’re going to kill someone.”", to: "b2", score: -2, note: "Jackal: fear expressed as an accusation triggers defensiveness." },
          { text: "“The doctor thinks you should stop, so we have to follow that.”", to: "m2", score: 0, note: "Denial of responsibility — hiding behind the doctor rather than sharing your own concern." },
          { text: "“Sounds like you’re worried about losing your independence. That makes complete sense — I’d feel the same.”", to: "g2", score: 2, note: "Giraffe: empathy for his core need — autonomy and dignity." }
        ] },
        g2: { them: "Of course I am. Without the car, I’m stuck in this house. I’ll be a burden.", choices: [
          { text: "“You’d never be a burden. Don’t be silly.”", to: "m3", score: 0, note: "Reassurance — kind, but it dismisses his fear." },
          { text: "“You want to keep seeing your friends and doing things for yourself, without feeling you’re asking for favours?”", to: "g3", score: 2, note: "Giraffe: reflecting deeper needs — connection, contribution, dignity." },
          { text: "“Well, you should have thought of that before the accidents.”", to: "b3", score: -2, note: "Jackal: blame at a vulnerable moment." }
        ] },
        m2: { them: "That doctor is half my age. What does he know?", choices: [
          { text: "“He’s a professional. You need to listen.”", to: "b3", score: -1, note: "Jackal: arguing authority rather than connecting." },
          { text: "“It’s not just the doctor — I’m scared, Dad. After those scrapes I lie awake worrying about you.”", to: "g3", score: 2, note: "Giraffe: owning your feelings instead of borrowing authority." },
          { text: "“Maybe we could get a second opinion.”", to: "m3", score: 1, note: "Reasonable strategy, but it skips the emotional heart of it." }
        ] },
        b2: { them: "I’ve been driving for sixty years! How dare you.", choices: [
          { text: "“And look where that’s got you — two crashes.”", to: "b3", score: -2, note: "Jackal: point-scoring." },
          { text: "“You’re right, I said that harshly. I’m frightened. Sixty years is a long time — this must be really hard to hear.”", to: "m3", score: 2, note: "Giraffe: repair and empathy." },
          { text: "“I’m just saying what everyone’s thinking.”", to: "b3", score: -1, note: "Jackal: hiding behind ‘everyone’." }
        ] },
        g3: { them: "*quietly* I did get a fright last week, reversing into that post.", choices: [
          { text: "“That must have been scary. Could we look together at options — like a taxi account, or me driving you on Thursdays — so you can still get around?”", to: "endGood", score: 2, note: "Giraffe: empathy then collaborative problem-solving that honours his autonomy." },
          { text: "“See? So you agree. Give me the keys.”", to: "endBad", score: -2, note: "Jackal: seizing on vulnerability to win." },
          { text: "“Well, let’s think about it.”", to: "endMixed", score: 1, note: "Gentle, but without a concrete next step." }
        ] },
        m3: { them: "I’ll think about it. That’s all I’m promising.", choices: [
          { text: "“Thank you. Would you be willing to talk again on Sunday, and maybe try the bus pass for a week?”", to: "endGood", score: 2, note: "Giraffe: appreciation plus a small, time-limited request." },
          { text: "“Thinking isn’t enough.”", to: "endBad", score: -1, note: "Jackal: a demand that ignores the step he took." },
          { text: "“Okay.”", to: "endMixed", score: 0, note: "Respectful, but leaves things open-ended." }
        ] },
        b3: { them: "Get out of my house.", choices: [
          { text: "“I’ll go. I’m sorry I pushed. I love you, and I’ll come back Sunday so we can talk differently.”", to: "endMixed", score: 2, note: "Giraffe: respecting his boundary while keeping connection." },
          { text: "“Fine. I’m calling the licensing agency.”", to: "endBad", score: -2, note: "Jackal: a threat that may be necessary eventually, but used as a weapon here." },
          { text: "Leave without a word.", to: "endBad", score: -1, note: "Withdrawal leaves both of you hurt." }
        ] },
        endGood: { end: "good", them: "Thursdays with you… I’d like that. Maybe the taxi for the bowls club.", summary: "Empathy for his need for independence opened up shared solutions. Rosenberg’s insight: when people feel their needs matter, they become open to others’ needs too." },
        endMixed: { end: "mixed", them: "Sunday, then.", summary: "Connection survived, but no plan yet. Keep leading with empathy for his autonomy and share your fear honestly." },
        endBad: { end: "bad", them: "*won’t answer the phone for days*", summary: "Accusation and pressure made Hiroshi dig in. Safety still matters — but empathy is more likely to get there than force." }
      }
    },
    {
      id: "angry-customer",
      title: "The Furious Customer",
      icon: "📞",
      context: "You work in customer service. A customer’s order for his daughter’s birthday arrived broken, a day late.",
      you: "Support agent",
      them: "Mr Okafor, customer",
      start: "n1",
      nodes: {
        n1: { them: "This is the worst company I’ve ever dealt with! My daughter’s party is ruined!", choices: [
          { text: "“Sir, please calm down. Shouting won’t help.”", to: "b2", score: -2, note: "Jackal: telling someone to calm down usually does the opposite." },
          { text: "“I’m sorry for the inconvenience. Can I have your order number?”", to: "m2", score: 1, note: "Polite and practical, but skips empathy." },
          { text: "“Oh no — her birthday? You must be so frustrated and disappointed. You wanted it to be perfect for her.”", to: "g2", score: 2, note: "Giraffe: empathy first. Feeling heard defuses anger faster than procedure." }
        ] },
        g2: { them: "Exactly! She’s been looking forward to that dollhouse for weeks. And it came smashed.", choices: [
          { text: "“That happens sometimes with couriers.”", to: "b3", score: -1, note: "Jackal: explaining it away feels like making excuses." },
          { text: "“That sounds heartbreaking. I really want to help put this right. Can I check what we can get to you fastest?”", to: "g3", score: 2, note: "Giraffe: more empathy plus a clear intention to help." },
          { text: "“I understand. I’ll process a refund.”", to: "m3", score: 1, note: "Helpful, but a refund may not meet his real need — his daughter’s happiness." }
        ] },
        m2: { them: "Order number? Don’t you care what happened?!", choices: [
          { text: "“You’re right — let me back up. Her birthday was ruined, and you’re really upset. I’d be too.”", to: "g3", score: 2, note: "Giraffe: recovering by moving to empathy." },
          { text: "“I need the number to help you, sir.”", to: "b3", score: -1, note: "Jackal: insisting on procedure when someone needs to be heard." },
          { text: "“Of course I care.”", to: "m3", score: 0, note: "Telling isn’t showing — he needs to hear that you get it." }
        ] },
        b2: { them: "Don’t tell me to calm down! Get me your manager!", choices: [
          { text: "“I hear that you’re furious, and you have every reason to be. I’d like to try to fix this first — and I’ll get my manager if you still want.”", to: "m3", score: 2, note: "Giraffe: empathy and offering choice." },
          { text: "“My manager will say the same thing.”", to: "b3", score: -2, note: "Jackal: defensive and dismissive." },
          { text: "“Please hold.”", to: "b3", score: -1, note: "Avoidance leaves him angrier." }
        ] },
        g3: { them: "*breathing out* Okay. Okay. What can you do?", choices: [
          { text: "“There’s a store 10 minutes from you with it in stock. I can reserve it for pickup today at no cost, and refund the original.”", to: "endGood", score: 2, note: "Giraffe: a concrete offer that meets his real need." },
          { text: "“Well, policy says I can only offer store credit.”", to: "endBad", score: -1, note: "Jackal: hiding behind policy — denial of responsibility." },
          { text: "“I can send a replacement in 3–5 days.”", to: "endMixed", score: 1, note: "Helpful, but doesn’t address the urgency." }
        ] },
        m3: { them: "I just want my daughter to have her present.", choices: [
          { text: "“Of course. Let me see if a nearby store has it today so she doesn’t have to wait.”", to: "endGood", score: 2, note: "Giraffe: hearing the need and finding a matching strategy." },
          { text: "“I can only refund it.”", to: "endMixed", score: 0, note: "Limited, but honest." },
          { text: "“It’s not our fault the courier dropped it.”", to: "endBad", score: -2, note: "Jackal: blame-shifting." }
        ] },
        b3: { them: "This is ridiculous. I’m posting about this everywhere.", choices: [
          { text: "“I understand why you’d want to. I’m sorry we let you down. Could I have one more try at fixing it?”", to: "endMixed", score: 2, note: "Giraffe: empathy and a request, even late." },
          { text: "“Go ahead.”", to: "endBad", score: -2, note: "Jackal: provocation." },
          { text: "“I’ll pass your feedback on.”", to: "endBad", score: -1, note: "A script that sounds like a brush-off." }
        ] },
        endGood: { end: "good", them: "You’ve actually saved the day. Thank you — really.", summary: "Empathy calmed the storm, and understanding the real need (his daughter’s birthday) led to a solution that a refund alone never would have." },
        endMixed: { end: "mixed", them: "Fine. I’ll wait for the email.", summary: "The issue got handled, but he doesn’t feel fully heard. Leading with empathy before procedure makes a big difference." },
        endBad: { end: "bad", them: "*hangs up*", summary: "Defensiveness and policy-speak escalated his anger. Remember: “calm down” and “it’s not our fault” almost always backfire." }
      }
    },
    {
      id: "neighbour-party",
      title: "Midnight Bass",
      icon: "🎉",
      context: "It’s 12:30 am on a work night and your neighbour’s party is shaking your walls. You knock on their door.",
      you: "Neighbour",
      them: "Lucas, next door",
      start: "n1",
      nodes: {
        n1: { them: "*opens door, music blaring* Oh hey! Want to come in?", choices: [
          { text: "“Ha, thanks — um, any chance you could keep it down a bit?”", to: "m2", score: 1, note: "Friendly, but vague — “a bit” is hard to act on." },
          { text: "“Thanks, but it’s half twelve and I can hear the bass in my bedroom. I’ve got work at seven and I’m exhausted. Would you turn it down now?”", to: "g2", score: 2, note: "Giraffe: observation, feeling, need and a clear request." },
          { text: "“Do you have any idea what time it is? Some of us have jobs.”", to: "b2", score: -2, note: "Jackal: sarcasm and moral superiority." }
        ] },
        g2: { them: "Ah, sorry man. It’s my birthday though — just one more hour?", choices: [
          { text: "“Happy birthday! I get wanting to celebrate. Could the music go down now, and the party carry on inside quieter?”", to: "g3", score: 2, note: "Giraffe: empathy for his need for celebration while holding your need for rest." },
          { text: "“One hour, max. Then I’m calling the council.”", to: "b3", score: -1, note: "Jackal: a threat makes it a demand." },
          { text: "“I guess… okay.”", to: "m3", score: 0, note: "Giving up your need now will likely lead to resentment later." }
        ] },
        m2: { them: "*turns it down a notch* Better?", choices: [
          { text: "“Barely.”", to: "b3", score: -1, note: "Jackal: sarcasm without a clear request." },
          { text: "“A bit, thanks. Honestly I can still feel the bass in my bedroom — could you turn the bass right down or move the speaker?”", to: "g3", score: 2, note: "Giraffe: appreciation plus a more specific request." },
          { text: "“Yeah, sure.”", to: "m3", score: 0, note: "Polite, but not honest about what you need." }
        ] },
        b2: { them: "Whoa, chill. It’s one night.", choices: [
          { text: "“One night? It was last Saturday too.”", to: "b3", score: -1, note: "Jackal: point-scoring." },
          { text: "“You’re right, I came in hot. I’m just really tired and need sleep. Could you turn it down?”", to: "m3", score: 2, note: "Giraffe: repair and a clear request." },
          { text: "“Don’t tell me to chill.”", to: "b3", score: -2, note: "Jackal: escalation." }
        ] },
        g3: { them: "Yeah, fair. I’ll move the speaker away from your wall and turn it down.", choices: [
          { text: "“Thank you, really. Have a great birthday.”", to: "endGood", score: 2, note: "Giraffe: gratitude strengthens the relationship for next time." },
          { text: "“Good. And don’t let it happen again.”", to: "endMixed", score: -1, note: "Jackal: a parting demand sours the goodwill." },
          { text: "“Okay.”", to: "endMixed", score: 1, note: "Fine, though a little thanks goes a long way." }
        ] },
        m3: { them: "Alright… I’ll see what I can do.", choices: [
          { text: "“Thanks. If it’s still loud in fifteen minutes, would it be okay if I text you?”", to: "endGood", score: 2, note: "Giraffe: a gentle, specific follow-up agreement." },
          { text: "Go home without saying anything.", to: "endMixed", score: 0, note: "Leaves it to chance." },
          { text: "“You’d better.”", to: "endBad", score: -2, note: "Jackal: threat." }
        ] },
        b3: { them: "Whatever. *shuts door*", choices: [
          { text: "*Next day, leave a note* “Sorry I was snappy last night. I was exhausted. Could we swap numbers so I can text you if noise is an issue?”", to: "endMixed", score: 2, note: "Giraffe: repair and a forward-looking request." },
          { text: "Call the police immediately.", to: "endBad", score: -1, note: "Sometimes necessary, but skipping dialogue damages neighbourly trust." },
          { text: "Bang on the wall for an hour.", to: "endBad", score: -2, note: "Jackal: retaliation." }
        ] },
        endGood: { end: "good", them: "Cheers, mate. Sorry again — come by for cake tomorrow!", summary: "A clear request, plus empathy for his celebration, got you sleep and kept a good relationship with your neighbour." },
        endMixed: { end: "mixed", them: "Yeah, okay.", summary: "The noise may or may not settle. Being specific and warm makes neighbours much more willing to cooperate." },
        endBad: { end: "bad", them: "*music gets louder*", summary: "Threats and sarcasm turned a neighbour into an opponent. A calm, specific request is the best first move." }
      }
    },
    {
      id: "friend-cancels",
      title: "Cancelled Again",
      icon: "📱",
      context: "Your friend just texted to cancel dinner — the fourth time in two months. You call her.",
      you: "Friend",
      them: "Aisha, close friend",
      start: "n1",
      nodes: {
        n1: { them: "Hey, sorry about tonight! Something came up.", choices: [
          { text: "“Something always comes up with you.”", to: "b2", score: -2, note: "Jackal: generalisation and blame." },
          { text: "“No worries.”", to: "m2", score: 0, note: "Hiding your disappointment avoids conflict but erodes the friendship over time." },
          { text: "“This is the fourth time we’ve cancelled in two months. I feel sad, because I really miss our time together. Is everything okay?”", to: "g2", score: 2, note: "Giraffe: observation, feeling, need and genuine curiosity." }
        ] },
        g2: { them: "*pause* Honestly… things have been really hard at home. My mum’s been unwell.", choices: [
          { text: "“Oh, Aisha. I had no idea. Sounds like you’ve been carrying a lot. How are you doing?”", to: "g3", score: 2, note: "Giraffe: shifting to empathy when she opens up." },
          { text: "“You could have told me instead of just cancelling.”", to: "b3", score: -1, note: "Jackal: criticism when she’s being vulnerable." },
          { text: "“Oh, sorry. Well, let me know when you’re free.”", to: "m3", score: 0, note: "Kind, but misses the moment for connection." }
        ] },
        m2: { them: "Thanks for being so chill! Let’s do next week.", choices: [
          { text: "“Actually, I want to be honest — I’ve been disappointed with the cancellations. Can we talk about it?”", to: "g3", score: 2, note: "Giraffe: choosing honesty over false harmony." },
          { text: "“Sure.” *then vent to other friends*", to: "b3", score: -2, note: "Jackal: gossip instead of honest dialogue." },
          { text: "“Maybe. We’ll see.”", to: "m3", score: 0, note: "Passive withdrawal." }
        ] },
        b2: { them: "That’s not fair! You don’t know what’s going on with me.", choices: [
          { text: "“You’re right, I don’t. I’m sorry — I came in frustrated. What’s going on?”", to: "m3", score: 2, note: "Giraffe: repair and curiosity." },
          { text: "“Then tell me instead of flaking.”", to: "b3", score: -2, note: "Jackal: name-calling (“flaking”)." },
          { text: "“Well, it feels that way.”", to: "b3", score: -1, note: "A thought dressed as a feeling." }
        ] },
        g3: { them: "It’s been exhausting. I didn’t want to bring everyone down.", choices: [
          { text: "“You wouldn’t bring me down. I’d love to support you. Would it help if I came over with takeaway on Friday instead of going out?”", to: "endGood", score: 2, note: "Giraffe: empathy and a creative strategy that meets both your needs." },
          { text: "“Well, that’s what friends are for.”", to: "endMixed", score: 1, note: "Warm, but no concrete offer." },
          { text: "“Everyone has problems, you know.”", to: "endBad", score: -2, note: "Jackal: minimising." }
        ] },
        m3: { them: "I don’t know. Life’s just a lot right now.", choices: [
          { text: "“That sounds heavy. I miss you. Would a short walk on Sunday feel doable?”", to: "endGood", score: 2, note: "Giraffe: empathy plus a small, low-pressure request." },
          { text: "“Okay, well, call me when you’re less busy.”", to: "endMixed", score: 0, note: "Leaves it all on her." },
          { text: "“Life’s a lot for all of us.”", to: "endBad", score: -1, note: "Jackal: one-upping." }
        ] },
        b3: { them: "I don’t need this right now. Bye.", choices: [
          { text: "*Text later* “I’m sorry I was harsh. I miss you and I care about you. I’m here when you want.”", to: "endMixed", score: 2, note: "Giraffe: repair with no pressure." },
          { text: "Unfollow her on social media.", to: "endBad", score: -2, note: "Jackal: punishment through withdrawal." },
          { text: "Wait for her to apologise.", to: "endBad", score: -1, note: "Stalemate." }
        ] },
        endGood: { end: "good", them: "Friday sounds perfect. Thank you for not giving up on me.", summary: "Honest expression plus curiosity revealed what was really happening. The friendship grew deeper instead of fading." },
        endMixed: { end: "mixed", them: "Thanks. I’ll let you know.", summary: "The door is open, but the needs on both sides aren’t fully met yet. A concrete, low-pressure invite might help." },
        endBad: { end: "bad", them: "*no reply for weeks*", summary: "Blame and minimising pushed Aisha away just when she was struggling. A heartfelt repair message is still possible." }
      }
    },
    {
      id: "teacher-hitting",
      title: "The Parent-Teacher Meeting",
      icon: "🏫",
      context: "You’re a Year 2 teacher. A parent has come in about their son, Kwame, who has hit classmates three times this week.",
      you: "Teacher",
      them: "Mrs Mensah, Kwame’s mum",
      start: "n1",
      nodes: {
        n1: { them: "I don’t know why I’m here. Kwame says the other kids start it.", choices: [
          { text: "“Thank you for coming. I really want Kwame to feel safe and happy here. Can I share what I’ve seen, and then hear what he’s told you?”", to: "g2", score: 2, note: "Giraffe: shared goal first, and a request to exchange perspectives." },
          { text: "“Kwame’s hit three children this week. That’s unacceptable.”", to: "b2", score: -1, note: "Jackal: a fact delivered as a verdict puts her on the defensive." },
          { text: "“Well, I can only tell you what I’ve observed.”", to: "m2", score: 0, note: "Neutral, but a bit cold — no connection." }
        ] },
        g2: { them: "Okay… go on.", choices: [
          { text: "“On Monday and Wednesday, at lunch, Kwame hit another child after they took the football. On Thursday, during reading, he pushed a child who sat in his seat.”", to: "g3", score: 2, note: "Giraffe: clear, specific observations without labels." },
          { text: "“He’s quite aggressive, to be honest.”", to: "b3", score: -2, note: "Jackal: labelling a seven-year-old." },
          { text: "“He’s been having some trouble with his behaviour.”", to: "m3", score: 0, note: "Vague; she can’t picture what happened." }
        ] },
        m2: { them: "So you’re saying my son is lying?", choices: [
          { text: "“I’m saying there are rules for a reason.”", to: "b3", score: -1, note: "Jackal: deflecting to rules." },
          { text: "“Not at all. It sounds like you want to make sure he’s being treated fairly. I want that too.”", to: "g3", score: 2, note: "Giraffe: empathy for her need for fairness." },
          { text: "“I didn’t say that.”", to: "m3", score: 0, note: "Defensive, though accurate." }
        ] },
        b2: { them: "Unacceptable? He’s seven! Maybe if you supervised better…", choices: [
          { text: "“I supervise thirty children.”", to: "b3", score: -1, note: "Jackal: defending yourself rather than connecting." },
          { text: "“You sound really worried and maybe frustrated. You want him to be understood, not just blamed. That matters to me too.”", to: "m3", score: 2, note: "Giraffe: empathy turns the conversation around." },
          { text: "“Blaming me won’t help.”", to: "b3", score: -2, note: "Jackal: counter-blame." }
        ] },
        g3: { them: "*softens* He did say the football thing. He gets so upset when things feel unfair.", choices: [
          { text: "“So fairness really matters to him. Could we work together on giving him words for that — and a plan for when he feels it building?”", to: "endGood", score: 2, note: "Giraffe: naming the need behind the behaviour and collaborating, much like Ross Greene’s Collaborative & Proactive Solutions." },
          { text: "“That’s no excuse for hitting.”", to: "endBad", score: -2, note: "Jackal: dismissing the insight she just offered." },
          { text: "“I’ll keep an eye on it.”", to: "endMixed", score: 1, note: "Supportive, but no shared plan." }
        ] },
        m3: { them: "So what happens now?", choices: [
          { text: "“Would you be open to us meeting again in two weeks, after we’ve both talked with Kwame about what helps him calm down?”", to: "endGood", score: 2, note: "Giraffe: a concrete, collaborative request." },
          { text: "“If it happens again, he’ll be suspended.”", to: "endBad", score: -2, note: "Jackal: threat." },
          { text: "“We’ll follow school policy.”", to: "endMixed", score: 0, note: "Correct, but impersonal." }
        ] },
        b3: { them: "I think I should speak to the head teacher.", choices: [
          { text: "“Of course, that’s your right. I’m sorry this has felt like blame. I really do care about Kwame — could we try again together?”", to: "endMixed", score: 2, note: "Giraffe: respecting her choice and repairing." },
          { text: "“Go ahead. She’ll tell you the same.”", to: "endBad", score: -2, note: "Jackal: defensive escalation." },
          { text: "“Fine.”", to: "endBad", score: -1, note: "Shuts the door." }
        ] },
        endGood: { end: "good", them: "Thank you. I feel like we’re on the same side now.", summary: "Specific observations and empathy for both mother and child turned a defensive meeting into a partnership focused on Kwame’s needs." },
        endMixed: { end: "mixed", them: "Alright. We’ll see how it goes.", summary: "The meeting ended civilly, but without a shared plan. Leading with shared goals and specific observations builds partnership." },
        endBad: { end: "bad", them: "*leaves without saying goodbye*", summary: "Labels and threats made the parent feel her child was being judged. Starting with a shared goal changes the whole conversation." }
      }
    },
    {
      id: "comment-war",
      title: "The Comment Section",
      icon: "💬",
      context: "You posted about cycling infrastructure in your town. A stranger replies: “Typical entitled cyclist. You lot think you own the road.”",
      you: "Original poster",
      them: "Gary_88, commenter",
      start: "n1",
      nodes: {
        n1: { them: "Typical entitled cyclist. You lot think you own the road.", choices: [
          { text: "“Says the guy who probably can’t even ride a bike.”", to: "b2", score: -2, note: "Jackal: insult for insult." },
          { text: "“I don’t think I own the road. I just want to be safe.”", to: "m2", score: 1, note: "Honest, but a bit defensive." },
          { text: "“Sounds like you’re frustrated with something on the roads. Are you worried about traffic or how roads are shared?”", to: "g2", score: 2, note: "Giraffe: empathy for the need behind the attack." }
        ] },
        g2: { them: "Yeah. They’ve taken away a lane on my commute and now it takes 20 extra minutes.", choices: [
          { text: "“That’s not because of cyclists, that’s bad planning.”", to: "m3", score: 0, note: "Maybe true, but it corrects rather than connects." },
          { text: "“Twenty minutes every day is a lot — you want your time and an easy commute. I get that. I want roads that work for drivers and cyclists.”", to: "g3", score: 2, note: "Giraffe: empathy and naming a shared goal." },
          { text: "“So you’d rather cyclists die than lose 20 minutes?”", to: "b3", score: -2, note: "Jackal: straw man." }
        ] },
        m2: { them: "Safe? You run red lights and weave through traffic.", choices: [
          { text: "“Some cyclists do, and that worries me too. I’m guessing you want everyone to follow the same rules?”", to: "g3", score: 2, note: "Giraffe: acknowledging truth and guessing his need for fairness." },
          { text: "“Not me. Stop generalising.”", to: "m3", score: 0, note: "Fair, but defensive." },
          { text: "“Drivers kill far more people than cyclists, so…”", to: "b3", score: -1, note: "Jackal: comparison and point-scoring." }
        ] },
        b2: { them: "LOL. Nice one, snowflake.", choices: [
          { text: "“Fair, that was a cheap shot. I’m frustrated because I care about safety. What’s your take on it?”", to: "m3", score: 2, note: "Giraffe: repair and curiosity." },
          { text: "“Grow up.”", to: "b3", score: -2, note: "Jackal: more judgment." },
          { text: "Reply with a mocking meme.", to: "b3", score: -1, note: "Jackal: mockery dressed as humour." }
        ] },
        g3: { them: "Well… I guess I don’t hate cyclists. I just want the planning to be better.", choices: [
          { text: "“Same here. Want to go to the council consultation next month together? Drivers and cyclists in one room might actually help.”", to: "endGood", score: 2, note: "Giraffe: shared needs leading to a joint strategy." },
          { text: "“Glad you finally admit it.”", to: "endBad", score: -2, note: "Jackal: gloating undoes the connection." },
          { text: "“Cool, agree.”", to: "endMixed", score: 1, note: "Fine, but ends the conversation." }
        ] },
        m3: { them: "Whatever. Roads are for cars.", choices: [
          { text: "“I hear you want roads that work well for drivers. I want that and safety for bikes. Maybe there’s a way to have both.”", to: "endGood", score: 2, note: "Giraffe: holding both needs." },
          { text: "Stop replying.", to: "endMixed", score: 0, note: "Sometimes wise online — not every thread needs winning." },
          { text: "“That’s literally the dumbest take.”", to: "endBad", score: -2, note: "Jackal: insult." }
        ] },
        b3: { them: "Reported. Blocked.", choices: [
          { text: "Take a breath, close the app, and reflect on what you were needing.", to: "endMixed", score: 2, note: "Giraffe: self-empathy after a heated exchange." },
          { text: "Screenshot it and post about him.", to: "endBad", score: -2, note: "Jackal: public shaming." },
          { text: "Make a new account to keep arguing.", to: "endBad", score: -1, note: "Escalation." }
        ] },
        endGood: { end: "good", them: "Huh. Didn’t expect that. Yeah, maybe I will.", summary: "Empathy for the frustration behind the insult revealed shared needs. Online, curiosity disarms far more than counter-attack." },
        endMixed: { end: "mixed", them: "*thread goes quiet*", summary: "No harm done, and you avoided escalation. Not every online exchange can be won — self-empathy is a good place to land." },
        endBad: { end: "bad", them: "*more strangers pile in*", summary: "Insults and point-scoring fuelled a comment war. Online, jackal language spreads fast — empathy slows it down." }
      }
    },
    {
      id: "sibling-inheritance",
      title: "Mum’s House",
      icon: "🏠",
      context: "Your mother passed away recently. Your brother wants to sell her house quickly; you want to keep it in the family for a while.",
      you: "Sibling",
      them: "Mateo, your brother",
      start: "n1",
      nodes: {
        n1: { them: "I’ve talked to an agent. We could list it next week.", choices: [
          { text: "“Next week? Mum’s barely gone and you’re already cashing in!”", to: "b2", score: -2, note: "Jackal: accusing him of greed." },
          { text: "“I’m not ready for that. Can we wait?”", to: "m2", score: 1, note: "Honest, but doesn’t explore his side." },
          { text: "“Hearing ‘next week’ makes me panic — I’m not ready to let it go. Could you tell me what’s making it urgent for you?”", to: "g2", score: 2, note: "Giraffe: honest feeling and curiosity about his needs." }
        ] },
        g2: { them: "Honestly, it’s the mortgage on my place. And every time I go to Mum’s, I fall apart.", choices: [
          { text: "“So you’re under real financial pressure, and being there is painful. That makes sense. I’m grieving too, just differently.”", to: "g3", score: 2, note: "Giraffe: reflecting both his needs and naming yours." },
          { text: "“Well, I can’t help your money problems.”", to: "b3", score: -2, note: "Jackal: dismissive." },
          { text: "“We all miss her.”", to: "m3", score: 0, note: "True, but skips his specific pain." }
        ] },
        m2: { them: "Wait for what? It’s just sitting there costing us money.", choices: [
          { text: "“Costing money? It’s her home!”", to: "b3", score: -1, note: "Jackal: moral outrage." },
          { text: "“It’s more than money for me — it’s the last place I feel close to her. What would waiting cost you?”", to: "g3", score: 2, note: "Giraffe: sharing your need and asking about his." },
          { text: "“I don’t know. A few months?”", to: "m3", score: 0, note: "A strategy, but without connection." }
        ] },
        b2: { them: "Cashing in? I paid for her care for two years while you visited at Christmas!", choices: [
          { text: "“That’s a lie and you know it.”", to: "b3", score: -2, note: "Jackal: escalation." },
          { text: "“You carried a lot during those years. I don’t think I ever really thanked you. I’m sorry I said that.”", to: "m3", score: 2, note: "Giraffe: hearing the pain behind the attack, and repair." },
          { text: "“I had my own family to look after.”", to: "b3", score: -1, note: "Defending rather than hearing." }
        ] },
        g3: { them: "*quietly* I didn’t know you felt that way about the house.", choices: [
          { text: "“And I didn’t know about the mortgage. Could we look for something that works for both — like renting it out for a year, or me buying you out over time?”", to: "endGood", score: 2, note: "Giraffe: both needs on the table, then creative strategies." },
          { text: "“Now you know. So we’re keeping it.”", to: "endBad", score: -2, note: "Jackal: winning rather than collaborating." },
          { text: "“Let’s think about it.”", to: "endMixed", score: 1, note: "Gentle, but vague." }
        ] },
        m3: { them: "So what do we do?", choices: [
          { text: "“Would you be willing to meet with a mediator, or sit down this weekend and list what each of us needs?”", to: "endGood", score: 2, note: "Giraffe: a concrete, collaborative request." },
          { text: "“You decide. You always do.”", to: "endBad", score: -2, note: "Jackal: resentment and generalisation." },
          { text: "“I don’t know.”", to: "endMixed", score: 0, note: "Honest, but stuck." }
        ] },
        b3: { them: "I’m done talking. I’ll get a lawyer.", choices: [
          { text: "“Please wait. I don’t want lawyers between us. Mum would hate this. Can we try once more, calmly?”", to: "endMixed", score: 2, note: "Giraffe: naming the shared value and requesting another try." },
          { text: "“Fine. So will I.”", to: "endBad", score: -2, note: "Jackal: escalation." },
          { text: "Hang up.", to: "endBad", score: -1, note: "Withdrawal." }
        ] },
        endGood: { end: "good", them: "Renting it out for a year… that could actually work. Thank you.", summary: "When both of you felt heard, strategies emerged that met both sets of needs. Grief often hides beneath money conflicts." },
        endMixed: { end: "mixed", them: "Okay. One more talk.", summary: "Things are tense but not broken. Naming each person’s needs before strategies is the way forward." },
        endBad: { end: "bad", them: "*sends a solicitor’s letter*", summary: "Accusations turned grief into a legal fight. Bill Eddy’s work on high-conflict disputes shows how quickly blame escalates — and how empathy can lower the heat." }
      }
    },
    {
      id: "student-refusing",
      title: "“I’m Not Doing It”",
      icon: "📚",
      context: "You teach Year 9. During a writing task, one student has pushed his book away and put his head on the desk.",
      you: "Teacher",
      them: "Dmitri, age 14",
      start: "n1",
      nodes: {
        n1: { them: "I’m not doing it. This is pointless.", choices: [
          { text: "“Do it now or you’re in detention.”", to: "b2", score: -2, note: "Jackal: demand plus punishment in front of peers invites a standoff." },
          { text: "*Crouch beside him, quietly* “Seems like this task is really not working for you today. What’s up?”", to: "g2", score: 2, note: "Giraffe: private, curious and empathic." },
          { text: "“Come on, just write a few lines.”", to: "m2", score: 1, note: "Encouraging, but skips what’s going on." }
        ] },
        g2: { them: "I don’t know what to write. I’m rubbish at this.", choices: [
          { text: "“You’re not rubbish!”", to: "m3", score: 0, note: "Reassurance that argues with his feeling." },
          { text: "“Sounds like you feel stuck and maybe a bit embarrassed. Want to tell me your idea out loud first, and I’ll help you get started?”", to: "g3", score: 2, note: "Giraffe: empathy plus an offer that meets his need for competence." },
          { text: "“If you’d listened earlier, you’d know.”", to: "b3", score: -2, note: "Jackal: blame." }
        ] },
        m2: { them: "A few lines of what? I don’t get it.", choices: [
          { text: "“I explained it twice already.”", to: "b3", score: -1, note: "Jackal: implied criticism." },
          { text: "“Okay, it’s confusing. Let’s figure out the first sentence together.”", to: "g3", score: 2, note: "Giraffe: accepting his experience and offering support." },
          { text: "“Just look at the board.”", to: "m3", score: 0, note: "Practical, but not enough." }
        ] },
        b2: { them: "Fine, give me a detention. I don’t care.", choices: [
          { text: "“Right, that’s two detentions.”", to: "b3", score: -2, note: "Jackal: escalating punishment." },
          { text: "“I don’t want to fight. I can see something’s wrong. Can we talk for a minute after class?”", to: "m3", score: 2, note: "Giraffe: stepping out of the power struggle." },
          { text: "Walk away and ignore him.", to: "m3", score: 0, note: "Defuses for now, but no connection." }
        ] },
        g3: { them: "*mumbles* I guess I could write about my grandad’s farm.", choices: [
          { text: "“That sounds great. What’s one thing you remember about it?”", to: "endGood", score: 2, note: "Giraffe: curiosity that builds momentum." },
          { text: "“See, that wasn’t so hard, was it?”", to: "endMixed", score: 0, note: "Slightly patronising — can sting." },
          { text: "“Fine, but it needs to be a full page.”", to: "endBad", score: -1, note: "Jackal: raising demands just as he engages." }
        ] },
        m3: { them: "*shrugs*", choices: [
          { text: "“How about you write just three sentences today, and I’ll check in with you in ten minutes?”", to: "endGood", score: 2, note: "Giraffe: a small, doable request." },
          { text: "“Suit yourself.”", to: "endMixed", score: 0, note: "Respectful of choice, but gives up." },
          { text: "“I’ll be calling your parents.”", to: "endBad", score: -2, note: "Jackal: threat." }
        ] },
        b3: { them: "*kicks chair back* This class is a joke!", choices: [
          { text: "“You’re really frustrated. Take five minutes outside, then come back and we’ll sort it.”", to: "endMixed", score: 2, note: "Giraffe: empathy and a calm, respectful limit." },
          { text: "“Get out!”", to: "endBad", score: -2, note: "Jackal: public rejection." },
          { text: "“Sit down or I’m calling the head.”", to: "endBad", score: -1, note: "Jackal: threat." }
        ] },
        endGood: { end: "good", them: "The smell of hay… and the old tractor that never started. *starts writing*", summary: "Empathy and curiosity uncovered his real obstacle — feeling stuck and incompetent. Support, not pressure, got him writing." },
        endMixed: { end: "mixed", them: "*does a little, slowly*", summary: "He’s calmer, but not fully engaged. Uncovering what lies behind refusal (confusion, embarrassment) opens the way." },
        endBad: { end: "bad", them: "*sent out, door slams*", summary: "Demands and threats in public led to a standoff. Ross Greene’s phrase “kids do well if they can” is a helpful reminder: refusal usually signals a lagging skill or unmet need." }
      }
    }
  ],
  daily: [
    { day: 1, title: "Notice Your Jackal", task: "Today, simply notice when you judge someone, in your head or out loud. Don’t change anything yet — just count the moments.", reflect: "Which judgment came up most often, and what might it say about what you care about?" },
    { day: 2, title: "Camera Eyes", task: "Pick three moments today and describe them only as a video camera would record them — no labels, no “always” or “never”.", reflect: "How did describing things neutrally change how you felt about them?" },
    { day: 3, title: "Observation Upgrade", task: "Take one complaint you often make (e.g. “You never help”) and rewrite it as a specific observation.", reflect: "What happened inside you when you replaced the generalisation with facts?" },
    { day: 4, title: "Name Your Feelings", task: "Set three reminders today. Each time, stop and name what you’re feeling using a feelings list.", reflect: "Which feelings were easy to name, and which were harder to find words for?" },
    { day: 5, title: "Catch the Faux Feelings", task: "Listen for “I feel like…”, “I feel ignored/attacked/used”. Each time you say or think one, find the real feeling beneath it.", reflect: "What real feelings were hiding under your faux feelings today?" },
    { day: 6, title: "Feelings in the Body", task: "Three times today, notice where a feeling lives in your body — tight chest, warm face, heavy shoulders.", reflect: "What does your body tell you before your mind catches up?" },
    { day: 7, title: "Week One Review", task: "Describe a recent conflict in a short paragraph, in your usual words. Then underline every judgment and circle every feeling.", reflect: "What have you learned about your own patterns this first week?" },
    { day: 8, title: "Discover Your Needs", task: "Read a needs list slowly. Circle the five needs that feel most alive for you this week.", reflect: "Which need surprised you, and why might it be important right now?" },
    { day: 9, title: "Feeling → Need", task: "Each time you notice a feeling today, ask: “Which need is met or unmet here?” Write three pairs down.", reflect: "Did linking feelings to needs change how you saw the situation?" },
    { day: 10, title: "Needs vs Strategies", task: "List three things you’ve said you “need” recently. Find the universal need beneath each strategy.", reflect: "How many other strategies could meet that same need?" },
    { day: 11, title: "Take Responsibility", task: "Replace “You make me feel…” with “I feel… because I need…” in every conversation today.", reflect: "How did owning your feelings change your conversations?" },
    { day: 12, title: "Have to → Choose to", task: "List five things you “have to” do. Rewrite each as “I choose to… because I want…”, as Marshall Rosenberg suggested.", reflect: "Which “have to” felt different once you named your choice and need?" },
    { day: 13, title: "Make a Clear Request", task: "Make at least one request today that is specific, positive (what you do want), and doable right now.", reflect: "How did the other person respond to a clear request compared with a hint?" },
    { day: 14, title: "Week Two Review", task: "Write a full OFNR statement for a situation that’s been bothering you. Don’t send it — just practise.", reflect: "Which part of OFNR is hardest for you, and why?" },
    { day: 15, title: "Hearing ‘No’", task: "Make a request where you’re genuinely open to a no. If you get one, ask what need led to the no.", reflect: "How did it feel to hear a no and stay curious instead of disappointed or angry?" },
    { day: 16, title: "Connection Requests", task: "Try a connection request: “Would you tell me how that lands for you?” or “Would you tell me what you heard me say?”", reflect: "What did you learn by checking how your words were received?" },
    { day: 17, title: "Empathy Without Fixing", task: "When someone shares a problem today, don’t advise, console or tell your own story. Just guess their feeling and need.", reflect: "Which block to empathy was hardest to resist — advising, consoling, one-upping?" },
    { day: 18, title: "Silent Empathy", task: "In one conversation, silently guess the other person’s feelings and needs as they talk, without saying anything.", reflect: "How did silent empathy change how you listened?" },
    { day: 19, title: "Hear the Need Behind Criticism", task: "When someone criticises or complains, translate it in your head into their feeling and unmet need.", reflect: "What need did you hear behind a criticism today?" },
    { day: 20, title: "Self-Empathy", task: "Choose one moment you’re frustrated with yourself. Give yourself empathy: “I’m feeling… because I need…”", reflect: "How did self-empathy feel compared with self-criticism?" },
    { day: 21, title: "Week Three Review", task: "Have one full empathic listening conversation of at least ten minutes with someone close to you.", reflect: "What did the other person seem to need most from you?" },
    { day: 22, title: "Translate Your Inner Critic", task: "Write down three “should” statements you say to yourself. Translate each into the need it is trying to meet.", reflect: "What need is your inner critic trying, clumsily, to protect?" },
    { day: 23, title: "Mourning, Not Blame", task: "Think of a past choice you regret. Instead of blaming yourself, mourn the needs that weren’t met and honour the needs you were trying to meet.", reflect: "How did mourning feel different from guilt or shame?" },
    { day: 24, title: "Gratitude, Giraffe Style", task: "Express appreciation to one person using NVC: what they did, how you feel, and which need it met.", reflect: "How did they react compared with a simple “thanks” or “great job”?" },
    { day: 25, title: "Receive Appreciation", task: "When someone thanks or compliments you today, receive it fully — no deflecting. Ask what need it met for them, if it feels right.", reflect: "What makes it hard or easy for you to receive appreciation?" },
    { day: 26, title: "Anger as a Signal", task: "Next time you feel angry, pause. Find the judgment behind it, then the unmet need beneath that judgment.", reflect: "What need was your anger pointing to today?" },
    { day: 27, title: "Protective Use of Force", task: "Notice a moment where you set a limit for safety. Did you set it to protect, or to punish? Practise stating it with care.", reflect: "Where is the line between protecting and punishing in your life?" },
    { day: 28, title: "Difficult Conversation Prep", task: "Choose a hard conversation you’ve been avoiding. Prepare your OFNR and guess the other person’s feelings and needs.", reflect: "What do you imagine the other person needs most from this conversation?" },
    { day: 29, title: "Have the Conversation", task: "Have the conversation you prepared yesterday (or a smaller one). Lead with empathy, then express honestly.", reflect: "What worked, what was hard, and what would you try differently next time?" },
    { day: 30, title: "Celebrate and Continue", task: "Look back through your journal. Celebrate three moments of growth, and choose one practice to keep going.", reflect: "What has changed in how you speak, listen or see others over these 30 days?" }
  ],

  badges: [
    { id: "first-quiz", name: "First Steps", icon: "👣", desc: "You completed your first quiz.", rule: "Complete any quiz deck." },
    { id: "perfect-quiz", name: "Clear Eyes", icon: "🎯", desc: "Every answer right — sharp distinctions!", rule: "Score 100% on any quiz." },
    { id: "all-quizzes", name: "Quiz Master", icon: "🏆", desc: "You’ve explored every quiz deck.", rule: "Complete all 8 quiz decks." },
    { id: "first-dialogue", name: "First Conversation", icon: "💬", desc: "You finished your first role-play.", rule: "Complete any dialogue role-play." },
    { id: "good-ending", name: "Giraffe Heart", icon: "🦒", desc: "You reached a connected outcome.", rule: "Reach a good ending in any dialogue." },
    { id: "all-dialogues", name: "Peacemaker", icon: "🕊️", desc: "You’ve practised every conversation.", rule: "Complete all dialogue role-plays." },
    { id: "streak-3", name: "Warming Up", icon: "🔥", desc: "Three days of practice in a row.", rule: "Practise on 3 consecutive days." },
    { id: "streak-7", name: "Steady Practice", icon: "🌟", desc: "A full week of daily practice.", rule: "Practise on 7 consecutive days." },
    { id: "day-30", name: "30-Day Journey", icon: "🌳", desc: "You completed the full 30-day practice.", rule: "Complete all 30 daily practices." },
    { id: "translator", name: "Translator", icon: "🔄", desc: "You turned jackal into giraffe.", rule: "Translate 10 jackal statements into giraffe language." },
    { id: "journal-5", name: "Reflective Mind", icon: "📓", desc: "You’ve built a reflection habit.", rule: "Write 5 journal reflections." },
    { id: "explorer", name: "Explorer", icon: "🧭", desc: "You’ve explored every corner of the app.", rule: "Visit all sections of the app." }
  ]
};
