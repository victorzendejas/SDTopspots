$(document).ready(function () {
        // getting the topspots.json data
        $.getJSON("topspots.json", function (info) {
            $.each(info.topspots, function (key,value){
                 $("table").append( '<tr><td>' + value.name 
            + '</td><td>' + value.description + '</td><td><a href=https://www.google.com/maps?q=+ key.location[0] + "," + key.location[1] + ><button type="Go to" class="btn btn-primary">Open in Google Maps</button></a></td></tr>');
               
        });
        });
            

    });


    
