$('body').scrollspy({ target: '#side-menu' , offset : 10});
var disableEvent = function(e) {
    e.preventDefault();
};
$('a[href="#"]').click(disableEvent);
$('button[type="submit"]').click(disableEvent);

// Initialize popovers
$('[data-toggle="popover"]').popover();
$('#openGithub').click(function(e){
    e.preventDefault();
    window.location = "https://github.com/billyhunt/osf-api-docs";
});
$('[data-toggle="tooltip"]').tooltip();
