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
        mTrafficLight : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    update (dt) {
        const trafficLight = this.mTrafficLight.getComponent('LightController');
        if(trafficLight.canMove){
            this._cooldownTimer += dt;
            if(this.node.opacity >= 0){
                if(this._cooldownTimer <= 7){
                    this.node.y += dt*50;
                    this.node.scale -= dt/8;
                }
                if(this._cooldownTimer >= 6)
                    this.node.opacity-=3;;
            }
        }
    },
});
