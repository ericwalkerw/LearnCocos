// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { randomWords } = require("randomText");

cc.Class({
  extends: cc.Component,

  properties: {
    cooldownText: cc.Label,
    progress: cc.Label,
    textRender: cc.Label,
    textInput: cc.EditBox,
    timer: cc.Sprite,
    _cooldown: {
      default: 5,
      serialized: true,
    },
    _index: 0,
    _countChar: 0,

    wpmLB: cc.Label,
    correctLB: cc.Label,
    lengthLB: cc.Label,
    wrongLB: cc.Label,
    accuracyLB: cc.Label,

    _wpm: 0,
    _correct: 0,
    _lengthText: 0,
    _wrong: 0,
    _accuracy: 0,

    isDone: false,
    _words:[],
    paragraph:"x",
    isStart:false,
  },

  start() {
    this.generateWords();
  },

  generateWords() {
    randomWords(40, (value) => {
        this._words = (JSON.parse(value)).join(" ");
        this.textRender.string = this._words;
    });
  },

  update(dt) {
    if (this._cooldown >= -1 && this.isStart) {
      this._cooldown -= dt;
      this.updateTimerDisplay(dt);
      this.updateTimerColor();
    } else if(this._cooldown <= 0) {
      this.isDone = true;
      this.resultDisplay();
    }
    this.textInput.focus();
  },
  updateTimerDisplay(dt) {
    this.timer.fillRange += dt / 60;
    this.cooldownText.string = Math.ceil(this._cooldown).toString();
  },

  updateTimerColor() {
    if (this._cooldown >= (80 * 60) / 100) {
      this.timer.node.color = cc.color(0, 255, 0, 255);
    } else if (this._cooldown >= (60 * 60) / 100) {
      this.timer.node.color = cc.color(255, 255, 0, 255);
    } else if (this._cooldown <= (20 * 60) / 100) {
      this.timer.node.color = cc.color(255, 0, 0, 255);
    }
  },

  onKeyDown() {
    this.isStart = true;
    const inputText = this.textInput.string.split("");
    const inputWords = this.textInput.string.toLowerCase().split(" ");
    const textRenderWords = this.textRender.string.toLowerCase().split(" ");
    if (inputText[inputText.length - 1] == " ") {
      if (textRenderWords[this._index] == inputWords[0]) {
        this._correct++;
      } else {
        this._wrong++;
      }
      this.progress.string = textRenderWords[this._index + 1];
      this._index++;
      this._lengthText++;
      this.textInput.string = "";
      this.textInput.blur();
      this.textInput.focus();
    }
  },
  resultDisplay() {
    this._accuracy = Math.ceil((this._correct / this._lengthText) * 100);
    this._wpm = Math.ceil(this._correct);
    this.correctLB.string = `Correct words: ${this._correct}`;
    this.wpmLB.string = `${this._wpm} WPM`;
    this.wrongLB.string = `Wrong words: ${this._wrong}`;
    this.accuracyLB.string = `Accuracy: ${this._accuracy} %`;
    this.lengthLB.string = `Keystrokes: ${this._lengthText}`;
  },
});
