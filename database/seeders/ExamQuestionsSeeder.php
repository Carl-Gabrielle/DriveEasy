<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamQuestionsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('exam_questions')->insert([
            [
                'category' => 'Road Traffic Signs',
                'question' => 'What does a red octagonal sign mean?',
                'choices' => json_encode(['Stop', 'Yield', 'Do Not Enter']),
                'correct_answer' => 'Stop',
                'points' => 1,
            ],
            [
                'category' => 'Traffic Rules',
                'question' => 'At an intersection with no traffic lights, who has the right of way?',
                'choices' => json_encode(['Vehicle on the left', 'Vehicle on the right', 'The faster vehicle']),
                'correct_answer' => 'Vehicle on the right',
                'points' => 1,
            ],
            [
                'category' => 'Defensive Driving',
                'question' => 'What should you do when driving in heavy rain?',
                'choices' => json_encode(['Turn on hazard lights only', 'Reduce speed and turn on headlights', 'Drive faster to leave rain quickly']),
                'correct_answer' => 'Reduce speed and turn on headlights',
                'points' => 1,
            ],
            [
                'category' => 'Road Courtesy',
                'question' => 'What should you do when an ambulance approaches with sirens on?',
                'choices' => json_encode(['Speed up ahead of it', 'Pull over to the side and stop', 'Ignore it if you are in a hurry']),
                'correct_answer' => 'Pull over to the side and stop',
                'points' => 1,
            ],
            [
                'category' => 'Laws',
                'question' => 'Driving without a valid license may result in?',
                'choices' => json_encode(['Warning only', 'Fine or imprisonment', 'Free driving lessons']),
                'correct_answer' => 'Fine or imprisonment',
                'points' => 1,
            ],
            [
                'category' => 'Responsibilities',
                'question' => 'Who is responsible for ensuring passengers wear seatbelts?',
                'choices' => json_encode(['The driver', 'The police', 'The passengers themselves']),
                'correct_answer' => 'The driver',
                'points' => 1,
            ],
            [
                'category' => 'Emergencies',
                'question' => 'If your brakes fail while driving, what is the safest action?',
                'choices' => json_encode(['Shift to a lower gear and use handbrake', 'Turn off the engine immediately', 'Jump out of the vehicle']),
                'correct_answer' => 'Shift to a lower gear and use handbrake',
                'points' => 1,
            ],
            [
                'category' => 'Road Signs',
                'question' => 'A triangular sign with a red border usually means?',
                'choices' => json_encode(['Warning', 'Mandatory', 'Regulatory']),
                'correct_answer' => 'Warning',
                'points' => 1,
            ],
            [
                'category' => 'Traffic Rules',
                'question' => 'Using a mobile phone while driving is?',
                'choices' => json_encode(['Allowed anytime', 'Allowed only when traffic is light', 'Prohibited unless hands-free']),
                'correct_answer' => 'Prohibited unless hands-free',
                'points' => 1,
            ],
            [
                'category' => 'Defensive Driving',
                'question' => 'Safe following distance is measured by?',
                'choices' => json_encode(['1-second rule', '2-second rule', 'Car length']),
                'correct_answer' => '2-second rule',
                'points' => 1,
            ],
        ]);
    }
}
