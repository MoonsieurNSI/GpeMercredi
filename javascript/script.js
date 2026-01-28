
        let titreLuna = document.querySelector(".t1");
        let curseurLuna = document.getElementById("range");
        //console.log(curseurLuna.value);
        curseurLuna.addEventListener("change", function(){
            console.log(curseurLuna.value);
            titreLuna.style.color = "green";
            titreLuna.style.fontSize = `${curseurLuna.value}px`;




});



    let titre = document.querySelector(".t2");
    let titre1 = document.querySelector(".t1");
  
    titre1.addEventListener("click", function(){
            titre1.innerHTML = "titre changé";
            
    });

    //console.log(titre.value);
    
    //let curseur = document.getElementById("range");
    //console.log(curseur.value);
    
    let pression = false;

    let bouton = document.getElementById("btn"); 
    bouton.addEventListener("click", function(){

        if(pression == false)
        {titre.style.color = "red";
        titre.style.fontSize = "50px";
         pression = true;   
        }
        else {
        titre.style.color = "blue";
         pression = false;  
         titre.style.fontSize = "10px"; 
        }

    }); 

         