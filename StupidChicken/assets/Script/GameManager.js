const collider = require('Colider');
const u = require('utilities');
cc.Class({
    extends: cc.Component,
    properties: {
      car: cc.Node,
      chicken: cc.Node,
      isDone : false,
      mExplode: cc.Node,
      _coolDown:0,
      explodeAnim:cc.Animation,
      explodeSound:cc.AudioSource,
    },
    update(dt){
        const carCollider = new collider(this.car);
        const chickenCollider = new collider(this.chicken);
        if(u.checkCollision(carCollider, chickenCollider) && !this.isDone){
            u.getS(this.chicken,'ChickenController').die();
            this.isDone = true;
        }
        if(this.isDone){
            this._coolDown += dt;
            if(this._coolDown >= 1 && this._coolDown < 1.7){
                if(this._coolDown <= 1.1){
                    this.explodeSound.play();
                }
                this.mExplode.active = true;
                this.mExplode.position = this.chicken.position;
                this.chicken.active = false;
            }else if(this._coolDown >= 1.7){
                this.mExplode.active = false;
            }
            
            // this.explodeAnim.play('explode');
            this.chicken.angle += 4;
            this.chicken.position = cc.v2(this.chicken.x + 3,this.chicken.y + 3,0);
        }
    },
  });
  