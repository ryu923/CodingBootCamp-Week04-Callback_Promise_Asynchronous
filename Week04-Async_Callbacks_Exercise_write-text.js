// writeText is a function that takes in a callback function.
// The callback takes one argument, which will become the value in the textarea.
// Whatever the callback returns will be written below the textarea.

// Step 1.  Make the callback take in text as an argument and return the same text.
//          Pass the callback into the writeText function.
//          Try typing in the textarea to see what happens.
// Step 2. Make the callback return the text with all the letters uppercase. Try it out again.
// Step 3. Make the callback return the text in reverse and with all the letters uppercase.

const callback = (textValue) => {
    // Write your code here!
    
    // Step 1
    // return textValue;

    // Step 2
    // var textValueUpperCase = textValue.toUpperCase();
    // return textValueUpperCase;

    // Step 3
    var textValueUpperCase = textValue.toUpperCase();
    var textValueSplit = textValueUpperCase.split("");
    var textValueReverse = textValueSplit.reverse();
    var textValueJoin = textValueReverse.join("");
    return textValueJoin;
};

writeText(callback);