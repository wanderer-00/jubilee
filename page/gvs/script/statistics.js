let statistics = document.getElementById('statistics');

// владею кол-во монет
let have = 0;

for(i=0; i<GVSiHaveTest.length; i++){
    if(GVSiHaveTest[i].HAVE){
        have++;
        console.log(GVSiHaveTest[i].NAME)
    }
};
statistics.innerHTML = `${have} / ${GVSiHaveTest.length}`;



// Постройка блоков
let cluster = document.getElementById('cluster');

for(u=0; u<55; u++){
	cluster.innerHTML += `
		<div>
			<img src="img/gvs/${GVSiHaveTest[u].NUMB}r.jpg" >
		</div>
`
}