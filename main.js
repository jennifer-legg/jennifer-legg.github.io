// -- Article overviews for index/home page --

let allArticles = [
  {
    type: 'example',
    image: 'images/kumara.jpg alt="Kumara"',
    heading: 'Te Houtaewa',
    overview:
      'A foot accustomed to running over roots makes the speediest runner.',
    ahref: 'blog/te-houtaewa-template.html',
    date: new Date(2025, 2, 24),
  },
  {
    type: 'technical',
    image: 'images/classes-vs-ids.jpg alt="Developer considering options"',
    heading: 'HTML and CSS',
    overview: 'Best practices - using classes vs. ids',
    ahref: 'blog/html-css.html',
    date: new Date(2025, 2, 25),
  },
  {
    type: 'humanSkills',
    image:
      'images/fingerprint-identity.jpg alt="Fingerprint with questionmark"',
    heading: 'Identity, Values and Strengths Exploration',
    overview: 'A bit about me',
    ahref: 'blog/identity-values.html',
    date: new Date(2025, 2, 26),
  },
  {
    type: 'humanSkills',
    image: 'images/learning-plan.jpg alt="Timetable with butterfly"',
    heading: 'Learning Plan',
    overview: 'My plan of action',
    ahref: 'blog/learning-plan.html',
    date: new Date(2025, 2, 26),
  },
  {
    type: 'technical',
    image: 'images/js-icon.jpg alt="Javascript icon"',
    heading: 'JS Fundamentals',
    overview: 'The basics of Javascript',
    ahref: 'blog/javascript-dom.html',
    date: new Date(2025, 3, 8),
  },
  {
    type: 'humanSkills',
    image: 'images/emotional-intelligence.jpg alt="Emotional intelligence"',
    heading: 'Emotional Intelligence',
    overview: 'Emotional intelligence and why it is important',
    ahref: 'blog/emotional-intelligence.html',
    date: new Date(2025, 3, 16),
  },
  {
    type: 'humanSkills',
    image: 'images/te-whare-tapa-wha.jpg alt="Te Whare Tapa Wha"',
    heading: 'Te Whare Tapa Wh&#227;',
    overview: 'My wellbeing plan',
    ahref: 'blog/te-whare-tapa-wha.html',
    date: new Date(2025, 3, 25),
  },
  {
    type: 'humanSkills',
    image: 'images/neuroplasticity.jpg alt="Plastic brain"',
    heading: 'Neuroplasticity',
    overview:
      'Looking at the malleability of our brains and the growth mindset',
    ahref: 'blog/neuroplasticity.html',
    date: new Date(2024, 3, 25),
  },
  {
    type: 'technical',
    image: 'images/problem-solving.jpg alt="Equation"',
    heading: 'Problem solving',
    overview: 'Techniques to conquer those pesky problems',
    ahref: 'blog/problem-solving.html',
    date: new Date(2025, 3, 25),
  },
];

//Display all articles and recent posts when loading home/index page
displayArticles(allArticles);
displayRecentPosts(sortByDate(allArticles));

//--Filter for article overview--//

//Event listeners for clicks to filter by technical/all/human skills
document.getElementById('showAll').addEventListener('click', () => {
  displayArticles(filterArticlesByType('all'));
});
document.getElementById('showTechnical').addEventListener('click', () => {
  displayArticles(filterArticlesByType('technical'));
});
document.getElementById('showHumanSkills').addEventListener('click', () => {
  displayArticles(filterArticlesByType('humanSkills'));
});

//Filters array by type of article
function filterArticlesByType(articleType) {
  if (articleType === 'all') {
    return allArticles;
  } else if (articleType === 'technical') {
    return allArticles.filter((article) => article.type === 'technical');
  } else if (articleType === 'humanSkills') {
    return allArticles.filter((article) => article.type === 'humanSkills');
  }
}

//Takes an array of articles and displays to the article container on home page
function displayArticles(articleArray) {
  let articleContainer = document.getElementById('article-container');
  articleContainer.innerHTML = '';
  for (let i = 0; i < articleArray.length; i++) {
    articleContainer.innerHTML +=
      '<div class= "article"> <img class="article-img" src= ' +
      articleArray[i].image +
      '><h1>' +
      articleArray[i].heading +
      '</h1><p><em>' +
      articleArray[i].date.toDateString() +
      '</em><p>' +
      articleArray[i].overview +
      '</p> <a class="pale-rectangle-link" href=' +
      articleArray[i].ahref +
      '>Read more</a></div>';
  }
}

//--Functions to add article names to recent posts in date order--//

//Function to sort posts by date and add to most recent posts,
// return array of most recent 5 articles
function sortByDate(articleArray) {
  return articleArray
    .toSorted((past, recent) => recent.date.getTime() - past.date.getTime())
    .slice(0, 5);
}

//Display article array within list in top posts
function displayRecentPosts(articleArray) {
  for (let i = 0; i < articleArray.length; i++) {
    document.getElementById('posts-by-date').innerHTML +=
      '<li><em>' +
      articleArray[i].date.toDateString() +
      '</em></br><a href=' +
      articleArray[i].ahref +
      '>' +
      articleArray[i].heading +
      '</a></li>';
  }
}
