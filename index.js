var num_die1=Math.random();
num_die1=Math.floor(num_die1*6)+1;
var num_die2=Math.random();
num_die2=Math.floor(num_die2*6)+1;
changedieImage(num_die1,num_die2);
result(num_die1,num_die2);
function changedieImage(num_die1,num_die2)
{
 var image_source1="images/"+"dice"+num_die1+".png";
 var image_source2="images/"+"dice"+num_die2+".png";
document.querySelector("#player1 img").setAttribute("src",image_source1);
document.querySelector("#player2 img").setAttribute("src",image_source2);
}
function result(num_die1,num_die2)
{
    var heading=document.querySelector("h1");
    if(num_die1>num_die2)
    {
        heading.textContent="Player 1 wins🚩";
    }
    else if(num_die1===num_die2)
    {
        heading.textContent="Match Draw!";
    }
    else{
        heading.textContent="Player 2 wins🚩";
    }
}
