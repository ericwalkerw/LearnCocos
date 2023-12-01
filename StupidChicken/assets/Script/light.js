
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
