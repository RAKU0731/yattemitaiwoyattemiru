$(function () {
    //FMgStart.html
    $('input[name="testDate"]').on('change', date).on('keyup', date);

    function date() {
        //テスト日-今日＝何日か
        let testdate = $(this).val();
        let testdate1 = testdate.split('-');
        let testdateY = testdate1[0];
        let testdateM = testdate1[1] - 1;
        let testdateD = testdate1[2];
        let testdate2 = new Date(testdateY, testdateM, testdateD)
        let nowdate = new Date();
        let margindate = testdate2 - nowdate;
        let margindate1 = margindate / 1000 / 60 / 60 / 24;
        let margindate2 = Math.round(margindate1);

        let date = '開催日まであと' + margindate2 + '日！';
        $('#marginDate').text(date);
        $('#show-MarginDate').show();
        $('#show-MarginSubjects').show();
    }
    $('#name').on('blur', function () {
        $('#show-TestDate').show();
    });

    $('#name').one('blur',function(){scroll(200)});
    $('#date').one('change',function(){scroll(400)});
    function scroll(px){
        let position = $(window).scrollTop() + px;
        let speed = 400;
        $('html,body').animate({scrollTop:position},speed);
    }


    $('#nextI').on('click', function () {
        if($('#number').val()>10){
            if(!confirm('10科目以上の目標を立てようとしています。本当にいいですか？')){
                $('#number').focus();
                return;
            }
        }
        let name = $('#name').val()
        let date = $('#date').val()
        let number = $('#number').val()
        let inputs=0;
        if(name == ''){inputs++};
        if(date == ''){inputs++};
        if(number == ''){inputs++};
        console.log(inputs);
        if (!inputs>0) {
            localStorage.setItem('2S1', name);
            localStorage.setItem('2S2', date);
            localStorage.setItem('2S3', number);
            location.href='FMgQuestion1.html';
        } else{
            return;
        }
    });
    $('#lastI').on('click',function(){
        location.href='index.html';
    });
});