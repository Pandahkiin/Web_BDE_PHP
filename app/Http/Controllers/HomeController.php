<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(\Auth::check() && !\Session::get('APItoken')) {
            $client = new GuzzleHttp\Client();
            $res = $client->request('POST', 'http://127.0.0.1:3000/api/auth/signin', [
                GuzzleHttp\RequestOptions::JSON => ['password' => Auth::user()->password, 'email' => Auth::user()->email]
                ]);
            \Session::put('APItoken', json_decode($res->getBody())->accessToken);
        }
        return view('home');
    }
}
