function doAutoFlip() {
            flip(colour);
            if (colour < light.length) {
                colour++;
            } else {
                colour = 0;
            }

            t = setTimeout("doAutoFlip()", 40);
        }        
var t = 0;
        var colour = 0;
        var checkStop = 0;
        var light = new Array();
        light[0] = 'black';
        light[1] = 'white';
        light[2] = 'red';
        light[3] = 'blue';
        light[4] = 'purple';
        light[5] = 'grey';
        light[7] = 'aqua';
        light[8] = 'green'
        light[9] = 'pink'

        function flip(whichway) {
            document.body.style.backgroundColor = light[whichway];
        }

 function stopFlip() {
            clearTimeout(t);
            document.body.style.backgroundColor = 'white';
        }

function update_image(){
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0]; // 
    img.src =  window.URL.createObjectURL(file);

}
    
function AddFunction() {
  var x = document.getElementById("number1").value;
    document.getElementById("display").innerHTML == (Number(x) + Number(y));
}

function SubtractFunction() {
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  if (x == y) {
    document.getElementById("result").innerHTML = "The result is : " + (Number(x) - Number(y)) * 3;
  } else
    document.getElementById("result").innerHTML = "The result is : " + (Number(x) - Number(y));
}

function MultiplyFunction(){
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function DivideFunction() { 
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
document.getElementById("result").innerHTML = num1 / num2;
}