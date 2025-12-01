import jwt from "jsonwebtoken";

export const ProtectRoute = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // accessing the token from the frontend

        if (!token)
            return res.status(401).json({success: false, message: "Unauthorized: No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoding the token

        req.user = { ...decoded, _id: decoded.id }; // contains user id, mapped to _id for consistency
        next(); // req is passed to the next middleware

    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
