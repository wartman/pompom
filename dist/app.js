(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.has = function(it,elt) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
};
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var _ = $getIterator(it);
		while(_.hasNext()) {
			var _1 = _.next();
			++n;
		}
	} else {
		var x = $getIterator(it);
		while(x.hasNext()) {
			var x1 = x.next();
			if(pred(x1)) {
				++n;
			}
		}
	}
	return n;
};
Math.__name__ = true;
function Pom_main() {
	var boot = new pine_html_dom_DomBootstrap(window.document.getElementById("root"));
	boot.mount(new pompom_App({ }));
}
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.copy = function(o) {
	if(o == null) {
		return null;
	}
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	__class__: haxe_ValueException
});
var haxe_ds_List = function() {
	this.length = 0;
};
haxe_ds_List.__name__ = true;
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = new haxe_ds__$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,last: function() {
		if(this.q == null) {
			return null;
		} else {
			return this.q.item;
		}
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l.item == v) {
				if(prev == null) {
					this.h = l.next;
				} else {
					prev.next = l.next;
				}
				if(this.q == l) {
					this.q = prev;
				}
				this.length--;
				return true;
			}
			prev = l;
			l = l.next;
		}
		return false;
	}
	,iterator: function() {
		return new haxe_ds__$List_ListIterator(this.h);
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
haxe_ds__$List_ListNode.__name__ = true;
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds__$List_ListIterator = function(head) {
	this.head = head;
};
haxe_ds__$List_ListIterator.__name__ = true;
haxe_ds__$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		var val = this.head.item;
		this.head = this.head.next;
		return val;
	}
	,__class__: haxe_ds__$List_ListIterator
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapValueIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
};
var haxe_ds__$StringMap_StringMapValueIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapValueIterator.__name__ = true;
haxe_ds__$StringMap_StringMapValueIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.h[this.keys[this.current++]];
	}
	,__class__: haxe_ds__$StringMap_StringMapValueIterator
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var pine_Component = function(key) {
	this.key = key;
};
pine_Component.__name__ = true;
pine_Component.prototype = {
	shouldBeUpdated: function(newComponent) {
		if(this.getComponentType() == newComponent.getComponentType()) {
			return this.key == newComponent.key;
		} else {
			return false;
		}
	}
	,__class__: pine_Component
};
var pine_Context = function() { };
pine_Context.__name__ = true;
pine_Context.__isInterface__ = true;
pine_Context.prototype = {
	__class__: pine_Context
};
var pine_Debug = function() { };
pine_Debug.__name__ = true;
var pine_Disposable = function() { };
pine_Disposable.__name__ = true;
pine_Disposable.__isInterface__ = true;
pine_Disposable.prototype = {
	__class__: pine_Disposable
};
var pine_DisposableHost = function() { };
pine_DisposableHost.__name__ = true;
pine_DisposableHost.__isInterface__ = true;
pine_DisposableHost.prototype = {
	__class__: pine_DisposableHost
};
var pine_DisposableItem = {};
pine_DisposableItem.ofCallback = function(handler) {
	return new pine_DisposableCallback(handler);
};
var pine_DisposableCallback = function(handler) {
	this.handler = handler;
};
pine_DisposableCallback.__name__ = true;
pine_DisposableCallback.__interfaces__ = [pine_Disposable];
pine_DisposableCallback.prototype = {
	dispose: function() {
		this.handler();
	}
	,__class__: pine_DisposableCallback
};
var pine_Effect = {};
pine_Effect.from = function(context) {
	var this1 = context;
	return this1;
};
pine_Effect._new = function(context) {
	var this1 = context;
	return this1;
};
pine_Effect.add = function(this1,effect) {
	pine_Queue.enqueue(pine_Process.current(),function() {
		this1.addDisposable(new pine_Observer(effect));
	});
};
var pine_ElementStatus = $hxEnums["pine.ElementStatus"] = { __ename__:true,__constructs__:null
	,Pending: {_hx_name:"Pending",_hx_index:0,__enum__:"pine.ElementStatus",toString:$estr}
	,Valid: {_hx_name:"Valid",_hx_index:1,__enum__:"pine.ElementStatus",toString:$estr}
	,Invalid: {_hx_name:"Invalid",_hx_index:2,__enum__:"pine.ElementStatus",toString:$estr}
	,Building: {_hx_name:"Building",_hx_index:3,__enum__:"pine.ElementStatus",toString:$estr}
	,Disposed: {_hx_name:"Disposed",_hx_index:4,__enum__:"pine.ElementStatus",toString:$estr}
};
pine_ElementStatus.__constructs__ = [pine_ElementStatus.Pending,pine_ElementStatus.Valid,pine_ElementStatus.Invalid,pine_ElementStatus.Building,pine_ElementStatus.Disposed];
var pine_InitContext = function() { };
pine_InitContext.__name__ = true;
pine_InitContext.__isInterface__ = true;
pine_InitContext.__interfaces__ = [pine_DisposableHost,pine_Context];
pine_InitContext.prototype = {
	__class__: pine_InitContext
};
var pine_Element = function(component) {
	this.root = null;
	this.parent = null;
	this.hydratingStatus = false;
	this.status = pine_ElementStatus.Pending;
	this.slot = null;
	this.disposables = [];
	this.component = component;
};
pine_Element.__name__ = true;
pine_Element.__interfaces__ = [pine_DisposableHost,pine_Disposable,pine_InitContext,pine_Context];
pine_Element.prototype = {
	getRoot: function() {
		if(this.root == null) {
			throw new pine_PineException("Failed assertion: root != null");
		}
		return this.root;
	}
	,mount: function(parent,slot) {
		this.performSetup(parent,slot);
		this.status = pine_ElementStatus.Building;
		this.performBuild(null);
		this.status = pine_ElementStatus.Valid;
	}
	,hydrate: function(cursor,parent,slot) {
		this.hydratingStatus = true;
		this.performSetup(parent,slot);
		this.status = pine_ElementStatus.Building;
		this.performHydrate(cursor);
		this.status = pine_ElementStatus.Valid;
		this.hydratingStatus = false;
	}
	,update: function(component) {
		this.status = pine_ElementStatus.Building;
		var previousComponent = this.component;
		this.component = component;
		this.performBuild(previousComponent);
		this.status = pine_ElementStatus.Valid;
	}
	,rebuild: function() {
		if(this.status != pine_ElementStatus.Invalid) {
			return;
		}
		this.status = pine_ElementStatus.Building;
		this.performBuild(this.component);
		this.status = pine_ElementStatus.Valid;
	}
	,dispose: function() {
		this.visitChildren(function(child) {
			child.dispose();
		});
		var _g = 0;
		var _g1 = this.disposables;
		while(_g < _g1.length) {
			var disposable = _g1[_g];
			++_g;
			disposable.dispose();
		}
		this.status = pine_ElementStatus.Disposed;
		this.parent = null;
		this.root = null;
		this.slot = null;
	}
	,performSetup: function(parent,slot) {
		this.parent = parent;
		this.slot = slot;
		this.root = parent != null ? parent.root : null;
		this.status = pine_ElementStatus.Valid;
	}
	,invalidate: function() {
		if(this.status == pine_ElementStatus.Invalid) {
			return;
		}
		this.status = pine_ElementStatus.Invalid;
		if(this.root != null) {
			this.root.requestRebuild(this);
		}
	}
	,addDisposable: function(disposable) {
		this.disposables.push(disposable);
	}
	,getComponent: function() {
		return this.component;
	}
	,isHydrating: function() {
		return this.hydratingStatus;
	}
	,queryAncestors: function(query) {
		if(this.parent == null) {
			return haxe_ds_Option.None;
		}
		if(query(this.parent)) {
			return haxe_ds_Option.Some(this.parent);
		}
		return this.parent.queryAncestors(query);
	}
	,findAncestorOfType: function(kind) {
		if(this.parent == null) {
			if(js_Boot.__instanceof(this,kind)) {
				return haxe_ds_Option.Some(this);
			}
			return haxe_ds_Option.None;
		}
		var value = this.parent;
		var _g = js_Boot.__downcastCheck(value,kind) ? value : null;
		if(_g == null) {
			return this.parent.findAncestorOfType(kind);
		} else {
			var found = _g;
			return haxe_ds_Option.Some(found);
		}
	}
	,findAncestorObject: function() {
		var _g = this.findAncestorOfType(pine_ObjectElement);
		switch(_g._hx_index) {
		case 0:
			var root = _g.v;
			return root.getObject();
		case 1:
			throw new pine_PineException("Unable to find ObjectElement ancestor.");
		}
	}
	,queryChildren: function(query) {
		var found = [];
		this.visitChildren(function(child) {
			if(query(child)) {
				found.push(child);
			}
		});
		if(found.length == 0) {
			return haxe_ds_Option.None;
		} else {
			return haxe_ds_Option.Some(found);
		}
	}
	,findChildrenOfType: function(kind) {
		var found = [];
		this.visitChildren(function(child) {
			if(js_Boot.__instanceof(child,kind)) {
				found.push(child);
			}
		});
		if(found.length == 0) {
			return haxe_ds_Option.None;
		} else {
			return haxe_ds_Option.Some(found);
		}
	}
	,getObject: function() {
		var object = null;
		var visit = null;
		visit = function(element) {
			if(element.status == pine_ElementStatus.Disposed) {
				return;
			}
			if(((element) instanceof pine_ObjectElement)) {
				object = element.getObject();
			} else {
				element.visitChildren(visit);
			}
		};
		visit(this);
		if(object == null) {
			throw new pine_PineException("Element does not have an object");
		}
		return object;
	}
	,updateChild: function(child,component,slot) {
		if(component == null) {
			if(child != null) {
				this.removeChild(child);
			}
			return null;
		}
		if(child != null) {
			if(child.component == component) {
				if(child.slot != slot) {
					this.updateSlotForChild(child,slot);
				}
				return child;
			} else if(child.component.shouldBeUpdated(component)) {
				if(child.slot != slot) {
					this.updateSlotForChild(child,slot);
				}
				child.update(component);
				return child;
			} else {
				this.removeChild(child);
				return this.createElementForComponent(component,slot);
			}
		} else {
			return this.createElementForComponent(component,slot);
		}
	}
	,updateSlot: function(slot) {
		this.slot = slot;
		this.visitChildren(function(child) {
			child.updateSlot(slot);
		});
	}
	,diffChildren: function(oldChildren,newComponents) {
		var _gthis = this;
		var newHead = 0;
		var oldHead = 0;
		var newTail = newComponents.length - 1;
		var oldTail = oldChildren.length - 1;
		var previousChild = null;
		var newChildren = [];
		while(oldHead <= oldTail && newHead <= newTail) {
			var oldChild = oldChildren[oldHead];
			var newComponent = newComponents[newHead];
			if(oldChild == null || !oldChild.component.shouldBeUpdated(newComponent)) {
				break;
			}
			var newChild = this.updateChild(oldChild,newComponent,this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
			++oldHead;
		}
		while(oldHead <= oldTail && newHead <= newTail) {
			var oldChild = oldChildren[oldTail];
			var newComponent = newComponents[newTail];
			if(oldChild == null || !oldChild.component.shouldBeUpdated(newComponent)) {
				break;
			}
			--oldTail;
			--newTail;
		}
		var hasOldChildren = oldHead <= oldTail;
		var oldKeyedChildren = null;
		if(hasOldChildren) {
			oldKeyedChildren = pine_Key.createMap();
			while(oldHead <= oldTail) {
				var oldChild = oldChildren[oldHead];
				if(oldChild != null) {
					if(oldChild.component.key != null) {
						oldKeyedChildren.set(oldChild.component.key,oldChild);
					} else {
						this.removeChild(oldChild);
					}
				}
				++oldHead;
			}
		}
		while(newHead <= newTail) {
			var oldChild = null;
			var newComponent = newComponents[newHead];
			if(hasOldChildren) {
				var key = newComponent.key;
				if(key != null) {
					if(oldKeyedChildren == null) {
						throw haxe_Exception.thrown("assert");
					}
					oldChild = oldKeyedChildren.get(key);
					if(oldChild != null) {
						if(oldChild.component.shouldBeUpdated(newComponent)) {
							oldKeyedChildren.remove(key);
						} else {
							oldChild = null;
						}
					}
				}
			}
			var newChild = this.updateChild(oldChild,newComponent,this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
		}
		newTail = newComponents.length - 1;
		oldTail = oldChildren.length - 1;
		while(oldHead <= oldTail && newHead <= newTail) {
			var oldChild = oldChildren[oldHead];
			var newComponent = newComponents[newHead];
			var newChild = this.updateChild(oldChild,newComponent,this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
			++oldHead;
		}
		if(hasOldChildren && (oldKeyedChildren != null && oldKeyedChildren.isNotEmpty())) {
			oldKeyedChildren.each(function(_,element) {
				_gthis.removeChild(element);
			});
		}
		return newChildren;
	}
	,updateSlotForChild: function(child,slot) {
		child.updateSlot(slot);
	}
	,removeChild: function(child) {
		child.dispose();
	}
	,createElementForComponent: function(component,slot) {
		var element = component.createElement();
		element.mount(this,slot);
		return element;
	}
	,hydrateElementForComponent: function(cursor,component,slot) {
		var element = component.createElement();
		element.hydrate(cursor,this,slot);
		return element;
	}
	,createSlotForChild: function(index,previous) {
		return new pine_Slot(index,previous);
	}
	,__class__: pine_Element
};
var pine_ElementVisitor = {};
pine_ElementVisitor._new = function(visitor) {
	var this1 = visitor;
	return this1;
};
pine_ElementVisitor.visit = function(this1,element) {
	this1(element);
};
var pine_HydrationCursor = function() { };
pine_HydrationCursor.__name__ = true;
pine_HydrationCursor.__isInterface__ = true;
pine_HydrationCursor.prototype = {
	__class__: pine_HydrationCursor
};
var pine_ProxyComponent = function(key) {
	pine_Component.call(this,key);
};
pine_ProxyComponent.__name__ = true;
pine_ProxyComponent.__super__ = pine_Component;
pine_ProxyComponent.prototype = $extend(pine_Component.prototype,{
	init: function(context) {
	}
	,createElement: function() {
		return new pine_ProxyElement(this);
	}
	,__class__: pine_ProxyComponent
});
var pine_ImmutableComponent = function(key) {
	pine_ProxyComponent.call(this,key);
};
pine_ImmutableComponent.__name__ = true;
pine_ImmutableComponent.__super__ = pine_ProxyComponent;
pine_ImmutableComponent.prototype = $extend(pine_ProxyComponent.prototype,{
	__class__: pine_ImmutableComponent
});
var pine_Key = {};
pine_Key.createMap = function() {
	return new pine_KeyMap();
};
pine_Key.ofFloat = function(f) {
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
pine_Key.isString = function(this1) {
	return typeof(this1) == "string";
};
var pine_KeyMap = function() {
	this.objects = null;
	this.strings = null;
};
pine_KeyMap.__name__ = true;
pine_KeyMap.prototype = {
	set: function(key,value) {
		if(pine_Key.isString(key)) {
			var key1 = key;
			if(this.strings == null) {
				var _g = new haxe_ds_StringMap();
				_g.h[key1] = value;
				this.strings = _g;
			} else {
				this.strings.h[key1] = value;
			}
		} else if(this.objects == null) {
			var _g = new haxe_ds_ObjectMap();
			_g.set(key,value);
			this.objects = _g;
		} else {
			this.objects.set(key,value);
		}
	}
	,get: function(key) {
		if(pine_Key.isString(key)) {
			var key1 = key;
			if(this.strings == null) {
				return null;
			} else {
				return this.strings.h[key1];
			}
		} else if(this.objects == null) {
			return null;
		} else {
			return this.objects.h[key.__id__];
		}
	}
	,remove: function(key) {
		if(pine_Key.isString(key) && this.strings != null) {
			var key1 = key;
			var _this = this.strings;
			if(Object.prototype.hasOwnProperty.call(_this.h,key1)) {
				delete(_this.h[key1]);
			}
		} else if(this.objects != null) {
			this.objects.remove(key);
		}
	}
	,isNotEmpty: function() {
		if(this.strings == null && this.objects == null) {
			return false;
		}
		var notEmpty = this.strings != null && Lambda.count(this.strings) > 0;
		if(!notEmpty) {
			notEmpty = this.objects != null && Lambda.count(this.objects) > 0;
		}
		return notEmpty;
	}
	,each: function(fn) {
		if(this.strings != null) {
			var h = this.strings.h;
			var _g_h = h;
			var _g_keys = Object.keys(h);
			var _g_length = _g_keys.length;
			var _g_current = 0;
			while(_g_current < _g_length) {
				var key = _g_keys[_g_current++];
				var _g1_key = key;
				var _g1_value = _g_h[key];
				var key1 = _g1_key;
				var value = _g1_value;
				fn(key1,value);
			}
		}
		if(this.objects != null) {
			var map = this.objects;
			var _g_map = map;
			var _g_keys = map.keys();
			while(_g_keys.hasNext()) {
				var key = _g_keys.next();
				var _g1_value = _g_map.get(key);
				var _g1_key = key;
				var key1 = _g1_key;
				var value = _g1_value;
				fn(key1,value);
			}
		}
	}
	,__class__: pine_KeyMap
};
var pine_ObjectComponent = function(key) {
	pine_Component.call(this,key);
};
pine_ObjectComponent.__name__ = true;
pine_ObjectComponent.__super__ = pine_Component;
pine_ObjectComponent.prototype = $extend(pine_Component.prototype,{
	insertObject: function(root,object,slot,findParent) {
		root.insertObject(object,slot,findParent);
	}
	,moveObject: function(root,object,from,to,findParent) {
		root.moveObject(object,from,to,findParent);
	}
	,removeObject: function(root,object,slot) {
		root.removeObject(object,slot);
	}
	,__class__: pine_ObjectComponent
});
var pine_ObjectElement = function(component) {
	this.object = null;
	pine_Element.call(this,component);
};
pine_ObjectElement.__name__ = true;
pine_ObjectElement.__super__ = pine_Element;
pine_ObjectElement.prototype = $extend(pine_Element.prototype,{
	get_objectComponent: function() {
		return this.component;
	}
	,getObject: function() {
		if(this.object == null) {
			throw new pine_PineException("Failed assertion: object != null");
		}
		return this.object;
	}
	,__class__: pine_ObjectElement
});
var pine_ObjectWithChildrenElement = function(component) {
	this.children = [];
	pine_ObjectElement.call(this,component);
};
pine_ObjectWithChildrenElement.__name__ = true;
pine_ObjectWithChildrenElement.__super__ = pine_ObjectElement;
pine_ObjectWithChildrenElement.prototype = $extend(pine_ObjectElement.prototype,{
	getChildren: function() {
		return this.children.slice();
	}
	,performBuild: function(previousComponent) {
		if(previousComponent == null) {
			this.object = this.component.createObject(this.getRoot());
			this.component.insertObject(this.getRoot(),this.object,this.slot,$bind(this,this.findAncestorObject));
			this.initializeChildren();
		} else {
			if(previousComponent != this.component) {
				this.component.updateObject(this.getRoot(),this.getObject(),previousComponent);
			}
			this.rebuildChildren();
		}
	}
	,performHydrate: function(cursor) {
		this.object = cursor.current();
		this.component.updateObject(this.getRoot(),this.object,null);
		var components = this.component.getChildren();
		var objects = cursor.currentChildren();
		var children = [];
		var previous = null;
		var _g = 0;
		var _g1 = components.length;
		while(_g < _g1) {
			var i = _g++;
			var comp = components[i];
			if(comp == null) {
				continue;
			}
			var element = this.hydrateElementForComponent(objects,comp,this.createSlotForChild(i,previous));
			children.push(element);
			previous = element;
		}
		cursor.next();
		this.children = children;
	}
	,initializeChildren: function() {
		var components = this.component.getChildren();
		var previous = null;
		var children = [];
		var _g = 0;
		var _g1 = components.length;
		while(_g < _g1) {
			var i = _g++;
			var comp = components[i];
			if(comp == null) {
				continue;
			}
			var element = this.createElementForComponent(comp,this.createSlotForChild(i,previous));
			children.push(element);
			previous = element;
		}
		this.children = children;
	}
	,rebuildChildren: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.component.getChildren();
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(v != null) {
				_g.push(v);
			}
		}
		var components = _g;
		this.children = this.diffChildren(this.children,components);
	}
	,updateSlot: function(slot) {
		if(this.object == null) {
			throw new pine_PineException("Failed assertion: object != null");
		}
		var previousSlot = this.slot;
		this.slot = slot;
		this.component.moveObject(this.getRoot(),this.object,previousSlot,slot,$bind(this,this.findAncestorObject));
	}
	,dispose: function() {
		if(this.object != null) {
			this.component.removeObject(this.getRoot(),this.object,this.slot);
		}
		pine_ObjectElement.prototype.dispose.call(this);
		this.object = null;
		this.children = [];
	}
	,visitChildren: function(visitor) {
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			visitor(child);
		}
	}
	,__class__: pine_ObjectWithChildrenElement
});
var pine_ObjectWithoutChildrenElement = function(component) {
	pine_ObjectElement.call(this,component);
};
pine_ObjectWithoutChildrenElement.__name__ = true;
pine_ObjectWithoutChildrenElement.__super__ = pine_ObjectElement;
pine_ObjectWithoutChildrenElement.prototype = $extend(pine_ObjectElement.prototype,{
	performBuild: function(previousComponent) {
		if(previousComponent == null) {
			this.object = this.component.createObject(this.getRoot());
			this.component.insertObject(this.getRoot(),this.object,this.slot,$bind(this,this.findAncestorObject));
		} else if(previousComponent != this.component) {
			this.component.updateObject(this.getRoot(),this.getObject(),previousComponent);
		}
	}
	,performHydrate: function(cursor) {
		this.object = cursor.current();
		if(this.object == null) {
			throw new pine_PineException("Failed assertion: object != null");
		}
		this.component.updateObject(this.getRoot(),this.object);
		cursor.next();
	}
	,dispose: function() {
		if(this.object != null) {
			this.component.removeObject(this.getRoot(),this.object,this.slot);
		}
		pine_ObjectElement.prototype.dispose.call(this);
		this.object = null;
	}
	,visitChildren: function(visitor) {
	}
	,__class__: pine_ObjectWithoutChildrenElement
});
var pine_Observer = function(handler,untracked) {
	if(untracked == null) {
		untracked = false;
	}
	this.isUntracked = false;
	this.isRunning = false;
	this.isTriggering = false;
	this.states = new haxe_ds_List();
	this.handler = handler;
	this.isUntracked = untracked;
	this.start();
};
pine_Observer.__name__ = true;
pine_Observer.__interfaces__ = [pine_Disposable];
pine_Observer.scheduleTrigger = function(observers) {
	if(pine_Observer.currentQueue != null) {
		var _g_head = observers.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var observer = val;
			var this1 = pine_Observer.currentQueue;
			if(this1.indexOf(observer) == -1) {
				this1.push(observer);
			}
		}
		return;
	}
	var this1 = [];
	var queue = pine_Observer.currentQueue = this1;
	var _g_head = observers.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var observer = val;
		var this1 = pine_Observer.currentQueue;
		if(this1.indexOf(observer) == -1) {
			this1.push(observer);
		}
	}
	pine_Queue.enqueue(pine_Process.current(),function() {
		pine_Observer.currentQueue = null;
		var observer = queue.pop();
		while(observer != null) {
			observer.trigger();
			observer = queue.pop();
		}
	});
};
pine_Observer.prototype = {
	trigger: function() {
		if(this.isTriggering) {
			throw new pine_PineException("Observer was triggered while already running");
		}
		if(this.isRunning) {
			var err = null;
			this.isTriggering = true;
			this.clearTrackedSignals();
			if(this.isUntracked) {
				pine_Observer.stack.push(null);
			} else {
				pine_Observer.stack.push(this);
			}
			try {
				this.handler();
			} catch( _g ) {
				var e = haxe_Exception.caught(_g);
				err = e;
			}
			pine_Observer.stack.pop();
			this.isTriggering = false;
			if(err != null) {
				throw haxe_Exception.thrown(err);
			}
		}
	}
	,stop: function() {
		this.isRunning = false;
		this.clearTrackedSignals();
	}
	,start: function() {
		if(!this.isRunning) {
			this.isRunning = true;
			this.trigger();
		}
	}
	,track: function(state) {
		if(!Lambda.has(state.observers,this)) {
			state.observers.add(this);
			this.states.add(state);
		}
	}
	,clearTrackedSignals: function() {
		var _g_head = this.states.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var state = val;
			state.observers.remove(this);
		}
		this.states.clear();
	}
	,dispose: function() {
		this.stop();
	}
	,__class__: pine_Observer
};
var pine__$Observer_ObserverQueue = {};
pine__$Observer_ObserverQueue._new = function() {
	var this1 = [];
	return this1;
};
pine__$Observer_ObserverQueue.enqueue = function(this1,observer) {
	if(this1.indexOf(observer) == -1) {
		this1.push(observer);
	}
};
pine__$Observer_ObserverQueue.dequeue = function(this1) {
	var observer = this1.pop();
	while(observer != null) {
		observer.trigger();
		observer = this1.pop();
	}
};
var pine_ObserverComponent = function(key) {
	pine_ProxyComponent.call(this,key);
};
pine_ObserverComponent.__name__ = true;
pine_ObserverComponent.__super__ = pine_ProxyComponent;
pine_ObserverComponent.prototype = $extend(pine_ProxyComponent.prototype,{
	createElement: function() {
		return new pine_ObserverElement(this);
	}
	,__class__: pine_ObserverComponent
});
var pine_ProxyElement = function(component) {
	this.child = null;
	pine_Element.call(this,component);
};
pine_ProxyElement.__name__ = true;
pine_ProxyElement.__super__ = pine_Element;
pine_ProxyElement.prototype = $extend(pine_Element.prototype,{
	get_proxy: function() {
		return this.component;
	}
	,render: function() {
		return this.component.render(this);
	}
	,performHydrate: function(cursor) {
		this.component.init(this);
		this.child = this.hydrateElementForComponent(cursor,this.render(),this.slot);
	}
	,performBuild: function(previousComponent) {
		if(previousComponent == null) {
			this.component.init(this);
		}
		this.child = this.updateChild(this.child,this.render(),this.slot);
	}
	,visitChildren: function(visitor) {
		if(this.child != null) {
			visitor(this.child);
		}
	}
	,__class__: pine_ProxyElement
});
var pine_ObserverElement = function(component) {
	this.result = null;
	this.observer = null;
	this.trackedObject = null;
	pine_ProxyElement.call(this,component);
};
pine_ObserverElement.__name__ = true;
pine_ObserverElement.__super__ = pine_ProxyElement;
pine_ObserverElement.prototype = $extend(pine_ProxyElement.prototype,{
	get_observerComponent: function() {
		return this.component;
	}
	,performHydrate: function(cursor) {
		this.trackedObject = this.component.createTrackedObject();
		this.component.init(this);
		this.setupObserver();
		if(this.result == null) {
			throw new pine_PineException("Failed assertion: result != null");
		}
		this.child = this.hydrateElementForComponent(cursor,this.result,this.slot);
	}
	,performBuild: function(previousComponent) {
		if(previousComponent == null || this.trackedObject == null) {
			this.trackedObject = this.component.createTrackedObject();
		} else if(previousComponent != this.component) {
			this.component.reuseTrackedObject(this.trackedObject);
		}
		if(previousComponent == null) {
			this.component.init(this);
		}
		if(this.observer == null) {
			this.setupObserver();
		} else if(previousComponent != this.component) {
			this.observer.trigger();
		}
		if(this.result == null) {
			throw new pine_PineException("Failed assertion: result != null");
		}
		this.child = this.updateChild(this.child,this.result,this.slot);
	}
	,setupObserver: function() {
		var _gthis = this;
		this.observer = new pine_Observer(function() {
			_gthis.result = _gthis.render();
			if(_gthis.status != pine_ElementStatus.Building) {
				_gthis.invalidate();
			}
		});
	}
	,dispose: function() {
		pine_ProxyElement.prototype.dispose.call(this);
		this.result = null;
		if(this.observer != null) {
			this.observer.dispose();
			this.observer = null;
		}
	}
	,__class__: pine_ObserverElement
});
var pine_PineException = function(message,previous,native) {
	haxe_Exception.call(this,message,previous,native);
};
pine_PineException.__name__ = true;
pine_PineException.__super__ = haxe_Exception;
pine_PineException.prototype = $extend(haxe_Exception.prototype,{
	__class__: pine_PineException
});
var pine_Process = {};
pine_Process.current = function() {
	var process = pine_Process.stack.last();
	if(process == null) {
		return pine_Process.start();
	}
	return process;
};
pine_Process.scope = function(run) {
	pine_Process.start();
	run();
};
pine_Process.defer = function(effect) {
	return pine_Queue.enqueue(pine_Process.current(),effect);
};
pine_Process.start = function() {
	var effects = null;
	var this1 = effects != null ? effects : [];
	var this2 = this1;
	var process = this2;
	pine_Process.stack.add(process);
	pine_Process_nextFrame(function() {
		pine_Process.stack.remove(process);
		pine_Queue.dequeue(process);
	});
	return process;
};
pine_Process._new = function() {
	var effects = null;
	var this1 = effects != null ? effects : [];
	var this2 = this1;
	return this2;
};
function pine_Process_nextFrame(exec) {
	if(pine_Process_hasRaf) {
		window.requestAnimationFrame(function(_) {
			exec();
		});
	} else {
		haxe_Timer.delay(function() {
			exec();
		},10);
	}
}
var pine_Queue = {};
pine_Queue._new = function(effects) {
	var this1 = effects != null ? effects : [];
	return this1;
};
pine_Queue.copy = function(this1) {
	var effects = this1.slice();
	var this1 = effects != null ? effects : [];
	return this1;
};
pine_Queue.enqueue = function(this1,effect) {
	this1.push(effect);
	return { cancel : function() {
		HxOverrides.remove(this1,effect);
	}};
};
pine_Queue.dequeue = function(this1) {
	var effect = this1.pop();
	while(effect != null) {
		effect();
		effect = this1.pop();
	}
};
var pine_Record = function() { };
pine_Record.__name__ = true;
pine_Record.__isInterface__ = true;
pine_Record.__interfaces__ = [pine_Disposable];
var pine_Root = function() { };
pine_Root.__name__ = true;
pine_Root.__isInterface__ = true;
pine_Root.prototype = {
	__class__: pine_Root
};
var pine_RootComponent = function(props) {
	pine_ObjectComponent.call(this,null);
	this.child = props.child;
};
pine_RootComponent.__name__ = true;
pine_RootComponent.__super__ = pine_ObjectComponent;
pine_RootComponent.prototype = $extend(pine_ObjectComponent.prototype,{
	createObject: function(_) {
		return this.getRootObject();
	}
	,getChildren: function() {
		return [this.child];
	}
	,insertObject: function(root,object,slot,findParent) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
	,moveObject: function(root,object,from,to,findParent) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
	,removeObject: function(root,object,slot) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
	,__class__: pine_RootComponent
});
var pine_RootElement = function(rootComponent) {
	this.invalidElements = null;
	this.isScheduled = false;
	this.child = null;
	pine_ObjectElement.call(this,rootComponent);
	this.parent = null;
	this.root = this;
};
pine_RootElement.__name__ = true;
pine_RootElement.__interfaces__ = [pine_Root];
pine_RootElement.__super__ = pine_ObjectElement;
pine_RootElement.prototype = $extend(pine_ObjectElement.prototype,{
	get_rootComponent: function() {
		return this.component;
	}
	,getRoot: function() {
		return this;
	}
	,bootstrap: function() {
		this.mount(null);
	}
	,performSetup: function(parent,slot) {
		this.slot = slot;
		this.status = pine_ElementStatus.Valid;
	}
	,requestRebuild: function(child) {
		var _gthis = this;
		if(child == this) {
			this.isScheduled = true;
			this.invalidElements = null;
			pine_Queue.enqueue(pine_Process.current(),function() {
				_gthis.rebuild();
				_gthis.isScheduled = false;
			});
			return;
		}
		if(this.status == pine_ElementStatus.Invalid) {
			return;
		}
		if(this.invalidElements == null) {
			this.invalidElements = [];
			this.scheduleRebuildInvalidElements();
		}
		if(this.invalidElements.indexOf(child) != -1) {
			return;
		}
		this.invalidElements.push(child);
	}
	,scheduleRebuildInvalidElements: function() {
		if(this.isScheduled) {
			return;
		}
		this.isScheduled = true;
		pine_Queue.enqueue(pine_Process.current(),$bind(this,this.performRebuildInvalidElements));
	}
	,performRebuildInvalidElements: function() {
		var _gthis = this;
		pine_Process.start();
		_gthis.isScheduled = false;
		if(_gthis.invalidElements != null) {
			var elements = _gthis.invalidElements.slice();
			_gthis.invalidElements = null;
			var _g = 0;
			while(_g < elements.length) {
				var el = elements[_g];
				++_g;
				el.rebuild();
			}
		}
	}
	,performBuild: function(previousComponent) {
		var _gthis = this;
		pine_Process.start();
		if(previousComponent == null) {
			_gthis.object = _gthis.component.createObject(_gthis);
		} else if(previousComponent != _gthis.component) {
			_gthis.component.updateObject(_gthis,previousComponent);
		}
		_gthis.child = _gthis.updateChild(_gthis.child,_gthis.component.child,_gthis.slot);
	}
	,performHydrate: function(cursor) {
		var _gthis = this;
		pine_Process.start();
		_gthis.object = cursor.current();
		var objects = cursor.currentChildren();
		var comp = _gthis.component.child;
		if(comp != null) {
			_gthis.child = _gthis.hydrateElementForComponent(objects,comp,_gthis.slot);
			cursor.next();
		}
	}
	,visitChildren: function(visitor) {
		if(this.child != null) {
			visitor(this.child);
		}
	}
	,__class__: pine_RootElement
});
var pine_Slot = function(index,previous) {
	this.index = index;
	this.previous = previous;
};
pine_Slot.__name__ = true;
pine_Slot.prototype = {
	indexChanged: function(other) {
		return this.index != other.index;
	}
	,__class__: pine_Slot
};
var pine_State = function(initialValue,comparator) {
	this.isDisposed = false;
	this.observers = new haxe_ds_List();
	this.comparator = comparator != null ? comparator : function(a,b) {
		return a != b;
	};
	this.value = initialValue;
	this.notify();
};
pine_State.__name__ = true;
pine_State.__interfaces__ = [pine_Disposable];
pine_State.prototype = {
	get: function() {
		if(this.isDisposed) {
			throw new pine_PineException("Cannot use a state that has already been disposed.");
		}
		var observer = pine_Observer.stack.last();
		if(observer != null) {
			observer.track(this);
		}
		return this.value;
	}
	,set: function(newValue) {
		if(this.isDisposed) {
			throw new pine_PineException("Cannot use a state that has already been disposed.");
		}
		if(!this.comparator(this.value,newValue)) {
			return this.value;
		}
		this.value = newValue;
		this.notify();
		return this.value;
	}
	,dispose: function() {
		this.observers.clear();
		this.isDisposed = true;
	}
	,notify: function() {
		if(this.observers.length > 0) {
			pine_Observer.scheduleTrigger(this.observers);
		}
	}
	,__class__: pine_State
};
var pine_TrackedObject = function() { };
pine_TrackedObject.__name__ = true;
var pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f = function(props) {
	this.state_secondsElapsed = new pine_State(props.secondsElapsed);
	this.state_mode = new pine_State(props.mode);
};
pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f.__name__ = true;
pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f.__interfaces__ = [pine_Disposable];
pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f.prototype = {
	get_secondsElapsed: function() {
		return this.state_secondsElapsed.get();
	}
	,set_secondsElapsed: function(value) {
		return this.state_secondsElapsed.set(value);
	}
	,get_mode: function() {
		return this.state_mode.get();
	}
	,set_mode: function(value) {
		return this.state_mode.set(value);
	}
	,dispose: function() {
		this.state_secondsElapsed.dispose();
		this.state_mode.dispose();
	}
	,replace: function(props) {
		this.state_secondsElapsed.set(props.secondsElapsed);
		this.state_mode.set(props.mode);
	}
	,__class__: pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f
};
var pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09 = function(props) {
	this.state_timer = new pine_State(props.timer);
};
pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.__name__ = true;
pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.__interfaces__ = [pine_Disposable];
pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.prototype = {
	get_timer: function() {
		return this.state_timer.get();
	}
	,set_timer: function(value) {
		return this.state_timer.set(value);
	}
	,dispose: function() {
		this.state_timer.dispose();
	}
	,replace: function(props) {
		this.state_timer.set(props.timer);
	}
	,__class__: pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09
};
var pine_UniqueId = {};
pine_UniqueId._new = function() {
	var this1 = pine_UniqueId.uid++;
	return this1;
};
pine_UniqueId.toString = function(this1) {
	return this1 + "";
};
var pine_html_HtmlBootstrap = function(el) {
	this.el = el == null ? this.getDefaultRoot() : el;
};
pine_html_HtmlBootstrap.__name__ = true;
pine_html_HtmlBootstrap.prototype = {
	mount: function(child) {
		var root = this.createRoot(child);
		var el = root.createElement();
		el.bootstrap();
		return el;
	}
	,hydrate: function(child) {
		var root = this.createRoot(child);
		var el = root.createElement();
		el.hydrate(this.createHydrator(),null);
		return el;
	}
	,__class__: pine_html_HtmlBootstrap
};
var pine_html_HtmlChild = {};
pine_html_HtmlChild.ofString = function(content) {
	return new pine_html_HtmlTextComponent({ content : content});
};
var pine_html_HtmlElementComponent = function(props) {
	pine_ObjectComponent.call(this,props.key);
	this.tag = props.tag;
	this.type = pine_html_HtmlElementComponent.getTypeForTag(props.tag);
	this.attrs = props.attrs;
	this.isSvg = props.isSvg == null ? false : props.isSvg;
	this.children = props.children;
};
pine_html_HtmlElementComponent.__name__ = true;
pine_html_HtmlElementComponent.getTypeForTag = function(tag) {
	var type = pine_html_HtmlElementComponent.types.h[tag];
	if(type == null) {
		var this1 = pine_UniqueId.uid++;
		type = this1;
		pine_html_HtmlElementComponent.types.h[tag] = type;
	}
	return type;
};
pine_html_HtmlElementComponent.__super__ = pine_ObjectComponent;
pine_html_HtmlElementComponent.prototype = $extend(pine_ObjectComponent.prototype,{
	getChildren: function() {
		if(this.children == null) {
			return [];
		} else {
			return this.children;
		}
	}
	,getComponentType: function() {
		return this.type;
	}
	,createObject: function(root) {
		var html = root;
		var object = html.createHtmlElement(this.tag,this.attrs,this.isSvg);
		return object;
	}
	,updateObject: function(root,object,previousComponent) {
		var html = root;
		var prev = previousComponent;
		html.updateHtmlElement(object,this.attrs,prev != null ? prev.attrs : null);
		return object;
	}
	,createElement: function() {
		return new pine_ObjectWithChildrenElement(this);
	}
	,__class__: pine_html_HtmlElementComponent
});
var pine_html_HtmlRoot = function() { };
pine_html_HtmlRoot.__name__ = true;
pine_html_HtmlRoot.__isInterface__ = true;
pine_html_HtmlRoot.__interfaces__ = [pine_Root];
pine_html_HtmlRoot.prototype = {
	__class__: pine_html_HtmlRoot
};
var pine_html_HtmlTextComponent = function(props) {
	pine_ObjectComponent.call(this,props.key);
	this.content = props.content;
};
pine_html_HtmlTextComponent.__name__ = true;
pine_html_HtmlTextComponent.__super__ = pine_ObjectComponent;
pine_html_HtmlTextComponent.prototype = $extend(pine_ObjectComponent.prototype,{
	getChildren: function() {
		return [];
	}
	,getComponentType: function() {
		return pine_html_HtmlTextComponent.type;
	}
	,createObject: function(root) {
		var html = root;
		return html.createHtmlText(this.content);
	}
	,updateObject: function(root,object,previousComponent) {
		var html = root;
		var prev = previousComponent;
		html.updateHtmlText(object,this.content,prev != null ? prev.content : null);
		return object;
	}
	,createElement: function() {
		return new pine_ObjectWithoutChildrenElement(this);
	}
	,__class__: pine_html_HtmlTextComponent
});
var pine_html_TagFactory = function() { };
pine_html_TagFactory.__name__ = true;
var pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5 = function() { };
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.__name__ = true;
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.a = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "a", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.article = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "article", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.aside = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "aside", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.audio = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "audio", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.b = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "b", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.blockquote = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "blockquote", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.body = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "body", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.button = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "button", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.canvas = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "canvas", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.code = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "code", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.dd = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "dd", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.del = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "del", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.details = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "details", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.div = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "div", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.dl = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "dl", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.dt = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "dt", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.em = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "em", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.fieldset = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "fieldset", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.figcaption = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "figcaption", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.figure = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "figure", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.footer = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "footer", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.form = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "form", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h1 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h1", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h2 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h2", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h3 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h3", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h4 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h4", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h5 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h5", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.h6 = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "h6", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.head = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "head", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.header = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "header", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.html = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "html", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.i = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "i", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.iframe = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "iframe", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.ins = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "ins", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.label = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "label", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.legend = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "legend", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.li = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "li", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.main = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "main", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.menu = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "menu", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.nav = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "nav", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.object = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "object", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.ol = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "ol", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.option = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "option", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.p = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "p", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.picture = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "picture", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.pre = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "pre", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.section = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "section", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.select = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "select", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.small = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "small", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.span = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "span", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.strong = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "strong", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.summary = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "summary", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.table = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "table", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.tbody = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "tbody", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.td = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "td", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.tfoot = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "tfoot", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.th = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "th", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.thead = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "thead", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.title = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "title", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.tr = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "tr", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.ul = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "ul", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.video = function(attrs) {
	var $l=arguments.length;
	var children = new Array($l>1?$l-1:0);
	for(var $i=1;$i<$l;++$i){children[$i-1]=arguments[$i];}
	return new pine_html_HtmlElementComponent({ tag : "video", attrs : attrs, key : attrs.key, isSvg : false, children : children.slice()});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.script = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "script", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.style = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "style", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.textarea = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "textarea", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.br = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "br", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.embed = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "embed", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.hr = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "hr", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.img = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "img", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.input = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "input", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.link = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "link", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.meta = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "meta", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.param = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "param", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.source = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "source", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.track = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "track", attrs : attrs, isSvg : false, key : attrs.key});
};
pine_html_TagFactory_$63d23d0367521d2e6059e9a4fdf297c5.wbr = function(attrs) {
	return new pine_html_HtmlElementComponent({ tag : "wbr", attrs : attrs, isSvg : false, key : attrs.key});
};
var pine_html_dom_DomBootstrap = function(el) {
	pine_html_HtmlBootstrap.call(this,el);
};
pine_html_dom_DomBootstrap.__name__ = true;
pine_html_dom_DomBootstrap.__super__ = pine_html_HtmlBootstrap;
pine_html_dom_DomBootstrap.prototype = $extend(pine_html_HtmlBootstrap.prototype,{
	getDefaultRoot: function() {
		return window.document.getElementById("root");
	}
	,createHydrator: function() {
		return new pine_html_dom_DomHydrationCursor(this.el);
	}
	,createRoot: function(child) {
		return new pine_html_dom_DomRoot({ el : this.el, child : child});
	}
	,__class__: pine_html_dom_DomBootstrap
});
var pine_html_dom_DomHydrationCursor = function(node) {
	this.node = node;
};
pine_html_dom_DomHydrationCursor.__name__ = true;
pine_html_dom_DomHydrationCursor.__interfaces__ = [pine_HydrationCursor];
pine_html_dom_DomHydrationCursor.prototype = {
	current: function() {
		return this.node;
	}
	,next: function() {
		if(this.node == null) {
			return;
		}
		this.node = this.node.nextSibling;
	}
	,currentChildren: function() {
		if(this.node == null) {
			return new pine_html_dom_DomHydrationCursor(null);
		}
		return new pine_html_dom_DomHydrationCursor(this.node.firstChild);
	}
	,move: function(current) {
		this.node = current;
	}
	,__class__: pine_html_dom_DomHydrationCursor
};
var pine_html_dom_DomRoot = function(props) {
	pine_RootComponent.call(this,props);
	this.el = props.el;
};
pine_html_dom_DomRoot.__name__ = true;
pine_html_dom_DomRoot.__super__ = pine_RootComponent;
pine_html_dom_DomRoot.prototype = $extend(pine_RootComponent.prototype,{
	getComponentType: function() {
		return pine_html_dom_DomRoot.type;
	}
	,getRootObject: function() {
		return this.el;
	}
	,createElement: function() {
		return new pine_html_dom_DomRootElement(this);
	}
	,updateObject: function(root,object,previousComponent) {
		return object;
	}
	,__class__: pine_html_dom_DomRoot
});
var pine_html_dom_DomRootElement = function(rootComponent) {
	pine_RootElement.call(this,rootComponent);
};
pine_html_dom_DomRootElement.__name__ = true;
pine_html_dom_DomRootElement.__interfaces__ = [pine_html_HtmlRoot];
pine_html_dom_DomRootElement.__super__ = pine_RootElement;
pine_html_dom_DomRootElement.prototype = $extend(pine_RootElement.prototype,{
	createHtmlElement: function(tag,attrs,isSvg) {
		var el = isSvg ? window.document.createElementNS("http://www.w3.org/2000/svg",tag) : window.document.createElement(tag);
		this.updateHtmlElement(el,attrs);
		return el;
	}
	,updateHtmlElement: function(object,newAttrs,oldAttrs) {
		var el = object;
		if(oldAttrs == null) {
			oldAttrs = { };
		}
		var el1 = el;
		pine_html_shared_ObjectTools.diffObject(oldAttrs,newAttrs,function(name,oldValue,newValue) {
			pine_html_dom_DomTools.updateNodeAttribute(el1,name,oldValue,newValue);
		});
	}
	,createHtmlText: function(content) {
		return new Text(content);
	}
	,updateHtmlText: function(object,content,previous) {
		var text = object;
		if(previous != null && content != previous) {
			text.textContent = content == null ? "" : content;
		}
	}
	,insertObject: function(object,slot,findParent) {
		var el = object;
		if(slot != null && slot.previous != null) {
			var relative = slot.previous.getObject();
			relative.after(el);
		} else {
			var parent = findParent();
			parent.prepend(el);
		}
	}
	,moveObject: function(object,from,to,findParent) {
		var el = object;
		if(to == null) {
			if(from != null) {
				this.removeObject(object,from);
			}
			return;
		}
		if(from != null && !from.indexChanged(to)) {
			return;
		}
		if(to.previous == null) {
			var parent = findParent();
			parent.prepend(el);
			return;
		}
		var relative = to.previous.getObject();
		relative.after(el);
	}
	,removeObject: function(object,slot) {
		var el = object;
		el.remove();
	}
	,createPlaceholderObject: function(component) {
		return this.createHtmlText("");
	}
	,__class__: pine_html_dom_DomRootElement
});
var pine_html_dom_DomTools = function() { };
pine_html_dom_DomTools.__name__ = true;
pine_html_dom_DomTools.updateNodeAttribute = function(el,name,oldValue,newValue) {
	var isSvg = el.namespaceURI == "http://www.w3.org/2000/svg";
	switch(name) {
	case "className":
		pine_html_dom_DomTools.updateNodeAttribute(el,"class",oldValue,newValue);
		break;
	case "key":case "ref":
		break;
	case "checked":case "selected":case "value":
		if(!isSvg) {
			el[name] = newValue;
		} else if(!isSvg && name in el) {
			el[name] = newValue;
		} else {
			name = pine_html_dom_DomTools.getHtmlName(name);
			if(name.charAt(0) == "o" && name.charAt(1) == "n") {
				var name1 = name.toLowerCase();
				if(newValue == null) {
					el[name1] = null;
				} else {
					el[name1] = newValue;
				}
			} else if(newValue == null || typeof(newValue) == "boolean" && newValue == false) {
				el.removeAttribute(name);
			} else if(typeof(newValue) == "boolean" && newValue == true) {
				el.setAttribute(name,name);
			} else {
				el.setAttribute(name,newValue);
			}
		}
		break;
	case "xmlns":
		if(!isSvg) {
			if(!isSvg && name in el) {
				el[name] = newValue;
			} else {
				name = pine_html_dom_DomTools.getHtmlName(name);
				if(name.charAt(0) == "o" && name.charAt(1) == "n") {
					var name1 = name.toLowerCase();
					if(newValue == null) {
						el[name1] = null;
					} else {
						el[name1] = newValue;
					}
				} else if(newValue == null || typeof(newValue) == "boolean" && newValue == false) {
					el.removeAttribute(name);
				} else if(typeof(newValue) == "boolean" && newValue == true) {
					el.setAttribute(name,name);
				} else {
					el.setAttribute(name,newValue);
				}
			}
		}
		break;
	default:
		if(!isSvg && name in el) {
			el[name] = newValue;
		} else {
			name = pine_html_dom_DomTools.getHtmlName(name);
			if(name.charAt(0) == "o" && name.charAt(1) == "n") {
				var name1 = name.toLowerCase();
				if(newValue == null) {
					el[name1] = null;
				} else {
					el[name1] = newValue;
				}
			} else if(newValue == null || typeof(newValue) == "boolean" && newValue == false) {
				el.removeAttribute(name);
			} else if(typeof(newValue) == "boolean" && newValue == true) {
				el.setAttribute(name,name);
			} else {
				el.setAttribute(name,newValue);
			}
		}
	}
};
pine_html_dom_DomTools.getHtmlName = function(name) {
	if(StringTools.startsWith(name,"aria")) {
		return "aria-" + HxOverrides.substr(name,4,null).toLowerCase();
	}
	return name;
};
var pine_html_shared_ObjectTools = function() { };
pine_html_shared_ObjectTools.__name__ = true;
pine_html_shared_ObjectTools.diffObject = function(oldProps,newProps,apply) {
	if(oldProps == newProps) {
		return 0;
	}
	var changed = 0;
	var this1;
	if(newProps == null) {
		newProps = pine_html_shared_ObjectTools.EMPTY;
		this1 = oldProps;
	} else if(oldProps == null) {
		oldProps = pine_html_shared_ObjectTools.EMPTY;
		this1 = newProps;
	} else {
		var ret = Reflect.copy(newProps);
		var _g = 0;
		var _g1 = Reflect.fields(oldProps);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			ret[key] = true;
		}
		this1 = ret;
	}
	var keys = Reflect.fields(this1);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		var _g1 = oldProps[key];
		var _g2 = newProps[key];
		if(_g1 == null) {
			var a = _g1;
			var b = _g2;
			if(a != b) {
				var a1 = _g1;
				var b1 = _g2;
				apply(key,a1,b1);
				++changed;
			}
		} else {
			var a2 = _g1;
			var b2 = _g2;
			if(a2 != b2) {
				var a3 = _g1;
				var b3 = _g2;
				apply(key,a3,b3);
				++changed;
			}
		}
	}
	return changed;
};
pine_html_shared_ObjectTools.merge = function(props,other) {
	if(props == other) {
		return props;
	}
	var obj = { };
	pine_html_shared_ObjectTools.diffObject(props,other,function(key,a,b) {
		if(b == null) {
			obj[key] = a;
		} else {
			obj[key] = b;
		}
	});
	return obj;
};
var pompom_App = function(props) {
	this.state = new pompom_TimerState({ mode : pompom_TimerMode.Paused});
	pine_ImmutableComponent.call(this,props.key);
	if(props.state != null) {
		this.state = props.state;
	}
};
pompom_App.__name__ = true;
pompom_App.__super__ = pine_ImmutableComponent;
pompom_App.prototype = $extend(pine_ImmutableComponent.prototype,{
	init: function(context) {
		var _gthis = this;
		var this1 = context;
		var this11 = this1;
		var effect = function() {
			var title = window.document.head.querySelector("title");
			switch(_gthis.state.tracked.state_mode.get()._hx_index) {
			case 0:
				title.innerHTML = "PomPom | Paused";
				break;
			case 1:
				title.innerHTML = "PomPom | Working";
				break;
			case 2:
				title.innerHTML = "PomPom | On Break";
				break;
			}
		};
		pine_Queue.enqueue(pine_Process.current(),function() {
			this11.addDisposable(new pine_Observer(effect));
		});
	}
	,render: function(context) {
		var _gthis = this;
		var attrs = { };
		var array = new pompom_TimerDisplay({ timer : this.state});
		var attrs1 = { };
		var attrs2 = { onclick : function(e) {
			e.preventDefault();
			_gthis.state.start();
		}};
		var this1 = [new pine_html_HtmlTextComponent({ content : "Start"})];
		var array1 = new pine_html_HtmlElementComponent({ tag : "button", attrs : attrs2, key : attrs2.key, isSvg : false, children : this1.slice()});
		var attrs2 = { onclick : function(e) {
			e.preventDefault();
			_gthis.state.pause();
		}};
		var this1 = [new pine_html_HtmlTextComponent({ content : "Pause"})];
		var array2 = new pine_html_HtmlElementComponent({ tag : "button", attrs : attrs2, key : attrs2.key, isSvg : false, children : this1.slice()});
		var attrs2 = { onclick : function(e) {
			e.preventDefault();
			_gthis.state.reset();
		}};
		var this1 = [new pine_html_HtmlTextComponent({ content : "Reset"})];
		var this11 = [array1,array2,new pine_html_HtmlElementComponent({ tag : "button", attrs : attrs2, key : attrs2.key, isSvg : false, children : this1.slice()})];
		var this1 = [array,new pine_html_HtmlElementComponent({ tag : "div", attrs : attrs1, key : attrs1.key, isSvg : false, children : this11.slice()})];
		return new pine_html_HtmlElementComponent({ tag : "div", attrs : attrs, key : attrs.key, isSvg : false, children : this1.slice()});
	}
	,getComponentType: function() {
		return pompom_App.type;
	}
	,__class__: pompom_App
});
var pompom_TimerDisplay = function(props) {
	this.trackedObject = null;
	pine_ObserverComponent.call(this,props.key);
	this.trackedObjectProps = { timer : props.timer};
};
pompom_TimerDisplay.__name__ = true;
pompom_TimerDisplay.__super__ = pine_ObserverComponent;
pompom_TimerDisplay.prototype = $extend(pine_ObserverComponent.prototype,{
	render: function(context) {
		var attrs = { };
		var attrs1 = { };
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		var array;
		switch(this.trackedObject.state_timer.get().tracked.state_mode.get()._hx_index) {
		case 0:
			array = new pine_html_HtmlTextComponent({ content : "Paused"});
			break;
		case 1:
			array = new pine_html_HtmlTextComponent({ content : "Work"});
			break;
		case 2:
			array = new pine_html_HtmlTextComponent({ content : "Break"});
			break;
		}
		var this1 = [array];
		var array = new pine_html_HtmlElementComponent({ tag : "h3", attrs : attrs1, key : attrs1.key, isSvg : false, children : this1.slice()});
		var attrs1 = { };
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		var this1 = [new pine_html_HtmlTextComponent({ content : this.format(new Date(this.trackedObject.state_timer.get().tracked.state_secondsElapsed.get() * 1000))})];
		var this11 = [array,new pine_html_HtmlElementComponent({ tag : "h1", attrs : attrs1, key : attrs1.key, isSvg : false, children : this1.slice()})];
		return new pine_html_HtmlElementComponent({ tag : "div", attrs : attrs, key : attrs.key, isSvg : false, children : this11.slice()});
	}
	,format: function(date) {
		var minutes = date.getMinutes() + "";
		var seconds = date.getSeconds() + "";
		if(minutes.length == 1) {
			minutes = "0" + minutes;
		}
		if(seconds.length == 1) {
			seconds = "0" + seconds;
		}
		return "" + minutes + ":" + seconds;
	}
	,getComponentType: function() {
		return pompom_TimerDisplay.type;
	}
	,getTrackedObject: function() {
		return this.trackedObject;
	}
	,createTrackedObject: function() {
		this.trackedObject = new pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09({ timer : this.trackedObjectProps.timer});
		return this.trackedObject;
	}
	,reuseTrackedObject: function(trackedObject) {
		this.trackedObject = trackedObject;
		this.trackedObject.replace(this.trackedObjectProps);
		return this.trackedObject;
	}
	,get_timer: function() {
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		return this.trackedObject.state_timer.get();
	}
	,set_timer: function(value) {
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		this.trackedObject.state_timer.set(value);
		return value;
	}
	,__class__: pompom_TimerDisplay
});
var pompom_TimerMode = $hxEnums["pompom.TimerMode"] = { __ename__:true,__constructs__:null
	,Paused: {_hx_name:"Paused",_hx_index:0,__enum__:"pompom.TimerMode",toString:$estr}
	,Working: {_hx_name:"Working",_hx_index:1,__enum__:"pompom.TimerMode",toString:$estr}
	,Break: {_hx_name:"Break",_hx_index:2,__enum__:"pompom.TimerMode",toString:$estr}
};
pompom_TimerMode.__constructs__ = [pompom_TimerMode.Paused,pompom_TimerMode.Working,pompom_TimerMode.Break];
var pompom_TimerState = function(props) {
	this.timer = null;
	this.prevMode = null;
	if(props.mode == null) {
		props.mode = pompom_TimerMode.Paused;
	}
	if(props.secondsElapsed == null) {
		props.secondsElapsed = 0;
	}
	this.tracked = new pine_TrackedObject_$27c716fd7be837b16716bb1de74e2a1f({ mode : props.mode, secondsElapsed : props.secondsElapsed});
};
pompom_TimerState.__name__ = true;
pompom_TimerState.__interfaces__ = [pine_Record];
pompom_TimerState.prototype = {
	start: function() {
		if(this.tracked.state_mode.get() != pompom_TimerMode.Paused) {
			return;
		}
		var value = this.prevMode != null ? this.prevMode : pompom_TimerMode.Working;
		this.tracked.state_mode.set(value);
		this.prevMode = null;
		if(this.timer != null) {
			this.timer.stop();
		}
		this.timer = this.createTimer();
	}
	,reset: function() {
		this.tracked.state_secondsElapsed.set(0);
		var value = pompom_TimerMode.Working;
		this.tracked.state_mode.set(value);
		this.prevMode = null;
		if(this.timer != null) {
			this.timer.stop();
		}
		this.timer = this.createTimer();
	}
	,pause: function() {
		if(this.tracked.state_mode.get() == pompom_TimerMode.Paused) {
			return;
		}
		this.prevMode = this.tracked.state_mode.get();
		var value = pompom_TimerMode.Paused;
		this.tracked.state_mode.set(value);
		this.timer.stop();
		this.timer = null;
	}
	,createTimer: function() {
		var timer = new haxe_Timer(1000);
		timer.run = $bind(this,this.run);
		return timer;
	}
	,run: function() {
		var value = this.tracked.state_secondsElapsed.get() + 1;
		this.tracked.state_secondsElapsed.set(value);
		switch(this.tracked.state_mode.get()._hx_index) {
		case 1:
			if(this.tracked.state_secondsElapsed.get() == 1500) {
				var value = pompom_TimerMode.Break;
				this.tracked.state_mode.set(value);
				this.tracked.state_secondsElapsed.set(0);
			}
			break;
		case 2:
			if(this.tracked.state_secondsElapsed.get() == 300) {
				var value = pompom_TimerMode.Working;
				this.tracked.state_mode.set(value);
				this.tracked.state_secondsElapsed.set(0);
			}
			break;
		default:
		}
	}
	,get_mode: function() {
		return this.tracked.state_mode.get();
	}
	,set_mode: function(value) {
		this.tracked.state_mode.set(value);
		return value;
	}
	,get_secondsElapsed: function() {
		return this.tracked.state_secondsElapsed.get();
	}
	,set_secondsElapsed: function(value) {
		this.tracked.state_secondsElapsed.set(value);
		return value;
	}
	,dispose: function() {
		this.tracked.dispose();
	}
	,__class__: pompom_TimerState
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
pine_Observer.stack = new haxe_ds_List();
pine_Process.stack = new haxe_ds_List();
var pine_Process_hasRaf = typeof window != 'undefined' && 'requestAnimationFrame' in window;
pine_UniqueId.uid = 0;
pine_html_HtmlElementComponent.types = new haxe_ds_StringMap();
pine_html_HtmlTextComponent.type = (function($this) {
	var $r;
	var this1 = pine_UniqueId.uid++;
	$r = this1;
	return $r;
}(this));
pine_html_dom_DomRoot.type = (function($this) {
	var $r;
	var this1 = pine_UniqueId.uid++;
	$r = this1;
	return $r;
}(this));
pine_html_shared_ObjectTools.EMPTY = { };
pompom_App.__meta__ = { fields : { state : { prop : null}}};
pompom_App.type = (function($this) {
	var $r;
	var this1 = pine_UniqueId.uid++;
	$r = this1;
	return $r;
}(this));
pompom_TimerDisplay.__meta__ = { fields : { timer : { track : null}}};
pompom_TimerDisplay.type = (function($this) {
	var $r;
	var this1 = pine_UniqueId.uid++;
	$r = this1;
	return $r;
}(this));
pompom_TimerState.__meta__ = { fields : { mode : { track : null}, secondsElapsed : { track : null}}};
Pom_main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
