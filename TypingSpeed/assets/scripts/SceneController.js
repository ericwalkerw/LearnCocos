
cc.Class({
    extends: cc.Component,

    properties: {
        mMenu:cc.Node,
        mGame:cc.Node,
        mResult:cc.Node,
        mGameManager:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    update(dt){
        const showResult = this.mGameManager.getComponent('GameManager');
        if(showResult.isDone){
            this.mResult.active = true;
            this.mGame.active = false;
        }
        else {
            this.mResult.active = false;
        }
    },

    onEnter(){
        this.mMenu.active = false;
        this.mGame.active = true;
    }
});
