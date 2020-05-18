import { createStore } from 'redux';
import { calculateStep } from './utils/calculateStep';

const initialState = {
  step: 1,
  values: {
    employmentStatus: 'employed',
    proprietorships: 1,
    filingStatus: ['single']
  }
};

const actionTypes = {
  PREVIOUS_STEP: 'PREVIOUS_STEP',
  NEXT_STEP: 'NEXT_STEP',
  CHANGE_VALUE: 'CHANGE_VALUE'
};

const previousStep = () => ({
  type: actionTypes.PREVIOUS_STEP
});

const nextStep = () => ({
  type: actionTypes.NEXT_STEP
});

const changeValue = ({ value, fieldName }) => ({
  type: actionTypes.CHANGE_VALUE,
  value,
  fieldName
});

export const actions = {
  previousStep,
  nextStep,
  changeValue,
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.PREVIOUS_STEP:
    case actionTypes.NEXT_STEP:
      const direction = action.type === actionTypes.PREVIOUS_STEP ? -1 : 1;
      return {
        ...state,
        step: calculateStep(state, direction)
      }
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          [action.fieldName]: action.value,
        }
      }
    default:
      return state;
  }
};

export const store = createStore(reducer);