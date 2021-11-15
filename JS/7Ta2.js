$(function () {
    let examSubjects = localStorage.getItem('2S3');
    $('#onegole').text('一言目標　'+localStorage.getItem('4A1')+'');
    let subjectsLi = JSON.parse(localStorage.getItem('5T1'));
    let fullLi = JSON.parse(localStorage.getItem('5T2'));
    let lastLi = JSON.parse(localStorage.getItem('5T3'));
    let SubNo1 = localStorage.getItem('6Q1').split('-');
    let Subject1 = subjectsLi[SubNo1[1]];
    $('#fiteSub').text('今回、一番力を入れたい教科は'+Subject1+'');
    let likeLi = JSON.parse(localStorage.getItem('6Q2'));
    let SubNo3 = localStorage.getItem('6Q3').split('-');
    let Subject3 = subjectsLi[SubNo3[1]];
    $('#difiSub').text('今回、テスト内容が難しそうな教科は'+Subject3+'');

    for (var i = 1; i <= examSubjects; i++) {
        $('#likeNo').append('<td>'+i+'番</td>');
        $('#likeLi').append('<td>'+likeLi[i]+'</td>')
        $('#subjectsList').before('<td>' + subjectsLi[i] + '</td>');
        $('#fullScoreList').before('<td id="full' + i + '">' + fullLi[i] + '</td>');
        $('#lastScoreList').before('<td id="last' + i + '">' + lastLi[i] + '</td>');
        $('#goleList').before('<td><input type="number" name="16th" id="Q5-1-' + i + '" class="inputdatap" value=""></td>');
        $('#subtractionList').before('<td id="subtra' + i + '">'+(0-lastLi[i])+'</td>');
        $('#Q5-1-' + i + '').on('keyup', subtraction);
    }
    sumFullLast();
    sumGoleSubt();
    function subtraction() {
        let subNo = $(this).attr('id').split('-');
        let p = subNo[2];
        let subtraction = $(this).val() - $('#last' + p + '').html();
        $('#subtra' + p + '').text(subtraction);
        sumGoleSubt();
    }

    
    function sumFullLast() {
        sumFull = 0;
        sumLast = 0;
        for (q = 1; q <= examSubjects; q++) {
            sumFull = sumFull + Number($('#full' + q + '').text());
            sumLast = sumLast + Number($('#last' + q + '').text());
        }
        $('#fullScoreList').text(sumFull);
        $('#lastScoreList').text(sumLast);
    };
    function sumGoleSubt() {
        sumGole = 0;
        sumSubt = 0;
        for (p = 1; p <= examSubjects; p++) {
            sumGole = sumGole + Number($('#Q5-1-' + p + '').val());
            sumSubt = sumSubt + Number($('#subtra' + p + '').text());
            
        }
        $('#goleList').text(sumGole);
        $('#subtractionList').text(sumSubt);
    };
    $('#nextI').on('click',function(){
        inputs=0;
        for(var i = 1; i <= examSubjects; i++){
            if($('#Q5-1-' + i + '').val()==''){inputs++};
        }
        if(!inputs>0){
        let goleSco1=['',];
        for (var i = 1; i <= examSubjects; i++) { goleSco1.push($('#Q5-1-' + i + '').val())};
        let goleSco = JSON.stringify(goleSco1);
        localStorage.setItem('7T1',goleSco);
        location.href = 'FMgAnswer2.html';
        }else{return};
    });
    $('#lastI').on('click',function(){
        location.href='FMgQuestion2.html';
    });
});