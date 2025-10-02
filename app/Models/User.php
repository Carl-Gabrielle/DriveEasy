<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\StudentApplication;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'role',
        'address',
        'password',
    ];
       public function examAttempts()
    {
        return $this->hasMany(ExamAttempt::class, 'student_id', 'id');
    }
 public function studentApplication()
{
    return $this->hasOne(StudentApplication::class);
}
public function evaluationsGiven()
{
    return $this->hasMany(StudentEvaluation::class, 'evaluated_by');
}
public function studentEvaluations()
{
    return $this->hasMany(StudentEvaluation::class, 'student_id');
}

public function courseRegistrations()
{
    return $this->hasManyThrough(
        CourseRegistration::class,   // Final model
        StudentApplication::class,   // Intermediate model
        'user_id',                   // FK on StudentApplication table
        'student_application_id',    // FK on CourseRegistration table
        'id',                        // Local key on users table
        'id'                         // Local key on student_applications table
    );
}


public function evaluationsReceived()
{
    return $this->hasMany(StudentEvaluation::class, 'student_id');
}

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


}
