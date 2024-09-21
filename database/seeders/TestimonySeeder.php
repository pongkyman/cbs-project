<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Testimony;

class TestimonySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'John Doe', 'age' => 30, 'testimony' => 'This is a great service!']);
        Testimony::create(['name' => 'Jane Smith', 'age' => 25, 'testimony' => 'Amazing experience!']);
    }
}
