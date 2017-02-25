console.log('Loaded!');

var element=document.getElementById("main-text");

element.innerHTML="New Value";

//to move image
var img=document.getElementById("madi");
var marginLeft=0;
//function moveRight(){
   moveLeft=moveLeft+10;
    img.style.moveLeft=moveLeft+'px';
}

img.onClick=function(){
    //var interval=setInterval(moveRight,100);
    img.style.marginLeft='100px';
}