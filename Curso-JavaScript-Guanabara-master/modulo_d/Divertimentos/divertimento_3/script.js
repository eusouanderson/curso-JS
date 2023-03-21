function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','baby-male.jpg')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src','young-male.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','adult-male.jpg')
            }else{
                //Idoso
                img.setAttribute('src','elder-male.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','baby-female.jpg')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src','young-female.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','adult-female.jpg')
            }else{
                //Idoso
                img.setAttribute('src','elder-female.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}   