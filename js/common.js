var top_menu_height = 0;
jQuery(function($) {
    $(document).ready( function() {
        initialize();
    });
});

function initialize() {
    //gallery light box setup
    $('a.colorbox').colorbox({
        rel: function() {
            return $(this).data('group');
        }
    });
}