function isSharepoint() { 
   var metas = document.getElementsByTagName('meta'); 

   for (i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == "GENERATOR") { 
         generator = metas[i].getAttribute("content");
         return generator == "Microsoft SharePoint"; 
      } 
   }
  return false;
}

if(isSharepoint()){
  var spinjectjs = ""
  spinjectjs = spinjectjs + "var jsInitChecktimer = setInterval(checkForJS_Finish, 1000);\n"
  spinjectjs = spinjectjs + "function checkForJS_Finish(){\n"
  spinjectjs = spinjectjs + "  // console.log(jsInitChecktimer + ' ' + document.getElementById('s4-workspace').getAttribute('style') + ' ' + typeof _spBodyOnLoadWrapper)\n"
  spinjectjs = spinjectjs + "  if(typeof _spBodyOnLoadWrapper == 'function' && document.getElementById('s4-workspace').getAttribute('style') == null) {\n"
  spinjectjs = spinjectjs + "    clearInterval(jsInitChecktimer);\n"
  spinjectjs = spinjectjs + "    // console.log('fixed sp');\n"
  spinjectjs = spinjectjs + "    _spBodyOnLoadWrapper();\n"
  spinjectjs = spinjectjs + "  }\n"
  spinjectjs = spinjectjs + "}\n"
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.innerHTML = spinjectjs;
  // Use any selector
  document.body.appendChild(s)
  
}