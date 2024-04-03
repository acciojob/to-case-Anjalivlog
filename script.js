function toCase(text) {
  // write your code here
	if (str.length === 0) {
        return '-';
    }
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();
    return lowerCase + '-' + upperCase;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
