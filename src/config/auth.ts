export default {
  jwt: {
    secret: process.env.APP_SECRET || '104ce848c632368739db5a1a9c4f7dc9',
    expiresIn: '7d',
  },
};
