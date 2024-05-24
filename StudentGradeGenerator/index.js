// writting functions
function studentMarks(marks){
if (marks > 79){
    return 'A'
}else if(marks >= 60 && marks <= 79){
    return 'B'
}else if (marks >= 49 && marks <= 59){
    return 'C'
}else if(marks >= 40 && marks <= 49){
    return 'D'
}else if(marks < 40){
    return 'E'
}
    
    
}

const studentMarks = prompts("Enter student marks(between 0 and 100);")
if(!isNaN(studentMarks) && studentMarks <= 100 && studentMarks > 0){
    console.log(grade)
}else {
    console.log('invalid input,input a number between 0 and 100')
    
}