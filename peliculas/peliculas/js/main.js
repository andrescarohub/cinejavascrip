// Datos de películas
const movies = [
    { 
        title: "Avatar", 
        img: "images/avatar.svg", 
        momentImg: "images/momentoavatar.svg", 
        info: "Un marine parapléjico es enviado a Pandora en una misión única...", 
        duration: "2h 42m", 
        price: "$10" 
    },
    { 
        title: "Capitán América", 
        img: "images/capitanamerica.svg", 
        momentImg: "images/momentocapitanamerica.svg", 
        info: "La historia de Steve Rogers que se convierte en el super soldado Capitán América...", 
        duration: "2h 4m", 
        price: "$8" 
    },
    { 
        title: "Cazafantasmas", 
        img: "images/cazafantasmas.svg", 
        momentImg: "images/momentocazafantasmas.svg", 
        info: "Un grupo de investigadores paranormales forma un negocio de exterminio de fantasmas...", 
        duration: "1h 45m", 
        price: "$7" 
    },
    { 
        title: "Cisne Negro", 
        img: "images/CISNE_NEGRO.svg", 
        momentImg: "images/momentocisnenegro.svg", 
        info: "Una bailarina lucha con la presión de interpretar a la Reina Cisne en una producción de El Lago de los Cisnes...", 
        duration: "1h 48m", 
        price: "$9" 
    },
    { 
        title: "Dark Knight", 
        img: "images/darknight.svg", 
        momentImg: "images/momentodarknight.svg", 
        info: "Batman, con la ayuda del teniente Jim Gordon y del fiscal de distrito Harvey Dent, tiene que enfrentarse al Joker...", 
        duration: "2h 32m", 
        price: "$11" 
    },
    { 
        title: "Deadpool", 
        img: "images/deadpool.svg", 
        momentImg: "images/momentodeadpool.svg", 
        info: "Un ex-militar con habilidades regenerativas, busca al hombre que casi destruyó su vida...", 
        duration: "1h 48m", 
        price: "$8" 
    },
    { 
        title: "Luciferina", 
        img: "images/luciferina.svg", 
        momentImg: "images/momentoluciferina.svg", 
        info: "Una joven monja descubre el oscuro secreto de su familia al regresar a casa...", 
        duration: "1h 31m", 
        price: "$6" 
    },
    { 
        title: "Shang-Chi", 
        img: "images/shang-chi.svg", 
        momentImg: "images/momentoshang-chi.svg", 
        info: "Shang-Chi debe enfrentar el pasado que pensó haber dejado atrás cuando es atraído a la red de la misteriosa organización de los Diez Anillos...", 
        duration: "2h 12m", 
        price: "$9" 
    },
    { 
        title: "Star Wars", 
        img: "images/starwars.svg", 
        momentImg: "images/momentostarwars.svg", 
        info: "La historia épica de la familia Skywalker que lucha por la paz en una galaxia muy, muy lejana...", 
        duration: "2h 1m", 
        price: "$10" 
    },
    { 
        title: "Uncharted", 
        img: "images/uncharted.svg", 
        momentImg: "images/momentouncharted.svg", 
        info: "Un joven y astuto cazador de tesoros busca su destino en esta aventura inspirada en los videojuegos...", 
        duration: "1h 56m", 
        price: "$9" 
    }
];

// Resto del código para renderizar las películas y gestionar los eventos del carruse


// Mostrar las películas en el carrusel
function displayMovies(movieList) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = ''; // Limpiar contenido previo
    movieList.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <img class="moment-image" src="${movie.momentImg}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button onclick="showDetails('${movie.title}')">Más</button>
        `;
        carousel.appendChild(movieDiv);
    });
}

// Mostrar detalles de la película en un alert (prompt)
function showDetails(title) {
    const movie = movies.find(m => m.title === title);
    alert(`Título: ${movie.title}\nInformación: ${movie.info}\nDuración: ${movie.duration}\nPrecio: ${movie.price}`);
}

// Filtrar películas según el texto ingresado y mostrar sugerencias
function filterMovies() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
    
    // Autocompletado
    const autocompleteContainer = document.getElementById('autocomplete-container');
    autocompleteContainer.innerHTML = '';
    filteredMovies.forEach(movie => {
        const suggestion = document.createElement('div');
        suggestion.innerText = movie.title;
        suggestion.onclick = () => {
            searchBar.value = movie.title;
            filterMovies();
        };
        autocompleteContainer.appendChild(suggestion);
    });
}

// Evento para el buscador
document.getElementById('search-bar').addEventListener('input', filterMovies);

// Mostrar todas las películas al cargar la página
displayMovies(movies);
