class ArrayLibrary {
  // Task 1: Advanced Array Filtering
  /**
   *
   * @param {*} array
   * @param {*} callback
   * @returns
   */
  static customFilterUnique(array, callback) {
    const uniqueResults = new Map();
    for (const item of array) {
      const key = callback(item);
      if (!uniqueResults.has(key)) {
        uniqueResults.set(key, item);
      }
    }
    return Array.from(uniqueResults.values());
  }

  // Task 2: Array Chunking
  /**
   *
   * @param {*} array array given to separate
   * @param {*} chunk lenght of separated part
   * @returns {Array} array of arrays with separated parts
   */
  static chunkArray(array, chunk) {
    let chunks = [];
    for (let i = 0; i < array.length; i += chunk) {
      chunks.push(array.slice(i, i + chunk));
    }
    return chunks;
  }
  //Task 3: Array Shuffling
  /**
   * As a shuffler was used  Fisher-Yates algorythm 
   * @param {Array} array array given to shuffle
   * @returns {Array} shuffled array
   */
  static customShuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  //Task 4: Array Intersection and Union
  /**
   *
   * @param {*} arrayOne
   * @param {*} arrayTwo
   */
  static getArrayIntersection(arrayOne, arrayTwo) {
    const set = new Set(arrayTwo);
    return arrayOne.filter((x) => set.has(x));
  }
  /**
   *
   * @param {*} arrayOne
   * @param {*} arrayTwo
   */
  static getArrayUnion(arrayOne, arrayTwo) {
    const set = new Set([...arrayOne, ...arrayTwo]);
    return Array.from(set);
  }
  //Task 5: Array Performance Analysis
  /**
   *
   * @param {*} array
   * @param {*} fn
   */
  static measureArrayPerformance(fn, args) {
    let t1 = performance.now();
    fn(...args);
    let t2 = performance.now();
    return `Time elapsed: ${(t2 - t1) / 1000}`;
  }
}

module.exports = ArrayLibrary;
