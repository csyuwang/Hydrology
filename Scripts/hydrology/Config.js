var Config = {
    'Properties': {},
    'Canvas': {},
    'Project':{},
    'View':{}
};

Config.Project.String = {
    'title': 'Project',
    'project':'Project'
};

Config.Properties.String = {
    'title': 'Properties',
    'isImportMap': 'IsImportMap',
    "propertyType": 'Property',
    'layer': 'Layer',
    'zone': 'Zone',
    'add': 'Add',
    'remove': 'Remove',
    'delete': 'Delete',
    'save': 'Save'
};
Config.Properties.StringArray = {
    'propertyOptions': ['请选择', 'Conductivity', 'Dispersion', 'Bluk_Density', 'Initial_Head', 'Storage', 'Spac_Params', 'Initial_Concentration'],
    'layerOptions': ['请选择'],
    'tableHeaders': ['', 'Name', 'Color', 'Parameter']
};

Config.Canvas.Style ={
    'width' : window.innerHeight - 64,
    'height' : window.innerHeight - 64,
    'backgroundColor' : '#CBCBCA',
    'top': '0px',
    'left': (window.innerWidth / 3 - (window.innerHeight - 64) / 2) + 'px'
};

Config.View.String ={
    'title': 'View',
    'viewColumn' : 'viewColumn',
    'viewRow' : 'viewRow',
    'viewLayer': 'viewLayer',
    'previous': 'previous',
    'next': 'next'
};