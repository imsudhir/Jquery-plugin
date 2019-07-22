
(function( $ ) {

 $.fn.greenify = function(options) {
   
      // JS Oject
      var set = {
            name:"sudhir",
            leftcenter:"{bottom: 0; left: 0;}",
            rightcenter:"sudhirsingh",
            bottomleft:"sudhirsingh",
            bottomright:"sudhirsingh",
            zxcm:function(){
            // alert("sdfghjkl");
              

          },
         net:function(){
            console.log(this.name);
         }
      };


      
      // set.net();
      set.zxcm();
 
      console.log(options);

      var settings = $.extend({
               color : "#556b2f",
               setposition : "bottomright",
               addplate:"true"

      }, options );
         //  var pos = settings.position();
         console.log(settings.topleftcenter);
         var butttn = '<div id="mybutton" onclick="addplateFunction()" class="topleftcenter"><label class="switch"><input type="checkbox"> <span class="slider round"></span></label></div>';
         $(this).append(butttn);
         $("#mybutton").removeClass("topleftcenter").addClass(settings.setposition);
         console.log(settings.addplate);
         if(settings.addplate=='true'){
   

         }
         $('#mybutton input[type="checkbox"]').click(function(){
         if($(this).prop("checked") == true){
         $("body").css( "background-color", settings.color );
            }
            else if($(this).prop("checked") == false){
               $("body").css( "background-color", "red" );
            }
        });
     return this;
 };
}(jQuery)); 

jQuery( "body" ).greenify({
   color:"orange",
   setposition : "bottomleft",
   addplate:"true"
   }); 

function addplateFunction() {
  document.getElementById("mybutton").innerHTML = '<form id="form"><main style="z-index:999; background-color:black !important; padding: 5px;"><div class="colors-row"><label style="color:white;">Colors:</label><div class="colors-box"><label><input type="radio" name="color" value="#fac563"><div class="color" style="background:#fac563;"></div></label><label><input type="radio" name="color" value="#fac563"><div class="color" style="background:#fac563;"></div></label><label><input type="radio" name="color" value="#ff8100"><div class="color" style="background:#ff8100;"></div></label><label><input type="radio" name="color" value="#ff9329"><div class="color" style="background:#ff9329;"></div></label><label><input type="radio" name="color" value="#ffa500"><div class="color" style="background:#ffa500;"></div></label><label><input type="radio" name="color" value="#f1b174"><div class="color" style="background:#f1b174;"></div></label><label><input type="radio" name="color" value="#f55353"><div class="color" style="background:#f55353;"></div></label><label><input type="radio" name="color" value="#cc33ff"><div class="color" style="background:#cc33ff;"></div></label><label><input type="radio" name="color" value="#fae591"><div class="color" style="background:#fae591;"></div></label><label><input type="radio" name="color" value="#fae591"><div class="color" style="background:#fae591;"></div></label><label><input type="radio" name="color" value="#fae591"><div class="color" style="background:#fae591;"></div></label><label><input type="radio" name="color" value="#fae591"><div class="color" style="background:#fae591;"></div></label><button id="back">Back</button></main></form>';

  jQuery("input[name='color']").click(function(){
  var colors =jQuery(this).val();
  jQuery("body").css( "background-color", colors );
  });
  
}
