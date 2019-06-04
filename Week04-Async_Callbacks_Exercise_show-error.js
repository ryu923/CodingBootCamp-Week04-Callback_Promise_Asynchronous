// showError is a function that takes in a callback function.
// The callback takes one argument, which will become the value in the textarea.
// If the callback returns true, an error will be shown below

// Step 1.  Make a callback function that takes in text as an argument and returns true.
//          Pass the callback into the showError function.
//          Try typing in the textarea to see what happens.
// Step 2.  Make the callback return true if the text is longer than 10 characters.

const callback = (textValue) =>
{
    // Step 1
    // return true;

    // Step 2
    if(textValue.length > 10)
    {
        return true;
    }
};

showError(callback);