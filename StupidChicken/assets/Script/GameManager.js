const collider = require('Colider');
const u = require('utilities');
cc.Class({
    extends: cc.Component,
    properties: {
      car: cc.Node,
      chicken: cc.Node,
      isDone : false,
    },
    update(dt){
        const carCollider = new collider(this.car);
        const chickenCollider = new collider(this.chicken);
        if(u.checkCollision(carCollider, chickenCollider) && !this.isDone){
            u.getS(this.chicken,'ChickenController').die();
            this.isDone = true;
        }
        if(this.isDone){
            this.chicken.angle += 4;
            this.chicken.position = cc.v2(this.chicken.x + 3,this.chicken.y + 3,0);
        }
    },
  });
  