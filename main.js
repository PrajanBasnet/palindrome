const word = document.querySelector(".word");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

let myAr = [];
let count = 0;
btn.addEventListener("click", ()=>{
    myAr = word.value;  
    
    for (let i = 0; i < myAr.length; i++) {
        // console.log(`${myAr[i]} ${myAr[myAr.length -i -1]   }`);
        if(myAr[i] === myAr[myAr.length -i -1]){
          count += 1;   
          console.log(count);
          if(count === myAr.length){
              console.log("is a palindrome word " + myAr);
              result.style.color = "green";

                result.innerHTML = myAr + " is a palindrome word";
            }else{
                result.style.color = "red";
                result.innerHTML = "Is not a palinrome word";
                count += 0;
            }
        }else{
            count = 0;
            result.innerHTML = "Is not a palindrome word";
        }

    }
})