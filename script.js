
let darkMode =  () =>{


     primaryColor = 'black';
     secondaryColor = "white" 
     if(primaryColor == 'black' && secondaryColor == 'white'){
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "black";
     }
     else if(primaryColor == 'grey' && secondaryColor == 'black'){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
     }
}