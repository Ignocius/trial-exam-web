var FetchObj = function(){
  this.url = 'http://localhost:3600/decode/all';

  this.getData = fetch(this.url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        }
        // Examine the text in the response

        return response.json();
        }).then(function(data){
          console.log(data);
          return data;
      })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}
