<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'question',
        'choices',
        'correct_answer',
        'points',
    ];

    protected $casts = [
        'choices' => 'array', 
    ];
}
