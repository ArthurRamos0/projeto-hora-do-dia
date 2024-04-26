function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'estilos/imagens/manha.png'
        document.body.style.background = '#c7b787'
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'estilos/imagens/tarde.png'
        document.body.style.background = '#d74501'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        //BOa NOITE
        img.src = 'estilos/imagens/noite.png'
        document.body.style.background = '#131a24'
        msg2.innerHTML = 'Boa Noite!'
}
}