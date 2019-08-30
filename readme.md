## Reference
   https://www.5balloons.info/upload-profile-picture-avatar-laravel-5-authentication/

## Installation Steps
   composer create-project --prefer-dist laravel/laravel laravel-profile
   convert .env.example into .env and input desired database credentials
   php artisan key:generate
   php artisan make:auth
   **php artisan make:migration avatar --table=users**
   add $table->string('avatar')->default('user.jpg'); inside migrations:-avatar.php
   php artisan migrate
   change 'default' => env('FILESYSTEM_DRIVER', 'public'), in config filesystems.php
   php artisan storage:link

   php artisan make:controller UserController
   php artisan make:model avatarModel          (just an option)
