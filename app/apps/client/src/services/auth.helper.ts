import Cookies from "js-cookie"

export interface IAuthData {
   user: {
      _id: string,
      name: string
   } | null,
   accessToken: string,
}

export const saveTokenStorage = (data: IAuthData) => {
   Cookies.set('accessToken', data.accessToken)
} 

export const removeTokenStorage = () => {
   Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
   saveTokenStorage(data)
   localStorage.setItem('user', JSON.stringify(data.user))
}