function carregar()
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //criando objeto data 
var hora = data.getHours() // Pegar as horas Atuais 
msg.innerHTML = `Agora são ${horas} horas.`
if (hora>=0 && hora <12){
    //BOM DIA !
    img.src 
} else if(hora >=12 && hora < 18){
    //BOA TARDE!

} else{ (hora>=18 && hora <23)
    // BOA NOITE !! 
}
