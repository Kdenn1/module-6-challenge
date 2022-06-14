//request the url 
var requestUrl = "https://urlgoeshere.me/api/";

fetch(requestUrl)
.then(function(response){
return response.Json();
}) 
.then(function(data){
console.log(data);
});