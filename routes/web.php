<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/home', 'HomeController@index')->name('Acceuil');
Route::get('/evenements', 'EventsController@index')->name('Evenements');
Route::get('/boutique', 'ShopController@index')->name('Boutique');
Route::get('/suggestions', 'SuggestionsController@index')->name('Boite à idées');

Route::group(['middleware' => 'App\Http\Middleware\BDEMiddleware'], function() {
    Route::get('/administration', 'AdminController@index')->name('Admin');
    Route::post('/addEvent','EventsController@addEvent');
    Route::post('/addGoodie','ShopController@addGoodie');
});