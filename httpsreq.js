const Http = new XMLHttpRequest();
const url='';


req = function (url){
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  res = Http.responseText

}

}
