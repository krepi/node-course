//task 1

const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

/**
 *
 * @param {*} strings
 * @param  {...any} keys
 * @returns
 */
function localize(strings, ...keys) {
  return translations[language][keys];
}

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

//task 2

const keywords = ["JavaScript", "template", "tagged"];
const template =
  "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

/**
 *
 * @param {String} template to be returned with injected values
 * @param {Array} keywords array with values to be injected
 * @returns {String} template literal created from given template and keywords to inject
 */
function highlightKeywords(template, keywords) {
  const parts = template.split(/\$\{\d\}/);
  let result = parts[0];
  keywords.forEach((keyword, index) => {
    result += `<span class='highlight'>${keyword}</span>` + parts[index + 1];
  });

  return result;
}

const highlighted = highlightKeywords(template, keywords);
console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

// Task 3:
/**
 * Display given multiline string with line/row numeration added
 * @param {string} strings - string given to display with added numbers
 * @returns
 */
function multiline(strings) {
  const inputString = strings[0];
  const lines = inputString.split("\n");
  const numberedLines = lines
    .map((line, index) => {
      if (line !== "") {
        return `${index} ${line}`;
      }
    })
    .filter((line) => line !== undefined);
  return numberedLines.join("\n");
}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"

//Task 4:
function debouncedSearch(query) {
  // Perform search operation with the query
  console.log("Searching for:", query);
}
function debounce(fn, delay) {
  let letTimeout;
  return function (...args) {
    clearTimeout(letTimeout);
    letTimeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", (event) => {
  debouncedSearchHandler(event.target.value);
});

//task 5:

function onScroll(event) {
  // Handle scroll event
  console.log("Scroll event:", event);
}

function throttle(fn, delay) {
  let flag = true;
  return (...args) => {
    if (flag) {
      fn(...args);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);

// const greet = document.getElementById("greet");
// const intro = document.getElementById("intro");
// greet.innerText = localizedGreeting;
// intro.innerText = localizedIntroduction;

// const task2 = document.getElementById("task2");
// task2.innerHTML = highlighted;
