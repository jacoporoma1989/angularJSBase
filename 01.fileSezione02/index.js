$(document).ready(function() {
    $(".nome-cognome").css("font-size","30px");
    console.log($(".nome-cognome").text());
    console.log($("h2").attr("nome"));
   $(".col-md-12  h2").each(function(){
    if($(this).attr("nome")=='culo')
    $(this).text("CIAOOOOOOOOO")
   })

   $("h2").attr("cane").closest("h2").text("Ciao Ughetto");
   $("h2").data("cane").text("Sei stupido");

    
})