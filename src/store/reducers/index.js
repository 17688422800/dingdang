// import { NUM_ADD, NUM_JIAN} from '../actionType';
// 引入要合并谁
import { combineReducers } from "redux";
import animalReducer from "./animalReducer";
import fruitReducer from "./fruitReducer";
export default combineReducers({animalReducer,fruitReducer});
// // 1 定义默认数据，后期可以从接口中获取
// const defaultState = {
//    payload: {
//       num: 1000
//    }
//  };
 
// //  2 创建和对外暴露一个函数 返回state
// export default (state = defaultState,action) => {
//    // 当action被派发时(dispatch),会触发
//    if (action.type === NUM_ADD) {
//       // 复制一份旧的state
//       let newState = Object.assign({}, state);
//       newState.payload.num += action.value;
//       // 将新的state返回，即可触发store的更新
//       return newState;
//    }

//    if (action.type === NUM_JIAN) {
//       // 复制一份就的state
//       let newState = Object.assign({}, state);
//       newState.payload.num -= action.value;
//       return newState;
//    }

//    return state;
// }