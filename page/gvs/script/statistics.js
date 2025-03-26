let statistics = document.getElementById('statistics');

// владею кол-во монет
let have = 0;

for (i = 0; i < GVSiHaveTest.length; i++) {
    if (GVSiHaveTest[i].HAVE) {
        have++;
        console.log(GVSiHaveTest[i].NAME)
    }
};
statistics.innerHTML = `${have} / ${GVSiHaveTest.length}`;



// Постройка блоков
let cluster = document.getElementById('cluster');

card();

// проссмотр (список)
function list() {
    cluster.innerHTML = "";
    cluster.className = "lists";
    for (u = 0; u < GVSiHaveTest.length; u++) {
        cluster.innerHTML += `
		<div class="list" href="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg">
			<img src="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg">
            <div>${GVSiHaveTest[u].NAME}</div>
            <div>${GVSiHaveTest[u].NUMB}</div>
            <div>${GVSiHaveTest[u].DATE}</div>
		</div>
`
    }
};

// проссмотр (плитки)
function card() {
    cluster.innerHTML = "";
    cluster.className = "cards";
    for (u = 0; u < GVSiHaveTest.length; u++) {
        cluster.innerHTML += `
		<div class="card">
			<img src="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg" >
			${ihave(GVSiHaveTest[u].HAVE)}
		</div>
`
    }
};

//
function ihave(m) {
    if (m) {
		return `<div class="have" style="font-size: 32px">&check;</div>`
    } else {
		return ' '
	}
}
