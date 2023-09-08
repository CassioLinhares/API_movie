const {verify} = require("jsonwebtoken");
const authConfig = require("../config/auth");
const AppError = require("../utils/appError");

function ensureAuthenticated(request, response, next) {
    const tokenInHeaders = request.headers.authorization;

    if (!tokenInHeaders) {
        throw new AppError("JWT, token uninformed!", 401);
    }

    const [, token] = tokenInHeaders.split(" ");

    try {
        const {sub: user_id} = verify(token, authConfig.jwt.secret);
        request.user = {
            id: Number(user_id)
        }
        return next();
    } catch (error) {
        throw new AppError("JWT, token invalid!", 401)
    }
}

module.exports = ensureAuthenticated;