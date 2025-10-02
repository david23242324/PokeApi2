function generarLista(arraypokemones) {
    let listaHTML = "";
    for (let i = 0; i < arraypokemones.length; i++) {
        let id = i + 1;
        listaHTML += `
        <div class="c-lista-pokemon poke-${id}" onclick="Detalle('${id}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="1000" loading="lazy" alt="${arraypokemones[i].name}">
            <p>${arraypokemones[i].name}</p>
        </div>`;
    }

    return listaHTML;
}


generarLista(pokemones)


function buscadorfuncion(xds){
    console.log(xds);
}


function home(){
    //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

    //contenedor filtro
    const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];

    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("tipos-container"); 

    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        contenedorFiltro.appendChild(btn);
    }

    // contenedor
    const listaHTML = generarLista(pokemones);
    var contenedorPokemones = document.createElement("section");
    contenedorPokemones.id = "la-lista";
    contenedorPokemones.innerHTML = listaHTML;



    document.getElementById("root").appendChild(buscador);
    document.getElementById("root").appendChild(contenedorFiltro);
    document.getElementById("root").appendChild(contenedorPokemones);
}