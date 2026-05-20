const faculties = [
  { id: "hf", name: "Faculty of Humanities", nameNo: "Det humanistiske fakultet" },
  { id: "jus", name: "Faculty of Law", nameNo: "Det juridiske fakultet" },
  { id: "mn", name: "Faculty of Mathematics and Natural Sciences", nameNo: "Det matematisk-naturvitenskapelige fakultet" },
  { id: "sv", name: "Faculty of Social Sciences", nameNo: "Det samfunnsvitenskapelige fakultet" },
  { id: "uv", name: "Faculty of Educational Sciences", nameNo: "Det utdanningsvitenskapelige fakultet" },
  { id: "med", name: "Faculty of Medicine", nameNo: "Det medisinske fakultet" }
];

const courses = [
  { code: "IN1000", faculty: "mn", semester: "Autumn 2026", department: "Department of Informatics", departmentNo: "Institutt for informatikk", name: "Introduction to Object-Oriented Programming", nameNo: "Introduksjon til objektorientert programmering" },
  { code: "EXPHIL03", faculty: "hf", semester: "Spring 2026", department: "Examen philosophicum", departmentNo: "Examen philosophicum", name: "Examen philosophicum" },
  { code: "JUS1111", faculty: "jus", semester: "Autumn 2026", department: "Department of Private Law", departmentNo: "Institutt for privatrett", name: "Private Law I", nameNo: "Privatrett I" },
  { code: "ECON1210", faculty: "sv", semester: "Spring 2026", department: "Department of Economics", departmentNo: "Økonomisk institutt", name: "Microeconomics 1", nameNo: "Mikroøkonomi 1" },
  { code: "PSYC1100", faculty: "sv", semester: "Autumn 2026", department: "Department of Psychology", departmentNo: "Psykologisk institutt", name: "Introduction to Psychology", nameNo: "Innføring i psykologi" },
  { code: "STK1000", faculty: "mn", semester: "Spring 2026", department: "Department of Mathematics", departmentNo: "Matematisk institutt", name: "Applied Statistics", nameNo: "Anvendt statistikk" },
  { code: "HIS1000", faculty: "hf", semester: "Autumn 2026", department: "Department of Archaeology, Conservation and History", departmentNo: "Institutt for arkeologi, konservering og historie", name: "World History", nameNo: "Verdenshistorie" },
  { code: "MEVIT1700", faculty: "hf", semester: "Spring 2026", department: "Department of Media and Communication", departmentNo: "Institutt for medier og kommunikasjon", name: "Media, Power and Society", nameNo: "Medier, makt og samfunn" },
  { code: "PED1001", faculty: "uv", semester: "Autumn 2026", department: "Department of Education", departmentNo: "Institutt for pedagogikk", name: "Education and Learning", nameNo: "Utdanning og læring" },
  { code: "MED1100", faculty: "med", semester: "Spring 2026", department: "Institute of Basic Medical Sciences", departmentNo: "Institutt for medisinske basalfag", name: "Human Biology", nameNo: "Humanbiologi" }
];

const profile = {
  name: "Martin L.",
  email: "martin@student.uio.no",
  verified: true,
  completedSales: 7
};

const listings = [
  {
    id: "b1",
    course: "IN1000",
    title: "Think Python",
    author: "Allen B. Downey",
    edition: "3rd edition, 2024",
    price: 280,
    originalPrice: 520,
    condition: "Like new",
    pickup: "Forskningsparken",
    seller: "Maja H.",
    rating: 4.9,
    sales: 12,
    verified: true,
    posted: "Today",
    color: "#1f5f8b",
    note: "Barely used, no markings. Can meet after IN1000 group sessions.",
    noteNo: "Knapt brukt, ingen markeringer. Kan møtes etter IN1000-gruppetimer."
  },
  {
    id: "b2",
    course: "EXPHIL03",
    title: "Exphil I",
    author: "Tollefsen, Syse & Nicolaisen",
    edition: "2022 edition",
    price: 210,
    originalPrice: 429,
    condition: "Used",
    pickup: "Blindern",
    seller: "Sander K.",
    rating: 4.7,
    sales: 8,
    verified: true,
    posted: "Yesterday",
    color: "#7b1023",
    note: "Some highlighting in chapter 2 and 4. Includes small notes from seminar prep.",
    noteNo: "Noen markeringer i kapittel 2 og 4. Inneholder små notater fra seminarforberedelser."
  },
  {
    id: "b3",
    course: "JUS1111",
    title: "Avtalerett",
    author: "Geir Woxholth",
    edition: "12th edition, 2023",
    price: 580,
    originalPrice: 899,
    condition: "Used",
    pickup: "Domus Juridica",
    seller: "Julie N.",
    rating: 5,
    sales: 21,
    verified: true,
    posted: "2 days ago",
    color: "#2f6f5e",
    note: "Clean copy with index tabs. Useful for seminar cases.",
    noteNo: "Pent eksemplar med registerlapper. Nyttig til seminaroppgaver."
  },
  {
    id: "b4",
    course: "ECON1210",
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    edition: "9th edition",
    price: 390,
    originalPrice: 760,
    condition: "Like new",
    pickup: "Blindern",
    seller: "Oda R.",
    rating: 4.8,
    sales: 6,
    verified: true,
    posted: "3 days ago",
    color: "#476a2a",
    note: "International edition. No writing inside.",
    noteNo: "Internasjonal utgave. Ingen notater i boken."
  },
  {
    id: "b5",
    course: "PSYC1100",
    title: "Psychology",
    author: "Schacter, Gilbert, Wegner & Nock",
    edition: "6th edition",
    price: 460,
    originalPrice: 820,
    condition: "Used",
    pickup: "Blindern",
    seller: "Jonas V.",
    rating: 4.6,
    sales: 5,
    verified: false,
    posted: "This week",
    color: "#b65f24",
    note: "A few dog-eared pages. Good condition overall.",
    noteNo: "Noen brettede sider. Ellers i god stand."
  },
  {
    id: "b6",
    course: "STK1000",
    title: "OpenIntro Statistics",
    author: "Diez, Barr & Cetinkaya-Rundel",
    edition: "4th edition",
    price: 160,
    originalPrice: 360,
    condition: "Heavily used",
    pickup: "Forskningsparken",
    seller: "Amir T.",
    rating: 4.5,
    sales: 3,
    verified: true,
    posted: "This week",
    color: "#41505f",
    note: "Worked examples marked. Cheap copy if you just need the text.",
    noteNo: "Løsningsforslag er markert. Billig eksemplar hvis du bare trenger teksten."
  },
  {
    id: "b7",
    course: "HIS1000",
    title: "The Human Past",
    author: "Chris Scarre",
    edition: "5th edition",
    price: 350,
    originalPrice: 690,
    condition: "Like new",
    pickup: "Blindern",
    seller: "Nora A.",
    rating: 4.9,
    sales: 17,
    verified: true,
    posted: "Last week",
    color: "#755a2d",
    note: "Used for one semester. No markings.",
    noteNo: "Brukt ett semester. Ingen markeringer."
  },
  {
    id: "b8",
    course: "MEVIT1700",
    title: "Media and Society",
    author: "David Hesmondhalgh",
    edition: "2nd edition",
    price: 240,
    originalPrice: 520,
    condition: "Used",
    pickup: "Sentrum",
    seller: "Eline B.",
    rating: 4.8,
    sales: 9,
    verified: true,
    posted: "Last week",
    color: "#8e3d59",
    note: "Some underlining, especially in media power chapters.",
    noteNo: "Noen understrekninger, særlig i kapitlene om mediemakt."
  },
  {
    id: "b9",
    course: "IN1000",
    title: "Think Python",
    author: "Allen B. Downey",
    edition: "3rd edition, 2024",
    price: 220,
    originalPrice: 520,
    condition: "Used",
    pickup: "Blindern",
    seller: "Henrik L.",
    rating: 4.6,
    sales: 4,
    verified: true,
    posted: "Today",
    color: "#1f5f8b",
    note: "A few notes in the margins. Can meet near Georg Sverdrups hus.",
    noteNo: "Noen notater i margen. Kan møtes ved Georg Sverdrups hus."
  },
  {
    id: "b10",
    course: "IN1000",
    title: "Think Python",
    author: "Allen B. Downey",
    edition: "3rd edition, 2024",
    price: 180,
    originalPrice: 520,
    condition: "Heavily used",
    pickup: "Blindern",
    seller: "Frida S.",
    rating: 4.4,
    sales: 2,
    verified: false,
    posted: "2 days ago",
    color: "#1f5f8b",
    note: "Readable but well used. Good budget option.",
    noteNo: "Lesbar, men godt brukt. Et rimelig alternativ."
  },
  {
    id: "b11",
    course: "IN1000",
    title: "How to Design Programs",
    author: "Felleisen, Findler, Flatt & Krishnamurthi",
    edition: "2nd edition",
    price: 330,
    originalPrice: 640,
    condition: "Like new",
    pickup: "Forskningsparken",
    seller: "Aksel P.",
    rating: 4.8,
    sales: 7,
    verified: true,
    posted: "Yesterday",
    color: "#1f5f8b",
    note: "Clean copy, bought for supplementary reading.",
    noteNo: "Pent eksemplar, kjøpt som tilleggslesing."
  },
  {
    id: "b12",
    course: "EXPHIL03",
    title: "Exphil I",
    author: "Tollefsen, Syse & Nicolaisen",
    edition: "2022 edition",
    price: 260,
    originalPrice: 429,
    condition: "Like new",
    pickup: "Blindern",
    seller: "Sara M.",
    rating: 4.9,
    sales: 11,
    verified: true,
    posted: "Today",
    color: "#7b1023",
    note: "No notes, very clean. Pickup by Sophus Bugges hus.",
    noteNo: "Ingen notater, veldig pent eksemplar. Henting ved Sophus Bugges hus."
  },
  {
    id: "b13",
    course: "EXPHIL03",
    title: "Exphil I",
    author: "Tollefsen, Syse & Nicolaisen",
    edition: "2022 edition",
    price: 140,
    originalPrice: 429,
    condition: "Heavily used",
    pickup: "Sentrum",
    seller: "Magnus E.",
    rating: 4.2,
    sales: 3,
    verified: true,
    posted: "4 days ago",
    color: "#7b1023",
    note: "Lots of highlighting, but complete and usable.",
    noteNo: "Mye markering, men komplett og brukbar."
  },
  {
    id: "b14",
    course: "JUS1111",
    title: "Avtalerett",
    author: "Geir Woxholth",
    edition: "12th edition, 2023",
    price: 640,
    originalPrice: 899,
    condition: "Like new",
    pickup: "Domus Juridica",
    seller: "Emilie W.",
    rating: 4.9,
    sales: 15,
    verified: true,
    posted: "Yesterday",
    color: "#2f6f5e",
    note: "Clean legal textbook with no underlining.",
    noteNo: "Pent juridisk pensum uten understrekninger."
  },
  {
    id: "b15",
    course: "JUS1111",
    title: "Rettskildelære",
    author: "Mads Andenæs",
    edition: "3rd edition",
    price: 370,
    originalPrice: 690,
    condition: "Used",
    pickup: "Domus Juridica",
    seller: "Tobias R.",
    rating: 4.7,
    sales: 9,
    verified: true,
    posted: "This week",
    color: "#2f6f5e",
    note: "Some seminar notes on sticky tabs.",
    noteNo: "Noen seminarnotater på lapper."
  },
  {
    id: "b16",
    course: "ECON1210",
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    edition: "9th edition",
    price: 320,
    originalPrice: 760,
    condition: "Used",
    pickup: "Blindern",
    seller: "Live T.",
    rating: 4.5,
    sales: 5,
    verified: true,
    posted: "Yesterday",
    color: "#476a2a",
    note: "Underlined in the first five chapters.",
    noteNo: "Understreket i de fem første kapitlene."
  },
  {
    id: "b17",
    course: "ECON1210",
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    edition: "9th edition",
    price: 450,
    originalPrice: 760,
    condition: "Like new",
    pickup: "Forskningsparken",
    seller: "Kristian D.",
    rating: 5,
    sales: 13,
    verified: true,
    posted: "This week",
    color: "#476a2a",
    note: "Almost untouched. Includes access code card, unused.",
    noteNo: "Nesten ubrukt. Har tilgangskodekort, ubrukt."
  },
  {
    id: "b18",
    course: "PSYC1100",
    title: "Psychology",
    author: "Schacter, Gilbert, Wegner & Nock",
    edition: "6th edition",
    price: 390,
    originalPrice: 820,
    condition: "Used",
    pickup: "Blindern",
    seller: "Mina K.",
    rating: 4.8,
    sales: 10,
    verified: true,
    posted: "Today",
    color: "#b65f24",
    note: "Neat notes in pencil, easy to erase.",
    noteNo: "Ryddige blyantnotater, enkle å viske bort."
  },
  {
    id: "b19",
    course: "STK1000",
    title: "OpenIntro Statistics",
    author: "Diez, Barr & Cetinkaya-Rundel",
    edition: "4th edition",
    price: 210,
    originalPrice: 360,
    condition: "Used",
    pickup: "Blindern",
    seller: "Eirik B.",
    rating: 4.6,
    sales: 6,
    verified: true,
    posted: "Yesterday",
    color: "#41505f",
    note: "Formula pages marked with tabs.",
    noteNo: "Formelsider markert med lapper."
  },
  {
    id: "b20",
    course: "STK1000",
    title: "Practical Statistics for Data Scientists",
    author: "Bruce, Bruce & Gedeck",
    edition: "2nd edition",
    price: 360,
    originalPrice: 720,
    condition: "Like new",
    pickup: "Forskningsparken",
    seller: "Tuva J.",
    rating: 4.9,
    sales: 8,
    verified: true,
    posted: "This week",
    color: "#41505f",
    note: "Useful supplement for R and Python examples.",
    noteNo: "Nyttig tillegg for R- og Python-eksempler."
  },
  {
    id: "b21",
    course: "MEVIT1700",
    title: "Media and Society",
    author: "David Hesmondhalgh",
    edition: "2nd edition",
    price: 300,
    originalPrice: 520,
    condition: "Like new",
    pickup: "Sentrum",
    seller: "Ingrid F.",
    rating: 4.7,
    sales: 6,
    verified: true,
    posted: "Yesterday",
    color: "#8e3d59",
    note: "No markings. Can meet near Nationaltheatret.",
    noteNo: "Ingen markeringer. Kan møtes ved Nationaltheatret."
  },
  {
    id: "b22",
    course: "HIS1000",
    title: "The Human Past",
    author: "Chris Scarre",
    edition: "5th edition",
    price: 290,
    originalPrice: 690,
    condition: "Used",
    pickup: "Blindern",
    seller: "Daniel C.",
    rating: 4.5,
    sales: 4,
    verified: true,
    posted: "This week",
    color: "#755a2d",
    note: "Some highlighting in the archaeology chapters.",
    noteNo: "Noen markeringer i kapitlene om arkeologi."
  },
  {
    id: "b23",
    course: "PED1001",
    title: "Educational Psychology",
    author: "Anita Woolfolk",
    edition: "15th edition",
    price: 430,
    originalPrice: 790,
    condition: "Used",
    pickup: "Blindern",
    seller: "Hanna U.",
    rating: 4.8,
    sales: 12,
    verified: true,
    posted: "Today",
    color: "#6a4c93",
    note: "Some highlighted sections on motivation and classroom learning.",
    noteNo: "Noen markeringer om motivasjon og læring i klasserommet."
  },
  {
    id: "b24",
    course: "PED1001",
    title: "Educational Psychology",
    author: "Anita Woolfolk",
    edition: "15th edition",
    price: 510,
    originalPrice: 790,
    condition: "Like new",
    pickup: "Blindern",
    seller: "Lars U.",
    rating: 4.9,
    sales: 5,
    verified: true,
    posted: "Yesterday",
    color: "#6a4c93",
    note: "Clean copy used for one module only.",
    noteNo: "Pent eksemplar brukt til én modul."
  },
  {
    id: "b25",
    course: "PED1001",
    title: "Pedagogy of the Oppressed",
    author: "Paulo Freire",
    edition: "50th anniversary edition",
    price: 190,
    originalPrice: 350,
    condition: "Used",
    pickup: "Sentrum",
    seller: "Kaja V.",
    rating: 4.6,
    sales: 4,
    verified: true,
    posted: "This week",
    color: "#6a4c93",
    note: "Seminar notes in pencil on a few pages.",
    noteNo: "Seminarnotater med blyant på noen sider."
  },
  {
    id: "b26",
    course: "MED1100",
    title: "Human Anatomy & Physiology",
    author: "Elaine N. Marieb",
    edition: "11th edition",
    price: 690,
    originalPrice: 1190,
    condition: "Used",
    pickup: "Forskningsparken",
    seller: "Ida M.",
    rating: 5,
    sales: 18,
    verified: true,
    posted: "Today",
    color: "#8a4f7d",
    note: "Includes removable anatomy tabs and chapter markers.",
    noteNo: "Har avtakbare anatomilapper og kapittelmarkører."
  },
  {
    id: "b27",
    course: "MED1100",
    title: "Human Anatomy & Physiology",
    author: "Elaine N. Marieb",
    edition: "11th edition",
    price: 760,
    originalPrice: 1190,
    condition: "Like new",
    pickup: "Blindern",
    seller: "Sofie M.",
    rating: 4.8,
    sales: 9,
    verified: true,
    posted: "Yesterday",
    color: "#8a4f7d",
    note: "No markings. Heavy book, pickup preferred.",
    noteNo: "Ingen markeringer. Tung bok, henting foretrekkes."
  },
  {
    id: "b28",
    course: "MED1100",
    title: "Medical Physiology",
    author: "Boron & Boulpaep",
    edition: "3rd edition",
    price: 620,
    originalPrice: 1040,
    condition: "Used",
    pickup: "Forskningsparken",
    seller: "Jon M.",
    rating: 4.7,
    sales: 6,
    verified: true,
    posted: "This week",
    color: "#8a4f7d",
    note: "Useful physiology reference with light highlighting.",
    noteNo: "Nyttig fysiologireferanse med lette markeringer."
  }
];

const myListings = [
  { id: "m1", title: "Exphil II", course: "EXPHIL03", price: 180, status: "Available", views: 34, saves: 7 },
  { id: "m2", title: "Calculus", course: "MAT1100", price: 320, status: "Reserved", views: 61, saves: 12 },
  { id: "m3", title: "Rettsfilosofi", course: "JUS2111", price: 410, status: "Available", views: 18, saves: 3 }
];

function readStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

const storedListings = readStoredArray("pensumtorgetListings");
const storedMyListings = readStoredArray("pensumtorgetMyListings");
const storedMessages = readStoredArray("pensumtorgetMessages");

if (storedListings.length) listings.splice(0, listings.length, ...storedListings);
if (storedMyListings.length) myListings.splice(0, myListings.length, ...storedMyListings);

let messages = storedMessages;
let nextMyListingNumber =
  Math.max(0, ...myListings.map((item) => Number(String(item.id).replace("m", "")) || 0)) + 1;

const translations = {
  en: {
    brandTagline: "Syllabus books, student to student",
    brandHome: "Pensumtorget home",
    primaryNav: "Primary",
    language: "Language",
    marketplaceSnapshot: "Marketplace snapshot",
    browseBooks: "Browse books",
    filters: "Filters",
    pickupAreaLabel: "Pickup area",
    facultyLabel: "Faculty",
    courseLabel: "Course code",
    sortListings: "Sort listings",
    closeMessage: "Close message dialog",
    navBrowse: "Browse",
    navSell: "Sell",
    navDashboard: "My listings",
    navFavorites: "My favourites",
    navMessages: "Messages",
    heroEyebrow: "UiO courses, second-hand books, campus pickup",
    heroTitle: "Find syllabus books by course code.",
    searchLabel: "Search course, title, author, or seller",
    searchPlaceholder: "Search IN1000, EXPHIL03, book title...",
    searchButton: "Search",
    statActive: "Active Listings",
    statBooks: "book titles",
    statCourses: "Subjects with books",
    statVerified: "UiO Verified Sellers",
    statPickup: "Most Used Pickup Area",
    filterCourses: "Courses",
    filterFaculty: "Faculty",
    allFaculties: "All faculties",
    allCourses: "All courses",
    semester: "Semester",
    allSemesters: "All semesters",
    clear: "Clear",
    filterCondition: "Condition",
    filterPrice: "Price",
    maxPrice: "Maximum price",
    filterPickup: "Pickup",
    allAreas: "All areas",
    availableNow: "Available now",
    allBooks: "All syllabus books",
    courseBooks: "syllabus books",
    resultsFor: "Results for",
    sortRecent: "Newest first",
    sortPriceLow: "Lowest price",
    sortPriceHigh: "Highest price",
    sortRating: "Top sellers",
    emptyState: "No books match those filters yet.",
    createListing: "Create listing",
    sellTitle: "Sell a syllabus book",
    sellIntro: "Add the course code, condition, price, and where you prefer to meet.",
    courseCode: "Course code",
    bookTitle: "Book title",
    bookTitlePlaceholder: "How to Design Programs",
    author: "Author",
    authorPlaceholder: "Author name",
    editionYear: "Edition/year",
    editionPlaceholder: "3rd edition, 2023",
    priceNok: "Price in NOK",
    chooseCondition: "Choose condition",
    pickupArea: "Pickup area",
    choosePickup: "Choose pickup area",
    sellerNote: "Seller note",
    sellerNotePlaceholder: "No markings, can meet after lectures on Tuesdays.",
    publishListing: "Publish listing",
    sellerDashboard: "Seller dashboard",
    dashboardIntro: "Track availability and see student interest across your active listings.",
    messageSeller: "Message seller",
    contactSeller: "Contact seller",
    message: "Message",
    sendMockMessage: "Send mock message",
    reserveBook: "Request reservation",
    view: "View",
    viewListings: "View listings",
    favoriteBook: "Favourite",
    removeFavorite: "Remove",
    favoritesEyebrow: "Saved books",
    favoritesIntro: "Keep an overview of books you want to compare later.",
    favoritesEmpty: "No favourite books yet.",
    favoriteAddedToast: "Book added to your favourites.",
    favoriteRemovedToast: "Book removed from your favourites.",
    averagePrice: "Average price",
    averageCondition: "Average Condition",
    availableListing: "available listing",
    availableListings: "available listings",
    sellerListings: "Seller listings",
    offersFrom: "offers from",
    lowestPrice: "Lowest price",
    manage: "Manage",
    deleteListing: "Delete",
    verifyDelete: "Verify delete",
    cancel: "Cancel",
    deleteConfirmPrompt: "Are you sure you want to delete this listing?",
    listingDeletedToast: "Listing deleted.",
    userVerified: "UiO verified",
    profileSales: "completed sales",
    courseContextBooks: "syllabus books listed",
    courseContextFaculty: "Faculty",
    courseContextSemester: "Semester",
    requiredReading: "Required",
    recommendedReading: "Recommended",
    messagesEyebrow: "Buyer flow",
    messagesIntro: "Track mock seller conversations and reservation requests.",
    messagesEmpty: "No messages or reservations yet.",
    messageSentStatus: "Message sent",
    reservationRequested: "Reservation requested",
    reservationToast: "Reservation request sent.",
    threadStatus: "Status",
    verified: "UiO verified",
    unverified: "Unverified",
    verifiedSeller: "UiO verified seller",
    unverifiedSeller: "Unverified seller",
    rating: "rating",
    sales: "sales",
    views: "views",
    saved: "saved",
    originallyAround: "originally around",
    contact: "Contact",
    save: "Save",
    report: "Report",
    closeListing: "Close listing detail",
    contactTitle: "Message",
    contactTemplate: "Hi {seller}, is {title} for {course} still available? I can meet at {pickup}.",
    savedToast: "Listing saved to your mocked watchlist.",
    reportToast: "Report flow is mocked for this prototype.",
    manageToast: "Status controls are mocked for the prototype.",
    messageSentToast: "Mock message sent. In a full build, this would open a secure chat.",
    listingPublishedToast: "Listing published in the prototype.",
    noSellerNote: "No extra notes from seller.",
    justNow: "Just now",
    sellerYou: "You"
  },
  no: {
    brandTagline: "Pensumbøker, student til student",
    brandHome: "Pensumtorget startside",
    primaryNav: "Primærnavigasjon",
    language: "Språk",
    marketplaceSnapshot: "Markedsplassoversikt",
    browseBooks: "Utforsk bøker",
    filters: "Filtre",
    pickupAreaLabel: "Hentested",
    facultyLabel: "Fakultet",
    courseLabel: "Emnekode",
    sortListings: "Sorter annonser",
    closeMessage: "Lukk meldingsvindu",
    navBrowse: "Utforsk",
    navSell: "Selg",
    navDashboard: "Mine annonser",
    navFavorites: "Mine favoritter",
    navMessages: "Meldinger",
    heroEyebrow: "UiO-emner, brukte bøker, henting på campus",
    heroTitle: "Finn pensumbøker etter emnekode.",
    searchLabel: "Søk etter emne, tittel, forfatter eller selger",
    searchPlaceholder: "Søk IN1000, EXPHIL03, boktittel...",
    searchButton: "Søk",
    statActive: "Aktive Annonser",
    statBooks: "boktitler",
    statCourses: "Emner med bøker",
    statVerified: "UiO-verifiserte Selgere",
    statPickup: "Mest Brukt Hentested",
    filterCourses: "Emner",
    filterFaculty: "Fakultet",
    allFaculties: "Alle fakulteter",
    allCourses: "Alle emner",
    semester: "Semester",
    allSemesters: "Alle semestre",
    clear: "Nullstill",
    filterCondition: "Tilstand",
    filterPrice: "Pris",
    maxPrice: "Makspris",
    filterPickup: "Henting",
    allAreas: "Alle områder",
    availableNow: "Tilgjengelig nå",
    allBooks: "Alle pensumbøker",
    courseBooks: "pensumbøker",
    resultsFor: "Resultater for",
    sortRecent: "Nyeste først",
    sortPriceLow: "Laveste pris",
    sortPriceHigh: "Høyeste pris",
    sortRating: "Beste selgere",
    emptyState: "Ingen bøker passer filtrene ennå.",
    createListing: "Opprett annonse",
    sellTitle: "Selg en pensumbok",
    sellIntro: "Legg inn emnekode, tilstand, pris og hvor du helst vil møtes.",
    courseCode: "Emnekode",
    bookTitle: "Boktittel",
    bookTitlePlaceholder: "Hvordan programmere",
    author: "Forfatter",
    authorPlaceholder: "Forfatternavn",
    editionYear: "Utgave/år",
    editionPlaceholder: "3. utgave, 2023",
    priceNok: "Pris i NOK",
    chooseCondition: "Velg tilstand",
    pickupArea: "Hentested",
    choosePickup: "Velg hentested",
    sellerNote: "Selgernotat",
    sellerNotePlaceholder: "Ingen markeringer, kan møtes etter forelesning på tirsdager.",
    publishListing: "Publiser annonse",
    sellerDashboard: "Selgeroversikt",
    dashboardIntro: "Følg tilgjengelighet og studentinteresse for de aktive annonsene dine.",
    messageSeller: "Meld selger",
    contactSeller: "Kontakt selger",
    message: "Melding",
    sendMockMessage: "Send testmelding",
    reserveBook: "Be om reservasjon",
    view: "Vis",
    viewListings: "Vis annonser",
    favoriteBook: "Favoritt",
    removeFavorite: "Fjern",
    favoritesEyebrow: "Lagrede bøker",
    favoritesIntro: "Hold oversikt over bøker du vil sammenligne senere.",
    favoritesEmpty: "Ingen favorittbøker ennå.",
    favoriteAddedToast: "Boken er lagt til i favoritter.",
    favoriteRemovedToast: "Boken er fjernet fra favoritter.",
    averagePrice: "Gjennomsnittspris",
    averageCondition: "Gjennomsnittlig tilstand",
    availableListing: "tilgjengelig annonse",
    availableListings: "tilgjengelige annonser",
    sellerListings: "Selgerannonser",
    offersFrom: "tilbud fra",
    lowestPrice: "Laveste pris",
    manage: "Administrer",
    deleteListing: "Slett",
    verifyDelete: "Bekreft sletting",
    cancel: "Avbryt",
    deleteConfirmPrompt: "Er du sikker på at du vil slette denne annonsen?",
    listingDeletedToast: "Annonsen er slettet.",
    userVerified: "UiO-verifisert",
    profileSales: "fullførte salg",
    courseContextBooks: "pensumbøker listet",
    courseContextFaculty: "Fakultet",
    courseContextSemester: "Semester",
    requiredReading: "Obligatorisk",
    recommendedReading: "Anbefalt",
    messagesEyebrow: "Kjøpsflyt",
    messagesIntro: "Følg simulerte selgersamtaler og reservasjonsforespørsler.",
    messagesEmpty: "Ingen meldinger eller reservasjoner ennå.",
    messageSentStatus: "Melding sendt",
    reservationRequested: "Reservasjon forespurt",
    reservationToast: "Reservasjonsforespørsel sendt.",
    threadStatus: "Status",
    verified: "UiO-verifisert",
    unverified: "Ikke verifisert",
    verifiedSeller: "UiO-verifisert selger",
    unverifiedSeller: "Ikke verifisert selger",
    rating: "vurdering",
    sales: "salg",
    views: "visninger",
    saved: "lagret",
    originallyAround: "opprinnelig rundt",
    contact: "Kontakt",
    save: "Lagre",
    report: "Rapporter",
    closeListing: "Lukk annonse",
    contactTitle: "Melding til",
    contactTemplate: "Hei {seller}, er {title} til {course} fortsatt tilgjengelig? Jeg kan møtes ved {pickup}.",
    savedToast: "Annonsen er lagret i den simulerte huskelisten.",
    reportToast: "Rapportering er simulert i denne prototypen.",
    manageToast: "Statuskontroller er simulert i prototypen.",
    messageSentToast: "Testmelding sendt. I en full versjon ville dette åpnet en sikker chat.",
    listingPublishedToast: "Annonsen er publisert i prototypen.",
    noSellerNote: "Ingen ekstra notater fra selger.",
    justNow: "Akkurat nå",
    sellerYou: "Deg"
  }
};

const conditionLabels = {
  en: {
    "Like new": "Like new",
    Used: "Used",
    "Heavily used": "Heavily used"
  },
  no: {
    "Like new": "Som ny",
    Used: "Brukt",
    "Heavily used": "Godt brukt"
  }
};

const statusLabels = {
  en: {
    Available: "Available",
    Reserved: "Reserved"
  },
  no: {
    Available: "Tilgjengelig",
    Reserved: "Reservert"
  }
};

const state = {
  query: "",
  faculty: "all",
  course: "",
  semester: "all",
  conditions: new Set(),
  maxPrice: 900,
  pickup: "all",
  sort: "recent",
  lang: translations[localStorage.getItem("pensumtorgetLanguage")] ? localStorage.getItem("pensumtorgetLanguage") : "en",
  favorites: new Set(JSON.parse(localStorage.getItem("pensumtorgetFavorites") || "[]"))
};

const grid = document.querySelector("#listing-grid");
const favoritesGrid = document.querySelector("#favorites-grid");
const favoritesEmpty = document.querySelector("#favorites-empty");
const emptyState = document.querySelector("#empty-state");
const resultsTitle = document.querySelector("#results-title");
const searchInput = document.querySelector("#search-input");
const maxPrice = document.querySelector("#max-price");
const maxPriceOutput = document.querySelector("#max-price-output");
const facultyFilter = document.querySelector("#faculty-filter");
const courseFilter = document.querySelector("#course-filter");
const semesterFilter = document.querySelector("#semester-filter");
const pickupFilter = document.querySelector("#pickup-filter");
const sortSelect = document.querySelector("#sort-select");
const courseChips = document.querySelector("#course-chips");
const courseContext = document.querySelector("#course-context");
const userChip = document.querySelector("#user-chip");
const messageGrid = document.querySelector("#message-grid");
const messagesEmpty = document.querySelector("#messages-empty");
const detailDialog = document.querySelector("#detail-dialog");
const detailCard = document.querySelector("#detail-card");
const contactDialog = document.querySelector("#contact-dialog");
const messageTemplate = document.querySelector("#message-template");
const toast = document.querySelector("#toast");
let activeDetailId = "";
let activeContactListingId = "";
let pendingDeleteListingId = "";
const conditionScores = {
  "Heavily used": 1,
  Used: 2,
  "Like new": 3
};

function byId(id) {
  return document.getElementById(id);
}

function money(value) {
  return `${value} kr`;
}

function t(key) {
  return translations[state.lang][key] ?? translations.en[key] ?? key;
}

function conditionLabel(value) {
  return conditionLabels[state.lang][value] ?? value;
}

function statusLabel(value) {
  return statusLabels[state.lang][value] ?? value;
}

function sellerName(value) {
  return value === "You" ? t("sellerYou") : value;
}

function listingCountLabel(count) {
  return `${count} ${count === 1 ? t("availableListing") : t("availableListings")}`;
}

function persistFavorites() {
  localStorage.setItem("pensumtorgetFavorites", JSON.stringify([...state.favorites]));
}

function persistMarketplaceData() {
  localStorage.setItem("pensumtorgetListings", JSON.stringify(listings));
  localStorage.setItem("pensumtorgetMyListings", JSON.stringify(myListings));
}

function persistMessages() {
  localStorage.setItem("pensumtorgetMessages", JSON.stringify(messages));
}

function isFavorite(key) {
  return state.favorites.has(key);
}

function favoriteButtonMarkup(key) {
  const active = isFavorite(key);
  return `
    <button class="secondary-button favorite-button ${active ? "active" : ""}" type="button" data-favorite="${key}" aria-pressed="${active}">
      ${active ? t("removeFavorite") : t("favoriteBook")}
    </button>
  `;
}

function toggleFavorite(key) {
  if (state.favorites.has(key)) {
    state.favorites.delete(key);
    showToast(t("favoriteRemovedToast"));
  } else {
    state.favorites.add(key);
    showToast(t("favoriteAddedToast"));
  }
  persistFavorites();
  renderListings();
  renderFavorites();
  if (detailDialog.open && activeDetailId) renderDetail(activeDetailId);
}

function deleteMyListing(id) {
  const itemIndex = myListings.findIndex((item) => item.id === id);
  if (itemIndex === -1) return;
  pendingDeleteListingId = "";

  const [removed] = myListings.splice(itemIndex, 1);
  if (removed.listingId) {
    const listingIndex = listings.findIndex((listing) => listing.id === removed.listingId);
    if (listingIndex !== -1) {
      const [removedListing] = listings.splice(listingIndex, 1);
      const removedBookKey = bookKey(removedListing);
      if (!getBookByKey(removedBookKey)) state.favorites.delete(removedBookKey);
    }
  }

  persistMarketplaceData();
  persistFavorites();
  renderListings();
  renderFavorites();
  renderMessages();
  renderDashboard();
  if (detailDialog.open && activeDetailId) {
    if (getBookByKey(activeDetailId)) renderDetail(activeDetailId);
    else detailDialog.close();
  }
  showToast(t("listingDeletedToast"));
}

function getCourseName(code) {
  const course = courses.find((item) => item.code === code);
  return state.lang === "no" ? course?.nameNo ?? course?.name ?? "UiO-emne" : course?.name ?? "UiO course";
}

function getDepartmentName(code) {
  const course = getCourse(code);
  return state.lang === "no" ? course?.departmentNo ?? course?.department ?? "" : course?.department ?? "";
}

function getFaculty(id) {
  return faculties.find((faculty) => faculty.id === id);
}

function getFacultyName(id) {
  const faculty = getFaculty(id);
  return state.lang === "no" ? faculty?.nameNo ?? faculty?.name ?? "" : faculty?.name ?? "";
}

function getCourse(code) {
  return courses.find((course) => course.code === code);
}

function filteredCoursesForFaculty() {
  return courses.filter(
    (course) =>
      (state.faculty === "all" || course.faculty === state.faculty) &&
      (state.semester === "all" || course.semester === state.semester)
  );
}

function readingType(book) {
  const recommendedSignals = ["practical", "pedagogy", "rettskildelære", "medical physiology", "how to design"];
  return recommendedSignals.some((signal) => book.title.toLowerCase().includes(signal))
    ? t("recommendedReading")
    : t("requiredReading");
}

function bookKey(item) {
  return [item.course, item.title, item.author, item.edition]
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function averageCondition(listingsForBook) {
  const score = Math.round(average(listingsForBook.map((listing) => conditionScores[listing.condition])));
  const condition = Object.entries(conditionScores).find(([, value]) => value === score)?.[0] ?? "Used";
  return conditionLabel(condition);
}

function buildBookGroups() {
  const groups = new Map();

  listings.forEach((listing, index) => {
    const key = bookKey(listing);
    const group = groups.get(key) ?? {
      key,
      course: listing.course,
      title: listing.title,
      author: listing.author,
      edition: listing.edition,
      color: listing.color,
      firstIndex: index,
      listings: []
    };

    group.listings.push(listing);
    groups.set(key, group);
  });

  return [...groups.values()].map((book) => {
    const prices = book.listings.map((listing) => listing.price);
    const ratings = book.listings.map((listing) => listing.rating);
    return {
      ...book,
      averagePrice: Math.round(average(prices)),
      averageCondition: averageCondition(book.listings),
      lowestPrice: Math.min(...prices),
      topRating: Math.max(...ratings),
      verifiedCount: book.listings.filter((listing) => listing.verified).length
    };
  });
}

function getBookByKey(key) {
  return buildBookGroups().find((book) => book.key === key);
}

function coverMarkup(listing) {
  return `
    <div class="book-cover" style="background: linear-gradient(145deg, ${listing.color}, #111827);">
      <span class="cover-code">${listing.course}</span>
      <span class="cover-title">${listing.title}</span>
    </div>
  `;
}

function listingMatches(listing) {
  const haystack = [
    listing.course,
    getCourseName(listing.course),
    getCourse(listing.course)?.name,
    getCourse(listing.course)?.nameNo,
    getDepartmentName(listing.course),
    getFacultyName(getCourse(listing.course)?.faculty),
    getCourse(listing.course)?.semester,
    listing.title,
    listing.author,
    listing.seller,
    listing.pickup
  ]
    .join(" ")
    .toLowerCase();

  const queryMatch = haystack.includes(state.query.toLowerCase());
  const facultyMatch = state.faculty === "all" || getCourse(listing.course)?.faculty === state.faculty;
  const courseMatch = !state.course || listing.course === state.course;
  const semesterMatch = state.semester === "all" || getCourse(listing.course)?.semester === state.semester;
  const conditionMatch = state.conditions.size === 0 || state.conditions.has(listing.condition);
  const priceMatch = listing.price <= state.maxPrice;
  const pickupMatch = state.pickup === "all" || listing.pickup === state.pickup;

  return queryMatch && facultyMatch && courseMatch && semesterMatch && conditionMatch && priceMatch && pickupMatch;
}

function sortedListings(items) {
  return [...items].sort((a, b) => {
    if (state.sort === "priceLow") return a.averagePrice - b.averagePrice;
    if (state.sort === "priceHigh") return b.averagePrice - a.averagePrice;
    if (state.sort === "rating") return b.topRating - a.topRating;
    return a.firstIndex - b.firstIndex;
  });
}

function renderCourseChips() {
  courseChips.innerHTML = filteredCoursesForFaculty()
    .map(
      (course) => `
      <button class="chip ${state.course === course.code ? "active" : ""}" type="button" data-course="${course.code}">
        ${course.code}
      </button>
    `
    )
    .join("");
}

function renderFacultyOptions() {
  facultyFilter.innerHTML = `
    <option value="all">${t("allFaculties")}</option>
    ${faculties
      .map((faculty) => `<option value="${faculty.id}">${getFacultyName(faculty.id)}</option>`)
      .join("")}
  `;
  facultyFilter.value = state.faculty;
}

function renderCourseFilterOptions() {
  courseFilter.innerHTML = `
    <option value="">${t("allCourses")}</option>
    ${filteredCoursesForFaculty()
      .map((course) => `<option value="${course.code}">${course.code} · ${getCourseName(course.code)}</option>`)
      .join("")}
  `;
  courseFilter.value = state.course;
}

function renderBookCard(book) {
  return `
    <article class="listing-card">
      ${coverMarkup(book)}
      <div>
        <p class="eyebrow">${book.course} · ${getCourseName(book.course)}</p>
        <h3>${book.title}</h3>
        <p>${book.author} · ${book.edition}</p>
        <dl class="book-summary">
          <div>
            <dt>${t("averagePrice")}</dt>
            <dd>${money(book.averagePrice)}</dd>
          </div>
          <div>
            <dt>${t("averageCondition")}</dt>
            <dd>${book.averageCondition}</dd>
          </div>
        </dl>
        <div class="listing-meta">
          <span class="badge">${getCourse(book.course)?.semester}</span>
          <span class="badge">${readingType(book)}</span>
          <span class="badge">${listingCountLabel(book.listings.length)}</span>
          <span class="badge">${t("lowestPrice")} ${money(book.lowestPrice)}</span>
          <span class="badge verified">${book.verifiedCount}/${book.listings.length} ${t("verified")}</span>
        </div>
      </div>
      <div class="listing-price">
        <strong>${money(book.averagePrice)}</strong>
        <div class="card-actions">
          ${favoriteButtonMarkup(book.key)}
          <button class="secondary-button" type="button" data-detail="${book.key}">${t("viewListings")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderListings() {
  const filtered = sortedListings(buildBookGroups().filter((book) => book.listings.some(listingMatches)));
  resultsTitle.textContent = state.course
    ? `${state.course} ${t("courseBooks")}`
    : state.faculty !== "all"
      ? getFacultyName(state.faculty)
    : state.query
      ? `${t("resultsFor")} "${state.query}"`
      : t("allBooks");

  grid.innerHTML = filtered.map(renderBookCard).join("");

  emptyState.hidden = filtered.length > 0;
  byId("stat-listings").textContent = listings.length;
  byId("stat-courses").textContent = new Set(listings.map((listing) => listing.course)).size;
  renderCourseContext(filtered);
}

function renderCourseContext(filteredBooks) {
  if (!state.course && state.faculty === "all" && state.semester === "all") {
    courseContext.hidden = true;
    courseContext.innerHTML = "";
    return;
  }

  const course = state.course ? getCourse(state.course) : null;
  const title = course ? `${course.code} · ${getCourseName(course.code)}` : resultsTitle.textContent;
  const facultyName = course ? getFacultyName(course.faculty) : state.faculty !== "all" ? getFacultyName(state.faculty) : t("allFaculties");
  const semester = course ? course.semester : state.semester !== "all" ? state.semester : t("allSemesters");

  courseContext.hidden = false;
  courseContext.innerHTML = `
    <div>
      <p class="eyebrow">${course ? getDepartmentName(course.code) : t("browseBooks")}</p>
      <h3>${title}</h3>
    </div>
    <dl class="context-stats">
      <div>
        <dt>${t("courseContextFaculty")}</dt>
        <dd>${facultyName}</dd>
      </div>
      <div>
        <dt>${t("courseContextSemester")}</dt>
        <dd>${semester}</dd>
      </div>
      <div>
        <dt>${t("courseContextBooks")}</dt>
        <dd>${filteredBooks.length}</dd>
      </div>
    </dl>
  `;
}

function renderFavorites() {
  const books = sortedListings(buildBookGroups().filter((book) => isFavorite(book.key)));
  favoritesGrid.innerHTML = books.map(renderBookCard).join("");
  favoritesEmpty.hidden = books.length > 0;
}

function renderDashboard() {
  byId("dashboard-grid").innerHTML = myListings
    .map(
      (item) => {
        const isPendingDelete = pendingDeleteListingId === item.id;
        return `
      <article class="dashboard-card">
        <div class="status-row">
          <span class="badge">${item.course}</span>
          <span class="status-pill">${statusLabel(item.status)}</span>
        </div>
        <div>
          <h3>${item.title}</h3>
          <p>${money(item.price)} · ${item.views} ${t("views")} · ${item.saves} ${t("saved")}</p>
        </div>
        ${
          isPendingDelete
            ? `
              <div class="delete-confirm">
                <p>${t("deleteConfirmPrompt")}</p>
                <div class="card-actions">
                  <button class="secondary-button danger-button" type="button" data-verify-delete-my-listing="${item.id}">
                    ${t("verifyDelete")}
                  </button>
                  <button class="secondary-button" type="button" data-cancel-delete-my-listing>
                    ${t("cancel")}
                  </button>
                </div>
              </div>
            `
            : `
              <div class="card-actions">
                <button class="secondary-button" type="button" data-toast="${t("manageToast")}">
                  ${t("manage")}
                </button>
                <button class="secondary-button danger-button" type="button" data-request-delete-my-listing="${item.id}">
                  ${t("deleteListing")}
                </button>
              </div>
            `
        }
      </article>
    `;
      }
    )
    .join("");
}

function renderIdentity() {
  userChip.innerHTML = `
    <span class="user-avatar" aria-hidden="true">${profile.name.slice(0, 1)}</span>
    <span>
      <strong>${profile.name}</strong>
      <small>${t("userVerified")} · ${profile.completedSales} ${t("profileSales")}</small>
    </span>
  `;
}

function createMessageThread(listing, status) {
  const thread = {
    id: `msg${Date.now()}`,
    listingId: listing.id,
    bookKey: bookKey(listing),
    course: listing.course,
    title: listing.title,
    seller: listing.seller,
    price: listing.price,
    pickup: listing.pickup,
    status,
    message: messageTemplate.value,
    createdAt: new Date().toLocaleString("no-NO", { dateStyle: "short", timeStyle: "short" })
  };
  messages.unshift(thread);
  persistMessages();
  renderMessages();
}

function renderMessages() {
  messageGrid.innerHTML = messages
    .map(
      (thread) => `
      <article class="message-card">
        <div class="status-row">
          <span class="badge">${thread.course}</span>
          <span class="status-pill">${thread.status}</span>
        </div>
        <div>
          <h3>${thread.title}</h3>
          <p>${thread.seller} · ${money(thread.price)} · ${thread.pickup}</p>
        </div>
        <blockquote>${thread.message}</blockquote>
        <p class="supporting-text">${t("threadStatus")}: ${thread.status} · ${thread.createdAt}</p>
        <div class="card-actions">
          <button class="secondary-button" type="button" data-detail="${thread.bookKey}">${t("viewListings")}</button>
        </div>
      </article>
    `
    )
    .join("");
  messagesEmpty.hidden = messages.length > 0;
}

function renderCourseOptions() {
  byId("course-options").innerHTML = courses
    .map((course) => `<option value="${course.code}">${course.name}</option>`)
    .join("");
}

function renderDetail(key) {
  const book = getBookByKey(key);
  if (!book) return;
  activeDetailId = key;

  detailCard.innerHTML = `
    <button class="icon-button close-button" type="button" data-close-detail aria-label="${t("closeListing")}">x</button>
    <div class="detail-layout">
      ${coverMarkup(book)}
      <div>
        <p class="eyebrow">${book.course} · ${getCourseName(book.course)}</p>
        <h2>${book.title}</h2>
        <p>${book.author} · ${book.edition}</p>
        <dl class="book-summary detail-summary">
          <div>
            <dt>${t("averagePrice")}</dt>
            <dd>${money(book.averagePrice)}</dd>
          </div>
          <div>
            <dt>${t("averageCondition")}</dt>
            <dd>${book.averageCondition}</dd>
          </div>
          <div>
            <dt>${t("sellerListings")}</dt>
            <dd>${book.listings.length}</dd>
          </div>
        </dl>
        <p class="supporting-text">${listingCountLabel(book.listings.length)} · ${t("offersFrom")} ${money(book.lowestPrice)}.</p>
        <div class="detail-actions">
          ${favoriteButtonMarkup(book.key)}
        </div>
        <div class="seller-list">
          <h3>${t("sellerListings")}</h3>
          ${book.listings
            .map(
              (listing) => `
              <article class="seller-offer">
                <div>
                  <div class="status-row">
                    <strong>${sellerName(listing.seller)}</strong>
                    <span class="status-pill">${money(listing.price)}</span>
                  </div>
                  <div class="seller-line">
                    <span class="badge">${conditionLabel(listing.condition)}</span>
                    <span class="badge">${listing.pickup}</span>
                    ${listing.status ? `<span class="badge">${statusLabel(listing.status)}</span>` : ""}
                    <span class="badge ${listing.verified ? "verified" : ""}">${listing.verified ? t("verifiedSeller") : t("unverifiedSeller")}</span>
                    <span class="badge">${listing.rating.toFixed(1)} ${t("rating")} · ${listing.sales} ${t("sales")}</span>
                  </div>
                  <p>${state.lang === "no" ? listing.noteNo ?? listing.note : listing.note}</p>
                </div>
                <div class="detail-actions">
                  <button class="primary-button" type="button" data-contact="${listing.id}">${t("contact")} ${sellerName(listing.seller)}</button>
                  <button class="secondary-button" type="button" data-toast="${t("savedToast")}">${t("save")}</button>
                  <button class="secondary-button" type="button" data-toast="${t("reportToast")}">${t("report")}</button>
                </div>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  if (!detailDialog.open) detailDialog.showModal();
}

function showContact(id) {
  const listing = listings.find((item) => item.id === id);
  if (!listing) return;
  activeContactListingId = id;
  byId("contact-title").textContent = `${t("contactTitle")} ${sellerName(listing.seller)}`;
  messageTemplate.value = t("contactTemplate")
    .replace("{seller}", sellerName(listing.seller))
    .replace("{title}", listing.title)
    .replace("{course}", listing.course)
    .replace("{pickup}", listing.pickup);
  if (detailDialog.open) detailDialog.close();
  contactDialog.showModal();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function setView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  byId(`${viewName}-view`).classList.add("active");
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === viewName);
  });
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-condition-label]").forEach((element) => {
    element.textContent = conditionLabel(element.dataset.conditionLabel);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelector(".brand").setAttribute("aria-label", t("brandHome"));
  document.querySelector(".top-nav").setAttribute("aria-label", t("primaryNav"));
  document.querySelector(".language-toggle").setAttribute("aria-label", t("language"));
  document.querySelector(".stats-strip").setAttribute("aria-label", t("marketplaceSnapshot"));
  byId("browse-view").setAttribute("aria-label", t("browseBooks"));
  document.querySelector(".filters").setAttribute("aria-label", t("filters"));
  facultyFilter.setAttribute("aria-label", t("facultyLabel"));
  courseFilter.setAttribute("aria-label", t("courseLabel"));
  semesterFilter.setAttribute("aria-label", t("semester"));
  pickupFilter.setAttribute("aria-label", t("pickupAreaLabel"));
  sortSelect.setAttribute("aria-label", t("sortListings"));
  document.querySelector("#contact-dialog .close-button").setAttribute("aria-label", t("closeMessage"));
  searchInput.placeholder = t("searchPlaceholder");
  document.querySelector("input[name='title']").placeholder = t("bookTitlePlaceholder");
  document.querySelector("input[name='author']").placeholder = t("authorPlaceholder");
  document.querySelector("input[name='edition']").placeholder = t("editionPlaceholder");
  document.querySelector("textarea[name='note']").placeholder = t("sellerNotePlaceholder");
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("pensumtorgetLanguage", lang);
  applyStaticTranslations();
  renderFacultyOptions();
  renderCourseFilterOptions();
  renderCourseChips();
  renderCourseOptions();
  renderListings();
  renderFavorites();
  renderDashboard();
  renderIdentity();
  renderMessages();
  if (detailDialog.open && activeDetailId) renderDetail(activeDetailId);
}

function handleRoute() {
  const route = window.location.hash.replace("#", "") || "browse";
  setView(["browse", "sell", "dashboard", "favorites", "messages"].includes(route) ? route : "browse");
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  window.location.hash = "browse";
  renderListings();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  renderListings();
});

courseChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course]");
  if (!button) return;
  state.course = state.course === button.dataset.course ? "" : button.dataset.course;
  courseFilter.value = state.course;
  renderCourseChips();
  renderListings();
});

byId("clear-course").addEventListener("click", () => {
  state.faculty = "all";
  state.course = "";
  state.semester = "all";
  semesterFilter.value = state.semester;
  renderFacultyOptions();
  renderCourseFilterOptions();
  renderCourseChips();
  renderListings();
});

facultyFilter.addEventListener("change", () => {
  state.faculty = facultyFilter.value;
  if (state.course && getCourse(state.course)?.faculty !== state.faculty && state.faculty !== "all") {
    state.course = "";
  }
  renderCourseFilterOptions();
  renderCourseChips();
  renderListings();
});

courseFilter.addEventListener("change", () => {
  state.course = courseFilter.value;
  renderCourseChips();
  renderListings();
});

semesterFilter.addEventListener("change", () => {
  state.semester = semesterFilter.value;
  if (state.course && getCourse(state.course)?.semester !== state.semester && state.semester !== "all") {
    state.course = "";
  }
  renderCourseFilterOptions();
  renderCourseChips();
  renderListings();
});

document.querySelectorAll("input[name='condition']").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) state.conditions.add(checkbox.value);
    else state.conditions.delete(checkbox.value);
    renderListings();
  });
});

maxPrice.addEventListener("input", () => {
  state.maxPrice = Number(maxPrice.value);
  maxPriceOutput.textContent = money(state.maxPrice);
  renderListings();
});

pickupFilter.addEventListener("change", () => {
  state.pickup = pickupFilter.value;
  renderListings();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderListings();
});

grid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const button = event.target.closest("[data-detail]");
  if (button) renderDetail(button.dataset.detail);
});

favoritesGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) renderDetail(detailButton.dataset.detail);
});

messageGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) renderDetail(detailButton.dataset.detail);
});

detailDialog.addEventListener("click", (event) => {
  if (event.target === detailDialog || event.target.closest("[data-close-detail]")) {
    detailDialog.close();
    return;
  }

  const contactButton = event.target.closest("[data-contact]");
  if (contactButton) showContact(contactButton.dataset.contact);

  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const toastButton = event.target.closest("[data-toast]");
  if (toastButton) showToast(toastButton.dataset.toast);
});

contactDialog.addEventListener("close", () => {
  const listing = listings.find((item) => item.id === activeContactListingId);
  if (!listing) return;

  if (contactDialog.returnValue === "sent") {
    createMessageThread(listing, t("messageSentStatus"));
    showToast(t("messageSentToast"));
  }

  if (contactDialog.returnValue === "reserve") {
    listing.status = "Reserved";
    createMessageThread(listing, t("reservationRequested"));
    persistMarketplaceData();
    renderListings();
    renderFavorites();
    renderDashboard();
    showToast(t("reservationToast"));
  }

  activeContactListingId = "";
});

byId("dashboard-grid").addEventListener("click", (event) => {
  const requestDeleteButton = event.target.closest("[data-request-delete-my-listing]");
  if (requestDeleteButton) {
    pendingDeleteListingId = requestDeleteButton.dataset.requestDeleteMyListing;
    renderDashboard();
    return;
  }

  const verifyDeleteButton = event.target.closest("[data-verify-delete-my-listing]");
  if (verifyDeleteButton) {
    deleteMyListing(verifyDeleteButton.dataset.verifyDeleteMyListing);
    return;
  }

  if (event.target.closest("[data-cancel-delete-my-listing]")) {
    pendingDeleteListingId = "";
    renderDashboard();
    return;
  }

  const button = event.target.closest("[data-toast]");
  if (button) showToast(button.dataset.toast);
});

byId("sell-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const newListing = {
    id: `b${listings.length + 1}`,
    course: String(form.get("course")).toUpperCase(),
    title: String(form.get("title")),
    author: String(form.get("author")),
    edition: String(form.get("edition")),
    price: Number(form.get("price")),
    originalPrice: Math.round(Number(form.get("price")) * 1.85),
    condition: String(form.get("condition")),
    pickup: String(form.get("pickup")),
    seller: "You",
    rating: 5,
    sales: 0,
    verified: true,
    posted: t("justNow"),
    color: "#1f5f8b",
    note: String(form.get("note")) || t("noSellerNote")
  };

  listings.unshift(newListing);
  myListings.unshift({
    id: `m${nextMyListingNumber++}`,
    listingId: newListing.id,
    title: newListing.title,
    course: newListing.course,
    price: newListing.price,
    status: "Available",
    views: 0,
    saves: 0
  });
  event.currentTarget.reset();
  state.query = "";
  searchInput.value = "";
  persistMarketplaceData();
  renderListings();
  renderFavorites();
  renderDashboard();
  window.location.hash = "browse";
  showToast(t("listingPublishedToast"));
});

document.querySelector(".language-toggle").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button || button.dataset.lang === state.lang) return;
  setLanguage(button.dataset.lang);
});

window.addEventListener("hashchange", handleRoute);

applyStaticTranslations();
renderFacultyOptions();
renderCourseFilterOptions();
renderCourseChips();
renderCourseOptions();
renderListings();
renderFavorites();
renderDashboard();
renderIdentity();
renderMessages();
handleRoute();
