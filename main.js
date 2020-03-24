d3.csv("dow_data.csv").then(function(dowData) {
    console.log(dowData);
    
    // dowData.forEach(function(d) {
    //     var usa = +d.USA;
    //     var volume = +d.Volume;
    //     var world = +d.World;
    //     var dates = d.Date;
    //     console.log(dates)
    //   });
    var dates = dowData.map((date) => {
        return date.Date;
    })
    var world = dowData.map((date) => {
        return date.World;
    })
    var close = dowData.map((date) => {
        return date.Close;
    })
    var usa = dowData.map((date) => {
        return date.USA;
    })
    
    var trace1 = {
        x: dates,
        y: world,
        name: 'COVID Cases',
        type: 'scatter'
      };
      
      var trace2 = {
        x: dates,
        y: close,
        name: 'DOW',
        yaxis: 'y2',
        type: 'scatter'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        title: 'Covid Cases & DOW - Correlation',
        yaxis: {title: 'Dow Price'},
        showlegend: true,
            legend: {
            x: 100,
            xanchor: 'left',
            y: 100
                },
        yaxis2: {
          title: 'Covid Cases',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        }
      };
      
      Plotly.newPlot('plot', data, layout);
});