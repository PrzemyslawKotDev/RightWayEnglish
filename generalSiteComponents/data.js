const categoryData = [
    {
        name: "Ćwiczenia leksykalne",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/idea_lamp_creative_list_task-512.png",
    },
    {
        name: "Części mowy",
        img: "https://cdn0.iconfinder.com/data/icons/student-community/64/reading_book_student_study_read_learn_learning_explanation_education_library-512.png",
    },
    {
        name: "Ćwiczenia gramatyczne",
        img: "https://cdn4.iconfinder.com/data/icons/learning-31/64/learning_learn_education_school-512.png",
    },
    {
        name: "Znajomość funkcji językowych",
        img: "https://cdn3.iconfinder.com/data/icons/student-guidance/64/survey_feedback_opinion_review_satisfaction-512.png",
    },
    {
        name: "Znajomość środków językowych",
        img: "https://cdn3.iconfinder.com/data/icons/business-learn/64/discussion_meeting_mediation_counseling_group_chat_conversation_communications_talk_debate_chat-512.png",
    },
    {
        name: "Wypowiedź pisemna",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/homework_book_pencil_task_assignment-512.png",
    },
    {
        name: "Rozumienie ze słuchu",
        img: "https://cdn3.iconfinder.com/data/icons/student-guidance/64/consultation_communication_meeting_advisor_discussion-512.png",
    },
    {
        name: "Rozumienie textów pisanych",
        img: "https://cdn4.iconfinder.com/data/icons/back-to-school-253/64/dictionary_book_search_find_words-512.png",
    },
    {
        name: "Materiały PDF",
        img: "https://cdn4.iconfinder.com/data/icons/planning-14/64/planner_notebook_agenda_planning_notes_plan_organizer_-512.png",
    },
];
const exercisesInfo = [
    {
        name: "Future forms",
        type: "Uzupełnij luki",
        group: "człowiek",
        level: "A1",
        data: "futureForms, futureFormsPrecept"
    },
    {
        name: "wygląd",
        type: "zadanie typu ....",
        group: "człowiek",
        level: "A1",
        data: "exercisesData"
    },
    {
        name: "części ciała",
        type: "zadanie typu ....",
        group: "człowiek",
        level: "A2",
        data: "exercisesData"
    },
    {
        name: "posiłki",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A1",
        data: "exercisesData"
    },
    {
        name: "owoce",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A1",
        data: "exercisesData"
    },
    {
        name: "rodzaję mięs",
        type: "zadanie typu ....",
        group: "jedzenie",
        level: "A2",
        data: "exercisesData"
    },
    {
        name: "narządy",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A1",
        data: "exercisesData"
    },
    {
        name: "różne wyrażenia",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A2",
        data: "exercisesData"
    },
    {
        name: "quiz",
        type: "zadanie typu ....",
        group: "zdrowie",
        level: "A2",
        data: "exercisesData"
    },
];
const exercisesData = [
    {
        part1: "Holland is also known",
        correct1: "as",
        part2: "the Netherlands.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: " You can't take part in the elections",
        correct1: "unless",
        part2: "you are a citizen of Poland.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Even",
        correct1: "though",
        part2: "we don't like her, I really think we should",
        correct2: "help",
        part3: "her in",
        correct3: "this",
        part4: "situation.",
    },
    {
        part1: "The fact he knows the boss is",
        correct1: "neither",
        part2: "here nor there. He won't get the job.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Only adults are",
        correct1: "allowed",
        part2: "to enter and as I can see you aren't old",
        correct2: "enough",
        part3: ".",
        correct3: "",
        part4: "",
    },
    {
        part1: "Of course I'll forgive him. After",
        correct1: "all",
        part2: "we're only humans. We do make mistakes.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "I don't know if they all go to the party. I will, at",
        correct1: "any",
        part2: "rate.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: " I don't like your new car. I really prefered the previous",
        correct1: "one",
        part2: ".",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Don't tell me lies. What you said doesn't",
        correct1: "make",
        part2: "any sense.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        part1: "Monica has",
        correct1: "such",
        part2: "a beautiful son. She must be really happy.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
];
const futureFormsPrecept = [
    ["Be going to", "1. Gdy mówimy o zamiarach / planach na przyszłość.", "2. Przewidywanie przyszłości na podstawie tego co wiemy / widzimy."],
    ["Present continuous", "3. Pewne plany na niedaleką przyszłość (daty / dni tygodnia / godzina)."],
    ["Will", "4. Wyrażanie opinii o tym, że coś się wydarzy.", "5. Podejmowanie spontanicznych decyzji.", "6. Proszenie o pomoc.", "7. Składanie obietnic.", "8. Wyrażanie nadziei"]
]
const futureForms = [
    {
        number: "6",
        part1: "1. I have some problems with my maths homework",
        correct1: "Will you help",
        part2: "(you / help) me?",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "2",
        part1: "2. Look at the tree! It",
        correct1: "is going to fall",
        part2: "(fall).",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "7",
        part1: "3. We promise we",
        correct1: "will never do",
        part2: "(never / do) it again.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "3",
        part1: "4. My sister",
        correct1: "is getting",
        part2: "(get) married next Saturday.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "8",
        part1: "5. I hope she",
        correct1: "will bring",
        part2: "(bring) some food to the party.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "1",
        part1: " 6. Tom",
        correct1: "is going to study",
        part2: "(study) in the University of Oxford in the future.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "5",
        part1: "7. It's so hot here. I",
        correct1: "will open",
        part2: "(open) the window.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
    {
        number: "4",
        part1: "8. I think Martha",
        correct1: ["won't apologise", "wont apologise", "will not apologise"], 
        part2: "(not / apologise) to me.",
        correct2: "",
        part3: "",
        correct3: "",
        part4: "",
    },
]
const filters = [];
