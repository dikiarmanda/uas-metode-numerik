function runProgram() {
    var arrXr=[], arrGalat=[0];
    var akarAkar = document.getElementById('akarAkar'),
    xr = parseFloat(document.getElementById('xr').value),
    Galat = parseFloat(document.getElementById('galat').value);
    var i = 0, cek = Math.abs(0-xr), index;
    document.getElementById('tombol').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    function funcT(x) {
        return 3 * x * x - 7;
    }
    
    arrXr.push(xr);
    
    while (cek >= Galat) {
        xr = arrXr[i] - (func(arrXr[i])/funcT(arrXr[i]));
        arrXr.push(xr);
        cek = Math.abs(xr-arrXr[i]);
        arrGalat.push(cek);
        i++;
    }

    akarAkar.classList.add('p-3');
    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + xr + '<br>Iterasi ke-' + (i+1) + '</h4><br>');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>Iterasi</th><th>Xr</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrXr.forEach(function (e) {
        index = arrXr.indexOf(e);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+e+'</td><td>'+arrGalat[index]+'</td></tr>');
        i++;
    })
    console.log(arrXr);
    console.log(arrGalat);
}