import type { NextApiRequest, NextApiResponse } from "next";

import { generate } from "../../../lib/jwt";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const token = generate({ userId: "0EKaWJPHXzmXLmVz6rwp" })
    res.send({ token })
}