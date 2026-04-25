import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();
import axios from 'axios'
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    //ab backend ke sath connection bannae ja raha h 
    const backendUrl = import.meta.env.VITE_BACKEND_URL


    const navigate = useNavigate();
    const [credit, setCredit] = useState(false)

    const loadCreditData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credit'
                , { headers: { token } })
            if (data.success) {
                setCredit(data.credit)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/image/generate-image',
                { prompt },
                { headers: { token } }
            )

            if (data.success) {
                return data.resultImage   // 👈 IMPORTANT
            } else {
                toast.error(data.message)
                loadCreditData()

                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }
    useEffect(() => {
        if (token) {
            loadCreditData()
        }
    }, [token])
    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl,
        token, setToken, credit, setCredit, loadCreditData, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;
