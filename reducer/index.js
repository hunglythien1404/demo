import {combineReducers} from 'redux';
import userInfo from './userInfo';
import dataTab1 from './dataTab1';
import dataTab2 from './dataTab2';
import dataTab3 from './dataTab3';

var myReducer = combineReducers(
  {
    userInfo,
    dataTab1,
    dataTab2,
    dataTab3,
  }
);

export default myReducer;