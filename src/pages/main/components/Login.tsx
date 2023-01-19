import React, {FormEvent, useState} from 'react';
import { useAppDispatch } from '../../../store';
import { loginUser } from '../../../store/auth/actionCreators';


export const Login = () => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({login, password}));
  }

  return (
   <form onSubmit={handleSubmit}>
    <div>
     <label htmlFor="login">Login</label>
     <input onChange={(e) => setLogin(e.target.value)} value={login} name="login" type="text" />
     </div>
     <div>
      <label htmlFor="pass">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} name="pass" type="password" />
     </div>
     <button>Submit</button>
   </form>
  )
}

export default Login