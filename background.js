// This event is fired with the user accepts the input in the omnibox.


chrome.windows.getAll({populate:true}, getAllOpenWindows);

var i = 0;                  //  set your counter to 1

var myitem;
chrome.storage.sync.get({
     url0: '',
	 value0: '',
	 url1: '',
	 value1: '',
	 url2 : '',
     value2 : '',
	 url3 : '',
	 value3 : '',
	 url4 : '',
	 value4 : '',
	 dtimeout : ''
  }, function(items) {
	  myitem = items;
	  console.log(items);
  });

var winTabs;
var totTabs;
function getAllOpenWindows(winData) {

  var tabs = [];
  for (var i in winData) {
    if (winData[i].focused === true) {
        winTabs = winData[i].tabs;
        totTabs = winTabs.length;
    }
  }
}
  
  //winTabs[4].focus();
  //console.log(tabs);


function myLoop() {         //  create a loop function
	var timeout = 20000;
	//if(myitem.dtimeout != ''){
	//	timeout = myitem.dtimeout*1000;
	//}
	
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    //console.log('hello' + i );   //  your code here
	console.log(winTabs[i].id +  '|' + winTabs[i].url);
	let myurl = winTabs[i].url;
	
	console.log(myitem.url0);
	if(myitem.url0 != ''){ 
		var pattern = new RegExp(myitem.url0,'i'); 
		console.log(pattern + ' ' + pattern.test(myurl));
		if(pattern.test(myurl)) 
			timeout = myitem.value0 * 1000;
	}
	if(myitem.url1 != ''){ 
		var pattern = new RegExp(myitem.url1,'i'); 
		console.log(pattern + ' ' + pattern.test(myurl));
		if(pattern.test(myurl)) 
			timeout = myitem.value1* 1000;
	}
	if(myitem.url2 != ''){ 
		var pattern = new RegExp(myitem.url2,'i'); 
		console.log(pattern + ' ' + pattern.test(myurl));
		if(pattern.test(myurl)) 
			timeout = myitem.value2* 1000;
	}
	if(myitem.url3 != ''){ 
		var pattern = new RegExp(myitem.url3,'i'); 
		console.log(pattern + ' ' + pattern.test(myurl));
		if(pattern.test(myurl)) 
			timeout = myitem.value3* 1000;
	}
	if(myitem.url4 != ''){ 
		var pattern = new RegExp(myitem.url4,'i'); 
		console.log(pattern + ' ' + pattern.test(myurl));
		if(pattern.test(myurl)) 
			timeout = myitem.value4* 1000;
	}
	
	console.log("Tab url:" + myurl + "| timeout:" + timeout);
	chrome.tabs.update(winTabs[i].id, {active: true});
    i++;                    //  increment the counter
    if (i < totTabs) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
	else{
		i = 0;
		myLoop();
	}
  }, timeout)
}

myLoop();

function mylog(message){
	  console.log(message);
  }