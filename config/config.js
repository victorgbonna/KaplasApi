require('dotenv').config()

module.exports={
    port:parseInt(process.env.PORT) || 3000,
    nodeEnv:process.env.NODE_ENV || 'development',
    mongoUrl:process.env.MONGODB_VOUCHDIGITAL || 'mongodb://localhost:27017/vouchdigital'
}