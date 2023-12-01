const u = {
    moveToTarget(start, target, speed){
        return (target - start) * speed;
    },
    reduceScaleByS(start, distance){
        const newScale = 1 - start / distance;
        return cc.v2(newScale, newScale);
    },
    getS(node, name){
        return node.getComponent(name);
    },
    checkCollision(collider1, collider2) {
        return (
          collider1.x < collider2.x + collider2.width/2 &&
          collider1.x + collider1.width/2 > collider2.x &&
          collider1.y < collider2.y + collider2.height/2 &&
          collider1.y + collider1.height/2 > collider2.y
        );
      },
}

module.exports = u;