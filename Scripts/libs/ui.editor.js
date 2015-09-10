var EditorUI = {};

// Element
EditorUI.Element = function () {
    UI.Element.call(this);
};
EditorUI.Element.prototype = Object.create(UI.Element.prototype);

// Panel
EditorUI.Panel = function () {
    UI.Panel.call(this);
};
EditorUI.Panel.prototype = Object.create(UI.Panel.prototype);

// CollapsiblePanel
EditorUI.CollapsiblePanel = function () {
    UI.CollapsiblePanel.call(this);
};
EditorUI.CollapsiblePanel.prototype = Object.create(UI.CollapsiblePanel.prototype);

// Text
EditorUI.Text = function (text) {
    UI.Text.call(this, text);
};
EditorUI.Text.prototype = Object.create(UI.Text.prototype);

// Input
EditorUI.Input = function () {
    UI.Input.call(this);
};
EditorUI.Input.prototype = Object.create(UI.Input.prototype);

// TextArea
EditorUI.TextArea = function () {
    UI.TextArea.call(this);
};
EditorUI.TextArea.prototype = Object.create(UI.TextArea.prototype);

// Select
EditorUI.Select = function () {
    UI.Select.call(this);
};
EditorUI.Select.prototype = Object.create(UI.Select.prototype);

// FancySelect
EditorUI.FancySelect = function () {
    UI.FancySelect.call(this);
};
EditorUI.FancySelect.prototype = Object.create(UI.FancySelect.prototype);

// Checkbox
EditorUI.Checkbox = function (boolean) {
    UI.Checkbox.call(this, boolean);
};
EditorUI.Checkbox.prototype = Object.create(UI.Checkbox.prototype);

// Color
EditorUI.Color = function () {
    UI.Color.call(this);
};
EditorUI.Color.prototype = Object.create(UI.Color.prototype);

// Number
EditorUI.Number = function (number) {
    UI.Number.call(this, number);
};
EditorUI.Number.prototype = Object.create(UI.Number.prototype);

// Integer
EditorUI.Integer = function (number) {
    UI.Integer.call(this, number);
};
EditorUI.Integer.prototype = Object.create(UI.Integer.prototype);

// Break
EditorUI.Break = function () {
    UI.Break.call(this);
};
EditorUI.Break.prototype = Object.create(UI.Break.prototype);

// HorizontalRule
EditorUI.HorizontalRule = function () {
    UI.HorizontalRule.call(this);
};
EditorUI.HorizontalRule.prototype = Object.create(UI.HorizontalRule.prototype);

// Button
EditorUI.Button = function (value) {
    UI.Button.call(this, value);
    this.dom.className = 'btn btn-primary';
};
EditorUI.Button.prototype = Object.create(UI.Button.prototype);


// Table
EditorUI.Table = function (titles) {
    EditorUI.Element.call(this);
    // table
    var dom = document.createElement('table');
    dom.className = 'table table-bordered table-hover';
    // head
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    $.each(titles, function (index, title) {
        var th = document.createElement('th');
        th.appendChild(new EditorUI.Text(title).dom);
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    // body
    var tbody = document.createElement('tbody');
    dom.appendChild(thead);
    dom.appendChild(tbody);

    this.dom = dom;
    this.body = tbody;
    return this;
};
EditorUI.Table.prototype = Object.create(EditorUI.Element.prototype);

EditorUI.Table.prototype.addRow = function (UIElements) {
    var tr = document.createElement('tr');
    $.each(UIElements, function (index, element) {
        var td = document.createElement('td');
        td.appendChild(element.dom);
        tr.appendChild(td);
    });
    this.body.appendChild(tr);
};



EditorUI.Canvas = function (width,height) {
    EditorUI.Element.call(this);
    var dom = document.createElement('canvas');
    dom.width = width;
    dom.height = height;
    this.dom = dom;
    return this;
};

EditorUI.Canvas.prototype = Object.create(EditorUI.Element.prototype);

EditorUI.Canvas.prototype.setBackgroudColor = function (color) {
    this.dom.style.backgroundColor = color;
};

EditorUI.Canvas.prototype.setPositon = function (top,left) {
    this.dom.style.position = 'absolute';
    this.dom.style.top = top;
    this.dom.style.left = left;
};

EditorUI.Canvas.prototype.setSize = function (width,height) {
    this.dom.width = width;
    this.dom.height = height;
};





