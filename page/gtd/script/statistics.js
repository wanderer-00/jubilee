let statistics = document.getElementById('statistics');
let cluster = document.getElementById('cluster');



// статистика общего кол-ва монет и имеющегося
let have = 0;

for (i = 0; i < gtd_data.length; i++) {
    if (gtd_data[i].HAVE) {have++}
};
statistics.innerHTML = `${have} / ${gtd_data.length}`;



// первичная подготовка
let button_card = document.getElementById('button_card');
let button_list = document.getElementById('button_list');
// выделение кнопки режима проссмотра "плитка"
button_card.className = 'viewing_active';
// постройка карточек с монетами
card();



// проссмотр (список)
function list() {
    cluster.className = "lists"; // смена отрисовки на режим "список"
    button_card.className = ''; // снятие выделения кнопки режима проссмотра "плитка"
    button_list.className = 'viewing_active'; // выделение кнопки режима проссмотра "список"
    cluster.innerHTML = `
    <div class="list" style="font-size: 20px;">
        <div>Иконка</div>
        <div>Название</div>
        <div>Номер</div>
        <div>Выпуск</div>
    </div>`;
    // отрисовка монет
    for (u = 0; u < gtd_data.length; u++) {
        cluster.innerHTML += `
		<div class="list">
			<img src="img/${gtd_data[u].NUMB}r.jpg">
            <div>${gtd_data[u].NAME}</div>
            <div>${gtd_data[u].NUMB}</div>
            <div>${gtd_data[u].DATE}</div>
		</div>
`
    }
};

// проссмотр (плитки)
function card() {
    cluster.innerHTML = ""; // удаление монет
    cluster.className = "cards"; // смена отрисовки на режим "плитки"
    button_list.className = ''; // снятие выделения кнопки режима проссмотра "список"
    button_card.className = 'viewing_active'; // выделение кнопки режима проссмотра "плитка"
    // отрисовка монет
    for (u = 0; u < gtd_data.length; u++) {
        cluster.innerHTML += `
		<div class="card">
			<img src="img/${gtd_data[u].NUMB}r.jpg" >
			${ihave(gtd_data[u].HAVE)}
		</div>
`
    }
};



// отметка на имеющиеся монеты
function ihave(m) {
    if (m) {
		return `<div class="have">&check;</div>`
    } else {
		return ' '
	}
}
