function addBeforeLayers(e,t){beforeMap.getLayer("c7_dates-ajsksu-left")&&beforeMap.removeLayer("c7_dates-ajsksu-left"),beforeMap.getSource("c7_dates-ajsksu")&&beforeMap.removeSource("c7_dates-ajsksu"),beforeMap.getLayer("grants1-5sp9tb-left")&&beforeMap.removeLayer("grants1-5sp9tb-left"),beforeMap.getSource("grants1-5sp9tb")&&beforeMap.removeSource("grants1-5sp9tb"),beforeMap.addLayer({id:"grants1-5sp9tb-left-highlighted",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.b5bpfqeb"},layout:{visibility:document.getElementById("grants_layer").checked?"visible":"none"},"source-layer":"grants1-5sp9tb",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,0],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",t],[">=","DayEnd",t]]}),beforeMap.addLayer({id:"grants1-5sp9tb-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.b5bpfqeb"},layout:{visibility:document.getElementById("grants_layer").checked?"visible":"none"},"source-layer":"grants1-5sp9tb",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.5],"fill-outline-color":"#000000"},filter:["all",["<=","DayStart",t],[">=","DayEnd",t]]}),beforeMap.on("mouseenter","grants1-5sp9tb-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapDutchGrantPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","grants1-5sp9tb-left",(function(e){if(e.features.length>0){hoveredDutchGrantIdLeft&&beforeMap.setFeatureState({source:"grants1-5sp9tb-left",sourceLayer:"grants1-5sp9tb",id:hoveredDutchGrantIdLeft},{hover:!1}),hoveredDutchGrantIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"grants1-5sp9tb-left",sourceLayer:"grants1-5sp9tb",id:hoveredDutchGrantIdLeft},{hover:!0});var t="";t=void 0===dutch_grant_lots_info[e.features[0].properties.Lot]?"<div class='infoLayerDutchGrantsPopUp'>"+e.features[0].properties.name+"<br>":"<div class='infoLayerDutchGrantsPopUp'>"+(dutch_grant_lots_info[e.features[0].properties.Lot].name_txt.length>0?dutch_grant_lots_info[e.features[0].properties.Lot].name_txt:e.features[0].properties.name)+"<br>",t+="<b>Dutch Grant Lot: </b>"+e.features[0].properties.Lot+"</div>";for(var o=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;beforeMapDutchGrantPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","grants1-5sp9tb-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredDutchGrantIdLeft&&beforeMap.setFeatureState({source:"grants1-5sp9tb-left",sourceLayer:"grants1-5sp9tb",id:hoveredDutchGrantIdLeft},{hover:!1}),hoveredDutchGrantIdLeft=null,beforeMapDutchGrantPopUp.isOpen()&&beforeMapDutchGrantPopUp.remove()})),beforeMap.addLayer({id:"c7_dates-ajsksu-left",type:"circle",source:{type:"vector",url:"mapbox://nittyjee.8krf945a"},layout:{visibility:document.getElementById("circle_point").checked?"visible":"none"},"source-layer":"c7_dates-ajsksu",paint:{"circle-color":{type:"categorical",property:"color",stops:[["6","#0000ee"],["5","#097911"],["4","#0000ee"],["3","#097911"],["2","#0000ee"],["1","#097911"]],default:"#FF0000"},"circle-opacity":["case",["boolean",["feature-state","hover"],!1],.5,1],"circle-stroke-width":2,"circle-stroke-color":{type:"categorical",property:"color",stops:[["6","#0000ee"],["5","#097911"],["4","#0000ee"],["3","#097911"],["2","#0000ee"],["1","#097911"]],default:"#FF0000"},"circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],1,0],"circle-radius":{type:"categorical",property:"TAXLOT",stops:[["C7",9]]}},filter:["all",["<=","DayStart",t],[">=","DayEnd",t]]}),beforeMap.on("mouseenter","c7_dates-ajsksu-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",hoveredStateIdLeftCircle&&beforeMap.setFeatureState({source:"c7_dates-ajsksu-left",sourceLayer:"c7_dates-ajsksu",id:hoveredStateIdLeftCircle},{hover:!1}),hoveredStateIdLeftCircle=e.features[0].id,beforeMap.setFeatureState({source:"c7_dates-ajsksu-left",sourceLayer:"c7_dates-ajsksu",id:hoveredStateIdLeftCircle},{hover:!0});for(var t=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;beforeMapPopUp.setLngLat(t).setHTML("<div class='demoLayerInfoPopUp'><b><h2>Taxlot: <a href='https://encyclopedia.nahc-mapping.org/taxlot/c7' target='_blank'>C7</a></h2></b></div>").addTo(beforeMap)})),beforeMap.on("mouseleave","c7_dates-ajsksu-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredStateIdLeftCircle&&beforeMap.setFeatureState({source:"c7_dates-ajsksu-left",sourceLayer:"c7_dates-ajsksu",id:hoveredStateIdLeftCircle},{hover:!1}),hoveredStateIdLeftCircle=null,beforeMapPopUp.isOpen()&&beforeMapPopUp.remove()}))}function addGrantLotsBeforeLayers(e){beforeMap.getLayer("grant-lots-left")&&beforeMap.removeLayer("grant-lots-left"),beforeMap.getSource("grant_lot_c7-6s06if")&&beforeMap.removeSource("grant_lot_c7-6s06if"),beforeMap.addLayer({id:"grant-lots-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.4498iwgn"},layout:{visibility:document.getElementById("grant_lots").checked?"visible":"none"},"source-layer":"grant_lot_c7-6s06if",paint:{"fill-color":"#088","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.5],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","grant-lots-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapGrantLotPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","grant-lots-left",(function(e){if(e.features.length>0){hoveredGrantLotIdLeft&&beforeMap.setFeatureState({source:"grant-lots-left",sourceLayer:"grant_lot_c7-6s06if",id:hoveredGrantLotIdLeft},{hover:!1}),hoveredGrantLotIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"grant-lots-left",sourceLayer:"grant_lot_c7-6s06if",id:hoveredGrantLotIdLeft},{hover:!0});for(var t="<div class='infoLayerGrantLotsPopUp'>"+e.features[0].properties.name+"<br><b>Start:</b> "+e.features[0].properties.day1+", "+e.features[0].properties.year1+"<br><b>End:</b> "+e.features[0].properties.day2+", "+e.features[0].properties.year2+"<br><b>Lot Division: </b>"+e.features[0].properties.dutchlot+"</div>",o=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;beforeMapGrantLotPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","grant-lots-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredGrantLotIdLeft&&beforeMap.setFeatureState({source:"grant-lots-left",sourceLayer:"grant_lot_c7-6s06if",id:hoveredGrantLotIdLeft},{hover:!1}),hoveredGrantLotIdLeft=null,beforeMapGrantLotPopUp.isOpen()&&beforeMapGrantLotPopUp.remove()}))}function addGrantLotsLinesBeforeLayers(e){beforeMap.getLayer("grant-lots-lines-left")&&beforeMap.removeLayer("grant-lots-lines-left"),beforeMap.getSource("dutch_grants_lines-1n0e0p")&&beforeMap.removeSource("dutch_grants_lines-1n0e0p"),beforeMap.addLayer({id:"grant-lots-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.1j4u7q5k"},layout:{visibility:document.getElementById("grants_layer_lines").checked?"visible":"none"},"source-layer":"dutch_grants_lines-1n0e0p",paint:{"line-color":"#FF0000","line-width":3,"line-opacity":.8},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]})}function addGravesendBeforeLayers(e){beforeMap.addLayer({id:"gravesend_boundaries-c6qrbw-left-highlighted",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.49p6xmnm"},layout:{visibility:document.getElementById("gravesend_layer").checked?"visible":"none"},"source-layer":"gravesend_boundaries-c6qrbw",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,0],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.addLayer({id:"gravesend_boundaries-c6qrbw-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.49p6xmnm"},layout:{visibility:document.getElementById("gravesend_layer").checked?"visible":"none"},"source-layer":"gravesend_boundaries-c6qrbw",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.45],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","gravesend_boundaries-c6qrbw-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapGravesendTwoPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","gravesend_boundaries-c6qrbw-left",(function(e){if(e.features.length>0){hoveredGravesendIdLeft&&beforeMap.setFeatureState({source:"gravesend_boundaries-c6qrbw-left",sourceLayer:"gravesend_boundaries-c6qrbw",id:hoveredGravesendIdLeft},{hover:!1}),hoveredGravesendIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"gravesend_boundaries-c6qrbw-left",sourceLayer:"gravesend_boundaries-c6qrbw",id:hoveredGravesendIdLeft},{hover:!0});var t="";t+="<div class='infoLayerDutchGrantsPopUp'><b>Name : </b>"+e.features[0].properties.Name+"</div>";for(var o=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;beforeMapGravesendTwoPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","gravesend_boundaries-c6qrbw-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredGravesendIdLeft&&beforeMap.setFeatureState({source:"gravesend_boundaries-c6qrbw-left",sourceLayer:"gravesend_boundaries-c6qrbw",id:hoveredGravesendIdLeft},{hover:!1}),hoveredGravesendIdLeft=null,beforeMapGravesendTwoPopUp.isOpen()&&beforeMapGravesendTwoPopUp.remove()}))}function addGravesendLinesBeforeLayers(e){beforeMap.addLayer({id:"gravesend-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.860jt8v9"},layout:{visibility:document.getElementById("gravesend_layer_lines").checked?"visible":"none"},"source-layer":"gravesend_lines-7mtc93",paint:{"line-color":"#FF0000","line-width":3,"line-opacity":.8},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]})}function addKarlBeforeLayers(e){beforeMap.addLayer({id:"karl_long_island-left-highlighted",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.5u30zve2"},layout:{visibility:document.getElementById("karl_layer").checked?"visible":"none"},"source-layer":"karl_areas-8j4ru6",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,0],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.addLayer({id:"karl_long_island-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.5u30zve2"},layout:{visibility:document.getElementById("karl_layer").checked?"visible":"none"},"source-layer":"karl_areas-8j4ru6",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.45],"fill-outline-color":"#FF0000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","karl_long_island-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapKarlTwoPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","karl_long_island-left",(function(e){if(e.features.length>0){hoveredKarlIdLeft&&beforeMap.setFeatureState({source:"karl_long_island-left",sourceLayer:"karl_areas-8j4ru6",id:hoveredKarlIdLeft},{hover:!1}),hoveredKarlIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"karl_long_island-left",sourceLayer:"karl_areas-8j4ru6",id:hoveredKarlIdLeft},{hover:!0});var t="";t+="<div class='infoLayerDutchGrantsPopUp'><b>Name : </b>"+e.features[0].properties.corr_label+"</div>";for(var o=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;beforeMapKarlTwoPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","karl_long_island-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredKarlIdLeft&&beforeMap.setFeatureState({source:"karl_long_island-left",sourceLayer:"karl_areas-8j4ru6",id:hoveredKarlIdLeft},{hover:!1}),hoveredKarlIdLeft=null,beforeMapKarlTwoPopUp.isOpen()&&beforeMapKarlTwoPopUp.remove()}))}function addKarlLinesBeforeLayers(e){beforeMap.addLayer({id:"karl-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.1iinsopm"},layout:{visibility:document.getElementById("karl_layer_lines").checked?"visible":"none"},"source-layer":"karl_long_island_lines-7hhtcy",paint:{"line-color":"#FF0000","line-width":3,"line-opacity":.8},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]})}function addBeforeFarmsLayer(e){beforeMap.addLayer({id:"stokes_farms_complete_5_reduc-6k9tbl-left-highlighted",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.220x7bg9"},layout:{visibility:document.getElementById("farms_layer").checked?"visible":"none"},"source-layer":"stokes_farms_complete_5_reduc-6k9tbl",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,0],"fill-outline-color":"#000000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.addLayer({id:"stokes_farms_complete_5_reduc-6k9tbl-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.220x7bg9"},layout:{visibility:document.getElementById("farms_layer").checked?"visible":"none"},"source-layer":"stokes_farms_complete_5_reduc-6k9tbl",paint:{"fill-color":"#e3ed58","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.5],"fill-outline-color":"#000000"},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.addLayer({id:"farms-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.8n7ba8lp"},layout:{visibility:document.getElementById("farms_layer_lines").checked?"visible":"none"},"source-layer":"stokes_farms_lines-apf0fk",paint:{"line-color":"#FF0000","line-width":3,"line-opacity":.8},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","stokes_farms_complete_5_reduc-6k9tbl-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapFarmPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","stokes_farms_complete_5_reduc-6k9tbl-left",(function(e){if(e.features.length>0){hoveredFarmsIdLeft&&beforeMap.setFeatureState({source:"stokes_farms_complete_5_reduc-6k9tbl-left",sourceLayer:"stokes_farms_complete_5_reduc-6k9tbl",id:hoveredFarmsIdLeft},{hover:!1}),hoveredFarmsIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"stokes_farms_complete_5_reduc-6k9tbl-left",sourceLayer:"stokes_farms_complete_5_reduc-6k9tbl",id:hoveredFarmsIdLeft},{hover:!0});for(var t=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;beforeMapFarmPopUp.setLngLat(e.lngLat).setHTML("<div class='infoLayerFarmsPopUp'>"+e.features[0].properties.To+"</div>")}})),beforeMap.on("mouseleave","stokes_farms_complete_5_reduc-6k9tbl-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredFarmsIdLeft&&beforeMap.setFeatureState({source:"stokes_farms_complete_5_reduc-6k9tbl-left",sourceLayer:"stokes_farms_complete_5_reduc-6k9tbl",id:hoveredFarmsIdLeft},{hover:!1}),hoveredFarmsIdLeft=null,beforeMapFarmPopUp.isOpen()&&beforeMapFarmPopUp.remove()}))}function addInfoBeforeLayers(e){beforeMap.addLayer({id:"info-points-left",type:"circle",source:{type:"vector",url:"mapbox://nittyjee.06hdr9o2"},layout:{visibility:document.getElementById("info_points").checked?"visible":"none"},"source-layer":"info_points_meny-bh1jf7",paint:{"circle-color":"#0dd3d3","circle-opacity":["case",["boolean",["feature-state","hover"],!1],.5,1],"circle-stroke-width":2,"circle-stroke-color":"#008888","circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],1,0]},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","info-points-left",(function(e){if(beforeMap.getCanvas().style.cursor="pointer",console.log(e.features[0].id),console.log(e.features[0].properties),e.features.length>0){hoveredInfoIdLeft&&beforeMap.setFeatureState({source:"info-points-left",sourceLayer:"info_points_meny-bh1jf7",id:hoveredInfoIdLeft},{hover:!1}),hoveredInfoIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"info-points-left",sourceLayer:"info_points_meny-bh1jf7",id:hoveredInfoIdLeft},{hover:!0});for(var t=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;beforeMapInfoPopUp.setLngLat(t).setHTML("<div class='infoLayerInfoPointPopUp'><b>"+e.features[0].properties.Label+"</b><br></div>").addTo(beforeMap)}})),beforeMap.on("mouseleave","info-points-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredInfoIdLeft&&beforeMap.setFeatureState({source:"info-points-left",sourceLayer:"info_points_meny-bh1jf7",id:hoveredInfoIdLeft},{hover:!1}),hoveredInfoIdLeft=null,beforeMapInfoPopUp.isOpen()&&beforeMapInfoPopUp.remove()}))}function addInfoLabelsBeforeLayers(e){beforeMap.addLayer({id:"info-labels-left",type:"symbol",source:{type:"vector",url:"mapbox://nittyjee.06hdr9o2"},layout:{visibility:document.getElementById("info_labels").checked?"visible":"none","text-field":"{Label}","text-offset":[0,1],"text-size":{stops:[[0,4],[22,21]]}},"source-layer":"info_points_meny-bh1jf7",paint:{"text-color":"#2c0202","text-halo-color":"#ffffff","text-halo-width":5,"text-halo-blur":1,"text-opacity":{stops:[[6,0],[7,1]]}},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]})}function addSettlementsBeforeLayers(e){beforeMap.addLayer({id:"settlements-left",type:"circle",source:{type:"vector",url:"mapbox://nittyjee.bdnqfl4c"},layout:{visibility:document.getElementById("settlements_points").checked?"visible":"none"},"source-layer":"locations_layer_nahc-797jyh",paint:{"circle-color":"#0b0ee5","circle-opacity":["case",["boolean",["feature-state","hover"],!1],.5,1],"circle-stroke-width":2,"circle-stroke-color":"#0b0ee5","circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],1,0]},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]}),beforeMap.on("mouseenter","settlements-left",(function(e){if(beforeMap.getCanvas().style.cursor="pointer",console.log(e.features[0].properties),e.features.length>0){hoveredSettlementsIdLeft&&beforeMap.setFeatureState({source:"settlements-left",sourceLayer:"locations_layer_nahc-797jyh",id:hoveredSettlementsIdLeft},{hover:!1}),hoveredSettlementsIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"settlements-left",sourceLayer:"locations_layer_nahc-797jyh",id:hoveredSettlementsIdLeft},{hover:!0});for(var t=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;beforeMapSettlementsPopUp.setLngLat(t).setHTML("<div class='infoLayerSettlementsPopUp'><b>"+e.features[0].properties.Name+"</b><br></div>").addTo(beforeMap)}})),beforeMap.on("mouseleave","settlements-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredSettlementsIdLeft&&beforeMap.setFeatureState({source:"settlements-left",sourceLayer:"locations_layer_nahc-797jyh",id:hoveredSettlementsIdLeft},{hover:!1}),hoveredSettlementsIdLeft=null,beforeMapSettlementsPopUp.isOpen()&&beforeMapSettlementsPopUp.remove()}))}function addSettlementsLabelsBeforeLayers(e){beforeMap.addLayer({id:"settlements-labels-left",type:"symbol",source:{type:"vector",url:"mapbox://nittyjee.bdnqfl4c"},layout:{visibility:document.getElementById("settlements_labels").checked?"visible":"none","text-field":"{corr_label}","text-offset":[0,1],"text-size":{stops:[[0,4],[22,21]]}},"source-layer":"locations_layer_nahc-797jyh",paint:{"text-color":"#0b0ee5","text-halo-color":"#ffffff","text-halo-width":5,"text-halo-blur":1,"text-opacity":{stops:[[8,0],[9,1]]}},filter:["all",["<=","DayStart",e],[">=","DayEnd",e]]})}function addCastelloBeforeLayers(){beforeMap.addLayer({id:"places-left",type:"circle",source:{type:"vector",url:"mapbox://nittyjee.ap08s4n9"},layout:{visibility:document.getElementById("castello_points").checked?"visible":"none"},"source-layer":"castello_points_new-3qkr6t",paint:{"circle-color":"#FF0000","circle-opacity":["case",["boolean",["feature-state","hover"],!1],.5,1],"circle-stroke-width":2,"circle-stroke-color":"#FF0000","circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],1,0]}}),beforeMap.on("mouseenter","places-left",(function(e){if(beforeMap.getCanvas().style.cursor="pointer",e.features.length>0){hoveredStateIdLeft&&beforeMap.setFeatureState({source:"places-left",sourceLayer:"castello_points_new-3qkr6t",id:hoveredStateIdLeft},{hover:!1}),hoveredStateIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"places-left",sourceLayer:"castello_points_new-3qkr6t",id:hoveredStateIdLeft},{hover:!0});for(var t=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;beforeMapPlacesPopUp.setLngLat(t).setHTML("<div class='infoLayerCastelloPopUp'><b>Taxlot (1660):</b><br>"+e.features[0].properties.LOT2+"</div>").addTo(beforeMap)}})),beforeMap.on("mouseleave","places-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredStateIdLeft&&beforeMap.setFeatureState({source:"places-left",sourceLayer:"castello_points_new-3qkr6t",id:hoveredStateIdLeft},{hover:!1}),hoveredStateIdLeft=null,beforeMapPlacesPopUp.isOpen()&&beforeMapPlacesPopUp.remove()}))}function addCurrentLotsBeforeLayers(){beforeMap.getLayer("curr-lots-left")&&beforeMap.removeLayer("curr-lots-left"),beforeMap.getSource("current_lots_1-ca6kq1")&&beforeMap.removeSource("current_lots_1-ca6kq1"),beforeMap.addLayer({id:"curr-lots-high-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.441lyesf"},layout:{visibility:document.getElementById("current_lots").checked?"visible":"none"},"source-layer":"current_lots_1-ca6kq1",paint:{"fill-color":"#7B68EE","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.5,0],"fill-outline-color":"#000000"}}),beforeMap.addLayer({id:"curr-lots-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.441lyesf"},layout:{visibility:document.getElementById("current_lots").checked?"visible":"none"},"source-layer":"current_lots_1-ca6kq1",paint:{"fill-color":"#7B68EE","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.1],"fill-outline-color":"#000000"}}),beforeMap.on("mouseenter","curr-lots-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapCurrLotsPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","curr-lots-left",(function(e){if(e.features.length>0){hoveredCurrLotsIdLeft&&beforeMap.setFeatureState({source:"curr-lots-left",sourceLayer:"current_lots_1-ca6kq1",id:hoveredCurrLotsIdLeft},{hover:!1}),hoveredCurrLotsIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"curr-lots-left",sourceLayer:"current_lots_1-ca6kq1",id:hoveredCurrLotsIdLeft},{hover:!0});var t="<div class='infoLayerCurrLotsPopUp'><b>"+e.features[0].properties.OwnerName+"</b><br>"+e.features[0].properties.Address+"</div>";beforeMapCurrLotsPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","curr-lots-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredCurrLotsIdLeft&&beforeMap.setFeatureState({source:"curr-lots-left",sourceLayer:"current_lots_1-ca6kq1",id:hoveredCurrLotsIdLeft},{hover:!1}),hoveredCurrLotsIdLeft=null,beforeMapCurrLotsPopUp.isOpen()&&beforeMapCurrLotsPopUp.remove()}))}function addCurrentLotsLinesBeforeLayers(){beforeMap.getLayer("curr-lots-lines-left")&&beforeMap.removeLayer("curr-lots-lines-left"),beforeMap.getSource("selected_lots_lines-2qrhih")&&beforeMap.removeSource("selected_lots_lines-2qrhih"),beforeMap.addLayer({id:"curr-lots-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.dzxpgww5"},layout:{visibility:document.getElementById("current_lots_lines").checked?"visible":"none"},"source-layer":"selected_lots_lines-2qrhih",paint:{"line-color":"#00ff00","line-width":3,"line-opacity":.7}})}function addCurrentBuildingsLinesBeforeLayers(){beforeMap.getLayer("curr-builds-lines-left")&&beforeMap.removeLayer("curr-builds-lines-left"),beforeMap.getSource("selected_buildings_lines-2gyw2x")&&beforeMap.removeSource("selected_buildings_lines-2gyw2x"),beforeMap.addLayer({id:"curr-builds-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.8icvriua"},layout:{visibility:document.getElementById("current_buildings_lines").checked?"visible":"none"},"source-layer":"selected_buildings_lines-2gyw2x",paint:{"line-color":"#0000FF","line-width":2,"line-opacity":.7}})}function addCurrentBuildingsBeforeLayers(){beforeMap.getLayer("curr-builds-left")&&beforeMap.removeLayer("curr-builds-left"),beforeMap.getSource("current_buildings_1-cjgsm")&&beforeMap.removeSource("current_buildings_1-cjgsm"),beforeMap.addLayer({id:"curr-builds-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.8zoowskg"},layout:{visibility:document.getElementById("current_buildings").checked?"visible":"none"},"source-layer":"current_buildings_1-cjgsm0",paint:{"fill-color":"#FF7F50","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.3],"fill-outline-color":"#000000"}})}function addLongIslandCoastlineBeforeLayers(){beforeMap.addLayer({id:"long-island-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.3lzv4797"},layout:{visibility:document.getElementById("longisland_coastline").checked?"visible":"none"},"source-layer":"long_island_area_1-88rdix",paint:{"line-color":"#006400","line-width":3,"line-opacity":1}}),beforeMap.addLayer({id:"long-island-area-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.1i8qb0mc"},layout:{visibility:document.getElementById("longisland_area").checked?"visible":"none"},"source-layer":"long_island_area_lines_to_pol-3kvp6g",paint:{"fill-color":"#00FF7F","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.2],"fill-outline-color":"#000000"}})}function addManahattaBeforeLayers(){beforeMap.addLayer({id:"lenape-trails-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.4kio957z"},layout:{visibility:document.getElementById("lenape_trails").checked?"visible":"none"},"source-layer":"lenape_trails-9n6muf",paint:{"line-color":"#FF0000","line-width":4,"line-opacity":1}}),beforeMap.addLayer({id:"manahatta-shoreline-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.0q74r4c7"},layout:{visibility:document.getElementById("manahatta_shoreline").checked?"visible":"none"},"source-layer":"manahatta_shoreline-b3tcj6",paint:{"line-color":"#FFD700","line-width":4,"line-opacity":1}}),beforeMap.addLayer({id:"streams-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.9t5q3gv8"},layout:{visibility:document.getElementById("manahatta_streams").checked?"visible":"none"},"source-layer":"streams-bek8e1",paint:{"line-color":"#0000FF","line-width":4,"line-opacity":1}})}function addIndianPathsBeforeLayers(){beforeMap.addLayer({id:"indian-paths-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.9ys5pa40"},layout:{visibility:document.getElementById("indian_paths").checked?"visible":"none"},"source-layer":"indian_paths-1679y0",paint:{"line-color":"#FF0000","line-width":5,"line-opacity":1}})}function addLongIslandNativeGroupsBeforeLayers(){beforeMap.addLayer({id:"native-groups-lines-left",type:"line",source:{type:"vector",url:"mapbox://nittyjee.bxsaikea"},layout:{visibility:document.getElementById("native_groups_lines").checked?"visible":"none"},"source-layer":"simplified_indian_long_island-d223sy",paint:{"line-color":"#ff9900","line-width":15,"line-blur":20,"line-opacity":1}}),beforeMap.addLayer({id:"native-groups-area-left",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.9dmuvuk4"},layout:{visibility:document.getElementById("native_groups_area").checked?"visible":"none"},"source-layer":"long_island_indian_areas-3o4hr7",paint:{"fill-color":"#FF1493","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.5,.2],"fill-outline-color":"#FFD700"}}),beforeMap.addLayer({id:"native-groups-area-left-highlighted",type:"fill",source:{type:"vector",url:"mapbox://nittyjee.9dmuvuk4"},layout:{visibility:document.getElementById("native_groups_area").checked?"visible":"none"},"source-layer":"long_island_indian_areas-3o4hr7",paint:{"fill-color":"#FF1493","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.3,0],"fill-outline-color":"#FFD700"}}),beforeMap.addLayer({id:"native-groups-labels-left",type:"symbol",source:{type:"vector",url:"mapbox://nittyjee.978p2v80"},layout:{visibility:document.getElementById("settlements_labels").checked?"visible":"none","text-field":"{name}","text-offset":[0,1],"text-size":{stops:[[0,4],[22,34]]}},"source-layer":"indian_long_island_labels-483rzu",paint:{"text-color":"#000080","text-halo-color":"#ffffff","text-halo-width":5,"text-halo-blur":1,"text-opacity":{stops:[[6,0],[7,1]]}}}),beforeMap.on("mouseenter","native-groups-area-left",(function(e){beforeMap.getCanvas().style.cursor="pointer",beforeMapNativeGroupsPopUp.setLngLat(e.lngLat).addTo(beforeMap)})),beforeMap.on("mousemove","native-groups-area-left",(function(e){if(e.features.length>0){hoveredNativeGroupsIdLeft&&beforeMap.setFeatureState({source:"native-groups-area-left",sourceLayer:"long_island_indian_areas-3o4hr7",id:hoveredNativeGroupsIdLeft},{hover:!1}),hoveredNativeGroupsIdLeft=e.features[0].id,beforeMap.setFeatureState({source:"native-groups-area-left",sourceLayer:"long_island_indian_areas-3o4hr7",id:hoveredNativeGroupsIdLeft},{hover:!0});var t="";t=void 0===taxlot_event_entities_info[e.features[0].properties.nid]||""==e.features[0].properties.nid?"<div class='infoLayerCastelloPopUp'><b>Name : </b>"+e.features[0].properties.name+"</div>":"<div class='infoLayerCastelloPopUp'><b>Name : </b>"+(taxlot_event_entities_info[e.features[0].properties.nid].name.length>0?taxlot_event_entities_info[e.features[0].properties.nid].name:e.features[0].properties.name)+"</div>";for(var o=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;beforeMapNativeGroupsPopUp.setLngLat(e.lngLat).setHTML(t)}})),beforeMap.on("mouseleave","native-groups-area-left",(function(){beforeMap.getCanvas().style.cursor="",hoveredNativeGroupsIdLeft&&beforeMap.setFeatureState({source:"native-groups-area-left",sourceLayer:"long_island_indian_areas-3o4hr7",id:hoveredNativeGroupsIdLeft},{hover:!1}),hoveredNativeGroupsIdLeft=null,beforeMapNativeGroupsPopUp.isOpen()&&beforeMapNativeGroupsPopUp.remove()}))}function addBeforeLabelsLayer(){beforeMap.addLayer(LongIslandZoomLabel),beforeMap.on("mouseenter","label-long-island",(function(e){beforeMap.setPaintProperty("label-long-island","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-long-island",(function(){beforeMap.setPaintProperty("label-long-island","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-long-island",(function(e){zoom_labels_click_ev=!0,zoomtobounds("LongIsland")})),beforeMap.addLayer(BrooklynZoomLabel),beforeMap.on("mouseenter","label-brooklyn",(function(e){beforeMap.setPaintProperty("label-brooklyn","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-brooklyn",(function(){beforeMap.setPaintProperty("label-brooklyn","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-brooklyn",(function(e){zoom_labels_click_ev=!0,zoomtobounds("Brooklyn")})),beforeMap.addLayer(NewAmsterdamZoomLabel),beforeMap.on("mouseenter","label-new-amsterdam",(function(e){beforeMap.setPaintProperty("label-new-amsterdam","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-new-amsterdam",(function(){beforeMap.setPaintProperty("label-new-amsterdam","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-new-amsterdam",(function(e){zoom_labels_click_ev=!0,zoomtocenter("NA")})),beforeMap.addLayer(ManhattanZoomLabel),beforeMap.on("mouseenter","label-manhattan",(function(e){beforeMap.setPaintProperty("label-manhattan","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-manhattan",(function(){beforeMap.setPaintProperty("label-manhattan","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-manhattan",(function(e){zoom_labels_click_ev=!0,zoomtobounds("Manhattan")})),beforeMap.addLayer(NewNetherlandZoomLabel),beforeMap.on("mouseenter","label-new-netherland",(function(e){beforeMap.setPaintProperty("label-new-netherland","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-new-netherland",(function(){beforeMap.setPaintProperty("label-new-netherland","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-new-netherland",(function(e){zoom_labels_click_ev=!0,zoomtobounds("NewNL")})),beforeMap.addLayer(NewEnglandZoomLabel),beforeMap.on("mouseenter","label-new-england",(function(e){beforeMap.setPaintProperty("label-new-england","text-color",lbl_color_hover),beforeMap.getCanvas().style.cursor="pointer"})),beforeMap.on("mouseleave","label-new-england",(function(){beforeMap.setPaintProperty("label-new-england","text-color",lbl_color),beforeMap.getCanvas().style.cursor=""})),beforeMap.on("click","label-new-england",(function(e){zoom_labels_click_ev=!0,zoomtobounds("NewEngland")}))}