import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data)
{
    return axios.post(`${MAIN_URL}login`,data)
}
export function userRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data)
}
export function usercontact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}
export function ApplyCoupon(data)
{
    return axios.post(`${MAIN_URL}applycoupon`,data)
}
export function category(data)
{
    return axios.get(`${MAIN_URL}category`,data)
}

export function productByid(data)
{
    return axios.get(`${MAIN_URL}productbyid/`+data)
}

export function productDetails(data)
{
    return axios.get(`${MAIN_URL}productdetails/`+data)
}


export function CMSByid(data)
{
    return axios.get(`${MAIN_URL}cmsbyid/`+data)
}

export function changePassword(data)
{
    let token=localStorage.getItem('access_token');
    return axios.post(`${MAIN_URL}changepassword`,data,{ headers: { "Authorization": `Bearer ${token}` } })
}
export function changeProfile(data)
{
    let token=localStorage.getItem('access_token');
    return axios.post(`${MAIN_URL}changeprofile`,data,{ headers: { "Authorization": `Bearer ${token}` } })
}


export function UserDetails(data)
{
    return axios.post(`${MAIN_URL}userdetails`,data)
}
export function UserOrderDetails(data)
{
    return axios.post(`${MAIN_URL}userorderdetails`,data)
}

export function MyWishlist(data)
{
    return axios.post(`${MAIN_URL}wishlist`,data)
}

export function Trackorder(data)
{
    return axios.get(`${MAIN_URL}search/`+data)
}
export default {userLogin,userRegister,usercontact,category,productDetails,changePassword,
    changeProfile,CMSByid,ApplyCoupon,UserDetails,UserOrderDetails,MyWishlist,Trackorder};