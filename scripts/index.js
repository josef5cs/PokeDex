document.getElementById("open_btn").addEventListener("click", function(){
    document.getElementById("sidebar").classList.toggle("open-sidebar"); 
});

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
        
    }
    
}

const limpar = () => {
    document.getElementById("inputName").value="";
    document.getElementById("inputNumero").value="";

}