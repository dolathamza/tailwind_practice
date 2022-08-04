import React, {useState} from 'react';
import Card from '../Card/Card'
import {supabase} from '../../utils/supabaseClient';
import {useRouter} from "next/router";


const Login = () => {
    const [Loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    function validateForm(email, password) {
        if (email.length === 0 || password.length === 0) {
            setError('Please fill in all fields')
            return false
        } else if (!/\S+@\S+\.\S+/.test(email) || password.length < 6) {
            setError('Please enter a valid email and password')
            return false
        } else if (password.length > 20) {
            setError('Password must be less than 20 characters')
            return false
        }

    }


    const handleLogin = async (email, password) => {
        try {

            setLoading(true);
            await validateForm(email, password);
            const {error, session, user} = await supabase.auth.signIn({email: email, password: password});
            console.log("accessed")
            error ? console.log(error) : console.log("session is ", session, "user is ", user), router.push("./protected");


        } catch (error) {
            alert(error.error_descripiton || error.message)
        } finally {

            setLoading(false);
        }
    }

    return (
        <Card>
            <form>
                <div className={"flex flex-wrap -mx-3 mb-6"}>
                    <div className={"w-full px-3"}>
                        <label className={"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}>
                            Email
                        </label>
                        <input
                            className={"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
                            id={"Email"}
                            type={"email"}
                            placeholder={"Email"}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    {error || email.length == 0 ? <p className={"text-red-500 text-xs italic"}>{error}</p> : null}

                </div>
                <div className={"flex flex-wrap -mx-3 mb-6"}>
                    <div className={"w-full px-3"}>
                        <label className={"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}>
                            Password
                        </label>
                        <input
                            className={"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
                            id={"Password"}
                            type={"password"}
                            placeholder={"Password"}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    {error || password.length == 0 ? <p className={"text-red-500 text-xs italic"}>{error}</p> : null}
                </div>

                <button
                    className={"bg-gradient-to-r from-indigo-700  to-purple-900  hover:scale--110 transition ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"}
                    type={"button"}
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin(email, password)
                    }}
                    disabled={Loading}

                >

                    Submit
                </button>
                <span>{Loading ? 'loading' : "send magic link"}</span>

            </form>
        </Card>
    )
}

export default Login;


