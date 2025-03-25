let statistics = document.getElementById('statistics');

let have = 0;

for(i=0; i<GVSiHave.length; i++){
    if(GVSiHave[i][1]){
        have++;
        console.log(GVSiHave[i][0])
    }
}

// имею/всего
statistics.innerHTML = `${have} / ${GVSiHave.length}`;

// imgs
let cluster = document.getElementById('cluster');

for(u=0; u<55; u++){
	cluster.innerHTML += `
		<div>
			<img src="img/gvs/5714-00${u}r.jpg" width="100px" height="100px">
		</div>
`
}