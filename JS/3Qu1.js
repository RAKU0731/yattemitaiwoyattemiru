$(function () {
    //FMgQuestion1.html
    //「目標にしているOOはない」というボタンを作る
    $('input[name="1st"]').on('change', function () {
        Q1stval = $(this).val();
        if (Q1stval == 'yes') {
            $('#Q2nd').show();
            $('.no1st').hide();
        } else if (Q1stval == 'no') {
            $('#Q6th').show();
            $('.yes1st').hide();
        }
    });
    $('input[name="2nd"]').on('blur', function () {
        $('#Q3rd').show();
    });
    $('input[name="3rd"]').on('change', function () {
        let Q3rdval = $(this).val();
        if (Q3rdval == 'A1st') {
            unit3 = '得点';
            word3 = '点';
            Q4th();
            Q5th();
            A45th();
        } else if (Q3rdval == 'A2nd') {
            unit3 = '順位';
            word3 = '位';
            Q4th();
            Q5th();
            A45th();
        } else if (Q3rdval == 'A3rd') {
            unit3 = '偏差値';
            word3 = '偏差値';
            Q4th();
            Q5th();
            A45th();
        }
        function Q4th() {
            let Q4th = '目標とする相手の' + unit3 + 'を入れてください';
            $('#Q4th-question').text(Q4th);
            $('input[name="4th"]').val('');
            $('#Q4th').show();
        }
        function Q5th() {
            let Q5th = '現在の自分の' + unit3 + 'を入れてください';
            $('#Q5th-question').text(Q5th);
            $('input[name="5th"]').val('');
        }

    });
    $('input[name="4th"]').on('keyup', function () {
        $('#Q5th').show();
        A45th();
    });
    $('input[name="5th"]').on('keyup', function () {
        A45th();
    });
    function A45th() {
        if (0 < $('#Q1-5-1').val()) {
            let num4th = $('input[name="4th"]').val();
            let num5th = $('input[name="5th"]').val();
            if (word3 == '点') {
                number = num4th - num5th
                var A45th = number + word3;
            } else if (word3 == '位') {
                number = num5th - num4th
                var A45th = number + word3;
            } else if (word3 == '偏差値') {
                number = num4th - num5th
                var A45th = word3 + number;
            }
            $('#Q4th5th-answer').text(A45th);
            $('#A45th').show();
        }
    }
    $('input[name="6th"]').on('keyup', function () {
        let A6th1 = $('#Q1-6-1').val();
        let A6th2 = $('#Q1-6-2').val();
        if (0 < A6th1 && 0 < A6th2) {
            $('#Q7th').show();
        }
    });
    $('input[name="7th"]').on('keyup', function () {
        let A7th1 = $('#Q1-7-1').val();
        let A7th2 = $('#Q1-7-2').val();
        if (0 < A7th1 && 0 < A7th2) {
            $('#Q8th').show();
        }
    });

    $('input[name="1st"]').on('change',function(){scroll(200)});
    $('input[name="2nd"]').one('blur',function(){scroll(200)});
    $('input[name="3rd"]').on('change',function(){scroll(200)});
    $('input[name="4th"]').one('keyup',function(){scroll(200)});
    $('input[name="5th"]').one('keyup',function(){scroll(200)});
    $('input[name="6th"]').one('keyup',function(){
        if (0 < $('#Q1-6-1').val() && 0 < $('#Q1-6-2').val()) {scroll(200)}
    });
    $('input[name="7th"]').one('keyup',function(){
        if (0 < $('#Q1-7-1').val() && 0 < $('#Q1-7-2').val()) {scroll(200)}
    });
    function scroll(px){
        let position = $(window).scrollTop() + px;
        let speed = 400;
        $('html,body').animate({scrollTop:position},speed);
    }

    $('#nextI').on('click', function () {
        let inputs = 0;
        if (Q1stval == 'yes') {
            let two = $('input[name="2nd"]').val()
            let three = $('input[name="3rd"]:checked').val()
            let four = $('input[name="4th"]').val()
            let five = $('input[name="5th"]').val()
            if (two == '') { inputs++ };
            if (four == '') { inputs++ };
            if (five == '') { inputs++ };
            if(!inputs>0){
                localStorage.setItem('3Q1', two);
                localStorage.setItem('3Q3', three);
                let Q45 = [four, five];
                let Q45th = JSON.stringify(Q45);
                localStorage.setItem('3Q4', Q45th);
                location.href = 'FMgAnswer1.html';
            }else{return}
            
        } else if (Q1stval == 'no') {
            let six = $('#Q1-1-2').val()
            let seven = $('#Q1-6-1').val()
            let eight = $('#Q1-6-2').val()
            let nine = $('#Q1-7-1').val()
            let ten = $('#Q1-7-2').val()
            let eleven = $('#Q1-8-1').val()
            if (seven == '') { inputs++ };
            if (eight == '') { inputs++ };
            if (nine == '') { inputs++ };
            if (ten == '') { inputs++ };
            if (!$('#Q1-8-2').prop('checked')){
                if (eleven == '') { inputs++ };
                var twelve = 'know';
            }else{
                var twelve = 'unknow'
            };
            console.log(inputs);
            if(!inputs>0){
                localStorage.setItem('3Q1', six);
                let Q6 = [seven, eight];
                let Q6th = JSON.stringify(Q6);
                localStorage.setItem('3Q6', Q6th);
                let Q7 = [nine, ten];
                let Q7th = JSON.stringify(Q7);
                localStorage.setItem('3Q7', Q7th);
                localStorage.setItem('3Q8', eleven);
                localStorage.setItem('3Q9', twelve);
                location.href = 'FMgAnswer1.html';
            }else{return}
            
        }
    });
    $('#lastI').on('click',function(){
        location.href='FMgStart.html';
    });

});