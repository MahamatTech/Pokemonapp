let URL = "json/pokemon.json";
let pokemon = [];
$.getJSON(URL, function(results){
    pokemon = results.map(function(e){return e;});
    console.log(pokemon);    
}); 
 let percentage = (currValue) => (currValue /  15 * 100);
 let generatestar = function(value){ 
    let noofstars = "";
    for (i = 0; i < value; i++) {
        noofstars += "*";
    }
    return noofstars;
};
document.getElementById("btnFind").addEventListener("click", function()
{
    let findpokemon = document.getElementById('txtName').value;
    if(findpokemon.length === 0 && !isNaN(findpokemon))
    {
        alert("Please enter the valid pokemon name to search!");
        document.getElementById('txtName').focus();
        return false;
    }
    console.log(findpokemon); 
    
    let pokemonFilter = [];
        
    if(isNaN(findpokemon)) {
        pokemonFilter = pokemon.filter(function(d) { return d.pokemon === findpokemon; });

if(pokemonFilter.length > 0)
{
console.log(pokemonFilter);
let pokemonstats ="<b>Pokemon Stats</b><br>";

pokemonFilter.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        if(key === "battled" || key === "pokemon"){
            //Find the battled pokemon
            if(key === "battled")
            { 
                let battlematch = pokemonFilter.map(function(d) { return d.battled; });
            }
        }else{
            console.log(`${key} ${value}`);  
            pokemonstats += `${key}: ${percentage(value).toFixed(2)}% (${generatestar(value)})<br>`;

        }
    });
});
pokemonstats += pokemonFilter["stamina"]+ "<br>";
document.getElementById('results').innerHTML = pokemonstats;
}
}
});

