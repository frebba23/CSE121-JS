function gpaPoints (grades){
    let gpaPoints = 0;
    switch (grade){
        case "A":
            gpaPoints = 4;
        case "B":
            gpaPoints = 3;
        case "C":
            gpaPoints = 2;
        default:
            gpaPoints = -1;
    }
    return gpaPoints
}

gpaPoints("A"); // returns 3!
gpaPoints("B"); // also returns 3
gpaPoints("C"); // returns -1!
gpaPoints("X"); // returns -1
