const nome = () => {
    const digitado = document.getElementById("inputName").value;

    pesquisar()
    async function pesquisar(){
        const url = `https://pokeapi.co/api/v2/pokemon/${digitado}`
        console.log(url)

        const pegar = await fetch(url);

        const data = await pegar.json();

        console.log(data)

        document.getElementById("pokedexImagem").src=data.sprites.other.home.front_default;
        document.getElementById("nomePokemon").innerText=data.name;
        document.getElementById("numeroPokemon").innerText=data.id;
        
    }
    
}
const numero = () => {
    const digitadoNumero = document.getElementById("inputNumero").value;

    pesquisar2()
    async function pesquisar2(){
        const url = `https://pokeapi.co/api/v2/pokemon/${digitadoNumero}`
        console.log(url)

        const pegar = await fetch(url);

        const data = await pegar.json();

        console.log(data)

        document.getElementById("pokedexImagem").src=data.sprites.other.home.front_default;
        document.getElementById("nomePokemon").innerText=data.name;
        document.getElementById("numeroPokemon").innerText=data.id;
        
    }
    
}

const limpar = () => {
    document.getElementById("inputName").value="";
    document.getElementById("inputNumero").value="";
    document.getElementById("pokedexImagem").src="assets/descanso.gif";
    document.getElementById("nomePokemon").innerText="";
    document.getElementById("numeroPokemon").innerText="";
}