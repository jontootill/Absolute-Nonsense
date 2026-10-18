/* ==========================================================================
   Absolute-Nonsense: CORE GAME ENGINE
   ========================================================================== */

// --- 1. GAME SCENARIOS ---
const SCENARIOS = [
  // --- Everyday & Domestic Drama ---
  { 
    title: "The Flatmate Dispute", 
    desc: "It is 2:00 AM. Someone left a half-eaten tin of baked beans on the radiator.",
    objects: ["a crusty frying pan", "the lukewarm radiator", "a dirty tea towel", "the communal kettle", "a mouldy jug of milk", "a stack of unpaid electricity bills", "an overflowing recycling box", "a rogue single sock"]
  },
  { 
    title: "The Parent-Teacher Evening", 
    desc: "You are meeting to discuss your son's recent choices in class.",
    objects: ["an iodine-stained lab stool", "a red correction pen", "a folded paper aeroplane", "a burning Bunsen burner", "a piece of used chewing gum", "a heavily doodled textbook", "a confiscated mobile phone", "a detention slip"]
  },
  { 
    title: "The Assembled Flatpack Disaster", 
    desc: "You are three hours into building a wardrobe, and there are 14 mystery screws left over.",
    objects: ["a bent Allen key", "a wobbly plywood panel", "a bag of cam lock nuts", "the shredded instruction manual", "instructions written in hieroglyphs", "a mismatched wooden dowel", "a flathead screwdriver", "a rogue cabinet door hinge"]
  },
  { 
    title: "The Wheelie Bin Feud", 
    desc: "Your neighbor has put their garden waste into your general black bin on bin night.",
    objects: ["a rogue grass clipping", "the bright yellow recycling bin", "a plastic garden trowel", "the property boundary fence", "a crumpled neighborhood watch flyer", "an overgrown privet hedge", "a suspiciously heavy black bag", "a stray garden gnome"]
  },
  { 
    title: "The Smart Home Rebellion", 
    desc: "The AI thermostat has locked the house at 32°C until you complete its riddle.",
    objects: ["a blinking google home", "the digital wall tablet", "a flickering LED strip", "the automated front door deadbolt", "a frozen smart fridge screen", "a tripped fuse box switch", "a tangled Wi-Fi router", "an automated vacuum cleaner"]
  },

  // --- Romance & Awkward Social Encounter ---
  { 
    title: "The Awkward First Date", 
    desc: "You are 20 minutes into dinner at an overly expensive Italian restaurant.",
    objects: ["a single lukewarm breadstick", "an intimidating wine list", "a melting candle in a fancy bottle", "the bill folder", "a stray piece of oregano", "a damp linen napkin", "an empty water goblet", "a half-eaten bruschetta"]
  },
  { 
    title: "Meeting the In-Laws", 
    desc: "You just accidentally dropped the family heirloom vase during Sunday roast.",
    objects: ["a shattered porcelain shard", "the Sunday roast carving knife", "a gravy boat", "a lace doiley", "a silver dessert spoon", "a roasting pan dripping with fat", "a bowl of overcooked sprouts", "a fragile crystal wine glass"]
  },
  { 
    title: "The Wedding Toast Gone Wrong", 
    desc: "You've been handed the microphone after three champagne flutes, but you forgot who is getting married.",
    objects: ["a clinking champagne flute", "the wireless microphone", "a crumpled speech index card", "the bridal seating chart", "a stray confetti piece", "a speaker feedback screech", "a groomsman's boutonnière", "an open bottle of prosecco"]
  },
  { 
    title: "The Ex-Partner Collision", 
    desc: "You bumped into your ex in the aisle of a discount supermarket while wearing pajamas.",
    objects: ["a discounted frozen pizza", "a plastic shopping basket", "a clearance rack of sponges", "the receipt scanner", "a bruised banana", "a dented tin of baked beans", "a promotional cardboard cutout", "a crinkled 5p carrier bag"]
  },
  { 
    title: "The Gym Equipment Stand-Off", 
    desc: "Both of you have been making eye contact with the same leg press machine for ten minutes.",
    objects: ["a sweaty resistance band", "a metallic water bottle", "the resistance pin selector", "a gym towel", "a 10kg kettle bell", "a digital heart rate monitor", "a squeaky rubber yoga mat", "a tub of chocolate protein powder"]
  },

  // --- Work, Bureaucracy & Customer Service ---
  { 
    title: "The Customer Support Line", 
    desc: "You have been on hold for 45 minutes regarding a damaged garden gnome.",
    objects: ["a plastic telephone handset", "a ceramic gnome hat", "a scratchy hold-music speaker", "a tangled landline cord", "a dead smartphone battery", "an automated menu prompt guide", "a desktop calendar", "a ballpoint pen with no ink"]
  },
  { 
    title: "The Annual Performance Review", 
    desc: "Your boss wants to discuss 'unusual expense reports' filed under company catering.",
    objects: ["a color-coded spreadsheet", "a company expense binder", "a corporate highlighter", "a lukewarm mug of instant coffee", "a stack of sticky notes", "an awkward corporate slogan plaque", "a desk succulent", "an appraisal feedback form"]
  },
  { 
    title: "The Job Interview", 
    desc: "You lied on your CV about knowing fluent Mandarin, and the interviewer just switched languages.",
    objects: ["a laminated resume", "a sleek glass conference table", "a metallic business card holder", "a corporate notepad", "a glass of tap water", "a nervous palm sweat stain", "a sleek leather portfolio", "a framed company mission statement"]
  },
  { 
    title: "The HR Exit Interview", 
    desc: "You are leaving the firm today and finally telling your manager what you really think.",
    objects: ["a cardboard packing box", "an official grievance form", "a security access lanyard", "a farewell box of dry donuts", "an unreturned desk key", "a shredded compliance handbook", "a resignation letter", "a foam stress brick"]
  },
  { 
    title: "The Passive-Aggressive Email", 
    desc: "Someone used 'Per my previous email' in a thread CC'ing the entire department.",
    objects: ["an ergonomic computer mouse", "a glowing office monitor", "a stress-relief squeeze ball", "a mechanical keyboard", "an unread notification badge", "a wireless headset", "a half-empty can of energy drink", "a blue light computer glasses case"]
  },

  // --- Holidays, Travel & Outings ---
  { 
    title: "The Airport Security Line", 
    desc: "The conveyor belt stopped, and the guard is holding up your hand luggage with a stern look.",
    objects: ["a clear plastic liquid pouch", "a plastic security tray", "an oversized laptop bag", "a confiscated bottle of shampoo", "a crumpled boarding pass", "a pair of slip-on shoes", "a duty-free Toblerone", "a passport with missing pages"]
  },
  { 
    title: "The Family Camping Trip", 
    desc: "It’s pitch black, torrential rain is pouring, and the tent poles just snapped in half.",
    objects: ["a muddy tent peg", "a flickering battery lantern", "a soggy waterproof jacket", "a snapped aluminum pole", "a puddle-soaked sleeping bag", "a crushed packet of marshmallows", "a damp box of matches", "a tangled guy rope"]
  },
  { 
    title: "The All-Inclusive Resort Breakfast", 
    desc: "Someone took the last hash brown from the buffet tray right out from under your tongs.",
    objects: ["a pair of stainless steel buffet tongs", "an empty ceramic platter", "a continental pastry basket", "a juice dispenser tap", "a sliding egg station counter", "a sticky plastic placemat", "a chipped coffee mug", "a pile of paper napkins"]
  },
  { 
    title: "The Road Trip Navigation Argument", 
    desc: "You missed the motorway turnoff 40 miles ago because someone was controlling the music playlist.",
    objects: ["a tangled aux cable", "a dusty dashboard air vent", "a folded paper road atlas", "a sticky cup holder", "a melted dashboard gummy bear", "a half-empty packet of crisps", "a rattling dashboard coin tray", "a blown cigarette lighter fuse"]
  },
  { 
    title: "The Theme Park Queue", 
    desc: "You’ve been waiting 2 hours for a rollercoaster, and someone just cut in line using a questionable pass.",
    objects: ["a metal crowd control barrier", "a laminated fast-track pass", "a melting ice cream cone", "a park map pamphlet", "a discarded wristband", "a dizzy-looking ride safety sign", "a rain poncho ball", "a ticket barcode scanner"]
  },

  // --- Parenting, Kids & Animals ---
  { 
    title: "The Toddler Tantrum in Aisle 4", 
    desc: "A 3-year-old has flopped onto the supermarket floor over a box of cereal.",
    objects: ["a spilled box of sugary cereal", "a dented shopping trolley wheel", "a sticky lollipop wrapper", "a dropped toddler shoe", "a stray plush toy", "a broken carton of eggs", "a smear of raspberry jam", "a chaotic shopping list"]
  },
  { 
    title: "The Lost School Mascot", 
    desc: "It was your weekend to look after the class hamster, but its cage door is currently wide open.",
    objects: ["an empty plastic cedar cage", "a chewed cardboard tube", "a plastic exercise wheel", "a bag of sunflower seeds", "a trail of tiny droppings", "a squeaky water bottle nozzle", "a shredded piece of bedding", "an overturned food bowl"]
  },
  { 
    title: "The Vet Visit", 
    desc: "The family cat has sprinted up the curtain pole and refuses to come down for its jab.",
    objects: ["a woven cat carrier", "a frayed living room curtain", "a plastic syringe", "a tub of calming cat treats", "a Vet's examination table", "a roll of paper examination couch cover", "a protective leather handling glove", "a terrified hiss"]
  },
  { 
    title: "The Teenager's Messy Room", 
    desc: "You just discovered a stack of moldy mugs under the bed dating back to summer.",
    objects: ["a crusty cereal bowl", "a discarded gaming headset", "a moldy ceramic mug", "a mountain of dirty laundry", "an empty crisp packet ecosystem", "a tangled charging cable nest", "a rogue gym bag", "a mystery pile of school books"]
  },

  // --- Romantic & Dating Scenarios ---
  { 
    title: "The Disastrous Proposal", 
    desc: "You are attempting a deeply romantic proposal across a crowded fast-food drive-thru.",
    objects: ["a greasy paper burger bag", "a velvet ring box", "a plastic fountain drink cup", "the drive-thru intercom speaker", "a rogue French fry", "a crumpled napkin holder", "a dashboard change holder", "a ketchup dipping tub"]
  },
  { 
    title: "The Anniversary Gift Mix-Up", 
    desc: "You bought your partner a high-end industrial pressure washer for your 10th wedding anniversary.",
    objects: ["a heavy-duty pressure washer hose", "an anniversary greeting card", "a bright yellow extension lead", "a bottle of sparkling cider", "a shiny brass nozzle attachment", "a receipt hidden in a pocket", "a confused instruction leaflet", "a gift-wrapping bow"]
  },
  { 
    title: "The Secret Candlelit Dinner", 
    desc: "You tried to cook a fancy surprise meal, but the smoke alarm has just triggered the fire brigade.",
    objects: ["a charred frying pan", "a wailing kitchen smoke alarm", "a tea towel fan", "a melted scented candle", "a blackened piece of salmon", "an open kitchen window", "a fire extinguisher pin", "a soot-stained oven mitt"]
  },
  { 
    title: "The Ex-Partner's Wedding", 
    desc: "You were seated at table 13 next to the bride's strict grandmother.",
    objects: ["a starched white table napkin", "a small place card", "a flute of cheap house white", "a folding wedding favor box", "a rogue piece of confetti", "a wilted floral centerpiece", "an awkward speech pamphlet", "a glittering table runner"]
  },
  { 
    title: "The First Text Message Review", 
    desc: "You are analyzing a text message draft with your best friend for 45 minutes before hitting send.",
    objects: ["a cracked smartphone screen", "a half-typed draft message", "a stack of reference notes", "an empty coffee mug", "a blinking typing ellipsis indicator", "a string of deleted emojis", "a frantic group chat log", "a dead phone charger cable"]
  },

  // --- Kids & Parenting Scenarios ---
  { 
    title: "The Bedtime Negotiation", 
    desc: "It has been three hours, and your 8-year-old is legally challenging why sleep is optional.",
    objects: ["a crumpled bedtime storybook", "a half-empty glass of water", "a glow-in-the-dark ceiling star", "a stray Lego brick", "an upside-down pillow", "a stalling negotiation tactic", "a half-zipped pajama top", "a nightlight projecting dinosaurs"]
  },
  { 
    title: "The Birthday Party Entertainer Catastrophe", 
    desc: "The party clown didn't show up, and you are now forced to entertain 15 sugar-fueled children.",
    objects: ["a deflated balloon animal", "a squeaky clown nose", "a paper party hat", "a bowl of melting jelly", "a rogue piece of sticky cake", "a frantic parent lifeline", "a burst confetti cannon", "a juice box puddle"]
  },
  { 
    title: "The School Nativity Play", 
    desc: "Your 6-year-old has gone completely off-script and declared themselves absolute monarch of the stable.",
    objects: ["a cardboard shepherd's crook", "a tinsel halo", "a felt donkey costume", "a plastic golden scepter", "a runaway tea towel headpiece", "a stage spotlight glare", "a prop manger full of straw", "a distressed teacher backstage"]
  },
  { 
    title: "The Living Room Masterpiece", 
    desc: "You just discovered your toddler has redecorated the hallway wall using permanent black marker.",
    objects: ["a squeaky black marker pen", "a decorative hallway wallpaper panel", "a damp cleaning sponge", "a stray footprint", "an innocent toddler grin", "a bottle of harsh surface cleaner", "an accidental thumbprint", "a hidden artistic signature"]
  },
  { 
    title: "The Endless Car Journey", 
    desc: "Someone in the back seat has asked 'Are we nearly there yet?' for the 400th consecutive mile.",
    objects: ["a sticky car window", "a portable DVD player", "a crushed juice carton", "a road trip bingo card", "a drooping seatbelt strap", "a rattling glove compartment", "a faded air freshener tree", "a half-peeled orange"]
  },
  { 
    title: "The Lost Show-and-Tell Item", 
    desc: "Your child's prized possession for school show-and-tell has gone missing inside the washing machine.",
    objects: ["a churning washing machine door", "a soapy plastic action figure", "a soggy pocket lint ball", "a damp laundry basket", "a spinning rubber seal", "a sudsy glass pane", "a stray glitter speck", "a loose button"]
  },
  
  // --- High Drama, Suspense & Absurdity ---
  { 
    title: "The Crime Interrogation", 
    desc: "Where were you on the night of Tuesday the 14th?",
    objects: ["the flickering desk lamp", "a thick manila folder", "a pair of cold metal handcuffs", "a mug of stale office coffee", "a polarized observation window", "a ticking wall clock", "a suspicious alibi notepad", "an anonymous tip envelope"]
  },
  { 
    title: "The Supervillain Debrief", 
    desc: "The secret lair has exploded, and the mastermind demands an immediate explanation.",
    objects: ["a smoking control console", "a singed evil mastermind cape", "a self-destruct button", "a scorched blueprint", "an emergency evacuation klaxon", "a melting metallic chair", "a scattered pile of gold bullion", "a blinking reactor core"]
  },
  { 
    title: "The Elevator Breakdown", 
    desc: "The lift has stuck between floors 4 and 5 with four strangers and a melting ice cream cake.",
    objects: ["an emergency alarm button", "a melting ice cream cake box", "a mirrored lift wall", "a flickering ceiling bulb", "a scratchy intercom speaker", "a cramped corner space", "a digital floor indicator showing error", "an overheating ventilation fan"]
  },
  { 
    title: "The Deathbed Confession", 
    desc: "Before passing, the old billionaire wants to reveal who gets the family fortune.",
    objects: ["a velvet last-will scroll", "an antique grandfather clock", "a heavy silk blanket", "a gold-plated fountain pen", "a rattling medication bottle", "an expensive bedside lamp", "a shadowy relative lurking by the door", "a dusty family portrait"]
  },
  { 
    title: "The Alien First Contact", 
    desc: "An extraterrestrial vessel has landed in a local supermarket car park.",
    objects: ["a glowing plasma blaster", "a hovering metallic saucer", "a shopping trolley bay", "an unreadable alien artifact", "a blinking communication beacon", "a pool of eerie green slime", "a stunned trolley collector", "an automated parking ticket machine"]
  },
  { 
    title: "The Time Traveler's Warning", 
    desc: "Someone identical to you from 30 years in the future just tapped your shoulder.",
    objects: ["a futuristic handheld scanner", "a frayed vintage jacket", "a paradox warning manual", "a pocket sundial", "a glowing quantum wristband", "a newspaper from tomorrow", "a temporal anomaly crackle", "a faded passport photograph"]
  }
];

// --- 2. GAME STATE VARIABLES & ANTI-REPETITION MEMORY ---
let currentScenario = null;
let activePlayer = 1; // 1 or 2
let currentTurnIndex = 0;
// A tight 6-turn single-act structure with built-in wildcards
let turnSequence = ["opening", "question", "escalation", "wildcard", "consequence", "resolution"];
let fullTranscript = [];
let revealedLineIndex = 0;
let playerNames = { 1: "Player 1", 2: "Player 2" };
let lastChosenTone = null; // Stores preceding turn tone for card option chaining

// Anti-Repetition Tracking Sets
let usedCards = new Set();
let usedVerbs = new Set();
let usedObjects = new Set();

// --- 3. EXPANDED GLOBAL ABSURD OBJECTS & TONE VERBS ---
const RANDOM_GLOBAL_OBJECTS = [
  "a squeaky rubber duck", "a half-eaten pork pie", "a unicycle pedal",
  "a mysterious jar of pickled eggs", "a slightly damp kazoo", "a plastic flamingo",
  "a singular garden clog", "a miniature disco ball", "a tube of garlic paste",
  "a velvet bow tie", "a vintage bicycle pump", "a half-peeled banana",
  "a glowing neon maraca", "a tin of sardines", "a stray bingo dabber"
];

const FALLBACK_OBJECTS = ["the nearest item", "a mysterious object on the table", "the furniture"];

const TONE_VERBS = {
  mundane: [
    "sighs deeply and examines [object].",
    "adjusts their glasses and fiddles with [object].",
    "stares blankly at [object] for a long, uncomfortable moment.",
    "absentmindedly taps their fingers against [object].",
    "clears their throat and gestures vaguely toward [object].",
    "polishes [object] thoroughly with the sleeve of their jumper.",
    "carefully places [object] on the exact center of the table.",
    "squints closely at [object], checking for noticeable dust.",
    "checks their watch before setting down [object].",
    "offers a tired nod while nudging [object] aside."
  ],
  dramatic_extreme: [
    "slams [object] onto the ground in absolute fury!",
    "gasps in terror, clutching [object] like a lifeline!",
    "points dramatically at [object] as if it holds an ancient curse!",
    "drops to their knees beside [object], crying out in anguish!",
    "trembles violently while glaring directly at [object]!",
    "raises [object] high above their head in a heroic declaration!",
    "stares into the middle distance, clutching [object] with white knuckles!",
    "sweeps [object] off the surface with a sudden, violent motion!",
    "clutches their chest in pure agony, staggering past [object]!",
    "whispers a desperate prayer directly into [object]!"
  ],
  bureaucratic: [
    "pulls out a red pen to make a strict note on [object].",
    "clears their throat and taps their official clipboard against [object].",
    "inspects [object] carefully to check if it complies with Regulation 4B.",
    "adjusts their glasses, holding up [object] for formal review.",
    "neatly aligns [object] before offering a cold, deadpan stare.",
    "stamps [object] with an official-looking red ink pad.",
    "cross-references [object] against a thick laminated policy binder.",
    "files a formal notice next to [object] without blinking.",
    "adjusts their lanyard, holding [object] at arm's length.",
    "measures [object] precise dimensions using a tiny plastic ruler."
  ],
  casual_indifference: [
    "shrugs, nonchalantly nudging [object] with their shoe.",
    "yawns openly while tossing [object] from hand to hand.",
    "leans back, puts their feet up near [object], and checks their phone.",
    "takes a slow sip of water while casually ignoring [object].",
    "examines their fingernails, barely giving [object] a second glance.",
    "flicks a tiny piece of lint off [object] with total boredom.",
    "balances [object] on the tip of their finger while looking away.",
    "takes a slow bite of food, offering [object] to nobody in particular.",
    "stifles a yawn and spins [object] in a slow circle.",
    "drags [object] across the floor with zero enthusiasm."
  ],
  unhinged_villain: [
    "slowly breaks into a sinister grin while stroking [object].",
    "whispers a terrifying threat directly into [object].",
    "cackles softly under their breath, tapping [object] rhythmically.",
    "steps forward into the shadows, clutching [object] tightly.",
    "eye twitches slightly as they raise [object] into the light.",
    "polishes [object] while letting out a long, menacing breath.",
    "draws a sharp circle around [object] with a permanent marker.",
    "locks deadpan eye contact while slowly crushing [object].",
    "offers an unsettling chuckle and points directly at [object].",
    "tilts their head unnaturally far while holding up [object]."
  ],
  romantic: [
    "gazes lovingly into the middle distance, clutching [object] to their heart.",
    "sighs dreamily while gently tracing the edge of [object].",
    "wipes a single theatrical tear and offers [object] as a tribute.",
    "presses a hand to their chest, trembling with passion near [object].",
    "steps closer, entirely ignoring everything except [object].",
    "places a delicate hand over [object], making a dramatic promise.",
    "gazes softly into the empty air while presenting [object].",
    "whispers a sweet poetic line directly to [object].",
    "clutches [object] tightly as if it were a long-lost lover.",
    "offers a passionate, heartfelt sigh while looking at [object]."
  ]
};

// Tone Compatibility Matrix (defines logical response tones)
const TONE_FLOW_MAP = {
  mundane: ["mundane", "bureaucratic", "casual_indifference"],
  dramatic_extreme: ["dramatic_extreme", "unhinged_villain", "romantic"],
  bureaucratic: ["bureaucratic", "mundane", "casual_indifference"],
  casual_indifference: ["casual_indifference", "mundane", "bureaucratic"],
  unhinged_villain: ["unhinged_villain", "dramatic_extreme", "bureaucratic"],
  romantic: ["romantic", "dramatic_extreme", "mundane"]
};

// --- Conversational Connectors Dictionary ---
const ROLE_CONNECTORS = {
  question: ["Wait...", "Hold on...", "Seriously?", "Look, ", "Realistically speaking, ", "Hang on a second..."],
  escalation: ["If that's your attitude, ", "Well, in response to that, ", "Listen to me very carefully: ", "Oh, so that's how it is? ", "You leave me no choice: ", "Look, "],
  consequence: ["Because of that, ", "So as a direct result, ", "Great, now ", "And that is exactly why ", "Now look what happened: "],
  resolution: ["Regardless of all that, ", "At the end of the day, ", "Look, in the end, ", "Either way, ", "So let's be crystal clear: ", "When all is said and done, "],
  wildcard: ["Before you say anything else: ", "Wait, side note: ", "Interrupting for a second—", "Actually, "]
};

// --- 4. ENGINE HELPER FUNCTIONS ---
function generateStageDirection(scenario, tone) {
  // 1. SELECT VERB WITH ANTI-REPETITION
  const verbList = TONE_VERBS[tone] || TONE_VERBS.casual_indifference;
  let availableVerbs = verbList.filter(v => !usedVerbs.has(v));
  
  if (availableVerbs.length === 0) {
    verbList.forEach(v => usedVerbs.delete(v));
    availableVerbs = [...verbList];
  }
  
  const chosenVerb = availableVerbs[Math.floor(Math.random() * availableVerbs.length)];
  usedVerbs.add(chosenVerb);

  // 2. SELECT OBJECT (60% Scenario-Specific, 40% Absurd Global)
  const isAbsurdGlobal = Math.random() < 0.4;
  const pool = (isAbsurdGlobal || !scenario || !scenario.objects || scenario.objects.length === 0)
    ? RANDOM_GLOBAL_OBJECTS
    : scenario.objects;

  let availableObjects = pool.filter(o => !usedObjects.has(o));
  if (availableObjects.length === 0) {
    pool.forEach(o => usedObjects.delete(o));
    availableObjects = [...pool];
  }

  const chosenObject = availableObjects[Math.floor(Math.random() * availableObjects.length)];
  usedObjects.add(chosenObject);

  // 3. COMBINE
  return chosenVerb.replace("[object]", chosenObject);
}

function formatDialogueLine(card, useConnector = true) {
  if (!useConnector || card.role === "opening") {
    return card.text;
  }

  const prefixes = ROLE_CONNECTORS[card.role] || ROLE_CONNECTORS.wildcard;
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  
  return `${randomPrefix}${card.text}`;
}

// --- 5. DOM ELEMENTS ---
const screens = {
  lobby: document.getElementById("screen-lobby"),
  game: document.getElementById("screen-game"),
  pass: document.getElementById("screen-pass"),
  reveal: document.getElementById("screen-reveal")
};

// --- 6. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  setupScenario();
  
  document.getElementById("btn-reroll-scenario").addEventListener("click", setupScenario);
  document.getElementById("btn-start-game").addEventListener("click", startGame);
  document.getElementById("btn-ready").addEventListener("click", revealTurn);
  document.getElementById("btn-next-line").addEventListener("click", revealNextLine);
  document.getElementById("btn-copy-script").addEventListener("click", copyScript);
  document.getElementById("btn-new-game").addEventListener("click", resetToLobby);
});

// --- 7. LOBBY & SETUP LOGIC ---
function setupScenario() {
  const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
  currentScenario = SCENARIOS[randomIndex];
  document.getElementById("scenario-title").textContent = currentScenario.title;
  document.getElementById("scenario-desc").textContent = currentScenario.desc;
}

function showScreen(screenId) {
  Object.keys(screens).forEach(key => {
    if (key === screenId) {
      screens[key].classList.remove("hidden");
    } else {
      screens[key].classList.add("hidden");
    }
  });
}

function startGame() {
  currentTurnIndex = 0;
  activePlayer = 1;
  fullTranscript = [];
  lastChosenTone = null;

  // Clear anti-repetition memory for a fresh game session
  usedCards.clear();
  usedVerbs.clear();
  usedObjects.clear();
  
  // Grab player names from lobby
  const p1Val = document.getElementById("p1-name") ? document.getElementById("p1-name").value.trim() : "";
  const p2Val = document.getElementById("p2-name") ? document.getElementById("p2-name").value.trim() : "";
  playerNames[1] = p1Val !== "" ? p1Val : "Player 1";
  playerNames[2] = p2Val !== "" ? p2Val : "Player 2";

  turnSequence = ["opening", "question", "escalation", "wildcard", "resolution"];
  
  showScreen("game");
  loadTurn();
}

// --- 8. DECK MASTER BUILDER & CARD CHAINING ---
function getCardsForRole(role) {
  const decks = {
    opening: typeof openingCards !== "undefined" ? openingCards : [],
    question: typeof questionCards !== "undefined" ? questionCards : [],
    escalation: typeof escalationCards !== "undefined" ? escalationCards : [],
    consequence: typeof consequenceCards !== "undefined" ? consequenceCards : [],
    resolution: typeof resolutionCards !== "undefined" ? resolutionCards : []
  };

  if (role === "wildcard") {
    return [
      ...(typeof plotTwistCards !== "undefined" ? plotTwistCards : []),
      ...(typeof flashbackCards !== "undefined" ? flashbackCards : []),
      ...(typeof internalMonologueCards !== "undefined" ? internalMonologueCards : []),
      ...(typeof apologyCards !== "undefined" ? apologyCards : []),
      ...(typeof thirdPartyCards !== "undefined" ? thirdPartyCards : [])
    ];
  }

  return decks[role] || [];
}

function getThreeChoices(role) {
  const deck = getCardsForRole(role);
  if (deck.length === 0) {
    return [
      { role: role, tone: "mundane", text: "Line option A (Add cards to card JS file)" },
      { role: role, tone: "dramatic_extreme", text: "Line option B (Add cards to card JS file)" },
      { role: role, tone: "casual_indifference", text: "Line option C (Add cards to card JS file)" }
    ];
  }

  // Filter out cards already played this session
  let availableDeck = deck.filter(c => !usedCards.has(c.id || c.text));
  if (availableDeck.length < 3) {
    deck.forEach(c => usedCards.delete(c.id || c.text));
    availableDeck = [...deck];
  }

  const selected = [];
  const usedTones = new Set();

  // 1. Check for Chained Tones if a preceding turn tone exists
  if (lastChosenTone && TONE_FLOW_MAP[lastChosenTone]) {
    const preferredTones = TONE_FLOW_MAP[lastChosenTone];
    const matchingCards = availableDeck.filter(c => preferredTones.includes(c.tone));
    
    // Pick up to 2 cards matching the flow logic
    const shuffledMatches = [...matchingCards].sort(() => 0.5 - Math.random());
    for (const card of shuffledMatches) {
      if (!usedTones.has(card.tone)) {
        selected.push(card);
        usedTones.add(card.tone);
      }
      if (selected.length === 2) break;
    }
  }

  // 2. Fill remaining slot(s) with random cards (Wildcards/Unrelated Tones)
  const remainingCards = availableDeck
    .filter(c => !selected.includes(c))
    .sort(() => 0.5 - Math.random());

  for (const card of remainingCards) {
    if (!usedTones.has(card.tone) || selected.length < 3) {
      selected.push(card);
      usedTones.add(card.tone);
    }
    if (selected.length === 3) break;
  }

  return selected;
}

// --- 9. TURN PLAY LOGIC ---
function loadTurn() {
  const currentRole = turnSequence[currentTurnIndex];
  
  if (document.getElementById("act-badge")) document.getElementById("act-badge").textContent = `Single Act`;
  document.getElementById("player-badge").textContent = `${playerNames[activePlayer]}'s Turn`;
  document.getElementById("turn-instruction").textContent = `Pick a card below...`;

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  const choices = getThreeChoices(currentRole);

  choices.forEach(card => {
    card.role = currentRole;
    const formattedText = formatDialogueLine(card);

    const cardEl = document.createElement("div");
    cardEl.className = "choice-card";
    cardEl.innerHTML = `
      <p class="card-text">"${formattedText}"</p>
    `;
    
    cardEl.addEventListener("click", () => selectCard(card, formattedText));
    cardsContainer.appendChild(cardEl);
  });
}

function selectCard(card, formattedText) {
  usedCards.add(card.id || card.text);
  lastChosenTone = card.tone;

  const actionText = generateStageDirection(currentScenario, card.tone);

  fullTranscript.push({
    player: activePlayer,
    tone: card.tone,
    action: actionText,
    text: formattedText
  });

  currentTurnIndex++;

  if (currentTurnIndex >= turnSequence.length) {
    startRevealPhase();
  } else {
    activePlayer = activePlayer === 1 ? 2 : 1;
    triggerPassScreen();
  }
}

function triggerPassScreen() {
  const passMessages = [
    "Eyes on your own paper!",
    "No peeking allowed!",
    "Cover the screen!",
    "Hand over the device!"
  ];
  const randomMsg = passMessages[Math.floor(Math.random() * passMessages.length)];
  
  document.getElementById("pass-title").textContent = randomMsg;
  document.getElementById("pass-message").textContent = `Pass the device to ${playerNames[activePlayer]}.`;
  
  showScreen("pass");
}

function revealTurn() {
  showScreen("game");
  loadTurn();
}

// --- 10. REVEAL & TRANSCRIPT LOGIC ---
function startRevealPhase() {
  revealedLineIndex = 0;
  document.getElementById("reveal-scenario-name").textContent = `Scenario: ${currentScenario.title}`;
  
  const container = document.getElementById("transcript-container");
  container.innerHTML = "";
  
  document.getElementById("btn-next-line").classList.remove("hidden");
  document.getElementById("end-action-buttons").classList.add("hidden");
  
  showScreen("reveal");
}

function revealNextLine() {
  const container = document.getElementById("transcript-container");
  
  if (revealedLineIndex < fullTranscript.length) {
    const item = fullTranscript[revealedLineIndex];

    const lineEl = document.createElement("div");
    lineEl.className = "transcript-line";
    
    const speakerClass = item.player === 1 ? "speaker-p1" : "speaker-p2";
    const currentName = playerNames[item.player];
    
    lineEl.innerHTML = `
      <span class="speaker-tag ${speakerClass}">${currentName}</span>
      <p class="stage-direction"><em>*— ${currentName} ${item.action}*</em></p>
      <p class="dialogue-quote">"${item.text}"</p>
    `;
    
    container.appendChild(lineEl);
    container.scrollTop = container.scrollHeight;
    
    revealedLineIndex++;
  }

  if (revealedLineIndex >= fullTranscript.length) {
    document.getElementById("btn-next-line").classList.add("hidden");
    document.getElementById("end-action-buttons").classList.remove("hidden");
  }
}

function copyScript() {
  let textOutput = `🎭 ABSOLUTE NONSENSE TRANSCRIPT\nScenario: ${currentScenario.title}\n\n`;
  
  fullTranscript.forEach(line => {
    const currentName = playerNames[line.player];
    textOutput += `${currentName}: *— ${currentName} ${line.action}*\n"${line.text}"\n\n`;
  });

  navigator.clipboard.writeText(textOutput).then(() => {
    alert("Transcript copied to clipboard!");
  });
}

function resetToLobby() {
  setupScenario();
  showScreen("lobby");
}