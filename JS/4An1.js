$(function(){
    let name=localStorage.getItem('2S1');
    let date=localStorage.getItem('2S2');
    let dateYMD=date.split('-');
    let dateM=dateYMD[1];
    let dateD=dateYMD[2];
    $('#nametest').html(''+dateM+'月'+Number(dateD)+'日に開催される'+name+'について、<br>自分の入力した内容から"一言目標"を決めましょう！');
    $('#nameonly').text('あなたの立てる'+name+'の一言目標は？')

    let Q1=localStorage.getItem('3Q1');
    let Q3=localStorage.getItem('3Q3');
    let Q4th=localStorage.getItem('3Q4');
    let Q4=JSON.parse(Q4th);
    let Q6th=localStorage.getItem('3Q6');
    let Q6=JSON.parse(Q6th);
    let Q7th=localStorage.getItem('3Q7');
    let Q7=JSON.parse(Q7th);
    let Q8=localStorage.getItem('3Q8');
    let Q9=localStorage.getItem('3Q9');
    if(Q1=='no'){
        $('.no1st').show();
        $('#A3-5').text(''+Q6[0]+'点中、'+Q6[1]+'点を目標にしている！');
        $('#A3-6').text(''+Q7[0]+'位中、'+Q7[1]+'位を目標にしている！');
        if(Q9=='know'){
            $('#A3-7').text('偏差値'+Q8+'を目標にしている！');
        }
    } else {
        $('.yes1st').show();
        $('#A3-1').text('今回のテストで目標にしている人は'+Q1+'');
        if(Q3=='A1st'){
            $('#A3-2').text('目標としている人が'+Q4[0]+'点で、');
            $('#A3-3').text('自分が'+Q4[1]+'点なので、');
            $('#A3-4').text('目標としている人との得点の差は'+(Q4[0]-Q4[1])+'点です');
        }else if(Q3=='A2nd'){
            $('#A3-2').text('目標としている人が'+Q4[0]+'位で、');
            $('#A3-3').text('自分が'+Q4[1]+'位なので、');
            $('#A3-4').text('目標としている人との順位の差は'+(Q4[1]-Q4[0])+'位です');
        }else if(Q3='A3rd'){
            $('#A3-2').text('目標としている人が偏差値'+Q4[0]+'で、');
        $('#A3-3').text('自分が偏差値'+Q4[1]+'なので、');
        $('#A3-4').text('目標としている人との偏差値の差は'+(Q4[0]-Q4[1])+'です');
        }
        
    }
    $('#nextI').on('click',function(){
        if(!$('#Q2-1-1').val()==''){
            let onegole=$('#Q2-1-1').val();
            localStorage.setItem('4A1',onegole);
            location.href='FMgTable1.html';
        }
        
    });
    $('#lastI').on('click',function(){
        location.href='FMgQuestion1.html';
    });
});