$ ('.burger').on('click', ()=> {
    $ ('.burger').toggleClass("show-menu")
    $ ('.top-menu').toggleClass('show')
});

$ ('.top-menu').on('click', ()=> {
    $ ('.burger').removeClass("show-menu")
    $ ('.top-menu').removeClass('show')
});