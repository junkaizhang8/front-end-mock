const dataList = [
  {
    type: "person",
    firstname: "Psyche",
    lastname: "Rubena",
    age: 21,
    status: "Active",
    sex: "Female",
    avatar: "2-f.jpeg",
  },
  {
    type: "place",
    name: "Pott Shrigley",
    region: "England",
    avatar: "England.png",
    longitude: "53.309",
    latitude: "-2.084",
  },
  {
    type: "quote",
    title: "The Two Towers",
    description:
      "There is some good in this world, and it\u2019s worth fighting for.",
    author: "J.R.R. Tolkien",
    avatar: "j-r-r-tolkien.jpg",
  },
  {
    type: "person",
    firstname: "Heriberto",
    lastname: "Othman",
    age: 41,
    status: "Active",
    sex: "Male",
    avatar: "1-m.jpeg",
  },
  {
    type: "place",
    name: "Valle de Banderas",
    region: "Mexico",
    avatar: "Mexico.png",
    longitude: "20.8",
    latitude: "-105.233333",
  },
  {
    type: "quote",
    title: "The Little Prince",
    description:
      "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exup\u00E9ry",
    avatar: "Antoine-de-Saint-Exupery.jpg",
  },
  {
    type: "person",
    firstname: "Jarlath",
    lastname: "Katarina",
    age: 37,
    status: "Active",
    sex: "Male",
    avatar: "3-m.jpeg",
  },
  {
    type: "place",
    name: "Ingwiller",
    region: "France",
    avatar: "France.png",
    longitude: "48.87",
    latitude: "7.48",
  },
  {
    type: "quote",
    title: "Jane Eyre",
    description:
      "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.",
    author: "Charlotte Bront\u00EB",
    avatar: "charlotte-bronte.jpg",
  },
  {
    type: "person",
    firstname: "Telmo",
    lastname: "Emmy",
    age: 42,
    status: "Active",
    sex: "Male",
    avatar: "4-m.jpeg",
  },
  {
    type: "place",
    name: "Paulsstadt",
    region: "Germany",
    avatar: "Germany.png",
    longitude: "53.632756",
    latitude: "11.404299",
  },
  {
    type: "quote",
    title: "A Tale of Two Cities",
    description:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    author: "Charles Dickens",
    avatar: "Charles-Dickens.jpg",
  },
  {
    type: "person",
    firstname: "Osberht",
    lastname: "Fearghas",
    age: 55,
    status: "Active",
    sex: "Male",
    avatar: "12-m.jpeg",
  },
  {
    type: "place",
    name: "Wanderup",
    region: "Germany",
    avatar: "Germany.png",
    longitude: "54.666667",
    latitude: "9.316667",
  },
  {
    type: "quote",
    title: "The Bell Jar",
    description:
      "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
    author: "Sylvia Plath",
    avatar: "sylvia-plath.jpg",
  },
  {
    type: "person",
    firstname: "Aegle",
    lastname: "Galaad",
    age: 31,
    status: "Active",
    sex: "Female",
    avatar: "5-f.jpeg",
  },
  {
    type: "place",
    name: "Yasinovataya",
    region: "Ukraine",
    avatar: "Ukraine.png",
    longitude: "48.127778",
    latitude: "37.8625",
  },
  {
    type: "quote",
    title: "Beloved",
    description: "Love is or it ain\u2019t. Thin love ain\u2019t love at all.",
    author: "Toni Morrison",
    avatar: "toni-morrison.jpg",
  },
  {
    type: "person",
    firstname: "Gautbert",
    lastname: "Anais",
    age: 27,
    status: "Active",
    sex: "Male",
    avatar: "14-m.jpeg",
  },
  {
    type: "place",
    name: "Lamstedt",
    region: "Germany",
    avatar: "Germany.png",
    longitude: "53.637778",
    latitude: "9.096667",
  },
  {
    type: "quote",
    title: "The Perks of Being a Wallflower",
    description: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
    avatar: "stephen-chbosky.jpg",
  },
  {
    type: "person",
    firstname: "Kamila",
    lastname: "Despoina",
    age: 54,
    status: "Active",
    sex: "Female",
    avatar: "6-f.jpeg",
  },
  {
    type: "place",
    name: "Danghara",
    region: "Tajikistan",
    avatar: "Tajikistan.png",
    longitude: "38.098333",
    latitude: "69.346667",
  },
  {
    type: "quote",
    title: "The Great Gatsby",
    description:
      "And so we beat on, boats against the current, borne back ceaselessly into the past.",
    author: "F. Scott Fitzgerald",
    avatar: "f-scott-fitzgerald.jpg",
  },
  {
    type: "person",
    firstname: "Bonaventure",
    lastname: "Terenti",
    age: 38,
    status: "Active",
    sex: "Female",
    avatar: "7-f.jpeg",
  },
  {
    type: "place",
    name: "Santa Severina",
    region: "Italy",
    avatar: "Italy.png",
    longitude: "39.15",
    latitude: "16.916667",
  },
  {
    type: "quote",
    title: "Velveteen Rabbit",
    description:
      "Generally, by the time you are Real, most of your hair has been loved off, and your eyes drop out and you get loose in the joints and very shabby. But these things don\u2019t matter at all, because once you are Real you can\u2019t be ugly, except to people who don\u2019t understand.",
    author: "Margery Williams",
    avatar: "Margery-Williams.jpg",
  },
  {
    type: "person",
    firstname: "Alcina",
    lastname: "Donna",
    age: 43,
    status: "Active",
    sex: "Female",
    avatar: "8-f.jpeg",
  },
  {
    type: "place",
    name: "Spring Valley",
    region: "United States",
    avatar: "United-States.png",
    longitude: "36.1125",
    latitude: "-115.250278",
  },
  {
    type: "quote",
    title: "The Grapes of Wrath",
    description:
      "Ever\u2019body\u2019s askin\u2019 that. \u2018What we comin\u2019 to?\u2019 Seems to me we don\u2019t never come to nothin\u2019. Always on the way.",
    author: "John Steinbeck",
    avatar: "john-steinbeck.jpg",
  },
  {
    type: "person",
    firstname: "Caroline",
    lastname: "Viktoras",
    age: 36,
    status: "Active",
    sex: "Female",
    avatar: "9-f.jpeg",
  },
  {
    type: "place",
    name: "Midway",
    region: "United States",
    avatar: "United-States.png",
    longitude: "30.494878",
    latitude: "-84.46259",
  },
  {
    type: "quote",
    title: "Wuthering Heights",
    description: "Whatever our souls are made of, his and mine are the same.",
    author: "Emily Bront\u00EB",
    avatar: "emily-bronte.jpg",
  },
  {
    type: "person",
    firstname: "Kazimiera",
    lastname: "Yafa",
    age: 39,
    status: "Active",
    sex: "Female",
    avatar: "10-f.jpeg",
  },
  {
    type: "place",
    name: "Macerata",
    region: "Italy",
    avatar: "Italy.png",
    longitude: "43.300278",
    latitude: "13.453333",
  },
  {
    type: "quote",
    title: "Their Eyes Were Watching God",
    description: "There are years that ask questions and years that answer.",
    author: "Zora Neale Hurston",
    avatar: "zora-neale-hurston.jpg",
  },
  {
    type: "person",
    firstname: "Asmundr",
    lastname: "Kenneth",
    age: 21,
    status: "Active",
    sex: "Male",
    avatar: "15-m.jpeg",
  },
  {
    type: "place",
    name: "Villa del Rey",
    region: "Spain",
    avatar: "Spain.png",
    longitude: "39.65",
    latitude: "-6.816667",
  },
  {
    type: "quote",
    title: "Little Women",
    description:
      "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
    avatar: "louisa-may-alcott.jpg",
  },
  {
    type: "person",
    firstname: "Prabhu",
    lastname: "Agnes",
    age: 26,
    status: "Active",
    sex: "Female",
    avatar: "11-f.jpeg",
  },
  {
    type: "place",
    name: "Cirue\u00F1a",
    region: "Spain",
    avatar: "Spain.png",
    longitude: "42.411111",
    latitude: "-2.895833",
  },
  {
    type: "quote",
    title: "Anna Karenina",
    description:
      "All happy families are alike; each unhappy family is unhappy in its own way.",
    author: "Leo Tolstoy",
    avatar: "leotolstoy.jpg",
  },
  {
    type: "person",
    firstname: "Sanya",
    lastname: "Rodrigo",
    age: 26,
    status: "Active",
    sex: "Female",
    avatar: "13-f.jpeg",
  },
  {
    type: "place",
    name: "Ostrowy",
    region: "Poland",
    avatar: "Poland.png",
    latitude: "52.303611",
    longitude: "19.161667",
  },
  {
    type: "quote",
    title: "Kafka on the Shore",
    description:
      "Memories warm you up from the inside. But they also tear you apart.",
    author: "Haruki Murakami",
    avatar: "haruki-murakami.jpg",
  },
  {
    type: "person",
    firstname: "Aibinn",
    lastname: "Tansy",
    age: 30,
    status: "Active",
    sex: "Male",
    avatar: "16-m.jpeg",
  },
  {
    type: "place",
    name: "Berbesti",
    region: "Romania",
    avatar: "Romania.png",
    longitude: "44.988056",
    latitude: "23.868333",
  },
  {
    type: "quote",
    title: "Les Mis\u00E9rables",
    description: "It is nothing to die; it is dreadful not to live.",
    author: "Victor Hugo",
    avatar: "Victor-Hugo.jpg",
  },
  {
    type: "person",
    firstname: "Felicius",
    lastname: "Ramchandra",
    age: 38,
    status: "Active",
    sex: "Male",
    avatar: "17-m.jpeg",
  },
  {
    type: "place",
    name: "Sales Oliveira",
    region: "Brazil",
    avatar: "Brazil.png",
    longitude: "-20.771944",
    latitude: "-47.838056",
  },
  {
    type: "quote",
    title: "Nineteen Eighty-Four",
    description:
      "Who controls the past controls the future. Who controls the present controls the past.",
    author: "George Orwell",
    avatar: "george-orwell.jpg",
  },
  {
    type: "person",
    firstname: "Anielka",
    lastname: "S\u00E9bastienne",
    age: 47,
    status: "Active",
    sex: "Female",
    avatar: "19-f.jpeg",
  },
  {
    type: "place",
    name: "Dunaivtsi",
    region: "Ukraine",
    avatar: "Ukraine.png",
    longitude: "48.889444",
    latitude: "26.856944",
  },
  {
    type: "quote",
    title: "Invisible Man",
    description:
      "Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.",
    author: "Ralph Ellison",
    avatar: "ralph-ellison.jpg",
  },
  {
    type: "person",
    firstname: "Floriano",
    lastname: "Abaddon",
    age: 44,
    status: "Active",
    sex: "Male",
    avatar: "18-m.jpeg",
  },
  {
    type: "place",
    name: "Kishapu",
    region: "Tanzania",
    avatar: "Tanzania.png",
    longitude: "-3.731",
    latitude: "33.8",
  },
  {
    type: "quote",
    title: "Rebecca",
    description: "Last night I dreamt I went to Manderley again.",
    author: "Daphne du Maurier",
    avatar: "daphne-du-maurier.jpg",
  },
  {
    type: "person",
    firstname: "Tsubame",
    lastname: "Imani",
    age: 24,
    status: "Active",
    sex: "Male",
    avatar: "20-m.jpeg",
  },
  {
    type: "place",
    name: "Buddenstedt",
    region: "Germany",
    avatar: "Germany.png",
    longitude: "52.166667",
    latitude: "11",
  },
  {
    type: "quote",
    title: "Frankenstein",
    description: "Beware; for I am fearless, and therefore powerful.",
    author: "Mary Shelley",
    avatar: "mary-shelley.jpg",
  },
];

const inputField = document.getElementById("inputField");
let selectedSuggestion = null;
let suggestions = [];

const getNumOfSuggestions = () => { return (suggestions) ? suggestions.length : 0 };

/*
 * Backtrack to the search page.
 */
const back = () => {
  const searchContainer = document.getElementById("searchContainer");
  const info = document.getElementById("info");
  const tag = document.getElementById("tag");

  searchContainer.style.display = "flex";
  info.style.display = "none";
  tag.style.display = "none";
};

/*
 * Display information about the selected suggestion provided by the id on the page.
 */
const displaySelectedSuggestion = (id) => {
  const searchContainer = document.getElementById("searchContainer");
  const info = document.getElementById("info");
  const tag = document.getElementById("tag");

  searchContainer.style.display = "none";
  info.style.display = "flex";
  tag.style.display = "flex";

  let DOMString = "";

  Object.keys(suggestions[id].obj).forEach((key) => {
    if (key === "type" || key === "avatar") return; // No existing images for avatars so do nothing for now

    const keyUpper = key.toUpperCase();
    
    if (key === "title" || key === "name" || key === "firstname" || key === "lastname") {
      DOMString += `
      <div class="attr">
        <div class="attr-name attr-name-sm">${keyUpper}</div>
        <div class="attr-value attr-value-sm text-bold">${suggestions[id].obj[key]}</div></div>`
    } else {
      DOMString += `
      <div class="attr">
        <div class="attr-name attr-name-sm">${keyUpper}</div>
        <div class="attr-value attr-value-sm">${suggestions[id].obj[key]}</div></div>`
    }
  });

  info.innerHTML = DOMString;
  tag.innerHTML = `<p class="tagname tagname-sm">${suggestions[id].suggestionName}</p>`;
};

/* Return a DOM element object for a suggestion with the strings suggestionName and query.
 * obj is the object containing suggestionName and other data that can be displayed when
 * selected.
 *
 * Precondition: query.toLowerCase() is substring of suggestionName.toLowerCase()
 */
const createSuggestion = (obj, suggestionName, query) => {
  const suggestionNameLower = suggestionName.toLowerCase();
  const queryLower = query.toLowerCase();

  const index = suggestionNameLower.indexOf(queryLower);
  const numOfSuggestions = getNumOfSuggestions();
  const DOM = `
  <div class="suggestion suggestion-sm flex-row" onclick="displaySelectedSuggestion(${numOfSuggestions})">
    <p class="row-text">${suggestionName.slice(
      0,
      index
    )}<b>${suggestionName.slice(
    index,
    index + query.length
  )}</b>${suggestionName.slice(index + query.length)}</p></div>
  `;

  suggestions.push({
    obj: obj,
    suggestionName: suggestionName,
  });

  return DOM;
};

inputField.addEventListener("input", () => {
  const query = inputField.value;
  const suggestionsList = document.getElementById("suggestions");

  suggestions = [];

  if (!query || query.length < 4) {
    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "none";
    return;
  }

  const queryLower = query.toLowerCase();
  let DOMString = "";

  for (const obj of dataList) {
    if (obj.title && obj.title.toLowerCase().includes(queryLower)) {
      DOMString += createSuggestion(obj, obj.title, query);
    } else if (obj.name && obj.name.toLowerCase().includes(queryLower)) {
      DOMString += createSuggestion(obj, obj.name, query);
    } else if (
      obj.firstname &&
      obj.lastname &&
      [obj.firstname, obj.lastname].join(" ").toLowerCase().includes(queryLower)
    ) {
      DOMString += createSuggestion(
        obj,
        [obj.firstname, obj.lastname].join(" "),
        query
      );
    }
  }

  if (DOMString) {
    DOMString =
      '<div class="results-row results-row-sm flex-row"><p class="row-text">RESULTS</p></div>' + DOMString;
  }

  suggestionsList.innerHTML = DOMString;
  suggestionsList.style.display = "flex";
  suggestionsList.style.flexDirection = "column";
});
