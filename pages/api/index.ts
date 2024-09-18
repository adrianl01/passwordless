import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../lib/firestore"
import { User } from "../../lib/users";
import { Auth } from "../../lib/auth";
import { findOrCreateAuth } from "../../lib/controllers/auth";
import { sendCode } from "../../lib/controllers/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    // const newUser = await firestore.collection("auth").add({
    //     email: "ga.l.1601@gmail.com"
    // })

    // const marce = new Auth("O74j21L7Yj6YpSqLcF9h")
    // await marce.pull()
    // marce.data.test = "updated data"
    // await marce.push()
    const auth = await sendCode(req.body.email)
    // const newUser = await User.createNewUser({
    //     email: "test+1"
    // })
    // newUser.data.test = "updated data"
    // await newUser.push()
    res.send(auth)
}