//Check off specific Todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

//click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//click on the input to add todo into the list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("")
    }
});