

function clickPageReplacement() {

    $("#btPageRep").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btFileAlloc").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btDiskScd").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    clearSubMenu();
    var listItem = [{ name: "FIFO" }, { name: "LRU"} ,{name:"SCLOCK"},{name:"OPTIMAL"}];
    createSubMenu(listItem,"PageReplacement.js");
    
    $("#config-tab").load("PageReplacement_Config.html");

}

function clickFileAllocation() {

    $("#btFileAlloc").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btPageRep").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btDiskScd").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    clearSubMenu();
}

function clickDiskScheduling() {

    $("#btDiskScd").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btFileAlloc").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btPageRep").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    clearSubMenu();
    var listItem = [{ name: "FCFS" }, { name: "SSTF"} ,{name:"SCAN"},{name:"CSCAN"},{name:"LOOK"},{name:"CLOOK"}];
    createSubMenu(listItem,"DiskScheduling.js");
}

function clearSubMenu() {
    $("#subMenu").remove();
}

function createSubMenu(listItem, algorithmFile) {


    $('#subMenuDiv').append('<ul class="nav navbar-nav" id ="subMenu"> </ul>');
    for (let i = 0; i < listItem.length; i++) {
        let algoName = listItem[i].name;
        if (i == 0) {
            $('#subMenu').append('<li class="nav-item" role="presentation"><a class="nav-link buttonMenuClick" onclick = "click'+algoName+'()" id="bt'+algoName+'">' + algoName + '</a></li>');
        }
        else {
            $('#subMenu').append('<li class="nav-item" role="presentation"><a class="nav-link" onclick = "click'+algoName+'()" id="bt'+algoName+'">' + algoName + '</a></li>');
        }
    }
}