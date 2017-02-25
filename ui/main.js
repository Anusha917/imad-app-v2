/*console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML='New Value';

//to move image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,50);
    //img.style.marginLeft='100px';//to move image once
};*///module p5 code
var button=document.getElementById("counter");
button.onclick =function(){
    //make a request to counter endpoint
    //capture the response and store it in a variable
    //render the variable in a correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
}

