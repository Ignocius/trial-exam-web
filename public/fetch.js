var FetchObj = function(){
  this.url = 'http://localhost:3600/';

  this.response = new Response('.....', {
	ok: false,
	status: 404,
	url: '/'
  });

  this.getData = function(){
    return fetch(this.url + 'decode/all')
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

  this.sendData = function(data) {
    return fetch(this.url + 'decode/', {
        method  : 'post',
        headers : new Headers({
            'Content-Type': 'application/json'
        }),
        body    : JSON.stringify(data)
    }
  ).then(function(response){
      return response.json();
    }).then(function(j){
      console.log(j);
    });
  }

// }).then( response => {
//     return response.json(); // server returned valid JSON
// }).then( parsed_result => {
//     console.log(parsed_result);
// });


}
