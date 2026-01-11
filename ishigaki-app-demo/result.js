const jiban = document.getElementById('jiban');
const ishigakitype = document.getElementById('ishigakitype');
const koubai = document.getElementById('koubai');
const hisai = document.getElementById('hisai');
const shuri = document.getElementById('shuri');
const yurumi = document.getElementById('yurumi');
const harami = document.getElementById('harami');
const ware = document.getElementById('ware');
const tinka = document.getElementById('tinka');
const kisobu = document.getElementById('kisobu');
const shinkou = document.getElementById('shinkou');
const wakimizu = document.getElementById('wakimizu');

const kisototal = document.getElementById('kisototal'); 
const henjototal = document.getElementById('henjototal'); 
const goukei = document.getElementById('total');

const jibanq1 = sessionStorage.getItem('q1data');
const ishigakitypeq2 = sessionStorage.getItem('q2data');
const koubaiq3 = sessionStorage.getItem('q3data');
const hisaiq4 = sessionStorage.getItem('q4data');
const shuriq5 = sessionStorage.getItem('q5data');
const yurumiq6 = sessionStorage.getItem('q6data');
const haramiq7 = sessionStorage.getItem('q7data');
const wareq8 = sessionStorage.getItem('q8data');
const tinkaq9 = sessionStorage.getItem('q9data');
const kisobuq10 = sessionStorage.getItem('q10data');
const shinkouq11 = sessionStorage.getItem('q11data');
const wakimizuq12 = sessionStorage.getItem('q12data');


const goukeiqq = sessionStorage.getItem('totaldata');
const kisoqq = sessionStorage.getItem('kisodata');
const henjoqq = sessionStorage.getItem('henjodata');


jiban.textContent = "地盤:" + jibanq1;
ishigakitype.textContent = "石垣タイプ:" + ishigakitypeq2;
koubai.textContent = "石垣の勾配:" + koubaiq3;
hisai.textContent = "被災・修復履歴:" + hisaiq4;
shuri.textContent = "修理の方法:" + shuriq5;
yurumi.textContent = "緩み、築石の目地の開き:" + yurumiq6;
harami.textContent = "孕み:" + haramiq7;
ware.textContent = "割れ、抜け落ち、崩れ:" + wareq8;
tinka.textContent = "天端または栗石部の沈下、地割れ:" + tinkaq9;
kisobu.textContent = "基礎部の変状:" + kisobuq10;
shinkou.textContent = "変状の進行状況:" + shinkouq11;
wakimizu.textContent = "湧水:" + wakimizuq12;

kisototal.textContent = "基礎項目合計:" + kisoqq;
henjototal.textContent = "変状項目合計:" + henjoqq;
goukei.textContent = "合計:" + goukeiqq;
