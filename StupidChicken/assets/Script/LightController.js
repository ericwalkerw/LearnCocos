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
        mLights : [cc.Node],
        _index: 0,
        _isBlink : false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.schedule(()=>{
            this.blinkLight();
            this._index++;
        },3,2,1);
    },
    blinkLight(){
        this._isBlink = true;
        const index = this._index;
        this.schedule(()=>{
            this._isBlink = !this._isBlink;
            if(this._isBlink){
                this.lightOn(index);
            } else {
                this.lightOff(index);
            }
        },0.2,6,1);
    },

    lightOn(index){this.mLights[index].opacity = 255;},
    lightOff(index){this.mLights[index].opacity = 0;},
    // update (dt) {},
});
