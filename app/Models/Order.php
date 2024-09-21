<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    const STATUS_NEW = 1;
    const STATUS_ONGOING = 5;
    const STATUS_DONE = 10;
    protected $fillable = [
        'name',
        'phone_number',
        'email',
        'location',
        'needs',
        'meeting_date',
        'estimated_time',
        'status'
    ];
    use HasFactory;
}
