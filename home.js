function clicou() {

    let res = window.document.getElementById("ler_mais")
    res.innerHTML = "É fácil imaginar que, com a nossa dependência dos aparelhos cada vez maior ano após ano, as pesquisas enfrentem dificuldades para acompanhar esse crescimento. <br> <br> O que sabemos é que a simples distração de verificar o celular ou observar uma notificação pode trazer consequências negativas. <br>  <br> O uso abusivo dos smartphones pode gerar transtornos psíquicos, como ansiedade e, posteriormente, depressão. O transtorno já tem um nome: nomofobia, medo de ficar sem o celular. <br> <br> Longe do aparelho, o indivíduo fica ansioso, com a sensação de estar perdendo imformações importantes, ou ainda excesivamente entediado."

    if (res.style.display = 'block') {
        res.style.backgroundColor = " #3f3f3f"
        res.style.alignItems = 'center'
        res.style.textAlign = 'justify'


    }


}

function voltar() {
    let res = window.document.getElementById("ler_mais")
    res.style.display = 'none'


}