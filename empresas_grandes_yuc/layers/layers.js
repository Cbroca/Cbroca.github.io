var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_estado_yuc_web_1 = new ol.format.GeoJSON();
var features_estado_yuc_web_1 = format_estado_yuc_web_1.readFeatures(json_estado_yuc_web_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estado_yuc_web_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estado_yuc_web_1.addFeatures(features_estado_yuc_web_1);
var lyr_estado_yuc_web_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estado_yuc_web_1, 
                style: style_estado_yuc_web_1,
                popuplayertitle: 'estado_yuc_web',
                interactive: true,
                title: '<img src="styles/legend/estado_yuc_web_1.png" /> estado_yuc_web'
            });
var format_EmpresasGrandesdeYucatn_2 = new ol.format.GeoJSON();
var features_EmpresasGrandesdeYucatn_2 = format_EmpresasGrandesdeYucatn_2.readFeatures(json_EmpresasGrandesdeYucatn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpresasGrandesdeYucatn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpresasGrandesdeYucatn_2.addFeatures(features_EmpresasGrandesdeYucatn_2);
cluster_EmpresasGrandesdeYucatn_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EmpresasGrandesdeYucatn_2
});
var lyr_EmpresasGrandesdeYucatn_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EmpresasGrandesdeYucatn_2, 
                style: style_EmpresasGrandesdeYucatn_2,
                popuplayertitle: 'Empresas Grandes de Yucatán',
                interactive: true,
                title: '<img src="styles/legend/EmpresasGrandesdeYucatn_2.png" /> Empresas Grandes de Yucatán'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_estado_yuc_web_1.setVisible(true);lyr_EmpresasGrandesdeYucatn_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_estado_yuc_web_1,lyr_EmpresasGrandesdeYucatn_2];
lyr_estado_yuc_web_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', 'Empresas Grandes de Yucatán_nom_estab': 'Nombre', 'Empresas Grandes de Yucatán_raz_social': 'Razon Social', 'Empresas Grandes de Yucatán_nombre_act': 'Nombre de Actividad', 'Empresas Grandes de Yucatán_municipio': 'Municipio', 'Empresas Grandes de Yucatán_pyme': 'Empresas Grandes de Yucatán_pyme', 'Empresas Grandes de Yucatán_sector': 'Sector', 'Empresas Grandes de Yucatán_tipo': 'Tipo', 'Empresas Grandes de Yucatán_region': 'Región', });
lyr_EmpresasGrandesdeYucatn_2.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'Nombre', 'raz_social': 'Razon Social', 'codigo_act': 'codigo_act', 'nombre_act': 'Nombre de Actividad', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'Municipio perteneciente', 'cve_mun': 'cve_mun', 'municipio': 'Municipio', 'cve_loc': 'cve_loc', 'localidad': 'Localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', 'pyme': 'pyme', 'sector': 'Sector', 'tipo': 'Tipo', 'region': 'Región', });
lyr_estado_yuc_web_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'NOMGEO': 'Hidden', 'Empresas Grandes de Yucatán_nom_estab': 'Hidden', 'Empresas Grandes de Yucatán_raz_social': 'Hidden', 'Empresas Grandes de Yucatán_nombre_act': 'Hidden', 'Empresas Grandes de Yucatán_municipio': 'Hidden', 'Empresas Grandes de Yucatán_pyme': 'Hidden', 'Empresas Grandes de Yucatán_sector': 'Hidden', 'Empresas Grandes de Yucatán_tipo': 'Hidden', 'Empresas Grandes de Yucatán_region': 'Hidden', });
lyr_EmpresasGrandesdeYucatn_2.set('fieldImages', {'id': 'Hidden', 'clee': 'Hidden', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'Hidden', 'nombre_act': 'TextEdit', 'per_ocu': 'Hidden', 'tipo_vial': 'Hidden', 'nom_vial': 'Hidden', 'tipo_v_e_1': 'Hidden', 'nom_v_e_1': 'Hidden', 'tipo_v_e_2': 'Hidden', 'nom_v_e_2': 'Hidden', 'tipo_v_e_3': 'Hidden', 'nom_v_e_3': 'Hidden', 'numero_ext': 'Hidden', 'letra_ext': 'Hidden', 'edificio': 'Hidden', 'edificio_e': 'Hidden', 'numero_int': 'Hidden', 'letra_int': 'Hidden', 'tipo_asent': 'Hidden', 'nomb_asent': 'Hidden', 'tipoCenCom': 'Hidden', 'nom_CenCom': 'Hidden', 'num_local': 'Hidden', 'cod_postal': 'Hidden', 'cve_ent': 'Hidden', 'entidad': 'Hidden', 'cve_mun': 'Hidden', 'municipio': 'TextEdit', 'cve_loc': 'Hidden', 'localidad': 'TextEdit', 'ageb': 'Hidden', 'manzana': 'Hidden', 'telefono': 'Hidden', 'correoelec': 'Hidden', 'www': 'Hidden', 'tipoUniEco': 'Hidden', 'latitud': 'Hidden', 'longitud': 'Hidden', 'fecha_alta': 'Hidden', 'pyme': 'Hidden', 'sector': 'Range', 'tipo': 'Hidden', 'region': 'Range', });
lyr_estado_yuc_web_1.set('fieldLabels', {});
lyr_EmpresasGrandesdeYucatn_2.set('fieldLabels', {'nom_estab': 'inline label - always visible', 'raz_social': 'inline label - always visible', 'nombre_act': 'inline label - always visible', 'municipio': 'inline label - always visible', 'localidad': 'inline label - always visible', 'sector': 'inline label - always visible', 'region': 'inline label - always visible', });
lyr_EmpresasGrandesdeYucatn_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});