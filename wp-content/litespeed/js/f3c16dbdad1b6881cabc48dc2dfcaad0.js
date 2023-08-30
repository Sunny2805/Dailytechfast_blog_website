!function($){var version="2.2.0",optionOverrides={},defaults={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},getScrollable=function(opts){var scrollable=[],scrolled=!1,dir=opts.dir&&"left"===opts.dir?"scrollLeft":"scrollTop";return this.each((function(){var el=$(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(el[dir]()>0?scrollable.push(this):(el[dir](1),(scrolled=el[dir]()>0)&&scrollable.push(this),el[dir](0))):(scrollable.push(document.scrollingElement),!1)})),scrollable.length||this.each((function(){this===document.documentElement&&"smooth"===$(this).css("scrollBehavior")&&(scrollable=[this]),scrollable.length||"BODY"!==this.nodeName||(scrollable=[this])})),"first"===opts.el&&scrollable.length>1&&(scrollable=[scrollable[0]]),scrollable},rRelative=/^([\-\+]=)(\d+)/;$.fn.extend({scrollable:function(dir){var scrl=getScrollable.call(this,{dir:dir});return this.pushStack(scrl)},firstScrollable:function(dir){var scrl=getScrollable.call(this,{el:"first",dir:dir});return this.pushStack(scrl)},smoothScroll:function(options,extra){if("options"===(options=options||{}))return extra?this.each((function(){var $this=$(this),opts=$.extend($this.data("ssOpts")||{},extra);$(this).data("ssOpts",opts)})):this.first().data("ssOpts");var opts=$.extend({},$.fn.smoothScroll.defaults,options),clickHandler=function(event){var escapeSelector=function(str){return str.replace(/(:|\.|\/)/g,"\\$1")},link=this,$link=$(this),thisOpts=$.extend({},opts,$link.data("ssOpts")||{}),exclude=opts.exclude,excludeWithin=thisOpts.excludeWithin,elCounter=0,ewlCounter=0,include=!0,clickOpts={},locationPath=$.smoothScroll.filterPath(location.pathname),linkPath=$.smoothScroll.filterPath(this.pathname),hostMatch=location.hostname===this.hostname||!this.hostname,pathMatch=thisOpts.scrollTarget||linkPath===locationPath,thisHash=escapeSelector(this.hash);if(thisHash&&!$(thisHash).length&&(include=!1),thisOpts.scrollTarget||hostMatch&&pathMatch&&thisHash){for(;include&&elCounter<exclude.length;)$link.is(escapeSelector(exclude[elCounter++]))&&(include=!1);for(;include&&ewlCounter<excludeWithin.length;)$link.closest(excludeWithin[ewlCounter++]).length&&(include=!1)}else include=!1;include&&(thisOpts.preventDefault&&event.preventDefault(),$.extend(clickOpts,thisOpts,{scrollTarget:thisOpts.scrollTarget||thisHash,link:this}),$.smoothScroll(clickOpts))};return null!==options.delegateSelector?this.off("click.smoothscroll",options.delegateSelector).on("click.smoothscroll",options.delegateSelector,clickHandler):this.off("click.smoothscroll").on("click.smoothscroll",clickHandler),this}});var getExplicitOffset=function(val){var explicit={relative:""},parts="string"==typeof val&&rRelative.exec(val);return"number"==typeof val?explicit.px=val:parts&&(explicit.relative=parts[1],explicit.px=parseFloat(parts[2])||0),explicit},onAfterScroll=function(opts){var $tgt=$(opts.scrollTarget);opts.autoFocus&&$tgt.length&&($tgt[0].focus(),$tgt.is(document.activeElement)||($tgt.prop({tabIndex:-1}),$tgt[0].focus())),opts.afterScroll.call(opts.link,opts)};$.smoothScroll=function(options,px){if("options"===options&&"object"==typeof px)return $.extend(optionOverrides,px);var opts,$scroller,speed,delta,explicitOffset=getExplicitOffset(options),scrollTargetOffset={},scrollerOffset=0,offPos="offset",scrollDir="scrollTop",aniProps={},aniOpts={};explicitOffset.px?opts=$.extend({link:null},$.fn.smoothScroll.defaults,optionOverrides):((opts=$.extend({link:null},$.fn.smoothScroll.defaults,options||{},optionOverrides)).scrollElement&&(offPos="position","static"===opts.scrollElement.css("position")&&opts.scrollElement.css("position","relative")),px&&(explicitOffset=getExplicitOffset(px))),scrollDir="left"===opts.direction?"scrollLeft":scrollDir,opts.scrollElement?($scroller=opts.scrollElement,explicitOffset.px||/^(?:HTML|BODY)$/.test($scroller[0].nodeName)||(scrollerOffset=$scroller[scrollDir]())):$scroller=$("html, body").firstScrollable(opts.direction),opts.beforeScroll.call($scroller,opts),scrollTargetOffset=explicitOffset.px?explicitOffset:{relative:"",px:$(opts.scrollTarget)[offPos]()&&$(opts.scrollTarget)[offPos]()[opts.direction]||0},aniProps[scrollDir]=scrollTargetOffset.relative+(scrollTargetOffset.px+scrollerOffset+opts.offset),"auto"===(speed=opts.speed)&&(speed=(delta=Math.abs(aniProps[scrollDir]-$scroller[scrollDir]()))/opts.autoCoefficient),aniOpts={duration:speed,easing:opts.easing,complete:function(){onAfterScroll(opts)}},opts.step&&(aniOpts.step=opts.step),$scroller.length?$scroller.stop().animate(aniProps,aniOpts):onAfterScroll(opts)},$.smoothScroll.version="2.2.0",$.smoothScroll.filterPath=function(string){return(string=string||"").replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},$.fn.smoothScroll.defaults=defaults}(jQuery)
;