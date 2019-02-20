import io from 'socket.io-client';

let socket = '';

export function socketStatus() {
  return socket !== '' && socket.connected;
}

export function socketListen(action) {
  if (socket === '') {
    try {
      const tmpHostname = window.location.hostname;
      // const tmpPort = window.location.port-1
      const tmpPort = 9098;
      socket = io.connect(
        `${tmpHostname}:${tmpPort}?token=${sessionStorage.getItem('token')}`,
        {
          transports: ['websocket']
        }
      );

      socket.on('E_TICKS|', data => {
        action({
          type: 'E_TICKS|',
          payload: data
        });
      });

      socket.on('disconnect', () => {
        action({
          type: 'disconnect',
          payload: 'SocketIO已断开'
        });
        socket.disconnect();
        socket = '';
      });
      socket.on('connect_failed', () => {
        action({
          type: 'connect_failed',
          payload: 'SocketIO连接失败'
        });
        socket.disconnect();
        socket = '';
      });
      socket.on('connect', () => {
        action({
          type: 'connect',
          payload: 'SocketIO已连接'
        });
      });
      socket.on('connecting', () => {
        action({
          type: 'connecting',
          payload: 'SocketIO正在连接'
        });
      });
      socket.on('error', () => {
        action({
          type: 'error',
          payload: 'SocketIO错误'
        });
        socket.disconnect();
        socket = '';
      });
      socket.on('connect_error', () => {
        action({
          type: 'connect_error',
          payload: 'SocketIO连接错误'
        });
        socket.disconnect();
        socket = '';
      });
    } catch (err) {
      action({
        type: 'connect_error',
        payload: 'fail'
      });
      socket.disconnect();
      socket = '';
    }
  }
}
