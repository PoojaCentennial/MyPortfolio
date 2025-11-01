import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization? req.headers.authorization.split(" ")[1] : null;

    if(!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        //const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const decoded = jwt.verify(token, "MAYTHEFORCEBEWITHYOU");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"});
    }
}

export default authMiddleware;