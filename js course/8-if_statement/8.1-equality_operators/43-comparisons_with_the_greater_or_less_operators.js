// we can also use the grater (>) / less (<) / grater and equal (>=) / less and equal (<=) then operatos.

function testGreaterThan(val) {

    if (val >= 100) { // use >= or <= to check over+equal to the value you want. 
        return "equal or over 100"
    }

    if (val > 10) {
        return "over or equal 10"
    }

    return "10 or under"
}

console.log(testGreaterThan(100));