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
    }
}

module.exports = u;