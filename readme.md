## Reference Links
https://www.5balloons.info/laravel-authentication-tutorial-login-logout-register-forgot-password-remember-me-functionality/
https://pusher.com/tutorials/cms-laravel-vue-part-1
https://pusher.com/tutorials/cms-laravel-vue-part-2
https://pusher.com/tutorials/cms-laravel-vue-part-3
https://pusher.com/tutorials/cms-laravel-vue-part-4
https://pusher.com/tutorials/cms-laravel-vue-part-5
https://github.com/boudlal/stock-management
https://github.com/creativetimofficial/vue-light-bootstrap-dashboard
https://xaksis.github.io/vue-good-table/guide/#basic-example
https://github.com/gresa-neziri/online-food-ordering-system-laravel
https://blog.thamaraiselvam.com/finally-configured-xdebug-with-sublime-text-3-on-ubuntu-17-04-ea19aff56c67

## Project Run
npm run dev
php artisan serve

## Installation Steps
composer create-project --prefer-dist laravel/laravel onlineorderingsystem
php artisan key:generate
php artisan make:auth
php artisan migrate
sudo chown -R $USER:www-data storage
sudo chown -R $USER:www-data bootstrap/cache

## Setting up user roles
php artisan make:model Role -m
php artisan make:model Post -mr
php artisan make:migration create_role_user_table
php artisan make:seeder RoleTableSeeder
php artisan make:seeder UserTableSeeder
php artisan make:seeder PostTableSeeder

database/migrations/create_roles_table.php:-
  public function up()
  {
      Schema::create('roles', function (Blueprint $table) {
        $table->string('name');
        $table->string('description');
      }
  }
database/migrations/create_role_user_table.php:-
  public function up()
  {
      Schema::create('role_user', function (Blueprint $table) {
          $table->integer('role_id')->unsigned();
          $table->integer('user_id')->unsigned();
      });
  }
database/migrations/create_role_posts_table.php:-
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
      $table->integer('user_id')->unsigned();
      $table->string('title');
      $table->text('body');
      $table->binary('image')->nullable();
    });
}

database/seeds/RoleTableSeeder.php:-
database/seeds/UserTableSeeder.php:-
database/seeds/DatabaseSeeder.php:-
  public function run(){}

app/User.php:-
  public function roles(){}
  public function checkRoles($roles){}
  public function hasAnyRole($roles){}
  public function hasRole($role){}
app/Post.php:-
  protected $fillable = ['user_id', 'title', 'body', 'image'];
  public function user(){}
app/Role.php:-
  public function users(){}

app/Http/Controllers/Auth/RegisterController.php:-
  protected function create(array $data){
    $user->roles()->attach(\App\Role::where('name', 'user')->first());
    return $user;
  }
app/Http/Controllers/HomeController.php:-
app/Http/Controllers/AdminController.php:-
  public function index(Request $request)
    {
        if ($request->user()->hasRole('user')) {
            return redirect('/');
        }

        if ($request->user()->hasRole('admin')){
            return redirect('/admin/dashboard');
        }
    }
app/Http/Controllers/PostController.php:-
  public function all()
  {
      $posts = Post::latest()->paginate(5);
      return view('landing', compact('posts'));
  }
  public function single(Post $post)
  {
      return view('single', compact('post'));
  }
php artisan migrate:fresh --seed

## API Creation Procedure
php artisan make:resource PostResource
php artisan make:controller AdminController

app/Post.php:-
   protected $fillable = ['user_id', 'title', 'body', 'image'];
routes/api.php:-
   Route::apiResource('posts', 'PostController');
app/Http/Resources/PostResource.php:-
  public function toArray($request){}
app/Http/Controllers/PostController.php:-
  public function index(){}
  public function store(Request $request){}
  public function show(Post $post){}
  public function update(Request $request, Post $post){}
  public function destroy(Post $post){}

## Vue Js Frontend
  npm install --save vue-router

  resources/assets/js/app.js:-

## PHP Debuging
  sudo apt install php-xdebug
  sudo nano /etc/php/7.0/mods-available/xdebug.ini

  zend_extension=/usr/lib/php/20151012/xdebug.so
  xdebug.remote_autostart = 1
  xdebug.remote_enable = 1
  xdebug.remote_handler = dbgp
  xdebug.remote_host = 127.0.0.1
  xdebug.remote_log = /tmp/xdebug_remote.log
  xdebug.remote_mode = req
  xdebug.remote_port = 9005 #if you want to change the port you can change

  sudo systemctl restart php7.0-fpm
  sudo systemctl restart nginx
  sudo phpenmod xdebug
