/**
 * Creates a function that delays the execution of the provided function by a specified time.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function debounce(fn, delay) {
    let letTimeout;                        // zmienna kontrolujaca czas
    return function (...args) {
        clearTimeout(letTimeout);        // usuwa opozninie jesli zaistnialo resetujac licznik
        letTimeout = setTimeout(() => fn(...args), delay); //przypisuje  do zmiennej aby w razie
        // potrzeby skasowac licznik
    };
}

/**
 * Calls the provided function with a delay to prevent too frequent calls.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function throttle(fn, delay) {
    let flag = true;      // Flaga określająca, czy funkcję można ponownie wywołać

    return (...args) => {     // Funkcja zwrotna przyjmująca dowolną liczbę argumentów
        if (flag) {
            fn(...args);    // Wywołuje funkcję z przekazanymi argumentami
            flag = false;   // Ustawia flagę na false, blokując kolejne wywołania funkcji
            setTimeout(() => (flag = true), delay); // Ustawia flagę z powrotem na true po określonym opóźnieniu,
            // umożliwiając ponowne wywołanie funkcji

        }
    };
}

/**
 * Calls the provided function with a delay, but only once if subsequent calls occur before the previous delay completes.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
// Funkcja throttleWithWaitingArguments służy do kontrolowania częstotliwości wywołań funkcji fn,
// ograniczając jej wywołania do określonego opóźnienia. Dodatkowo przechowuje argumenty, które nie mogły
// być przetworzone na raz, i przekazuje je do kolejnego wywołania funkcji.

function throttleWithWaitingArguments(fn, delay) {
    let flag = false; // Flaga określająca, czy funkcję można ponownie wywołać
    let waitingArgs; // Dane, których nie chcemy zgubić pomiędzy wywołaniami

    // Funkcja timeoutFunction jest wywoływana po upływie określonego opóźnienia,
    // aby umożliwić kolejne wywołanie funkcji fn z oczekującymi argumentami.
    const timeoutFunction = () => {
        if (waitingArgs == null) { // Jeśli nie ma oczekujących argumentów, ustaw flagę na false
            flag = false;
        } else { // Jeśli są oczekujące argumenty, wywołaj funkcję z tymi argumentami i ustaw flagę na true
            fn(...waitingArgs);
            waitingArgs = null; // Wyzeruj oczekujące argumenty
            setTimeout(timeoutFunction, delay); // Ustaw nowe opóźnienie
        }
    };

    // Zwraca funkcję zamykającą, która będzie działać jako funkcja throttle'a
    return (...args) => {
        if (flag) { // Jeśli flaga jest ustawiona na true, oznacza to, że poprzednie wywołanie funkcji nie zostało jeszcze zakończone
            waitingArgs = args; // Przechowuje przekazane argumenty do późniejszego wywołania
            return; // Przerywa wykonywanie funkcji
        }
        // Jeśli flaga jest ustawiona na false, to oznacza, że funkcja nie jest obecnie wywoływana
        fn(...args); // Wywołuje funkcję z przekazanymi argumentami
        flag = true; // Ustawia flagę na true, aby wskazać, że funkcja jest obecnie wywoływana
        setTimeout(timeoutFunction, delay); // Ustawia opóźnienie, aby pozwolić na kolejne wywołanie funkcji
    };
}


/**
 * Creates a curried version of the provided function.
 * @param {Function} func Function to be curried.
 * @param {number} arity Number of arguments the function expects.
 * @returns {Function} Curried function.
 */
const curry = (func, arity = func.length) => function curried(...args) {
    if (arity === args.length) { // Jeśli liczba dostarczonych argumentów jest równa oczekiwanej arności funkcji,
        // zwraca wynik funkcji
        return func(...args);
    } else { // W przeciwnym razie zbiera kolejne argumenty i
        // wywołuje funkcję rekurencyjnie po dodaniu ich do listy argumentów
        let result = (...newArgs) => curried(...args, ...newArgs);
        return result;
    }
};


//Task 6.a: Currying Function Implementation (extended)

/**
 * Creates a curried version of the provided function allowing partial application with placeholders.
 * @param {Function} func Function to be curried.
 * @param {number} arity Number of arguments the function expects.
 * @returns {Function} Curried function.
 */
const curryExt = (func, arity = func.length) => function curried(...args) {
    if (arity === args.length && !args.includes("_")) { // jezeli ilosc argumentow sie zgadaz i niema wypelniacza to wywoluje funkcje
        return func(...args);
    } else { // w przeciwnym wypadku zbieram argumenty i zastepuje wypelniacze tymi argumentami i ponownie rekurencyjnie wywoluje funkcje curried
        return (...newArgs) => {
            const filledArgs = args.map((arg) => arg === "_" ? newArgs.shift() || "_" : arg);
            return curried(...filledArgs, ...newArgs);
        };
    }
};


const delayedFunction = debounce(() => {
    console.log("Funkcja wywołana po opóźnieniu");
}, 4000);

// Wywołanie funkcji z opóźnieniem
delayedFunction();

