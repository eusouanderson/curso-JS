var vel = 200
var sob = vel - 120
if (vel > 120){
    console.log(`Você ultrapassou ${sob}km da velcidade permitida. VOCÊ FOI MULTADO!`)
}

console.log(`A Velocidade do seu caro é de ${vel}km/h`)
if(vel > 120){
    console.log('Pague a multa agora! ')
}else{
    console.log('Dirigir com segurança , não só previne acidentes mas também ajuda na ecônomia')
}

