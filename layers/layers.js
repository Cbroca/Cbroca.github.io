var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_INPYucatn_1 = new ol.format.GeoJSON();
var features_INPYucatn_1 = format_INPYucatn_1.readFeatures(json_INPYucatn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INPYucatn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INPYucatn_1.addFeatures(features_INPYucatn_1);
var lyr_INPYucatn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INPYucatn_1, 
                style: style_INPYucatn_1,
                popuplayertitle: 'INP Yucatán',
                interactive: true,
    title: 'INP Yucatán<br />\
    <img src="styles/legend/INPYucatn_1_0.png" /> 0.364 - 0.478<br />\
    <img src="styles/legend/INPYucatn_1_1.png" /> 0.478 - 0.532<br />\
    <img src="styles/legend/INPYucatn_1_2.png" /> 0.532 - 0.554<br />\
    <img src="styles/legend/INPYucatn_1_3.png" /> 0.554 - 0.585<br />\
    <img src="styles/legend/INPYucatn_1_4.png" /> 0.585 - 0.628<br />\
    <img src="styles/legend/INPYucatn_1_5.png" /> 0.628 - 0.679<br />\
    <img src="styles/legend/INPYucatn_1_6.png" /> 0.679 - 0.895<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_INPYucatn_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_INPYucatn_1];
lyr_INPYucatn_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'area': 'area', 'inp': 'inp', });
lyr_INPYucatn_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'Hidden', 'inp': 'TextEdit', });
lyr_INPYucatn_1.set('fieldLabels', {'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'inp': 'no label', });
lyr_INPYucatn_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});