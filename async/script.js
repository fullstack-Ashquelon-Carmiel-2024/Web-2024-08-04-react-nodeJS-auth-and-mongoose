const inpMovie = document.querySelector('#inp-movie');
const btnMovie = document.querySelector('#btn-movie');
const resMovie = document.querySelector('#inp-movie ~ .result');

const btnRandomDog = document.querySelector('#btn-random-dog');
const imgRandomDog = document.querySelector('#dogs img');
const breedRandomDog = document.querySelector('#dogs .dog-breed');
/** HTTP METHODS: GET - get the data
 *               POST - add the data
 *                PUT - update the data
 *             DELETE - delete the data
 */
const getResult = (url,options, whereToPut,checkRes,resultName,errName) => {
    console.log(url)
    fetch(url,options)
      .then(response => response.json())
      .then(response => {
        
        if (response[checkRes]==='True') {
            console.log(response[resultName])
            const newUl = document.createElement('ul');
            whereToPut.append(newUl);
            response[resultName].forEach(movie => {
                console.log(movie)
                let newLi = document.createElement('li');
                newLi.innerText = movie.Title + ', ' + movie.Year;
                if (movie.Poster !== 'N/A') {
                    const newImg = document.createElement('img');
                    newImg.src = movie.Poster;
                    newLi.append(newImg);
                }
                newUl.append(newLi);
            })
        } else {
            console.log(response[errName])
            whereToPut.innerText = response[errName]
        }
      })
      .catch(err => {
        console.log('ERROR-ERROR-ERROR')
        console.log(err.message)
        console.log(err)
    })

}

btnMovie.addEventListener('click',() => {

    let str = inpMovie.value;
    let url = `https://movie-database-alternative.p.rapidapi.com/?s=${str}&r=json`;
    getResult(url,altMovieDBOptions,resMovie,'Response','Search','Error');
})

btnRandomDog.addEventListener('click',() => {
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let src = response.message;
            imgRandomDog.src = src;
            let breedsId = src.indexOf('breeds/')+7;
            let breedsEndId = src.indexOf('/',breedsId);
            console.log(breedsId)
            console.log(breedsEndId)
            console.log(src.slice(breedsId,breedsEndId))
            breedRandomDog.innerText = src.slice(breedsId,breedsEndId);
        })
        .catch(err => {
            console.log(err.message)
            console.log(err)
        })
})