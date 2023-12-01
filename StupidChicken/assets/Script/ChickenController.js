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
    _cooldownTimer: 0,
    target:490,
    mTrafficLight: cc.Node,
    anim: cc.Animation,
    sound: cc.AudioSource,
  },

  update(dt) {
    const trafficLight = u.getS(this.mTrafficLight, "LightController");
    if (trafficLight.canMove) {
      this._cooldownTimer += dt;
      this.move(dt);
    }
  },
  move(dt){
    if (this._cooldownTimer <= 0.05) {this.anim.play("Walk");}
    this.node.x += u.moveToTarget(this.node.x, this.target, dt);
  },
  die(){
    this.anim.stop();
    this.sound.play();
  }
});
