!function(a){var b=function(){var a=document.getElementById("post-revisions"),b=a?a.getElementsByTagName("input"):[];a.onclick=function(){var a,c,d=0;for(a=0;a<b.length;a++)d+=b[a].checked?1:0,c=b[a].getAttribute("name"),b[a].checked||!("left"==c&&1>d||"right"==c&&1<d&&(!b[a-1]||!b[a-1].checked))||b[a+1]&&b[a+1].checked&&"right"==b[a+1].getAttribute("name")?"left"!=c&&"right"!=c||(b[a].style.visibility="visible"):b[a].style.visibility="hidden"},a.onclick()};a&&a.addEventListener?a.addEventListener("load",b,!1):a&&a.attachEvent&&a.attachEvent("onload",b)}(window);