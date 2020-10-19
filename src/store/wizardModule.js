// WIZARD TYPES
const types = {
    SET_ACTIVE_STEP_ID: 'set-active-step-id'
}

// WIZARD REDUCER
const initialState = {
    activeStepId: 1
}

export const wizardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.SET_ACTIVE_STEP_ID:
        return { ...state, activeStepId: payload }
      default:
        return state
    }
  }

// WIZARD ACTIONS
export default {
    _setActiveStep(id) {
        return {type: types.SET_ACTIVE_STEP_ID, payload: id}
    },
    nextStep(){
        return (dispatch, getState) => {
            const activeStepId = getState().wizard.activeStepId;
            return dispatch(this._setActiveStep(activeStepId + 1))
        }
    },
    backStep(){
        return (dispatch, getState) => {
            const activeStepId = getState().wizard.activeStepId;
            if (activeStepId > 0) {
                return dispatch(this._setActiveStep(activeStepId - 1)) 
            }
        }
    }
}