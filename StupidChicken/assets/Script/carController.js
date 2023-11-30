// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
      this.node.y += u.moveToTarget(this.node.y, this.target, dt); 
      this.node.scale = u.reduceScaleByS(this.node.y, this.target);
      this.node.opacity -= 0.5;
    }
  },
});
