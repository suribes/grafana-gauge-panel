/*! For license information please see module.js.LICENSE.txt */
define(["d3","lodash","app/core/utils/kbn","app/plugins/sdk","jquery","app/core/time_series2"],(function(e,t,a,i,n,l){return function(e){var t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=8)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t){e.exports=l},,,function(e,t,a){"use strict";a.r(t);var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};var n=a(3),l=a(1),o=a.n(l),s=a(4),r=a.n(s),g=a(2),h=a.n(g),d=a(5),u=a.n(d),p=a(0),c={fontSizes:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70],fontTypes:["Arial","Avant Garde","Bookman","Consolas","Courier","Courier New","Garamond","Helvetica","Open Sans","Palatino","Times","Times New Roman","Verdana"],unitFormats:h.a.getUnitFormats(),operatorNameOptions:["min","max","avg","current","total","name"],valueMaps:[{value:"null",op:"=",text:"N/A"}],mappingTypes:[{name:"value to text",value:1},{name:"range to text",value:2}],rangeMaps:[{from:"null",to:"null",text:"N/A"}],tickMaps:[],mappingType:1,thresholds:"",colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],decimals:2,format:"none",operatorName:"avg",gauge:{minValue:0,maxValue:100,tickSpaceMinVal:1,tickSpaceMajVal:10,gaugeUnits:"",gaugeRadius:0,pivotRadius:.1,padding:.05,edgeWidth:.05,tickEdgeGap:.05,tickLengthMaj:.15,tickLengthMin:.05,needleTickGap:.05,needleLengthNeg:.2,ticknessGaugeBasis:200,needleWidth:5,tickWidthMaj:5,tickWidthMin:1,unitsLabelFontSize:22,labelFontSize:18,zeroTickAngle:60,maxTickAngle:300,zeroNeedleAngle:40,maxNeedleAngle:320,outerEdgeCol:"#0099CC",innerCol:"#fff",pivotCol:"#999",needleCol:"#0099CC",unitsLabelCol:"#000",tickLabelCol:"#000",tickColMaj:"#0099CC",tickColMin:"#000",tickFont:"Open Sans",unitsFont:"Open Sans",valueYOffset:0,showThresholdOnGauge:!1,showThresholdColorOnValue:!1,showLowerThresholdRange:!1,showMiddleThresholdRange:!0,showUpperThresholdRange:!0,animateNeedleValueTransition:!0,animateNeedleValueTransitionSpeed:100}},v=function(){function e(e,t){var a=this;this.svg=e,this.opt=this.initOptDefaults(t),this.needleLengthPos=t.gaugeRadius-t.padding-t.edgeWidth-t.tickEdgeGap-t.tickLengthMaj-t.needleTickGap,this.needlePathLength=t.needleLengthNeg+this.needleLengthPos,this.needlePathStart=-1*t.needleLengthNeg,this.tickStartMaj=t.gaugeRadius-t.padding-t.edgeWidth-t.tickEdgeGap-t.tickLengthMaj,this.tickStartMin=t.gaugeRadius-t.padding-t.edgeWidth-t.tickEdgeGap-t.tickLengthMin,this.labelStart=this.tickStartMaj-t.labelFontSize,this.innerEdgeRadius=t.gaugeRadius-t.padding-t.edgeWidth,this.outerEdgeRadius=t.gaugeRadius-t.padding,this.originX=t.gaugeRadius,this.originY=t.gaugeRadius,this.valueScale=p.scaleLinear().domain([this.opt.minVal,this.opt.maxVal]).range([this.opt.zeroTickAngle,this.opt.maxTickAngle]);var i=0;this.tickAnglesMaj=[],this.tickAnglesMin=[],this.tickSpacingMajDeg=this.valueScale(this.opt.tickSpaceMajVal)-this.valueScale(0),this.tickSpacingMinDeg=this.valueScale(this.opt.tickSpaceMinVal)-this.valueScale(0);for(var n=this.opt.zeroTickAngle;n<=this.opt.maxTickAngle;n+=this.tickSpacingMajDeg){this.opt.zeroTickAngle+this.tickSpacingMajDeg*i-this.opt.zeroTickAngle<360&&this.tickAnglesMaj.push(t.zeroTickAngle+this.tickSpacingMajDeg*i),i++}i=0;for(var l=function(e){var n=0;o.tickAnglesMaj.forEach((function(e){t.zeroTickAngle+a.tickSpacingMinDeg*i===e&&(n=1)})),0===n&&o.tickAnglesMin.push(t.zeroTickAngle+o.tickSpacingMinDeg*i),i++},o=this,s=t.zeroTickAngle;s<=t.maxTickAngle;s+=this.tickSpacingMinDeg)l();i=0,this.tickLabelText=[];for(var r=this.opt.zeroTickAngle;r<=this.opt.maxTickAngle;r+=this.tickSpacingMajDeg){var g=this.opt.minVal+this.opt.tickSpaceMajVal*i,h=this.opt.tickSpaceMajVal.toString().split("."),d=g;h.length>1&&(d=Number(g).toFixed(h[1].length));var u=parseFloat(d);for(n=0;n<this.opt.tickMaps.length;n++){var c=this.opt.tickMaps[n];if(parseFloat(c.value)===u){d=c.text;break}}this.tickLabelText.push(d),i++}if(this.circleGroup=this.createCircleGroup(),this.opt.showThresholdOnGauge&&this.opt.thresholds.length>0){var v=this.opt.thresholds.split(",");this.opt.showLowerThresholdRange&&this.drawBand(this.opt.minVal,parseFloat(v[0]),this.opt.thresholdColors[0]),this.opt.showMiddleThresholdRange&&this.drawBand(parseFloat(v[0]),parseFloat(v[1]),this.opt.thresholdColors[1]),this.opt.showUpperThresholdRange&&this.drawBand(parseFloat(v[1]),this.opt.maxVal,this.opt.thresholdColors[2])}var f=this.tickCalcMaj(),k=this.tickCalcMin(),m=this.svg.append("svg:g").attr("id","tickMarks"),M=m.append("svg:g").attr("id","minorTickMarks"),T=m.append("svg:g").attr("id","majorTickMarks");M.selectAll("path").data(this.tickAnglesMin).enter().append("path").attr("d",k).style("stroke",this.opt.tickColMin).style("stroke-width",this.opt.tickWidthMin+"px"),T.selectAll("path").data(this.tickAnglesMaj).enter().append("path").attr("d",f).style("stroke",this.opt.tickColMaj).style("stroke-width",this.opt.tickWidthMaj+"px"),this.svg.append("svg:g").attr("id","tickLabels").selectAll("text").data(this.tickAnglesMaj).enter().append("text").attr("x",(function(e,t){return a.labelXcalc(e,t)})).attr("y",(function(e,t){return a.labelYcalc(e,t)})).attr("font-size",this.opt.labelFontSize).attr("text-anchor","middle").style("fill",this.opt.tickLabelCol).style("font-weight","bold").attr("font-family",this.opt.tickFont).text((function(e,t){return a.tickLabelText[t]})),this.valueLabelParent=e.append("svg:g").attr("id","valueLabels"),this.valueLabel=this.valueLabelParent.selectAll("text").data([0]).enter().append("text").attr("x",(function(e,t){return a.labelXcalc(e,t)})).attr("y",(function(e,t){var i=a.labelYcalc(e,t);return i+=a.opt.valueYOffset})).attr("font-size",this.opt.unitsLabelFontSize).attr("text-anchor","middle").style("fill",this.opt.unitsLabelCol).style("font-weight","bold").attr("font-family",this.opt.unitsFont).text(this.opt.needleValText);var S=[this.opt.zeroNeedleAngle],x=this.needleCalc();this.needleGroup=this.svg.append("svg:g").attr("id","needle");var b=this.needleGroup.selectAll("path").data(S).enter().append("path").attr("d",x).style("stroke",this.opt.needleCol).style("stroke-width",this.opt.needleWidth+"px"),V=0;this.opt.animateNeedleValueTransition&&(V=this.opt.animateNeedleValueTransitionSpeed),b.transition().duration(V).ease(p.easeQuadIn).attrTween("transform",(function(e,t,i){var n=a.valueScale(a.opt.needleVal);n>a.opt.maxTickAngle&&(n=a.opt.maxNeedleAngle),n<a.opt.zeroTickAngle&&(n=a.opt.zeroNeedleAngle);var l=a.originX+","+a.originY,o=n-a.opt.zeroNeedleAngle;return p.interpolateString("rotate(0,"+l+")","rotate("+o+","+l+")")})),this.valueLabelParent.selectAll("text").text(this.opt.needleValText)}return e.prototype.updateGauge=function(e,t,a){var i=this;void 0===e&&(e=this.opt.minVal);var n=this.needleGroup.selectAll("path"),l=this.opt.needleVal,o=0;this.opt.animateNeedleValueTransition&&(o=this.opt.animateNeedleValueTransitionSpeed),n.transition().duration(o).ease(p.easeQuadIn).attrTween("transform",(function(t,a,n){var o=i.valueScale(l)-i.opt.zeroNeedleAngle,s=i.valueScale(e)-i.opt.zeroNeedleAngle;o+i.opt.zeroNeedleAngle>i.opt.maxTickAngle&&(o=i.opt.maxNeedleAngle-i.opt.zeroNeedleAngle),o+i.opt.zeroNeedleAngle<i.opt.zeroTickAngle&&(o=0),s+i.opt.zeroNeedleAngle>i.opt.maxTickAngle&&(s=i.opt.maxNeedleAngle-i.opt.zeroNeedleAngle),s+i.opt.zeroNeedleAngle<i.opt.zeroTickAngle&&(s=0);var r=i.originX+","+i.originY;return p.interpolateString("rotate("+o+","+r+")","rotate("+s+","+r+")")}));var s=this.opt.unitsLabelCol;if(this.opt.showThresholdColorOnValue){var r=this.opt.thresholds.split(",");e<parseFloat(r[0])&&(s=this.opt.thresholdColors[0]),e>parseFloat(r[0])&&e<=parseFloat(r[1])&&(s=this.opt.thresholdColors[1]),e>=parseFloat(r[1])&&(s=this.opt.thresholdColors[2])}this.valueLabel.style("fill",s),this.valueLabelParent.selectAll("text").text(t),this.opt.needleVal=e},e.prototype.initOptDefaults=function(e){return void 0===e.gaugeRadius&&(e.gaugeRadius=200),void 0===e.minVal&&(e.minVal=0),void 0===e.maxVal&&(e.maxVal=100),void 0===e.tickSpaceMinVal&&(e.tickSpaceMinVal=1),void 0===e.tickSpaceMajVal&&(e.tickSpaceMajVal=10),void 0===e.needleVal&&(e.needleVal=60),void 0===e.needleValText&&(e.needleValText="60"),void 0===e.gaugeUnits&&(e.gaugeUnits="%"),void 0===e.padding&&(e.padding=.05),void 0===e.edgeWidth&&(e.edgeWidth=.05),void 0===e.tickEdgeGap&&(e.tickEdgeGap=.05),void 0===e.tickLengthMaj&&(e.tickLengthMaj=.15),void 0===e.tickLengthMin&&(e.tickLengthMin=.05),void 0===e.needleTickGap&&(e.needleTickGap=.05),void 0===e.needleLengthNeg&&(e.needleLengthNeg=.2),void 0===e.pivotRadius&&(e.pivotRadius=.1),void 0===e.ticknessGaugeBasis&&(e.ticknessGaugeBasis=200),void 0===e.needleWidth&&(e.needleWidth=5),void 0===e.tickWidthMaj&&(e.tickWidthMaj=3),void 0===e.tickWidthMin&&(e.tickWidthMin=1),void 0===e.labelFontSize&&(e.labelFontSize=18),void 0===e.unitsLabelFontSize&&(e.unitsLabelFontSize=22),void 0===e.zeroTickAngle&&(e.zeroTickAngle=60),void 0===e.maxTickAngle&&(e.maxTickAngle=300),void 0===e.zeroNeedleAngle&&(e.zeroNeedleAngle=40),void 0===e.maxNeedleAngle&&(e.maxNeedleAngle=320),void 0===e.tickColMaj&&(e.tickColMaj="#0099CC"),void 0===e.tickColMin&&(e.tickColMin="#000"),void 0===e.outerEdgeCol&&(e.outerEdgeCol="#0099CC"),void 0===e.pivotCol&&(e.pivotCol="#999"),void 0===e.innerCol&&(e.innerCol="#fff"),void 0===e.unitsLabelCol&&(e.unitsLabelCol="#000"),void 0===e.tickLabelCol&&(e.tickLabelCol="#000"),void 0===e.needleCol&&(e.needleCol="#0099CC"),this.defaultFonts='"Helvetica Neue", Helvetica, Arial, sans-serif',void 0===e.tickFont&&(e.tickFont=this.defaultFonts),void 0===e.unitsFont&&(e.unitsFont=this.defaultFonts),void 0===e.valueYOffset&&(e.valueYOffset=0),void 0===e.showThresholdOnGauge&&(e.showThresholdOnGauge=!1),void 0===e.showThresholdColorOnValue&&(e.showThresholdColorOnValue=!1),void 0===e.showLowerThresholdRange&&(e.showLowerThresholdRange=!1),void 0===e.showMiddleThresholdRange&&(e.showMiddleThresholdRange=!0),void 0===e.showUpperThresholdRange&&(e.showUpperThresholdRange=!0),void 0===e.thresholdColors&&(e.thresholdColors=["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"]),void 0===e.animateNeedleValueTransition&&(e.animateNeedleValueTransition=!0),void 0===e.animateNeedleValueTransitionSpeed&&(e.animateNeedleValueTransitionSpeed=100),void 0===e.tickMaps&&(e.tickMaps=[]),e.padding=e.padding*e.gaugeRadius,e.edgeWidth=e.edgeWidth*e.gaugeRadius,e.tickEdgeGap=e.tickEdgeGap*e.gaugeRadius,e.tickLengthMaj=e.tickLengthMaj*e.gaugeRadius,e.tickLengthMin=e.tickLengthMin*e.gaugeRadius,e.needleTickGap=e.needleTickGap*e.gaugeRadius,e.needleLengthNeg=e.needleLengthNeg*e.gaugeRadius,e.pivotRadius=e.pivotRadius*e.gaugeRadius,e.needleWidth=e.needleWidth*(e.gaugeRadius/e.ticknessGaugeBasis),e.tickWidthMaj=e.tickWidthMaj*(e.gaugeRadius/e.ticknessGaugeBasis),e.tickWidthMin=e.tickWidthMin*(e.gaugeRadius/e.ticknessGaugeBasis),e.labelFontSize=e.labelFontSize*(e.gaugeRadius/e.ticknessGaugeBasis),e.unitsLabelFontSize=e.unitsLabelFontSize*(e.gaugeRadius/e.ticknessGaugeBasis),e.labelFontSize<6&&(e.labelFontSize=0),e},e.prototype.drawBand=function(e,t,a){var i=this;0>=t-e||this.circleGroup.append("svg:path").style("fill",a).attr("d",p.arc().startAngle(this.valueToRadians(e)).endAngle(this.valueToRadians(t)).innerRadius(.7*this.opt.gaugeRadius).outerRadius(.85*this.opt.gaugeRadius)).attr("transform",(function(){return"translate("+i.originX+", "+i.originY+") rotate("+i.opt.maxTickAngle+")"}))},e.prototype.createCircleGroup=function(){var e=this.svg.append("svg:g").attr("id","circles");return e.append("svg:circle").attr("cx",this.originX).attr("cy",this.originY).attr("r",this.outerEdgeRadius).style("fill",this.opt.outerEdgeCol).style("stroke","none"),e.append("svg:circle").attr("cx",this.originX).attr("cy",this.originY).attr("r",this.innerEdgeRadius).style("fill",this.opt.innerCol).style("stroke","none"),e.append("svg:circle").attr("cx",this.originX).attr("cy",this.originY).attr("r",this.opt.pivotRadius).style("fill",this.opt.pivotCol).style("stroke","none"),e},e.prototype.valueToDegrees=function(e){var t=this.opt.maxTickAngle-this.opt.zeroTickAngle,a=this.opt.maxVal-this.opt.minVal;return e/a*t-(this.opt.minVal/a*t+this.opt.zeroTickAngle)},e.prototype.valueToRadians=function(e){return this.valueToDegrees(e)*Math.PI/180},e.prototype.tickCalcMaj=function(){var e=this;return function(t,a){var i=f(t+90),n=e.originY+e.tickStartMaj*Math.sin(i),l=e.originY+(e.tickStartMaj+e.opt.tickLengthMaj)*Math.sin(i),o=e.originX+e.tickStartMaj*Math.cos(i),s=e.originX+(e.tickStartMaj+e.opt.tickLengthMaj)*Math.cos(i);return p.line()([[o,n],[s,l]])}},e.prototype.tickCalcMin=function(){var e=this;return function(t,a){var i=f(t+90),n=e.originY+e.tickStartMin*Math.sin(i),l=e.originY+(e.tickStartMin+e.opt.tickLengthMin)*Math.sin(i),o=e.originX+e.tickStartMin*Math.cos(i),s=e.originX+(e.tickStartMin+e.opt.tickLengthMin)*Math.cos(i);return p.line()([[o,n],[s,l]])}},e.prototype.needleCalc=function(){var e=this;return function(t,a){var i=f(t+90),n=e.originY+e.needlePathStart*Math.sin(i),l=e.originY+(e.needlePathStart+e.needlePathLength)*Math.sin(i),o=e.originX+e.needlePathStart*Math.cos(i),s=e.originX+(e.needlePathStart+e.needlePathLength)*Math.cos(i);return p.line()([[o,n],[s,l]])}},e.prototype.labelXcalc=function(e,t){var a=f(e+90),i=this.opt.labelFontSize/(this.tickLabelText[t].toString().length/2);return this.originX+(this.labelStart-i)*Math.cos(a)},e.prototype.labelYcalc=function(e,t){var a=f(e+90);return this.originY+this.labelStart*Math.sin(a)+this.opt.labelFontSize/2},e}();function f(e){return e*(Math.PI/180)}var k=function(e){function t(t,a,i){var n=e.call(this,t,a)||this;return o.a.defaults(n.panel,c),n.panel.gaugeDivId="d3gauge_svg_"+n.panel.id,n.containerDivId="container_"+n.panel.gaugeDivId,n.scoperef=t,n.alertSrvRef=i,n.initialized=!1,n.panelContainer=null,n.panel.svgContainer=null,n.svg=null,n.panelWidth=null,n.panelHeight=null,n.gaugeObject=null,n.data={value:0,valueFormatted:0,valueRounded:0},n.series=[],n.events.on("init-edit-mode",n.onInitEditMode.bind(n)),n.events.on("data-received",n.onDataReceived.bind(n)),n.events.on("data-error",n.onDataError.bind(n)),n.events.on("data-snapshot-load",n.onDataReceived.bind(n)),n}return t.$inject=["$scope","$injector","alertSrv"],function(e,t){function a(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.onInitEditMode=function(){var e="public/plugins/"+this.panel.type+"/",t=e+"partials/editor.options.html";this.addEditorTab("Options",t,2);var a=e+"partials/editor.radialmetrics.html";this.addEditorTab("Radial Metrics",a,3);var i=e+"partials/editor.thresholding.html";this.addEditorTab("Thresholding",i,4);var n=e+"partials/editor.mappings.html";this.addEditorTab("Value Mappings",n,5)},t.prototype.setContainer=function(e){this.panelContainer=e,this.panel.svgContainer=e},t.prototype.getPanelWidthBySpan=function(){var e=0;if(void 0===this.panel.span)e=this.panelContainer.offsetParent.clientWidth;else{var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0)/12;e=Math.round(this.panel.span*t)}return e},t.prototype.getPanelHeight=function(){var e=this.panel.height;if(void 0===e||""===e){if(e=String(this.height),void 0!==this.panel.span){var t=20;""!==this.panel.title&&(t=42),e=String(this.containerHeight-t)}void 0===e&&void 0===(e=this.row.height)&&(e="250")}return e=e.replace("px",""),parseInt(e,10)},t.prototype.renderGauge=function(){this.setValues(this.data),r()("#"+this.panel.gaugeDivId).length&&r()("#"+this.panel.gaugeDivId).remove(),this.panelWidth=this.getPanelWidthBySpan(),this.panelHeight=this.getPanelHeight();var e={top:0,right:0,bottom:0,left:0},t=parseFloat(this.panel.gauge.gaugeRadius);0===this.panel.gauge.gaugeRadius&&(t=this.panelHeight/2,this.panelWidth<this.panelHeight&&(t=this.panelWidth/2,void 0!==this.panel.span&&""!==this.panel.title&&(t-=5)));var a=Math.round(this.panelHeight-2*t)/2;e.top=a,void 0!==this.panel.span&&""!==this.panel.title&&a<7&&(e.top=7),e.bottom=a;var i=p.select(this.panel.svgContainer).append("svg").style("margin-top",e.top+"px").style("margin-bottom",e.bottom+"px").style("margin-left",e.left+"px").style("margin-right",e.right+"px").attr("width",Math.round(2*t)+"px").attr("height",Math.round(2*t)+"px").attr("id",this.panel.gaugeDivId).classed("svg-content-responsive",!0).append("g"),n={minVal:this.panel.gauge.minValue,maxVal:this.panel.gauge.maxValue,tickSpaceMinVal:this.panel.gauge.tickSpaceMinVal,tickSpaceMajVal:this.panel.gauge.tickSpaceMajVal,gaugeUnits:this.panel.format,gaugeRadius:t,pivotRadius:this.panel.gauge.pivotRadius,padding:this.panel.gauge.padding,edgeWidth:this.panel.gauge.edgeWidth,tickEdgeGap:this.panel.gauge.tickEdgeGap,tickLengthMaj:this.panel.gauge.tickLengthMaj,tickLengthMin:this.panel.gauge.tickLengthMin,needleTickGap:this.panel.gauge.needleTickGap,needleLengthNeg:this.panel.gauge.needleLengthNeg,ticknessGaugeBasis:this.panel.gauge.ticknessGaugeBasis,needleWidth:this.panel.gauge.needleWidth,tickWidthMaj:this.panel.gauge.tickWidthMaj,tickWidthMin:this.panel.gauge.tickWidthMin,unitsLabelFontSize:this.panel.gauge.unitsLabelFontSize,labelFontSize:this.panel.gauge.labelFontSize,zeroTickAngle:this.panel.gauge.zeroTickAngle,maxTickAngle:this.panel.gauge.maxTickAngle,zeroNeedleAngle:this.panel.gauge.zeroNeedleAngle,maxNeedleAngle:this.panel.gauge.maxNeedleAngle,outerEdgeCol:this.panel.gauge.outerEdgeCol,innerCol:this.panel.gauge.innerCol,pivotCol:this.panel.gauge.pivotCol,needleCol:this.panel.gauge.needleCol,unitsLabelCol:this.panel.gauge.unitsLabelCol,tickLabelCol:this.panel.gauge.tickLabelCol,tickColMaj:this.panel.gauge.tickColMaj,tickColMin:this.panel.gauge.tickColMin,thresholds:this.panel.thresholds,showThresholdColorOnValue:this.panel.gauge.showThresholdColorOnValue,showThresholdOnGauge:this.panel.gauge.showThresholdOnGauge,showLowerThresholdRange:this.panel.gauge.showLowerThresholdRange,showMiddleThresholdRange:this.panel.gauge.showMiddleThresholdRange,showUpperThresholdRange:this.panel.gauge.showUpperThresholdRange,thresholdColors:this.panel.colors,needleValText:this.getValueText(),needleVal:this.getValueRounded(),tickFont:this.panel.gauge.tickFont,unitsFont:this.panel.gauge.unitsFont,valueYOffset:this.panel.gauge.valueYOffset,animateNeedleValueTransition:this.panel.gauge.animateNeedleValueTransition,animateNeedleValueTransitionSpeed:this.panel.gauge.animateNeedleValueTransitionSpeed,tickMaps:this.panel.tickMaps};this.gaugeObject=new v(i,n),this.svg=i},t.prototype.removeValueMap=function(e){var t=o.a.indexOf(this.panel.valueMaps,e);this.panel.valueMaps.splice(t,1),this.render()},t.prototype.addValueMap=function(){this.panel.valueMaps.push({value:"",op:"=",text:""})},t.prototype.removeRangeMap=function(e){var t=o.a.indexOf(this.panel.rangeMaps,e);this.panel.rangeMaps.splice(t,1),this.render()},t.prototype.addRangeMap=function(){this.panel.rangeMaps.push({from:"",to:"",text:""})},t.prototype.addTickMap=function(){this.panel.tickMaps.push({value:0,text:""})},t.prototype.removeTickMap=function(e){var t=o.a.indexOf(this.panel.tickMaps,e);this.panel.tickMaps.splice(t,1),this.render()},t.prototype.validateLimitsMinValue=function(){this.panel.gauge.minValue>=this.panel.gauge.maxValue&&(this.panel.gauge.maxValue=this.panel.gauge.minValue+1,this.alertSrvRef.set("Problem!","Minimum Value cannot be equal to or greater than Max Value, auto-adjusting Max Value to Minimum+1 ("+this.panel.gauge.maxValue+")","warning",1e4)),this.render()},t.prototype.validateLimitsMaxValue=function(){this.panel.gauge.maxValue<=this.panel.gauge.minValue&&(this.panel.gauge.minValue=this.panel.gauge.maxValue-1,this.alertSrvRef.set("Problem!","Maximum Value cannot be equal to or less than Min Value, auto-adjusting Min Value to Maximum-1 ("+this.panel.gauge.minValue+")","warning",1e4)),this.render()},t.prototype.validateTransitionValue=function(){null===this.panel.gauge.animateNeedleValueTransitionSpeed&&(this.panel.gauge.animateNeedleValueTransitionSpeed=100),this.panel.gauge.animateNeedleValueTransitionSpeed<0&&(this.panel.gauge.animateNeedleValueTransitionSpeed=0),this.panel.gauge.animateNeedleValueTransitionSpeed>6e4&&(this.panel.gauge.animateNeedleValueTransitionSpeed=6e4),this.render()},t.prototype.validateGaugeTickDegreeValues=function(){(null===this.panel.gauge.zeroTickAngle||""===this.panel.gauge.zeroTickAngle||this.panel.gauge.zeroTickAngle<0||isNaN(this.panel.gauge.zeroTickAngle))&&(this.panel.gauge.zeroTickAngle=60,this.alertSrvRef.set("Problem!","Invalid Value for Zero Tick Angle, auto-setting to default of 60","error",1e4)),(null===this.panel.gauge.maxTickAngle||""===this.panel.gauge.maxTickAngle||this.panel.gauge.maxTickAngle<0||isNaN(this.panel.gauge.maxTickAngle))&&(this.panel.gauge.maxTickAngle=320,this.alertSrvRef.set("Problem!","Invalid Value for Max Tick Angle, auto-setting to default of 320","error",1e4));var e=this.panel.gauge.maxTickAngle-this.panel.gauge.zeroTickAngle;e>360&&(this.panel.gauge.zeroTickAngle=60,this.panel.gauge.maxTickAngle=320,this.alertSrvRef.set("Problem!","Gauge tick angle difference is larger than 360 degrees, auto-setting to default values","error",1e4)),e<0&&(this.panel.gauge.zeroTickAngle=60,this.panel.gauge.maxTickAngle=320,this.alertSrvRef.set("Problem!","Gauge tick angle difference is less than 0 degrees, auto-setting to default values","error",1e4)),this.render()},t.prototype.validateGaugeNeedleDegreeValues=function(){(null===this.panel.gauge.zeroNeedleAngle||""===this.panel.gauge.zeroNeedleAngle||this.panel.gauge.zeroNeedleAngle<0||isNaN(this.panel.gauge.zeroNeedleAngle))&&(this.panel.gauge.zeroNeedleAngle=60,this.alertSrvRef.set("Problem!","Invalid Value for Zero Needle Angle, auto-setting to default of 60","error",1e4)),(null===this.panel.gauge.maxNeedleAngle||""===this.panel.gauge.maxNeedleAngle||this.panel.gauge.maxNeedleAngle<0||isNaN(this.panel.gauge.maxNeedleAngle))&&(this.panel.gauge.maxNeedleAngle=320,this.alertSrvRef.set("Problem!","Invalid Value for Max Needle Angle, auto-setting to default of 320","error",1e4));var e=this.panel.gauge.maxNeedleAngle-this.panel.gauge.zeroNeedleAngle;e>360&&(this.panel.gauge.zeroNeedleAngle=60,this.panel.gauge.maxNeedleAngle=320,this.alertSrvRef.set("Problem!","Gauge needle angle difference is larger than 360 degrees, auto-setting to default values","error",1e4)),e<0&&(this.panel.gauge.zeroNeedleAngle=60,this.panel.gauge.maxNeedleAngle=320,this.alertSrvRef.set("Problem!","Gauge needle angle difference is less than 0 degrees, auto-setting to default values","error",1e4)),this.render()},t.prototype.validateRadialMetricValues=function(){(null===this.panel.gauge.tickSpaceMinVal||""===this.panel.gauge.tickSpaceMinVal||isNaN(this.panel.gauge.tickSpaceMinVal))&&(this.panel.gauge.tickSpaceMinVal=1,this.alertSrvRef.set("Problem!","Invalid Value for Tick Spacing Minor, auto-setting back to default of 1","error",1e4)),(null===this.panel.gauge.tickSpaceMajVal||""===this.panel.gauge.tickSpaceMajVal||isNaN(this.panel.gauge.tickSpaceMajVal))&&(this.panel.gauge.tickSpaceMajVal=10,this.alertSrvRef.set("Problem!","Invalid Value for Tick Spacing Major, auto-setting back to default of 10","error",1e4)),(null===this.panel.gauge.gaugeRadius||""===this.panel.gauge.gaugeRadius||isNaN(this.panel.gauge.gaugeRadius)||this.panel.gauge.gaugeRadius<0)&&(this.panel.gauge.gaugeRadius=0,this.alertSrvRef.set("Problem!","Invalid Value for Gauge Radius, auto-setting back to default of 0","error",1e4)),this.render()},t.prototype.link=function(e,t,a,i){var n=t.find(".grafana-d3-gauge");n.append('<div id="'+i.containerDivId+'"></div>');var l=n[0].childNodes[0];i.setContainer(l),this.events.on("render",(function(){i.renderGauge(),i.renderingCompleted()}))},t.prototype.getDecimalsForValue=function(e){if(o.a.isNumber(this.panel.decimals))return{decimals:this.panel.decimals,scaledDecimals:null};var t=e/2,a=-Math.floor(Math.log(t)/Math.LN10),i=Math.pow(10,-a),n=t/i,l=1;n<1.5?l=1:n<3?(l=2,n>2.25&&(l=2.5,++a)):l=n<7.5?5:10,l*=i,Math.floor(e)===e&&(a=0);var s={decimals:0,scaledDecimals:0};return s.decimals=Math.max(0,a),s.scaledDecimals=s.decimals-Math.floor(Math.log(l)/Math.LN10)+2,s},t.prototype.setValues=function(e){if(e.flotpairs=[],this.series.length>1){var t=new Error;throw t.message="Multiple Series Error",t.stack="Metric query returns "+this.series.length+" series. Single Stat Panel expects a single series.\n\nResponse:\n"+JSON.stringify(this.series),t}if(this.series&&this.series.length>0){var a=o.a.last(this.series[0].datapoints),i=o.a.isArray(a)?a[0]:null;if("name"===this.panel.operatorName)e.value=0,e.valueRounded=0,e.valueFormatted=this.series[0].alias;else if(o.a.isString(i))e.value=0,e.valueFormatted=o.a.escape(i),e.valueRounded=0;else{e.value=this.series[0].stats[this.panel.operatorName],e.flotpairs=this.series[0].flotpairs;var n=this.getDecimalsForValue(e.value),l=h.a.valueFormats[this.panel.format];e.valueFormatted=l(e.value,n.decimals,n.scaledDecimals),e.valueRounded=h.a.roundValue(e.value,n.decimals)}e.scopedVars={__name:{value:this.series[0].label}}}if(1===this.panel.mappingType)for(var s=0;s<this.panel.valueMaps.length;s++){var r=this.panel.valueMaps[s];if("null"!==r.value){if(parseFloat(r.value)===e.valueRounded)return void(e.valueFormatted=r.text)}else if(null===e.value||void 0===e.value)return void(e.valueFormatted=r.text)}else if(2===this.panel.mappingType)for(var g=0;g<this.panel.rangeMaps.length;g++){var d=this.panel.rangeMaps[g];if("null"!==d.from||"null"!==d.to){var u=parseFloat(d.from);if(parseFloat(d.to)>=e.valueRounded&&u<=e.valueRounded)return void(e.valueFormatted=d.text)}else if(null===e.value||void 0===e.value)return void(e.valueFormatted=d.text)}null!==e.value&&void 0!==e.value||(e.valueFormatted="no value")},t.prototype.getValueText=function(){return this.data.valueFormatted},t.prototype.getValueRounded=function(){return this.data.valueRounded},t.prototype.setUnitFormat=function(e){this.panel.format=e.value,this.render()},t.prototype.onDataError=function(e){this.onDataReceived([])},t.prototype.onDataReceived=function(e){this.series=e.map(this.seriesHandler.bind(this));var t={value:0,valueFormatted:0,valueRounded:0};this.setValues(t),this.data=t,null!==this.gaugeObject?this.gaugeObject.updateGauge(t.value,t.valueFormatted,t.valueRounded):this.render()},t.prototype.seriesHandler=function(e){var t=new u.a({datapoints:e.datapoints,alias:e.target});return t.flotpairs=t.getFlotPairs(this.panel.nullPointMode),t},t.prototype.invertColorOrder=function(){var e=this.panel.colors[0];this.panel.colors[0]=this.panel.colors[2],this.panel.colors[2]=e,this.render()},t.templateUrl="partials/template.html",t}(n.MetricsPanelCtrl);a.d(t,"PanelCtrl",(function(){return k})),Object(n.loadPluginCss)({dark:"plugins/briangann-gauge-panel/styles/dark.css",light:"plugins/briangann-gauge-panel/styles/light.css"})}])}));
//# sourceMappingURL=module.js.map