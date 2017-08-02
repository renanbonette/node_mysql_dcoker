export default {
  database: `users_${process.env.NODE_ENV}`,
  username: 'root',
  password: '123',
  host: process.env.HOSTNAME || 'localhost',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'jwtSecretApiKey',
  jwtSession: { session: false },
};
