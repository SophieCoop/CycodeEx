export const UNSELECT_OPTION = 'UNSELECT_OPTION';
export const SELECT_OPTION = 'SELECT_OPTION';
export const ADD_CUSTOM_OPTION = 'ADD_CUSTOM_OPTION';
export const MODAL_CLICK_AWAY_EVENT = 'MODAL_CLICK_AWAY_EVENT';
export const UPDATE_SUBSCRIBE = 'UPDATE_SUBSCRIBE';

export const unselectOption = (id:number) => {
  return {
    type: UNSELECT_OPTION,
    payload: id
  };
};


export const selectOption = (id:number) => {
  return {
    type: SELECT_OPTION,
    payload: id
  };
};


export const addCustomOption = (itemTitle: string) => {
  return {
    type: ADD_CUSTOM_OPTION,
    payload: itemTitle
  };
};

export const eventModalClickAway = () => {
  return {
    type: MODAL_CLICK_AWAY_EVENT,
    payload: null
  };
};

export const subscribeEvent = (isSubscribe: boolean) => {
  return {
    type: UPDATE_SUBSCRIBE,
    payload: isSubscribe
  };
};