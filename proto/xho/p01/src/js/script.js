var be4ui = {
    init: function() {
        // simple toggle class buttons
        $('.be4ui-main-container').on('click', '.js-button-toggle-drawer', function() {
            $('.be4ui-drawer-container').toggleClass('be4ui-drawer-visibile');
        });

        // height is needed because browser do not animate hight: auto
        $('.body-view-element-fieldsets-container').each(function() {
            var h = $(this).height();
            $(this).css('height', h);
        });
        $('.be4ui-main-container').on('click', '.js-button-toggle-view-element', function() {
            var el = $(this).closest('.body-view-element');
            el.toggleClass('body-view-element-fieldsets-container-hidden');
        });
    }
};

$(function() {
    setTimeout(function() {
    be4ui.init();
    }, 1000);
});