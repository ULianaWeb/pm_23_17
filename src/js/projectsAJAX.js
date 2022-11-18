$.ajax({
    type : 'GET',
    dataType : 'json',
    url: 'data/projects.json',
    success : function(response) {
        for (let i = 0; i < response.length; i++) {
            $("#projectsPanel").append("<div class='item flex center'>" +
                "<div class=\"titleGroup flex center\">" +
                "<div class=\"sqrBadge\">" +
                "<span id=\"s1\" class=\"f20 white\">"+response[i].percentage+"</span>" +
                "</div>" +
                "<span id=\"s2\" class=\"bold\">"+response[i].title+"</span>" +
                "</div>" +
                "<div class=\"btnGroup flex center\">" +
                "<button class=\"btnItem\">" +
                "<span id=\"s3\" class=\"bold\">"+response[i].name+"</span>" +
                "</button>" +
                "<a href=\"\">" +
                "<img src=\"img/EDIT.png\" onmouseover=\"this.src='img/EDITHover.png'\"\n" +
                "                 onmouseout=\"this.src='img/EDIT.png'\" alt=\"\"/>" +
                "</a>" +
                "<a href=\"\">" +
                "<img src=\"img/ArrowItem.png\" width=\"34px\" alt=\"\"/>" +
                "</a>" +
                "</div>" +
                "</div>" +
                "<hr color=\"#F2F2F2\" size=\"1\">" +
                ""
            );
        }
    }
});
