const incbtn = document.querySelector('#inc');
const decbtn = document.querySelector('#dec');
const clrbtn = document.querySelector('#clr');
const output = document.querySelector(".output");
const errordis = document.querySelector(".error-window");

let count = 0;

output.innerHTML=`<u>Your Current Count is : ${count}</u>`

incbtn.addEventListener("click", () => {
    count++;
    console.log(count);
    output.innerHTML=`<u>Your Current Count is : ${count}</u>`
    errordis.innerText="";
});

decbtn.addEventListener("click", () => {
    if(count>0){
        count--;
        console.log(count);
        output.innerHTML=`<u>Your Current Count is : ${count}</u>`
    }
    else{
    
        errordis.innerText="Error : Cannot go below 0";
    }
});

clrbtn.addEventListener("click", ()=>{
    count=0;
    output.innerHTML=`<u>Your Current Count is : ${count}</u>`
    errordis.innerText="";
})