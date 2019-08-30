## Reference
https://demonuts.com/laravel-5-8-email-verification/
https://www.itechempires.com/2018/09/how-to-enable-laravel-5-7-email-verification-support/
https://laraveldaily.com/mail-notifications-customize-templates/

## Installation Steps
composer create-project --prefer-dist laravel/laravel laravel-email
php artisan key:generate
php artisan make:auth
php artisan make:notification CustomEmailNotification, php artisan make:notification CustomResetPassword
php artisan vendor:publish --tag=laravel-notifications
php artisan vendor:publish --tag=laravel-mail

## email config on local linux  machine

  Follow this url https://devanswers.co/how-to-get-php-mail-working-on-ubuntu-16-04-digitalocean-droplet/ to configure Postfix in linux machine to send email from local machine

  echo "Test Email message body" | mail -s "Email test subject" test@example.com to check email functionality in work

## .env setup

    Follow this url https://www.linode.com/docs/email/postfix/configure-postfix-to-send-mail-using-gmail-and-google-apps-on-debian-or-ubuntu/ to configure gmail smtp on linux machine

    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USERNAME=Your business email ID
    MAIL_PASSWORD=Your business email password
    MAIL_ENCRYPTION=tls
    MAIL_FROM_NAME="Do not Reply"
    MAIL_FROM_ADDRESS=Your business email ID

    Note :- If smtp.gmail.com is not working then go for mailtrap.io
    Create account with mailtrap.io for username and password(sanginfo email is used for account)

    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=587
    MAIL_USERNAME=xxxxx
    MAIL_PASSWORD=xxxxx
    MAIL_ENCRYPTION=tls

## Project Structure
   Gmail Settings:- Account:- Security:- Less Secure app access:- on

   app:-
    User.php
  routes:-
    web.php
