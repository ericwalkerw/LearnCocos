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
    UserNameInput: cc.EditBox,
    UserAvatar: cc.Sprite,
    sUserName: cc.Label,
    sAvatar: cc.Sprite,
  },
  start() {},
  onInputText() {
    cc.log();
  },
  onSuccessRegis() {
    this.sUserName.string = this.UserNameInput.string;
    this.sAvatar.spriteFrame = this.UserAvatar.spriteFrame;
  },
});
