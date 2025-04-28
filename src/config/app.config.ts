export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  databaseUrl: process.env.MONGODB_URI || '',
})
