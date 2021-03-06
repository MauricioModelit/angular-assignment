require('./vendor/bindonce.js');
require('../lib/angular-route.js');

require('./controllers.js');
require('./directives.js');
require('./factories.js');
require('./filters.js');
require('./services.js');

require('./app.js');
require('../../templates/templates.js');
require('../../styles/bootstrap/dist/js/bootstrap.min.js');

$ = jQuery.noConflict();
$(document).ready(function() {

    var currUser;
    var currToken;
    $("nav").hide();

    /*
     * Navigation
     */
    $("nav .menu-item").click(function (e) {
        $("nav .menu-item").removeClass("active");
        $(this).addClass("active");
    });

    /*
     * Logout
     */
    $("#logout").click(function (e) {
        currToken = null;
        currUser = null;
        $("nav").hide();
    });
});