function display(value){
    document.getElementById("result").value +=value;
   }
   function clearbtn(){
       document.getElementById("result").value = " ";
   }
   function calculate(){
      let add = document.getElementById("result").value;
      let sub = eval(add);
      let total = document.getElementById("result").value = sub;
   }