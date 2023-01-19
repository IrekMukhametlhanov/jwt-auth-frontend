import axios, { Axios, AxiosError } from 'axios';
import { store } from "../store"
import { getAccessToken, logoutUser } from "../store/auth/actionCreators";
import Endpoints from './endpoints';


export const axiosInstace = axios.create({})

const urlSkipAuth = [Endpoints.AUTH.LOGIN, Endpoints.AUTH.REFRESH , Endpoints.AUTH.LOGOUT]

axiosInstace.interceptors.request.use(async (config) => {
    if(config.url && urlSkipAuth.includes(config.url)){
        return config
    }
    
    const accessToken = await store.dispatch(getAccessToken())

    if(accessToken){
        const autharization =`Bearer ${accessToken}`
       
    // @ts-expect-error
        config.headers = {
            ...config.headers,
            authorization: autharization
        }
    }
    return config
})

axiosInstace.interceptors.response.use(
 (response) => response,
 (error: AxiosError) => {
    const isLoggedIn = !! store.getState().auth.authData.accessToken
    if((error.response?.status === 401) && isLoggedIn && error.request.url !== Endpoints.AUTH.LOGOUT){
        store.dispatch(logoutUser())
    }
    throw error
 }

)