function initialize()
{
$(document).ready(function(){
         $("#projectlist").hide();
         $("#back-button").hide();
         $(".modal-description").hide();
         
         $("#projects").click(function(){
         $("#main").hide();
         $("#projectlist").show();
         $("#back-button").show();
         });

         setTimeout(fade_out, 3200);

         function fade_out() {
         $("#scroll").fadeOut().empty();
         }

         /*(function blink() {
         $('#scroll').fadeOut(400).fadeIn(400, blink);
         })();  improve blink so it doesn't overlap with back*/

         $(document).click(function() {
         $("#scroll").hide();
         });

         $("#back-button").click(function(){
         $("#main").show();
         $("#projectlist").hide();
         /*$("#songlist").hide();
         $("#interviewlist").hide();*/
         $("#back-button").hide();
         });
         
         $(".projectz").click(function(){
         $("#back-button").hide();
         $(".modal-background").show();
         $("#main").hide();
         $("#projectlist").hide();
         /*$("#songlist").hide();
         $("#interviewlist").hide();*/
         });

         $(".modal-background").click(function(){
         $(".modal-background").hide()
         $("#main").show();
         }).children().click(function(e) {
         return false;
         });

         });
}
$(initialize);
