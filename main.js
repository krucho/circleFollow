// Listeners
//document.body.addEventListener('mousemove', onMouseMove);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('keydown', test); //window o document funciona keydown

function test(event){
   if(event.keyCode == '37'){//Tecla con la flecha hacia la izquierda   
      //console.log("changeColor");
      changeColor();
      }
   if(event.keyCode == '39'){ //Tecla con la flecha hacia la Derecha          
      //alert('Bien echo =)');
      console.log("->");
      changeColor();
   }
}

function changeColor(){
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

document.querySelector('#circularCursorB').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}


const circle = document.querySelector('#circularCursorB');

 circle.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};



// Move the cursor
function onMouseMove(e) {
  TweenMax.to('#circularCursorB', .8, {
    x: e.pageX - 250/2 , // - 6
    y: e.pageY - 250/2  // - 5
  })

  TweenMax.to('#circularCursorS', .1, {
    x: e.pageX - 150/2 , // - 6
    y: e.pageY - 150/2   // -5
  })
}

