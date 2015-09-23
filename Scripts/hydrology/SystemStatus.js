var SystemStatus = function () {
    this.row = 1;
    this.column = 1;
    this.layer = 1;
    this.viewType = 1;
    this.inputType = 0;
    this.projectId = 0;
};

// 视角类型
SystemStatus.ViewType = {};
SystemStatus.ViewType.LAYER = 1;
SystemStatus.ViewType.ROW = 2;
SystemStatus.ViewType.Column = 3;

// 输入类型
SystemStatus.InputType = {};
SystemStatus.InputType.GRID = 1;
SystemStatus.InputType.WELLS = 2;
SystemStatus.InputType.PROPERTIES = 3;
SystemStatus.InputType.BOUNDARIES = 4;
SystemStatus.InputType.PARICLES = 5;








