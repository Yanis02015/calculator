var emd_bdd = document.getElementById("emd-bdd");
var emd_thl = document.getElementById("emd-thl");
var emd_daweb = document.getElementById("emd-daweb");
var emd_rx = document.getElementById("emd-rx");
var emd_poo = document.getElementById("emd-poo");
var emd_se = document.getElementById("emd-se");
var emd_en = document.getElementById("emd-en");

var td_bdd = document.getElementById("td-bdd");
var td_thl = document.getElementById("td-thl");
var td_daweb = document.getElementById("td-daweb");
var td_rx = document.getElementById("td-rx");
var td_poo = document.getElementById("td-poo");
var td_se = document.getElementById("td-se");
var td_en = document.getElementById("td-en");

var tp_bdd = document.getElementById("tp-bdd");
var tp_thl = document.getElementById("tp-thl");
var tp_daweb = document.getElementById("tp-daweb");
var tp_rx = document.getElementById("tp-rx");
var tp_poo = document.getElementById("tp-poo");
var tp_se = document.getElementById("tp-se");
var tp_en = document.getElementById("tp-en");

var moy_bdd = document.getElementById("moy-bdd");
var moy_thl = document.getElementById("moy-thl");
var moy_daweb = document.getElementById("moy-daweb");
var moy_rx = document.getElementById("moy-rx");
var moy_poo = document.getElementById("moy-poo");
var moy_se = document.getElementById("moy-se");
var moy_en = document.getElementById("moy-en");
var moy_res = document.getElementById("moy-res");

var moy1;
var moy2;
function calculer() {
    // bdd
    var bdd = choice(parseFloat (emd_bdd.value), parseFloat (td_bdd.value), parseFloat (tp_bdd.value));
    moy_bdd.innerHTML = bdd;

    // thl
    var thl = choice(parseFloat (emd_thl.value), parseFloat (td_thl.value), parseFloat (tp_thl.value));
    moy_thl.innerHTML = thl;

    // daweb
    var daweb = choice(parseFloat (emd_daweb.value), parseFloat (td_daweb.value), parseFloat (tp_daweb.value));
    moy_daweb.innerHTML = daweb;

    // rx
    var rx = choice(parseFloat (emd_rx.value), parseFloat (td_rx.value), parseFloat (tp_rx.value));
    moy_rx.innerHTML = rx;

    // poo
    var poo = choice(parseFloat (emd_poo.value), parseFloat (td_poo.value), parseFloat (tp_poo.value));
    moy_poo.innerHTML = poo;
    // se
    var se = choice(parseFloat (emd_se.value), parseFloat (td_se.value), parseFloat (tp_se.value));
    moy_se.innerHTML = se;
    // en
    var en = choice(parseFloat (emd_en.value), parseFloat (td_en.value), parseFloat (tp_en.value));
    moy_en.innerHTML = en;

    // générale
    var moy = (bdd/2+rx/2)*6 + (poo/2+daweb/2)*4 + (se*3+thl*2)/5 + en;
    moy_res.innerHTML = moy/16;

}

function choice(a,z,e) {
    if(z!==-1 && e !==-1){
        moy1 = a*0.6 + (z/2 + e/2)*0.4;
        moy2 = a*2 + z + e;
        moy2 /= 4;
    } else if(z == -1 && e !==-1) {
            moy1 = a*0.6 + e*0.4;
            moy2 = a*2 + e;
            moy2 /= 3;
        }else if(e == -1 && z !==-1) {
            moy1 = a*0.6 + z*0.4;
            moy2 = a*2 + z;
            moy2 /= 3;
            }else {
                moy1 = a;
                moy2 = a;
            }

    if(moy1>=moy2){
        return moy1;
    }else{
        return moy2;
    }
}
