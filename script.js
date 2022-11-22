var buttons = document.getElementById("buttons");

var li = buttons.querySelectorAll("li");

var result = document.getElementById("result");

// console.log(li[1].innerHTML);
for(let i=0; i<li.length; i++){
    // console.log(i);
    li[i].addEventListener("click", function(){
        // alert(this.innerHTML);
        if(this.innerHTML == "="){
            result.innerHTML = eval(result.innerHTML);
        }else {

            if(this.innerHTML == "÷"){
                result.innerHTML+=  "/";
            } else if(this.innerHTML == "X"){
                result.innerHTML+= "*";
            }else if(this.innerHTML == "C"){
                result.innerHTML = "";
            }
             else {
                result.innerHTML += this.innerHTML;
            }
           
        }
        
    });
}