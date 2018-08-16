var airtable_list_url = 'https://api.airtable.com/v0/appoHYgSF7UunoYJG/Blog%20Post?api_key=keyg8xv3UThPC97R0' 
var cardTemplate = function(Name, Writing,Picture,) {
    return `
    <div class="card col-sm-9">
      <img src="${Picture}" class="card-img-top"alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${Name}</h5>
        <p class="card-text">${Writing}</p>
        </div>
    </div>`
  }
$.getJSON( airtable_list_url, function( data ) {

    var items = [];
  
    $.each( data.records, function( key, val ) {
  
      // console.log(val.fields)
  
      var Name = val.fields['Name'];
  
      var Writing = val.fields['Writing'];
  
      var picture = val.fields['Picture'] ? val.fields['Picture'][0].url : null;
  
      var html = cardTemplate(Name, Writing, picture);
  
      items.push(html);
  
    });
  
    $(".list-view").append(items.join(''));
  
  });