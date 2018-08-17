var plone=document.getElementById("P1Score");
var pltwo=document.getElementById("P2Score");
var plthree=document.getElementById("P3Score");
var plfour=document.getElementById("P4Score");
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
        alert("Player Two Wins! Congratulations!")                                                                                                                                                                                                                                                                                                                                                                                                  
        
        }

    });

    var plthreevar=0;
    document.addEventListener("keypress", function(event){
     var lessee=event.keyCode;
     if(lessee===109){
        plthreevar++;
        plthree.innerHTML=plthreevar;
    
     }
        
        if(plthreevar===100){
            alert("Player Three Wins! Congratulations! ")                                                                                                                                                                                                                                                                                                                                                                                                  
            
            }
    
        });

        var plfourvar=0;
        document.addEventListener("keypress", function(event){
         var lessee=event.keyCode;
         
         if(lessee===122){
            plfourvar++;
            plfour.innerHTML=plfourvar;
       
         }
            
            if(plfourvar===100){
                alert("Player Four Wins! Congratulations!")                                                                                                                                                                                                                                                                                                                                                                                                  
                
                }
        
            });










