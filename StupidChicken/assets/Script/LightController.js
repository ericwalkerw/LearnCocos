cc.Class({
    extends: cc.Component,
    properties: {
        mLights: [cc.Node],
        _cooldownTimer:0,
        timer: 4.5,
        _index:0,
        canMove:false,
    },
    update(dt){
        this._cooldownTimer+= dt;
        if(this._cooldownTimer >= this.timer && this._index < this.mLights.length){
            this.mLights[this._index].active = true ; 
            this._cooldownTimer = 0;
            this._index++;
        }
        if(this._index === 3) {
            this.mLights[2].opacity = 255 ; 
            this.canMove = true;
        }
    }
});
