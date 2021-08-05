const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
const modal_body = document.querySelector('.modal-body');
let searchQuery = '';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

const fetchAPI = () => {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${searchQuery}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "955c636fd2msh67a255b1d5fa67dp1809c2jsn145e1553b0ab",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then(response => response.json()) // Getting the actual response data
        .then(data => {
            console.log(data.results);
            generateHTML(data.results);
        })
        .catch(err => {
            console.error(err);
        });


}
let arr = [];
const viewRecipe = (id) => {

    modal_body.innerHTML = "";
    arr[id].forEach((recipe, item) => {
        modal_body.innerHTML += `
      <p style="font-size: 15px;">${++item} : ${recipe}</p>`
    });

}

const generateHTML = (results) => {
    container.classList.remove('initial');
    var element = document.getElementById("image");
    element.style.display = 'none';
    let generatedHTML = '';
    let i = 0;
    results.map(result => {

        arr.push(result.instructions.map(ingredient => {
            return ingredient.display_text;
        }));

        generatedHTML +=

            `
        <div class="item">
            <img src="${result.thumbnail_url}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.name}</h1>
                <button class="view-button" data-toggle="modal" data-target="#recipe" onclick="viewRecipe(${i++})">View Recipe</button>
            </div>
            <p class="item-data">Meal : ${result.recirc_feeds.meal[0]}</p>
            <p class="item-data"> ${result.yields}</p>
        </div>
       `
    })
    searchResultDiv.innerHTML = generatedHTML;
}