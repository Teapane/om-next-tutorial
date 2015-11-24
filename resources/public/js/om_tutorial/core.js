// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Yo, yo Teeapane");
/**
 * @constructor
 */
om_tutorial.core.HelloWorld = (function om_tutorial$core$HelloWorld(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_tutorial.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x28602_28610 = om_tutorial.core.HelloWorld.prototype;
x28602_28610.componentWillUpdate = ((function (x28602_28610){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x28602_28610))
;

x28602_28610.shouldComponentUpdate = ((function (x28602_28610){
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
});})(x28602_28610))
;

x28602_28610.componentWillUnmount = ((function (x28602_28610){
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
});})(x28602_28610))
;

x28602_28610.componentDidUpdate = ((function (x28602_28610){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x28602_28610))
;

x28602_28610.isMounted = ((function (x28602_28610){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28602_28610))
;

x28602_28610.componentWillMount = ((function (x28602_28610){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x28602_28610))
;

x28602_28610.render = ((function (x28602_28610){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28603 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28604 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28605 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28606 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28607 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,cljs.core.get.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"title","title",636505583))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28607;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28606;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28605;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28604;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28603;
}});})(x28602_28610))
;


om_tutorial.core.HelloWorld.prototype.constructor = om_tutorial.core.HelloWorld;

om_tutorial.core.HelloWorld.prototype.om$isComponent = true;

var x28608_28611 = om_tutorial.core.HelloWorld;


var x28609_28612 = om_tutorial.core.HelloWorld.prototype;


om_tutorial.core.HelloWorld.cljs$lang$type = true;

om_tutorial.core.HelloWorld.cljs$lang$ctorStr = "om-tutorial.core/HelloWorld";

om_tutorial.core.HelloWorld.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-tutorial.core/HelloWorld");
});
om_tutorial.core.hello = om.next.factory.call(null,om_tutorial.core.HelloWorld);
ReactDOM.render(om_tutorial.core.hello.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Hello, world! It's a sunny 10% kind of day!"], null)),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map