var GridHelper = function () {
    this.xCoordinates = [];
    this.yCoordinates = [];
    this.X_MAX = 0;
    this.Y_MAX = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
};
GridHelper.prototype.grid2CanvasScaleX = function (x) {
    return x * this.canvasWidth / this.X_MAX;
}

GridHelper.prototype.canvas2GridScaleX = function (x) {
    return x * this.X_MAX / this.canvasWidth ;
}

GridHelper.prototype.grid2CanvasScaleY = function (y) {
    return y * this.canvasHeight / this.Y_MAX;
}

GridHelper.prototype.canvas2GridScaleY = function (y) {
    return y * this.Y_MAX / this.canvasHeight ;
}

GridHelper.prototype.getNormalCoordinate = function (x, y) {
    var gx = 0;
    var gxIndex = 0;
    var gy = 0;
    var gyIndex = 0;
    var i;
    for (i = 0; i < this.xCoordinates.length; i++) {
        if (x >= this.xCoordinates[i] && x < this.xCoordinates[i + 1]) {
            gx = this.xCoordinates[i];
            gxIndex = i;
            break;
        }

    }
    for (i = 0; i < this.yCoordinates.length; i++) {
        if (y >= this.yCoordinates[i] && y < this.yCoordinates[i + 1]) {
            gy = this.yCoordinates[i];
            gyIndex = i;
            break;
        }

    }
    return gx + "|" + gxIndex + "|" + gy + "|" + gyIndex;
}

