
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'aeb8b9c8999bb0734b3dd2b61057858a'
let difKelvin = 273.15
let ciudad= 'paris'


//esta funcion lo que haces es que lo que escribamos en el buscador se  ponga como la variable (en este caso constante "ciudad")
document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

//en esta funcion se recibe una ciudad desde el escuchador de eventos.


function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data =>data.json())
    .then(data => mostrarDatosClima(data))  
}



function mostrarDatosClima(data){
   
    const divDatosClima= document.getElementById('datosClima') //seleccionamos el div entero
    divDatosClima.innerHTML=''  //siempre que toquemos el boton buscar va a vaciar la info

    // esta info la sacamos de la descripcion del array en la consola
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp 
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description 
    const icono = data.weather[0].icon

    //CREAR ELEMENTOS (todos estos elemetos van a estar adentro del div)

    const ciudadTitulo= document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es: ${Math.floor(temperatura - difKelvin)} ºC`

    const iconoInfo= document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteorologica es : ${descripcion}`

    const huemedadInfo = document.createElement('p')
    huemedadInfo.textContent = `la humedad es: ${humedad} %`

    // INTEGRAR LOS ELEMENTOS DENTRO DEL DIV

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(huemedadInfo)


}




