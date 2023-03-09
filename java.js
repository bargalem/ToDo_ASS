 let btn=document.getElementById('sub-btn');//button
 


btn.addEventListener("click",function(){
document.getElementById("error").innerHTML=" ";


    let input=document.getElementById('type-list').value;//input text
    if(input==""){
        document.getElementById("error").innerHTML="Please enter data";
       

    }else{

    let box=document.getElementById("show-list");//ul tag
let li=document.createElement('li');   //create element  li
li.textContent=input;
box.appendChild(li);


let a=document.createElement('button');
 a.textContent='delete';
li.appendChild(a);

    }
 input=document.getElementById('type-list').value="";

btn.style.color="red";
} 
);





let btn2=document.querySelector('ul');
btn2.addEventListener('click',function(e){
    let box=document.getElementById("show-list"); //ul
    let li=e.target.parentNode;
        box.removeChild(li);
        btn.style.color="white";
})


// btn.addEventListener("click",function(){
//     if (btn.click){
// btn.style.color="red";
//     }else  {
//         btn.style.color="";

//     }
// })