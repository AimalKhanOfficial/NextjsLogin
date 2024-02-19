'use client'

import { useState } from "react"

export default function another() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    let onLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert('hello world')
    }

    return <div>
        <div className="m-auto w-[30%] text-black bg-gray">
            <form className="flex flex-col">
                <input type="text" name="txtUserName" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <br/>
                <input type="password" name="txtPass" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button className="bg-white text-black w-[20%] m-auto" onClick={onLogin}>Click me</button>
            </form>
        </div>
    </div>
}