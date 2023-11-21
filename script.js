$(document).ready(function () {
    $('nav a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }

    });
    jQuery('.link-contato').on('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        var target = jQuery(this).attr('href'); // Obtém o valor do atributo href
        scrollToTarget(target); // Chama a função scrollToTarget com o destino como argumento
    });

    // Função para rolar suavemente até o destino
    function scrollToTarget(target) {
        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top
        }, 1000);
    }


    
});



