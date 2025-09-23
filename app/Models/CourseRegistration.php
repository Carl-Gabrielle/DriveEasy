<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_application_id',
        'course_type',
        'course_status',
        'admin_remarks',
    ];

    public function studentApplication()
    {
        return $this->belongsTo(StudentApplication::class);
    }

    public function isCompleted(): bool
    {
        return $this->course_status === 'completed';
    }

    public function isApproved(): bool
    {
        return $this->registration_status === 'approved';
    }
    
}
