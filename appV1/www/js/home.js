document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.screen.orientation.lock("portrait");

  StatusBar.backgroundColorByHexString("#00A19A");
}

function btnCall() {
  var zoomMeeting = document.getElementById("checkZoomMeeting");
  var isZoomMeeting = zoomMeeting.checked;
  if (isZoomMeeting) {
    window.location.assign("call_zoom_webrtc.html");
  } else {
    window.location.assign("call_webrtc.html");
  }
}

function btnSaveChanges() {
  btnSaveChanges();
}
