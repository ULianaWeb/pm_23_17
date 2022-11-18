$.ajax({
    type : 'GET',
    dataType : 'json',
    url: 'data/history.json',
    success : function(data) {
        for (let i = 0; i < data.length; i++) {
            $(".histList").append("<div class=\"histItem flex center\">" +
                "<div class=\"flex center\">" +
                "<img src=\""+data[i].imageURL+"\" alt=\"\">" +
                "<div class=\"histText\">" +
                "<div class=\"topTitle\">" +
                "<span class=\"bold\">"+data[i].name+"</span>" +
                "<span class=\"color1\">"+data[i].description+"</span>" +
                "</div>" +
                "<div class=\"f14 color2\">" +
                "<span>"+data[i].day+"</span>" +
                "<span>"+data[i].time+"</span>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<hr color=\"#F2F2F2\" size=\"1\">" +
                ""
            );
        }
    }
});
