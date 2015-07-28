(function($) {
    $(function() {
        var skilldata = {
            labels: ["Javscript", "HTML", "CSS", "Node.js", "Photoshop", "Photography"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [90, 80, 80, 70, 70, 80]
            }]
        };

        var options = {
            //Boolean - Whether to show lines for each scale point
            scaleShowLine: true,
            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut: true,
            //Boolean - Whether to show labels on the scale
            scaleShowLabels: false,
            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero: true,
            //String - Colour of the angle line
            angleLineColor: "rgba(0,0,0,.1)",
            //Number - Pixel width of the angle line
            angleLineWidth: 1,
            showTooltips: false,
            //Boolean - Whether to show a dot for each point
            pointDot: true,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 3,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true
        }
        var ctx = document.getElementById("skilltree").getContext("2d");

        var myRadarChart = new Chart(ctx).Radar(skilldata, options);
    });
})(jQuery);
