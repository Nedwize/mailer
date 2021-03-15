const passport = require("passport");

module.exports = (app) => {
  // Client requests OAuth from Google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "profile",
        "email",
        "https://mail.google.com/",
        "https://www.googleapis.com/auth/gmail.send",
      ],
      prompt: "consent",
      accessType: "offline",
    })
  );

  // Handles Redirect from Google Servers
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
