import { SEND_FORGET_PASSWORD_EMAIL, UPDATE_AUTH_USER, UPDATE_LOAD_USER, INIT_URL ,LOGOUT_ACTION} from 'app/utils/constants/reduxActions';

const INIT_STATE = {
  authUser: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')) || {},
  loadUser: false,
  send_forget_password_email: false,
  initUrl: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
        loadUser: true,
      };
    }
    case UPDATE_LOAD_USER: {
      return {
        ...state,
        loadUser: action.payload,
      };
    }
    case SEND_FORGET_PASSWORD_EMAIL: {
      return {
        ...state,
        send_forget_password_email: action.payload,
      };
    }
    case LOGOUT_ACTION: {
      return {
          ...state,
          authUser: {},
      };
  }
    case INIT_URL: {
      return { ...state, initURL: action.payload };
    }
    default:
      return state;
  }
};
