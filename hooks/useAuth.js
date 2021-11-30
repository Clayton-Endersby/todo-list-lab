import { useState, useEffect } from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import {auth} from './../firebase'

function UseAuth() {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const isUser = onAuthStateChanged(auth, (clientCredential)=>{
            if (clientCredential) {
                setUser(clientCredential)
            }else {
                setUser(null)
            }
        })
        return ()=>isUser()
    }, [])
    return user
}

export {UseAuth}