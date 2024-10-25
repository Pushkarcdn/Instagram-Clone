import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  dialect: process.env.DIALECT || "postgres",
  cors: {
    origin: process.env.CORS_ORIGIN,
  },
  jwtConfig: {
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
  mailerConfig: {
    service: process.env.MAILER_SERVICE,
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
    logger: true,
    systemEmail: process.env.SYSTEM_EMAIL,
  },
  db: {
    name: process.env.DB_NAME,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  postgres: {
    host: process.env.POSTGRES,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
  },
};

export default config;
