//Create Connection
var connectionUserCont = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount", signalR.HttpTransportType.webSockets).build();
//Connect to Methods that hub invokes aka recieve notification from hub
connectionUserCont.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerHTML = value.toString();
})
connectionUserCont.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerHTML = value.toString();
})
//invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCont.invoke("NewWindowLoaded").then((value) => {
        console.log(value);
    });
}
//start connection
function fulfilled() {
    console.log("User Hub Successfull!");
    newWindowLoadedOnClient();
}
function rejected() {
    console.log("User Hub Failed!")
}
connectionUserCont.start().then(fulfilled, rejected);