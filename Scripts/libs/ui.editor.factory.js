var EditorUIFactory = {};
EditorUIFactory.createSelectWrapper = function (title, options, callback) {
    var wrapper = new EditorUI.Panel();
    var select = new EditorUI.Select().setOptions(options).setWidth('150px').setColor('#444').setFontSize('12px').onChange(callback);
    wrapper.add(new EditorUI.Text(title).setWidth('90px'));
    wrapper.add(select);
    return wrapper;
};

EditorUIFactory.createCheckBoxWrapper = function (title, callback) {
    var wrapper = new EditorUI.Panel();
    var checkBox = new EditorUI.Checkbox().onChange(callback);
    wrapper.add(checkBox);
    wrapper.add(new EditorUI.Text(title).setWidth('90px'));
    return wrapper;
};