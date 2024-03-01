//funcion que consume la api
 
function ConstruirApi(){
    var endPoint = "https://restcountries.com/v3.1/all";
    fetch(endPoint)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        // se crea varias arrays para cada region 
        
        var poblacion1 = [];
        var name1 = [];
        var poblacion2 = [];
        var name2 = [];
        var poblacion3 = [];
        var name3 = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].region == "Europe"){
                name1.push(data[i].name.common);
                poblacion1.push(data[i].population);
            }else if (data[i].region == "Asia"){
                name2.push(data[i].name.common);
                poblacion2.push(data[i].population);
            }

            else if ( data[i].subregion == "South America"){
                name3.push(data[i].name.common);
                poblacion3.push(data[i].population);
            }

        }

        var trace1 = {
            x: name1,
            y: poblacion1,
            name: 'Europe',
            type: 'bar'
          };
          
        var trace2 = {
            x: name2,
            y: poblacion2,
            name: 'Asia',
            type: 'bar'
        };

        var trace3 = {
            x: name3,
            y: poblacion3,
            name: 'South America',
            type: 'bar'
        };
          
        var data = [trace1, trace2,trace3];
          
        var layout = {barmode: 'group'};
          
         Plotly.newPlot('myDiv', data, layout);
            

    })
    .catch(function(error){
        console.log(error);
    })
}
