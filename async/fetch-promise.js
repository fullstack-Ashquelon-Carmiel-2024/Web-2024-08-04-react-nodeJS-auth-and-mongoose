let url = 'https://jsonplaceholder.typicode.com/users/1';


// fetch gets response object from the server
// if we started getting response object - it's the first .then
// and in it we run function .json() and it fetches JSON object
// from the body of the response, as it is promise also, we've
// got the second .then
fetch(url)
  .then(response => {
      return response.json()
  })
  .then(data => {

      console.log(data.address)
      console.log('id: ', data.id)

  })
  .catch(err => {

      console.log(err.message)

  })