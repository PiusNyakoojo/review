/*
    Authentication basics

*/

var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded());
app.use(expressJWT({
    secret: 'nyancat 4 ever'
}).unless)

app.post('/login', (req, res) => {
    if (!req.body.username) {
        res.status(400).send('username required');
        return;
    }
    if (!req.body.password) {
        res.status(400).send('password required');
        return;
    }
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) res.status(401).send("Invalid username");
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                res.status(401).send('Invalid Password');
            } else {
                res.status(200).json({});
            }
        });
    });
});

app.user('/api', apiRoutes);

/*
    https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/
    
    10 things you should know about Tokens:
        - Tokens need to be stored somewhere (local/session storage or cookies)
        - Tokens can expire like cookies, but you have more control
        - Local/session storage won't work across domains, use a marker cookie 
        - Preflight requests will be sent on each CORS request 
        - When you need to stream something, use the token to get a signed request 
        - It's easier to deal with XSS than XSRF
        - The token gets sent on every request, watch out its size 
        - If you store confidential info, encrypt the token 
        - JSON Web Tokens can be used in OAuth
        - Tokens are not silver bullts, think about your authoirzation user cases carefully
*/
/*

*/