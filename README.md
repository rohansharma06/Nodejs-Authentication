# Nodejs - Authentication
A complete authentication system which can be used as a starter code for creating any new application

## Functionality

` Home Page: `
    
* A simple page contain signin and signup button.

    ![Homepage](/assets/images/home.JPG)

` Sign-Up: `
    
* Sign-In page contains four fields name, email, password ans confirm password.
* On submit user redirect to sign-in page.
* User also can use google for sign-in.
* User also get Welcom mail from us.

    ![Homepage](/assets/images/signup.JPG)

` Sign-In: `
    
* Sign-In page contains two fields email and password.
* User can sign in using Google.
* If user forget password he can use his email to get new password. 

    ![Sign-In](/assets/images/signin.JPG)

    ![forgot pass](/assets/images/forgetpass.JPG)

` Profile: `
    
* After logn user redirect to his profile page.
* Simple page welcom user.

    ![Homepage](/assets/images/profile.JPG)

` Reset-Password: `
    
* If user want to rest his/her password so he can reset his password.
* User can also rest his password using google.

    ![Homepage](/assets/images/changepass.JPG)


## Folder Structure
 #### This code follows MVC (Model, View, Controller) Architecture.
- Assets: It contains all static file CSS, JS, Images.
- Config: It contains connection to Database, Authentication etc.
- Controller: It redirect the webpage according to user action.
- Mailer: It contains different mailing config.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.

## Getting Started
1. Clone the project.
2. Go to folder.
3. Run following command.
    ``` 
    npm install express
    npm install ejs
    npm install connect-flash 
    npm install connect-mongo
    npm install cookie-parser 
    npm install crypto 
    npm install express-ejs-layouts
    npm install express-session
    npm install mongoose 
    npm install nodemailer
    npm install passport
    npm install passport-google-oauth 
    npm install passport-local

    ```
4. Connect to mongodb.
5. Give user credentials in config > passorport-google-outh2.
6. Give your mail credentials in config > nodemailer
7. Run command: `npm start`
8. Go to https://localhost/8000 to use the application.
9. Happy Learning 


