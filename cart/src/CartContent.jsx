import React, { useState, useEffect } from "react";
import Login from './Login';
import {jwt, cart, login} from './cart';
import MiniCart from "./MiniCart";

import "./index.scss";


export default function CartContent(){
    const [token, setToken] = useState(null);

    useEffect(() => {
        return jwt.subscribe((c) => {
            setToken(c);
        })
    },[])

    return <div>
        JWT: {token}
        <Login />
        <MiniCart />
    </div>
}