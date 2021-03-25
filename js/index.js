function ativaScrollSuave(selector) {

    $(selector).click(function(event){

        event.preventDefault();
        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 750)
    })

 }

 ativaScrollSuave('a[href*=panel-about]')
 ativaScrollSuave('a[href*=panel-speakers]')
 ativaScrollSuave('a[href*=panel-form]')