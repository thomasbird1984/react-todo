<?php

header("Access-Control-Allow-Origin: http://localhost:5000");

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/lists', ['as' => 'lists_list', 'uses' => 'ListController@lists_list']);
Route::get('/lists/{id}', ['as' => 'list_single', 'uses' => 'ListController@list_single']);
Route::get('/lists/tasks/{list_id}/{status?}', ['as' => 'list_tasks', 'uses' => 'ListController@list_tasks']);

Route::get('/tasks/{id}', ['as' => 'task_single', 'uses' => 'TaskController@task_single']);
Route::post('/tasks', ['as' => 'task_create', 'uses' => 'TaskController@task_create']);
Route::post('/tasks/{id}', ['as' => 'task_update', 'uses' => 'TaskController@task_update']);

Route::get('/users', ['as' => 'users_list', 'uses' => 'UserController@users_list']);