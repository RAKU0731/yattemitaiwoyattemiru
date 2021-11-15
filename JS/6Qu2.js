$(function () {
    //得意な順に並べていくと、既に選択されているものと見分けがつきやすくする
    let examSubjects = localStorage.getItem('2S3');
    let subjectsLi = JSON.parse(localStorage.getItem('5T1'));
    for (var i = 1; i <= examSubjects; i++) {
        $('#fite').append('<input type="radio" name="13th" id="Q4-1-' + i + '" value="fiteLi-' + i + '"><label for="Q4-1-' + i + '" class="radiolabel">' + subjectsLi[i] + '</label>');
    }
    for (var i = 1; i <= examSubjects; i++) {
        $('#likeNumber').append('<th>' + i + '番</th>');
        sum14th = null;
        for (var p = 0; p <= examSubjects; p++) {
            sum14th = sum14th + '<option id="A-2-'+ i + p + '"  value="val'+p+'">' + subjectsLi[p] + '</option>';
        }
        $('#likeSubjects').append('<th><select name="14th' + i + '" class="inputdatap" id="Q4-2-' + i + '">' + sum14th + '</select></th>')
    }
    for (var i = 1; i <= examSubjects; i++) {
        $('#difi').append('<input type="radio" name="15th" id="Q4-3-' + i + '" value="likeLi-' + i + '"><label for="Q4-3-' + i + '" class="radiolabel">' + subjectsLi[i] + '</label>');
    }

    $('#nextI').on('click', function () {
        let inputs = 0
        if (!$('input[name="13th"]').is(':checked')) { inputs++ };
        for (var i = 1; i <= examSubjects; i++) {
            var selectVal=$('[name="14th' + i + '"]').val()
            if (selectVal=='val0') { inputs++ };
        }
        if (!$('input[name="15th"]').is(':checked')) { inputs++ };
        console.log(inputs)
    
        if (!inputs > 0) {
            localStorage.setItem('6Q1', $('input[name="13th"]:checked').val());
            let likeSub1 = ['',];
            for (var i = 1; i <= examSubjects; i++) {
                likeSub1.push($('[name="14th'+i+'"] option:selected').text())
            };
            let likeSub = JSON.stringify(likeSub1);
            console.log($('[name="14th1"] option:selected').text())
            console.log(likeSub1)
            localStorage.setItem('6Q2', likeSub);
            localStorage.setItem('6Q3', $('input[name="15th"]:checked').val());
            location.href = 'FMgTable2.html';
        } else { return };
    });
    $('#lastI').on('click',function(){
        location.href='FMgTable1.html';
    });
});