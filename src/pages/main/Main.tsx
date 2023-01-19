import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../../store';
import { logoutUser, getProfile} from '../../store/auth/actionCreators';

import { Login } from './components'

const Main = () => {
  const dispatch = useAppDispatch();


  const profile = useSelector(
    (state: IRootState) => !!state.auth.profileData.profile
  );

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успешно авторизовались,{profile}</div>
      <button onClick={() => dispatch(logoutUser()) }> Выйти  </button>
      <button onClick={() => dispatch(getProfile())}> Обновление пользователя</button>
    </div>
  )

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  );
};

export default Main