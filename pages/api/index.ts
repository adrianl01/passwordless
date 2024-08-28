import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../lib/firestore"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    // const newUser = await firestore.collection("auth").add({
    //     email: "ga.l.1601@gmail.com"
    // })
    res.send(process.env.FIREBASE_CONNECTION)
}