//test de cotizacion de dolar

//poner una instancia p llamar a puppeteer (si falla nos damos cta si funciona puppeteer)
//creo una var
puppe = require('puppeteer') //le digo q voy a trabajar con puppetteer

inicio() //la escribo p q se ejecute. llamo a la funcion inicio.

//creo una funcion p q puppeteer arranque
async function inicio(){  //ejecuto 1 proceso sin q el otro se detenga
    //muestra el navrgador en la pantalla
    browser = await puppe.launch({headless:false}) //le digo q el browser. ejecuta el browser
    //​browser = puppe.launch({headless:'new'}) //ejecuta todo sin mostrarme el navegador

    //se abre una pagina en el navegador (una nueva)
    pagina = await browser.newPage()

    //abrimos en el navegador la pagina de dolarsi.com
    await pagina.goto('https://www.dolarsi.com.ar/func/tool4.php')
    //scraping
    var valorweb = await pagina.evaluate( ()=>{
        //retorname el texto y metelo en la var valorweb
        return document.querySelector('#v1').innerText //le digo lo q quiero tomar
    }) //la func yoma los datos
    console.log(valorweb) //muestro en la terminal

    //pedir q tome un t de demora
    setTimeout( ()=>{
        browser.close()
    }, 10000) //le doy un tiempo de 10 segundos

}//lo q ponga adentro es lo q hace q funcione mi funcion