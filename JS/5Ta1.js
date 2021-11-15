$(function () {
    //FMgTable1.html
    //満点の欄を変更したときに、前回の上限を変更する
    let name = localStorage.getItem('2S1');
    $('#namefull').text('今回の' + name + 'は何点満点なのか入力しておこう');
    $('#namelast').text('前回の' + name + 'の結果があったら入力しておこう(前回の点数がわからない場合は、「これくらいなら取れそう」という点数を入力してください)');

    let examSubjects = localStorage.getItem('2S3');
    for (var i = 1; i <= examSubjects; i++) {
        let input10th = '<td><input type="text" name="10th" id="Q3-1-' + i + '" class="inputdatap"></td>'
        $('#subjects').before(input10th);
        let input11th = '<td><input type="number" name="11th" id="Q3-2-' + i + '" value="100" class="inputdatap"></td>'
        $('#fullScores').before(input11th);
        let input12th = '<td><input type="number" name="12th" id="Q3-3-' + i + '" class="inputdatap"></td>'
        $('#lastScores').before(input12th);
    }
    sum11();
    sum12();
    $('input[name="11th"]').on('keyup', sum11);
    $('input[name="12th"]').on('keyup', sum12);

    function sum11() {
        sum11th = 0;
        for (var i = 1; i <= examSubjects; i++) {
            sum11th = sum11th + Number($('#Q3-2-' + i + '').val());
        }
        $('#fullScores').text(sum11th);
    }
    function sum12() {
        sum12th = 0;
        for (var i = 1; i <= examSubjects; i++) {
            sum12th = sum12th + Number($('#Q3-3-' + i + '').val());
        }
        $('#lastScores').text(sum12th);
    }
    $('#nextI').on('click', function () {
        let inputs = 0
        for (var i = 1; i <= examSubjects; i++) {
            for (var p = 1; p <= 3; p++) {
                if ($('#Q3-' + p + '-' + i + '').val() == '') { inputs++; };
                console.log($('#Q3-' + p + '-' + i + '').val()+':'+i+p);
                console.log(inputs+':'+i+p);
            }
        }
        if (!inputs > 0) {
            let subjects1 = ['選択',];
            for (var i = 1; i <= examSubjects; i++) { subjects1.push($('#Q3-1-' + i + '').val()) };
            let subjects = JSON.stringify(subjects1);
            localStorage.setItem('5T1', subjects);
            let fullSco1 = ['',];
            for (var i = 1; i <= examSubjects; i++) { fullSco1.push($('#Q3-2-' + i + '').val()) };
            let fullSco = JSON.stringify(fullSco1);
            localStorage.setItem('5T2', fullSco);
            let lastSco1 = ['',];
            for (var i = 1; i <= examSubjects; i++) { lastSco1.push($('#Q3-3-' + i + '').val()) };
            let lastSco = JSON.stringify(lastSco1);
            localStorage.setItem('5T3', lastSco);
            console.log(inputs)
            location.href = 'FMgQuestion2.html';
        } else { console.log(inputs); return };
    });
    $('#lastI').on('click',function(){
        location.href='FMgAnswer1.html';
    });
});