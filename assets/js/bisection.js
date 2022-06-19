function runProgram() {
    var a = 2.6, b = 2.5, c=0, i = 0, cek = Math.abs(a-b), index;
    var arrA=[], arrB=[], arrC=[], arrGalat=[];
    var akarAkar = document.getElementById('akarAkar');
    hiddenEl(document.getElementById('tombol'));

    function hiddenEl(el) {
        return el.classList.add('d-none');
    }

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    while (cek >= 0.000001) {
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
    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + c + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.classList.add('p-3', 'my-5');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>I</th><th>A</th><th>B</th><th>C</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrA.forEach(function (a) {
        index = arrA.indexOf(a);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+a.toFixed(3)+'</td><td>'+arrB[index].toFixed(3)+'</td><td>'+arrC[index].toFixed(3)+'</td><td>'+arrGalat[index].toFixed(7)+'</td></tr>');
        i++;
    })
    console.log(arrA[0]);
    console.log(arrB[0]);
    console.log(arrC[0]);
    console.log(arrGalat[0]);
}