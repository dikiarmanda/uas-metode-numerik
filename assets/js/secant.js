function runProgram() {
    var a = 2.6, b = 2.5, x=0, i = 0, cek = Math.abs(func(x)), index;
    var arrA=[], arrB=[], arrX=[], arrGalat=[];
    var akarAkar = document.getElementById('akarAkar');
    hiddenEl(document.getElementById('tombol'));

    function hiddenEl(el) {
        return el.classList.add('d-none');
    }

    function func(x) {
        return x * x * x - 7 * x + 1;
    }

    while (cek >= 0.000001) {
        x = b - (func(b)*((b-a)/(func(b)-func(a))));
        arrA.push(a);
        arrB.push(b);
        arrX.push(x);
        
        if (Math.abs(func(x)) > 0.000001) {
            a = b;
            b = x;
        }
        cek = Math.abs(func(x));
        arrGalat.push(cek);
        i++;
    }
    
    akarAkar.insertAdjacentHTML('afterbegin','<h4>Akar-akar = ' + x + '<br>Iterasi ke-' + i + '</h4><br>');
    akarAkar.classList.add('p-3', 'my-5');
    akarAkar.insertAdjacentHTML('beforeend','<table class="table"><thead class="text-center"><tr><th>I</th><th>A</th><th>B</th><th>X</th><th>Galat</th></tr></thead><tbody class="text-end" id="iterasi"></tbody></table>');
    var tabel = document.getElementById('iterasi');
    i=1;
    arrA.forEach(function (a) {
        index = arrA.indexOf(a);
        tabel.insertAdjacentHTML('beforeend','<tr><td scope="row">'+i+'</td><td>'+a.toFixed(3)+'</td><td>'+arrB[index].toFixed(3)+'</td><td>'+arrX[index].toFixed(7)+'</td><td>'+arrGalat[index].toFixed(7)+'</td></tr>');
        i++;
    })
}