// 侧边栏视图
Sidebar.View = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;

    var string = Config.View.String;


    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    container.add(new EditorUI.Break());
    // 按钮组
    container.add(new EditorUI.Button(string.viewColumn).onClick(viewColumn));
    container.add(new EditorUI.Button(string.viewRow).onClick(viewRow));
    container.add(new EditorUI.Button(string.viewLayer).onClick(viewLayer));
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Button(string.previous).onClick(previous));
    container.add(new EditorUI.Button(string.next).onClick(next));

    function viewLayer() {
        //status.layer = 1;
        status.viewType = SystemStatus.ViewType.LAYER;
        //signals.viewLayer.dispatch();
        //signals.layerChanged.dispatch(status.layer);
    }

    function viewRow() {
        //status.row = 1;
        status.viewType = SystemStatus.ViewType.ROW;
        //signals.viewRow.dispatch();
        //signals.rowChanged.dispatch(status.column);
    }

    function viewColumn() {
        //status.column = 1;
        status.viewType = SystemStatus.ViewType.Column;
        //signals.viewColumn.dispatch();
        //signals.columnChanged.dispatch(status.row);
    }

    function nextLayer() {
        status.layer += 1;
        if(status.layer == editor.gridHelper.layerCount + 1){
            status.layer = 1;
        }
        signals.layerChanged.dispatch(status.layer);
    }

    function nextRow() {
        status.row += 1;
        if(status.row == editor.gridHelper.rowCount + 1){
            status.row = 1;
        }
        signals.rowChanged.dispatch(status.row);
    }

    function nextColumn() {
        status.column += 1;
        if(status.column == editor.gridHelper.columnCount + 1){
            status.column = 1;
        }
        signals.columnChanged.dispatch(status.column);
    }

    function previousLayer() {
        status.layer -= 1;
        if(status.layer == 0){
            status.layer = editor.gridHelper.layerCount;
        }
        signals.layerChanged.dispatch(status.layer);
    }

    function previousRow() {
        status.row -= 1;
        if(status.row == 0){
            status.row = editor.gridHelper.rowCount;
        }
        signals.rowChanged.dispatch(status.row);
    }

    function previousColumn() {
        status.column -= 1;
        if(status.column == 0){
            status.column = editor.gridHelper.columnCount;
        }
        signals.columnChanged.dispatch(status.column);
    }

    function previous() {
        if(status.viewType == SystemStatus.ViewType.LAYER) {
            previousLayer();
        }
        else if(status.viewType == SystemStatus.ViewType.ROW){
            previousRow();
        }
        else if(status.viewType == SystemStatus.ViewType.Column){
            previousColumn();
        }
    }

    function next() {
        if(status.viewType == SystemStatus.ViewType.LAYER) {
            nextLayer();
        }
        else if(status.viewType == SystemStatus.ViewType.ROW){
            nextRow();
        }
        else if(status.viewType == SystemStatus.ViewType.Column){
            nextColumn();
        }

    }

    return container;
};

