function jmolReady(applet) {
    Jmol.script(myJmol, 'set echo center; echo "Please select a file to visualize";' );
}

var myJmol = "myJmol";
var Info = {
    height: "100%",
    width: "100%",
    color: "#000000",
    use: "HTML5",
    j2sPath: "jsmol/j2s",
    allowJavaScript: false,
    readyFunction: jmolReady,
}

$(document).ready(function() {
    $("#jmoldiv").html(Jmol.getAppletHtml(myJmol, Info));

    $("#jmoldiv").append(Jmol.jmolCommandInput(myJmol, "command", "100%")); 
    // make Jmol script commmands clickable (and execute the content of the <div>)
    // $(".jmolscript").click(function(){
    //     Jmol.script(myJmol, this.innerHTML);
    // });
})