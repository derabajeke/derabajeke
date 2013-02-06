/*
 * CirclePlayer for the jPlayer Plugin (jQuery)
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2012 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Version: 1.0.1 (jPlayer 2.1.0+)
 * Date: 30th May 2011
 *
 * Author: Mark J Panaghiston @thepag
 *
 * CirclePlayer prototype developed by:
 * Mark Boas @maboa
 * Silvia Benvenuti @aulentina
 * Jussi Kalliokoski @quinirill
 *
 * Inspired by :
 * Neway @imneway http://imneway.net/ http://forrst.com/posts/Untitled-CPt
 * and
 * Liam McKay @liammckay http://dribbble.com/shots/50882-Purple-Play-Pause
 *
 * Standing on the shoulders of :
 * John Resig @jresig
 * Mark Panaghiston @thepag
 * Louis-Rémi Babé @Louis_Remi
 */
var CirclePlayer=function(e,t,n){var r=this,i={supplied:"m4a, oga",cssSelectorAncestor:"#cp_container_1",cssSelector:{play:".cp-play",pause:".cp-pause"}},s={bufferHolder:".cp-buffer-holder",buffer1:".cp-buffer-1",buffer2:".cp-buffer-2",progressHolder:".cp-progress-holder",progress1:".cp-progress-1",progress2:".cp-progress-2",circleControl:".cp-circle-control"};this.cssClass={gt50:"cp-gt50",fallback:"cp-fallback"},this.spritePitch=104,this.spriteRatio=.24,this.player=$(e),this.media=$.extend({},t),this.options=$.extend(!0,{},i,n),this.cssTransforms=Modernizr.csstransforms,this.audio={},this.dragging=!1,this.eventNamespace=".CirclePlayer",this.jq={},$.each(s,function(e,t){r.jq[e]=$(r.options.cssSelectorAncestor+" "+t)}),this._initSolution(),this._initPlayer()};CirclePlayer.prototype={_createHtml:function(){},_initPlayer:function(){var e=this;this.player.jPlayer(this.options),this.player.bind($.jPlayer.event.ready+this.eventNamespace,function(t){t.jPlayer.html.used&&t.jPlayer.html.audio.available&&(e.audio=$(this).data("jPlayer").htmlElement.audio),$(this).jPlayer("setMedia",e.media),e._initCircleControl()}),this.player.bind($.jPlayer.event.play+this.eventNamespace,function(e){$(this).jPlayer("pauseOthers")}),this.player.bind($.jPlayer.event.timeupdate+this.eventNamespace,function(t){e.dragging||e._timeupdate(t.jPlayer.status.currentPercentAbsolute)}),this.player.bind($.jPlayer.event.progress+this.eventNamespace,function(t){var n=0;if(typeof e.audio.buffered=="object"&&e.audio.buffered.length>0){if(e.audio.duration>0){var r=0;for(var i=0;i<e.audio.buffered.length;i++)r+=e.audio.buffered.end(i)-e.audio.buffered.start(i);n=100*r/e.audio.duration}}else n=0;e._progress(n)}),this.player.bind($.jPlayer.event.ended+this.eventNamespace,function(t){e._resetSolution()})},_initSolution:function(){this.cssTransforms?(this.jq.progressHolder.show(),this.jq.bufferHolder.show()):(this.jq.progressHolder.addClass(this.cssClass.gt50).show(),this.jq.progress1.addClass(this.cssClass.fallback),this.jq.progress2.hide(),this.jq.bufferHolder.hide()),this._resetSolution()},_resetSolution:function(){this.cssTransforms?(this.jq.progressHolder.removeClass(this.cssClass.gt50),this.jq.progress1.css({transform:"rotate(0deg)"}),this.jq.progress2.css({transform:"rotate(0deg)"}).hide()):this.jq.progress1.css("background-position","0 "+this.spritePitch+"px")},_initCircleControl:function(){var e=this;this.jq.circleControl.grab({onstart:function(){e.dragging=!0},onmove:function(t){var n=e._getArcPercent(t.position.x,t.position.y);e.player.jPlayer("playHead",n).jPlayer("play"),e._timeupdate(n)},onfinish:function(t){e.dragging=!1;var n=e._getArcPercent(t.position.x,t.position.y);e.player.jPlayer("playHead",n).jPlayer("play")}})},_timeupdate:function(e){var t=e*3.6+"deg",n=(Math.floor(Math.round(e)*this.spriteRatio)-1)*-this.spritePitch;e<=50?this.cssTransforms?(this.jq.progressHolder.removeClass(this.cssClass.gt50),this.jq.progress1.css({transform:"rotate("+t+")"}),this.jq.progress2.hide()):this.jq.progress1.css("background-position","0 "+n+"px"):e<=100&&(this.cssTransforms?(this.jq.progressHolder.addClass(this.cssClass.gt50),this.jq.progress1.css({transform:"rotate(180deg)"}),this.jq.progress2.css({transform:"rotate("+t+")"}),this.jq.progress2.show()):this.jq.progress1.css("background-position","0 "+n+"px"))},_progress:function(e){var t=e*3.6+"deg";this.cssTransforms&&(e<=50?(this.jq.bufferHolder.removeClass(this.cssClass.gt50),this.jq.buffer1.css({transform:"rotate("+t+")"}),this.jq.buffer2.hide()):e<=100&&(this.jq.bufferHolder.addClass(this.cssClass.gt50),this.jq.buffer1.css({transform:"rotate(180deg)"}),this.jq.buffer2.show(),this.jq.buffer2.css({transform:"rotate("+t+")"})))},_getArcPercent:function(e,t){var n=this.jq.circleControl.offset(),r=e-n.left-this.jq.circleControl.width()/2,i=t-n.top-this.jq.circleControl.height()/2,s=Math.atan2(i,r);return s>-1*Math.PI&&s<-0.5*Math.PI&&(s=2*Math.PI+s),(s+Math.PI/2)/2*Math.PI*10},setMedia:function(e){this.media=$.extend({},e),this.player.jPlayer("setMedia",this.media)},play:function(e){this.player.jPlayer("play",e)},pause:function(e){this.player.jPlayer("pause",e)},destroy:function(){this.player.unbind(this.eventNamespace),this.player.jPlayer("destroy")}};