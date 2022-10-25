import React, { useState, useEffect } from "react";
import { login, useLoggedIn } from "./cart";

import "./index.scss";

export default function Login(){
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");

    return ()
}