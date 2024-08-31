let form1=document.getElementById("form1");
let form2=document.getElementById("form2");
let form3=document.getElementById("form3");


let next1=document.getElementById('Next1');
let next2=document.getElementById('Next2');
let back1=document.getElementById('Back1');
let back2=document.getElementById('Back2');

let progress=document.getElementById('progress')

next1.onclick=function(){
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.width="240px";
}

back1.onclick=function(){
    form1.style.left="40px";
    form2.style.left="450px";
    progress.style.width="120px";
}

next2.onclick=function(){
    form2.style.left="-450px";
    form3.style.left="40px";
    progress.style.width="360px";
}
back2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="450px";
    progress.style.width="240px";
}


//CHATGPT//

// Grabbing form elements
// let form3 = document.getElementById("form3");

let submitButton = form3.querySelector('button[type="button"]'); // Assuming the last button is for submit

submitButton.onclick = function(){
    // Store data from form3
    const firstName = form3.querySelector('input[placeholder="First Name"]').value;
    const lastName = form3.querySelector('input[placeholder="Last Name"]').value;
    const mobile = form3.querySelector('input[placeholder="Mobile No."]').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('mobile', mobile);

    // Redirect to result page
console.log(window.location.href = 'thankyou.html');
}
// \end{code}