import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import OptionsReducer from './optionsReducer';
import SubscribeReducer from './subscribeReducer';


const rootReducer = combineReducers({
    options: OptionsReducer,
    isSubscribed: SubscribeReducer
});

const rootPersistConfig = {
    key: 'options',
    storage,
    blacklist: ['navigation']
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
export default persistedReducer;

