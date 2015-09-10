var Config = {
    'Properties': {},
    'Canvas': {}
};

Config.Properties.String = {
    'title': 'Properties',
    'isImportMap': 'IsImportMap',
    'property': 'Property',
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