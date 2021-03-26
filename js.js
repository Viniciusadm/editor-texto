const $simbols = ['*', 'bold', '_', 'italic', '^', 'red'];
let $simbols_phrase = [];
let $classes_phrase = [];
for (let $letter = 0; $letter < $text.length; $letter++) {
    for (let $index = 0; $index < $simbols.length; $index += 2) {
        let letter = $text[$letter];
        let simbol = $simbols[$index];
        if (letter === simbol) {
            $simbols_phrase.push($simbols[$index]);
            $classes_phrase.push($simbols[$index + 1]);
        }
    }
}

if ($simbols_phrase.length % 2 !== 0) {
    const $last_simbol = $simbols_phrase.length -1;
    if ($simbols_phrase[$last_simbol] !== simbol) {
        $simbols_phrase.push($simbols[$index]);
        $classes_phrase.push($simbols[$index + 1]);
    }
}

const $simbols_phrase_join = $simbols_phrase.join('');
const $simbols_phrase_join_reverse = $simbols_phrase.reverse().join('');
const $classes_phrase_join = $classes_phrase.join(' ');
$text = $text.replace($simbols_phrase_join, `<span class="${$classes_phrase_join}">`);
$text = $text.replace($simbols_phrase_join_reverse, '</span>');