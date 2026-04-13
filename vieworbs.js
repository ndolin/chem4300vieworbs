function jmolReady(applet) {
    Jmol.script(myJmol, 'set echo middle center; echo "Select a molecule to visualize.";' );
    // Jmol.script(myJmol, "load files mol/n2_321g.molden; rotate best; mo titleformat 'MO %I/%N | Energy = %E %U | Occupancy=%O'")
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

let numOrbs;

function loadMOs(moldenfile) {
    Jmol.script(myJmol, "load files " + moldenfile + "; rotate best; mo titleformat 'MO %I/%N | Energy = %E %U | Occupancy=%O'")
}

function selectMO_updatenum(num) {
    Jmol.script(myJmol, 'mo ' + num)
    document.querySelector("morb").value = num
}
function selectMO(num) {
    Jmol.script(myJmol, 'mo ' + num)
}

function createDropdown(dropdown_name, num_options) {
    let newOption, i;
    const select = document.getElementById(dropdown_name);
    while (select.lastElementChild.id !== 'default') {  // remove all existing elements except for default message. Adapted from https://stackoverflow.com/a/19885871
        select.removeChild(select.lastChild);
    }
    for (i = 1; i <= num_options; i++) {
        newOption = document.createElement('option');
        newOption.textContent = String(i);
        select.appendChild(newOption);
    }
}

$(document).ready(function() {
    $("#jmoldiv").html(Jmol.getAppletHtml(myJmol, Info));

    $("#jmoldiv").append(Jmol.jmolCommandInput(myJmol, "command", "100%")); 
    $(".jmolscript").click(function(){
        Jmol.script(myJmol, this.innerHTML);
    });
})