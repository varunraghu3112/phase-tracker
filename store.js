import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
// import { persistStore, persistReducer } from 'redux-persist'
// import { AsyncStorage } from 'react-native'

// const persistConfig = {
//   key: 'charles_cool',
//   storage: AsyncStorage,
//   whitelist: ['allEvents', 'subCategories', 'workshops', 'trending']
// };

// const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
// export const persistor = persistStore(store);