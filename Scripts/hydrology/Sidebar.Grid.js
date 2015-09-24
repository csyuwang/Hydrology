// 侧边栏的网格编辑
Sidebar.Grid = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;
    var gridHelper = editor.gridHelper;

    var string = Config.Grid.String;


    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setDisplay( 'none' );
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    container.add(new EditorUI.Break());
    // 按钮组
    container.add(new EditorUI.Button(string.addRowLine).onClick(addRowLine));
    container.add(new EditorUI.Button(string.deleteRowLine).onClick(deleteRowLine));
    container.add(new EditorUI.Button(string.addColumnLine).onClick(addColumnLine));
    container.add(new EditorUI.Button(string.deleteColumnLine).onClick(deleteColumnLine));
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Button(string.save).onClick(save));

    function addRowLine() {
        status.selectedDrawType = SystemStatus.DrawType.ADDROWLINE;
        signals.addRowLine.dispatch();
    }

    function deleteRowLine() {
        status.selectedDrawType = SystemStatus.DrawType.DELETEROWLINE;
        signals.deleteRowLine.dispatch();
    }

    function addColumnLine() {
        status.selectedDrawType = SystemStatus.DrawType.ADDCOLUMNLINE;
        signals.addColumnLine.dispatch();
    }
    function deleteColumnLine() {
        status.selectedDrawType = SystemStatus.DrawType.DELETECOLUMNLINE;
        signals.deleteColumnLine.dispatch();
    }

    function save() {

    }

    signals.inputTypeChanged.add(function (inputType) {
        container.setDisplay( 'none' );
        if(inputType == SystemStatus.InputType.GRID) {
            container.setDisplay( 'block' );
        }
    } );

    return container;
};

