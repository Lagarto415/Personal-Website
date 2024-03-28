import{_ as u,c as _,a as e,t as n,e as a,o as h}from"./index-DnCjaTHu.js";const m="/assets/game_icon-BVm3IGXD.png",p="/assets/newhabitat-BrF_Kl_q.png",d="/assets/mineral-GjxhyQWB.png",v="/assets/upgrademineral-BspGMiPQ.png",b="/assets/upgradewater-DMGYaSyW.png",c="/assets/x-5-d0ibC1.png",g="/assets/mine-C5SjLCKQ.png",f="/assets/waterpump-CAZvkPsv.png",y={data(){return{hour:0,minute:0,current_minerals:50,current_water:0,current_gold:0,current_citizens:1,minerals_level:0,water_level:0,gold_level:0,habitats:1,mineralsPS:0,waterPS:0,goldPS:0,citizensPS:0,workers:[{job:"mine",amount:0,max:0},{job:"water",amount:0,max:0},{job:"child",amount:0,max:0}],workerEff:[{lvl:1,eff:1},{lvl:2,eff:1.1},{lvl:3,eff:1.2},{lvl:4,eff:1.3},{lvl:5,eff:1.4},{lvl:6,eff:1.5}],mineral_upgradeprice:[{lvl:1,price:50,ps:1},{lvl:2,price:100,ps:2},{lvl:3,price:200,ps:3}],water_upgradeprice:[{lvl:1,price:200,ps:.5},{lvl:2,price:400,ps:1},{lvl:3,price:800,ps:2}],habitat_price:[{lvl:1,price:500},{lvl:2,price:1e3},{lvl:3,price:2e3}],AllEvents:[{name:"Piraten",option1:"Verteidigen",option2:"Verhandeln",chance:.3,description:"Es sind Piraten lul"},{name:"Aliens",option1:"Verteidigen",option2:"Verhandeln",chance:.6,description:"Ein großes, dir fremdes Schiff landet in der Nähe deines Dorfes. Es scheint nach etwas zu suchen, wobei es sich deinem Dorf nähert."},{name:"Meteoren",option1:"Gebäude verstärken",option2:"Dorf evakuieren",chance:.9,description:"Im Himmel erscheinen viele helle Punkte. Durch dein Training weißt du: das kann nur eines heißen: Meteoren!"}],currentEventName:"",currentEventDescription:"",currentEventOption1:"",currentEventOption2:""}},methods:{gameloop(){this.current_minerals+=this.mineralsPS,this.current_water+=this.waterPS,this.current_gold+=this.goldPS,this.citizen+=this.citizensPS,Math.random()>.9&&this.eventgeneration()},eventgeneration(){this.AllEvents.length===0&&console.log("No events loaded"),this.eventhandler(Math.floor(Math.random()*this.AllEvents.length))},saveGameState(){let i={current_minerals:this.current_minerals,current_water:this.current_water,current_gold:this.current_gold,current_citizens:this.current_citizens,minerals_level:this.minerals_level,water_level:this.water_level,gold_level:this.gold_level,habitats:this.habitats};document.cookie=`gamestate=${JSON.stringify(i)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`},loadGameState(){let i=document.cookie.split(";").find(t=>t.trim().startsWith("gamestate="));if(i){const t=i.split("=")[1],l=JSON.parse(t);this.current_minerals=l.current_minerals,this.current_water=l.current_water,this.current_gold=l.current_gold,this.current_citizens=l.current_citizens,this.minerals_level=l.minerals_level,this.water_level=l.water_level,this.gold_level=l.gold_level,this.habitats=l.habitats}},pauseInterval(){clearInterval(this.intervalId),console.log("interval paused")},resumeInterval(){this.intervalId=setInterval(this.gameloop,1e3),console.log("interval resumed")},upgrade(i){console.log(this.current_minerals),console.log(this.mineral_upgradeprice[this.minerals_level].price),i=="minerals"?this.current_minerals>=this.mineral_upgradeprice[this.minerals_level].price?(this.current_minerals-=this.mineral_upgradeprice[this.minerals_level].price,this.minerals_level++,this.mineralsPS=this.mineral_upgradeprice[this.minerals_level-1].ps,console.log("minerals upgraded")):console.log("Not enough minerals"):i=="water"?this.current_minerals>=this.water_upgradeprice[this.water_level].price?(this.current_minerals-=this.water_upgradeprice[this.water_level].price,this.water_level++,console.log("water upgraded")):console.log("Not enough minerals"):i=="gold"?this.current_minerals>=this.gold_upgradeprice[this.gold_level].price?(this.current_minerals-=this.gold_upgradeprice[this.gold_level].price,this.gold_level++,console.log("gold upgraded")):console.log("Not enough minerals"):i=="habitats"?this.current_minerals>=this.habitat_price[this.habitats-1].price?(this.current_minerals-=this.habitat_price[this.habitats-1].price,this.habitats++,console.log("habitats upgraded")):console.log("Not enough minerals"):console.log("error in upgrade function: Not a valid object")},resetGame(){document.cookie="gameState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.current_minerals=50,this.current_water=0,this.current_gold=0,this.current_citizens=1,this.minerals_level=0,this.water_level=0,this.gold_level=0,this.habitats=1},buildmenu(i){i=="open"?(document.getElementById("buildmenu").style.visibility="visible",document.getElementById("build_button").style.visibility="hidden",document.getElementById("expedition_button").style.visibility="hidden",document.getElementById("settings_button").style.visibility="hidden"):i=="close"?(document.getElementById("buildmenu").style.visibility="hidden",document.getElementById("build_button").style.visibility="visible",document.getElementById("expedition_button").style.visibility="visible",document.getElementById("settings_button").style.visibility="visible"):console.log("error in buildmenu function: Not a valid action")},buildable(i,t){let l;t=="mine"&&(l=document.getElementById("buildable_mine"),this.buildmenu("close")),t=="water"&&(l=document.getElementById("buildable_water"),this.buildmenu("close")),i=="open"?(l.style.visibility="visible",document.getElementById("build_button").style.visibility="hidden",document.getElementById("expedition_button").style.visibility="hidden",document.getElementById("settings_button").style.visibility="hidden"):i=="close"?(l.style.visibility="hidden",document.getElementById("build_button").style.visibility="visible",document.getElementById("expedition_button").style.visibility="visible",document.getElementById("settings_button").style.visibility="visible"):console.log("error in buildable function: Not a valid action")},eventmenu(i){i=="open"?(this.pauseInterval(),document.getElementById("eventpopup").style.visibility="visible",document.getElementById("build_button").style.visibility="hidden",document.getElementById("expedition_button").style.visibility="hidden",document.getElementById("settings_button").style.visibility="hidden"):i=="close"?(document.getElementById("eventpopup").style.visibility="hidden",document.getElementById("build_button").style.visibility="visible",document.getElementById("expedition_button").style.visibility="visible",document.getElementById("settings_button").style.visibility="visible",this.resumeInterval()):console.log("error in eventmenu function: Not a valid action")},wait(i){return new Promise(t=>setTimeout(t,i))},eventhandler(i){const t=this.AllEvents[i];console.log("Event:",t.name),t.option2?(console.log("Option 1:",t.option1),console.log("Option 2:",t.option2),this.eventmenu("open"),this.currentEventName=t.name,this.currentEventDescription=t.description,this.currentEventOption1="Option1: "+t.option1,this.currentEventOption2="Option2: "+t.option2,this.$refs.option1_button.addEventListener("click",this.executeOption1),this.$refs.option2_button.addEventListener("click",this.executeOption2)):this.executeEffect(t.option1,t.chance)},executeEffect(i,t){switch(i){case"Verteidigen":{console.log(t);break}default:console.log("error in executeEffect function: Not a valid effect")}}},mounted(){this.loadGameState(),this.minerals_level=this.minerals_level||0,this.water_level=this.water_level||0,this.current_citizens=this.current_citizens||0,this.workers[0].max=this.minerals_level,this.workers[1].max=this.water_level,this.workers[2].max=this.current_citizens,this.intervalId=setInterval(this.gameloop,1e3)}},w={class:"container"},E={class:"header"},I=e("div",{class:"logo"},[e("img",{src:m})],-1),k={class:"ressource"},B={id:"minerals"},x=e("span",{id:"mineral_income"},null,-1),S={class:"ressource"},z={id:"water"},N=e("span",{id:"water_income"},null,-1),P={class:"ressource"},C={id:"gold"},O=e("span",{id:"gold_income"},null,-1),A={class:"ressource"},D={id:"citizens"},G=e("span",{id:"citizen_income"},null,-1),M={class:"main"},V={class:"buildmenu",id:"buildmenu"},j={class:"buildimages"},W={class:"builditem"},T=e("img",{src:p},null,-1),L=[T],J=e("img",{src:d},null,-1),Q={id:"price_habitats"},F={class:"builditem"},K=e("img",{src:v},null,-1),U=[K],q=e("img",{src:d},null,-1),H={id:"price_minerals"},X={class:"builditem"},Y=e("img",{src:b},null,-1),Z=[Y],R=e("img",{src:d},null,-1),$={id:"price_water"},ee={class:"buildmenu_close"},te=e("img",{src:c},null,-1),ie=[te],se={class:"eventpopup",id:"eventpopup",ref:"eventpopup"},ne={class:"event_name"},le={id:"eventname"},oe={id:"event_description"},re={class:"event_options"},de={ref:"option1_button"},ce={ref:"option2_button"},ae={class:"buildable",id:"buildable_mine"},ue={class:"buildable_close"},_e=e("img",{src:c},null,-1),he=[_e],me=e("div",{class:"buildable_headline"},[e("p",{id:"b_headline"},"Mine")],-1),pe=e("div",{class:"buildable_image"},[e("img",{src:g})],-1),ve={class:"buildable_stats"},be=e("p",null,[a("Effizienz: "),e("span",null,"0")],-1),ge={class:"buildable_actions"},fe={class:"buildable_actions_upgrade"},ye=e("button",null,"Effizienz steigern",-1),we=e("div",{class:"buildable_actions_upgrade"},[e("button",null,"Arbeiter zuweisen"),e("button",null,"Arbeiter entfernen")],-1),Ee={class:"buildable",id:"buildable_water"},Ie={class:"buildable_close"},ke=e("img",{src:c},null,-1),Be=[ke],xe=e("div",{class:"buildable_headline"},[e("p",{id:"b_headline"},"Wasserpumpe")],-1),Se=e("div",{class:"buildable_image"},[e("img",{src:f})],-1),ze={class:"buildable_stats"},Ne=e("p",null,[a("Arbeiter: "),e("span",null,"0 / 0")],-1),Pe={class:"buildable_actions"},Ce={class:"buildable_actions_upgrade"},Oe=e("button",null,"Effizienz steigern",-1),Ae=e("div",{class:"buildable_actions_upgrade"},[e("button",null,"Arbeiter zuweisen"),e("button",null,"Arbeiter entfernen")],-1),De={class:"stats"},Ge={class:"buttons"},Me=e("button",{id:"expedition_button"},"Expedition",-1),Ve=e("button",{id:"settings_button"},"Einstellungen",-1);function je(i,t,l,We,s,o){return h(),_("div",w,[e("div",E,[I,e("div",k,[e("p",null,[e("span",B,n(s.current_minerals)+" Mineralien",1),x])]),e("div",S,[e("p",null,[e("span",z,n(s.current_water)+" Wasser",1),N])]),e("div",P,[e("p",null,[e("span",C,n(s.current_gold)+" Gold",1),O])]),e("div",A,[e("p",null,[e("span",D,n(s.current_citizens)+" Einwohner",1),G])])]),e("div",M,[e("div",V,[e("div",j,[e("div",W,[e("a",{onClick:t[0]||(t[0]=r=>o.upgrade("habitats")),id:"buildobj"},L),e("p",null,[J,e("span",Q,n(s.habitat_price[s.habitats-1].price),1)])]),e("div",F,[e("a",{onClick:t[1]||(t[1]=r=>o.buildable("open","mine")),id:"buildobj"},U),e("p",null,[q,e("span",H,n(s.mineral_upgradeprice[s.minerals_level].price),1)])]),e("div",X,[e("a",{onClick:t[2]||(t[2]=r=>o.buildable("open","water")),id:"buildobj"},Z),e("p",null,[R,e("span",$,n(s.water_upgradeprice[s.water_level].price),1)])])]),e("div",ee,[e("a",{onClick:t[3]||(t[3]=r=>o.buildmenu("close"))},ie)])]),e("div",se,[e("div",ne,[e("p",le,n(s.currentEventName),1)]),e("div",null,[e("p",oe,n(s.currentEventDescription),1)]),e("div",null,[e("p",null,n(s.currentEventOption1),1),e("p",null,n(s.currentEventOption2),1)]),e("div",re,[e("button",de,"Option 1",512),e("button",{onClick:t[4]||(t[4]=r=>o.eventmenu("close"))},"Ignorieren"),e("button",ce,"Option 2",512)])],512),e("div",ae,[e("div",ue,[e("a",{onClick:t[5]||(t[5]=r=>o.buildable("close","mine"))},he)]),me,pe,e("div",ve,[e("p",null,"Mineralien pro Sekunde: "+n(s.mineralsPS),1),be,e("p",null,"Arbeiter: "+n(s.workers[0].amount)+" / "+n(s.workers[0].max),1)]),e("div",ge,[e("div",fe,[e("button",{onClick:t[6]||(t[6]=r=>o.upgrade("minerals"))},"Verbessern"),ye]),we])]),e("div",Ee,[e("div",Ie,[e("a",{onClick:t[7]||(t[7]=r=>o.buildable("close","water"))},Be)]),xe,Se,e("div",ze,[e("p",null,"Wasser pro Sekunde: "+n(s.waterPS),1),e("p",null,"Effizienz: "+n(s.workerEff[s.workers[2].amount].eff),1),Ne]),e("div",Pe,[e("div",Ce,[e("button",{onClick:t[8]||(t[8]=r=>o.upgrade("water"))},"Verbessern"),Oe]),Ae])]),e("div",De,[e("p",null,"Unterkünfte: "+n(s.habitats),1),e("p",null,"Mineralmine Level: "+n(s.minerals_level),1),e("p",null,"Wasserpumpen: "+n(s.water_level),1)]),e("div",Ge,[Me,e("button",{id:"build_button",onClick:t[9]||(t[9]=r=>o.buildmenu("open"))},"Bauen"),Ve])])])}const Le=u(y,[["render",je]]);export{Le as default};
