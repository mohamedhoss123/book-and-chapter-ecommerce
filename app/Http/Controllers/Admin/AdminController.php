<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

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
}
