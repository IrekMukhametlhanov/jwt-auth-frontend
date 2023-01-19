import Endpoints from "../endpoints";
import {AxiosPromise} from "axios";
import { axiosInstace } from "../instance";
import { ILoginRequest, ILoginResponse } from "./types";



export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
axiosInstace.post(Endpoints.AUTH.LOGIN, params)

export const refreshToken = (): AxiosPromise<ILoginResponse> => axiosInstace.get(Endpoints.AUTH.REFRESH)

 export const logout = (): AxiosPromise => {
    return axiosInstace.get(Endpoints.AUTH.LOGOUT)
 }

 export const getProfile = ():AxiosPromise<string> => axiosInstace.get(Endpoints.AUTH.PROFILE)