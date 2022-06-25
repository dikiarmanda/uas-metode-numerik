function runProgram() {
    var a = 2.5, i = 0, cek = Math.abs(func(a)), index;
    var arrA=[], arrGalat=[];
    var akarAkar = document.getElementById('akarAkar');
    hiddenEl(document.getElementById('tombol'));

    function hiddenEl(el) {
        return el.classList.add('d-none');
    }

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    function funcT(x) {
        return 3 * x * x - 7;
    }

    while (cek >= 0.000001) {
        arrA.push(a);
        a = arrA[i] - (func(arrA[i])/funcT(arrA[i]));
        cek = Math.abs(func(a));
        arrGalat.push(cek);
        i++;
    }

    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + a + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.classList.add('p-3', 'my-5');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>I</th><th>A</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrA.forEach(function (a) {
        index = arrA.indexOf(a);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+a.toFixed(7)+'</td><td>'+arrGalat[index].toFixed(8)+'</td></tr>');
        i++;
    })
}