
cc.Class({
    extends: cc.Component,

    properties: {
        imgAtlas:cc.SpriteAtlas,
        buttonNodes:cc.Node,
        avatar:cc.Sprite,
    },
    start() {
        cc.log('atlas', this.imgAtlas)
        for (let i = 0; i < this.buttonNodes.children.length; i++) {
            let buttonNode = this.buttonNodes.children[i];
            let imgNode = buttonNode.getComponent(cc.Button).target;
            imgNode.getComponent(cc.Sprite).spriteFrame = this.imgAtlas.getSpriteFrames()[i];
        }
    },
});
