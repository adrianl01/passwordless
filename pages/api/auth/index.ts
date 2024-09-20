import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firestore"
import { User } from "../../../lib/users";
import { Auth } from "../../../lib/auth";
import { findOrCreateAuth } from "../../../lib/controllers/auth";
import { sendCode } from "../../../lib/controllers/auth";
import { sendEmail } from "../../../lib/mailjet";

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const auth = await sendCode(req.body.email)

    const sendEmailRes = await sendEmail(auth.data)

    res.send(sendEmailRes)
}