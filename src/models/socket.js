import {socketListen,socketStatus} from '@/services/socketApi';
import { notification } from 'antd';

export default {
  namespace: 'socket',

  state: {
  },


  subscriptions: {

    setupHistory ({ dispatch, history}) {
      history.listen((location) => {
        if(!socketStatus()&&location.pathname.indexOf('user/login')<0&&sessionStorage.getItem('token') !== undefined&&sessionStorage.getItem('token') !==null){
          socketListen((data)=> {
            switch (data.type) {
              case 'E_TICKS|':
                dispatch({
                  type: 'tick/updateTicks', 
                  payload: data.payload,
                });
                dispatch({
                  type: 'basicTradeForm/updateTick', 
                  payload: data.payload,
                });
                break;
              case 'disconnect':
                notification.error({
                  message: `SocketIO`,
                  description: "连接已断开",
                });
                dispatch({
                  type: 'login/logout',
                });
                break;
              case 'connect_failed':
                notification.error({
                  message: `SocketIO`,
                  description: "建立连接失败",
                });
                dispatch({
                  type: 'login/logout',
                });
                break;
              case 'connect':
                notification.info({
                  message: `SocketIO`,
                  description: "已建立连接"
                });
                break;
              case 'connecting':
                break;
              case 'error':
                notification.error({
                  message: `SocketIO`,
                  description: "错误",
                });
                dispatch({
                  type: 'login/logout',
                });
                break;
              case 'connect_error':
                notification.error({
                  message: `SocketIO`,
                  description: "建立连接错误",
                });
                dispatch({
                  type: 'login/logout',
                });

                break;
              default:
                  break;
            }
          })
        }
      })
    },

  },
};
