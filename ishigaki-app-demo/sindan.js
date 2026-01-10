const sousin=document.getElementById('sousin');
const q1 = document.getElementsByName('q1');
const q2 = document.getElementsByName('q2');

let totalchecked = [];
let q1score = 0;
let q2score = 0;
let kiso = 0;
let henjo = 0;
let total =0;
localStorage.removeItem('q1data');
sousin.addEventListener('click',(e) =>{
    e.preventDefault();
    for (let i = 0; i < q1.length; i++) {
        if (q1.item(i).checked) {
            q1score = Number(q1[i].dataset.score);
            kiso += q1score
            total += q1score;
            break;
        }  
    }
    for (let i = 0; i < q2.length; i++) {
        if (q2.item(i).checked) {
            q2score = Number(q2[i].dataset.score);
            kiso += q2score
            total += q2score;
            break;
        }  
    }
    
    localStorage.setItem('q1data',String(q1score));
    localStorage.setItem('q2data',String(q2score));
    localStorage.setItem('totaldata',String(total));
    localStorage.setItem('kisodata',String(kiso));
    localStorage.setItem('henjodata',String(henjo));



    window.location.href = 'result.html';
})

