import React, { useState, useEffect } from "react";
import {jwt, cart, login} from './cart';

import "./index.scss";

export default function CartContent(){
    const [token, setToken] = useState(null);


    return <div>
        JWT: {token}
    </div>
}