//leap  year checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = prompt("Enter a year:");
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


//ticket priciing 
function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
const age = prompt("Enter your age:");
const ticketPrice = calculateTicketPrice(age);
console.log(`The price of your movie ticket is $${ticketPrice}.`);

//recursion

function fibonacci(n) {
    if (n <= 0) {
        return "Invalid input. Please enter a positive integer.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = prompt("Enter a positive integer (n) to get the nth Fibonacci number:");
const result = fibonacci(parseInt(n));
console.log(`The ${n}th Fibonacci number is: ${result}`);


    //palindrome checker

    function isPalindrome(s) {
        s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
        if (s.length <= 1) {
            return true;
        } else if (s[0] !== s[s.length - 1]) {
            return false;
        } else {
            return isPalindrome(s.substring(1, s.length - 1));
        }
    }
    
    // Example usage:
    const inputString = prompt("Enter a string to check if it's a palindrome:");
    if (isPalindrome(inputString)) {
        console.log(`'${inputString}' is a palindrome.`);
    } else {
        console.log(`'${inputString}' is not a palindrome.`);
    }
    

