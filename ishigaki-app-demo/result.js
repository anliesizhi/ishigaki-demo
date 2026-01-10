const jiban = document.getElementById('jiban');
const ishigakitype = document.getElementById('ishigakitype');
const kisototal = document.getElementById('kisototal');
const henjototal = document.getElementById('henjototal');
const goukei = document.getElementById('total');

const jibanq1 = localStorage.getItem('q1data');
const ishigakitypeq2 = localStorage.getItem('q2data');
const goukeiqq = localStorage.getItem('totaldata');
const kisoqq = localStorage.getItem('kisodata');
const henjoqq = localStorage.getItem('henjodata');


jiban.textContent = "地盤:" + jibanq1;
ishigakitype.textContent = "石垣タイプ:" + ishigakitypeq2;
kisototal.textContent = "基礎項目合計:" + kisoqq;
henjototal.textContent = "変状項目合計:" + henjoqq;
goukei.textContent = "合計:" + goukeiqq;