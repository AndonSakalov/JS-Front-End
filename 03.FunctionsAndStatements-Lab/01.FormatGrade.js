function solve(grade){
    console.log(GetFormatedGrade(grade));

    function GetFormatedGrade(grade){
        if (grade < 3) {
            return `Fail (${grade})`;
        }else if (grade < 3.50) {
            return `Poor (${grade.toFixed(2)})`;
        }else if (grade < 4.50) {
            return `Good (${grade.toFixed(2)})`;
        }else if (grade < 5.50) {
            return `Very good (${grade.toFixed(2)})`;
        }else if (grade >= 5.50) {
            return `Excellent (${grade.toFixed(2)})`;
        }
    }
}
