
if(getParameterByName('anger')=="Yes"){
	$("#anger").css("display","block");
    $("#toDoList").css("display","block");
}
if(getParameterByName('depression')=="Yes"){
	$("#depression").css("display","block");
    $("#toDoList").css("display","block");
}
if(getParameterByName('stress')=="Yes"){
	$("#stress").css("display","block");
    $("#toDoList").css("display","block");
}


$(document).on("click",".closeBtn",function(){
        $(this).parent().fadeOut();
        flag++;
        if(flag==tlitems){
          $(".toDoList-items").html('<h4 style="text-align:center;margin:50px 0px;">Nothing to do. Enjoy!</h4>');
        }
      });




function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
