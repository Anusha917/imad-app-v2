var express = require('express');//to create web servers
var morgan = require('morgan');//to know what requests are coming to server and how we are responding
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
                'article-one':{
                                title:'Article-One || Anusha Bandi',
                                heading:'Article-One',
                                date:'feb 2,2017',
                                content:`  <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>
                                            <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>
                                            <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>`
                            },
                'article-two':{
                                title:'Article-Two || Anusha Bandi',
                                heading:'Article-Two',
                                date:'feb 5,2017',
                                content:`  <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>
                                            <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>`
                              },
                'article-three':{
                                title:'Article-Three || Anusha Bandi',
                                heading:'Article-Three',
                                date:'feb 15,2017',
                                content:`  <p>
                                                This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
                                            </p>`
                }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
             <script type="text/javascript">
             var submit=document.getElementById('submit-btna');
                submit.onclick=function(){
                    //make a request
                    var request=new XMLHttpRequest();
                    
                    request.onreadystatechange=function(){
                      if(request.readyState===XMLHttpRequest.DONE)
                      {
                          //take some action
                          if(request.status===200)
                          {
                                var names=[];
                                //capture a list of names and render it as a list
                                names=request.responseText;
                                names=JSON.parse(names);
                                var list='';
                                for(var i=0;i<names.length;i++)
                                {
                                   list += "<li>" +names[i]+ "</li>";
                                }
                                var ul=document.getElementById('nameslist');
                                ul.innerHTML=list;
                          }
                          //Not done yet
                      }
                    };
                    //make the request
                    request.open('GET','http://anusha917.imad.hasura-app.io/:articleName,true);
                    request.send(null);
                };
             </script>
        </head>
        <body>
            <div class="container">
                 <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
            <hr/>
            <input type="text" id="namea" placeholder="name"></input>
            <input type="submit" id="submit-btna" value="Submit"></input>
            <ul id='nameslist'>
            </ul>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
  counter=counter+1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){//URL:/submit-name?name=XXXXX
    var name=req.query.name;
    
    names.push(name);
    //JSON_javascript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req,res){// :articleName==article-one
//articles[article-one]=={} content object for article one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
