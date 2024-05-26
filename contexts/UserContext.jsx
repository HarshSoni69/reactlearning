import React from 'react';
import { createContext } from 'react';
const UserContext=createContext({
    user:{
    name:"Harsh",
    email:"sexyboy@gmail.com",
}});
export default UserContext;