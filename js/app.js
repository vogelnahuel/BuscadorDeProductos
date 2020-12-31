//variables
const max = new Date().getFullYear(); /***año maximo del año actual  no se como extrae el año actual */
const min = max - 10; /***año minimo segun yo */

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor de los resultados
const resultado = document.querySelector('#resultado');


//generar un objeto con los datos de busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

//eventos

document.addEventListener('DOMContentLoaded', () => {

        mostrarAutos(autos);
        llenarSelect();

    })
    //event listener para los select

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();

})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();

})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


//funciones
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarPuertas); /*** filtra sobre la base de datos segun seleccionado */

    if (resultado.length <= 0) {
        nohayResultados();
    } else {
        mostrarAutos(resultado);
    }
}

function nohayResultados() {
    limpiarHTML();
    const vacio = document.createElement('p');
    vacio.classList.add('alerta', 'error');
    vacio.textContent = 'no se encontro ningun resultado';
    resultado.appendChild(vacio);
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= parseInt(datosBusqueda.minimo); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;

}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= parseInt(datosBusqueda.maximo); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;

}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === (datosBusqueda.transmision); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;

}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === (datosBusqueda.color); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;

}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;

}
/***auto es una version iterada de autos por el metodo filter */
function filtrarMarca(auto) {

    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca; /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year); /***si no esta vacio el select devuelvo un array con los seleccionados */
    }
    return auto;
}

function mostrarAutos(autos) {
    //limpiar html
    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${auto.marca}-
        ${auto.modelo}-
        ${auto.year}-Precio $
        ${auto.precio}-Puertas: 
        ${auto.puertas}-COLOR:
        ${auto.color}-transmision:
        ${auto.transmision}
        
        ` //insertar en el html
        resultado.appendChild(autoHTML);

    })

}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}

function llenarSelect() {

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    } /***quiero que me muestre del año actual hasta los mas antiguos */

}