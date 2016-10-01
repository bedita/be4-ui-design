var be4ui = {
    init: function() {
        $('.be4ui-main-container').on('click', '.js-be4ui-drawer-toggle-button', function() {
            console.log('ciao');
            $('.be4ui-drawer').toggleClass('be4ui-drawer-opened');
            $('.be4ui-drawer-toggle-button').toggleClass('be4ui-drawer-opened');
        });
    }
};

$(function() {
    be4ui.init();
});