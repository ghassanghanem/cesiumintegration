function buildPopUpInfo(r){var t="<b><h2>Demo Taxlot: <a href='https://encyclopedia.nahc-mapping.org/taxlot/c7' target='_blank'>C7</a></h2></b><b>Property Type: </b>House<hr><b> FROM: </b>"+r.DATE1+"<br><b> TO: </b>"+r.DATE2+r.Unknown+"<hr>"+r.Next+"<a href=https://nahc-mapping.org/mappingNY"+r.TO_PAR1+": <br><a href=https://nahc-mapping.org/mappingNY"+r.TO_1+" (<a href=https://nahc-mapping.org/mappingNY"+r.TO_ENT1+")<br><br><a href=https://nahc-mapping.org/mappingNY"+r.TO_PAR2+": <br><a href=https://nahc-mapping.org/mappingNY"+r.TO_2+" (<a href=https://nahc-mapping.org/mappingNY"+r.TO_ENT2+")<br><br>"+r.Tax_Event+"<br><a href=https://nahc-mapping.org/mappingNY"+r.EVENT1+"<hr>"+r.Previous+"<br><a href=https://nahc-mapping.org/mappingNY"+r.FROM_PAR1+": <br><a href=https://nahc-mapping.org/mappingNY"+r.FROM_1+" (<a href=https://nahc-mapping.org/mappingNY"+r.FROM_ENT1+")<br><br><a href=https://nahc-mapping.org/mappingNY"+r.FROM_PAR2+": <br><a href=https://nahc-mapping.org/mappingNY"+r.FROM_2+" (<a href=https://nahc-mapping.org/mappingNY"+r.FROM_ENT2+")"+r.Event+"<a href=https://nahc-mapping.org/mappingNY"+r.Prev_Event+'<br><hr><b> <h3><a href="https://encyclopedia.nahc-mapping.org/taxlot-events" target="_blank">SEE ALL TAXLOT EVENTS</a></h3></b>';$("#demoLayerInfo").html(t)}function buildGrantLotsPopUpInfo(r){var t="<h3>Grant Lot Division</h3><hr><br><b>Original Dutch Grant: </b>"+r.Lot+"<br><b>Lot Division: </b>"+r.dutchlot+"<br><b>Castello Taxlot (1660): </b>"+r.castello+"<br><br><b>Ownership:</b> "+r.name+"<br><b>From:</b> "+r.from+"<br><br><b>Start:</b> "+r.day1+", "+r.year1+"<br><b>End:</b> "+r.day2+", "+r.year2+"<br><br><b>Description:</b> <br>"+r.descriptio+"<br><br>";$("#infoLayerGrantLots").html(t)}function buildDutchGrantPopUpInfo(r){var t="";if(void 0===dutch_grant_lots_info[r.Lot])t="<h3>Dutch Grant</h3><hr>"+r.name+"<br><b>Dutch Grant Lot:</b> <a href='https://encyclopedia.nahc-mapping.org/grantlot/"+r.Lot+"' target='_blank'>"+r.Lot+"</a><br><br><b>Start:</b> <i>"+r.day1+" "+r.year1+"</i><br><b>End:</b> <i>"+r.day2+" "+r.year2+"</i><br><br><b>Description (partial):</b><br>"+r.descriptio+"<br><br>";else{var n="";if(dutch_grant_lots_info[r.Lot].builds.length>0)for(let t=0;t<dutch_grant_lots_info[r.Lot].builds.length;t++)n+="<img src='https://encyclopedia.nahc-mapping.org"+dutch_grant_lots_info[r.Lot].builds[t]+"'  width='258' ><br><br>";t="<h3>Dutch Grant</h3><hr><br><b>Dutch Grant Lot:</b> <a href='https://encyclopedia.nahc-mapping.org/grantlot/"+r.Lot+"' target='_blank'>"+r.Lot+"</a><br><br><b>To Party:</b>"+(dutch_grant_lots_info[r.Lot].to_party.length>0?"<br>":"")+"<i>"+dutch_grant_lots_info[r.Lot].to_party+"</i><br><br><b>From Party:</b>"+(dutch_grant_lots_info[r.Lot].from_party.length>0?"<br>":"")+"<i>"+dutch_grant_lots_info[r.Lot].from_party+"</i><br><br><b>Start:</b> <i>"+dutch_grant_lots_info[r.Lot].start+"</i><br><b>End:</b> <i>"+dutch_grant_lots_info[r.Lot].end+"</i><br><br><b>Description:</b><br><i>"+dutch_grant_lots_info[r.Lot].descr+"</i><br><br>"+n}$("#infoLayerDutchGrants").html(t)}function buildGravesendPopUpInfo(r){var t;t="<h3>Boundaries</h3><hr><b>"+r.Name+"</b><br><br><b>Date:</b> <i>"+r["Date Text"]+"</i><br><br><i>"+r["Groups Dyl"]+"</i><br><br>",$("#infoLayerGravesend").html(t)}function buildNativeGroupPopUpInfo(r){var t="<h3>Long Island Tribes</h3><hr>";void 0===taxlot_event_entities_info[r.nid]||""==r.nid?t+="<b>"+r.name+"</b>":t+="<b>"+(taxlot_event_entities_info[r.nid].name_html.length>0?taxlot_event_entities_info[r.nid].name_html:r.name)+"</b><br><br><b>Description:</b><br>"+taxlot_event_entities_info[r.nid].descr+"<br><br>",t+="<br><br>",console.log(r),$("#infoLayerNativeGroups").html(t)}function buildKarlPopUpInfo(r){var t="",n=r.node_id.replace(/\/node\//g,"");t="<h3>Long Island Towns</h3><hr>",void 0===settlements_info[n]?t+="<b>"+r.enc_name+"</b>":t+="<b>"+settlements_info[n].name+"</b><br><b>Date:</b> <i>"+settlements_info[n].date+"</i><br><br><b>Description:</b><br><i>"+settlements_info[n].descr+"</i>",t+="<br>",console.log(r),$("#infoLayerKarl").html(t)}function buildFarmsPopUpInfo(r){var t;t="<h3>Original Grants &amp; Farms</h3><hr><br><b>To:</b> <i>"+r.To+"</i><br><b>Date:</b> <i>"+r.Date+"</i><br><br>",$("#infoLayerFarms").html(t)}function buildCurrLotsPopUpInfo(r){var t="<h3>Current Lot</h3><hr><b>Owner:</b><br>"+r.OwnerName+"<br><br><b>Address:</b><br>"+r.Address+"<br><br><b>Lot:</b><br>"+r.BBL+"<br><br>";$("#infoLayerCurrLots").html(t)}