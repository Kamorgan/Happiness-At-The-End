var airtable_list_url = 'https://api.airtable.com/v0/appoHYgSF7UunoYJG/Backyard%20Party?api_key=keyg8xv3UThPC97R0' 
var cardTemplate = function(Name, Description,Picture,) {
    return `
    <div class="card col-sm-6">
      <img src="${Picture}" class="card-img-top"alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${Name}</h5>
        <p class="card-text">${Description}</p>
        </div>
    </div>`;
  }
$.getJSON( airtable_list_url, function( data ) {

    var items = [];
  
    $.each( data.records, function( key, val ) {
  
      // console.log(val.fields)
  
      var name = val.fields['Name'];
  
      var description = val.fields['Description'];
  
      var picture = val.fields['Picture'] ? val.fields['Picture'][0].url : null;
  
      var html = cardTemplate(name, description, picture);
  
      items.push(html);
  
    });
  
    $(".list-view").append(items.join(''));
  
  });