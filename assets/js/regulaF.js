function runProgram() {
    var a = 2.58, b = 5.38, c=0, i=0, cek = Math.abs(b-a);
    var arrA=[], arrB=[], arrC=[], arrGalat=[];
    var index, 
    max = parseFloat(document.getElementById('max').value), 
    akarAkar = document.getElementById('akarAkar');
    document.getElementById('tombol').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    for (let z = 1; z <= max; z++) {
        c = (func(b)*(b-a))/(func(b)-func(a));
        arrA.push(a);
        arrB.push(b);
        arrC.push(c);
        
        if (func(a) * func(c) < 0) {
            b = c;
        } else {
            a = c;
        }
        cek = Math.abs(b-a);
        arrGalat.push(cek);
        i++;
    }

    akarAkar.classList.add('p-3');
    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + c + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>Iterasi</th><th>A</th><th>B</th><th>C</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrA.forEach(function (a) {
        index = arrA.indexOf(a);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+a.toFixed(3)+'</td><td>'+arrB[index].toFixed(3)+'</td><td>'+arrC[index].toFixed(7)+'</td><td>'+arrGalat[index].toFixed(7)+'</td></tr>');
        i++;
    })
}