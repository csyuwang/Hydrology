var GridHelper = function () {
    this.xCoordinates = [];
    this.yCoordinates = [];
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.X_MIN = 0;
    this.Y_MIN = 0;
    this.Z_MIN = 0;
    this.X_MAX = 0;
    this.Y_MAX = 0;
    this.Z_MAX = 0;
    this.layerCount = 0;
    this.rowCount = 0;
    this.columnCount = 0;
};

// Tools
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

GridHelper.prototype.grid2CanvasScaleZ = function (z) {
    return z * this.canvasHeight / this.Z_MAX;
}

GridHelper.prototype.canvas2GridScaleZ = function (z) {
    return z * this.Z_MAX / this.canvasHeight ;
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


// Canvas
// 画XY方向网格线
GridHelper.prototype.drawXYGrid = function (canvas) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw x
    $.each(this.xCoordinates, function (index,gridX) {
        var x = this.grid2CanvasScaleX(gridX);
        ctx.moveTo(x , 0);
        ctx.lineTo(x , this.canvasHeight);
    }.bind(this));
    // draw y
    $.each(this.yCoordinates, function (index,gridY) {
        var y = this.grid2CanvasScaleY(gridY);
        ctx.moveTo(0, y);
        ctx.lineTo(this.canvasWidth, y);
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
}

// 画XZ方向网格线
GridHelper.prototype.drawXZGrid = function (canvas) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw x
    $.each(this.xCoordinates, function (index,gridX) {
        var x = this.grid2CanvasScaleX(gridX);
        ctx.moveTo(x , 0);
        ctx.lineTo(x , this.canvasHeight);
    }.bind(this));
    // draw z
    $.each(this.zCoordinates, function (index,gridZ) {
        var z = this.grid2CanvasScaleZ(gridZ);
        ctx.moveTo(0, z);
        ctx.lineTo(this.canvasWidth, z);
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
}

// 画YZ方向网格线
GridHelper.prototype.drawYZGrid = function (canvas) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw y
    $.each(this.yCoordinates, function (index,gridY) {
        var y = this.grid2CanvasScaleY(gridY);
        ctx.moveTo(y , 0);
        ctx.lineTo(y , this.canvasHeight);
    }.bind(this));
    // draw z
    $.each(this.zCoordinates, function (index,gridZ) {
        var z = this.grid2CanvasScaleZ(gridZ);
        ctx.moveTo(0, z);
        ctx.lineTo(this.canvasWidth, z);
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
}

// 填充块
GridHelper.prototype.drawBlocks = function (canvas,blocks) {
    var ctx = canvas.getContext();
    // 在网格下画块
    ctx.globalCompositeOperation = 'destination-over';
    $.each(blocks, function (index,block) {
        if (block.color != "none" && block.color != undefined) {
            ctx.fillStyle = block.color;
            ctx.fillRect(this.grid2CanvasScaleX(block.x),this.grid2CanvasScaleY(block.y), this.grid2CanvasScaleX(block.width), this.grid2CanvasScaleY(block.height));
        }
    }.bind(this));
}

// 清空网格内容
GridHelper.prototype.clearGrid = function (canvas) {
    var ctx = canvas.getContext();
    ctx.clearRect(0, 0, canvas.getOffsetWidth(), canvas.getOffsetHeight());
}



