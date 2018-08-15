var plone=document.getElementById("P1Score");
var pltwo=document.getElementById("P2Score");
var onebutton=document.getElementById("button1");
var twobutton=document.getElementById("button2");
var plonevar=0;
var container=document.getElementById("container");

document.addEventListener("keypress", function(event){
var Isee= event.keyCode;
if(Isee===97){
    plonevar++;

    plone.innerHTML=plonevar;

}
    
if(plonevar===100){
alert("Player One Wins! Congratulations!");

}

});
var pltwovar=0;
document.addEventListener("keypress", function(event){
 var lessee=event.keyCode;
 if(lessee===108){
    pltwovar++;
    pltwo.innerHTML=pltwovar;

 }
    
    if(pltwovar===100){
        alert("Player Two Wins! Congratulations! (If you see more notifications, ignore them.)")                                                                                                                                                                                                                                                                                                                                                                                                  
        
        }

    });









