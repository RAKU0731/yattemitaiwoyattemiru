$(function(){
    $('#testname').text(''+localStorage.getItem('2S1')+'の目標点')
    let examSubjects = localStorage.getItem('2S3');
    $('#onegole').text('一言目標　'+localStorage.getItem('4A1')+'');
    let subjectsLi = JSON.parse(localStorage.getItem('5T1'));
    let fullLi = JSON.parse(localStorage.getItem('5T2'));
    let lastLi = JSON.parse(localStorage.getItem('5T3'));
    let goleLi = JSON.parse(localStorage.getItem('7T1'));
    for(var i=1;i<=examSubjects;i++){
        $('#An2Subjects').before('<td>'+subjectsLi[i]+'</td>');
        $('#An2FullScore').before('<td>'+fullLi[i]+'点</td>');
        $('#An2LastScore').before('<td>'+lastLi[i]+'点</td>');
        $('#An2goleScore').before('<th>'+goleLi[i]+'点</th>');
        $('#An2subtScore').before('<td>'+(goleLi[i]-lastLi[i])+'点up!</td>');
    }
    Allsum();
    function Allsum() {
        sumFull = 0;
        sumLast = 0;
        sumGole = 0;
        sumSubt = 0;
        for (p = 1; p <= examSubjects; p++) {
            sumFull = sumFull + Number(fullLi[p]);
            sumLast = sumLast + Number(lastLi[p]);
            sumGole = sumGole + Number(goleLi[p]);
            sumSubt = sumSubt + Number((goleLi[p]-lastLi[p]));
            
        }
        $('#An2FullScore').text(sumFull+'点');
        $('#An2LastScore').text(sumLast+'点');
        $('#An2goleScore').text(sumGole+'点');
        $('#An2subtScore').text(sumSubt+'点up!');
    };
    $('#nextI').on('click',function(){location.href='index.html'});
    $('#lastI').on('click',function(){location.href='FMgQuestion2.html'});
});
