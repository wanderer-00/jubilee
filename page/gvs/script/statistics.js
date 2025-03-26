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

for (u = 0; u < GVSiHaveTest.length; u++) {
    cluster.innerHTML += `
		<a class="card" href="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg">
			<img src="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg" >
		</a>
`
}



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

// проссмотр (список)
function card() {
    cluster.innerHTML = "";
    cluster.className = "cards";
    for (u = 0; u < GVSiHaveTest.length; u++) {
        cluster.innerHTML += `
		<a class="card" href="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg">
			<img src="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg" >
		</a>
`
    }
};
