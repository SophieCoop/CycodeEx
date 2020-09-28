import { UPDATE_SUBSCRIBE } from '../actions';

export default (state = false, action: any) => {
  switch (action.type) {
    case UPDATE_SUBSCRIBE:
      return action.payload;

    default:
      return state;
  }
};
