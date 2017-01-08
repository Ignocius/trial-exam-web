var CodedMsg = (function() {
  var root = document.querySelector('.data-reciver');
  var list = root.querySelector('ol');
  var messages = [];
  var ajax = new Ajax();

  function render(){
    messages.forEach(function(msg){
     let li = document.createElement('li');
    //  let span = document.createElement('span');
     list.appendChild(li);
    //  li.appendChild(span);
    //  span.textContent = ;
     li.textContent = 'Shift: '+ msg.shift + ' - ' + 'Text: '+ msg.text;
     console.log(msg);
    })
  }

  return {
    init: function(){
      ajax.getData(function(res){
        console.log(res);
        messages = res;
        render();
      })
    }
  }

})();

CodedMsg.init();
