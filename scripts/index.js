document.querySelector('#inputNumero2').addEventListener('click', function(event) {
    event.preventDefault();   
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

        document.getElementById("nomeNumero").style.display="flex"
        document.getElementById("divInformacoes").style.display="flex"
        document.getElementById("pokedexImagem").src=data.sprites.other.home.front_default;
        document.getElementById("nomePokemon").innerText=data.name;
        document.getElementById("numeroPokemon").innerText=data.id; 
        document.getElementById("alturaPokemon").innerText=(data.height)/10 + " metros";  
        document.getElementById("pesoPokemon").innerText=(data.weight)/10 + " quilos"; 
        if(data.types[1]){
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            return document.getElementById("tipoPokemon2").innerText=data.types[1].type.name;
        } else{
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            return document.getElementById("tipoPokemon2").innerText="";            
        }
        
                                                        
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

        document.getElementById("nomeNumero").style.display="flex"
        document.getElementById("divInformacoes").style.display="flex"
        document.getElementById("pokedexImagem").src=data.sprites.other.home.front_default;
        document.getElementById("nomePokemon").innerText=data.name;
        document.getElementById("numeroPokemon").innerText=data.id; 
        document.getElementById("alturaPokemon").innerText=(data.height)/10 + " metros";  
        document.getElementById("pesoPokemon").innerText=(data.weight)/10 + " quilos"; 
        if(data.types[1]){
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            document.getElementById("tipoPokemon2").style.display="flex";
            document.getElementById("tipoPokemon1").style.width="40%"
            return document.getElementById("tipoPokemon2").innerText=data.types[1].type.name;
        } else if(!data.types[1]){
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            document.getElementById("tipoPokemon2").style.display="none";
            return document.getElementById("tipoPokemon1").style.width="100%";
                  
        }       
    }   
}
const numero2 = () => {

    const digitadoNumero = document.getElementById("inputNumero2").value;

    pesquisar2()
    async function pesquisar2(){
        const url = `https://pokeapi.co/api/v2/pokemon/${digitadoNumero}`
        console.log(url)

        const pegar = await fetch(url);

        const data = await pegar.json();

        console.log(data)

        document.getElementById("nomeNumero").style.display="flex"
        document.getElementById("divInformacoes").style.display="flex"
        document.getElementById("pokedexImagem").src=data.sprites.other.home.front_default;
        document.getElementById("nomePokemon").innerText=data.name;
        document.getElementById("numeroPokemon").innerText=data.id; 
        document.getElementById("alturaPokemon").innerText=(data.height)/10 + " metros";  
        document.getElementById("pesoPokemon").innerText=(data.weight)/10 + " quilos"; 
        if(data.types[1]){
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            return document.getElementById("tipoPokemon2").innerText=data.types[1].type.name;
        } else{
            document.getElementById("tipoPokemon1").innerText=data.types[0].type.name;
            return document.getElementById("tipoPokemon2").innerText="";            
        }       
    }   
}

const limpar = () => {
    document.getElementById("nomeNumero").style.display="none"
    document.getElementById("divInformacoes").style.display="none"
    document.getElementById("inputName").value="";
    document.getElementById("inputNumero").value="";
    document.getElementById("pokedexImagem").src="assets/descanso.gif";
    document.getElementById("nomePokemon").innerText="";
    document.getElementById("numeroPokemon").innerText="";
    document.getElementById("tipoPokemon1").innerText="";        
    document.getElementById("tipoPokemon2").innerText="";        
    document.getElementById("alturaPokemon").innerText="";
    document.getElementById("pesoPokemon").innerText=""; 
}
const limpar2 = () => {
    document.getElementById("nomeNumero").style.display="none"
    document.getElementById("divInformacoes").style.display="none"
    document.getElementById("inputName").value="";
    document.getElementById("inputNumero").value="";
    document.getElementById("inputNumero2").value="";
    document.getElementById("pokedexImagem").src="assets/descanso.gif";
    document.getElementById("nomePokemon").innerText="";
    document.getElementById("numeroPokemon").innerText="";
    document.getElementById("tipoPokemon1").innerText="";        
    document.getElementById("tipoPokemon2").innerText="";        
    document.getElementById("alturaPokemon").innerText="";
    document.getElementById("pesoPokemon").innerText=""; 
}

