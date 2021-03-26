const $textarea = document.querySelector('textarea');
const $button_bold = document.querySelector('#button_bold');
const $button_italic = document.querySelector('#button_italic');
const $button_red = document.querySelector('#button_red');

const addSimbols = $simbol => {
    const $text = $textarea.value;
    const $start = $textarea.selectionStart;
    const $end = $textarea.selectionEnd;
    if ($start !== $end) {        
        const $text_start = $text.substring(0, $start);
        const $text_selected = $text.substring($start, $end);
        const $text_simbol = $simbol + $text_selected + $simbol;
        const $tam = $text_selected.length;
        const $text_end = $text.substring($start + $tam);
        $text_final = $text_start + $text_simbol + $text_end;
    } else if ($start === $end) {
        $text_final = $text;
    }
    
    $textarea.value = $text_final;
    write();
}

const replaceTag = ($text) => {
    const $simbols = ['*', 'bold', '_', 'italic', '^', 'red'];
    let $simbols_phrase = [];
    let $classes_phrase = [];
    for (let $letter = 0; $letter < $text.length; $letter++) {
        
    }
    return $text;
}

const write = () => {
    const $div = document.querySelector('div');
    const $simbols = ['*', '_', '^'];
    let $text = $textarea.value;
    $simbols.forEach($simbol => {
        while ($text.indexOf($simbol) !== -1) {
            $text = replaceTag($text);
        }
    });
    $div.innerHTML = $text;
}

$textarea.addEventListener('input', () => {
    write();
});

$button_bold.addEventListener('click', () => {
    addSimbols('*');
})

$button_italic.addEventListener('click', () => {
    addSimbols('_');
})

$button_red.addEventListener('click', () => {
    addSimbols('^');
})