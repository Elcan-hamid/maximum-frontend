// Upload file
$("input[type=file]").change(function (e) {
    $(this).parents(".uploadFile").find(".filename").text(e.target.files[0].name);
});

// Custom Dropdown
$(".dropdown .dropdown_selected a").click(function() {
    $(".dropdown .dropdown_options ul").toggle();
});
$(".dropdown .dropdown_options ul li").click(function() {
    var text = $(this).html();
    $(".dropdown .dropdown_selected a").html(text);
    $(".dropdown .dropdown_options ul").hide();
});

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown .dropdown_options ul").hide();
});