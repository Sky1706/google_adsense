process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.HOST = process.env.HOST || '127.0.0.1';
process.env.PORT = process.env.PORT || 3000;

const oEnv = {};

oEnv.dev = {
    BASE_URL: '',
    BASE_API_PATH: '',
    DB_URL: 'mongodb+srv://sameer:sZjGWoJxC6irObXw@mycluster.w6fbq9s.mongodb.net/akash',
};

oEnv.stag = {
    BASE_URL: '',
    BASE_API_PATH: '',
    DB_URL: '',
};

oEnv.prod = {
    BASE_URL: '',
    BASE_API_PATH: '',
    DB_URL: '',
};
process.env.BASE_URL = oEnv[process.env.NODE_ENV].BASE_URL;
process.env.BASE_API_PATH = oEnv[process.env.NODE_ENV].BASE_API_PATH;
process.env.JWT_SECRET = 'jwt-secret';
process.env.DB_URL = oEnv[process.env.NODE_ENV].DB_URL;
