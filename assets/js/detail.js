function showPokemonDetailsInNewPage(pokemon) {
    const newPage = window.open('', '_blank');
    const pageContent = `
        <html>
        <head>
            <title>${pokemon.name} Details</title>
            <link rel="stylesheet" href="assets/css/global.css">
            <link rel="stylesheet" href="assets/css/pokedex.css">
            <link rel="stylesheet" href="assets/css/style-details.css">
        </head>
        <body>
            <div class="pokemon ${pokemon.type}" data-pokemon-name="${pokemon.name}">
                <h1>${pokemon.name}</h1>
                <div class="poke-img-container">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="detail">
                    <ul class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ul>
                </div>
                <ol lass="detail">
                    <li><strong>Species:</strong> ${pokemon.species}</li>
                    <li><strong>Height:</strong> ${pokemon.height}</li>
                    <li><strong>Weight:</strong> ${pokemon.weight}</li>
                    <li><strong>Abilities:</strong> ${pokemon.abilities}</li>
                </ol>           
                <button class="button-details"  type="button" onclick="window.close()">
                <span class="button-content">voltar </span>
                </button>
            </div>
        </body>
        </html>
    `;

    newPage.document.write(pageContent);
}
