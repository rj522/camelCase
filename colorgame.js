var numb = 6
var colors = generateRandomColors(numb);
var squares = document.getElementsByClassName("square");
var presentC = izer();
var cod = document.getElementById("co");
var mesd= document.querySelector("#message");
var h1=document.querySelector("h1");
var reb = document.querySelector("#nayaa");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click",function(){
    hard.classList.remove("selected")
    easy.classList.add("selected")
    numb = 3;
    colors = generateRandomColors(numb);
    presentC = izer();
    cod.textContent = presentC.substr(0,3).toUpperCase() + presentC.substr(3, presentC.length);
    for(var i=0; i<squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor=colors[i];}
       else{
           squares[i].style.display="none";
       }
    }
    h1.style.backgroundColor="steelblue";
})
hard.addEventListener("click",function(){
    easy.classList.remove("selected")
    hard.classList.add("selected")
    colors = generateRandomColors(numb);
    presentC = izer();
    cod.textContent = presentC.substr(0,3).toUpperCase() + presentC.substr(3, presentC.length);
    for(var i=0; i<squares.length; i++){
       squares[i].style.backgroundColor=colors[i];}
    h1.style.backgroundColor="steelblue";
})


reb.addEventListener("click", function(){
                     reb.textContent = "New Colors";
                     colors = generateRandomColors(numb);
                     presentC = izer();
                     cod.textContent = presentC.substr(0,3).toUpperCase() + presentC.substr(3, presentC.length);
                     mesd.textContent="";
                     for(var i=0; i<squares.length; i++){
                        squares[i].style.backgroundColor=colors[i];}
                     h1.style.backgroundColor="steelblue";
                     })

cod.textContent = presentC.substr(0,3).toUpperCase() + presentC.substr(3, presentC.length); 

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        var cc = this.style.backgroundColor;
        if (cc == presentC){
            mesd.textContent="Correct";
            reb.textContent = "Play Again?";
            changecolors(cc);
            h1.style.backgroundColor = cc;
        } 
        else{
            this.style.backgroundColor = "#232323";
            mesd.textContent = "Try Again!";
        }
    });
}
function changecolors(color){
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function izer(){
    var sel = Math.floor(Math.random() * colors.length);
    return colors[sel];
}
function generateRandomColors(num){
    var b= [];
    var a = [];
    for(var i = 0; i < num; i++){
        a[i] = new Array;
        for (var j=0; j < 3; j++){
            a[i][j]=Math.floor(Math.random()*256);   
        }
        b[i]="rgb("+a[i][1]+", "+a[i][2]+", "+a[i][2]+")";
    }
    return b;
}