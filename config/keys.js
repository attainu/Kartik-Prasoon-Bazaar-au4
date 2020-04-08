module.exports = {
  mongoURI:
    "mongodb+srv://dbBazaar:dbBazaarPassword@cluster0-rb6ly.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: "secret",
  googleAuthKey: {
    clientID:
      "774983211870-m6j8ocp25dmndcdk2a643v5vmfad8e4s.apps.googleusercontent.com",
    clientSecret: "7fxvEiSfg3Fx0sraVAQIWmNp",
  },
  postCred: {
    database: "bazaar",
    user: "postgres",
    password: "6567",
    dbType: {
      host: "localhost",
      dialect: "postgres",
    },
  },
};
