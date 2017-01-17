var CodedMsg = (function() {
  var root = document.querySelector('.data-reciver');
  var list = root.querySelector('ol');
  var messages = [];
  // var ajax = new Ajax();
  var fetchData = new FetchObj();


  function render(){
    messages.then(function(data){
      console.log(data);
      data.forEach(function(msg){

    // messages.each(function(msg){
     let li = document.createElement('li');
    // //  let span = document.createElement('span');
     list.appendChild(li);
    // //  li.appendChild(span);
    // //  span.textContent = ;
     li.textContent = 'Shift: '+ msg.shift + ' - ' + 'Text: '+ msg.text;
    //  console.log(msg);
      })
    })
  }

  return {
    init: function(){
      messages = fetchData.getData();
      console.log(messages);
      // console.log(messages);
      render();
      // ajax.getData(function(res){
      //   // console.log(res);
      //   messages = res;
      //   render();
      // })
    }
  }

})();

CodedMsg.init();
