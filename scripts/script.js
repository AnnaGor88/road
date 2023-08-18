let questions = document.querySelectorAll('.quiz__question');
let questionsArray = Array.from(questions);

for (let i = 0; i < 4; i++) {
    /* случайно определяем номер элемента который необходимо показать */
    let ran = Math.floor(Math.random() * questionsArray.length);
    /* показываем случайный */
    questionsArray[ran].style.display = "block";
    /* удаляем показанный элемент из выборки, что бы он не попал второй раз */
    questionsArray.splice(ran, 1);
}

let question1 = document.querySelector('.question1');
let yes1 = document.querySelector('.answer1-2');
let no1 = document.querySelector('.answer1-1');
let not1 = document.querySelector('.answer1-3');

yes1.onclick = function () {
    question1.style.backgroundColor = "lightgreen";
    question1.style.borderColor = "lightgreen";
}
no1.onclick = function () {
    question1.style.backgroundColor = "pink";
    question1.style.borderColor = "pink";
}
not1.onclick = function () {
    question1.style.backgroundColor = "pink";
    question1.style.borderColor = "pink";
}
let question2 = document.querySelector('.question2');
let yes2 = document.querySelector('.answer2-1');
let no2 = document.querySelector('.answer2-2');
let not2 = document.querySelector('.answer2-3');

yes2.onclick = function () {
    question2.style.backgroundColor = "lightgreen";
    question2.style.borderColor = "lightgreen";
}
no2.onclick = function () {
    question2.style.backgroundColor = "pink";
    question2.style.borderColor = "pink";
}
not2.onclick = function () {
    question2.style.backgroundColor = "pink";
    question2.style.borderColor = "pink";
}

let question3 = document.querySelector('.question3');
let yes3 = document.querySelector('.answer3-1');
let no3 = document.querySelector('.answer3-2');
let not3 = document.querySelector('.answer3-3');

yes3.onclick = function () {
    question3.style.backgroundColor = "lightgreen";
    question3.style.borderColor = "lightgreen";
}
no3.onclick = function () {
    question3.style.backgroundColor = "pink";
    question3.style.borderColor = "pink";
}
not3.onclick = function () {
    question3.style.backgroundColor = "pink";
    question3.style.borderColor = "pink";
}

let question4 = document.querySelector('.question4');
let yes4 = document.querySelector('.answer4-4');
let no4 = document.querySelector('.answer4-2');
let not4 = document.querySelector('.answer4-3');
let noo4 = document.querySelector('.answer4-1');

yes4.onclick = function () {
    question4.style.backgroundColor = "lightgreen";
    question4.style.borderColor = "lightgreen";
}
no4.onclick = function () {
    question4.style.backgroundColor = "pink";
    question4.style.borderColor = "pink";
}
not4.onclick = function () {
    question4.style.backgroundColor = "pink";
    question4.style.borderColor = "pink";
}
noo4.onclick = function () {
    question4.style.backgroundColor = "pink";
    question4.style.borderColor = "pink";
}

let question5 = document.querySelector('.question5');
let yes5 = document.querySelector('.answer5-2');
let no5 = document.querySelector('.answer5-1');
let not5 = document.querySelector('.answer5-3');
let noo5 = document.querySelector('.answer5-4');

yes5.onclick = function () {
    question5.style.backgroundColor = "lightgreen";
    question5.style.borderColor = "lightgreen";
}
no5.onclick = function () {
    question5.style.backgroundColor = "pink";
    question5.style.borderColor = "pink";
}
not5.onclick = function () {
    question5.style.backgroundColor = "pink";
    question5.style.borderColor = "pink";
}
noo5.onclick = function () {
    question5.style.backgroundColor = "pink";
    question5.style.borderColor = "pink";
}
let question6 = document.querySelector('.question6');
let yes6 = document.querySelector('.answer6-2');
let no6 = document.querySelector('.answer6-1');
let not6 = document.querySelector('.answer6-3');

yes6.onclick = function () {
    question6.style.backgroundColor = "lightgreen";
    question6.style.borderColor = "lightgreen";
}
no6.onclick = function () {
    question6.style.backgroundColor = "pink";
    question6.style.borderColor = "pink";
}
not6.onclick = function () {
    question6.style.backgroundColor = "pink";
    question6.style.borderColor = "pink";
}
let question7 = document.querySelector('.question7');
let yes7 = document.querySelector('.answer7-4');
let no7 = document.querySelector('.answer7-2');
let not7 = document.querySelector('.answer7-3');
let noo7 = document.querySelector('.answer7-1');

yes7.onclick = function () {
    question7.style.backgroundColor = "lightgreen";
    question7.style.borderColor = "lightgreen";
}
no7.onclick = function () {
    question7.style.backgroundColor = "pink";
    question7.style.borderColor = "pink";
}
not7.onclick = function () {
    question7.style.backgroundColor = "pink";
    question7.style.borderColor = "pink";
}
noo7.onclick = function () {
    question7.style.backgroundColor = "pink";
    question7.style.borderColor = "pink";
}
let question8 = document.querySelector('.question8');
let yes8 = document.querySelector('.answer8-3');
let no8 = document.querySelector('.answer8-1');
let not8 = document.querySelector('.answer8-2');

yes8.onclick = function () {
    question8.style.backgroundColor = "lightgreen";
    question8.style.borderColor = "lightgreen";
}
no8.onclick = function () {
    question8.style.backgroundColor = "pink";
    question8.style.borderColor = "pink";
}
not8.onclick = function () {
    question8.style.backgroundColor = "pink";
    question8.style.borderColor = "pink";
}

let question9 = document.querySelector('.question9');
let yes9 = document.querySelector('.answer9-1');
let no9 = document.querySelector('.answer9-2');
let not9 = document.querySelector('.answer9-3');

yes9.onclick = function () {
    question9.style.backgroundColor = "lightgreen";
    question9.style.borderColor = "lightgreen";
}
no9.onclick = function () {
    question9.style.backgroundColor = "pink";
    question9.style.borderColor = "pink";
}
not9.onclick = function () {
    question9.style.backgroundColor = "pink";
    question9.style.borderColor = "pink";
}

let question10 = document.querySelector('.question10');
let yes10 = document.querySelector('.answer10-3');
let no10 = document.querySelector('.answer10-2');
let not10 = document.querySelector('.answer10-1');

yes10.onclick = function () {
    question10.style.backgroundColor = "lightgreen";
    question10.style.borderColor = "lightgreen";
}
no10.onclick = function () {
    question10.style.backgroundColor = "pink";
    question10.style.borderColor = "pink";
}
not10.onclick = function () {
    question10.style.backgroundColor = "pink";
    question10.style.borderColor = "pink";
}

let question11 = document.querySelector('.question11');
let yes11 = document.querySelector('.answer11-1');
let no11 = document.querySelector('.answer11-2');
let not11 = document.querySelector('.answer11-3');

yes11.onclick = function () {
    question11.style.backgroundColor = "lightgreen";
    question11.style.borderColor = "lightgreen";
}
no11.onclick = function () {
    question11.style.backgroundColor = "pink";
    question11.style.borderColor = "pink";
}
not11.onclick = function () {
    question11.style.backgroundColor = "pink";
    question11.style.borderColor = "pink";
}

let question12 = document.querySelector('.question12');
let yes12 = document.querySelector('.answer12-3');
let no12 = document.querySelector('.answer12-2');
let not12 = document.querySelector('.answer12-1');

yes12.onclick = function () {
    question12.style.backgroundColor = "lightgreen";
    question12.style.borderColor = "lightgreen";
}
no12.onclick = function () {
    question12.style.backgroundColor = "pink";
    question12.style.borderColor = "pink";
}
not12.onclick = function () {
    question12.style.backgroundColor = "pink";
    question12.style.borderColor = "pink";
}

let question13 = document.querySelector('.question13');
let yes13 = document.querySelector('.answer13-3');
let no13 = document.querySelector('.answer13-2');
let not13 = document.querySelector('.answer13-1');
let noo13 = document.querySelector('.answer13-4');

yes13.onclick = function () {
    question13.style.backgroundColor = "lightgreen";
    question13.style.borderColor = "lightgreen";
}
no13.onclick = function () {
    question13.style.backgroundColor = "pink";
    question13.style.borderColor = "pink";
}
not13.onclick = function () {
    question13.style.backgroundColor = "pink";
    question13.style.borderColor = "pink";
}
noo13.onclick = function () {
    question13.style.backgroundColor = "pink";
    question13.style.borderColor = "pink";
}

let question14 = document.querySelector('.question14');
let yes14 = document.querySelector('.answer14-1');
let no14 = document.querySelector('.answer14-2');
let not14 = document.querySelector('.answer14-3');
let noo14 = document.querySelector('.answer14-4');

yes14.onclick = function () {
    question14.style.backgroundColor = "lightgreen";
    question14.style.borderColor = "lightgreen";
}
no14.onclick = function () {
    question14.style.backgroundColor = "pink";
    question14.style.borderColor = "pink";
}
not14.onclick = function () {
    question14.style.backgroundColor = "pink";
    question14.style.borderColor = "pink";
}
noo14.onclick = function () {
    question14.style.backgroundColor = "pink";
    question14.style.borderColor = "pink";
}

let question15 = document.querySelector('.question15');
let yes15 = document.querySelector('.answer15-3');
let no15 = document.querySelector('.answer15-2');
let not15 = document.querySelector('.answer15-1');

yes15.onclick = function () {
    question15.style.backgroundColor = "lightgreen";
    question15.style.borderColor = "lightgreen";
}
no15.onclick = function () {
    question15.style.backgroundColor = "pink";
    question15.style.borderColor = "pink";
}
not15.onclick = function () {
    question15.style.backgroundColor = "pink";
    question15.style.borderColor = "pink";
}

let question16 = document.querySelector('.question16');
let yes16 = document.querySelector('.answer16-4');
let no16 = document.querySelector('.answer16-2');
let not16 = document.querySelector('.answer16-3');
let noo16 = document.querySelector('.answer16-1');

yes16.onclick = function () {
    question16.style.backgroundColor = "lightgreen";
    question16.style.borderColor = "lightgreen";
}
no16.onclick = function () {
    question16.style.backgroundColor = "pink";
    question16.style.borderColor = "pink";
}
not16.onclick = function () {
    question16.style.backgroundColor = "pink";
    question16.style.borderColor = "pink";
}
noo16.onclick = function () {
    question16.style.backgroundColor = "pink";
    question16.style.borderColor = "pink";
}

let question17 = document.querySelector('.question17');
let yes17 = document.querySelector('.answer17-3');
let no17 = document.querySelector('.answer17-2');
let not17 = document.querySelector('.answer17-1');

yes17.onclick = function () {
    question17.style.backgroundColor = "lightgreen";
    question17.style.borderColor = "lightgreen";
}
no17.onclick = function () {
    question17.style.backgroundColor = "pink";
    question17.style.borderColor = "pink";
}
not17.onclick = function () {
    question17.style.backgroundColor = "pink";
    question17.style.borderColor = "pink";
}

let question18 = document.querySelector('.question18');
let yes18 = document.querySelector('.answer18-4');
let no18 = document.querySelector('.answer18-2');
let not18 = document.querySelector('.answer18-3');
let noo18 = document.querySelector('.answer18-1');

yes18.onclick = function () {
    question18.style.backgroundColor = "lightgreen";
    question18.style.borderColor = "lightgreen";
}
no18.onclick = function () {
    question18.style.backgroundColor = "pink";
    question18.style.borderColor = "pink";
}
not18.onclick = function () {
    question18.style.backgroundColor = "pink";
    question18.style.borderColor = "pink";
}
noo18.onclick = function () {
    question18.style.backgroundColor = "pink";
    question18.style.borderColor = "pink";
}

let question19 = document.querySelector('.question19');
let yes19 = document.querySelector('.answer19-3');
let no19 = document.querySelector('.answer19-2');
let not19 = document.querySelector('.answer19-1');

yes19.onclick = function () {
    question19.style.backgroundColor = "lightgreen";
    question19.style.borderColor = "lightgreen";
}
no19.onclick = function () {
    question19.style.backgroundColor = "pink";
    question19.style.borderColor = "pink";
}
not19.onclick = function () {
    question19.style.backgroundColor = "pink";
    question19.style.borderColor = "pink";
}

let question20 = document.querySelector('.question20');
let yes20 = document.querySelector('.answer20-2');
let no20 = document.querySelector('.answer20-3');
let not20 = document.querySelector('.answer20-1');

yes20.onclick = function () {
    question20.style.backgroundColor = "lightgreen";
    question20.style.borderColor = "lightgreen";
}
no20.onclick = function () {
    question20.style.backgroundColor = "pink";
    question20.style.borderColor = "pink";
}
not20.onclick = function () {
    question20.style.backgroundColor = "pink";
    question20.style.borderColor = "pink";
}