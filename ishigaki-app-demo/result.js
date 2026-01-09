const jiban = document.getElementById('jiban');
const ishigakitype = document.getElementById('ishigakitype');
const goukei = document.getElementById('total');

const jibanq1 = localStorage.getItem('q1data');
const ishigakitypeq2 = localStorage.getItem('q2data');
const goukeiqq = localStorage.getItem('totaldata');
jiban.textContent = "地盤:" + jibanq1;
ishigakitype.textContent = "石垣タイプ:" + ishigakitypeq2;
goukei.textContent = "合計:" + goukeiqq;