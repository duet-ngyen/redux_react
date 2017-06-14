var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashRepoter, thunk));

var valueEl = document.getElementById('value');
function render() {
  valueEl.innerHTML = store.getState().count.result;
  $('#sum').text(store.getState().sum);
  if(store.getState().count.loading){
    $("#status").text("loading...");
  }else{
    $("#status").text("done");
  }

  $("#imagesStatus").text(store.getState().imgur.loading);

  var data = store.getState().imgur.data;
  var list = '';
  for(var i=0;i<data.length;i++){
    list += ' ' + data[i].name;
  }

  $("#imageList").text(list);
}
render();
store.subscribe(render);
