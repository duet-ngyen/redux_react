function imgur(currentState, action){
  var DEFAULT_STATE = {data: [], loading: "please click..."};
  var nextState = Object.assign({}, currentState)

  if(currentState === undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch(action.type){
    case 'IMAGES':
      nextState.loading = 'loadone';
      nextState.data = action.data;
      return nextState;

    case 'IMAGES_LOADING':
      nextState.loading = 'loading...';
      return nextState;
  }
}
