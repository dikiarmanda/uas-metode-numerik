function runProgram() {
    var xi = parseFloat(document.getElementById('xi').value), 
    Galat = parseFloat(document.getElementById('galat').value),
    akarAkar = document.getElementById('akarAkar');
    var cek = Math.abs(0-xi), i = 1;
    var arrXi = [xi], arrGalat = [0];
    document.getElementById('tombol').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');

    function func(x) {
        return Math.cbrt(7 * x - 1);
    }

    while (cek >= Galat) {
        xi = func(xi);
        arrXi.push(xi);
        cek = Math.abs(arrXi[i] - arrXi[i - 1]);
        arrGalat.push(cek);
        i++;
    }

    akarAkar.classList.add('p-3');
    akarAkar.insertAdjacentHTML('afterbegin', '<h4>Akar-akar = ' + xi + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.insertAdjacentHTML('beforeend', '<table class="table"><thead class="text-center"><tr><th>Iterasi</th><th>Xi</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i = 1;
    arrXi.forEach(function (e) {
        index = arrXi.indexOf(e);
        tabel.insertAdjacentHTML('beforeend', '<tr><td scope="row">' + i + '</td><td>' + e + '</td><td>' + arrGalat[index].toFixed(8) + '</td></tr>');
        i++;
    })
}