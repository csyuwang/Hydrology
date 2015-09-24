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

// 横轴变换
GridHelper.prototype.grid2CanvasScaleX = function (gridX, gridX_max) {
    return parseInt(gridX * this.canvasWidth / gridX_max);
}
GridHelper.prototype.canvas2GridScaleX = function (canvasX, gridX_max) {
    return canvasX * gridX_max / this.canvasWidth ;
}

// 纵轴变换
GridHelper.prototype.grid2CanvasScaleY = function (gridY, gridY_max) {
    return parseInt((gridY_max - gridY) * this.canvasHeight / gridY_max);
}

GridHelper.prototype.canvas2GridScaleY = function (canvasY, gridY_max) {
    return (this.canvasHeight - canvasY) * gridY_max / this.canvasHeight ;
}

//
//GridHelper.prototype.grid2CanvasScaleX = function (x) {
//    return parseInt(x * this.canvasWidth / this.X_MAX);
//}
//
//GridHelper.prototype.canvas2GridScaleX = function (x) {
//    return x * this.X_MAX / this.canvasWidth ;
//}
//
//GridHelper.prototype.grid2CanvasScaleY = function (y) {
//    return parseInt(y * this.canvasHeight / this.Y_MAX);
//}
//
//GridHelper.prototype.canvas2GridScaleY = function (y) {
//    return y * this.Y_MAX / this.canvasHeight ;
//}
//
//GridHelper.prototype.grid2CanvasScaleZ = function (z) {
//    return parseInt(z * this.canvasHeight / this.Z_MAX);
//}
//
//GridHelper.prototype.canvas2GridScaleZ = function (z) {
//    return z * this.Z_MAX / this.canvasHeight ;
//}

// 网格坐标转为标准坐标（坐标所在网格的左下坐标）
GridHelper.prototype.getNormalXCoordinateIndex = function (x) {
    for (var i = 0; i < this.xCoordinates.length-1; i++) {
        if (x >= this.xCoordinates[i] && x < this.xCoordinates[i + 1]) {
            return i;
        }
    }
}
GridHelper.prototype.getNormalYCoordinateIndex = function (y) {
    for (var i = 0; i < this.yCoordinates.length-1; i++) {
        if (y >= this.yCoordinates[i] && y < this.yCoordinates[i + 1]) {
            return i;
        }
    }
}


// Canvas
// 画XY方向坐标线
GridHelper.prototype.drawXYCoordinateLines = function (canvas) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw x
    $.each(this.xCoordinates, function (index,gridX) {
        var x = this.grid2CanvasScaleX(gridX,this.X_MAX);
        ctx.moveTo(x , 0);
        ctx.lineTo(x , this.canvasHeight);
    }.bind(this));
    // draw y
    $.each(this.yCoordinates, function (index,gridY) {
        var y = this.grid2CanvasScaleY(gridY,this.Y_MAX);
        ctx.moveTo(0, y);
        ctx.lineTo(this.canvasWidth, y);
    }.bind(this));
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

// 画XY方向网格
GridHelper.prototype.drawXYGrids = function (canvas,grids) {
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
    // 在网格下画块
    ctx.globalCompositeOperation = 'destination-over';
    $.each(grids, function (index,grid) {
        if (grid.color != "none" && grid.color != undefined) {
            var leftX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo],this.X_MAX);
            var rightX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo+1],this.X_MAX);
            var bottomY = this.grid2CanvasScaleY(this.yCoordinates[grid.rowNo],this.Y_MAX);
            var topY = this.grid2CanvasScaleY(this.yCoordinates[grid.rowNo+1],this.Y_MAX);
            ctx.fillStyle = grid.color;
            ctx.fillRect(leftX,topY, rightX-leftX, bottomY-topY);
        }
    }.bind(this));
    ctx.restore();
}

// 画XZ方向网格
GridHelper.prototype.drawXZGrids = function (canvas,grids) {
    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw x
    $.each(this.xCoordinates, function (index,gridX) {
        var x = this.grid2CanvasScaleX(gridX,this.X_MAX);
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
        var leftX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo],this.X_MAX);
        var rightX = this.grid2CanvasScaleX(this.xCoordinates[grid.colNo+1],this.X_MAX);
        var topY = this.grid2CanvasScaleY(grid.top,this.Z_MAX);
        var bottomY = this.grid2CanvasScaleY(grid.bottom,this.Z_MAX);
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

// 画YZ方向网格
GridHelper.prototype.drawYZGrids = function (canvas,grids) {

    this.clearGrid(canvas);
    var ctx = canvas.getContext();
    ctx.save();
    ctx.translate(0.5,0.5);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    // draw y
    $.each(this.yCoordinates, function (index,gridY) {
        var y = this.grid2CanvasScaleX(gridY,this.Y_MAX);
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
        var leftX = this.grid2CanvasScaleX(this.yCoordinates[grid.rowNo],this.Y_MAX);
        var rightX = this.grid2CanvasScaleX(this.yCoordinates[grid.rowNo+1],this.Y_MAX);
        var topY = this.grid2CanvasScaleY(grid.top,this.Z_MAX);
        var bottomY = this.grid2CanvasScaleY(grid.bottom,this.Z_MAX);
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
// 清空网格内容
GridHelper.prototype.clearGrid = function (canvas) {
    var ctx = canvas.getContext();
    ctx.clearRect(0, 0, canvas.getOffsetWidth(), canvas.getOffsetHeight());
}

// 标记行
GridHelper.prototype.markRow = function (canvas,xIndex,yIndex,color) {
    var ctx = canvas.getContext();
    ctx.clearRect(0, 0, canvas.getOffsetWidth(), canvas.getOffsetHeight());
    ctx.globalAlpha = 0.4
    var bottomY = this.grid2CanvasScaleY(this.yCoordinates[yIndex],this.Y_MAX);
    var topY = this.grid2CanvasScaleY(this.yCoordinates[yIndex+1],this.Y_MAX);
    ctx.fillStyle = color;
    ctx.fillRect(0,topY, canvas.getOffsetWidth(), bottomY-topY);
}
// 标记列
GridHelper.prototype.markColumn = function (canvas,xIndex,yIndex,color) {
    var ctx = canvas.getContext();
    ctx.clearRect(0, 0, canvas.getOffsetWidth(), canvas.getOffsetHeight());
    ctx.globalAlpha = 0.4
    var leftX = this.grid2CanvasScaleX(this.xCoordinates[xIndex],this.X_MAX);
    var rightX = this.grid2CanvasScaleX(this.xCoordinates[xIndex+1],this.X_MAX);
    ctx.fillStyle = color;
    ctx.fillRect(leftX,0, rightX-leftX, canvas.getOffsetHeight());
}



