const add = (a, b) => typeof a !== 'number' || typeof b !== 'number' ? null : a + b;

const toCamelCase = (text) => {
    if (!text) return null;
    let singleWords = text.split(/[.\*+-/_]/);
    let camelCase = '';

    singleWords = singleWords.filter(word => (word != ''));
    singleWords.forEach( (word, i) => {
        if (i === 0) {
            word = word.toLowerCase();
            camelCase += word;
        } else {
            let lowerCaseWord = word.toLowerCase();
            word = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
            camelCase += word;
        }
    });
    return camelCase;
}

toCamelCase('')

module.exports = {
    add,
    toCamelCase
};