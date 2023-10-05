function solution(my_string) {
  let num_arr = [];
  
  for (let i = 0; i < my_string.length; i++) {
    let num_str = "";
      
    while (!isNaN(my_string[i])) {
      num_str += my_string[i];
        i++;
    }
    
    if (num_str) num_arr.push(+num_str)
  }

  return num_arr.reduce((p, c) => p + c, 0);
}