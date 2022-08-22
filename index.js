// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
    
}
console.log(saturdayFun('bathe my dog'))

function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
    
}
console.log(mondayWork('work from home'));


let wrapAdjective = function(style="*"){
    return function(adjective="a hard worker"){
        return (`You are ${style}${adjective}${style}!`);
    }
}

