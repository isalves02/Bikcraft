// para selecionar elementos chama a tag + seleciona o documento e chamando a classe nos parênteses (como css)
// var footer = document.querySelector(".footer-redes");
// para verificar se o que você selecionou foi o que pretendia: console.log(footer);

// se consegue utilizar diretp o nome SimpleSlide -por exemplo- significa que essa classe
// foi criada direto no elemento chamado window, se procurar p verificar existencia no console
// ("window.simpleSlide"), ele retorna uma função, caso exista.

// (função) + {objeto}
// objeto = com configurações do slide
// <!-- É possível ter mais de um slide na mesma página,
// basta adicionar um data-slide com outro nome e instanciar novamente 
// o slide com new SimpleSlide() -->

// itens do slide sempre ao lado do CONTAINER

// para não dar erro de verificação no console da home por não conter simpleslide = if
if (window.SimpleSlide) {

    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="quote"
        time: 5000, // tempo de transição dos slides
        // pauseOnHover: true, // pausa a transição automática  
    })

    new SimpleSlide({
        slide: 'portfolio', 
        nav: true, // se deve ou não mostrar a navegação
        time: 5000,
    });

}

// Animação
// além disso, não precisa de mais nada aqui no js, só avisar em cada tag (com data-anime) o tempo de animação que tera - em ms.
if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleForm) {
    
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", //seletor do botão
        erro: 
        "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, entre em contato em <em>contato@bikcraft.com</em></p></div>", // mensagem de erro
        sucesso: 
        "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
    })
}