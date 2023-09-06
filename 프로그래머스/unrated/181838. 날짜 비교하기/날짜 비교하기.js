function solution(date1, date2) {
    let answer = 0;
    
    let advance;
    
    const [year1, month1, day1] = date1;
    const [year2, month2, day2] = date2;
    
    if (year1 < year2) {
        answer = 1;
    } else if (year1 > year2) {
        answer = 0;
    } else {
        if (month1 < month2) answer = 1;
        else if (month1 > month2) answer = 0;
        else {
            if(day1 < day2) answer = 1;
            else answer = 0;
        }
    }
    
    return answer;
}