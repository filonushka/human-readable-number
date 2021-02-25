module.exports = function toReadable(number) {
    const num = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const dozens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let arr = number.toString().split("");
    let i = arr.length;
    if (i === 1) {
        if (number === 0) {
            return "zero";
        } else {
            return num[number];
        }
    }

    if (i === 2) {
        if (number < 21) {
            return dozens[number];
        } else {
            return (dozens[+arr[0] * 10] + " " + num[+arr[1]]).trim();
        }
    }

    if (i === 3) {
        if (+arr[1] === 0 && +arr[2] === 0) {
            return (num[+arr[0]] + " hundred ").trim();
        } else if (+arr[1] === 0) {
            return (num[+arr[0]] + " hundred " + num[+arr[2]]).trim();
        } else if (+arr[1] === 1) {
            return (
                num[+arr[0]] +
                " hundred " +
                dozens[+(arr[1] + arr[2])]
            ).trim();
        } else {
            return (
                num[+arr[0]] +
                " hundred " +
                dozens[+arr[1] * 10] +
                " " +
                num[+arr[2]]
            ).trim();
        }
    }
};
