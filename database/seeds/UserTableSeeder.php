<?php
use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $role_regular_user = Role::where('name', 'user')->first();
      $role_admin_user = Role::where('name', 'admin')->first();

      $user = new User;
      $user->name = 'Ritesh Thakur';
      $user->email = 'ritesh.thakur@sanginfo.com';
      $user->password = bcrypt('ritesh@123');
      $user->save();
      $user->roles()->attach(Role::where('name', 'user')->first());

      $admin = new User;
      $admin->name = 'Sourabh Panadare';
      $admin->email = 'sourabh.panadare@sanginfo.com';
      $admin->password = bcrypt('sourabh@123');
      $admin->save();
      $admin->roles()->attach(Role::where('name', 'admin')->first());
    }
}
