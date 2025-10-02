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
                'question' => 'Ano ang iyong gagawin sa patay sinding
                dilaw na ilaw trapiko?',
                'choices' => json_encode(['Bawal lumiko at diretso lamang', 'Mag-ingat at magbigay sa pagtuloy', ' Huminto, magbigay at tumuloy kungligtas']),
                'correct_answer' => 'Bawal lumiko at diretso lamang',      
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




    //          [
    //     'category' => 'Road Traffic Signs',
    //     'question' => 'Ano ang iyong gagawin sa patay sinding dilaw na ilaw trapiko?',
    //     'choices' => json_encode([
    //         'Bawal lumiko at diretso lamang',
    //         'Mag-ingat at magbigay sa pagtuloy',
    //         'Huminto, magbigay at tumuloy kung ligtas'
    //     ]),
    //     'correct_answer' => 'Mag-ingat at magbigay sa pagtuloy',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kailan maaring bumusina?',
    //     'choices' => json_encode([
    //         'Upang tawagin ang kaibigan',
    //         'Upang bigyan ng babala ang iba ng iyong presensya',
    //         'Upang bigyan ng daan ang ibang motorista'
    //     ]),
    //     'correct_answer' => 'Upang bigyan ng babala ang iba ng iyong presensya',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Vehicle Condition',
    //     'question' => 'Ano ang maaring dahilan kung patalbog-talbog ang iyong sasakyan?',
    //     'choices' => json_encode([
    //         'Sirang shock absorber',
    //         'Kalbong gulong',
    //         'Hindi gitna o sentro ang manibela'
    //     ]),
    //     'correct_answer' => 'Sirang shock absorber',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ang pinakaligtas na bilis ng sasakyan ay ayon sa:',
    //     'choices' => json_encode([
    //         'Kondisyon at itinakdang bilis',
    //         'Itinakdang bilis, panahon, kapabilidad ng drayber, kaayusan ng sasakyan',
    //         'Kapabilidad ng drayber, Itinakdang bilis'
    //     ]),
    //     'correct_answer' => 'Itinakdang bilis, panahon, kapabilidad ng drayber, kaayusan ng sasakyan',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kung mayroong ginagawang kalsada at nakita mo ng mayroong itinakdang bilis, ano ang dapat mong gawin?',
    //     'choices' => json_encode([
    //         'Sundin ang itinakdang bilis',
    //         'Sundin ang itinakdang bilis sa panahon na may pasok ang mga opisina',
    //         'Sundin ang itinakdang bilis kung makitid ang kalsada'
    //     ]),
    //     'correct_answer' => 'Sundin ang itinakdang bilis',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Road Courtesy',
    //     'question' => 'Kung ikaw ay papaliko sa isang panulukan, kailangan mo bang magbigay sa mga tumatawid?',
    //     'choices' => json_encode([
    //         'Ang tsuper ay kailangan na magbigay sa mga tumatawid kung may nakaabang panganib',
    //         'Oo, lalo na kung kakanan',
    //         'Oo, lalo na kung kakaliwa'
    //     ]),
    //     'correct_answer' => 'Ang tsuper ay kailangan na magbigay sa mga tumatawid kung may nakaabang panganib',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kailan maaring maglagay ng pulang ilaw sa headlight?',
    //     'choices' => json_encode([
    //         'Kapag napundi ang ilaw',
    //         'Kapag inuutosan ng supervisor',
    //         'Hindi kailanman maari'
    //     ]),
    //     'correct_answer' => 'Hindi kailanman maari',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Alin sa mga sumusunod ang mapanganib na gawin at labag sa batas?',
    //     'choices' => json_encode([
    //         'Mag text o gumagamit ng telepono habang nagmamaneho',
    //         'Mag-adjust ng side mirror',
    //         'Makinig ng musika'
    //     ]),
    //     'correct_answer' => 'Mag text o gumagamit ng telepono habang nagmamaneho',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kailan maaring magmaneho sa bangketa?',
    //     'choices' => json_encode([
    //         'Kung walang gumagamit neto',
    //         'Kung papasok sa isang garage',
    //         'Kung lalampasan ang mababagal na sasakyan'
    //     ]),
    //     'correct_answer' => 'Kung papasok sa isang garage',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kung kulay pula ang lahat ng exit sa expressway, ano ang dapat mong gawin?',
    //     'choices' => json_encode([
    //         'Huminto sa layby at tumawag sa telepono',
    //         'Magbusina at magtanong',
    //         'Huminto, humanap ng pulis trapik at magtanong'
    //     ]),
    //     'correct_answer' => 'Huminto, humanap ng pulis trapik at magtanong',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ang pinaka-kabang linya ng expressway ay para lamang sa mga;',
    //     'choices' => json_encode([
    //         'Emergency at mga sirang sasakyan',
    //         'Sa mga mababagal na sasakyan',
    //         'Sa normal na pagmamaneho'
    //     ]),
    //     'correct_answer' => 'Sa normal na pagmamaneho',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ang solidong dobleng kulay dilaw na guhit sa kalsada ay;',
    //     'choices' => json_encode([
    //         'Maaring mag-overtake kahit kailan',
    //         'Bawal na bawal mag-overtake',
    //         'Maaring magpalipat-lipat ng linya'
    //     ]),
    //     'correct_answer' => 'Maaring magpalipat-lipat ng linya',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ano ang iyong gagawin kung sabay kayong dumating ng isang sasakyan sa iyong kanan sa isang panulukan?',
    //     'choices' => json_encode([
    //         'Mauna',
    //         'Magbigay ng daan',
    //         'Huwag magbigay daan'
    //     ]),
    //     'correct_answer' => 'Magbigay ng daan',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Emergencies',
    //     'question' => 'Ano ang dapat gawin ng isang drayber kung mayroon aksidente?',
    //     'choices' => json_encode([
    //         'Tulungan kung maari ang taong naaksidente at tumawag ng tulong',
    //         'Ipagbigay alam ang aksidente sa pinakamalapit na estasyon ng pulis',
    //         'Ipagbigay alam sa hospital ang aksidente'
    //     ]),
    //     'correct_answer' => 'Tulungan kung maari ang taong naaksidente at tumawag ng tulong',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ang tamang senyas kamay kung kakanan ay?',
    //     'choices' => json_encode([
    //         'Kaliwang kamay paturo ng ibaba',
    //         'Kaliwang kamay paturo ng itaas',
    //         'Kaliwang kamay paturo ng kaliwa'
    //     ]),
    //     'correct_answer' => 'Kaliwang kamay paturo ng itaas',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kailan gawin ang full stop?',
    //     'choices' => json_encode([
    //         'Kapag ang senyal ay berding ilaw',
    //         'Sa intersection',
    //         'Kapag pula ang ilaw ng traffic light'
    //     ]),
    //     'correct_answer' => 'Kapag pula ang ilaw ng traffic light',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Parking Rules',
    //     'question' => 'Maliban sa tawiran saan pa hindi maaring pumarada?',
    //     'choices' => json_encode([
    //         '6 metro mula sa kanto',
    //         'Sa tabi ng nakaparadang sasakyan',
    //         'Lahat ay tama'
    //     ]),
    //     'correct_answer' => 'Lahat ay tama',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Licensing',
    //     'question' => 'Ilang araw dapat mong matubos ang iyong lisensya sa LTO upang maiwasan ang suspension?',
    //     'choices' => json_encode([
    //         'Sa loob ng 5 araw mula sa araw ng apprehension',
    //         'Sa loob ng 15 araw mula sa araw ng apprehension',
    //         'Sa loob ng 30 araw mula sa araw ng apprehension'
    //     ]),
    //     'correct_answer' => 'Sa loob ng 15 araw mula sa araw ng apprehension',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Lights',
    //     'question' => 'Ang pulang pulang ilaw trapiko ay nagsasabing hinto maliban kung ang daan ay interseksyon ay bakante.',
    //     'choices' => json_encode([
    //         'Tama',
    //         'Mali',
    //         'Walang tamang sagot'
    //     ]),
    //     'correct_answer' => 'Walang tamang sagot',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Vehicle Operation',
    //     'question' => 'Kung manual ang iyong sasakyan ano ang dapat na kambyo kung ang kalsada ay pababa?',
    //     'choices' => json_encode([
    //         'Neutral',
    //         'Unang kambyo',
    //         'Paatras'
    //     ]),
    //     'correct_answer' => 'Neutral',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Ang sinusundan mong sasakyan ay nakailaw ng patay-sinding ilaw. Ano ang ibig sabihin nito?',
    //     'choices' => json_encode([
    //         'Sasakyan ng pulis',
    //         'Mabagal ang takbo',
    //         'Sasakyan ng doctor'
    //     ]),
    //     'correct_answer' => 'Mabagal ang takbo',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Kung mayroong ginagawang kalsada at nakita mo ng mayroong itinakdang bilis, ano ang dapat mong gawin?',
    //     'choices' => json_encode([
    //         'Sundin ang itinakdang bilis',
    //         'Sundin ang itinakdang bilis sa panahon',
    //         'Sundin ang itinakdang bilis kung makitid ang kalsada'
    //     ]),
    //     'correct_answer' => 'Sundin ang itinakdang bilis',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Sino/ano ang may awtoridad na maaring magsabi/magsenyas sa iyo na dapat kang huminto?',
    //     'choices' => json_encode([
    //         'Bantay ng paaralan, pulis trapiko, ilaw trapiko',
    //         'Ang naglalakad sa kalsada, tsuper ng bus o ang may kapansanan',
    //         'Nagbibisikleta, ang lumalampas na sasakyan dilaw na kulay ng ilaw trapiko'
    //     ]),
    //     'correct_answer' => 'Bantay ng paaralan, pulis trapiko, ilaw trapiko',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Road Signs',
    //     'question' => 'Ang solidong puting guhit ay makikita sa kalsada, ano ang ibig sabihin nito?',
    //     'choices' => json_encode([
    //         'Naghihiwalay sa mga sasakyan at nagsasaad ng gilid ng kalsada',
    //         'Naghihiwalay ng sasakyan sa magkabilang direksyon at gilid ng kalsada',
    //         'Naghihiwalay sa salubong na sasakyan at nagsasaad sa kanang gilid ng kalsada'
    //     ]),
    //     'correct_answer' => 'Naghihiwalay sa salubong na sasakyan at nagsasaad sa kanang gilid ng kalsada',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Road Courtesy',
    //     'question' => 'Gusto mong lumiko sa kanan ngunit duda ka na hindi gumagana ang iyong signal light, ano ang iyong dapat gawin?',
    //     'choices' => json_encode([
    //         'Lumabas ng sasakyan at tignan kung gumagana',
    //         'Gamitin ang tamang senyas ng kamay',
    //         'Manatili sa kaliwang bahagi ng kalsada'
    //     ]),
    //     'correct_answer' => 'Gamitin ang tamang senyas ng kamay',
    //     'points' => 1,
    // ],
    // [
    //     'category' => 'Traffic Rules',
    //     'question' => 'Tama o Mali: ang pag-overtake ay maari saan mang bahagi kung may dalawang solidong dilaw na guhit sa gitna ng kalsada.',
    //     'choices' => json_encode([
    //         'Mali, ang pag overtake ay ipinagbabawal sa dalawang solidong guhit na dilaw sa gitna ng kalsada',
    //         'Tama, kung may sinusundang mabagal na trak',
    //         'Mali, ito ay pinapayagan lang kung walang pulis trapiko'
    //     ]),
    //     'correct_answer' => 'Mali, ang pag overtake ay ipinagbabawal sa dalawang solidong guhit na dilaw sa gitna ng kalsada',
    //     'points' => 1,
    // ],
        ]);
    }
}
