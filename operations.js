function printsum()
        {
    
     var  N1 = parseFloat(document.getElementById('num1').value);
      var  N2 = parseFloat(document.getElementById('num2').value);
       
    document.getElementById('printvalue').innerHTML = N1 + N2
        }
 function printsub()
        {  
     var  N3 = parseFloat(document.getElementById('num3').value);
      var  N4 = parseFloat(document.getElementById('num4').value);
       
    document.getElementById('printvalue2').innerHTML = N3 - N4
        }
function printmultiply()
        {  
     var  N5 = parseFloat(document.getElementById('num5').value);
      var  N6 = parseFloat(document.getElementById('num6').value);
       
    document.getElementById('printvalue3').innerHTML = N5 * N6
        }
function printdivide()
        {  
     var  N7 = parseFloat(document.getElementById('num7').value);
      var  N8 = parseFloat(document.getElementById('num8').value);
       
    document.getElementById('printvalue4').innerHTML = N7 / N8
        }