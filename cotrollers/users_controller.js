const User = require('../models/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: 'Profile',
            user: user
        });
    });
    
}

// render the sign in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    };
    res.render('user_sign_in',{
        title: "Sign In"
    });
}

// render the sign up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    };

    res.render('user_sign_up',{
        title: "Sign Up"
    });
}

module.exports.create = function(req,res){
    console.log(req.body);
    //---- if pass and confirm pass does't match
    if(req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords and Confirm Password does not match');
        return res.redirect('back');
    }
    //---- find if the user already present
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            req.flash('error',err);
            return;
        }
        //---- if user not present create user
        if(!user){
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            //const password = req.body.password;
            newUser.setPassword(req.body.password);
            
            newUser.save((err, user) => {
                if(err){console.log("error in creating user"); return;}
                return res.redirect('/users/sign-in');
            })
            
        }
        else{
            // req.flash('success', 'You have signed up, login to continue!');
            req.flash('error', 'Email already in use!!');
            return res.redirect('back');
        }
    })
}

//----Create user seesion when SignIn
module.exports.createSession=function(req,res){
    req.flash('success','Logged in successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','Sign Out successfully');
    return res.redirect('/');
}

//--- reset password
module.exports.reset = async function(req,res){
    
    if(req.user.id == req.params.id){
        try{
            let user = await User.findById(req.params.id);

            if(user.password == req.body.current_password){
                if(req.body.new_password == req.body.confirm_password){
                    user.password = req.body.new_password;
                    req.flash('success', 'Successfully change pasword');
                }else{
                    req.flash('error', 'Password and Confirm password does not match!! ');
                }
                
            }else{
                req.flash('error', 'Enter valid Current password!');
            }

            user.save();
            return res.redirect('back');
        }catch(err){
            req.flash('error', err);
            return res.redirect('back');
        }
    }
}