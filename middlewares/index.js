const logger = function(store){
  return function(next){
    return function(action){
      console.group('logger');
      console.log('dispatching == ', action);
      console.log('currentState == ', store.getState());
      next(action);
      console.log('Finally State == ', store.getState());
      console.groupEnd('logger');
    }
  }
}

const crashRepoter = function(strore){
  return function(next){
    return function(action){
      try{
        next(action);
      }catch(err){
        console.group('Crash Repoter')
        console.error('error with action: ', action)
        console.error(err)
        console.groupEnd('Crash Repoter')
      }
    }
  }
}

const thunk = function(store){
  return function(next){
    return function(action){
      console.group("Thunk")
      if(typeof action === 'function'){
        console.log('dispatching action is a func == ', action);
        console.log('currentState action is a func  == ', store.getState());
        action(store.dispatch, store.getState());
      }else{
        console.log('dispatching action is NOT a func  == ', action);
        console.log('currentState == action is NOT a func ==', store.getState());
        next(action);
      }
      console.groupEnd("Thunk")
    }
  }
}
