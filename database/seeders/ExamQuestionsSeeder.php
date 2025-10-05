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
        'category' => 'Traffic Lights',
        'question' => 'Ano ang iyong gagawin sa patay sinding dilaw na ilaw trapiko?',
        'choices' => json_encode([
            'A' => 'Bawal lumiko at diretso lamang',
            'B' => 'Mag-ingat at magbigay sa pagtuloy',
            'C' => 'Huminto, magbigay at tumuloy kung ligtas',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring bumusina?',
        'choices' => json_encode([
            'A' => 'Upang tawagin ang kaibigan',
            'B' => 'Upang bigyan ng babala ang iba ng iyong presensya',
            'C' => 'Upang bigyan ng daan ang ibang motorista',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Condition',
        'question' => 'Ano ang maaring dahilan kung patalbog-talbog ang iyong sasakyan?',
        'choices' => json_encode([
            'A' => 'Sirang shock absorber',
            'B' => 'Kalbong gulong',
            'C' => 'Hindi gitna o sentro ang manibela',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang pinakaligtas na bilis ng sasakyan ay ayon sa:',
        'choices' => json_encode([
            'A' => 'Kondisyon at itinakdang bilis',
            'B' => 'Itinakdang bilis, panahon, kapabilidad ng drayber, kaayusan ng sasakyan',
            'C' => 'Kapabilidad ng drayber, Itinakdang bilis',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung mayroong ginagawang kalsada at nakita mo ng mayroong itinakdang bilis, ano ang dapat mong gawin?',
        'choices' => json_encode([
            'A' => 'Sundin ang itinakdang bilis',
            'B' => 'Sundin ang itinakdang bilis sa panahon na may pasok ang mga opisina',
            'C' => 'Sundin ang itinakdang bilis kung makitid ang kalsada',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Road Courtesy',
        'question' => 'Kung ikaw ay papaliko sa isa panulukan, kailangan mo bang magbigay sa mga tumatawid?',
        'choices' => json_encode([
            'A' => 'Ang tsuper ay kailangan na magbigay sa mga tumatawid kung may nakaabang panganib',
            'B' => 'Oo, lalo na kung kakanan',
            'C' => 'Oo, lalo na kung kakaliwa',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring maglagay ng pulang ilaw sa headlight?',
        'choices' => json_encode([
            'A' => 'Kapag napundi ang ilaw',
            'B' => 'Kapag inuutusan ng supervisor',
            'C' => 'Hindi kailanman maari',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Alin sa mga sumusunod ang mapanganib na gawin at labag sa batas?',
        'choices' => json_encode([
            'A' => 'Mag text o gumagamit ng telepono habang nagmamaneho',
            'B' => 'Mag-adjust ng side mirror',
            'C' => 'Makinig ng musika',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring magmaneho sa bangketa?',
        'choices' => json_encode([
            'A' => 'Kung walang gumagamit neto',
            'B' => 'Kung papasok sa isang garage',
            'C' => 'Kung lalampasan ang mababagal na sasakyan',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung kulay pula ang lahat ng exit sa expressway, ano ang dapat mong gawin?',
        'choices' => json_encode([
            'A' => 'Huminto sa layby at tumawag sa telepono',
            'B' => 'Magbusina at magtanong',
            'C' => 'Huminto, humanap ng pulis trapik at magtanong',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang pinaka-kabang linya ng expressway ay para lamang sa mga:',
        'choices' => json_encode([
            'A' => 'Emergency at mga sirang sasakyan',
            'B' => 'Sa mga mababagal na sasakyan',
            'C' => 'Sa normal na pagmamaneho',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang solidong dobleng kulay dilaw na guhit sa kalsada ay:',
        'choices' => json_encode([
            'A' => 'Maaring mag-overtake kahit kailan',
            'B' => 'Bawal na bawal mag-overtake',
            'C' => 'Maaring magpalipat-lipat ng linya',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ano ang iyong gagawin kung sabay kayong dumating ng isang sasakyan sa iyong kanan sa isang panulukan?',
        'choices' => json_encode([
            'A' => 'Mauna',
            'B' => 'Magbigay ng daan',
            'C' => 'Huwag magbigay daan',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Emergencies',
        'question' => 'Ano ang dapat gawin ng isang drayber kung mayroong aksidente?',
        'choices' => json_encode([
            'A' => 'Tulungan kung maari ang taong naaksidente at tumawag ng tulong',
            'B' => 'Ipagbigay alam ang aksidente sa pinakamalapit na estasyon ng pulis',
            'C' => 'Ipagbigay alam sa hospital ang aksidente',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    // 15
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang tamang senyas kamay kung kakanan ay',
        'choices' => json_encode([
            'A' => 'Kaliwang kamay paturong ibaba',
            'B' => 'Kaliwang kamay paturong itaas',
            'C' => 'Kaliwang kamay paturong kaliwa',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan gawin ang full stop?',
        'choices' => json_encode([
            'A' => 'Kapag ang senyal ay berding ilaw',
            'B' => 'Sa intersection',
            'C' => 'Kapag pula ang ilaw ng traffic light',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Parking Rules',
        'question' => 'Maliban sa tawiran saan pa hindi maaring pumarada?',
        'choices' => json_encode([
            'A' => '6 metro mula sa kanto',
            'B' => 'Sa tabi ng nakaparadang sasakyan',
            'C' => 'Lahat ay tama',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ilang araw dapat mong matubos ang iyong lisensya sa LTO upang maiwasan ang suspension?',
        'choices' => json_encode([
            'A' => 'Sa loob ng 5 araw mula sa araw ng apprehension',
            'B' => 'Sa loob ng 15 araw mula sa araw ng apprehension',
            'C' => 'Sa loob ng 30 araw mula sa araw ng apprehension',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Lights',
        'question' => 'Ang pulang pulang ilaw trapiko ay nagsasabing hinto maliban kung ang daan ay interseksyon ay bakante',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
            'C' => 'Walang tamang sagot',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Kung manual ang iyong sasakyan ano ang dapat na kambyo kung ang kalsada ay pababa?',
        'choices' => json_encode([
            'A' => 'Neutral',
            'B' => 'Unang Kambyo',
            'C' => 'Paatras',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang sinusundan mong sasakyan ay nakailaw ng patay-sinding ilaw. Ano ang ibig sabihin nito?',
        'choices' => json_encode([
            'A' => 'Sasakyan ng pulis',
            'B' => 'Mabagal ang takbo',
            'C' => 'Sasakyan ng doctor',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung mayroong ginagawang kalsada at nakita mo ng mayroong itinakdang bilis, ano ang dapat mong gawin?',
        'choices' => json_encode([
            'A' => 'Sundin ang itinakdang bilis',
            'B' => 'Sundin ang sa itinakdang bilis sa panahon na may pasok ang mga opisina',
            'C' => 'Sundin ang itinakdang bilis kung makitid ang kalsada',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sino/ano ang may awtoridad na maaring magsabi/magsenyas sa iyo na dapat kang huminto?',
        'choices' => json_encode([
            'A' => 'Bantay ng paaralan, pulis trapiko, ilaw trapiko',
            'B' => 'Ang naglalakad sa kalsada, tsuper ng bus o ang may kapansanan',
            'C' => 'Nagbibisikleta, ang lumalampas na sasakyan dilaw na kulay ng ilaw trapiko',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Road Signs',
        'question' => 'Ang solidong puting guhit ay makikita sa kalsada, ano ang ibig sabihin nito?',
        'choices' => json_encode([
            'A' => 'Naghihiwalay sa mga sasakyan at nagsasaad ng gilid ng kalsada',
            'B' => 'Naghihiwalay ng sasakyan sa magkabilang direksyon at gilid ng kalsada',
            'C' => 'Naghihiwalay sa salubong na sasakyan at nagsasaad sa kanang gilid ng kalsada',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Road Courtesy',
        'question' => 'Gusto mong lumiko sa kanan ngunit duda ka na hindi gumagana ang iyong signal light, ano ang iyong dapat gawin?',
        'choices' => json_encode([
            'A' => 'Lumabas ng sasakyan at tignan kung gumagana',
            'B' => 'Gamitin ang tamang senyas ng kamay',
            'C' => 'Manatili sa kaliwang bahagi ng kalsada',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Tama o Mali: ang pag overtake ay maari saan mang bahagi kung may dalawang solidong dilaw na guhit sa gitna ng kalsada.',
        'choices' => json_encode([
            'A' => 'Mali, ang pag overtake ay ipinagbabawal sa dalawang solidong guhit na dilaw sa gitna ng kalsada',
            'B' => 'Tama, kung may sinusundang mabagal na trak',
            'C' => 'Mali, ito ay pinapayagan lang kung walang pulis trapiko',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring gamitin ang bangketa upang lampasan ang isang sasakyan?',
        'choices' => json_encode([
            'A' => 'Kung ang sasakyan sa harapan ay magsisignal na kakanan',
            'B' => 'Kung ang sasakyan sa harapan ay magsisignal pakaliwa',
            'C' => 'Hindi maaring gamitin ang bangketa sa paglampas sa isang sasakyan',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    // 28
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring pumarada sa tarangkahan ng isang hospital?',
        'choices' => json_encode([
            'A' => 'Kung may susunduing pasyente',
            'B' => 'Wala',
            'C' => 'Kung ang motorista ay empleyado ng ospital',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sa tatlong linyaang expressway may 80kph na takdang bilis, anong linya ka dapat manatili?',
        'choices' => json_encode([
            'A' => 'Pangatlong linya',
            'B' => 'Pangalawang linya',
            'C' => 'Unang linya',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung ikaw ay papaliko sa isang panulukan, kailangan mo bang mabigay sa mga tumatawid?',
        'choices' => json_encode([
            'A' => 'oo ang tsuper ay kailangan na magbigay sa mga tumatawid kung may nakaabang panganib',
            'B' => 'oo, lalo na kung kakanan',
            'C' => 'oo, lalo na kung kakaliwa',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan maaring maglagay ng pulang ilaw sa headlights?',
        'choices' => json_encode([
            'A' => 'Kapag napundi na ang ilaw',
            'B' => 'Kapag inutusan ng supervisor',
            'C' => 'Hindi kailanman maari',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ano ang dapat gawin kung papaahon ang kalsada?',
        'choices' => json_encode([
            'A' => 'Magbagal at dobleng ingat',
            'B' => 'Magpreno agad',
            'C' => 'Bilisan',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sa aling lugar hindi maaring mag overtake kung hindi nakikita ang daanan at walang 200 talampakan ang distansyang nakikita?',
        'choices' => json_encode([
            'A' => 'Sa paanan ng tulay',
            'B' => 'Sa interseksyon',
            'C' => 'Parehong tama',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang putol-putol ng kulay puting guhit sa gitna ng salubungang kalsada ay nangangahulugang;',
        'choices' => json_encode([
            'A' => 'Bawal mag overtake',
            'B' => 'Bawal na bawal mag-overtake',
            'C' => 'Naghihiwalay sa linya ng bawat direksyon',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang senyas na ito ay nagsasabing mabibigay daan sa ibang motorista?',
        'choices' => json_encode([
            'A' => 'Inverted triangle',
            'B' => 'Vertical triangle',
            'C' => 'Horizontal triangle',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Paano magparada kung paahon ang sasakyan?',
        'choices' => json_encode([
            'A' => 'Ipaling ang gulong palayo sa bangketa',
            'B' => 'Ideretso lamang ang gulong patungo sa bangketa',
            'C' => 'Ideretso lamang ang gulong',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Parking Rules',
        'question' => 'Maliban sa tawiran saan pa hindi maaring pumarada?',
        'choices' => json_encode([
            'A' => '6 metro mula sa kanto',
            'B' => 'Sa tabi ng nakaparadang sasakyan',
            'C' => 'Lahat ay tama',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Hanggang kailan mo maaring labanan o ireklamo kung ikaw ay nahuli ng LTO?',
        'choices' => json_encode([
            'A' => 'Sa loob ng limang araw mula sa pagkahuli',
            'B' => 'Sa loob ng sampung araw mula sa pagkahuli',
            'C' => 'Sa loob ng 30 na araw mula sa pagkahuli',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Lights',
        'question' => 'Kung ang dilaw na ilaw ay nagpalit sa pula, ano ang dapat gawin kung nasa loob ng interseksyon?',
        'choices' => json_encode([
            'A' => 'Bumagal at hayaang tumuloy ang ibang motorista',
            'B' => 'Huminto sa gitna',
            'C' => 'Ituloy ang pagmamaneho kahit pula na ang ilaw',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Gamitin ang cellphone kung?',
        'choices' => json_encode([
            'A' => 'Ang sasakyan ang nakahinto',
            'B' => 'Kung tatanggap ng tawag',
            'C' => 'Kung nagmamaneho ng automatic na behikulo',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Ano ang dapat mong gawin bago magmaneho kung ikaw ay uminom ng gamot sa ubo mula sa isang kaibigan?',
        'choices' => json_encode([
            'A' => 'Uminom ng kape',
            'B' => 'Suriin ang label ng gamot kung makaka-apekto sa pagmamaneho',
            'C' => 'Magmaneho ng maikli, tumigil at magmaneho ng tuloy-tuloy',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
// 42
    [
        'category' => 'Road Signs',
        'question' => 'Ang mga senyas trapiko na hugis bilog na puti ay may pula sa gilid at itim na letra ay mga?',
        'choices' => json_encode([
            'A' => 'Regulasyon na dapat sundin',
            'B' => 'Mga senyas na maaring gawin',
            'C' => 'Mga senyas na patutunguhan',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Bakit kailangan na bilisan na may ingat kung papasok sa expressway?',
        'choices' => json_encode([
            'A' => 'Dahil maari namn lumiko pabalik kung kinakailangan.',
            'B' => 'Dahil maaaring tumuloy sa layby',
            'C' => 'Upang maging pareho ang bilis sa mga sasakyan na nasa loob ng expressway.',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Road Signs',
        'question' => 'Ito ay senyas trapiko na bilog o baliktad na tatsulok o octagonal?',
        'choices' => json_encode([
            'A' => 'Regulasyon na senyas',
            'B' => 'Warning na senyas',
            'C' => 'Informative na senyas',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Kailan dapat mag check ng tire pressure ng sasakyan?',
        'choices' => json_encode([
            'A' => 'Kung malamig ang gulong',
            'B' => 'Pagkatapos ng mahabang byahe',
            'C' => 'Pagkatapos ng mabilis na pagpapatakbo',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ano ang gamit na kalsada para sa mga bus?',
        'choices' => json_encode([
            'A' => 'Ang mga pribadong sasakyan ay maaring gamitin ang daan',
            'B' => 'Maaring gamitin ng pribadong sasakyan kung liliko lamang',
            'C' => 'Maaring gamitin ng pribadong sasakyan sa overtaking lamang',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Saan maaring mag-overtake sa isang one-way street?',
        'choices' => json_encode([
            'A' => 'Sa kaliwa lamang',
            'B' => 'Sa kaliwa o kanan',
            'C' => 'Ang over-taking sa one-way street ay hindi pinapayagan kailanman',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung ikaw ay nagmamaneho at liliko pakaliwa sa isang maliit na kalsada, saan ka dapat luminya paparating sa likuran?',
        'choices' => json_encode([
            'A' => 'Sa gitnan ng kalsada',
            'B' => 'Lumabas ng daan bago lumiko',
            'C' => 'Manatili sa kaliwa ng kalsada',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Road Signs',
        'question' => 'Dapat mong sundin ang mga senyas trapiko, ito ay madalas na ______?',
        'choices' => json_encode([
            'A' => 'Nasa pulang paihaba at may putting gilid',
            'B' => 'Asul na parihaba na may putting gilid',
            'C' => 'Putting bilog ba may pulang gilid',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Alin sa mga sumusunod ang Tama?',
        'choices' => json_encode([
            'A' => 'Hindi ka maaring mag-overtake sa isang salubungan na kalsada kung may putol-putol na guhit sa gitna ng kalsada',
            'B' => 'Maaaring mag-overtake sa isang salubungan na kalsada kung may dilaw na putol-putol na guhit',
            'C' => 'Wala sa alinman ang tama',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Ayon sa RA 4136 maaring palitan ng drayber ang kulay ng headlights or foglights ng asul, green o pula?',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
            'C' => 'Oo kung aprobado ng LTO sa panahon na mag renew ng registration',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Aparato na nagsasabi sa drayber ng layo at distansya na tinakbo ng sasakyan',
        'choices' => json_encode([
            'A' => 'Speedometer',
            'B' => 'Odometer',
            'C' => 'Tachometer',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Operation',
        'question' => 'Ano dapat gawin ng drayber kung tatawid sa binahang daan para maiwasan ang electrical short circuit?',
        'choices' => json_encode([
            'A' => 'Patayin ang lahat ng aksesoryang elektrikal bago tumawid',
            'B' => 'Patayin ang lahat ng aksesoryang elektrikal pagkatapos tumawid',
            'C' => 'Patayin ang lahat ng aksesoryang elektrikal habang tumatawid',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ang pinakababang edad sa aplikasyon para sa Non-professional driver\'s license ay?',
        'choices' => json_encode([
            'A' => '18 taong gulang',
            'B' => '16 taong gulang',
            'C' => '17 taong gulang',
            'D' => '12 taong gulang',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
// 55
    [
        'category' => 'Licensing',
        'question' => 'Ito ay isang uri ng driver\'s license na pinagkaloob ng LTO sa isang tao upang magpatakbo ng isang pribado at pampublikong sasakyan na may bayad.',
        'choices' => json_encode([
            'A' => 'Propesyonal na lisensya sa pagmamaneho',
            'B' => 'Non- Professional Driver\'s License',
            'C' => 'Lisensya sa konduktor',
            'D' => 'Lisensya sa pagpapatakbo',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Road Signs',
        'question' => 'Mga palatandaan na nagpapaalam sa mga gumagamit ng kalsada ng mga batas at regulasyon sa trapiko na kung babalewalain ay magiging isang pagkakasala?',
        'choices' => json_encode([
            'A' => 'Mga palatandaan sa Regulasyon',
            'B' => 'Mga palatandaan sa direksyon',
            'C' => 'Stop sign',
            'D' => 'Sari-saring Palatandaan',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'First Aid',
        'question' => 'Una at agarang paggamot na ibibigay sa biktima ng aksidente sa kalsada o biglaang pagkakasakit bago dumating ang anumang tulong medical?',
        'choices' => json_encode([
            'A' => 'First Aid',
            'B' => 'Unang medical',
            'C' => 'Paunang tulong',
            'D' => 'Pagtugon',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Safety',
        'question' => 'Napakahagang mag-ehersisyo mula driver\'s seat para mabawasan ang stress at maiwasan ang pinsala',
        'choices' => json_encode([
            'A' => 'Jogging',
            'B' => 'Paikot-ikot na ulo',
            'C' => 'Pabasag ng mga daliri',
            'D' => 'Pag-unat',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Laws',
        'question' => 'RA 10054?',
        'choices' => json_encode([
            'A' => 'Motorcycle helmet act of 2009',
            'B' => 'Kaligtasan ng mga bata sa batas ng motorsiklo ng 2015',
            'C' => 'Motocycle crime prevention act',
            'D' => 'Seatbelt act of 2006',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Habang nagmamaneho dapat kang tumingin sa iyong side at rear view mirror',
        'choices' => json_encode([
            'A' => 'Mabilis',
            'B' => 'Kung gusto mo',
            'C' => 'Hindi bababa sa isang beses bawat minute',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Laws',
        'question' => 'Ang taong nagmamaneho habang nasa ilalim ng impluwensya ng alcohol o droga ay pinaparusahan ng batas ng;',
        'choices' => json_encode([
            'A' => 'Pagsuspinde ng lisensya',
            'B' => 'Mga multa at pagkakulong',
            'C' => 'Lahat ng sagot ay tama',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Bago umalis sa parking area, dapat mong;',
        'choices' => json_encode([
            'A' => 'Tumingin ka muna sa paligid',
            'B' => 'Tugtugin mo ang busina',
            'C' => 'Agad na pumunta',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ang pagkuha ng lisensya sa pagmamaneho ay;',
        'choices' => json_encode([
            'A' => 'Isang karangalan',
            'B' => 'Isang pribilehiyo',
            'C' => 'Isang Karapatan',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ang isang Non-professional driver\'s license ay angkop para sa;',
        'choices' => json_encode([
            'A' => 'Mga pribadong sasakyan',
            'B' => 'Mga pampublikong sasakyan',
            'C' => 'Lahat ng uri ng sasakyan',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Preparation',
        'question' => 'Ano ang dapat mong ihanda para sa isang mahabang paglalakbay?',
        'choices' => json_encode([
            'A' => 'Ihanda ang mga kinakailangang kasangkapan na magagamit sa pagkukomuni ng sasakyan',
            'B' => 'Planuhin ang iyong ruta at siguraduhin na ang sasakyan ay tumatakbo at sa mabuting kondisyon',
            'C' => 'Lahat ng sagot ay tama',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang pagpalit ng lane sa interseksyon ay;',
        'choices' => json_encode([
            'A' => 'Napakaligtas',
            'B' => 'Ligtas',
            'C' => 'Hindi ligtas',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Safety',
        'question' => 'Alin sa mga ito kung mapabayaan ay maaring magdulot ng aksidente o pagbangga sa kalsada?',
        'choices' => json_encode([
            'A' => 'Antas ng Collant ng radiator',
            'B' => 'Antas ng langis ng makina',
            'C' => 'Antas ng brake fluid',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Safety',
        'question' => 'Nagdala ka ng dalawang 10 taong gulang na bata at ang kanilang magulang sa iyong sasakyan, sino ang may pananagutan sa paghiling na ang mga bata ay magsuot ng seat belt?',
        'choices' => json_encode([
            'A' => 'Ang pasahero sa harap na upuan',
            'B' => 'Magulang ng mga bata',
            'C' => 'Ikaw, na drayber',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Safety',
        'question' => 'Kapag nabasa ang iyong preno at nawalan ng lakas ano ang dapat mong gawin?',
        'choices' => json_encode([
            'A' => 'Huminto at punasan sila',
            'B' => 'Acceleration hard',
            'C' => 'Apakan ang brake ng ilang beses',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
// 70
    [
        'category' => 'Vehicle Systems',
        'question' => 'Ang tie rod, box, pump, mga linkage ay mga bahagi?',
        'choices' => json_encode([
            'A' => 'Steering system',
            'B' => 'Clutch system',
            'C' => 'Brake system',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Systems',
        'question' => 'Reservoir, pump, radiator, fan blade ay mga bahagi?',
        'choices' => json_encode([
            'A' => 'Cooling system',
            'B' => 'Radiator system',
            'C' => 'Aircon system',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Maintenance',
        'question' => 'Ano ang dapat suriin ng driver kapag nagdadagdag ng coolant sa water reservoir?',
        'choices' => json_encode([
            'A' => 'Siguraduhin na ang reservoir ay puno hanggang leeg',
            'B' => 'Siguraduhin na ang tubig ay nasa loob ng mga marker',
            'C' => 'Tignan na ang coolant ay orihinal at nasa baba ng marker',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ano ang DL o mga restriction codes para sa non-professional light vehicle driver\'s license (Kabilang ang motorsiklo)?',
        'choices' => json_encode([
            'A' => '1,3 (A, A1D)',
            'B' => '1,2,4,6 (A, A1, B, B1, B2)',
            'C' => '1,5 (A, A1CE)',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Systems',
        'question' => 'Alternator, relays, regulator ng boltahe, piyus ay mga bahagi ng?',
        'choices' => json_encode([
            'A' => 'Air Supply',
            'B' => 'Aircon System',
            'C' => 'Electrical System',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sa anong pagkakataon hindi maaring mag-overtake?',
        'choices' => json_encode([
            'A' => 'Tuwing gabi',
            'B' => 'Kung umuulan',
            'C' => 'Sa Blind curve',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ano ang dapat gawin kapag nagmamaneho sa highway na may maraming lubak?',
        'choices' => json_encode([
            'A' => 'Bilisan ang takbo',
            'B' => 'Bagalan ang takbo',
            'C' => 'Palaging lumipat ng daan o lane',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang busina ay para sa?',
        'choices' => json_encode([
            'A' => 'Pampagising',
            'B' => 'Inagay',
            'C' => 'Magbibigay babala para makaiwas sa disgrasya',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Anong dapat gawin bago lumiko sa kanan o kaliwa?',
        'choices' => json_encode([
            'A' => 'Biglang lumiko at bumusina',
            'B' => 'Magbigay ng hudyat o senyas na hindi kukulangin sa 30 metro',
            'C' => 'Ipagwalang bahala ang hudyat',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang hindi pagsunod sa ilaw trapiko ay;',
        'choices' => json_encode([
            'A' => 'Nagpapatunay na mahusay kang drayber',
            'B' => 'Maaring masangkot sa iyo ang aksidente',
            'C' => 'Nakatipid ng gasoline',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang pinakaligtas na ultimatum kahit ikaw ang may karapatan sa daan ay;',
        'choices' => json_encode([
            'A' => 'Huwag ipilit ang Karapatan',
            'B' => 'Bumusina',
            'C' => 'Laging ipilit ang Karapatan',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sa rotonda, alin ang may Karapatan sa daan?',
        'choices' => json_encode([
            'A' => 'Ang sasakyang papasok pa lamang sa rotonda',
            'B' => 'Ang sasakyang nasa paligid ng rotonda',
            'C' => 'Ang sasakyang nakaharap sa berdeng ilaw',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Laws',
        'question' => 'Ayon sa batas, hindi ka maaring magmaneho ng matulin maliban kung;',
        'choices' => json_encode([
            'A' => 'Walang panganib',
            'B' => 'Naayon sa takdang bilis at yulin',
            'C' => 'Tama lahat ng sagot',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung ang nakasalubong mo ay may nakakasilaw na ilaw, ano ang dapat mong gawin?',
        'choices' => json_encode([
            'A' => 'Silawin din ang nakasalubong',
            'B' => 'Tumingin ng bahagya sa gawing kanan ng kalsada',
            'C' => 'Titigan ang nakakasilaw na ilaw',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Mapanganib ang palikong kaliwa kaysa sa kanan sapagkat?',
        'choices' => json_encode([
            'A' => 'Mabilis ang sasakyan galing sa kaliwa',
            'B' => 'Kailangang listo sa mga sasakyang nagmumula sa kaliwa at kanan',
            'C' => 'Maraming linya sa kalsada',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
// 85

    [
        'category' => 'Traffic Rules',
        'question' => 'Ano ang ibig sabihin ng patay sinding ilaw trapiko?',
        'choices' => json_encode([
            'A' => 'Magmarahan at magpatuloy kung walang panganib',
            'B' => 'Huminto at hintayin magbago ang ilaw',
            'C' => 'Hintayin ang berdeng ilaw',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ang isang may lisensya ay maaring magmaneho ng:',
        'choices' => json_encode([
            'A' => 'Kahit anong uri ng sasakyan',
            'B' => 'Sasakyang nakasaad sa lisensya',
            'C' => 'Pampasaherong sasakyan lamang',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Totoo ba ang di kumikilos na pulang trapikong ilaw ay nangangahulugang dapat kang huminto hanggang ang sangandaan ay maging maaliwalas para magpatuloy?',
        'choices' => json_encode([
            'A' => 'Totoo',
            'B' => 'Hindi Totoo',
            'C' => 'Walang sagot',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ayon sa sumusunod, alin ang hindi pinagbabawal ng Anti-distracted driving act?',
        'choices' => json_encode([
            'A' => 'Making ng music',
            'B' => 'Pagpadala ng mesahe gamit ang iyong cellphone',
            'C' => 'Pagbabasa ng e-book at e-mail',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ayon sa RA 4136, ang student driver\'s permit ay dapat hindi bababa sa edad na;',
        'choices' => json_encode([
            'A' => '16 Taong gulang',
            'B' => '18 Taong gulang',
            'C' => '20 Taong gulang',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang drayber ay nararapat na laging magbigay daan sa mga sasakyang may blinkers at siren na nakabukas dahil sila ay;',
        'choices' => json_encode([
            'A' => 'Malalaking sasakyan',
            'B' => 'Maliit na sasakyan',
            'C' => 'Sasakyang tumutugon sa gipit na kalagayan/emergency',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kailan ka maaring maghintay sa dilaw o yellow box sa sangandaan?',
        'choices' => json_encode([
            'A' => 'Kapag ang traffic light ay pula',
            'B' => 'Kapag nakatigil ka sa daloy ng trapiko',
            'C' => 'Hindi kailanman, ang sangandaan ay dapat malinis sa lahat ng oras',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Kung liliko pakanan, nararapat na?',
        'choices' => json_encode([
            'A' => 'Bagalan ang takbo, manatili sa pinakalabas na bahagi ng daan at mag signal upang liliko sa kanan',
            'B' => 'Manatili sa kaliwang kalsada at magsignal upang lumiko',
            'C' => 'Manatili sa kanang daan ng kalsada',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Maintenance',
        'question' => 'Ang iyong sasakyan ay tumatalbog parang basketball habang ikaw ay nagmamaneho, ano sa tingin mo ang problema?',
        'choices' => json_encode([
            'A' => 'Sobra sa hangin ang gulong',
            'B' => 'Sirang rocker arm',
            'C' => 'Sira ang shock absorber',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Safety',
        'question' => 'Nagmamadali ang pasahero mong bumaba habang palapit ka sa stop zone, ano ang dapat mong gawin para mabawasan ang panganib?',
        'choices' => json_encode([
            'A' => 'Hahayaan ang pasahero',
            'B' => 'Itigil sa susunod na stop zone ang pasahero',
            'C' => 'Payuhan ang pasahero na maghintay',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Vehicle Rules',
        'question' => 'Ano ang magiging kulay ng plate light?',
        'choices' => json_encode([
            'A' => 'Matingkad na pula',
            'B' => 'Puti',
            'C' => 'Pula',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],
    [
        'category' => 'Licensing',
        'question' => 'Ang isang pribadong sasakyan ay nakarehistro sa rehiyon 1, saan ka pa maaring magmaneho ng sasakyan?',
        'choices' => json_encode([
            'A' => 'Region 1 lamang',
            'B' => 'Luzon lamang',
            'C' => 'Kahit saang parti ng Pilipinas',
        ]),
        'correct_answer' => 'C',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Sa lahat ng oras, ang pedestrian ay may Karapatan sa daan sa lahat ng motorista?',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang hand signal kapag humihinto ay kaliwang kamay na nakaturo pababa?',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ipinagbabawal ang pagmamaneho o pumarada sa bangketa?',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
        ]),
        'correct_answer' => 'A',
        'points' => 1,
    ],
    [
        'category' => 'Traffic Rules',
        'question' => 'Ang mga mabagal na gumagalaw na sasakyan na nakaharang sa ibang motorista ay illegal?',
        'choices' => json_encode([
            'A' => 'Tama',
            'B' => 'Mali',
        ]),
        'correct_answer' => 'B',
        'points' => 1,
    ],


]);

    }
}
