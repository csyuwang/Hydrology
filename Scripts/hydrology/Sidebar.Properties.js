// 侧边栏物性输入
Sidebar.Properties = function (editor) {
    var string = Config.Properties.String;
    var stringArray = Config.Properties.StringArray;
    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    // 设置导图checkbox
    this.isImportMapCheckBox = new EditorUI.Checkbox().onChange(isImportMap);
    container.add(this.isImportMapCheckBox);
    container.add(new EditorUI.Text(string.isImportMap));
    container.add(new EditorUI.Break());
    // 设置物性选择框
    this.propertySelect = new EditorUI.Select().setOptions(stringArray.propertyOptions).onChange(updateProperty);
    container.add(new EditorUI.Text(string.property));
    container.add(this.propertySelect);
    container.add(new EditorUI.Break());
    // 设置层选择框
    this.layerSelect = new EditorUI.Select().setOptions(stringArray.layerOptions).onChange(updateLayer);
    container.add(new EditorUI.Text(string.layer));
    container.add(this.layerSelect);
    container.add(new EditorUI.Break());
    // 设置zone表格
    container.add(new EditorUI.Text(string.zone));
    container.add(new EditorUI.Break());
    // 按钮组
    container.add(new EditorUI.Button(string.add).onClick(addZone));
    container.add(new EditorUI.Button(string.remove).onClick(removeZone));
    container.add(new EditorUI.Button(string.delete).onClick(deleteZone));
    container.add(new EditorUI.Button(string.save).onClick(saveZone));
    // 表格
    this.zoneTable = new EditorUI.Table(stringArray.tableHeaders);
    container.add(this.zoneTable);

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

    function addZone(){
        alert('add');
    }
    function removeZone(){
        alert('remove');
    }
    function deleteZone(){
        alert('delete');
    }
    function saveZone(){
        alert('save');
    }

    return container;
};

