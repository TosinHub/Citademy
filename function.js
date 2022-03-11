
        //JAVASCRIPT FUNCTIONS
        var a = 54
        var b = 9
        var c  = a + b

        var r = 45
        var y = 6
        var j = r + y

        //console.log(j)

function sumOperator(no1,no2,no3){
    return no1 + no2 + no3

}

  // console.log(sumOperator(3,5)) 
   //console.log(sumOperator(54,5,7))
  // console.log(sumOperator(5,99))


  function subOperator(no1,no2){
    return no1 - no2

}

//console.log(subOperator(90,5))


function divOperator(no1,no2){
    return no1 / no2 

}

//console.log(divOperator(45,7))


function operation (op,no1,no2){
    if(op == "add"){   // == comparison operator
        var ans = no1 + no2
    }else if(op == "sub"){
        var ans = no1 - no2
    }else if( op =="div"){
        var ans = no1 / no2
    }else if(op == "mult"){
        var ans = no1 * no2
    }

    return ans
}

console.log(operation("add", 5,28))
console.log(operation("sub", 7, 9))
console.log(operation("div", 34,8))
console.log(operation("mult", 3,8))


//Write a function that perform area of a triange and rectangle
/*
    1/2 * b * h

    l * b
*/

//sun   SuN Sun suN 
