const billAmt = document.getElementById("bill");
const tipAmt = document.getElementById("tip");
const btnCal = document.getElementById("calculate");
const totalSpan = document.getElementById("total");

btnCal.addEventListener("click",calculateTotal);

function calculateTotal() {
    const billValue = billAmt.value;
    const tipValue = tipAmt.value;

    const totalValue = billValue * (1+ tipValue/100);
    totalSpan.innerHTML = totalValue.toFixed(2);
}