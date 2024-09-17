document.addEventListener("DOMContentLoaded", function () {
    const cardsSection = document.getElementById("cards-section");

    
    function carregarCards() {
        dadosCards.forEach((item) => {
            const card = `
                <div class="card">
                    <img src="${item.img}" alt="${item.titulo}">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a href="${item.link}" class="card-button" target="_blank">Saiba mais</a>
                </div>
            `;
            cardsSection.innerHTML += card;
        });
    }

    // Função para pesquisa
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const termo = searchInput.value.toLowerCase();
        const cardsFiltrados = dadosCards.filter(item => item.titulo.toLowerCase().includes(termo) || item.descricao.toLowerCase().includes(termo));
        cardsSection.innerHTML = ''; // Limpar os cards atuais
        cardsFiltrados.forEach((item) => {
            const card = `
                <div class="card">
                    <img src="${item.img}" alt="${item.titulo}">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a href="${item.link}" class="card-button" target="_blank">Saiba mais</a>
                </div>
            `;
            cardsSection.innerHTML += card;
        });
    });

    carregarCards();
});
