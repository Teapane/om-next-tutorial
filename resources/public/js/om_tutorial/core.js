// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Tutorial, part 2");
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tyler",new cljs.core.Keyword(null,"points","points",-1486596883),(10)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Teapane",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(1)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(12),new cljs.core.Keyword(null,"age","age",-604307804),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kate",new cljs.core.Keyword(null,"points","points",-1486596883),(1)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__29875_SHARP_){
return cljs.core.get_in.call(null,st,p1__29875_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__29876,key,params){
var map__29877 = p__29876;
var map__29877__$1 = ((((!((map__29877 == null)))?((((map__29877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29877):map__29877);
var env = map__29877__$1;
var state = cljs.core.get.call(null,map__29877__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__29879,key,params){
var map__29880 = p__29879;
var map__29880__$1 = ((((!((map__29880 == null)))?((((map__29880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);
var env = map__29880__$1;
var state = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x29886_29895 = om_tutorial.core.Person.prototype;
x29886_29895.componentWillUpdate = ((function (x29886_29895){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x29886_29895))
;

x29886_29895.shouldComponentUpdate = ((function (x29886_29895){
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
});})(x29886_29895))
;

x29886_29895.componentWillUnmount = ((function (x29886_29895){
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
});})(x29886_29895))
;

x29886_29895.componentDidUpdate = ((function (x29886_29895){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x29886_29895))
;

x29886_29895.isMounted = ((function (x29886_29895){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29886_29895))
;

x29886_29895.componentWillMount = ((function (x29886_29895){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x29886_29895))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.om$isComponent = true;

var x29887_29896 = om_tutorial.core.Person;
x29887_29896.om$next$Ident$ = true;

x29887_29896.om$next$Ident$ident$arity$2 = ((function (x29887_29896){
return (function (this$,p__29888){
var map__29889 = p__29888;
var map__29889__$1 = ((((!((map__29889 == null)))?((((map__29889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);
var name = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29887_29896))
;

x29887_29896.om$next$IQuery$ = true;

x29887_29896.om$next$IQuery$query$arity$1 = ((function (x29887_29896){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883))))));
});})(x29887_29896))
;


var x29891_29897 = om_tutorial.core.Person.prototype;
x29891_29897.om$next$Ident$ = true;

x29891_29897.om$next$Ident$ident$arity$2 = ((function (x29891_29897){
return (function (this$,p__29892){
var map__29893 = p__29892;
var map__29893__$1 = ((((!((map__29893 == null)))?((((map__29893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29893):map__29893);
var name = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29891_29897))
;

x29891_29897.om$next$IQuery$ = true;

x29891_29897.om$next$IQuery$query$arity$1 = ((function (x29891_29897){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883))))));
});})(x29891_29897))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-tutorial.core/Person");
});
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x29902_29905 = om_tutorial.core.RootView.prototype;
x29902_29905.componentWillUpdate = ((function (x29902_29905){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x29902_29905))
;

x29902_29905.shouldComponentUpdate = ((function (x29902_29905){
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
});})(x29902_29905))
;

x29902_29905.componentWillUnmount = ((function (x29902_29905){
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
});})(x29902_29905))
;

x29902_29905.componentDidUpdate = ((function (x29902_29905){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x29902_29905))
;

x29902_29905.isMounted = ((function (x29902_29905){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29902_29905))
;

x29902_29905.componentWillMount = ((function (x29902_29905){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x29902_29905))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x29903_29906 = om_tutorial.core.RootView;
x29903_29906.om$next$IQuery$ = true;

x29903_29906.om$next$IQuery$query$arity$1 = ((function (x29903_29906){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x29903_29906))
;


var x29904_29907 = om_tutorial.core.RootView.prototype;
x29904_29907.om$next$IQuery$ = true;

x29904_29907.om$next$IQuery$query$arity$1 = ((function (x29904_29907){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x29904_29907))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-tutorial.core/RootView");
});
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__29908,_,p__29909){
var map__29910 = p__29908;
var map__29910__$1 = ((((!((map__29910 == null)))?((((map__29910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29910):map__29910);
var state = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29911 = p__29909;
var map__29911__$1 = ((((!((map__29911 == null)))?((((map__29911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29911):map__29911);
var name = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29910,map__29910__$1,state,map__29911,map__29911__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__29910,map__29910__$1,state,map__29911,map__29911__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__29915){
var map__29916 = p__29915;
var map__29916__$1 = ((((!((map__29916 == null)))?((((map__29916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916):map__29916);
var _ = cljs.core.get.call(null,map__29916__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name], null)], null));
var state = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29916,map__29916__$1,_,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),cljs.core.name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__29916,map__29916__$1,_,state){
return (function (p1__29914_SHARP_){
var n = (p1__29914_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__29916,map__29916__$1,_,state))
);
});})(map__29916,map__29916__$1,_,state))
], null);
}));

//# sourceMappingURL=core.js.map