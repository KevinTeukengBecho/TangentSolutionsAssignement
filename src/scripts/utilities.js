//functions to evaluate abbreviations================================
var evaluateGender = function (gender) {
    if (gender === "M")
        return "Male";
    else if (gender === "F")
        return "Female";
}

var evaluateRace = function (race) {
    if (race === "B")
        return "Black African";
    else if (race === "C")
        return "Coloured";
    else if (race === "I")
        return "Indian or Asian";
    else if (race === "W")
        return "White";
    else if (race === "N")
        return "None Dominant";
}

var evaluateReview = function (review) {
    if (review === "P")
        return "Perfomance Increase";
    else if (review === "S")
        return "Starting Salary";
    else if (review === "A")
        return "Annual Increase";
    else if (review === "E")
        return "Expectation Review";
}
//===================================================================