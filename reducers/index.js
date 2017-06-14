function combineReducer(currentState, action){
  console.group('ConbinerReducer')
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action),
    imgur: imgur(nextState.imgur, action)
  }
  console.info('Update state to new value from reducer == ', nextState);
  console.groupEnd('ConbinerReducer')
  return nextState;
}
