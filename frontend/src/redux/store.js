import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

// Kết hợp tất cả các reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // Các reducer khác có thể được thêm vào đây
});

// Tạo store với middleware, sử dụng Thunk middleware cho các action bất đồng bộ
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
