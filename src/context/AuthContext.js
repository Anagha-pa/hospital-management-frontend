import { createContext,useState,useEffect, useContext } from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=> {

    const[authTokens,setAuthToken]= useState(null)
    const[user,setUser] = useState(null)

    const loginUser = async(e) => {
        const response = fetch ("http://127.0.0.1:8000/api/token/",{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify({'username':null,'password':null})
        })
    }
    const contentData = {
        loginUser : loginUser
    }



    const contextData ={

    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

