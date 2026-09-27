const techniques = [
  {
    id: 1,
    category: "Drying",
    title: "Papad Making",
    region: "Pan-India (esp. Rajasthan, Maharashtra)",
    description: "Thin discs of seasoned lentil or rice batter dried in the sun until crisp, then fried or roasted before eating.",
    process: [
      "Grind lentils/rice into a paste and season with spices",
      "Roll into thin discs",
      "Lay flat on cloth or mats under direct sunlight",
      "Turn periodically for 1–2 days until fully dry and brittle",
      "Store in airtight containers"
    ],
    ingredients: ["Urad dal / rice", "Salt", "Cumin", "Asafoetida"],
    history: "A centuries-old method to preserve lentils and grains for year-round use, especially before refrigeration existed.",
    icon: "☀️"
  },
  {
    id: 2,
    category: "Drying",
    title: "Dried Fenugreek Leaves (Kasuri Methi)",
    region: "North India",
    description: "Fresh fenugreek leaves are shade or sun-dried to concentrate their flavor and preserve them for months.",
    process: [
      "Wash and pluck fresh fenugreek leaves",
      "Spread thinly on a cloth in shade or mild sun",
      "Dry for 3–5 days until leaves turn crisp and dark green",
      "Crush lightly and store in airtight jars"
    ],
    ingredients: ["Fresh fenugreek leaves"],
    history: "Drying allowed off-season access to this bitter, aromatic herb used widely in North Indian cooking.",
    icon: "🌿"
  },
  {
    id: 3,
    category: "Fermentation",
    title: "Idli-Dosa Batter Fermentation",
    region: "South India",
    description: "Rice and urad dal batter left to ferment naturally, developing sourness and an airy texture through wild yeast and bacteria.",
    process: [
      "Soak rice and urad dal separately for 4–6 hours",
      "Grind into a smooth batter",
      "Mix and leave covered in a warm place for 8–12 hours",
      "Batter rises and develops a tangy smell when ready"
    ],
    ingredients: ["Rice", "Urad dal", "Salt"],
    history: "Fermentation not only preserves the batter longer but also improves digestibility and nutrition.",
    icon: "🫓"
  },
  {
    id: 4,
    category: "Fermentation",
    title: "Kanji",
    region: "North India (esp. Punjab, Delhi)",
    description: "A tangy, probiotic drink made by fermenting black carrots (or beetroot) with mustard seeds and water.",
    process: [
      "Slice black carrots into thin batons",
      "Add mustard seeds, salt and chili powder to water",
      "Combine in a jar and leave in sunlight for 3–5 days",
      "Stir daily until the drink turns tangy and slightly fizzy"
    ],
    ingredients: ["Black carrots", "Mustard seeds", "Salt", "Water"],
    history: "Traditionally made in winter, kanji uses fermentation both to preserve carrots and create a gut-healthy drink.",
    icon: "🥕"
  },
  {
    id: 5,
    category: "Pickling",
    title: "Mango Pickle (Aam ka Achaar)",
    region: "Pan-India",
    description: "Raw mangoes preserved in oil, salt and spices, left to mature over weeks for a deep tangy-spicy flavor.",
    process: [
      "Cut raw mangoes into pieces and sun-dry briefly to remove moisture",
      "Mix with salt, turmeric, chili and mustard oil",
      "Pack tightly into a sterilized jar",
      "Leave in sunlight for 1–3 weeks, shaking occasionally"
    ],
    ingredients: ["Raw mango", "Mustard oil", "Fenugreek", "Red chili powder", "Salt"],
    history: "Oil and salt act as natural preservatives, allowing pickles to last a year or more without refrigeration.",
    icon: "🥭"
  },
  {
    id: 6,
    category: "Pickling",
    title: "Lemon Pickle (Nimbu ka Achaar)",
    region: "Pan-India",
    description: "Whole lemons cured in their own juice with salt and spices, softening over weeks into a tangy condiment.",
    process: [
      "Quarter lemons and rub generously with salt",
      "Pack into a glass jar with turmeric and chili powder",
      "Leave in sunlight, shaking the jar every 2–3 days",
      "Ready to eat after 2–4 weeks as the peel softens"
    ],
    ingredients: ["Lemons", "Salt", "Turmeric", "Red chili powder"],
    history: "Salt-curing citrus was a way to preserve vitamin C-rich fruit for use through the year.",
    icon: "🍋"
  },
  {
    id: 7,
    category: "Sun-Drying",
    title: "Sun-Dried Vadiyan (Lentil Dumplings)",
    region: "Punjab, North India",
    description: "Spiced lentil paste dropped into small dumplings and completely sun-dried for long-term storage, later fried and used in curries.",
    process: [
      "Soak and grind lentils into a thick paste, whip until fluffy",
      "Add spices and drop small dumplings onto a cloth",
      "Sun-dry for 2–4 days, flipping once",
      "Store in airtight jars for months"
    ],
    ingredients: ["Urad dal", "Moong dal", "Asafoetida", "Salt"],
    history: "Made in bulk during summer to last through monsoon and winter when fresh vegetables were scarce.",
    icon: "🌾"
  },
  {
    id: 8,
    category: "Sun-Drying",
    title: "Sun-Dried Tomatoes (Sukha Tamatar)",
    region: "Maharashtra, Gujarat",
    description: "Ripe tomatoes sliced and dried completely under the sun, concentrating their flavor for use in curries during off-season.",
    process: [
      "Slice ripe tomatoes and lightly salt them",
      "Spread on a mesh tray or cloth in direct sunlight",
      "Dry for 4–6 days, turning occasionally",
      "Store dried slices in airtight containers, rehydrate before use"
    ],
    ingredients: ["Ripe tomatoes", "Salt"],
    history: "A practical way to store surplus tomato harvest before refrigeration was common in rural households.",
    icon: "🍅"
  }
];

const categoryInfo = {
  "Drying": { icon: "☀️", color: "#d97706", desc: "Removing moisture using sun and air to prevent spoilage." },
  "Fermentation": { icon: "🫧", color: "#16a34a", desc: "Using natural microbes to transform and preserve food." },
  "Pickling": { icon: "🫙", color: "#dc2626", desc: "Preserving food in salt, oil, or acid for long shelf life." },
  "Sun-Drying": { icon: "🌞", color: "#ea580c", desc: "Complete sun exposure to dehydrate food for storage." }
};