// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = (arr) => {
    let result = 0

    for (let i = arr.length - 1; i > -1; i--) {
        if (arr.length % 2 === 0) {
            if (i % 2 !== 0) {
                result += arr[i]
            } else {
                if (arr[i] * 2 > 9) {
                  result += (arr[i] * 2) - 9
                } else {
                  result += arr[i] * 2
                };
            };
        } else {
            if (i % 2 === 0) {
                result += arr[i]
            } else {
                if (arr[i] * 2 > 9) {
                  result += (arr[i] * 2) - 9
                } else {
                  result += arr[i] * 2
                };
            };
        };
    };

    if (result % 10 === 0) {
        return true
    } else {
        return false
    };
};

const findInvalidCards = (nestArr) => {
    let invalidCred = []

    for (let j = 0; j < nestArr.length; j++) {
        if (!validateCred(nestArr[j])) {
            invalidCred.push(nestArr[j])
        };
    };

    return invalidCred
};

const idInvalidCardCompanies = (nestArr) => {
    let amex = 0
    let visa = 0
    let mastercard = 0
    let discover = 0
    let invalidCardCompany = []

    for (let k = 0; k < nestArr.length; k++) {
        switch (nestArr[k][0]) {
            case 3:
                amex += 1;
                break;
            case 4:
                visa += 1;
                break;
            case 5:
                mastercard += 1;
                break;
            case 6:
                discover += 1;
                break;
            default:
                console.log(`Company not found, invalid card number ${k + 1} doesn't start with 3, 4, 5 or 6`)
                break;
        };
    };

    if (amex > 0) {
        invalidCardCompany.push("Amex (American Express)")
    };
    if (visa > 0) {
        invalidCardCompany.push("Visa")
    };
    if (mastercard > 0) {
        invalidCardCompany.push("Mastercard")
    };
    if (discover > 0) {
        invalidCardCompany.push("Discover")
    };

    return invalidCardCompany
};

const cardAdder = (string) => {
    if (typeof string !== "string") {
        console.log('I am not a string, please use a string of numbers')
    };

    let newArr = string.split('')
    newArr = newArr.map(Number)
    return newArr
};

const invalidCorrector = (arr) => {
    let fixedArr = []
    let counter = 1

    if ((arr[0] > 6) || (arr[0] < 3)) {
        fixedArr.push(Math.floor(Math.random() * 4) + 3)
    };

    for (let m = 1; m < arr.length; m++) {
        fixedArr.push(arr[m])
    }

    while (!validateCred(fixedArr)) {
        fixedArr[fixedArr.length - counter] += 1
        if (fixedArr[fixedArr.length - counter] === 10) {
            fixedArr[fixedArr.length - counter] -= 1
            counter += 2
        };
    };

    return fixedArr
};