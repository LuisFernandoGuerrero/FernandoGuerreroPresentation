document.addEventListener('DOMContentLoaded', function() {
    mostrarTrabajos();
    eventListeners();
    scroll();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.menu');
    navegacion.classList.toggle('mostrar');
}

function scroll() {
    window.onscroll = function() {
        if(document.documentElement.scrollTop > 732) {
            document.querySelector('.top-buttom-container')
            .classList.add('show');
        } else {
            document.querySelector('.top-buttom-container')
            .classList.remove('show');
        }
    }
    
    document.querySelector('.top-buttom-container')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    });
}

async function mostrarTrabajos() {
    try {
        const resultado = await fetch('./trabajos.json');
        const db = await resultado.json();
        const { trabajos } = db;


        trabajos.forEach ( servicio => {
            const {nombre, img, devCon, url, gitCode} = servicio;

            // DOM 
            const nombreTrabajo = document.createElement('H4');
            nombreTrabajo.textContent = nombre;
            nombreTrabajo.classList.add('nombre-trabajo')

            const descrip = document.createElement('P');
            descrip.textContent = devCon;
            descrip.classList.add('descripcion-trabajo');

            const botonUrl = document.createElement('A')
            botonUrl.href = url;
            botonUrl.target = "_blank";
            botonUrl.textContent = "website";
            botonUrl.classList.add('botones-trabajo');
        
            const botonGit = document.createElement('A');
            botonGit.href = gitCode;
            botonGit.target = "_blank";
            botonGit.textContent = "GitHub"
            botonGit.classList.add('botones-trabajo');

            const botonesDiv = document.createElement('DIV');
            botonesDiv.classList.add('contenedor-botones');
            botonesDiv.appendChild(botonUrl);
            botonesDiv.appendChild(botonGit);

            const buscaTrabajo = document.createElement('DIV');
            buscaTrabajo.classList.add('busca-trabajo');
            buscaTrabajo.appendChild(nombreTrabajo);
            buscaTrabajo.appendChild(descrip);
            buscaTrabajo.appendChild(botonesDiv);

            const imagenTrabajo = document.createElement('IMG');
            imagenTrabajo.src = img;
            imagenTrabajo.classList.add('img-trabajo');

            const trabajoLi = document.createElement('LI');
            trabajoLi.classList.add('trabajo');
            trabajoLi.appendChild(imagenTrabajo);
            trabajoLi.appendChild(buscaTrabajo);

            // Mostrar trabajoLi en html

            document.querySelector('#trabajos').appendChild(trabajoLi);
        });
    } catch (error) {
        console.log(error);
    }
}