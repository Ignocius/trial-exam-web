var Control = (function(){
  var button = document.querySelector('button');
  var textInput = document.querySelector('input[type=text]');
  var numberInput = document.querySelector('input[type=number]');
  var ajax = new Ajax();

  button.addEventListener('click', function(){
    var returnedData = {};
    returnedData.text = textInput.value;
    returnedData.shift = numberInput.value;
    // console.log(returnedData);
    // sendData(JSON.stringify(returnedData));
    sendData(returnedData);
  })

  function sendData(collectedData) {
    ajax.decodeData(collectedData, function(res){
      console.log(res);
    })
  }

})();
