import {supabase} from "../../utils/supabaseClient"

export default async function registerUser(req, res) {
    const {email, password} = req.body;
    let {user, error} = await supabase.auth.signUp({email: email, password: password});
    if (error) {
        return res.status(400).json({error: error.message})
    }
    return res.status(200).json({user: user})
}