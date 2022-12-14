window.addEventListener('load', myInit, true);

function myInit(){
    toggleMenu();
    formElement();
    accordion();
}

function toggleMenu(){
    const hamburger_menu = document.querySelector('.side-menu-close');
    const menu = document.querySelector('.side-menu-wrap');

    hamburger_menu.addEventListener('click', () => {
        hamburger_menu.classList.toggle('closed');
        menu.classList.toggle('open');
    });
}

function formElement(){
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
}

function accordion(){
    const accordionBtns = document.querySelectorAll(".product-list-lines_item__header");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("is-open");
            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
                content.style.display='none';
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = "max-content";
                content.style.display='block';
            }
        };
    });
}