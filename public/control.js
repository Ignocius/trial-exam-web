var Control = (function(){
  var button = document.querySelector('button');
  // var loading = document.querySelector('.loading');
  var loading = document.querySelector('span');
  var textInput = document.querySelector('input[type=text]');
  var numberInput = document.querySelector('input[type=number]');
  // var ajax = new Ajax();
  var fetchData = new FetchObj();

  button.addEventListener('click', function(){
    var returnedData = {};

    returnedData.text = textInput.value;
    returnedData.shift = numberInput.value;
    // console.log(returnedData);
    // sendData(JSON.stringify(returnedData));
    loading.textContent = "LOADED";
    sendData(returnedData);
  })

  function sendData(collectedData) {
      fetchData.sendData(collectedData);
      loading.textContent = "";
      // ajax.decodeData(collectedData, function(res){
      // console.log(res);
    // })
  }

})();
