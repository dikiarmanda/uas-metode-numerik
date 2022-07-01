function runProgram() {
    var akarAkar = document.getElementById('akarAkar'),
    xr0 = parseFloat(document.getElementById('xr0').value),
    xr1 = parseFloat(document.getElementById('xr1').value),
    Galat = parseFloat(document.getElementById('galat').value);
    var xr2, i = 0, cek = Math.abs(xr1-xr0), index;
    var arrXr=[], arrGalat=[0, cek];
    document.getElementById('tombol').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    arrXr.push(xr0);
    arrXr.push(xr1);
    while (cek >= Galat) {
        xr2 = arrXr[i+1] - ((func(arrXr[i+1])*(arrXr[i+1]-arrXr[i]))/(func(arrXr[i+1])-func(arrXr[i])));
        arrXr.push(xr2);
        cek = Math.abs(arrXr[i+1]-arrXr[i]);
        arrGalat.push(cek);
        i++;
    }
    akarAkar.classList.add('p-3');
    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + arrXr[i] + '<br>Iterasi ke-' + (i+2) + '</h4><br>');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>Iterasi</th><th>Xr</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrXr.forEach(function (e) {
        index = arrXr.indexOf(e);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+e+'</td><td>'+arrGalat[index]+'</td></tr>');
        i++;
    })
}