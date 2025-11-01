import jwt from 'jsonwebtoken';


const generateToken = (user) => {
    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debug log
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username
        },
        //process.env.JWT_SECRET,
        "MAYTHEFORCEBEWITHYOU",
        { 
            expiresIn: '30d'
        }
    );
}

export default generateToken;