import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            
            const response = await axios.post("http://localhost:5000/api/user/login", { email });
            if (response.status === 200) {
                navigate("/dashboard");
            }}
       catch {
        setError('erreur de connextion')
       };
    
    };
    
  return (
    <section className='flex flex-col justify-center items-center bg-center gap-y-3 gap-x-6 w-full h-full'>
        <h1 className="text-5xl text-green-700">Connecter-Vous</h1>

        <div className="flex flex-row gap-x-2">
           <div className="h-10 w-10 border p-2 rounded-full object-center object-contain">
            <img src="https://img.icons8.com/?size=100&id=98972&format=png&color=000000" alt="facebook"/>
           </div>
           <div className="h-10 w-10 border p-2 rounded-full object-center object-contain">
            <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=000000" alt="gmail"/>
           </div>
           <div className="h-10 w-10 border p-2 rounded-full object-center object-contain">
            <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000" alt="linkedin"/>
           </div>
        </div>

        <div className="flex justify-center items-center w-full">
            <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-2.5">
                <input type="email" placeholder="Email" className="border p-2"
                value= {email} onChange={e => setEmail(e.target.value)} required/>

            <div className="flex h-10 w-52 justify-center items-center">
                  <button
                        type="submit"
                        className="h-10 w-3/5 bg-green-700 text-white font-bold text-center rounded-2xl mt-2"
                    >
                        Connexion
                    </button>
                </div>
            </form>
        </div>

        
    {error && <span className="text-red-500">{error}</span>}
    

    </section>
  )
}

export default Login