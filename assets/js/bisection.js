function runProgram() {
    var a = 2.6, b = 2.5, c=0, cek = Math.abs(a-b), i=0;
    var arrA=[], arrB=[], arrC=[], arrGalat=[];
    var index, 
    Galat = parseFloat(document.getElementById('galat').value), 
    akarAkar = document.getElementById('akarAkar');
    document.getElementById('tombol').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    while (cek >= Galat) {
        c = (a + b) / 2;
        arrA.push(a);
        arrB.push(b);
        arrC.push(c);
        
        if (func(c) == 0) break;

        if (func(a) * func(c) < 0) {
            b = c;
        } else {
            a = c;
        }
        cek = Math.abs(b - a);
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