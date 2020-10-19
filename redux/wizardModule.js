// WIZARD TYPES
const types = {
    SET_ACTIVE_STEP: 'set_active_step',
    RESET: 'reset'
}

// WIZARD REDUCER
const initialState = {
    activeStepId: 0
}

export const wizardReducer = (state = initialState, { type }, payload) => {
  switch (type) {
    case types.SET_ACTIVE_STEP:
      return {...state, activeStepId: payload}
    case types.RESET:
        return {...state, activeStepId: 0}
    default:
    return state
  }
}

// WIZARD ACTIONS
export default {
  _setActiveStepId(id){
    return { type: types.SET_ACTIVE_STEP, payload: id }
  },

  nextStep() {
    return (dispath, getState) => {
      const activeStepId = getState().activeStepId;
      dispath(_setActiveStepId(activeStepId + 1))
    }
  },
  prevStep(){
    return (dispath, getState) => {
      const activeStepId = getState().activeStepId;
      if (activeStepId > 0) {
        return dispath(_setActiveStepId(activeStepId - 1))
      }
    }
  }
}
