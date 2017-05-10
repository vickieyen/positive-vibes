//$(document).ready() delays running any code until HTML loaded
//  once page loaded, calls getIdeas()
$(document).ready(function(){
  getIdeas();
});

//getIdeas sends request to SERVER and passes response
//  from server into next function renderData()
function getIdeas(){
  $.get('/ideas', function(data){
    console.log(data);
    renderData(data);
  });
}

//attaches data to page
function renderData(data){
  for (var i = 0; i < data.length; i++) {
    $('ul').append('<li>' + data[i].idea + '</li>');
  }
}
