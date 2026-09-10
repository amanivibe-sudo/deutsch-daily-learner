// German words from Netzwerk Neu A1, A2, B1 Glossar Books
const germanWords = [
    // ============= NETZWERK NEU A1 =============
    // Lesson 1-5 Common Words
    {
        word: "Hallo",
        pronunciation: "HAH-lo",
        translation: "Hello",
        exampleSentence: "Hallo, wie geht es dir?",
        sentenceTranslation: "Hello, how are you?",
        level: "A1",
        category: "Greetings"
    },
    {
        word: "Guten Morgen",
        pronunciation: "GOO-ten MOR-gen",
        translation: "Good morning",
        exampleSentence: "Guten Morgen, ich bin früh aufgewacht.",
        sentenceTranslation: "Good morning, I woke up early.",
        level: "A1",
        category: "Greetings"
    },
    {
        word: "Auf Wiedersehen",
        pronunciation: "auf VIE-der-zay-en",
        translation: "Goodbye",
        exampleSentence: "Auf Wiedersehen, bis bald!",
        sentenceTranslation: "Goodbye, see you soon!",
        level: "A1",
        category: "Greetings"
    },
    {
        word: "Danke",
        pronunciation: "DAHN-kuh",
        translation: "Thank you",
        exampleSentence: "Danke für deine Hilfe!",
        sentenceTranslation: "Thank you for your help!",
        level: "A1",
        category: "Polite Phrases"
    },
    {
        word: "Bitte",
        pronunciation: "BIT-uh",
        translation: "Please / You're welcome",
        exampleSentence: "Bitte, hilf mir!",
        sentenceTranslation: "Please, help me!",
        level: "A1",
        category: "Polite Phrases"
    },
    {
        word: "Ja",
        pronunciation: "yah",
        translation: "Yes",
        exampleSentence: "Ja, ich stimme zu.",
        sentenceTranslation: "Yes, I agree.",
        level: "A1",
        category: "Basic Words"
    },
    {
        word: "Nein",
        pronunciation: "nine",
        translation: "No",
        exampleSentence: "Nein, ich kann nicht kommen.",
        sentenceTranslation: "No, I cannot come.",
        level: "A1",
        category: "Basic Words"
    },
    {
        word: "Mein Name ist",
        pronunciation: "mine NAH-muh ist",
        translation: "My name is",
        exampleSentence: "Mein Name ist Anna.",
        sentenceTranslation: "My name is Anna.",
        level: "A1",
        category: "Introduction"
    },
    {
        word: "Wie heißt du?",
        pronunciation: "vee HYST doo",
        translation: "What is your name?",
        exampleSentence: "Wie heißt du? Ich heiße Maria.",
        sentenceTranslation: "What is your name? My name is Maria.",
        level: "A1",
        category: "Introduction"
    },
    {
        word: "Wie geht es dir?",
        pronunciation: "vee GATE es deer",
        translation: "How are you?",
        exampleSentence: "Wie geht es dir heute?",
        sentenceTranslation: "How are you today?",
        level: "A1",
        category: "Questions"
    },
    {
        word: "Mir geht es gut",
        pronunciation: "meer GATE es goot",
        translation: "I'm doing well",
        exampleSentence: "Mir geht es gut, danke!",
        sentenceTranslation: "I'm doing well, thank you!",
        level: "A1",
        category: "Responses"
    },
    {
        word: "Ich bin",
        pronunciation: "ikh bin",
        translation: "I am",
        exampleSentence: "Ich bin Lehrer.",
        sentenceTranslation: "I am a teacher.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Du bist",
        pronunciation: "doo bist",
        translation: "You are",
        exampleSentence: "Du bist klug.",
        sentenceTranslation: "You are smart.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Er/Sie/Es ist",
        pronunciation: "air/zee/es ist",
        translation: "He/She/It is",
        exampleSentence: "Er ist intelligent.",
        sentenceTranslation: "He is intelligent.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Wir sind",
        pronunciation: "veer zint",
        translation: "We are",
        exampleSentence: "Wir sind Freunde.",
        sentenceTranslation: "We are friends.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Ihr seid",
        pronunciation: "eer zite",
        translation: "You (plural) are",
        exampleSentence: "Ihr seid fleißig.",
        sentenceTranslation: "You are diligent.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Sie sind",
        pronunciation: "zee zint",
        translation: "They are",
        exampleSentence: "Sie sind Schüler.",
        sentenceTranslation: "They are students.",
        level: "A1",
        category: "Verb"
    },
    {
        word: "Haus",
        pronunciation: "HOUSE",
        translation: "House",
        exampleSentence: "Das Haus ist groß.",
        sentenceTranslation: "The house is big.",
        level: "A1",
        category: "Places"
    },
    {
        word: "Schule",
        pronunciation: "SHOO-luh",
        translation: "School",
        exampleSentence: "Ich gehe zur Schule.",
        sentenceTranslation: "I go to school.",
        level: "A1",
        category: "Places"
    },
    {
        word: "Stadt",
        pronunciation: "SHTAHT",
        translation: "City",
        exampleSentence: "Berlin ist eine große Stadt.",
        sentenceTranslation: "Berlin is a big city.",
        level: "A1",
        category: "Places"
    },
    {
        word: "Tisch",
        pronunciation: "TISH",
        translation: "Table",
        exampleSentence: "Der Tisch ist aus Holz.",
        sentenceTranslation: "The table is made of wood.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Stuhl",
        pronunciation: "SHTOOL",
        translation: "Chair",
        exampleSentence: "Der Stuhl ist bequem.",
        sentenceTranslation: "The chair is comfortable.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Fenster",
        pronunciation: "FEN-ster",
        translation: "Window",
        exampleSentence: "Das Fenster ist offen.",
        sentenceTranslation: "The window is open.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Tür",
        pronunciation: "TOOR",
        translation: "Door",
        exampleSentence: "Die Tür ist geschlossen.",
        sentenceTranslation: "The door is closed.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Bett",
        pronunciation: "BET",
        translation: "Bed",
        exampleSentence: "Das Bett ist sehr weich.",
        sentenceTranslation: "The bed is very soft.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Lampe",
        pronunciation: "LAHM-puh",
        translation: "Lamp",
        exampleSentence: "Die Lampe ist hell.",
        sentenceTranslation: "The lamp is bright.",
        level: "A1",
        category: "Furniture"
    },
    {
        word: "Buch",
        pronunciation: "BOOKH",
        translation: "Book",
        exampleSentence: "Ich lese ein interessantes Buch.",
        sentenceTranslation: "I read an interesting book.",
        level: "A1",
        category: "Objects"
    },
    {
        word: "Stift",
        pronunciation: "SHTIFT",
        translation: "Pen",
        exampleSentence: "Der Stift schreibt gut.",
        sentenceTranslation: "The pen writes well.",
        level: "A1",
        category: "Objects"
    },
    {
        word: "Papier",
        pronunciation: "pah-PEER",
        translation: "Paper",
        exampleSentence: "Das Papier ist weiß.",
        sentenceTranslation: "The paper is white.",
        level: "A1",
        category: "Objects"
    },
    {
        word: "Telefon",
        pronunciation: "tay-luh-FONE",
        translation: "Telephone",
        exampleSentence: "Das Telefon klingelt.",
        sentenceTranslation: "The telephone is ringing.",
        level: "A1",
        category: "Objects"
    },
    {
        word: "Farbe",
        pronunciation: "FAR-buh",
        translation: "Color",
        exampleSentence: "Welche Farbe magst du?",
        sentenceTranslation: "What color do you like?",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Rot",
        pronunciation: "ROHT",
        translation: "Red",
        exampleSentence: "Das Auto ist rot.",
        sentenceTranslation: "The car is red.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Blau",
        pronunciation: "BLAU",
        translation: "Blue",
        exampleSentence: "Der Himmel ist blau.",
        sentenceTranslation: "The sky is blue.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Grün",
        pronunciation: "GROON",
        translation: "Green",
        exampleSentence: "Das Gras ist grün.",
        sentenceTranslation: "The grass is green.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Gelb",
        pronunciation: "GELP",
        translation: "Yellow",
        exampleSentence: "Die Sonne ist gelb.",
        sentenceTranslation: "The sun is yellow.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Schwarz",
        pronunciation: "SHVARTS",
        translation: "Black",
        exampleSentence: "Die Nacht ist schwarz.",
        sentenceTranslation: "The night is black.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Weiß",
        pronunciation: "VICE",
        translation: "White",
        exampleSentence: "Der Schnee ist weiß.",
        sentenceTranslation: "The snow is white.",
        level: "A1",
        category: "Colors"
    },
    {
        word: "Groß",
        pronunciation: "GROHS",
        translation: "Big",
        exampleSentence: "Das Zimmer ist groß.",
        sentenceTranslation: "The room is big.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Klein",
        pronunciation: "KLINE",
        translation: "Small",
        exampleSentence: "Das Kind ist klein.",
        sentenceTranslation: "The child is small.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Alt",
        pronunciation: "AHT",
        translation: "Old",
        exampleSentence: "Das Gebäude ist alt.",
        sentenceTranslation: "The building is old.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Neu",
        pronunciation: "NOY",
        translation: "New",
        exampleSentence: "Das Auto ist neu.",
        sentenceTranslation: "The car is new.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Schön",
        pronunciation: "SHERN",
        translation: "Beautiful",
        exampleSentence: "Die Blumen sind schön.",
        sentenceTranslation: "The flowers are beautiful.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Hässlich",
        pronunciation: "HES-likh",
        translation: "Ugly",
        exampleSentence: "Das Bild ist hässlich.",
        sentenceTranslation: "The picture is ugly.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Schnell",
        pronunciation: "SHNEL",
        translation: "Fast",
        exampleSentence: "Der Zug ist schnell.",
        sentenceTranslation: "The train is fast.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Langsam",
        pronunciation: "LAHNG-zahm",
        translation: "Slow",
        exampleSentence: "Die Schnecke ist langsam.",
        sentenceTranslation: "The snail is slow.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Leicht",
        pronunciation: "LYKHТ",
        translation: "Easy/Light",
        exampleSentence: "Die Aufgabe ist leicht.",
        sentenceTranslation: "The task is easy.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Schwer",
        pronunciation: "SHVAYR",
        translation: "Heavy/Difficult",
        exampleSentence: "Die Mathematik ist schwer.",
        sentenceTranslation: "Mathematics is difficult.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Heiß",
        pronunciation: "HICE",
        translation: "Hot",
        exampleSentence: "Der Kaffee ist heiß.",
        sentenceTranslation: "The coffee is hot.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Kalt",
        pronunciation: "KAHLT",
        translation: "Cold",
        exampleSentence: "Das Wasser ist kalt.",
        sentenceTranslation: "The water is cold.",
        level: "A1",
        category: "Adjectives"
    },
    {
        word: "Warm",
        pronunciation: "VARM",
        translation: "Warm",
        exampleSentence: "Die Sonne ist warm.",
        sentenceTranslation: "The sun is warm.",
        level: "A1",
        category: "Adjectives"
    },
    // ============= NETZWERK NEU A2 =============
    {
        word: "Arbeiten",
        pronunciation: "AHR-by-ten",
        translation: "To work",
        exampleSentence: "Ich arbeite im Büro.",
        sentenceTranslation: "I work in the office.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Essen",
        pronunciation: "ES-sen",
        translation: "To eat",
        exampleSentence: "Ich esse gerne Obst.",
        sentenceTranslation: "I like to eat fruit.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Trinken",
        pronunciation: "TRIN-ken",
        translation: "To drink",
        exampleSentence: "Ich trinke Wasser.",
        sentenceTranslation: "I drink water.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Schlafen",
        pronunciation: "SHLAH-fen",
        translation: "To sleep",
        exampleSentence: "Ich schlafe acht Stunden.",
        sentenceTranslation: "I sleep eight hours.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Aufstehen",
        pronunciation: "AUF-shtay-hen",
        translation: "To get up",
        exampleSentence: "Ich stehe um 7 Uhr auf.",
        sentenceTranslation: "I get up at 7 o'clock.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Gehen",
        pronunciation: "GAY-hen",
        translation: "To go/walk",
        exampleSentence: "Ich gehe zur Schule.",
        sentenceTranslation: "I go to school.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Kommen",
        pronunciation: "KOM-men",
        translation: "To come",
        exampleSentence: "Ich komme aus Deutschland.",
        sentenceTranslation: "I come from Germany.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Fahren",
        pronunciation: "FAH-ren",
        translation: "To drive/travel",
        exampleSentence: "Ich fahre mit dem Auto.",
        sentenceTranslation: "I travel by car.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Sehen",
        pronunciation: "ZAY-hen",
        translation: "To see",
        exampleSentence: "Ich sehe einen Film.",
        sentenceTranslation: "I see a movie.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Hören",
        pronunciation: "HER-en",
        translation: "To hear",
        exampleSentence: "Ich höre Musik.",
        sentenceTranslation: "I hear music.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Sprechen",
        pronunciation: "SHPRE-khen",
        translation: "To speak",
        exampleSentence: "Ich spreche Deutsch.",
        sentenceTranslation: "I speak German.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Verstehen",
        pronunciation: "fer-SHTAY-hen",
        translation: "To understand",
        exampleSentence: "Ich verstehe die Frage.",
        sentenceTranslation: "I understand the question.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Schreiben",
        pronunciation: "SHRY-ben",
        translation: "To write",
        exampleSentence: "Ich schreibe eine E-Mail.",
        sentenceTranslation: "I write an email.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Lesen",
        pronunciation: "LAY-zen",
        translation: "To read",
        exampleSentence: "Ich lese ein Buch.",
        sentenceTranslation: "I read a book.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Schlafen",
        pronunciation: "SHLAH-fen",
        translation: "To sleep",
        exampleSentence: "Ich schlafe gerne.",
        sentenceTranslation: "I like to sleep.",
        level: "A2",
        category: "Verbs"
    },
    {
        word: "Familie",
        pronunciation: "fah-MEEL-yuh",
        translation: "Family",
        exampleSentence: "Meine Familie ist groß.",
        sentenceTranslation: "My family is big.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Vater",
        pronunciation: "FAH-ter",
        translation: "Father",
        exampleSentence: "Mein Vater arbeitet.",
        sentenceTranslation: "My father works.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Mutter",
        pronunciation: "MUT-ter",
        translation: "Mother",
        exampleSentence: "Meine Mutter kocht gut.",
        sentenceTranslation: "My mother cooks well.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Bruder",
        pronunciation: "BROO-der",
        translation: "Brother",
        exampleSentence: "Mein Bruder ist älter.",
        sentenceTranslation: "My brother is older.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Schwester",
        pronunciation: "SHVES-ter",
        translation: "Sister",
        exampleSentence: "Meine Schwester spielt Fußball.",
        sentenceTranslation: "My sister plays football.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Großvater",
        pronunciation: "GROHS-fah-ter",
        translation: "Grandfather",
        exampleSentence: "Mein Großvater ist 80 Jahre alt.",
        sentenceTranslation: "My grandfather is 80 years old.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Großmutter",
        pronunciation: "GROHS-mut-ter",
        translation: "Grandmother",
        exampleSentence: "Meine Großmutter wohnt auf dem Land.",
        sentenceTranslation: "My grandmother lives in the countryside.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Ehemann",
        pronunciation: "AY-uh-mahn",
        translation: "Husband",
        exampleSentence: "Mein Ehemann ist Arzt.",
        sentenceTranslation: "My husband is a doctor.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Ehefrau",
        pronunciation: "AY-uh-frau",
        translation: "Wife",
        exampleSentence: "Seine Ehefrau ist Lehrerin.",
        sentenceTranslation: "His wife is a teacher.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Freund",
        pronunciation: "FROYT",
        translation: "Friend",
        exampleSentence: "Mein Freund heißt Max.",
        sentenceTranslation: "My friend is named Max.",
        level: "A2",
        category: "Family"
    },
    {
        word: "Restaurant",
        pronunciation: "res-tah-RANT",
        translation: "Restaurant",
        exampleSentence: "Wir gehen ins Restaurant.",
        sentenceTranslation: "We go to the restaurant.",
        level: "A2",
        category: "Places"
    },
    {
        word: "Apfel",
        pronunciation: "AHP-fel",
        translation: "Apple",
        exampleSentence: "Der Apfel ist rot.",
        sentenceTranslation: "The apple is red.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Birne",
        pronunciation: "BEER-nuh",
        translation: "Pear",
        exampleSentence: "Die Birne ist süß.",
        sentenceTranslation: "The pear is sweet.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Orange",
        pronunciation: "oh-RAHN-zhuh",
        translation: "Orange",
        exampleSentence: "Die Orange ist saftig.",
        sentenceTranslation: "The orange is juicy.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Banane",
        pronunciation: "bah-NAH-nuh",
        translation: "Banana",
        exampleSentence: "Die Banane ist gelb.",
        sentenceTranslation: "The banana is yellow.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Brot",
        pronunciation: "BROHT",
        translation: "Bread",
        exampleSentence: "Das Brot ist frisch.",
        sentenceTranslation: "The bread is fresh.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Käse",
        pronunciation: "KAY-zuh",
        translation: "Cheese",
        exampleSentence: "Der Käse schmeckt gut.",
        sentenceTranslation: "The cheese tastes good.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Milch",
        pronunciation: "MILKH",
        translation: "Milk",
        exampleSentence: "Die Milch ist kalt.",
        sentenceTranslation: "The milk is cold.",
        level: "A2",
        category: "Food"
    },
    {
        word: "Kaffee",
        pronunciation: "kah-FAY",
        translation: "Coffee",
        exampleSentence: "Ich trinke Kaffee morgens.",
        sentenceTranslation: "I drink coffee in the morning.",
        level: "A2",
        category: "Drinks"
    },
    {
        word: "Tee",
        pronunciation: "TAY",
        translation: "Tea",
        exampleSentence: "Ich trinke gerne Tee.",
        sentenceTranslation: "I like to drink tea.",
        level: "A2",
        category: "Drinks"
    },
    {
        word: "Saft",
        pronunciation: "ZAHFT",
        translation: "Juice",
        exampleSentence: "Der Apfelsaft ist lecker.",
        sentenceTranslation: "The apple juice is delicious.",
        level: "A2",
        category: "Drinks"
    },
    {
        word: "Wein",
        pronunciation: "VINE",
        translation: "Wine",
        exampleSentence: "Rotwein schmeckt gut.",
        sentenceTranslation: "Red wine tastes good.",
        level: "A2",
        category: "Drinks"
    },
    {
        word: "Bier",
        pronunciation: "BEER",
        translation: "Beer",
        exampleSentence: "Deutsches Bier ist bekannt.",
        sentenceTranslation: "German beer is famous.",
        level: "A2",
        category: "Drinks"
    },
    {
        word: "Wasser",
        pronunciation: "VAHS-ser",
        translation: "Water",
        exampleSentence: "Wasser ist gesund.",
        sentenceTranslation: "Water is healthy.",
        level: "A2",
        category: "Drinks"
    },
    // ============= NETZWERK NEU B1 =============
    {
        word: "Ermöglichen",
        pronunciation: "er-MER-glikh-en",
        translation: "To enable/allow",
        exampleSentence: "Das ermöglicht eine bessere Zukunft.",
        sentenceTranslation: "That enables a better future.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Entwickeln",
        pronunciation: "ent-VICK-len",
        translation: "To develop",
        exampleSentence: "Wir entwickeln neue Technologien.",
        sentenceTranslation: "We develop new technologies.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Akzeptieren",
        pronunciation: "ahk-tsep-TEER-en",
        translation: "To accept",
        exampleSentence: "Ich akzeptiere deine Meinung.",
        sentenceTranslation: "I accept your opinion.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Beeinflussen",
        pronunciation: "buh-AIN-floo-sen",
        translation: "To influence",
        exampleSentence: "Werbung beeinflusst unsere Entscheidungen.",
        sentenceTranslation: "Advertising influences our decisions.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Berücksichtigen",
        pronunciation: "buh-RY-kh-sikh-ti-gen",
        translation: "To consider",
        exampleSentence: "Man muss alle Faktoren berücksichtigen.",
        sentenceTranslation: "One must consider all factors.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Bedeuten",
        pronunciation: "buh-DY-ten",
        translation: "To mean",
        exampleSentence: "Was bedeutet dieses Wort?",
        sentenceTranslation: "What does this word mean?",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Beurteilen",
        pronunciation: "buh-OOR-tile-en",
        translation: "To judge",
        exampleSentence: "Man sollte nicht zu schnell urteilen.",
        sentenceTranslation: "One shouldn't judge too quickly.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Bewerben",
        pronunciation: "buh-VER-ben",
        translation: "To apply",
        exampleSentence: "Ich bewerbe mich für einen Job.",
        sentenceTranslation: "I apply for a job.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Bewältigen",
        pronunciation: "buh-VEL-ti-gen",
        translation: "To cope with/manage",
        exampleSentence: "Er bewältigt die Herausforderung gut.",
        sentenceTranslation: "He manages the challenge well.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Bilden",
        pronunciation: "BIL-den",
        translation: "To form",
        exampleSentence: "Wir bilden ein Team.",
        sentenceTranslation: "We form a team.",
        level: "B1",
        category: "Verbs"
    },
    {
        word: "Kultur",
        pronunciation: "KOOL-tour",
        translation: "Culture",
        exampleSentence: "Deutsche Kultur ist vielfältig.",
        sentenceTranslation: "German culture is diverse.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Gesellschaft",
        pronunciation: "guh-ZCHL-shaft",
        translation: "Society",
        exampleSentence: "Die Gesellschaft ändert sich ständig.",
        sentenceTranslation: "Society changes constantly.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Herausforderung",
        pronunciation: "huh-RAUS-for-der-oong",
        translation: "Challenge",
        exampleSentence: "Das ist eine große Herausforderung.",
        sentenceTranslation: "This is a big challenge.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Möglichkeit",
        pronunciation: "MER-glikh-kite",
        translation: "Possibility",
        exampleSentence: "Es gibt viele Möglichkeiten.",
        sentenceTranslation: "There are many possibilities.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Verantwortung",
        pronunciation: "fer-AHN-vor-toong",
        translation: "Responsibility",
        exampleSentence: "Ich trage Verantwortung.",
        sentenceTranslation: "I take responsibility.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Unterschied",
        pronunciation: "OON-ter-sheed",
        translation: "Difference",
        exampleSentence: "Es gibt einen großen Unterschied.",
        sentenceTranslation: "There is a big difference.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Zusammenhang",
        pronunciation: "tsoo-ZAHM-men-hang",
        translation: "Connection",
        exampleSentence: "Der Zusammenhang ist klar.",
        sentenceTranslation: "The connection is clear.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Ergebnis",
        pronunciation: "er-GAY-nis",
        translation: "Result",
        exampleSentence: "Das Ergebnis ist positiv.",
        sentenceTranslation: "The result is positive.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Beispiel",
        pronunciation: "BY-shpeel",
        translation: "Example",
        exampleSentence: "Ein Beispiel wäre hilfreich.",
        sentenceTranslation: "An example would be helpful.",
        level: "B1",
        category: "Society"
    },
    {
        word: "Grund",
        pronunciation: "GROONT",
        translation: "Reason",
        exampleSentence: "Der Grund ist unbekannt.",
        sentenceTranslation: "The reason is unknown.",
        level: "B1",
        category: "Society"
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = germanWords;
}
