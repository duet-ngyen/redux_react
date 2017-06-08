function sum(currentState, action){
  var DEFAULT_STATE = '???';
  if(currentState === undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch(action.type){
    case 'SUM':
      nextState = parseInt(action.a) + parseInt(action.b);
      // funcWithErr();
      return nextState;

    default:
      nextState = currentState;
      return nextState;
  }
}

function funcWithErr(){
  throw Error('an error from sum')
}
