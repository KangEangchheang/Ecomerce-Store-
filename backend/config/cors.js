const allowOrigin = [
    'http://localhost:5173',
    'http://localhost:5173/auth/login'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (allowOrigin.indexOf(origin)!== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials:true
};

module.exports = corsOptions;