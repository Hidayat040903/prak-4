// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-/,.";

    // TODO: Create a variable for the character set based on selected options
    let availablechar = '';
    if (options.includeUppercase) availablechar += uppercase;
    if (options.includeLowercase) availablechar += Lowercase;
    if (options.includeNumbers) availablechar += numbers;
    if (options.includeSpecialChars) availablechar += SpecialCharsChars;

    if (availablechar === ''){
        return 'select at least one character!!';
    }

    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * availablechar.length);
        password += availablechar[randomindex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output

// BONUS: Implement the copy to clipboard functionality
