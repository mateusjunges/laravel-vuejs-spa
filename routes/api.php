<?php

use App\Http\Controllers\Api\UsersController;

Route::namespace('Api')->group(function () {
    Route::get('/users', [UsersController::class, 'index']);
    Route::get('/users/{user}', [UsersController::class, 'show']);
});
