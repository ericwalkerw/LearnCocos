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
        timer: 0,
        _isFirst:true,
        _count:0,
    },
    update (dt) {
        this._cooldownTimer += dt;
        this._isFirst ? this.timer = 0.8 : this.timer = 0.2;
        if(this._cooldownTimer >= this.timer && this._count < 6){
            this._isFirst = false;
            this.blinkLight(this.node);
            this._cooldownTimer = 0;
            this._count++;
        }
    },
    lightOn(node) {node.opacity = 255;},
    lightOff(node) {node.opacity = 0;},
    blinkLight(node) {
        this._isBlink = !this._isBlink;
        if (this._isBlink) {this.lightOn(node);} 
        else {this.lightOff(node);}
    },
});
