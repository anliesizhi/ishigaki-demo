const sousin=document.getElementById('sousin');
const q1 = document.getElementsByName('q1');
const q2 = document.getElementsByName('q2');
const q1dayo = document.getElementById('q1dayo');
let totalchecked = [];
let q1score = 0;
let q2score = 0;
let total =0;
localStorage.removeItem('q1data');
sousin.addEventListener('click',(e) =>{
    e.preventDefault();
    for (let i = 0; i < q1.length; i++) {
        if (q1.item(i).checked) {
            q1score = Number(q1[i].dataset.score);
            break;
        }  
    }
    for (let i = 0; i < q2.length; i++) {
        if (q2.item(i).checked) {
            q2score = Number(q2[i].dataset.score);
            break;
        }  
    }
    total = q1score + q2score;
    localStorage.setItem('q1data',String(q1score));
    localStorage.setItem('q2data',String(q2score));
    localStorage.setItem('totaldata',String(total));

    window.location.href = 'result.html';
})

