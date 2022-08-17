const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || 
    process.env.MONGO_HOST || 'mongodb+srv://samuel:samuel@cluster0.42sbshz.mongodb.net/test?authSource=admin&replicaSet=atlas-uz528w-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
}