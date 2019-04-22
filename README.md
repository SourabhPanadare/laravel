# laravel-react Reference

  https://itsolutionstuff.com/post/laravel-5-simple-crud-application-using-reactjs-part-1example.html
  https://itsolutionstuff.com/post/laravel-5-simple-crud-application-using-reactjs-part-2example.html
  https://getcomposer.org/download/
  https://github.com/FortAwesome/react-fontawesome
  https://medium.com/@Gbxnga/token-based-authentication-with-react-and-laravel-restful-api-83f16581e85
  https://www.5balloons.info/laravel-authentication-tutorial-login-logout-register-forgot-password-remember-me-functionality/
  http://1000projects.org/food-ordering-management-system-php-mysql-project.html

# Installation Steps

  composer create-project --prefer-dist laravel/laravel laravel-react
  follow https://getcomposer.org/download/
  php artisan key:generate
  php artisan make:auth
  .env database credentials
  php artisan migrate
 
  php artisan make:migration create_books_table
  php artisan make:model Book
  php artisan make:controller BookController --resource

  php artisan preset react
  npm install
  npm install --save react-router@3.2.0
  npm install --save react-redux
  npm install --save redux

  npm i --save @fortawesome/fontawesome-svg-core
  npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/react-fontawesome
  npm i --save @fortawesome/free-brands-svg-icons

  npm run dev
  php artisan serve

# Laravel-React Authentication installations

  composer.json:-
    "require":{
      "tymon/jwt-auth": "dev-develop#34d8e48 as 1.0.0-rc.3.2"
    }
  $ composer update

  config/app.php:-
    'providers' => [
        Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
     ],

     'aliases' => [
        'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
     ],
  php artisan vendor:publish
  php artisan jwt:secret

  Create jwtMiddleware.php and register it in app/Http/kernel.php file.
  Create app/Http/Middleware/API.php for Access-Control-Allow-Origin and register it in app/Http/kernel.php file.

  app/Http/kernel.php:-
  protected $routeMiddleware = [
    'jwt-auth' => \App\Http\Middleware\jwtMiddleware::class,
    'api-header' => \App\Http\Middleware\API::class,
  ];

  Controllers/UserController.php:-
    private function getToken($email, $password){

    }

    public function login(Request $request){

    }

    public function register(Request $request){

    }

  routes/api.php:-

    Route::group(['middleware' => ['jwt.auth','api-header']], function () {

    });

    Route::group(['middleware' => 'api-header'], function () {

    });

  app/User.php:-

    class User extends Authenticatable implements JWTSubject{
      protected $fillable = [
          'name', 'email', 'password','auth_token'
      ];
      public function getJWTIdentifier(){

      }
      public function getJWTCustomClaims()
      {

      }
    }
