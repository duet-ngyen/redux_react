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
}
render();
store.subscribe(render);
