async function pokemon() {
            var root = document.getElementById("root");
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await res.json();

    console.log(data.forms[0].name);
}

pokemon()