/*! This file is auto-generated */
wp.customize.widgetsPreview=wp.customize.WidgetCustomizerPreview=function(d,o,c){var s={renderedSidebars:{},renderedWidgets:{},registeredSidebars:[],registeredWidgets:{},widgetSelectors:[],preview:null,l10n:{widgetTooltip:""},selectiveRefreshableWidgets:{},init:function(){var i=this;i.preview=c.preview,o.isEmpty(i.selectiveRefreshableWidgets)||i.addPartials(),i.buildWidgetSelectors(),i.highlightControls(),i.preview.bind("highlight-widget",i.highlightWidget),c.preview.bind("active",function(){i.highlightControls()}),c.preview.bind("refresh-widget-partial",function(e){var t="widget["+e+"]";c.selectiveRefresh.partial.has(t)?c.selectiveRefresh.partial(t).refresh():i.renderedWidgets[e]&&c.preview.send("refresh")})}};return s.WidgetPartial=c.selectiveRefresh.Partial.extend({initialize:function(e,t){var i=this,r=e.match(/^widget\[(.+)]$/);if(!r)throw new Error("Illegal id for widget partial.");i.widgetId=r[1],i.widgetIdParts=s.parseWidgetId(i.widgetId),(t=t||{}).params=o.extend({settings:[s.getWidgetSettingId(i.widgetId)],containerInclusive:!0},t.params||{}),c.selectiveRefresh.Partial.prototype.initialize.call(i,e,t)},refresh:function(){var e,t=this;return s.selectiveRefreshableWidgets[t.widgetIdParts.idBase]?c.selectiveRefresh.Partial.prototype.refresh.call(t):((e=d.Deferred()).reject(),t.fallback(),e.promise())},renderContent:function(e){var t=this;c.selectiveRefresh.Partial.prototype.renderContent.call(t,e)&&(c.preview.send("widget-updated",t.widgetId),c.selectiveRefresh.trigger("widget-updated",t))}}),s.SidebarPartial=c.selectiveRefresh.Partial.extend({initialize:function(e,t){var i=this,r=e.match(/^sidebar\[(.+)]$/);if(!r)throw new Error("Illegal id for sidebar partial.");if(i.sidebarId=r[1],(t=t||{}).params=o.extend({settings:["sidebars_widgets["+i.sidebarId+"]"]},t.params||{}),c.selectiveRefresh.Partial.prototype.initialize.call(i,e,t),!i.params.sidebarArgs)throw new Error("The sidebarArgs param was not provided.");if(1<i.params.settings.length)throw new Error("Expected SidebarPartial to only have one associated setting")},ready:function(){var i=this;o.each(i.settings(),function(e){c(e).bind(o.bind(i.handleSettingChange,i))}),c.selectiveRefresh.bind("partial-content-rendered",function(e){e.partial.extended(s.WidgetPartial)&&-1!==o.indexOf(i.getWidgetIds(),e.partial.widgetId)&&c.selectiveRefresh.trigger("sidebar-updated",i)}),c.bind("change",function(e){var t=s.parseWidgetSettingId(e.id);t&&(e=t.idBase,t.number&&(e+="-"+String(t.number)),-1!==o.indexOf(i.getWidgetIds(),e)&&i.ensureWidgetPlacementContainers(e))})},findDynamicSidebarBoundaryNodes:function(){var i=this,r={},a=/^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\d+)$/,n=function(e){o.each(e,function(e){var t;8===e.nodeType?(t=e.nodeValue.match(a))&&t[2]===i.sidebarId&&(o.isUndefined(r[t[3]])&&(r[t[3]]={before:null,after:null,instanceNumber:parseInt(t[3],10)}),"dynamic_sidebar_before"===t[1]?r[t[3]].before=e:r[t[3]].after=e):1===e.nodeType&&n(e.childNodes)})};return n(document.body.childNodes),o.values(r)},placements:function(){var t=this;return o.map(t.findDynamicSidebarBoundaryNodes(),function(e){return new c.selectiveRefresh.Placement({partial:t,container:null,startNode:e.before,endNode:e.after,context:{instanceNumber:e.instanceNumber}})})},getWidgetIds:function(){var e=this.settings()[0];if(!e)throw new Error("Missing associated setting.");if(!c.has(e))throw new Error("Setting does not exist.");if(e=c(e).get(),!o.isArray(e))throw new Error("Expected setting to be array of widget IDs");return e.slice(0)},reflowWidgets:function(){var e=this,t=[],i=e.getWidgetIds(),r=e.placements(),s={};return o.each(i,function(e){var t=c.selectiveRefresh.partial("widget["+e+"]");t&&(s[e]=t)}),o.each(r,function(i){var r,a=[],n=!1,d=-1;o.each(s,function(t){o.each(t.placements(),function(e){i.context.instanceNumber===e.context.sidebar_instance_number&&(r=e.container.index(),a.push({partial:t,placement:e,position:r}),r<d&&(n=!0),d=r)})}),n&&(o.each(a,function(e){i.endNode.parentNode.insertBefore(e.placement.container[0],i.endNode),c.selectiveRefresh.trigger("partial-content-moved",e.placement)}),t.push(i))}),0<t.length&&c.selectiveRefresh.trigger("sidebar-updated",e),t},ensureWidgetPlacementContainers:function(i){var r=this,a=!1,e="widget["+i+"]",n=c.selectiveRefresh.partial(e);return n=n||new s.WidgetPartial(e,{params:{}}),o.each(r.placements(),function(t){var e;o.find(n.placements(),function(e){return e.context.sidebar_instance_number===t.context.instanceNumber})||(e=d(r.params.sidebarArgs.before_widget.replace(/%1\$s/g,i).replace(/%2\$s/g,"widget")+r.params.sidebarArgs.after_widget))[0]&&(e.attr("data-customize-partial-id",n.id),e.attr("data-customize-partial-type","widget"),e.attr("data-customize-widget-id",i),e.data("customize-partial-placement-context",{sidebar_id:r.sidebarId,sidebar_instance_number:t.context.instanceNumber}),t.endNode.parentNode.insertBefore(e[0],t.endNode),a=!0)}),c.selectiveRefresh.partial.add(n),a&&r.reflowWidgets(),n},handleSettingChange:function(e,t){var i,r=this,a=[];0<t.length&&0===e.length||0<e.length&&0===t.length?r.fallback():(i=o.difference(t,e),o.each(i,function(e){var t=c.selectiveRefresh.partial("widget["+e+"]");t&&o.each(t.placements(),function(e){(e.context.sidebar_id===r.sidebarId||e.context.sidebar_args&&e.context.sidebar_args.id===r.sidebarId)&&e.container.remove()}),delete s.renderedWidgets[e]}),t=o.difference(e,t),o.each(t,function(e){var t=r.ensureWidgetPlacementContainers(e);a.push(t),s.renderedWidgets[e]=!0}),o.each(a,function(e){e.refresh()}),c.selectiveRefresh.trigger("sidebar-updated",r))},refresh:function(){var e=this,t=d.Deferred();return t.fail(function(){e.fallback()}),0===e.placements().length?t.reject():(o.each(e.reflowWidgets(),function(e){c.selectiveRefresh.trigger("partial-content-rendered",e)}),t.resolve()),t.promise()}}),c.selectiveRefresh.partialConstructor.sidebar=s.SidebarPartial,c.selectiveRefresh.partialConstructor.widget=s.WidgetPartial,s.addPartials=function(){o.each(s.registeredSidebars,function(e){var t="sidebar["+e.id+"]",i=c.selectiveRefresh.partial(t);i||(i=new s.SidebarPartial(t,{params:{sidebarArgs:e}}),c.selectiveRefresh.partial.add(i))})},s.buildWidgetSelectors=function(){var r=this;d.each(r.registeredSidebars,function(e,t){var i=[t.before_widget,t.before_title,t.after_title,t.after_widget].join(""),t=d(i),i=t.prop("tagName")||"",t=t.prop("className")||"";t&&((t=(t=t.replace(/\S*%[12]\$s\S*/g,"")).replace(/^\s+|\s+$/g,""))&&(i+="."+t.split(/\s+/).join(".")),r.widgetSelectors.push(i))})},s.highlightWidget=function(e){var t=d(document.body),i=d("#"+e);t.find(".widget-customizer-highlighted-widget").removeClass("widget-customizer-highlighted-widget"),i.addClass("widget-customizer-highlighted-widget"),setTimeout(function(){i.removeClass("widget-customizer-highlighted-widget")},500)},s.highlightControls=function(){var t=this,e=this.widgetSelectors.join(",");c.settings.channel&&(d(e).attr("title",this.l10n.widgetTooltip),d(document).on("mouseenter",e,function(){t.preview.send("highlight-widget-control",d(this).prop("id"))}),d(document).on("click",e,function(e){e.shiftKey&&(e.preventDefault(),t.preview.send("focus-widget-control",d(this).prop("id")))}))},s.parseWidgetId=function(e){var t={idBase:"",number:null},i=e.match(/^(.+)-(\d+)$/);return i?(t.idBase=i[1],t.number=parseInt(i[2],10)):t.idBase=e,t},s.parseWidgetSettingId=function(e){var t={idBase:"",number:null},e=e.match(/^widget_([^\[]+?)(?:\[(\d+)])?$/);return e?(t.idBase=e[1],e[2]&&(t.number=parseInt(e[2],10)),t):null},s.getWidgetSettingId=function(e){var t=this.parseWidgetId(e),e="widget_"+t.idBase;return t.number&&(e+="["+String(t.number)+"]"),e},c.bind("preview-ready",function(){d.extend(s,_wpWidgetCustomizerPreviewSettings),s.init()}),s}(jQuery,_,(wp,wp.customize));
;