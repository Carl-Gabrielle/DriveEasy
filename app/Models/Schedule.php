<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    
    
    protected $fillable = [
        'instructor_id',
        'course_registration_id',
        'date',
        'time',
        'location',
        'status',
        'description',
    ];

    /**
     * Relationships
     */

    // Belongs to a specific course registration
    public function courseRegistration()
    {
        return $this->belongsTo(CourseRegistration::class);
    }

    // Belongs to a user who is an instructor
    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }
    
}
