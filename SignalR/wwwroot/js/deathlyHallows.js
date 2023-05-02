var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");
//Create Connection
var connectionDeathlyHallows = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/deathlyhallows").build();
//Connect to Methods that hub invokes aka recieve notification from hub
connectionDeathlyHallows.on("updateDeathlyHallowCount", (cloak, stone, wand) => {
    cloakSpan.innerHTML = cloak.toString();
    stoneSpan.innerHTML = stone.toString();
    wandSpan.innerHTML = wand.toString();
});


//invoke hub methods aka send notification to hub



//start connection
function fulfilled() {
    console.log("Deathly Hallows Hub Successfull!");
    newWindowLoadedOnClient();
}
function rejected() {
    console.log("User Hub Failed!")
}
connectionDeathlyHallows.start().then(fulfilled, rejected);