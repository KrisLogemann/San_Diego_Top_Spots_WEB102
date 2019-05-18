$.getJSON("data.json", function(data) {
    var topSpots = '';
    $.each(data, function(key, value){
        topSpots += '<tr>'
        topSpots += '<td>'+value.name+'</td>';
        topSpots += '<td>'+value.description+'</td>';
        topSpots += '<td>'+'<a href='+'https://www.google.com/maps?q='+value.location+'>Click Here For Directions</a>'+'</td>';
        topSpots += '</tr>';
    });
    $('#top-spots').append(topSpots);
});