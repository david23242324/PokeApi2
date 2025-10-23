var esFavorito = false;

function toggleFavorito(paramid, paramname) {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = false

    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
    }

    if (existe == true) {
        favoritos = favoritos.filter(poke => poke.name !== paramname);
        esFavorito = false;
    } else {
        favoritos.push({
            name: paramname,
            url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
        });
        esFavorito = true;
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";

          <button onClick="toggleFavorito(${data.id}, '${data.name}')">
        <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>

    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(poke => poke.name === data.name);

}

