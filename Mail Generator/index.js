const txt = document.getElementById("first-name");
const txt2 = document.getElementById("last-name");
const txt3 = document.getElementById("start-date");
const txt4 = document.getElementById("end-date");
const txt5 = document.getElementById("destination");
const txt6 = document.getElementById("activity");
const txt7 = document.getElementById("contact-no");
const txt8 = document.getElementById("email")
const btn = document.getElementById("btn");
const FN1 = document.getElementById("firstName1");
const FN2 = document.getElementById("firstName2");
const FN3 = document.getElementById("firstName3");
const FN4 = document.getElementById("firstName4");
const LN1 = document.getElementById("lastName1")
const LN2 = document.getElementById("lastName2")
const LN3 = document.getElementById("lastName3")
const LN4 = document.getElementById("lastName4")
const SD1 = document.getElementById("startDate1")
const SD2 = document.getElementById("startDate2")
const SD3 = document.getElementById("startDate3")
const SD4 = document.getElementById("startDate4")
const ED1 = document.getElementById("endDate1")
const ED2 = document.getElementById("endDate2")
const ED3 = document.getElementById("endDate3")
const ED4 = document.getElementById("endDate4")
const D1 = document.getElementById("destination1")
const D2 = document.getElementById("destination2")
const D3 = document.getElementById("destination3")
const D4 = document.getElementById("destination4")
const A1 = document.getElementById("activity1")
const A2 = document.getElementById("activity2")
const A3 = document.getElementById("activity3")
const A4 = document.getElementById("activity4")
const C1 = document.getElementById("contact1")
const C2 = document.getElementById("contact2")
const C3 = document.getElementById("contact3")
const C4 = document.getElementById("contact4")
const E1 = document.getElementById("email1")
const E2 = document.getElementById("email2")
const E3 = document.getElementById("email3")
const E4 = document.getElementById("email4")

function fun1() {
    FN1.innerHTML = txt.value;
    FN2.innerHTML = txt.value;
    FN3.innerHTML = txt.value;
    FN4.innerHTML = txt.value;
    LN1.innerHTML = txt2.value;
    LN2.innerHTML = txt2.value;
    LN3.innerHTML = txt2.value;
    LN4.innerHTML = txt2.value;
    SD1.innerHTML = txt3.value;
    SD2.innerHTML = txt3.value;
    SD3.innerHTML = txt3.value;
    SD4.innerHTML = txt3.value;
    ED1.innerHTML = txt4.value;
    ED2.innerHTML = txt4.value;
    ED3.innerHTML = txt4.value;
    ED4.innerHTML = txt4.value;
    D1.innerHTML = txt5.value;
    D2.innerHTML = txt5.value;
    D3.innerHTML = txt5.value;
    D4.innerHTML = txt5.value;
    A1.innerHTML = txt6.value;
    A2.innerHTML = txt6.value;
    A3.innerHTML = txt6.value;
    A4.innerHTML = txt6.value;
    C1.innerHTML = txt7.value;
    C2.innerHTML = txt7.value;
    C3.innerHTML = txt7.value;
    C4.innerHTML = txt7.value;
    E1.innerHTML = txt8.value;
    E2.innerHTML = txt8.value;
    E3.innerHTML = txt8.value;
    E4.innerHTML = txt8.value;
}

btn.addEventListener("click", fun1)
