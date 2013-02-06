/*
 * Playlist Object for the jPlayer Plugin
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2011 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 2.1.0 (jPlayer 2.1.0)
 * Date: 1st September 2011
 */
(function(e,t){jPlayerPlaylist=function(t,n,r){var i=this;this.current=0,this.removing=this.shuffled=this.loop=!1,this.cssSelector=e.extend({},this._cssSelector,t),this.options=e.extend(!0,{},this._options,r),this.playlist=[],this.original=[],this._initPlaylist(n),this.cssSelector.title=this.cssSelector.cssSelectorAncestor+" .jp-title",this.cssSelector.playlist=this.cssSelector.cssSelectorAncestor+" .jp-playlist",this.cssSelector.next=this.cssSelector.cssSelectorAncestor+" .jp-next",this.cssSelector.previous=this.cssSelector.cssSelectorAncestor+" .jp-previous",this.cssSelector.shuffle=this.cssSelector.cssSelectorAncestor+" .jp-shuffle",this.cssSelector.shuffleOff=this.cssSelector.cssSelectorAncestor+" .jp-shuffle-off",this.options.cssSelectorAncestor=this.cssSelector.cssSelectorAncestor,this.options.repeat=function(e){i.loop=e.jPlayer.options.loop},e(this.cssSelector.jPlayer).bind(e.jPlayer.event.ready,function(){i._init()}),e(this.cssSelector.jPlayer).bind(e.jPlayer.event.ended,function(){i.next()}),e(this.cssSelector.jPlayer).bind(e.jPlayer.event.play,function(){e(this).jPlayer("pauseOthers")}),e(this.cssSelector.jPlayer).bind(e.jPlayer.event.resize,function(t){t.jPlayer.options.fullScreen?e(i.cssSelector.title).show():e(i.cssSelector.title).hide()}),e(this.cssSelector.previous).click(function(){return i.previous(),e(this).blur(),!1}),e(this.cssSelector.next).click(function(){return i.next(),e(this).blur(),!1}),e(this.cssSelector.shuffle).click(function(){return i.shuffle(!0),!1}),e(this.cssSelector.shuffleOff).click(function(){return i.shuffle(!1),!1}).hide(),this.options.fullScreen||e(this.cssSelector.title).hide(),e(this.cssSelector.playlist+" ul").empty(),this._createItemHandlers(),e(this.cssSelector.jPlayer).jPlayer(this.options)},jPlayerPlaylist.prototype={_cssSelector:{jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},_options:{playlistOptions:{autoPlay:!1,loopOnPrevious:!1,shuffleOnLoop:!0,enableRemoveControls:!1,displayTime:"slow",addTime:"fast",removeTime:"fast",shuffleTime:"slow",itemClass:"jp-playlist-item",freeGroupClass:"jp-free-media",freeItemClass:"jp-playlist-item-free",removeItemClass:"jp-playlist-item-remove"}},option:function(e,n){if(n===t)return this.options.playlistOptions[e];this.options.playlistOptions[e]=n;switch(e){case"enableRemoveControls":this._updateControls();break;case"itemClass":case"freeGroupClass":case"freeItemClass":case"removeItemClass":this._refresh(!0),this._createItemHandlers()}return this},_init:function(){var e=this;this._refresh(function(){e.options.playlistOptions.autoPlay?e.play(e.current):e.select(e.current)})},_initPlaylist:function(t){this.current=0,this.removing=this.shuffled=!1,this.original=e.extend(!0,[],t),this._originalPlaylist()},_originalPlaylist:function(){var t=this;this.playlist=[],e.each(this.original,function(e){t.playlist[e]=t.original[e]})},_refresh:function(t){var n=this;if(t&&!e.isFunction(t))e(this.cssSelector.playlist+" ul").empty(),e.each(this.playlist,function(t){e(n.cssSelector.playlist+" ul").append(n._createListItem(n.playlist[t]))}),this._updateControls();else{var r=e(this.cssSelector.playlist+" ul").children().length?this.options.playlistOptions.displayTime:0;e(this.cssSelector.playlist+" ul").slideUp(r,function(){var r=e(this);e(this).empty(),e.each(n.playlist,function(e){r.append(n._createListItem(n.playlist[e]))}),n._updateControls(),e.isFunction(t)&&t(),n.playlist.length?e(this).slideDown(n.options.playlistOptions.displayTime):e(this).show()})}},_createListItem:function(t){var n=this,r="<li><div>";r+="<a href='javascript:;' class='"+this.options.playlistOptions.removeItemClass+"'>&times;</a>";if(t.free){var i=!0;r+="<span class='"+this.options.playlistOptions.freeGroupClass+"'>(",e.each(t,function(t,s){e.jPlayer.prototype.format[t]&&(i?i=!1:r+=" | ",r+="<a class='"+n.options.playlistOptions.freeItemClass+"' href='"+s+"' tabindex='1'>"+t+"</a>")}),r+=")</span>"}return r+="<a href='javascript:;' class='"+this.options.playlistOptions.itemClass+"' tabindex='1'>"+t.title+(t.artist?" <span class='jp-artist'>by "+t.artist+"</span>":"")+"</a>",r+="</div></li>",r},_createItemHandlers:function(){var t=this;e(this.cssSelector.playlist+" a."+this.options.playlistOptions.itemClass).die("click").live("click",function(){var n=e(this).parent().parent().index();return t.current!==n?t.play(n):e(t.cssSelector.jPlayer).jPlayer("play"),e(this).blur(),!1}),e(t.cssSelector.playlist+" a."+this.options.playlistOptions.freeItemClass).die("click").live("click",function(){return e(this).parent().parent().find("."+t.options.playlistOptions.itemClass).click(),e(this).blur(),!1}),e(t.cssSelector.playlist+" a."+this.options.playlistOptions.removeItemClass).die("click").live("click",function(){var n=e(this).parent().parent().index();return t.remove(n),e(this).blur(),!1})},_updateControls:function(){this.options.playlistOptions.enableRemoveControls?e(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).show():e(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).hide(),this.shuffled?(e(this.cssSelector.shuffleOff).show(),e(this.cssSelector.shuffle).hide()):(e(this.cssSelector.shuffleOff).hide(),e(this.cssSelector.shuffle).show())},_highlight:function(n){this.playlist.length&&n!==t&&(e(this.cssSelector.playlist+" .jp-playlist-current").removeClass("jp-playlist-current"),e(this.cssSelector.playlist+" li:nth-child("+(n+1)+")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current"),e(this.cssSelector.title+" li").html(this.playlist[n].title+(this.playlist[n].artist?" <span class='jp-artist'>by "+this.playlist[n].artist+"</span>":"")))},setPlaylist:function(e){this._initPlaylist(e),this._init()},add:function(t,n){e(this.cssSelector.playlist+" ul").append(this._createListItem(t)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime),this._updateControls(),this.original.push(t),this.playlist.push(t),n?this.play(this.playlist.length-1):this.original.length===1&&this.select(0)},remove:function(n){var r=this;return n===t?(this._initPlaylist([]),this._refresh(function(){e(r.cssSelector.jPlayer).jPlayer("clearMedia")}),!0):this.removing?!1:(n=n<0?r.original.length+n:n,0<=n&&n<this.playlist.length&&(this.removing=!0,e(this.cssSelector.playlist+" li:nth-child("+(n+1)+")").slideUp(this.options.playlistOptions.removeTime,function(){e(this).remove();if(r.shuffled){var t=r.playlist[n];e.each(r.original,function(e){if(r.original[e]===t)return r.original.splice(e,1),!1})}else r.original.splice(n,1);r.playlist.splice(n,1),r.original.length?n===r.current?(r.current=n<r.original.length?r.current:r.original.length-1,r.select(r.current)):n<r.current&&r.current--:(e(r.cssSelector.jPlayer).jPlayer("clearMedia"),r.current=0,r.shuffled=!1,r._updateControls()),r.removing=!1})),!0)},select:function(t){t=t<0?this.original.length+t:t,0<=t&&t<this.playlist.length?(this.current=t,this._highlight(t),e(this.cssSelector.jPlayer).jPlayer("setMedia",this.playlist[this.current])):this.current=0},play:function(n){n=n<0?this.original.length+n:n,0<=n&&n<this.playlist.length?this.playlist.length&&(this.select(n),e(this.cssSelector.jPlayer).jPlayer("play")):n===t&&e(this.cssSelector.jPlayer).jPlayer("play")},pause:function(){e(this.cssSelector.jPlayer).jPlayer("pause")},next:function(){var e=this.current+1<this.playlist.length?this.current+1:0;this.loop?e===0&&this.shuffled&&this.options.playlistOptions.shuffleOnLoop&&this.playlist.length>1?this.shuffle(!0,!0):this.play(e):e>0&&this.play(e)},previous:function(){var e=this.current-1>=0?this.current-1:this.playlist.length-1;(this.loop&&this.options.playlistOptions.loopOnPrevious||e<this.playlist.length-1)&&this.play(e)},shuffle:function(n,r){var i=this;n===t&&(n=!this.shuffled),(n||n!==this.shuffled)&&e(this.cssSelector.playlist+" ul").slideUp(this.options.playlistOptions.shuffleTime,function(){(i.shuffled=n)?i.playlist.sort(function(){return.5-Math.random()}):i._originalPlaylist(),i._refresh(!0),r||!e(i.cssSelector.jPlayer).data("jPlayer").status.paused?i.play(0):i.select(0),e(this).slideDown(i.options.playlistOptions.shuffleTime)})}}})(jQuery);