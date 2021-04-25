'use strict' ; 
let username =  prompt('please enter your name ?'); 
console.log(username);

let ans1 =  prompt('where are you from ?'); 
console.log(ans1);

 alert('welcome ' + username + ' from ' + ans1 );

let ans2 = prompt ("are you love jeep cars ??")
while (ans2 !== 'yes') {
  ans2 = prompt ("say yes please")
  console.log(ans2);
  }

let ans3 =  prompt('which ones did you prefer more? '); 
console.log(ans3);

alert(` wooow,  ${ans3}  very nice one.   great job  ${username} `);

document.write("<span>nice , The  " + ans3 + " is the best car </span>");
