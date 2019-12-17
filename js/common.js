var top_menu_height = 0;
jQuery(function($) {
    $(document).ready( function() {
        initialize();

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
    // Init "copy coordinates"
    // In case of JS turned off, this button won't be shown
    $('.copyable').each(function(index, element) {
        $('<i>')
            .addClass('fas fa-copy copy')
            .click(function(e) {
                var text = $(e.target).parent().text();
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val(text).select();
                document.execCommand("copy");
                $temp.remove();
            })
            .appendTo(element);
    });
}