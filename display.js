var request = new XMLHttpRequest();
request.open('GET', 'billsample.json');
request.onload = function(){
  console.log(request.responseText);
};
request.send();