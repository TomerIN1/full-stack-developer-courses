// this is a summary for if statements. 
// here we have an array, and a small table.
// in the golf game there is a par. which means the average number of strokes you're supposed to use to get the ball into the hole. 
// so, depending on how far above or below par your stokes are, there's a different nickname.  
// write a function that gets 2 params a number and an array. 
// the function needs to return the array value based on the number value. 
// here is the roles:

/*
strokes      return 
1            "hole-in-one!"
<= par - 2   "eagle"
par - 1      "birdie"
par          "par"
par + 1      "bogey"
par + 2      "double bogey"
>= par + 3   "go home"

*/

var names = ['hole-in-one','egale','birdie','par','bogey','double-bogey','go-home']

function golfScore(par, strokes){
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes <= par - 1){
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes == par + 3){
        return names[6]
    }
}

// check function
console.log(golfScore(5,4));