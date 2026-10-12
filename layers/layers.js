var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WARDSPERUMATTY_2 = new ol.format.GeoJSON();
var features_WARDSPERUMATTY_2 = format_WARDSPERUMATTY_2.readFeatures(json_WARDSPERUMATTY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDSPERUMATTY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDSPERUMATTY_2.addFeatures(features_WARDSPERUMATTY_2);
var lyr_WARDSPERUMATTY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDSPERUMATTY_2, 
                style: style_WARDSPERUMATTY_2,
                popuplayertitle: 'WARDS PERUMATTY',
                interactive: false,
    title: 'WARDS PERUMATTY<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_0.png" /> ALAYAR<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_1.png" /> ATHIMANI<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_2.png" /> KALYANAPETTA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_3.png" /> KAMBALATHARA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_4.png" /> MADAPPALAM<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_5.png" /> MARUTHAMPARA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_6.png" /> MEENAKSHIPURAM<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_7.png" /> MOOLATHARA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_8.png" /> NAMBOORICHALLA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_9.png" /> NARANI<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_10.png" /> NELLIMEDU<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_11.png" /> PARAKKALAM<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_12.png" /> PATTIKULAM<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_13.png" /> PERUMATTY<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_14.png" /> PLACHIMADA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_15.png" /> RAMAR PANNAI<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_16.png" /> SRAMBI<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_17.png" /> VANDITHAVALAM<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_18.png" /> VEMBRA<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_19.png" /> VILAYODI<br />\
    <img src="styles/legend/WARDSPERUMATTY_2_20.png" /> <br />' });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Rock Exposure<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> Water Body<br />' });
var format_GEOLOGY_4 = new ol.format.GeoJSON();
var features_GEOLOGY_4 = format_GEOLOGY_4.readFeatures(json_GEOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_4.addFeatures(features_GEOLOGY_4);
var lyr_GEOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_4, 
                style: style_GEOLOGY_4,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_4_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_4_1.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_4_2.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_4_3.png" /> Pegmatite/Aplite/Quartz vein<br />' });
var format_ROADS_5 = new ol.format.GeoJSON();
var features_ROADS_5 = format_ROADS_5.readFeatures(json_ROADS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_5.addFeatures(features_ROADS_5);
var lyr_ROADS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_5, 
                style: style_ROADS_5,
                popuplayertitle: 'ROADS',
                interactive: false,
                title: '<img src="styles/legend/ROADS_5.png" /> ROADS'
            });
var format_PANCHAYATBOUNDARY_6 = new ol.format.GeoJSON();
var features_PANCHAYATBOUNDARY_6 = format_PANCHAYATBOUNDARY_6.readFeatures(json_PANCHAYATBOUNDARY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANCHAYATBOUNDARY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCHAYATBOUNDARY_6.addFeatures(features_PANCHAYATBOUNDARY_6);
var lyr_PANCHAYATBOUNDARY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCHAYATBOUNDARY_6, 
                style: style_PANCHAYATBOUNDARY_6,
                popuplayertitle: 'PANCHAYAT BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/PANCHAYATBOUNDARY_6.png" /> PANCHAYAT BOUNDARY'
            });
var format_BUILDUP_7 = new ol.format.GeoJSON();
var features_BUILDUP_7 = format_BUILDUP_7.readFeatures(json_BUILDUP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDUP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDUP_7.addFeatures(features_BUILDUP_7);
var lyr_BUILDUP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDUP_7, 
                style: style_BUILDUP_7,
                popuplayertitle: 'BUILDUP',
                interactive: false,
                title: '<img src="styles/legend/BUILDUP_7.png" /> BUILDUP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_WARDSPERUMATTY_2.setVisible(false);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_GEOLOGY_4.setVisible(true);lyr_ROADS_5.setVisible(true);lyr_PANCHAYATBOUNDARY_6.setVisible(false);lyr_BUILDUP_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_WARDSPERUMATTY_2,lyr_GEOMORPHOLOGY_3,lyr_GEOLOGY_4,lyr_ROADS_5,lyr_PANCHAYATBOUNDARY_6,lyr_BUILDUP_7];
lyr_WARDSPERUMATTY_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_GEOLOGY_4.set('fieldAliases', {'fid': 'fid', 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_ROADS_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_PANCHAYATBOUNDARY_6.set('fieldAliases', {'id': 'id', });
lyr_BUILDUP_7.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_WARDSPERUMATTY_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_GEOLOGY_4.set('fieldImages', {'fid': 'TextEdit', 'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_ROADS_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_PANCHAYATBOUNDARY_6.set('fieldImages', {'id': 'TextEdit', });
lyr_BUILDUP_7.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_WARDSPERUMATTY_2.set('fieldLabels', {'gml_parent': 'inline label - always visible', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'header label - visible with data', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_GEOLOGY_4.set('fieldLabels', {'fid': 'no label', 'ROCK_GROUP': 'no label', 'NAME': 'header label - visible with data', });
lyr_ROADS_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_PANCHAYATBOUNDARY_6.set('fieldLabels', {'id': 'no label', });
lyr_BUILDUP_7.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_BUILDUP_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});