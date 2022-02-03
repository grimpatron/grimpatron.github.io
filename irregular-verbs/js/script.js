let list = [
['be', 'was, were', 'been', 'быть, являться'], 
['beat', 'beat', 'beaten', 'бить, колотить'], 
['become', 'became', 'become', 'становиться'], 
['begin', 'began', 'begun', 'начинать'], 
['bend', 'bent', 'bent', 'гнуть'], 
['bet', 'bet', 'bet', 'держать пари'], 
['bite', 'bit', 'bitten', 'кусать'], 
['blow', 'blew', 'blown', 'дуть, выдыхать'], 
['break', 'broke', 'broken', 'ломать, разбивать, разрушать'], 
['bring', 'brought', 'brought', 'приносить, привозить, доставлять'], 
['build', 'built', 'built', 'строить, сооружать'], 
['buy', 'bought', 'bought', 'покупать, приобретать'], 
['catch', 'caught', 'caught', 'ловить, поймать, схватить'], 
['choose', 'chose', 'chosen', 'выбирать, избирать'], 
['come', 'came', 'come', 'приходить, подходить'], 
['cost', 'cost', 'cost', 'стоить, обходиться'], 
['cut', 'cut', 'cut', 'резать, разрезать'], 
['deal', 'dealt', 'dealt', 'иметь дело, распределять'], 
['dig', 'dug', 'dug', 'копать, рыть'], 
['do', 'did', 'done', 'делать, выполнять'], 
['draw', 'drew', 'drawn', 'рисовать, чертить'], 
['drink', 'drank', 'drunk', 'пить'], 
['drive', 'drove', 'driven', 'ездить, подвозить'],
['eat', 'ate', 'eaten', 'есть, поглощать, поедать'],
['fall', 'fell', 'fallen', 'падать'],
['feed', 'fed', 'fed', 'кормить'],
['feel', 'felt', 'felt', 'чувствовать, ощущать'],
['fight', 'fought', 'fought', 'драться, сражаться, воевать'],
['find', 'found', 'found', 'находить, обнаруживать'],
['fly', 'flew', 'flown', 'летать'],
['forget', 'forgot', 'forgotten', 'забывать о (чём-либо)'],
['forgive', 'forgave', 'forgiven', 'прощать'],
['freeze', 'froze', 'frozen', 'замерзать, замирать'],
['get', 'got', 'got', 'получать, добираться'],
['give', 'gave', 'given', 'дать, подать, дарить'],
['go', 'went', 'gone', 'идти, двигаться'],
['grow', 'grew', 'grown', 'расти, вырастать'],
['hang', 'hung', 'hung', 'вешать, развешивать, висеть'],
['have', 'had', 'had', 'иметь, обладать'],
['hear', 'heard', 'heard', 'слышать, услышать'],
['hide', 'hid', 'hidden', 'прятать, скрывать'],
['hit', 'hit', 'hit', 'ударять, поражать'],
['hold', 'held', 'held', 'держать, удерживать, задерживать'],
['hurt', 'hurt', 'hurt', 'ранить, причинять боль, ушибить'],
['keep', 'kept', 'kept', 'хранить, сохранять, поддерживать'],
['know', 'knew', 'known', 'знать, иметь представление'],
['lay', 'laid', 'laid', 'класть, положить, покрывать'],
['lead', 'led', 'led', 'вести за собой, сопровождать, руководить'],
['leave', 'left', 'left', 'покидать, уходить, уезжать, оставлять'],
['lend', 'lent', 'lent', 'одалживать, давать взаймы (в долг)'],
['let', 'let', 'let', 'позволять, разрешать'],
['lie', 'lay', 'lain', 'лежать'],
['light', 'lit', 'lit', 'зажигать, светиться, освещать'],
['lose', 'lost', 'lost', 'терять, лишаться, утрачивать'],
['make', 'made', 'made', 'делать, создавать, изготавливать'],
['mean', 'meant', 'meant', 'значить, иметь в виду, подразумевать'],
['meet', 'met', 'met', 'встречать, знакомиться'],
['pay', 'paid', 'paid', 'платить, оплачивать, рассчитываться'],
['put', 'put', 'put', 'ставить, помещать, класть'],
['read', 'read', 'read', 'читать, прочитать'],
['ride', 'rode', 'ridden', 'ехать верхом, кататься'],
['ring', 'rang', 'rung', 'звенеть, звонить'],
['rise', 'rose', 'risen', 'восходить, вставать, подниматься'],
['run', 'ran', 'run', 'бежать, бегать'],
['say', 'said', 'said', 'говорить, сказать, произносить'],
['see', 'saw', 'seen', 'видеть'],
['seek', 'sought', 'sought', 'искать, разыскивать'],
['sell', 'sold', 'sold', 'продавать, торговать'],
['send', 'sent', 'sent', 'посылать, отправлять, отсылать'],
['set', 'set', 'set', 'устанавливать, задавать, назначать'],
['shake', 'shook', 'shaken', 'трясти, встряхивать'],
['shine', 'shone', 'shone', 'светить, сиять, озарять'],
['shoot', 'shot', 'shot', 'стрелять'],
['show', 'showed', 'shown, showed', 'показывать'],
['shut', 'shut', 'shut', 'закрывать, запирать, затворять'],
['sing', 'sang', 'sung', 'петь, напевать'],
['sink', 'sank', 'sunk', 'тонуть, погружаться'],
['sit', 'sat', 'sat', 'сидеть, садиться'],
['sleep', 'slept', 'slept', 'спать'],
['speak', 'spoke', 'spoken', 'говорить, разговаривать, высказываться'],
['spend', 'spent', 'spent', 'тратить, расходовать, проводить (время)'],
['stand', 'stood', 'stood', 'стоять'],
['steal', 'stole', 'stolen', 'воровать, красть'],
['stick', 'stuck', 'stuck', 'втыкать, приклеивать'],
['strike', 'struck', 'struck, stricken', 'ударять, бить, поражать'],
['swear', 'swore', 'sworn', 'клясться, присягать'],
['sweep', 'swept', 'swept', 'мести, подметать, смахивать'],
['swim', 'swam', 'swum', 'плавать, плыть'],
['swing', 'swung', 'swung', 'качаться, вертеться'],
['take', 'took', 'taken', 'брать, хватать, взять'],
['teach', 'taught', 'taught', 'учить, обучать'],
['tear', 'tore', 'torn', 'рвать, отрывать'],
['tell', 'told', 'told', 'рассказывать'],
['think', 'thought', 'thought', 'думать, мыслить, размышлять'],
['throw', 'threw', 'thrown', 'бросать, кидать, метать'],
['understand', 'understood', 'understood', 'понимать, постигать'],
['wake', 'woke', 'woken', 'просыпаться, будить'],
['wear', 'wore', 'worn', 'носить (одежду)'],
['win', 'won', 'won', 'победить, выиграть'],
['write', 'wrote', 'written', 'писать, записывать']];


let rus = document.querySelector("#rus");
let word = document.querySelector("#word");
let check = document.querySelector("#check");
let input = document.querySelector("#answer_input");


let cnt = -1;
let flag = 0;

check.addEventListener( 'click', () => {
  if (flag == 0) {
    v1.innerHTML = list[cnt][0];
    v2.innerHTML = list[cnt][1];
    v3.innerHTML = list[cnt][2];
    flag = 1;
  } else {
    step();
    // input.value = '';
    v1.innerHTML = '';
    v2.innerHTML = '';
    v3.innerHTML = '';
    flag = 0;
  }
  // if (list[cnt][1] == input.value) {
  //   console.log("da!");
  // } else {
  //   console.log("net!");
  // }
});

step();
function step() {
  // input.focus();
  if (cnt <= list.length - 2) {
    cnt++;
    // word.innerHTML = list[cnt][0];
    rus.innerHTML = list[cnt][3];
  } else {
    word.innerHTML = "The end!";
    input.disabled = true;
  }
}