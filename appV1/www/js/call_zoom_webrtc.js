//joystick nipple initial config
var dynamic = {
  zone: document.getElementById("zone_joystick"),
  color: "white",
  multitouch: false,
  size: 100,
};
var semi = {
  zone: document.getElementById("zone_joystick"),
  mode: "semi",
  catchDistance: 150,
  color: "green",
};
var static = {
  zone: document.getElementById("zone_joystick"),
  mode: "static",
  position: {
    left: "10%",
    top: "80%",
  },
  color: "red",
};

//choose one of joystik mode
var options = dynamic;

document.addEventListener(
  "deviceready",
  () => {
    window.screen.orientation.lock("landscape");
    StatusBar.backgroundColorByHexString("#000000");
  },
  false
);

//fix the option you need

var joystick;

//create the Nipple
createNipple();
//get values from joystick events
function bindNipple() {
  joystick
    .on("move", function (evt, data) {
      debug(evt, data);
    })
    .on("pressure", function (evt, data) {
      debug(evt, data);
    });
}
//creates the nipple
function createNipple() {
  if (joystick) {
    joystick.destroy();
  }
  joystick = nipplejs.create(options);
  bindNipple();
}

// Print data  for debug 
function debug(evt, data) {
  setTimeout(function () {
    if (data.instance) {
      let coord = data.instance.frontPosition;
      console.log(
        "X axis:",
        map(coord.x, -50, 50, -1, 1),
        "Y axis:",
        map(-coord.y, -50, 50, -1, 1)
      );
      //axis reversing
    }
  }, 0);
}

//reversing axis
//mapping function  https://www.arduino.cc/reference/en/language/functions/math/map/
function map(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}


//takes value to display battery level
function setBatteryLevel(batteryLevel) {
  document.getElementById("pourcent").innerHTML = `${batteryLevel}%`;
  document.getElementById("batteryLevel").style.width = `${map(
    batteryLevel,
    0,
    100,
    0,
    8
  )}vh`;
}



setBatteryLevel(40);


//finish the call
function endCall() {
  window.location.assign("home.html");
}
