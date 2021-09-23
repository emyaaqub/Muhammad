ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([7.453327, 10.534102, 7.489145, 10.577417]);
var wms_layers = [];

var format_UNCATEGORISEDFEATURES_0 = new ol.format.GeoJSON();
var features_UNCATEGORISEDFEATURES_0 = format_UNCATEGORISEDFEATURES_0.readFeatures(json_UNCATEGORISEDFEATURES_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UNCATEGORISEDFEATURES_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNCATEGORISEDFEATURES_0.addFeatures(features_UNCATEGORISEDFEATURES_0);
var lyr_UNCATEGORISEDFEATURES_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNCATEGORISEDFEATURES_0, 
                style: style_UNCATEGORISEDFEATURES_0,
                interactive: true,
                title: '<img src="styles/legend/UNCATEGORISEDFEATURES_0.png" /> UNCATEGORISED FEATURES'
            });
var format_BOUNDARY_LINE_1 = new ol.format.GeoJSON();
var features_BOUNDARY_LINE_1 = format_BOUNDARY_LINE_1.readFeatures(json_BOUNDARY_LINE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BOUNDARY_LINE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_LINE_1.addFeatures(features_BOUNDARY_LINE_1);
var lyr_BOUNDARY_LINE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_LINE_1, 
                style: style_BOUNDARY_LINE_1,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_LINE_1.png" /> BOUNDARY_LINE'
            });
var format_CHURCH_2 = new ol.format.GeoJSON();
var features_CHURCH_2 = format_CHURCH_2.readFeatures(json_CHURCH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CHURCH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHURCH_2.addFeatures(features_CHURCH_2);
var lyr_CHURCH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHURCH_2, 
                style: style_CHURCH_2,
                interactive: true,
                title: '<img src="styles/legend/CHURCH_2.png" /> CHURCH'
            });
var format_EATERIES_3 = new ol.format.GeoJSON();
var features_EATERIES_3 = format_EATERIES_3.readFeatures(json_EATERIES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EATERIES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EATERIES_3.addFeatures(features_EATERIES_3);
var lyr_EATERIES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EATERIES_3, 
                style: style_EATERIES_3,
                interactive: true,
                title: '<img src="styles/legend/EATERIES_3.png" /> EATERIES'
            });
var format_FILLING_STATION_4 = new ol.format.GeoJSON();
var features_FILLING_STATION_4 = format_FILLING_STATION_4.readFeatures(json_FILLING_STATION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FILLING_STATION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILLING_STATION_4.addFeatures(features_FILLING_STATION_4);
var lyr_FILLING_STATION_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FILLING_STATION_4, 
                style: style_FILLING_STATION_4,
                interactive: true,
                title: '<img src="styles/legend/FILLING_STATION_4.png" /> FILLING_STATION'
            });
var format_HEALTH_CENTER_5 = new ol.format.GeoJSON();
var features_HEALTH_CENTER_5 = format_HEALTH_CENTER_5.readFeatures(json_HEALTH_CENTER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HEALTH_CENTER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTH_CENTER_5.addFeatures(features_HEALTH_CENTER_5);
var lyr_HEALTH_CENTER_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEALTH_CENTER_5, 
                style: style_HEALTH_CENTER_5,
                interactive: true,
                title: '<img src="styles/legend/HEALTH_CENTER_5.png" /> HEALTH_CENTER'
            });
var format_HOTELS_6 = new ol.format.GeoJSON();
var features_HOTELS_6 = format_HOTELS_6.readFeatures(json_HOTELS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HOTELS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTELS_6.addFeatures(features_HOTELS_6);
var lyr_HOTELS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTELS_6, 
                style: style_HOTELS_6,
                interactive: true,
                title: '<img src="styles/legend/HOTELS_6.png" /> HOTELS'
            });
var format_MAJOR_ROAD_7 = new ol.format.GeoJSON();
var features_MAJOR_ROAD_7 = format_MAJOR_ROAD_7.readFeatures(json_MAJOR_ROAD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MAJOR_ROAD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_ROAD_7.addFeatures(features_MAJOR_ROAD_7);
var lyr_MAJOR_ROAD_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_ROAD_7, 
                style: style_MAJOR_ROAD_7,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_ROAD_7.png" /> MAJOR_ROAD'
            });
var format_MINOR_ROAD_8 = new ol.format.GeoJSON();
var features_MINOR_ROAD_8 = format_MINOR_ROAD_8.readFeatures(json_MINOR_ROAD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MINOR_ROAD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINOR_ROAD_8.addFeatures(features_MINOR_ROAD_8);
var lyr_MINOR_ROAD_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINOR_ROAD_8, 
                style: style_MINOR_ROAD_8,
                interactive: true,
                title: '<img src="styles/legend/MINOR_ROAD_8.png" /> MINOR_ROAD'
            });
var format_MOSQUE_9 = new ol.format.GeoJSON();
var features_MOSQUE_9 = format_MOSQUE_9.readFeatures(json_MOSQUE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MOSQUE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOSQUE_9.addFeatures(features_MOSQUE_9);
var lyr_MOSQUE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOSQUE_9, 
                style: style_MOSQUE_9,
                interactive: true,
                title: '<img src="styles/legend/MOSQUE_9.png" /> MOSQUE'
            });
var format_RIVER_10 = new ol.format.GeoJSON();
var features_RIVER_10 = format_RIVER_10.readFeatures(json_RIVER_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RIVER_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIVER_10.addFeatures(features_RIVER_10);
var lyr_RIVER_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIVER_10, 
                style: style_RIVER_10,
                interactive: true,
                title: '<img src="styles/legend/RIVER_10.png" /> RIVER'
            });
var format_SCHOOL_11 = new ol.format.GeoJSON();
var features_SCHOOL_11 = format_SCHOOL_11.readFeatures(json_SCHOOL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SCHOOL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_11.addFeatures(features_SCHOOL_11);
var lyr_SCHOOL_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOL_11, 
                style: style_SCHOOL_11,
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_11.png" /> SCHOOL'
            });

lyr_UNCATEGORISEDFEATURES_0.setVisible(true);lyr_BOUNDARY_LINE_1.setVisible(true);lyr_CHURCH_2.setVisible(true);lyr_EATERIES_3.setVisible(true);lyr_FILLING_STATION_4.setVisible(true);lyr_HEALTH_CENTER_5.setVisible(true);lyr_HOTELS_6.setVisible(true);lyr_MAJOR_ROAD_7.setVisible(true);lyr_MINOR_ROAD_8.setVisible(true);lyr_MOSQUE_9.setVisible(true);lyr_RIVER_10.setVisible(true);lyr_SCHOOL_11.setVisible(true);
var layersList = [lyr_UNCATEGORISEDFEATURES_0,lyr_BOUNDARY_LINE_1,lyr_CHURCH_2,lyr_EATERIES_3,lyr_FILLING_STATION_4,lyr_HEALTH_CENTER_5,lyr_HOTELS_6,lyr_MAJOR_ROAD_7,lyr_MINOR_ROAD_8,lyr_MOSQUE_9,lyr_RIVER_10,lyr_SCHOOL_11];
lyr_UNCATEGORISEDFEATURES_0.set('fieldAliases', {'OTHERS': 'OTHERS', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', });
lyr_BOUNDARY_LINE_1.set('fieldAliases', {'id': 'id', 'BOUNDARY_L': 'BOUNDARY_L', });
lyr_CHURCH_2.set('fieldAliases', {'CHURHES': 'CHURHES', 'EASTINGS': 'EASTINGS', 'NORTHING': 'NORTHING', });
lyr_EATERIES_3.set('fieldAliases', {'EATERIES': 'EATERIES', 'EASTINGS': 'EASTINGS', 'NORTHINGS': 'NORTHINGS', });
lyr_FILLING_STATION_4.set('fieldAliases', {'FILLING_ST': 'FILLING_ST', 'EASTINGS': 'EASTINGS', 'NORTHINGS': 'NORTHINGS', });
lyr_HEALTH_CENTER_5.set('fieldAliases', {'HEALTH_CEN': 'HEALTH_CEN', 'EASTINGS': 'EASTINGS', 'NORTHINGS': 'NORTHINGS', });
lyr_HOTELS_6.set('fieldAliases', {'HOTELS': 'HOTELS', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', });
lyr_MAJOR_ROAD_7.set('fieldAliases', {'MAJOR_RD': 'MAJOR_RD', 'LEGNTH': 'LEGNTH', });
lyr_MINOR_ROAD_8.set('fieldAliases', {'NAMES': 'NAMES', 'LEGNTH': 'LEGNTH', });
lyr_MOSQUE_9.set('fieldAliases', {'MOSQUES': 'MOSQUES', 'EASTINGS': 'EASTINGS', 'NORTHING': 'NORTHING', });
lyr_RIVER_10.set('fieldAliases', {'RIVER': 'RIVER', });
lyr_SCHOOL_11.set('fieldAliases', {'SCH_NAME': 'SCH_NAME', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', });
lyr_UNCATEGORISEDFEATURES_0.set('fieldImages', {'OTHERS': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', });
lyr_BOUNDARY_LINE_1.set('fieldImages', {'id': 'TextEdit', 'BOUNDARY_L': 'TextEdit', });
lyr_CHURCH_2.set('fieldImages', {'CHURHES': 'TextEdit', 'EASTINGS': 'TextEdit', 'NORTHING': 'TextEdit', });
lyr_EATERIES_3.set('fieldImages', {'EATERIES': 'TextEdit', 'EASTINGS': 'TextEdit', 'NORTHINGS': 'TextEdit', });
lyr_FILLING_STATION_4.set('fieldImages', {'FILLING_ST': 'TextEdit', 'EASTINGS': 'TextEdit', 'NORTHINGS': 'TextEdit', });
lyr_HEALTH_CENTER_5.set('fieldImages', {'HEALTH_CEN': 'TextEdit', 'EASTINGS': 'TextEdit', 'NORTHINGS': 'TextEdit', });
lyr_HOTELS_6.set('fieldImages', {'HOTELS': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', });
lyr_MAJOR_ROAD_7.set('fieldImages', {'MAJOR_RD': 'TextEdit', 'LEGNTH': 'TextEdit', });
lyr_MINOR_ROAD_8.set('fieldImages', {'NAMES': 'TextEdit', 'LEGNTH': 'TextEdit', });
lyr_MOSQUE_9.set('fieldImages', {'MOSQUES': 'TextEdit', 'EASTINGS': 'TextEdit', 'NORTHING': 'TextEdit', });
lyr_RIVER_10.set('fieldImages', {'RIVER': 'TextEdit', });
lyr_SCHOOL_11.set('fieldImages', {'SCH_NAME': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', });
lyr_UNCATEGORISEDFEATURES_0.set('fieldLabels', {'OTHERS': 'inline label', 'EASTING': 'no label', 'NORTHING': 'no label', });
lyr_BOUNDARY_LINE_1.set('fieldLabels', {'id': 'no label', 'BOUNDARY_L': 'no label', });
lyr_CHURCH_2.set('fieldLabels', {'CHURHES': 'inline label', 'EASTINGS': 'no label', 'NORTHING': 'no label', });
lyr_EATERIES_3.set('fieldLabels', {'EATERIES': 'inline label', 'EASTINGS': 'no label', 'NORTHINGS': 'no label', });
lyr_FILLING_STATION_4.set('fieldLabels', {'FILLING_ST': 'inline label', 'EASTINGS': 'no label', 'NORTHINGS': 'no label', });
lyr_HEALTH_CENTER_5.set('fieldLabels', {'HEALTH_CEN': 'inline label', 'EASTINGS': 'no label', 'NORTHINGS': 'no label', });
lyr_HOTELS_6.set('fieldLabels', {'HOTELS': 'inline label', 'EASTING': 'no label', 'NORTHING': 'no label', });
lyr_MAJOR_ROAD_7.set('fieldLabels', {'MAJOR_RD': 'inline label', 'LEGNTH': 'no label', });
lyr_MINOR_ROAD_8.set('fieldLabels', {'NAMES': 'inline label', 'LEGNTH': 'no label', });
lyr_MOSQUE_9.set('fieldLabels', {'MOSQUES': 'inline label', 'EASTINGS': 'no label', 'NORTHING': 'no label', });
lyr_RIVER_10.set('fieldLabels', {'RIVER': 'no label', });
lyr_SCHOOL_11.set('fieldLabels', {'SCH_NAME': 'inline label', 'EASTING': 'no label', 'NORTHING': 'no label', });
lyr_SCHOOL_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});