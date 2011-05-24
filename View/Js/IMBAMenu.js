function createImbaMenu(menuId, params){
    // Setup the CSS
    $(menuId).css({
        "margin": "0",
        "margin-left": "500px",
        "margin-top": "100px",
        "padding": "0",
        "list-style-type": "none",
        "list-style-position": "outside",
        "position": "relative",
        "line-height": "1.5em"
    });

    $(menuId + " a ").css({
        "display": "block",
        "padding": "0px 5px",
        "text-decoration": "none"
    });

    $(menuId + " ul ").css({
        "margin": "0",
        "padding": "0",
        "list-style-type": "none",
        "list-style-position": "outside",
        "line-height": "1.5em",
        "position": "absolute",
        "display": "none",
        "top": "1.5em"
    });

    $(menuId + " li ").css({
        // Don't change for other flow direction
        "float": "left",
        "position": "relative"
    });

    $(menuId + " li ul a ").css({
        "width": "90px",
        "height": "auto",
        // Don't change for other flow direction
        "float": "left"
    });

    $(menuId + " li ul ul ").css({
        // Change for other flow direction
        "right": "90px",
        "margin": "0px 0 0 10px"
    });

    $(menuId + " ul ul ").css({
        "top": "auto"
    });

    // Hide all list elements under menu
    $(menuId + " ul ").css({
        display: "none"
    });

    // Opera and IE Fix
    $(menuId + " li ").hover(function(){
        $(this).find('ul:first').css({
            visibility: "visible",
            display: "none"
        }).show(200);
    },function(){
        $(this).find('ul:first').css({
            visibility: "hidden"
        });
    });
}



$(document).ready(function(){
    createImbaMenu("#nav", {
        "test": "Hallo, Welt!"
    });
});