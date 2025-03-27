// -- Article overviews for index/home page --
const teHoutaewa = {
  image: 'images/kumara.jpg alt="Holding img"',
  heading: 'Te Houtaewa',
  overview:
    'A foot accustomed to running over roots makes the speediest runner.',
  ahref: 'blog/te-houtaewa-template.html',
};

const HTMLandCSS = {
  image: 'images/classes-vs-ids.jpg alt="Developer considering options"',
  heading: 'HTML and CSS',
  overview: 'Best practices - using classes vs. ids',
  ahref: 'blog/html-css.html',
};

const problemSolving = {
  image: 'images/problem-solving.jpg alt="Equation"',
  heading: 'Problem solving',
  overview: 'Techniques to conquer those pesky problems',
  ahref: 'blog/problem-solving.html',
};

const identity = {
  image: 'images/fingerprint-identity.jpg alt="Fingerprint with questionmark"',
  heading: 'Identity, Values and Strengths Exploration',
  overview: 'A bit about me',
  ahref: 'blog/identity-values.html',
};

const learningPlan = {
  image: 'images/learning-plan.jpg alt="Timetable with butterfly"',
  heading: 'Learning Plan',
  overview: 'My plan of action',
  ahref: 'blog/learning-plan.html',
};

const jsFundamentals = {
  image: 'images/js-icon.jpg alt="Javascript icon"',
  heading: 'JS Fundamentals',
  overview: 'The basics of Javascript',
  ahref: 'blog/javascript-dom.html',
};

const eI = {
  image: 'images/emotional-intelligence.jpg alt="Emotional intelligence"',
  heading: 'Emotional Intelligence',
  overview: 'Emotional intelligence and why it is important',
  ahref: 'blog/emotional-intelligence.html',
};

const teWhare = {
  image: 'images/te-whare-tapa-wha.jpg alt="Te Whare Tapa Wha"',
  heading: 'Te Whare Tapa Wh&#227;',
  overview: 'My wellbeing plan',
  ahref: 'blog/te-whare-tapa-wha.html',
};

const neuroplastic = {
  image: 'images/neuroplasticity.jpg alt="Plastic brain"',
  heading: 'Neuroplasticity',
  overview: 'Looking at the malleability of our brains and the growth mindset',
  ahref: 'blog/neuroplasticity.html',
};

let allArticles = [
  teHoutaewa,
  HTMLandCSS,
  identity,
  learningPlan,
  jsFundamentals,
  eI,
  teWhare,
  neuroplastic,
  problemSolving,
];
let technicalArticles = [HTMLandCSS, problemSolving, jsFundamentals];
let hum;

//Display all articles on loading page
displayArticles(allArticles);

//Event listeners for clicks to filter by technical/all/human skills
// document.getElementById("showAll").
// document.getElementById("showTechnical").
// document.getElementById("showHumanSkills").

//get array of article objects. loop through and add each to article-container

//Takes an array of articles and displays to the article container on home page
function displayArticles(articleArray) {
  let articleContainer = document.getElementById('article-container');
  for (let i = 0; i < articleArray.length; i++) {
    console.log(articleArray[i].image);
    articleContainer.innerHTML +=
      '<div class= "article"> <img class="article-img" src= ' +
      articleArray[i].image +
      '><h1>' +
      articleArray[i].heading +
      '</h1><p>' +
      articleArray[i].overview +
      '</p> <a class="pale-rectangle-link" href="' +
      articleArray[i].ahref +
      '>Read more</a></div>';
  }
}
