async function pokemon(parametro) {
            var root = document.getElementById("root");
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();


    let tipoPoke = "";
    for (let i = 0; i < data.types.length; i++) {
        tipoPoke += `<span>${data.types[i].type.name}</span>`;
    }

    root.innerHTML = `
    
    <section class="c-detalle>
    <image src="https://raw.githubusercontent.com/PokeAPI"
    <p>${data.name}</p>
    <p>${data.id}</p>
    <p>Altura: ${data.height / 10} = Peso: ${data.weight / 10} kg</p>
    <p>Hp: ${data.stats[0].base_stat}</p>
    <p>Velocidad: ${data.stats[5].base_stat}</p>
    <p>Ataque: ${data.stats[i].base_stat} Defensa: ${data.base_stat[2].base_stat}</p>
    <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.base_stat}</p>
    
    </section>
    
    `;
}

pokemon(5)
