
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav

$("body").on("click", "[data-toggle-mobilenav]", function(){
    $(this).parent().toggleClass("active");
    $("body").toggleClass("mobile-open");
});

$("body").on("click", "[data-toggle-parent]", function(){
    $(this).closest("li").toggleClass("active");
});
     