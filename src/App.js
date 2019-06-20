import React, { Component, Fragment } from 'react';
// 1 引入 一个 可以接受 store的 函数  connect
import { connect } from "react-redux";
// 导入 type 常量
// import { NUM_ADD, NUM_JIAN} from './store/actionType';
// 导入 action
import { numAdd, numJian } from './store/actionCreator';

class App extends Component {
  render (){
    return (
      <Fragment>
        {/* 使用组件传递props, 存入一个新对象里面 */}
        <AddBtn {...this.props}></AddBtn>
        {/* 使用组件传递props, 存入一个新对象里面 */}
        <JianBtn {...this.props}></JianBtn>
        <h1>
        {this.props.num}
        </h1>
      </Fragment>
    )
  }
}

// 加
class AddBtn extends Component {
  render() { 
    return ( 
      <button onClick={this.props.numAdd}>+</button>
     );
  }
}
// 减
class JianBtn extends Component {
  render() { 
    return ( 
      <button onClick={this.props.numJian}>-</button>
     );
  }
}


const mapStateToProps = (state) => {
  return {
    num: state.fruitReducer.payload.num
  }
}

// 将行为action 链接到store和组件上
// const mapDispatch = (dispatch) => {
//   return {
//     // 点击事件中加
//     numAdd: () => {
//       // 创建一个action，负责将行为类型和数据交给reducer
//       const action = {
//         // type是一个自定义的字符串
//         type:NUM_ADD,
//         value:1
//       };
//       // 派发行为dispatch 会将action派发到 reducer中
//       dispatch(action);
//     },

//     // 点击事件中的减
//     numJian: () => {
//       const action = {
//         type:NUM_JIAN,
//         value:1
//       };
//       dispatch(action)
//     }
//   }
// }

const mapDispatch = (dispatch) => {
  return {
    numAdd: () => {
      // 修改为生成器生成的action
      dispatch(numAdd());
    },
    numJian: () => {
      // 修改为生成器生成的action
      dispatch(numJian());
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(App);
