import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
try {
    const Authheader = req.headres.authorization
    if (!Authheader) {
        return res.status(400).json("Header missing")
    }
    if (!Authheader.startswitch("Bearer")) {
        return res.status(400).json("format is invalid");

    }
    const token = Authheader.split(" ")[1];
    if (!token) {
                return res.status(401).json("token missing");

    }
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user=decode
} catch (error) {
                    return res.status(500).json({msg:error.message});

    }
}