// Saves options to chrome.storage
function save_options() {
	
  var dtimeout 		= document.getElementById('dtimeout').value;
  var url0 		= document.getElementById('url0').value;
  var value0 	= document.getElementById('value0').value;
  var url1 		= document.getElementById('url1').value;
  var value1 	= document.getElementById('value1').value;
  var url2 		= document.getElementById('url2').value;
  var value2 	= document.getElementById('value2').value;
  var url3 		= document.getElementById('url3').value;
  var value3 	= document.getElementById('value3').value;
  var url4 		= document.getElementById('url4').value;
  var value4 	= document.getElementById('value4').value;
  chrome.storage.sync.set({
	dtimeout:dtimeout,
    url0: url0,
	value0: value0,
	url1: url1,
	value1: value1,
	url2: url2,
	value2: value2,
	url3: url3,
	value3: value3,
	url4: url4,
	value4: value4
  }, function() {
    // Update status to let user know options were saved.
	console.log('saved');
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
     dtimeout:10,
	 url0: '',
	 value0: '',
	 url1: '',
	 value1: '',
	 url2 : '',
     value2 : '',
	 url3: '',
	value3: '',
	url4: '',
	value4: ''
  }, function(items) {
	  //console.log(items);
	document.getElementById('dtimeout').value = items.dtimeout;
    document.getElementById('url0').value = items.url0;
	document.getElementById('value0').value= items.value0;
	document.getElementById('url1').value = items.url1;
	document.getElementById('value1').value = items.value1;
	document.getElementById('url2').value = items.url2;
	document.getElementById('value2').value = items.value2;
	document.getElementById('url3').value = items.url3;
	document.getElementById('value3').value = items.value3;
	document.getElementById('url4').value = items.url4;
	document.getElementById('value4').value = items.value4;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);