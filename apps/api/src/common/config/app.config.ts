export default () => ({
  port: process.env.PORT,
  host: process.env.HOST,
  corsOrigin: process.env.CORS_ORIGIN,
  nodeEnv: process.env.NODE_ENV,
});
