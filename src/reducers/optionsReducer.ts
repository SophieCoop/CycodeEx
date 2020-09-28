import { UNSELECT_OPTION, SELECT_OPTION, ADD_CUSTOM_OPTION } from '../actions';
import ChipItem from '../components/interfaces/chipItem';
import defaultOptions from '../assets/options.json';

const selectOption = (state:ChipItem[], itemId:number, isSelected: boolean) => {
  return state.map(chipItem => {
    if (chipItem.id === itemId) {
      return { ...chipItem, isSelected };
    }
    return chipItem;
  });
}

export default (state = defaultOptions.options, action: any) => {
  switch (action.type) {
    case UNSELECT_OPTION:
      return selectOption(state, action.payload, false);
      
    case SELECT_OPTION:
      return selectOption(state, action.payload, true);
    
    case ADD_CUSTOM_OPTION:
      return [ ...state, { id: state.length, label: action.payload, isSelected:true}]
  
    default:
      return state;
  }
};
