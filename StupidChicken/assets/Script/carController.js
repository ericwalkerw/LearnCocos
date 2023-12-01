
const u = require("utilities");
cc.Class({
  extends: cc.Component,
  properties: {
    mTrafficLight: cc.Node,
    target: 370,
  },
  update(dt) {
    const trafficLight = u.getS(this.mTrafficLight, "LightController");
    if (trafficLight.canMove && this.node.opacity != 0) {
      this.move(dt);
    }
  },
  move(speed){
    this.node.y += u.moveToTarget(this.node.y, this.target, speed); 
    this.node.scale = u.reduceScaleByS(this.node.y, this.target);
    this.node.opacity -= 0.5;
  }
});
