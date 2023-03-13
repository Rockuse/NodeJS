
const AuthMethod = {
    checkLoggedIn: (req, res, next) => {
        const isLoggedIn = true;
        if (!isLoggedIn) {
            return res.status(401).json({ error: 'You Must Log In' })
        }
        next()
    },
    verifyCallback: (accessToken, refreshToken, profile, done) => {
        console.log('Google profile', profile)
        done(null, profile)
    }
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}
const AuthRouter = (router, passport) => {
    router.get('/auth/google', (req, res) => { })
    router.get('/auth/google/callback'
        , (req, res) => { passport.authenticate('google') }
        , {
            failureRedirect: '/failure'
            , successRedirect: '/'
            , session: false
        }
        ,(req,res)=>{console.log('google called us back!')})
    router.get('/auth/logout', (req, res) => { })
    router.get('/failure', (req, res) => { res.send('Failed to log in!') })
    router.get('/success', (req, res) => { res.send('Failed to log in!') })
    return router

}

module.exports = { AUTH_OPTIONS, AuthMethod, AuthRouter }