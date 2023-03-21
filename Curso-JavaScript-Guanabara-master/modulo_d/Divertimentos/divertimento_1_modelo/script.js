
function carregar(){
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('imagem')
    //hora
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //body
    var bodycolor = document.body.style.background

    msg1.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = 'Bom dia !'
        img.src = 'morning.png'
        document.body.style.background = '#8a2be2'
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = 'Boa Tarde !'
        img.src = 'afternoon.png'
        document.body.style.background = '#1d8496'
    }
    else {
        msg.innerHTML = 'Boa Noite !'
        img.src = 'night.png'
        document.body.style.background = '#3a0968'
    }
}
