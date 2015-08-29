// 侧边栏物性输入
Sidebar.Properties = function (editor) {
    var string = Config.Properties.String;
    var stringArray = Config.Properties.StringArray;
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    // 设置标题
    container.addStatic(new EditorUI.Text(string.title));
    container.add(new EditorUI.Break());
    // 设置导图checkbox
    var isImportCheckBoxWrapper = EditorUIFactory.createCheckBoxWrapper(string.isImportMap, isImportMap);
    container.add(isImportCheckBoxWrapper);
    // 设置物性选择框
    var propertySelectWrapper = EditorUIFactory.createSelectWrapper(string.property, stringArray.propertyOptions, updateProperty);
    container.add(propertySelectWrapper);
    // 设置层选择框
    var layerSelectWrapper = EditorUIFactory.createSelectWrapper(string.layer, stringArray.layerOptions, updateLayer);
    container.add(layerSelectWrapper);
    // 设置zone表格
    var table = new EditorUI.Table(stringArray.tableHeaders);
    container.add(table);
    //table.addRow([new EditorUI.Checkbox(),new EditorUI.Text('a'),new EditorUI.Text('b'),new EditorUI.Text('c')]);

    // 是否导图
    function isImportMap() {
        alert(this.getValue());
    }

    // 切换物性
    function updateProperty() {
        alert(this.getValue());
    }

    // 切换层
    function updateLayer() {
        alert(this.getValue());
    }

    return container;
};

