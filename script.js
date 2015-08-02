$(document).ready(function(){

   $('div').not("#home").hide();
   $("#home button").click(function(){
      $("#home").fadeOut("slow", function(){
         $("#letter").fadeIn();
      });
   });

   $("#letter h5").click(function(){
      $("#letter").fadeOut("slow", function(){
         $("#prison").fadeIn();
      });
   });

   $("#prison img[name=spoon], img[name=tray]").click(function(){
      var name = $(this).attr("name");
      $("#prison").fadeOut("slow", function(){
         $("#" + name + "-choice").fadeIn();
      });
   });

   $("#spoon-choice a").click(function(){
      var name = $(this).attr("name");

      $("#spoon-choice").fadeOut("slow", function(){
         if(name==='use')
         {
            $("#gameover").append("<h1>Your spoon broke. You messed up!</h1>");
            $("#gameover").append("<img src='images/standardpepe.png'>");
            $("#gameover").append("<h1 name='startover'>Start Over!</h1>");
            $("#gameover").fadeIn();
         }
         else
            $("#prison").fadeIn();
      })
   });

   $("#tray-choice a").click(function(){
      var name = $(this).attr("name");
      $("#tray-choice").fadeOut("slow", function(){
         if(name === "rubberband")
         {
            $("#gameover").append("<h1>The rubber band hit the guard in the face.</h1>");
            $("#gameover").append("<img src='images/choking.png'>");
            $("#gameover").append("<h1 name='startover'>Start Over!</h1>");
            $("#gameover").fadeIn();
         }
         else
            $("#" + name).fadeIn();
      });
   });

   $("#diamond a").click(function(){
      var name = $(this).attr("name");
      $("#diamond").fadeOut("slow", function(){
         if(name === 'prisoner'){
            $("#gameover").append("<h1>The prisoner beat you up and stole the diamond!.</h1>");
            $("#gameover").append("<img src='images/crying.png'>");
            $("#gameover").append("<h1 name='startover'>Start Over!</h1>");
            $("#gameover").fadeIn();
         }
         else
            $("#" + name).fadeIn();
      });
   });

   $("h1[name=jailfree]").click(function(){
      $("#police").fadeOut("slow", function(){
         $("#jailfree").fadeIn();
      });
   });

   $("h1[name=win]").click(function(){
      $("#jailfree").fadeOut("slow", function(){
         $("#win").fadeIn();
      });
   });

   $("#paperclip img").click(function(){
      $("#paperclip").fadeOut("slow", function(){
         $("#unlocked").fadeIn();
      });
   });

   $("#unlocked img").click(function(){
      $("#unlocked").fadeOut("slow", function(){
         $("#win").fadeIn();
      });
   });

   $(document).on("click", "h1[name=startover]", function(){
      $("#gameover").fadeOut("slow", function(){
         $("#home").fadeIn();
         $("#gameover").empty();
      });
   });
});
