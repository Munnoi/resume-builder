import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // accessing the token from the frontend

        if (!token)
            return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoding the token

        req.user = decoded; // contains user id
        next(); // req is passed to the next middleware

    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
