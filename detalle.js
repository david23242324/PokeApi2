async function capturados() {
        var root = document.getElementById("root");
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await res.json();

    console.log(data);
}



