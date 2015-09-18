// 侧边栏物性输入
Sidebar.View = function (editor) {

    var signals = editor.signals;

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


    function viewColumn() {

    }
    function viewRow() {

    }
    function viewLayer() {

    }
    function previous() {

    }
    function next() {

    }



    return container;
};

