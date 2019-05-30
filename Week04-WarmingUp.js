// Week04 - Warming Up

// Q. Write function removeExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s
    .split('')
    .filter(letter => letter != '!')
    .join('');
};

// or

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

removeExclamationMarks("Hello World!"); // OUTPUT: Hello World