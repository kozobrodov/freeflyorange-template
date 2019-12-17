var top_menu_height = 0;
jQuery(function($) {
    $(document).ready( function() {

        // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(16.8451789,96.1439764)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

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