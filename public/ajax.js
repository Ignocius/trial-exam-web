var Ajax = function(){
  this.APIEndpoint = 'http://localhost:3600/';

  this.getData = function(callback) {
    this.open('GET', false, 'decode/all', callback);
  }

  this.decodeData = function(data, callback) {
    this.open('POST', 'decode',data,  callback);
  }

  this.open = function(method, data, resource, callback) {
    var xhr = new XMLHttpRequest();
    data = (data) ? data : null;
    xhr.open( method, this.APIEndpoint + resource)

    if (method !== 'DELETE') {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.send( JSON.stringify(data));
    xhr.onreadystatechange = function (rsp) {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        callback( JSON.parse(xhr.response));
      }
    }
  }
}
