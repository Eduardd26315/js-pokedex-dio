const pokemonList = document.querySelector('#pokemonList');
const loadMoreButton = document.querySelector("#loadMoreButton");
const maxRecords = 151;
const limit = 12;
let offset = 0;




function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
                `<li class="pokemon ${pokemon.type}" data-pokemon-name="${pokemon.name}">
                    <span class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>`
            ).join('');
            pokemonList.innerHTML += newHtml;

            // Adicionar manipulador de evento de clique a cada elemento da lista
            const pokemonElements = document.querySelectorAll('#pokemonList li');
            pokemonElements.forEach(pokemonElement => {
                pokemonElement.addEventListener('click', () => {
                    const pokemonName = pokemonElement.getAttribute('data-pokemon-name');
                    const clickedPokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
                    showPokemonDetailsInNewPage(clickedPokemon);
                    
                });
            });
        })
        .catch(error => {
            console.error('Erro ao carregar Pokémon:', error);
        });

}



function loadMorePokemon() {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        // Remover botão "Load More" quando atingir o máximo de registros
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', loadMorePokemon);
