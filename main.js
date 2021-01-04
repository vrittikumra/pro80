function getpara_1()
{
   var inputs=[];
   for (var i=1;i<=6;i++) 
   {
          inputs.push(document.getElementById("para1_input_box_"+i).value);
         // inputs.join(".")  ;
          document.getElementById("showPara1").innerHTML=inputs.join(".")  ;
          
        }
}

function getpara_2()
{
   var inputs=[];
   for (var i=1;i<=6;i++) 
   {
          inputs.push(document.getElementById("para2_input_box_"+i).value);
         // inputs.join(".")  ;
          document.getElementById("showPara2").innerHTML=inputs.join(".")  ;
          
        }
}