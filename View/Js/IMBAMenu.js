/**
 * Creates a IMBAMenu out the <ul><ul><li>....</li></ul></ul> structure
 * @param menuId - ID of the DOM-Element
 * @param params - {
 *        "orientation": "left" or "right" (nothing means "right"),
 *        "positionV": "top" or "bottom" (nothing means "top"),
 *        "positionH": "left" or "right" (nothing means "left"),
 *        "offsetV" : 0..n (nothing means 0),
 *        "offsetH" : 0..n (nothing means 0),
 *   }
 */
function createImbaMenu(menuId, params){
    // If no orientation is passed, then flyout to the right
    if (params.orientation == null || (params.orientation != "left" && params.orientation != "right")){
        params.orientation = "right";
    }

    // if no positionV is passed, then positionV is top
    if (params.positionV == null || (params.positionV != "top" && params.positionV != "bottom")){
        params.positionV = "top";
    }

    // if no positionH is passed, then positionH is left
    if (params.positionH == null || (params.positionH != "left" && params.positionH != "right")){
        params.positionH = "left";
    }

    // if no offsetH is passed, then offsetH is 0
    if (params.offsetH == null || isNaN(params.offsetH)){
        params.offsetH = "0";
    }

    // if no offsetV is passed, then offsetV is 0
    if (params.offsetV == null || isNaN(params.offsetV)){
        params.offsetV = "0";
    }
    
    //$(menuId).attr("class", "ui-dialog-titlebar ui-widget-header ui-corner-all");

    // Setup the CSS
    $(menuId).css({
        "margin": "0",
        "padding": "0",
        "list-style-type": "none",
        "list-style-position": "outside",
        "position": "fixed",
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

    $(menuId + " ul ul ").css({
        "top": "auto"
    });

    // Hide all list elements under menu
    $(menuId + " ul ").css({
        display: "none"
    });

    // Setup the flyout
    if (params.orientation == "left"){
        $(menuId + " li ul ul ").css({
            // Change for other flow direction
            "right": "90px",
            "margin": "0px 0 0 10px"
        });
    } else {
        $(menuId + " li ul ul ").css({
            // Change for other flow direction
            "left": "90px",
            "margin": "0px 0 0 10px"
        });
    }

    // Setup position
    if (params.positionV == "top") {
        $(menuId).css({
            "top": params.offsetV + "px"
        });
    } else {
        $(menuId).css({
            "bottom":  params.offsetV + "px"
        });
    }

    if (params.positionH == "left") {
        $(menuId).css({
            "left":  params.offsetH + "px"
        });
    } else {
        $(menuId).css({
            "right":  params.offsetH + "px"
        });
    }

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
        "orientation": "left",
        "positionV": "top",
        "positionH": "right",
        "offsetH": 100,
        "offsetV": 100
    });
});