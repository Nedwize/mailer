const passport = require('passport');

module.exports = (app) => {

    // Client requests OAuth from Google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // Handles Redirect from Google Servers
    app.get('/auth/google/callback', passport.authenticate('google'));

}