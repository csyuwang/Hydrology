var EditorUIFactory = {};
EditorUIFactory.createSelectWrapper = function (title, options, callback) {
    var selectWrapper = new EditorUI.Panel();
    var select = new EditorUI.Select().setOptions(options).setWidth('150px').setColor('#444').setFontSize('12px').onChange(callback);
    selectWrapper.select = select;

    selectWrapper.add(new EditorUI.Text(title).setWidth('90px'));
    selectWrapper.add(select);
    return selectWrapper;
};

EditorUIFactory.createCheckBoxWrapper = function (title, callback) {
    var checkBoxWrapper = new EditorUI.Panel();
    var checkBox = new EditorUI.Checkbox().onChange(callback);
    checkBoxWrapper.checkBox = checkBox;

    checkBoxWrapper.add(checkBox);
    checkBoxWrapper.add(new EditorUI.Text(title).setWidth('90px'));

    return checkBoxWrapper;
};