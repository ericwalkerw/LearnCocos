// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _cooldownTimer : 0,
        mTrafficLight:cc.Node,
        anim:cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    update (dt) {
        const trafficLight = this.mTrafficLight.getComponent('LightController');
        if(trafficLight.canMove){
            if(this._cooldownTimer <= 0.1){
                this.anim.play("Walk");
            }
            if(this._cooldownTimer <= 4.5){
                this._cooldownTimer += dt;
                this.node.x += dt*50;
            }
            else if(this._cooldownTimer >= 4.5){
                this.anim.stop("Walk");
                this.node.angle -=4;
                this.node.x+=2;
                this.node.y+=2;
                this.node.color = cc.color(136,136,136,255);
            }
        }
    },
});
