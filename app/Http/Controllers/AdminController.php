<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard/Overview');
    }
    public function products()
    {
        return Inertia::render('Admin/Dashboard/Products');
    }
    public function orders()
    {
        return Inertia::render('Admin/Dashboard/Orders');
    }
    public function customers()
    {
        return Inertia::render('Admin/Dashboard/Customers');
    }

    public function login()
    {
        return Inertia::render('Admin/Login');
    }

    public function login_submit(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->route('admin.login');
    }
    
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
    
}
