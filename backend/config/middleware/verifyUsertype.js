const verifyRole = (...allowedRoles) =>{
    return (req, res, next) => {
        if(!req?.user_type){
            return res.status(401).json({success: false, message: 'You are not authorized to access this resource'});
        }
        const roles = [...allowedRoles];
        console.log(roles);
        console.log(req.user_type);

        const result = roles.includes(req.user_type);

        if(!result){
            return res.status(401).json({success: false, message: 'You are not authorized to access this'});
        }

        next();
    }
}

module.exports = verifyRole;