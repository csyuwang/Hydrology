// 侧边栏输入
Sidebar.Input = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;
    var string = Config.Input.String;

    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    container.add(new EditorUI.Break());
    // 按钮组
    container.add(new EditorUI.Button(string.grid).onClick(gridOnClick));
    container.add(new EditorUI.Button(string.wells).onClick(wellsOnClick));
    container.add(new EditorUI.Button(string.properties).onClick(propertiesOnClick));
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Break());
    container.add(new EditorUI.Button(string.boundaries).onClick(boundariesOnClick));
    container.add(new EditorUI.Button(string.particles).onClick(particlesOnClick));


    function gridOnClick() {
        status.inputType = SystemStatus.InputType.GRID;
        signals.inputTypeChanged.dispatch(status.inputType);
    }

    function wellsOnClick() {
        status.inputType = SystemStatus.InputType.WELLS;
        signals.inputTypeChanged.dispatch(status.inputType);
    }
    function propertiesOnClick() {
        status.inputType = SystemStatus.InputType.PROPERTIES;
        signals.inputTypeChanged.dispatch(status.inputType);
    }
    function boundariesOnClick() {
        status.inputType = SystemStatus.InputType.BOUNDARIES;
        signals.inputTypeChanged.dispatch(status.inputType);
    }
    function particlesOnClick() {
        status.inputType = SystemStatus.InputType.PARICLES;
        signals.inputTypeChanged.dispatch(status.inputType);
    }


    return container;
};

