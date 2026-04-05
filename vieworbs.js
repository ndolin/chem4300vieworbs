function jmolReady(applet) {
    // Jmol.script(myJmol, 'set echo middle center; echo "Drag and drop a .molden file here to visualize.";' );
    Jmol.script(myJmol, "load files mol/n2_321g.molden; rotate best; mo titleformat 'MO %I/%N | Energy = %E %U | Occupancy=%O'")
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

function LoadMOs(mo) {
    Jmol.script(myJmol, "load files " + mo)
}

function selectMO(num) {
    // let e = $("#num").val();
    Jmol.script(myJmol, 'mo ' + num)
}

$(document).ready(function() {
    $("#jmoldiv").html(Jmol.getAppletHtml(myJmol, Info));

    $("#jmoldiv").append(Jmol.jmolCommandInput(myJmol, "command", "100%")); 
    $(".jmolscript").click(function(){
        Jmol.script(myJmol, this.innerHTML);
    });
})