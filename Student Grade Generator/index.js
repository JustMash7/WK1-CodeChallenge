//Program that prompts user to input students marks
function promptformarks(){
    const input = prompt("Please enter Student's marks");
    const marks = Number(input);
}
//Conditional statements that outputs a grade
function Grade(marks){
    if(marks>=80&&marks<=100){
        console.log('A');
    }
    else if(marks>=60&&marks<=79){
        console.log('B');
    }
    else if(marks>=49&&marks<=59){
        console.log('C');
    }
    else if(marks>=40&&marks<=49){
        console.log('D');
    }
    else if(marks<40){
        console.log('F');
    }
}