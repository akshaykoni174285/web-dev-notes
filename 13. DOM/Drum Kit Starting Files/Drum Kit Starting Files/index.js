// first of all we want to listen to a event unless it happens and whenever its 
// happens we want to trigger something 

// but what if you wanna add even listener to all the drums 

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){

        alert("i got clicked");
    });
    
};