function isSharepoint() { 
  var metas = document.getElementsByTagName('meta'); 
  var sphtml = document.getElementsByTagName("html")[0]; 
  for (i=0; i<metas.length; i++) { 
    if (metas[i].getAttribute("name") == "GENERATOR") { 
      generator = metas[i].getAttribute("content");
      return generator == "Microsoft SharePoint"; 
    } 
  }
  if(document.getElementsByTagName("html")[0].getAttribute("xmlns:o") == "urn:schemas-microsoft-com:office:office"){
    return true;
  }
  return false;
}

if(isSharepoint()){
  var spinjectjs = "var jsInitChecktimer = setInterval(checkForJS_Finish, 1000); \
                      function checkForJS_Finish(){ \
                        // console.log(jsInitChecktimer + ' ' + document.getElementById('s4-workspace').getAttribute('style') + ' ' + typeof _spBodyOnLoadWrapper) \
                        if(typeof _spBodyOnLoadWrapper == 'function' && document.getElementById('s4-workspace').getAttribute('style') == null) { \
                          clearInterval(jsInitChecktimer); \
                          _spBodyOnLoadWrapper(); \
                        } \
                      }"
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.innerHTML = spinjectjs;
  // Use any selector
  document.body.appendChild(s)
  
}