function runProgram() {
    var a = 1, cek, i = 1;
    var arrA = [a], arrGalat = [];

    function func(x) {
        return Math.cbrt(7 * x - 1);
    }

    do {
        a = func(a);
        arrA.push(a);
        cek = arrA[i] - arrA[i - 1];
        console.log(arrA)
        console.log(cek)
        arrGalat.push(Math.abs(cek));
        i++
    } while (Math.abs(cek) > 0.000001);

    console.log(arrGalat);
    console.log(a);

    akarAkar.insertAdjacentHTML('afterbegin', '<h4>Akar-akar = ' + a + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.classList.add('p-3', 'my-5');
    akarAkar.insertAdjacentHTML('beforeend', '<table class="table"><thead class="text-center"><tr><th>I</th><th>A</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i = 1;
    arrA.forEach(function (a) {
        index = arrA.indexOf(a);
        tabel.insertAdjacentHTML('beforeend', '<tr><td scope="row">' + i + '</td><td>' + a.toFixed(7) + '</td><td>' + arrGalat[index].toFixed(7) + '</td></tr>');
        i++;
    })
}