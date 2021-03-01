const batman = document.querySelector('#list');
const submit = document.querySelector('.submit');

let movie = document.querySelector("#movie");

submit.addEventListener('click', (event)=>{
    event.preventDefault();
    batman.innerHTML = "";
    let searching = movie.value;
    let url = 'http://www.omdbapi.com/?s='+ searching + '&apikey=9c5cea33';



fetch(url).then(response => response.json()).then((data) =>{

  console.log(data);
    data.Search.forEach((element) => {
      batman.insertAdjacentHTML('beforeEnd', `
          <div class="container">
            <div class="row">
              <div class="col-sm image">
                  <img src="${element.Poster}"  alt="...">
                  <br>
                  <p> --------- </p>
                  <h3>${element.Title}</h3>
              </div>
            </div>
          </div>
        `);
      });
   });
});




