<?php namespace App\Http\Controllers;

use App\Http\Models\User;

class UserController extends Controller {

    public function users_list() {
        $users = User::all();
        return response(json_encode($users), 200);
    }
}