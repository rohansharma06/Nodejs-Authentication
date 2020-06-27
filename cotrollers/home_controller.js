module.exports.home = async function(req,res){
    res.render('home',{
        title: "Home"
    });
}

module.exports.signin = async function(req,res){
    res.render('user_sign_in',{
        title: "Sign In"
    });
}

module.exports.signup = async function(req,res){
    res.render('user_sign_up',{
        title: "Sign Up"
    });
}