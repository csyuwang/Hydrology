// 侧边栏物性输入
Sidebar.Properties = function (editor) {
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    // 设置标题
    container.addStatic(new EditorUI.Text('Properties'));
    container.add(new EditorUI.Break());
    // 设置导图checkbox
    var isImportCheckBoxWrapper = EditorUIFactory.createCheckBoxWrapper('isImportMap', isImportMap);
    container.add(isImportCheckBoxWrapper);

    var title, options;
    // 设置物性选择框
    title = 'property';
    options = ['请选择', 'Conductivity', 'Dispersion', 'Bluk_Density', 'Initial_Head', 'Storage', 'Spac_Params', 'Initial_Concentration'];
    var propertySelectWrapper = EditorUIFactory.createSelectWrapper(title, options, updateProperty);
    container.add(propertySelectWrapper);
    // 设置层选择框
    title = 'layer';
    options = ['请选择', '1', '2', '3', '4', '5', '6', '7', '8'];
    var layerSelectWrapper = EditorUIFactory.createSelectWrapper(title, options, updateLayer);
    container.add(layerSelectWrapper);


    // 是否导图
    function isImportMap() {
        alert(isImportCheckBoxWrapper.checkBox.getValue());
    }

    // 切换物性
    function updateProperty() {
        alert(propertySelectWrapper.select.getValue());
    }

    // 切换层
    function updateLayer() {
        alert(layerSelectWrapper.select.getValue());
    }

    return container;
};

