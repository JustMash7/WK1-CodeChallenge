// User prompt
function promptforspeed(){
    const input = prompt("Please enter speed of car");
    const speed = Number(input);
}
//Conditional statements
function checkforspeed(speed){
    const speedlimit =70;
    if(speed<speedlimit){
        console.log('OK');   
    }
    else if(speed>speedlimit){
        console.log(Demerit);
    }
}
//Calculating demerit points
function demerit(){
    let speedlimit = 70;
    const ExcessSpeed= (speed-speedlimit);
    let demerit = Math.floor((ExcessSpeed)/5);
    console.log(demerit);

}
function suspend(){
    if(demerit()>12){
        console.log("license Suspended");
    }
}

