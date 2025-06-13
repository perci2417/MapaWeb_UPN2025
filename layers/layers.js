ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-86.203869, -18.878074, -60.436156, 0.409137]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosdelPeru_1 = new ol.format.GeoJSON();
var features_DepartamentosdelPeru_1 = format_DepartamentosdelPeru_1.readFeatures(json_DepartamentosdelPeru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentosdelPeru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdelPeru_1.addFeatures(features_DepartamentosdelPeru_1);
var lyr_DepartamentosdelPeru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosdelPeru_1, 
                style: style_DepartamentosdelPeru_1,
                popuplayertitle: 'Departamentos del Peru',
                interactive: true,
                title: '<img src="styles/legend/DepartamentosdelPeru_1.png" /> Departamentos del Peru'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosdelPeru_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentosdelPeru_1];
lyr_DepartamentosdelPeru_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'Nombre del Departamento:', 'COUNT': 'Numero de distritos del departamento:', 'FIRST_IDDP': 'UBIGEO del departamento:', 'HECTARES': 'Superficie en hectareas:', 'DEPARTAMENTO': 'DEPARTAMENTO', '1995': '1995', '2000': '2000', '2005': '2005', '2010': '2010', '2015': '2015', '2017': '2017', 'DEPARTAMENTO_2': 'DEPARTAMENTO_2', 'COD_DEP': 'COD_DEP', '1995_2': '1995_2', '2000_2': '2000_2', '2005_2': '2005_2', '2010_2': '2010_2', '2015_2': '2015_2', '2017_2': '2017_2', 'enlaces': 'Informacion del departamento:', 'fotos': 'Fotos turisticas del departamento:', 'videos': 'Video promocional del departamento:', });
lyr_DepartamentosdelPeru_1.set('fieldImages', {'fid': 'TextEdit', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'DEPARTAMENTO': 'Hidden', '1995': 'Hidden', '2000': 'Hidden', '2005': 'Hidden', '2010': 'Hidden', '2015': 'Hidden', '2017': 'Hidden', 'DEPARTAMENTO_2': 'Hidden', 'COD_DEP': 'Hidden', '1995_2': 'Hidden', '2000_2': 'Hidden', '2005_2': 'Hidden', '2010_2': 'Hidden', '2015_2': 'Hidden', '2017_2': 'Hidden', 'enlaces': 'TextEdit', 'fotos': 'ExternalResource', 'videos': 'TextEdit', });
lyr_DepartamentosdelPeru_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'DEPARTAMENTO': 'no label', '1995': 'no label', '2000': 'no label', '2005': 'no label', '2010': 'no label', '2015': 'no label', '2017': 'no label', 'DEPARTAMENTO_2': 'no label', 'COD_DEP': 'no label', '1995_2': 'no label', '2000_2': 'no label', '2005_2': 'no label', '2010_2': 'no label', '2015_2': 'no label', '2017_2': 'no label', 'enlaces': 'header label - always visible', 'fotos': 'header label - always visible', 'videos': 'header label - always visible', });
lyr_DepartamentosdelPeru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});