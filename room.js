$(document).ready(
  function(){
    
      $("#b0").click(
         function(){
           
           var err = "I don't understand that";
           var x = $("#i0").val();
           x.toString();
           
           // Going to Hospital 
           if(x === "n" || x === "N" || x === "north" || x === "NORTH"){
             $(this).hide();
             var txt1 = "<div id = \"welcome\"><br><br><b>Welcome to Mirzapur !!</b>";
             var txt2 = "<br><br>As you are bleeding poorly , you need medical aid . Go back to the Hospital right now.";
             var txt3 = "<br><br><button id=\"back_hospital\"> BACK TO HOSPITAL </button></div>";
             $("#b0").after(txt1 , txt2 , txt3);
             $("#back_hospital").click(
               function(){
                 $(this).hide();
                 $("#welcome").hide();
                 var txt1 = "<br><br> <b> HOSPITAL ENTRANCE <br> E / W corridoor</b>";
                 var txt2 = "<br><br> The corridor on east side further leads to operation theatre . There is something lying near your feet<br>";
                 var txt3 = "<br><input type=\"text\" id=\"i1\">";
                 var txt4 = "<button id=\"b1\"> next </button>";
                 $("#b0").after(txt1 , txt2 , txt3 , txt4);
               }
             );
             
           }
           else if(x == "e" || x === "E" || x === "east" || x === "EAST") {
              $(this).hide();
              var txt1 = "<div id=\"hospital_entrance\"> <br><br> <b> HOSPITAL ENTRANCE <br> E / W corridoor</b>";
              var txt2 = "<br><br> The corridor on east side further leads to operation theatre . There is something lying near your feet<br>";
              var txt3 = "<br><input type=\"text\" id=\"i1\">";
              var txt4 = "<button id=\"b1\"> next </button> </div>";
              $("#b0").after(txt1 , txt2 , txt3 , txt4);
              
           }
           else if(x === "look") alert("You have nothing to look");
           else if(x === "shoot") alert("You have nothing to shoot");
           else {
              alert(err);
           }
          
           // Picking gun
           
         }
      
      );
      
    
  }
  
);
