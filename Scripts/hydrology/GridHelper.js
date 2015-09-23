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
    return parseInt(x * this.canvasWidth / this.X_MAX);
}

GridHelper.prototype.canvas2GridScaleX = function (x) {
    return x * this.X_MAX / this.canvasWidth ;
}

GridHelper.prototype.grid2CanvasScaleY = function (y) {
    return parseInt(y * this.canvasHeight / this.Y_MAX);
}

GridHelper.prototype.canvas2GridScaleY = function (y) {
    return y * this.Y_MAX / this.canvasHeight ;
}

GridHelper.prototype.grid2CanvasScaleZ = function (z) {
    return parseInt(z * this.canvasHeight / this.Z_MAX);
}

GridHelper.prototype.canvas2GridScaleZ = function (z) {
    return z * this.Z_MAX / this.canvasHeight ;
}

GridHelper.prototype.getNormalXCoordinate = function (x) {
    var normalX = 0;
    for (var i = 0; i < this.xCoordinates.length; i++) {
        if (x >= this.xCoordinates[i] && x < this.xCoordinates[i + 1]) {
            normalX = this.xCoordinates[i];
            break;
        }
    }
    return normalX;
}
GridHelper.prototype.getNormalYCoordinate = function (y) {
    var normalY = 0;
    for (var i = 0; i < this.yCoordinates.length; i++) {
        if (y >= this.yCoordinates[i] && y < this.yCoordinates[i + 1]) {
            normalY = this.yCoordinates[i];
            break;
        }
    }
    return normalY;
}


// Canvas
// 画XY方向网格线
GridHelper.prototype.drawXYGrid = function (canvas) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
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
    ctx.restore();
}

// 画XZ方向网格线
GridHelper.prototype.drawXZGrid = function (canvas,grids) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
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
    // z轴上边界
    ctx.moveTo(0 , 0);
    ctx.lineTo(this.canvasWidth , 0);
    // z轴下边界
    ctx.moveTo(0 , this.canvasHeight);
    ctx.lineTo(this.canvasWidth , this.canvasHeight);
    // 不均匀网格, 由leftX，rightX，topY，bottomY确定的4个点决定
    $.each(grids, function (index,grid) {
        var leftX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo]);
        var rightX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo+1]);
        var topY = this.grid2CanvasScaleZ(this.Z_MAX - grid.top);
        var bottomY = this.grid2CanvasScaleZ(this.Z_MAX - grid.bottom);
        //ctx.strokeRect(leftX,topY, rightX-leftX, bottomY-topY);
        ctx.moveTo(leftX, topY);
        ctx.lineTo(rightX, topY);
        ctx.moveTo(leftX, bottomY);
        ctx.lineTo(rightX, bottomY);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(leftX,topY, rightX-leftX, bottomY-topY);
        ctx.globalCompositeOperation = 'source-over';
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

// 画YZ方向网格线
GridHelper.prototype.drawYZGrid = function (canvas,grids) {

    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
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
    // z轴上边界
    ctx.moveTo(0 , 0);
    ctx.lineTo(this.canvasWidth , 0);
    // z轴下边界
    ctx.moveTo(0 , this.canvasHeight);
    ctx.lineTo(this.canvasWidth , this.canvasHeight);
    // 不均匀网格, 由leftX，rightX，topY，bottomY确定的4个点决定
    $.each(grids, function (index,grid) {
        var leftX = this.grid2CanvasScaleY(this.yCoordinates[grid.rowNo]);
        var rightX = this.grid2CanvasScaleY(this.yCoordinates[grid.rowNo+1]);
        var topY = this.grid2CanvasScaleZ(this.Z_MAX - grid.top);
        var bottomY = this.grid2CanvasScaleZ(this.Z_MAX - grid.bottom);
        //ctx.strokeRect(leftX,topY, rightX-leftX, bottomY-topY);
        ctx.moveTo(leftX, topY);
        ctx.lineTo(rightX, topY);
        ctx.moveTo(leftX, bottomY);
        ctx.lineTo(rightX, bottomY);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(leftX,topY, rightX-leftX, bottomY-topY);
        ctx.globalCompositeOperation = 'source-over';
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

// 填充块
GridHelper.prototype.drawBlocks = function (canvas,blocks) {
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
    // 在网格下画块
    ctx.globalCompositeOperation = 'destination-over';
    $.each(blocks, function (index,block) {
        if (block.color != "none" && block.color != undefined) {
            ctx.fillStyle = block.color;
            ctx.fillRect(this.grid2CanvasScaleX(block.x),this.grid2CanvasScaleY(block.y), this.grid2CanvasScaleX(block.width), this.grid2CanvasScaleY(block.height));
        }
    }.bind(this));
    ctx.restore();
}

// 清空网格内容
GridHelper.prototype.clearGrid = function (canvas) {
    var ctx = canvas.getContext();
    ctx.clearRect(0, 0, canvas.getOffsetWidth(), canvas.getOffsetHeight());
}



