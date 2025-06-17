<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'birth_certificate',
        'gov_id',
        'id_picture',
        'marriage_contract',
        'status',
        'admin_remarks',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function courseRegistrations()
{
    return $this->hasMany(CourseRegistration::class);
}
public function evaluations()
{
    return $this->hasMany(StudentEvaluation::class);
}

}
