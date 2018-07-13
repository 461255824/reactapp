
import {delay,takeEvery} from 'redux-saga';
import {take,fork,call, put } from 'redux-saga/effects';
function * sayHello(){
    console.log('执行异步加载')
    yield call(delay,2000)
    yield put({type:'INCREMENT',data:Math.random()})
}
const sagas =  function *watcher(){
    yield takeEvery("Add",sayHello);
}
export default sagas;