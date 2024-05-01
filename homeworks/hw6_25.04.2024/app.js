/**
 * Homework 6 Application
 *
 * This application contains various functions and utilities implemented as part of a homework assignment.
 * It includes functions for localization, template manipulation, debounce and throttle, multiline string processing,
 * currying, and more.
 *
 * @version 1.0.0
 * @author [Przemyslaw Krepski]
 */

//Task 1: Quasi-Tagged Templates

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
const language = "fr";
/**
 * Returns translated text based on the provided keys and language.
 * @param {...string} template Keys to translate.
 * @returns {string} Translated text.
 */
function localize(...template) {
  return template.reduce((acc, key) => {
    return translations[language].hasOwnProperty(key)
      ? translations[language][key]
      : "";
  }, "");
}

// Task 2: Advanced Tagged Template

/**
 * Highlights the given keywords in the text template.
 * @param {string} template Text template.
 * @param {string[]} keywords List of keywords to highlight.
 * @returns {string} Text with highlighted keywords.
 */

function highlightKeywords(template, keywords) {
  const parts = template.split(/\$\{\d\}/);
  let result = parts[0];
  keywords.forEach((keyword, index) => {
    result += `<span class='highlight'>${keyword}</span>` + parts[index + 1];
  });
  return result;
}

// Task 3: Multiline Tagged Template

/**
 * Adds line numbering to the given multiline text.
 * @param {TemplateStringsArray} strings Multiline text.
 * @returns {string} Multiline text with line numbering.
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

// Task 4: Implementing Debounce Function

/**
 * Executes a delayed search query.
 * @param {string} query Search query.
 */
function debouncedSearch(query) {
  document.getElementById("debounce").innerText = query;
}
/**
 * Creates a function that delays the execution of the provided function by a specified time.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function debounce(fn, delay) {
  let letTimeout;
  return function (...args) {
    clearTimeout(letTimeout);
    letTimeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

//Task 5: Implementing Throttle Function

/**
 * Displays information about a scroll event.
 * @param {Event} event Scroll event.
 */
function displayThrottle(event) {
  const throttleOutput = document.getElementById("throttled");
  const throttleOutputChild = document.createElement("p");
  throttleOutput.appendChild(throttleOutputChild);
  throttleOutputChild.innerText = `[Log] Scroll event: - Type: ${event.type},Target: ${event.target}, Scroll Y: ${window.scrollY}`;
}
/**
 * Displays information about a scroll event.
 * @param {Event} event Scroll event.
 */
function onScroll(event) {
  console.log("Scroll event:", event);
  displayThrottle(event);
}
/**
 * Calls the provided function with a delay to prevent too frequent calls.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
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
/**
 * Calls the provided function with a delay, but only once if subsequent calls occur before the previous delay completes.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function throttleInput(fn, delay) {
  let flag = false;
  let waitingArgs;
  const timeoutFn = () => {
    if (waitingArgs == null) {
      flag = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFn, delay);
    }
  };
  return (...args) => {
    if (flag) {
      waitingArgs = args;
      return;
    }
    fn(...args);
    flag = true;
    setTimeout(timeoutFn, delay);
  };
}

/**
 * Displays delayed search results.
 * @param {string} query Search query.
 */
function throttledSearch(query) {
  document.getElementById("throttledInput").innerText = query;
}

// Task 6: Currying Function Implementation

/**
 * Multiplies the given numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @param {number} c Third number.
 * @returns {number} Multiplication result.
 */
function multiply(a, b, c) {
  return a * b * c;
}
/**
 * Creates a curried version of the provided function.
 * @param {Function} func Function to be curried.
 * @param {number} arity Number of arguments the function expects.
 * @returns {Function} Curried function.
 */
const curry = (func, arity = func.length) =>
  function curried(...args) {
    if (arity === args.length) {
      return func(...args);
    } else {
      let result = (...newArgs) => curried(...args, ...newArgs);
      return result;
      1;
    }
  };

//Task 6.a: Currying Function Implementation (extended)

/**
 * Creates a curried version of the provided function allowing partial application with placeholders.
 * @param {Function} func Function to be curried.
 * @param {number} arity Number of arguments the function expects.
 * @returns {Function} Curried function.
 */
const curryExt = (func, arity = func.length) =>
  function curried(...args) {
    if (arity === args.length && !args.includes("_")) {
      return func(...args);
    } else {
      return (...newArgs) => {
        const filledArgs = args.map((arg) =>
          arg === "_" ? newArgs.shift() || "_" : arg
        );
        return curried(...filledArgs, ...newArgs);
      };
    }
  };

/**
 * Function handling code execution after the entire document content has loaded.
 * It performs tasks related to localization, text formatting, and event handling.
 * @listens DOMContentLoaded
 */

document.addEventListener("DOMContentLoaded", function () {
  const greeting = "greet";
  const introduction = "intro";
  const localizedGreeting = localize`${greeting}`;
  const localizedIntroduction = localize`${introduction}`;
  const keywords = ["JavaScript", "template", "tagged"];
  const template =
    "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";
  const code = multiline`
      function add(a, b) {
        return a + b;
      }
    `;
  const debouncedSearchHandler = debounce(debouncedSearch, 300);
  const throttledScrollHandler = throttle(onScroll, 1000);
  const throttledInputlHandler = throttleInput(throttledSearch, 1000);
  const curriedMultiply = curry(multiply, 3);
  const extCurried = curryExt(multiply, 3);

  document.getElementById("greet").innerText = localizedGreeting;
  document.getElementById("intro").innerText = localizedIntroduction;
  document.getElementById("task2").innerHTML = highlightKeywords(
    template,
    keywords
  );
  document.getElementById("multiline").innerText = code;
  document.getElementById("search-input").addEventListener("input", (event) => {
    debouncedSearchHandler(event.target.value);
    throttledInputlHandler(event.target.value);
  });
  window.addEventListener("scroll", throttledScrollHandler);
  const step1 = curriedMultiply(2);
  const step2 = step1(3);
  const result = step2(4);
  const resultExt = extCurried("_", 2)(3)(5);
  document.getElementById("currying").innerText = result;
  document.getElementById("curryingExt").innerText = resultExt;
});
