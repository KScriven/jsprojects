function calculateTip() {
  let totalAmount = document.getElementById('totalAmount').value;
  let serviceQuality = document.getElementById('serviceQuality').value;
  let billSplitters = document.getElementById('billSplitters').value;

  if (totalAmount === '' || serviceQuality === 0) {
    alert('Please enter values');
    return;
  }

  if (billSplitters === '' || billSplitters <= 1) {
    billSplitters = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  let total = (totalAmount * serviceQuality) / billSplitters;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById('totalAmount').style.display = 'block';
  document.getElementById('tip').innerHTML = total;

  document.getElementById('totalAmount').style.display = 'none';
  document.getElementById('each').style.display = 'none';

  document.getElementById('calculateBill').onclick = calculateTip();
}

calculateTip();
