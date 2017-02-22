function btnCalculate(){
  var mealCost = parseInt(document.getElementById("txtMealCost").value); 
  var tipPercentage = parseFloat(document.getElementById("txtTipPercentage").value);
  var totalTip = mealCost + tipPercentage;
  document.getElementById("lbTipTotal").innerHTML = "$" + (parseInt(totalTip).toFixed(3));
}

function btnClear(){
  document.getElementById("txtMealCost").value = "";
  document.getElementById("txtTipPercentage").value = "";
  document.getElementById("lbTipTotal").innerHTML = "Total Tip";
}