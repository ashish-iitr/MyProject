

function getCpeFiles () {

    var ret =  aa.showCpeFiles($("#cpename").val());

}

function openDir (dirname) {

    var ret = aa.displayCpeFiles(dirname);
}

function cpeContent () {

    var ret = aa.displayCpeFiles("");

}
function mouseDown(e,item) {
    //alert($(item).attr("id"));

    if (e.which === 3)
    {
        var id = $(item).attr("id");

        var fileName = $("#"+id).text().split("Size")[0].split(":")[1];
        //alert(fileName);
        //e.preventDefault();
        //$("#"+ii).css('background-color', 'grey');
        //alert($(item).attr("id"));
        aa.displayPopup(fileName);
    }
}

