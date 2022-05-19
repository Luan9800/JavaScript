var agora = new Date()
var hora = agora.getHours // Uma variavel em outro local com uma atribuição para uma ação
console.log(`Agora sa2o exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!')
}else if(hora <=18){
    console.log('Boa tarde!')
}else {
     console.log('Boa Noite!')
}