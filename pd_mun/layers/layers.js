var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PoblacinDesocupadadeYucatn_1 = new ol.format.GeoJSON();
var features_PoblacinDesocupadadeYucatn_1 = format_PoblacinDesocupadadeYucatn_1.readFeatures(json_PoblacinDesocupadadeYucatn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinDesocupadadeYucatn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinDesocupadadeYucatn_1.addFeatures(features_PoblacinDesocupadadeYucatn_1);
var lyr_PoblacinDesocupadadeYucatn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinDesocupadadeYucatn_1, 
                style: style_PoblacinDesocupadadeYucatn_1,
                popuplayertitle: 'Población Desocupada de Yucatán',
                interactive: true,
    title: 'Población Desocupada de Yucatán<br />\
    <img src="styles/legend/PoblacinDesocupadadeYucatn_1_0.png" /> 1.66 - 5.53<br />\
    <img src="styles/legend/PoblacinDesocupadadeYucatn_1_1.png" /> 1.45 - 1.66<br />\
    <img src="styles/legend/PoblacinDesocupadadeYucatn_1_2.png" /> 1.32 - 1.45<br />\
    <img src="styles/legend/PoblacinDesocupadadeYucatn_1_3.png" /> 1.17 - 1.32<br />\
    <img src="styles/legend/PoblacinDesocupadadeYucatn_1_4.png" /> 0.17 - 1.17<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PoblacinDesocupadadeYucatn_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PoblacinDesocupadadeYucatn_1];
lyr_PoblacinDesocupadadeYucatn_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'Clave Municipio', 'NOMGEO': 'Municipio', 'poblacion desocupadaPD': 'Población Desocupada (%)', });
lyr_PoblacinDesocupadadeYucatn_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'poblacion desocupadaPD': 'TextEdit', });
lyr_PoblacinDesocupadadeYucatn_1.set('fieldLabels', {'CVE_MUN': 'inline label - always visible', 'NOMGEO': 'inline label - always visible', 'poblacion desocupadaPD': 'inline label - always visible', });
lyr_PoblacinDesocupadadeYucatn_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});