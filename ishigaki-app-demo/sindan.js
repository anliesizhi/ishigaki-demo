const sousin=document.getElementById('sousin');
const q1 = document.getElementsByName('q1');
const q2 = document.getElementsByName('q2');
const q3 = document.getElementsByName('q3');
const q4 = document.getElementsByName('q4');
const q5 = document.getElementsByName('q5');
const q6 = document.getElementsByName('q6');
const q7 = document.getElementsByName('q7');
const q8 = document.getElementsByName('q8');
const q9 = document.getElementsByName('q9');
const q10 = document.getElementsByName('q10');
const q11 = document.getElementsByName('q11');
const q12 = document.getElementsByName('q12');

let totalchecked = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12];
let q1score = 0;
let q2score = 0;
let kiso = 0;
let henjo = 0;
let total =0;
let nownumber = 0;
let score= []; 
sessionStorage.removeItem('q1data');


sousin.addEventListener('click',(e) =>{
    e.preventDefault();
    for (let k = 0; k < totalchecked.length; k++) {
        let now = totalchecked[k];
      for (let i = 0; i < now.length; i++) {
        if (now.item(i).checked) {
            
            score.push(Number(now[i].dataset.score));
            
            nownumber = Number(now[i].dataset.score);

            kiso += nownumber;
            total += nownumber;
            break;
           
        }  
        
    }  
        
    }
    
    
    
    sessionStorage.setItem('q1data',String(score[0]));
    sessionStorage.setItem('q2data',String(score[1]));
    sessionStorage.setItem('q3data',String(score[2]));
    sessionStorage.setItem('q4data',String(score[3]));
    sessionStorage.setItem('q5data',String(score[4]));
    sessionStorage.setItem('q6data',String(score[5]));
    sessionStorage.setItem('q7data',String(score[6]));
    sessionStorage.setItem('q8data',String(score[7]));
    sessionStorage.setItem('q9data',String(score[8]));
    sessionStorage.setItem('q10data',String(score[9]));
    sessionStorage.setItem('q11data',String(score[10]));
    sessionStorage.setItem('q12data',String(score[11]));

    sessionStorage.setItem('totaldata',String(total));
    sessionStorage.setItem('kisodata',String(kiso));
    sessionStorage.setItem('henjodata',String(henjo));



    window.location.href = 'result.html';
})
