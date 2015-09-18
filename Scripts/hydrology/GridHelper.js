var GridHelper = function () {

};
GridHelper.prototype.gridX2canvasX = function (gridX,gridX_MAX,canvasWidth) {
    return gridX * canvasWidth / gridX_MAX;
}

GridHelper.prototype.gridY2canvasY = function (gridY,gridY_MAX,canvasHeight) {
    return gridY * canvasHeight / gridY_MAX;
}

