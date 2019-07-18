 $.fn.greenify = function(options) {

      // JS Oject
      // var set = {
      //    name:"sumesh",
      //    net:function(){
      //       console.log(this.name);
      //    }
      // };
      // set.net();
 
      console.log(typeof set);

      var settings = $.extend({
         color: "#556b2f"
      }, options );

     var butttn = '<div class="check-button"><label class="switch"><input type="checkbox"> <span class="slider round"></span></label></div>';
     $(this).append(butttn);
     $('.check-button input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $("body").css( "background-color", settings.color );
            }
            else if($(this).prop("checked") == false){
               $("body").css( "background-color", "" );

            }
        });
     return this;
 };
}(jQuery));