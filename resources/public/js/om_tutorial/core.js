// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Yo, yo Teeapane");
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Tiger"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Killer Whale"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"parrot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"aardvark"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"dolphin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"chameleon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"fly"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__){
return (function (env,key,params){
return key;
});})(method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29371,key,params){
var map__29372 = p__29371;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var en = map__29372__$1;
var state = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29374 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__29374,(0),null);
var value = cljs.core.nth.call(null,vec__29374,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__29375,key,p__29376){
var map__29377 = p__29375;
var map__29377__$1 = ((((!((map__29377 == null)))?((((map__29377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29377):map__29377);
var env = map__29377__$1;
var state = cljs.core.get.call(null,map__29377__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29378 = p__29376;
var map__29378__$1 = ((((!((map__29378 == null)))?((((map__29378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29378):map__29378);
var start = cljs.core.get.call(null,map__29378__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__29378__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x29385_29397 = om_tutorial.core.AnimalsList.prototype;
x29385_29397.componentWillUpdate = ((function (x29385_29397){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x29385_29397))
;

x29385_29397.shouldComponentUpdate = ((function (x29385_29397){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19905__auto__),goog.object.get(next_props__19906__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19905__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19905__auto__.state,"omcljs$state"),goog.object.get(next_state__19907__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x29385_29397))
;

x29385_29397.componentWillUnmount = ((function (x29385_29397){
return (function (){
var this__19905__auto__ = this;
var r__19911__auto__ = om.next.get_reconciler.call(null,this__19905__auto__);
var cfg__19912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19911__auto__);
var st__19913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
var indexer__19910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
if((st__19913__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19905__auto__);
}

if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x29385_29397))
;

x29385_29397.componentDidUpdate = ((function (x29385_29397){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x29385_29397))
;

x29385_29397.isMounted = ((function (x29385_29397){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29385_29397))
;

x29385_29397.componentWillMount = ((function (x29385_29397){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x29385_29397))
;

x29385_29397.render = ((function (x29385_29397){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29386 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29387 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29388 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29389 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29390 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__29391 = om.next.props.call(null,this$);
var map__29391__$1 = ((((!((map__29391 == null)))?((((map__29391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var title = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__29391,map__29391__$1,title,list,_STAR_reconciler_STAR_29386,_STAR_depth_STAR_29387,_STAR_shared_STAR_29388,_STAR_instrument_STAR_29389,_STAR_parent_STAR_29390,this$,x29385_29397){
return (function (p__29393){
var vec__29394 = p__29393;
var i = cljs.core.nth.call(null,vec__29394,(0),null);
var name = cljs.core.nth.call(null,vec__29394,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__29391,map__29391__$1,title,list,_STAR_reconciler_STAR_29386,_STAR_depth_STAR_29387,_STAR_shared_STAR_29388,_STAR_instrument_STAR_29389,_STAR_parent_STAR_29390,this$,x29385_29397))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29390;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29389;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29388;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29387;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29386;
}});})(x29385_29397))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x29395_29398 = om_tutorial.core.AnimalsList;
x29395_29398.om$next$IQueryParams$ = true;

x29395_29398.om$next$IQueryParams$params$arity$1 = ((function (x29395_29398){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29395_29398))
;

x29395_29398.om$next$IQuery$ = true;

x29395_29398.om$next$IQuery$query$arity$1 = ((function (x29395_29398){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29395_29398))
;


var x29396_29399 = om_tutorial.core.AnimalsList.prototype;
x29396_29399.om$next$IQueryParams$ = true;

x29396_29399.om$next$IQueryParams$params$arity$1 = ((function (x29396_29399){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29396_29399))
;

x29396_29399.om$next$IQuery$ = true;

x29396_29399.om$next$IQuery$query$arity$1 = ((function (x29396_29399){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29396_29399))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map