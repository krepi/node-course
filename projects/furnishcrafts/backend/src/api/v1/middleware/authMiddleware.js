import {validateJWT} from '../../../helpers/customJWT/jwtHelper.js'

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    const user = validateJWT(token);
    if (!user) return res.sendStatus(403);

    req.user = user;
    next();
};

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Access forbidden: Admins only' });
        }
        next();
    };
};

export  { authenticateToken, authorizeRole };
