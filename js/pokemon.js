async function pokemon(parametro) {
    const root = document.getElementById("root");
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();

    // Obtener tipos
    let tipoPoke = "";
    for (let i = 0; i < data.types.length; i++) {
        tipoPoke += `<span>${data.types[i].type.name}</span> `;
    }

    // Mostrar datos
    root.innerHTML = `
    <section class="c-detalle">
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Nombre: ${data.name}</p>
        <p>ID: ${data.id}</p>
        <p>Altura: ${data.height / 10} m | Peso: ${data.weight / 10} kg</p>
        <p>Tipos: ${tipoPoke}</p>
        <p>HP: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} | Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} | Defensa Especial: ${data.stats[4].base_stat}</p>
    </section>
    `;
}

pokemon(5);
pokemon(55);

