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

//counter code

var button=document.getElementById('counter');
button.onclick =function(){
    //make a request to counter endpoint
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
      if(request.readyState==XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status==200)
          {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
          //Not done yet
      }
    };
    
    //make the request
    request.open('GET','http://anusha917.imad.hasura-app.io/counter',true);
    request.send(null);
};

