
window.onload = function() {
   var results='';
localStorage.searchHistorys.split(",").forEach(function(history){
    results+='<tr><td>'+history+'</td></tr>';
    console.log(history)
  });
document.getElementById('results_searchs').innerHTML=results
}
