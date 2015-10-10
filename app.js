

$(document).ready( function() {
    var jumptime = 50;
    var jumpcount = "50";
    var tgt_element = "#doge"

    var move_element = function(element,relative,operator) {
        $(element).animate({
            relative: operator.concat(jumpcount)
        }, jumptime);
    };
    //$('#box').height('200px');
    //$('#box').width('200px');
    //$('#box').css("border-radius","50px"); 
    $('#btn_left').click( function() {
        $(tgt_element).animate({
            "left": "-=".concat(jumpcount)
        }, jumptime);
    });
    $('#btn_right').click(function () {
        $(tgt_element).animate({
            "left": "+=".concat(jumpcount)
        }, jumptime);
    });
    $('#btn_up').click(function () {
        $(tgt_element).animate({
            "top": "-=".concat(jumpcount)
        }, jumptime);
    });
    $('#btn_down').click(function () {
        $(tgt_element).animate({
            "top": "+=".concat(jumpcount)
        }, jumptime);
    });
    $(document).keypress(function(event) {
        // event to move on keypress 'm'
        if(event.which == 109) {
            $(tgt_element).animate({
                "top": "-=".concat(jumpcount)
            }, jumptime);  
        };

    });
});