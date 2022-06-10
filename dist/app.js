(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index);
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
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
	}
	static remove(a,obj) {
		let i = a.indexOf(obj);
		if(i == -1) {
			return false;
		}
		a.splice(i,1);
		return true;
	}
	static now() {
		return Date.now();
	}
}
HxOverrides.__name__ = true;
class Lambda {
	static has(it,elt) {
		let x = $getIterator(it);
		while(x.hasNext()) if(x.next() == elt) {
			return true;
		}
		return false;
	}
	static count(it,pred) {
		let n = 0;
		if(pred == null) {
			let _ = $getIterator(it);
			while(_.hasNext()) {
				_.next();
				++n;
			}
		} else {
			let x = $getIterator(it);
			while(x.hasNext()) if(pred(x.next())) {
				++n;
			}
		}
		return n;
	}
}
Lambda.__name__ = true;
Math.__name__ = true;
function Pom_main() {
	nuke_Engine.getInstance().addRawCss("DA1EAF25","html{margin:0} html{padding:0} body{font-family:Roboto, Helvetica, Arial, sans-serif} body{font-size:13px} body{box-sizing:border-box} body{background-color:rgb(34,34,34)} *, *:before, *:after{box-sizing:inherit} button{border:none} button{outline:none} button{display:block} button{background:transparent} button{padding:0} button{margin:0} button{color:inherit} button{font-size:inherit} button{font-family:inherit} button:hover{cursor:pointer} button:disabled{cursor:default}");
	nuke_Engine.getInstance().addRawCss("94D61F24",":root{--pompom-color-dark:rgb(85,85,85)} :root{--pompom-color-light:rgb(159,159,159)} :root{--pompom-color-working:rgb(183,181,85)} :root{--pompom-color-on-break:rgb(139,126,204)} :root{--pompom-button-bg-color:var(--pompom-color-light)} :root{--pompom-button-color:var(--pompom-color-dark)}");
	new pine_html_dom_DomBootstrap(window.document.getElementById("root")).mount(new pompom_App({ }));
}
class Reflect {
	static field(o,field) {
		try {
			return o[field];
		} catch( _g ) {
			return null;
		}
	}
	static fields(o) {
		let a = [];
		if(o != null) {
			let hasOwnProperty = Object.prototype.hasOwnProperty;
			for( var f in o ) {
			if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
				a.push(f);
			}
			}
		}
		return a;
	}
	static deleteField(o,field) {
		if(!Object.prototype.hasOwnProperty.call(o,field)) {
			return false;
		}
		delete(o[field]);
		return true;
	}
	static copy(o) {
		if(o == null) {
			return null;
		}
		let o2 = { };
		let _g = 0;
		let _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			let f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
		return o2;
	}
}
Reflect.__name__ = true;
class StringTools {
	static isSpace(s,pos) {
		let c = HxOverrides.cca(s,pos);
		if(!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		}
	}
	static ltrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,r)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,r,l - r);
		} else {
			return s;
		}
	}
	static rtrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,0,l - r);
		} else {
			return s;
		}
	}
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
	static hex(n,digits) {
		let s = "";
		while(true) {
			s = "0123456789ABCDEF".charAt(n & 15) + s;
			n >>>= 4;
			if(!(n > 0)) {
				break;
			}
		}
		if(digits != null) {
			while(s.length < digits) s = "0" + s;
		}
		return s;
	}
}
StringTools.__name__ = true;
class haxe_IMap {
}
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
Object.assign(haxe_IMap.prototype, {
	__class__: haxe_IMap
});
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = native != null ? native : this;
	}
	toString() {
		return this.get_message();
	}
	get_message() {
		return this.message;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if(((value) instanceof haxe_Exception)) {
			return value;
		} else if(((value) instanceof Error)) {
			return new haxe_Exception(value.message,null,value);
		} else {
			return new haxe_ValueException(value,null,value);
		}
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value);
			return e;
		}
	}
}
haxe_Exception.__name__ = true;
haxe_Exception.__super__ = Error;
Object.assign(haxe_Exception.prototype, {
	__class__: haxe_Exception
});
class haxe_Timer {
	constructor(time_ms) {
		let me = this;
		this.id = setInterval(function() {
			me.run();
		},time_ms);
	}
	stop() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	run() {
	}
	static delay(f,time_ms) {
		let t = new haxe_Timer(time_ms);
		t.run = function() {
			t.stop();
			f();
		};
		return t;
	}
}
haxe_Timer.__name__ = true;
Object.assign(haxe_Timer.prototype, {
	__class__: haxe_Timer
});
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native);
		this.value = value;
	}
}
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
Object.assign(haxe_ValueException.prototype, {
	__class__: haxe_ValueException
});
class haxe_ds_List {
	constructor() {
		this.length = 0;
	}
	add(item) {
		let x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	push(item) {
		let x = new haxe_ds__$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	last() {
		if(this.q == null) {
			return null;
		} else {
			return this.q.item;
		}
	}
	pop() {
		if(this.h == null) {
			return null;
		}
		let x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	clear() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	remove(v) {
		let prev = null;
		let l = this.h;
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
	iterator() {
		return new haxe_ds__$List_ListIterator(this.h);
	}
}
haxe_ds_List.__name__ = true;
Object.assign(haxe_ds_List.prototype, {
	__class__: haxe_ds_List
});
class haxe_ds__$List_ListNode {
	constructor(item,next) {
		this.item = item;
		this.next = next;
	}
}
haxe_ds__$List_ListNode.__name__ = true;
Object.assign(haxe_ds__$List_ListNode.prototype, {
	__class__: haxe_ds__$List_ListNode
});
class haxe_ds__$List_ListIterator {
	constructor(head) {
		this.head = head;
	}
	hasNext() {
		return this.head != null;
	}
	next() {
		let val = this.head.item;
		this.head = this.head.next;
		return val;
	}
}
haxe_ds__$List_ListIterator.__name__ = true;
Object.assign(haxe_ds__$List_ListIterator.prototype, {
	__class__: haxe_ds__$List_ListIterator
});
class haxe_ds_ObjectMap {
	constructor() {
		this.h = { __keys__ : { }};
	}
	set(key,value) {
		let id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	get(key) {
		return this.h[key.__id__];
	}
	remove(key) {
		let id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	keys() {
		let a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	iterator() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			let i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
}
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
Object.assign(haxe_ds_ObjectMap.prototype, {
	__class__: haxe_ds_ObjectMap
});
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
class haxe_ds_StringMap {
	constructor() {
		this.h = Object.create(null);
	}
	get(key) {
		return this.h[key];
	}
	keys() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	iterator() {
		return new haxe_ds__$StringMap_StringMapValueIterator(this.h);
	}
}
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
Object.assign(haxe_ds_StringMap.prototype, {
	__class__: haxe_ds_StringMap
});
class haxe_ds__$StringMap_StringMapKeyIterator {
	constructor(h) {
		this.h = h;
		this.keys = Object.keys(h);
		this.length = this.keys.length;
		this.current = 0;
	}
	hasNext() {
		return this.current < this.length;
	}
	next() {
		return this.keys[this.current++];
	}
}
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
Object.assign(haxe_ds__$StringMap_StringMapKeyIterator.prototype, {
	__class__: haxe_ds__$StringMap_StringMapKeyIterator
});
class haxe_ds__$StringMap_StringMapValueIterator {
	constructor(h) {
		this.h = h;
		this.keys = Object.keys(h);
		this.length = this.keys.length;
		this.current = 0;
	}
	hasNext() {
		return this.current < this.length;
	}
	next() {
		return this.h[this.keys[this.current++]];
	}
}
haxe_ds__$StringMap_StringMapValueIterator.__name__ = true;
Object.assign(haxe_ds__$StringMap_StringMapValueIterator.prototype, {
	__class__: haxe_ds__$StringMap_StringMapValueIterator
});
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true;
Object.assign(haxe_iterators_ArrayIterator.prototype, {
	__class__: haxe_iterators_ArrayIterator
});
class js_Boot {
	static getClass(o) {
		if(o == null) {
			return null;
		} else if(((o) instanceof Array)) {
			return Array;
		} else {
			let cl = o.__class__;
			if(cl != null) {
				return cl;
			}
			let name = js_Boot.__nativeClassName(o);
			if(name != null) {
				return js_Boot.__resolveNativeClass(name);
			}
			return null;
		}
	}
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__];
				let con = e.__constructs__[o._hx_index];
				let n = con._hx_name;
				if(con.__params__) {
					s = s + "\t";
					return n + "(" + ((function($this) {
						var $r;
						let _g = [];
						{
							let _g1 = 0;
							let _g2 = con.__params__;
							while(true) {
								if(!(_g1 < _g2.length)) {
									break;
								}
								let p = _g2[_g1];
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
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
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
	}
	static __interfLoop(cc,cl) {
		while(true) {
			if(cc == null) {
				return false;
			}
			if(cc == cl) {
				return true;
			}
			let intf = cc.__interfaces__;
			if(intf != null && (cc.__super__ == null || cc.__super__.__interfaces__ != intf)) {
				let _g = 0;
				let _g1 = intf.length;
				while(_g < _g1) {
					let i = intf[_g++];
					if(i == cl || js_Boot.__interfLoop(i,cl)) {
						return true;
					}
				}
			}
			cc = cc.__super__;
		}
	}
	static __instanceof(o,cl) {
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
	}
	static __downcastCheck(o,cl) {
		if(!((o) instanceof cl)) {
			if(cl.__isInterface__) {
				return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	static __nativeClassName(o) {
		let name = js_Boot.__toStr.call(o).slice(8,-1);
		if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
			return null;
		}
		return name;
	}
	static __isNativeObj(o) {
		return js_Boot.__nativeClassName(o) != null;
	}
	static __resolveNativeClass(name) {
		return $global[name];
	}
}
js_Boot.__name__ = true;
class nuke_Atom {
	static getHash(this1) {
		switch(this1._hx_index) {
		case 0:
			return nuke_Atom.getHash(this1.atom) + "-" + nuke_internal_Hash_hash(this1.selector);
		case 1:
			return nuke_Atom.getHash(this1.atom) + "-" + nuke_internal_Hash_hash(this1.atRule);
		case 2:
			return this1.className;
		case 3:
			return nuke_internal_Prefix_withPrefix(nuke_internal_Hash_hash(nuke_Atom.toCss(this1)));
		case 4:
			return this1.className;
		}
	}
	static getClassName(this1) {
		return nuke_ClassName.ofString(nuke_Atom.getHash(this1));
	}
	static toCss(this1) {
		switch(this1._hx_index) {
		case 0:
			return nuke_Atom.toCss(this1.atom);
		case 1:
			return nuke_Atom.toCss(this1.atom);
		case 2:
			return this1.css;
		case 3:
			return "" + this1.prop + ":" + this1.value;
		case 4:
			return "";
		}
	}
	static render(this1) {
		switch(this1._hx_index) {
		case 0:
			return "." + nuke_Atom.getHash(this1) + this1.selector + (" {" + nuke_Atom.toCss(this1.atom) + "}");
		case 1:
			let _g = this1.atRule;
			let _g1 = this1.atom;
			let _g2 = _g1;
			if(_g2._hx_index == 0) {
				return "@" + _g + " { ." + nuke_Atom.getHash(this1) + _g2.selector + " {" + nuke_Atom.toCss(_g2.atom) + "} }";
			} else {
				return "@" + _g + " { ." + nuke_Atom.getHash(this1) + " {" + nuke_Atom.toCss(_g1) + "} }";
			}
			break;
		case 2:
			return "." + this1.className + " {" + this1.css + "}";
		case 3:
			return "." + nuke_Atom.getHash(this1) + " {" + nuke_Atom.toCss(this1) + "}";
		case 4:
			return "";
		}
	}
}
var nuke_AtomType = $hxEnums["nuke.AtomType"] = { __ename__:true,__constructs__:null
	,AtomChild: ($_=function(selector,atom) { return {_hx_index:0,selector:selector,atom:atom,__enum__:"nuke.AtomType",toString:$estr}; },$_._hx_name="AtomChild",$_.__params__ = ["selector","atom"],$_)
	,AtomAtRule: ($_=function(atRule,atom) { return {_hx_index:1,atRule:atRule,atom:atom,__enum__:"nuke.AtomType",toString:$estr}; },$_._hx_name="AtomAtRule",$_.__params__ = ["atRule","atom"],$_)
	,AtomStatic: ($_=function(className,css) { return {_hx_index:2,className:className,css:css,__enum__:"nuke.AtomType",toString:$estr}; },$_._hx_name="AtomStatic",$_.__params__ = ["className","css"],$_)
	,AtomDynamic: ($_=function(prop,value) { return {_hx_index:3,prop:prop,value:value,__enum__:"nuke.AtomType",toString:$estr}; },$_._hx_name="AtomDynamic",$_.__params__ = ["prop","value"],$_)
	,AtomPrerendered: ($_=function(className) { return {_hx_index:4,className:className,__enum__:"nuke.AtomType",toString:$estr}; },$_._hx_name="AtomPrerendered",$_.__params__ = ["className"],$_)
};
nuke_AtomType.__constructs__ = [nuke_AtomType.AtomChild,nuke_AtomType.AtomAtRule,nuke_AtomType.AtomStatic,nuke_AtomType.AtomDynamic,nuke_AtomType.AtomPrerendered];
class nuke_ClassName {
	static ofString(s) {
		if(s == null) {
			return null;
		} else {
			return StringTools.trim(s);
		}
	}
	static ofAtoms(parts) {
		let result = new Array(parts.length);
		let _g = 0;
		let _g1 = parts.length;
		while(_g < _g1) {
			let i = _g++;
			result[i] = nuke_Atom.getClassName(parts[i]);
		}
		return result.join(" ");
	}
	static with(this1,other) {
		let _g = other;
		return this1 == null ? _g : _g == null ? this1 : "" + this1 + " " + _g;
	}
}
class nuke_Engine {
	constructor(injector) {
		this.ruleIndexes = [];
		this.injector = injector;
	}
	add(atom) {
		let key = nuke_Atom.getHash(atom);
		if(!this.ruleIndexes.includes(key)) {
			let ret = this.injector.insert(nuke_Atom.render(atom),this.ruleIndexes.length);
			this.ruleIndexes.push(key);
			return ret;
		}
		return 0;
	}
	addRawCss(key,css) {
		if(!this.ruleIndexes.includes(key)) {
			let ret = this.injector.insert(css,this.ruleIndexes.length);
			this.ruleIndexes.push(key);
			return ret;
		}
		return 0;
	}
	static getInstance() {
		if(nuke_Engine.instance == null) {
			nuke_Engine.instance = new nuke_Engine(new nuke_injector_CssOmInjector());
		}
		return nuke_Engine.instance;
	}
}
nuke_Engine.__name__ = true;
Object.assign(nuke_Engine.prototype, {
	__class__: nuke_Engine
});
class nuke_Injector {
}
nuke_Injector.__name__ = true;
nuke_Injector.__isInterface__ = true;
Object.assign(nuke_Injector.prototype, {
	__class__: nuke_Injector
});
class nuke_injector_CssOmInjector {
	constructor(sheet) {
		this.sheet = sheet != null ? sheet : nuke_injector_Tools.getStyleEl().sheet;
	}
	insert(rule,index) {
		try {
			return this.sheet.insertRule("@media all { " + rule + " }",index);
		} catch( _g ) {
			return -1;
		}
	}
}
nuke_injector_CssOmInjector.__name__ = true;
nuke_injector_CssOmInjector.__interfaces__ = [nuke_Injector];
Object.assign(nuke_injector_CssOmInjector.prototype, {
	__class__: nuke_injector_CssOmInjector
});
class nuke_injector_Tools {
	static getStyleEl() {
		let _g = window.document.getElementById(nuke_injector_Tools.styleId);
		if(_g == null) {
			let el = window.document.createElement("style");
			el.id = nuke_injector_Tools.styleId;
			window.document.head.appendChild(el);
			return el;
		} else {
			return _g;
		}
	}
}
nuke_injector_Tools.__name__ = true;
function nuke_internal_Hash_hash(str) {
	let i = 0;
	let out = 11;
	while(i < str.length) out = 101 * out + HxOverrides.cca(str,i++) >>> 0;
	return StringTools.hex(out);
}
function nuke_internal_Prefix_withPrefix(hash) {
	return "_nu" + hash;
}
class pine_Component {
	constructor(key) {
		if(pine_Component._hx_skip_constructor) {
			return;
		}
		this._hx_constructor(key);
	}
	_hx_constructor(key) {
		this.key = key;
	}
	shouldBeUpdated(newComponent) {
		if(this.getComponentType() == newComponent.getComponentType()) {
			return this.key == newComponent.key;
		} else {
			return false;
		}
	}
}
pine_Component.__name__ = true;
Object.assign(pine_Component.prototype, {
	__class__: pine_Component
});
class pine_Context {
}
pine_Context.__name__ = true;
pine_Context.__isInterface__ = true;
class pine_Disposable {
}
pine_Disposable.__name__ = true;
pine_Disposable.__isInterface__ = true;
Object.assign(pine_Disposable.prototype, {
	__class__: pine_Disposable
});
class pine_DisposableHost {
}
pine_DisposableHost.__name__ = true;
pine_DisposableHost.__isInterface__ = true;
Object.assign(pine_DisposableHost.prototype, {
	__class__: pine_DisposableHost
});
var pine_ElementStatus = $hxEnums["pine.ElementStatus"] = { __ename__:true,__constructs__:null
	,Pending: {_hx_name:"Pending",_hx_index:0,__enum__:"pine.ElementStatus",toString:$estr}
	,Valid: {_hx_name:"Valid",_hx_index:1,__enum__:"pine.ElementStatus",toString:$estr}
	,Invalid: {_hx_name:"Invalid",_hx_index:2,__enum__:"pine.ElementStatus",toString:$estr}
	,Building: {_hx_name:"Building",_hx_index:3,__enum__:"pine.ElementStatus",toString:$estr}
	,Disposed: {_hx_name:"Disposed",_hx_index:4,__enum__:"pine.ElementStatus",toString:$estr}
};
pine_ElementStatus.__constructs__ = [pine_ElementStatus.Pending,pine_ElementStatus.Valid,pine_ElementStatus.Invalid,pine_ElementStatus.Building,pine_ElementStatus.Disposed];
class pine_InitContext {
}
pine_InitContext.__name__ = true;
pine_InitContext.__isInterface__ = true;
pine_InitContext.__interfaces__ = [pine_DisposableHost,pine_Context];
class pine_Element {
	constructor(component) {
		if(pine_Element._hx_skip_constructor) {
			return;
		}
		this._hx_constructor(component);
	}
	_hx_constructor(component) {
		this.root = null;
		this.parent = null;
		this.status = pine_ElementStatus.Pending;
		this.slot = null;
		this.disposables = [];
		this.component = component;
	}
	getRoot() {
		if(this.root == null) {
			throw new pine_PineException("Failed assertion: root != null");
		}
		return this.root;
	}
	mount(parent,slot) {
		this.performSetup(parent,slot);
		this.status = pine_ElementStatus.Building;
		this.performBuild(null);
		this.status = pine_ElementStatus.Valid;
	}
	update(component) {
		this.status = pine_ElementStatus.Building;
		let previousComponent = this.component;
		this.component = component;
		this.performBuild(previousComponent);
		this.status = pine_ElementStatus.Valid;
	}
	rebuild() {
		if(this.status != pine_ElementStatus.Invalid) {
			return;
		}
		this.status = pine_ElementStatus.Building;
		this.performBuild(this.component);
		this.status = pine_ElementStatus.Valid;
	}
	dispose() {
		this.visitChildren(function(child) {
			child.dispose();
		});
		let _g = 0;
		let _g1 = this.disposables;
		while(_g < _g1.length) _g1[_g++].dispose();
		this.status = pine_ElementStatus.Disposed;
		this.parent = null;
		this.root = null;
		this.slot = null;
	}
	performSetup(parent,slot) {
		this.parent = parent;
		this.slot = slot;
		this.root = parent != null ? parent.root : null;
		this.status = pine_ElementStatus.Valid;
	}
	invalidate() {
		if(this.status == pine_ElementStatus.Invalid) {
			return;
		}
		this.status = pine_ElementStatus.Invalid;
		if(this.root != null) {
			this.root.requestRebuild(this);
		}
	}
	addDisposable(disposable) {
		this.disposables.push(disposable);
	}
	findAncestorOfType(kind) {
		if(this.parent == null) {
			if(js_Boot.__instanceof(this,kind)) {
				return haxe_ds_Option.Some(this);
			}
			return haxe_ds_Option.None;
		}
		let value = this.parent;
		let _g = js_Boot.__downcastCheck(value,kind) ? value : null;
		if(_g == null) {
			return this.parent.findAncestorOfType(kind);
		} else {
			return haxe_ds_Option.Some(_g);
		}
	}
	findAncestorObject() {
		let _g = this.findAncestorOfType(pine_ObjectElement);
		switch(_g._hx_index) {
		case 0:
			return _g.v.getObject();
		case 1:
			throw new pine_PineException("Unable to find ObjectElement ancestor.");
		}
	}
	getObject() {
		let object = null;
		let visit = null;
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
	updateChild(child,component,slot) {
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
	updateSlot(slot) {
		this.slot = slot;
		this.visitChildren(function(child) {
			child.updateSlot(slot);
		});
	}
	diffChildren(oldChildren,newComponents) {
		let newHead = 0;
		let oldHead = 0;
		let newTail = newComponents.length - 1;
		let oldTail = oldChildren.length - 1;
		let previousChild = null;
		let newChildren = [];
		while(oldHead <= oldTail && newHead <= newTail) {
			let oldChild = oldChildren[oldHead];
			let newComponent = newComponents[newHead];
			if(oldChild == null || !oldChild.component.shouldBeUpdated(newComponent)) {
				break;
			}
			let newChild = this.updateChild(oldChild,newComponent,this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
			++oldHead;
		}
		while(oldHead <= oldTail && newHead <= newTail) {
			let oldChild = oldChildren[oldTail];
			if(oldChild == null || !oldChild.component.shouldBeUpdated(newComponents[newTail])) {
				break;
			}
			--oldTail;
			--newTail;
		}
		let hasOldChildren = oldHead <= oldTail;
		let oldKeyedChildren = null;
		if(hasOldChildren) {
			oldKeyedChildren = pine_Key.createMap();
			while(oldHead <= oldTail) {
				let oldChild = oldChildren[oldHead];
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
			let oldChild = null;
			let newComponent = newComponents[newHead];
			if(hasOldChildren) {
				let key = newComponent.key;
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
			let newChild = this.updateChild(oldChild,newComponent,this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
		}
		newTail = newComponents.length - 1;
		oldTail = oldChildren.length - 1;
		while(oldHead <= oldTail && newHead <= newTail) {
			let newChild = this.updateChild(oldChildren[oldHead],newComponents[newHead],this.createSlotForChild(newHead,previousChild));
			newChildren[newHead] = newChild;
			previousChild = newChild;
			++newHead;
			++oldHead;
		}
		let _gthis = this;
		if(hasOldChildren && (oldKeyedChildren != null && oldKeyedChildren.isNotEmpty())) {
			oldKeyedChildren.each(function(_,element) {
				_gthis.removeChild(element);
			});
		}
		return newChildren;
	}
	updateSlotForChild(child,slot) {
		child.updateSlot(slot);
	}
	removeChild(child) {
		child.dispose();
	}
	createElementForComponent(component,slot) {
		let element = component.createElement();
		element.mount(this,slot);
		return element;
	}
	createSlotForChild(index,previous) {
		return new pine_Slot(index,previous);
	}
}
pine_Element.__name__ = true;
pine_Element.__interfaces__ = [pine_DisposableHost,pine_Disposable,pine_InitContext,pine_Context];
Object.assign(pine_Element.prototype, {
	__class__: pine_Element
});
class pine_ProxyComponent extends pine_Component {
	_hx_constructor(key) {
		super._hx_constructor(key);
	}
	init(context) {
	}
	createElement() {
		return new pine_ProxyElement(this);
	}
}
pine_ProxyComponent.__name__ = true;
pine_ProxyComponent.__super__ = pine_Component;
Object.assign(pine_ProxyComponent.prototype, {
	__class__: pine_ProxyComponent
});
class pine_ImmutableComponent extends pine_ProxyComponent {
	_hx_constructor(key) {
		super._hx_constructor(key);
	}
}
pine_ImmutableComponent.__name__ = true;
pine_ImmutableComponent.__super__ = pine_ProxyComponent;
Object.assign(pine_ImmutableComponent.prototype, {
	__class__: pine_ImmutableComponent
});
class pine_ObserverComponent extends pine_ProxyComponent {
	_hx_constructor(key) {
		super._hx_constructor(key);
	}
	createElement() {
		return new pine_ObserverElement(this);
	}
}
pine_ObserverComponent.__name__ = true;
pine_ObserverComponent.__super__ = pine_ProxyComponent;
Object.assign(pine_ObserverComponent.prototype, {
	__class__: pine_ObserverComponent
});
class pine_UniqueId {
}
class pine_Isolate extends pine_ObserverComponent {
	constructor(props) {
		pine_Component._hx_skip_constructor = true;
		super();
		pine_Component._hx_skip_constructor = false;
		this._hx_constructor(props);
	}
	_hx_constructor(props) {
		this.trackedObject = null;
		super._hx_constructor(props.key);
		this.wrap = props.wrap;
		this.trackedObjectProps = { };
	}
	render(context) {
		return this.wrap(context);
	}
	getComponentType() {
		return pine_Isolate.type;
	}
	createTrackedObject() {
		this.trackedObject = new pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e({ });
		return this.trackedObject;
	}
	reuseTrackedObject(trackedObject) {
		this.trackedObject = trackedObject;
		this.trackedObject.replace(this.trackedObjectProps);
		return this.trackedObject;
	}
}
pine_Isolate.__name__ = true;
pine_Isolate.__super__ = pine_ObserverComponent;
Object.assign(pine_Isolate.prototype, {
	__class__: pine_Isolate
});
class pine_Key {
	static createMap() {
		return new pine_KeyMap();
	}
	static isString(this1) {
		return typeof(this1) == "string";
	}
}
class pine_KeyMap {
	constructor() {
		this.objects = null;
		this.strings = null;
	}
	set(key,value) {
		if(pine_Key.isString(key)) {
			let key1 = key;
			if(this.strings == null) {
				let _g = new haxe_ds_StringMap();
				_g.h[key1] = value;
				this.strings = _g;
			} else {
				this.strings.h[key1] = value;
			}
		} else if(this.objects == null) {
			let _g = new haxe_ds_ObjectMap();
			_g.set(key,value);
			this.objects = _g;
		} else {
			this.objects.set(key,value);
		}
	}
	get(key) {
		if(pine_Key.isString(key)) {
			if(this.strings == null) {
				return null;
			} else {
				return this.strings.h[key];
			}
		} else if(this.objects == null) {
			return null;
		} else {
			return this.objects.h[key.__id__];
		}
	}
	remove(key) {
		if(pine_Key.isString(key) && this.strings != null) {
			let key1 = key;
			let _this = this.strings;
			if(Object.prototype.hasOwnProperty.call(_this.h,key1)) {
				delete(_this.h[key1]);
			}
		} else if(this.objects != null) {
			this.objects.remove(key);
		}
	}
	isNotEmpty() {
		if(this.strings == null && this.objects == null) {
			return false;
		}
		let notEmpty = this.strings != null && Lambda.count(this.strings) > 0;
		if(!notEmpty) {
			notEmpty = this.objects != null && Lambda.count(this.objects) > 0;
		}
		return notEmpty;
	}
	each(fn) {
		if(this.strings != null) {
			let h = this.strings.h;
			let _g_keys = Object.keys(h);
			let _g_length = _g_keys.length;
			let _g_current = 0;
			while(_g_current < _g_length) {
				let key = _g_keys[_g_current++];
				fn(key,h[key]);
			}
		}
		if(this.objects != null) {
			let this1 = this.objects;
			let _g_keys = this1.keys();
			while(_g_keys.hasNext()) {
				let key = _g_keys.next();
				fn(key,this1.get(key));
			}
		}
	}
}
pine_KeyMap.__name__ = true;
Object.assign(pine_KeyMap.prototype, {
	__class__: pine_KeyMap
});
class pine_ObjectComponent extends pine_Component {
	constructor(key) {
		super(key);
	}
	insertObject(root,object,slot,findParent) {
		root.insertObject(object,slot,findParent);
	}
	moveObject(root,object,from,to,findParent) {
		root.moveObject(object,from,to,findParent);
	}
	removeObject(root,object,slot) {
		root.removeObject(object,slot);
	}
}
pine_ObjectComponent.__name__ = true;
pine_ObjectComponent.__super__ = pine_Component;
Object.assign(pine_ObjectComponent.prototype, {
	__class__: pine_ObjectComponent
});
class pine_ObjectElement extends pine_Element {
	constructor(component) {
		if(pine_Element._hx_skip_constructor) {
			super();
			return;
		}
		pine_Element._hx_skip_constructor = true;
		super();
		pine_Element._hx_skip_constructor = false;
		this._hx_constructor(component);
	}
	_hx_constructor(component) {
		this.object = null;
		super._hx_constructor(component);
	}
	getObject() {
		if(this.object == null) {
			throw new pine_PineException("Failed assertion: object != null");
		}
		return this.object;
	}
}
pine_ObjectElement.__name__ = true;
pine_ObjectElement.__super__ = pine_Element;
Object.assign(pine_ObjectElement.prototype, {
	__class__: pine_ObjectElement
});
class pine_ObjectWithChildrenElement extends pine_ObjectElement {
	constructor(component) {
		pine_Element._hx_skip_constructor = true;
		super();
		pine_Element._hx_skip_constructor = false;
		this._hx_constructor(component);
	}
	_hx_constructor(component) {
		this.children = [];
		super._hx_constructor(component);
	}
	performBuild(previousComponent) {
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
	initializeChildren() {
		let components = this.component.getChildren();
		let previous = null;
		let children = [];
		let _g = 0;
		let _g1 = components.length;
		while(_g < _g1) {
			let i = _g++;
			let comp = components[i];
			if(comp == null) {
				continue;
			}
			let element = this.createElementForComponent(comp,this.createSlotForChild(i,previous));
			children.push(element);
			previous = element;
		}
		this.children = children;
	}
	rebuildChildren() {
		let _this = this.component.getChildren();
		let _g = [];
		let _g1 = 0;
		while(_g1 < _this.length) {
			let v = _this[_g1];
			++_g1;
			if(v != null) {
				_g.push(v);
			}
		}
		this.children = this.diffChildren(this.children,_g);
	}
	updateSlot(slot) {
		if(this.object == null) {
			throw new pine_PineException("Failed assertion: object != null");
		}
		let previousSlot = this.slot;
		this.slot = slot;
		this.component.moveObject(this.getRoot(),this.object,previousSlot,slot,$bind(this,this.findAncestorObject));
	}
	dispose() {
		if(this.object != null) {
			this.component.removeObject(this.getRoot(),this.object,this.slot);
		}
		super.dispose();
		this.object = null;
		this.children = [];
	}
	visitChildren(visitor) {
		let _g = 0;
		let _g1 = this.children;
		while(_g < _g1.length) visitor(_g1[_g++]);
	}
}
pine_ObjectWithChildrenElement.__name__ = true;
pine_ObjectWithChildrenElement.__super__ = pine_ObjectElement;
Object.assign(pine_ObjectWithChildrenElement.prototype, {
	__class__: pine_ObjectWithChildrenElement
});
class pine_ObjectWithoutChildrenElement extends pine_ObjectElement {
	constructor(component) {
		super(component);
	}
	performBuild(previousComponent) {
		if(previousComponent == null) {
			this.object = this.component.createObject(this.getRoot());
			this.component.insertObject(this.getRoot(),this.object,this.slot,$bind(this,this.findAncestorObject));
		} else if(previousComponent != this.component) {
			this.component.updateObject(this.getRoot(),this.getObject(),previousComponent);
		}
	}
	dispose() {
		if(this.object != null) {
			this.component.removeObject(this.getRoot(),this.object,this.slot);
		}
		super.dispose();
		this.object = null;
	}
	visitChildren(visitor) {
	}
}
pine_ObjectWithoutChildrenElement.__name__ = true;
pine_ObjectWithoutChildrenElement.__super__ = pine_ObjectElement;
Object.assign(pine_ObjectWithoutChildrenElement.prototype, {
	__class__: pine_ObjectWithoutChildrenElement
});
class pine_Observer {
	constructor(handler,untracked) {
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
	}
	trigger() {
		if(this.isTriggering) {
			throw new pine_PineException("Observer was triggered while already running");
		}
		if(this.isRunning) {
			let err = null;
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
				err = haxe_Exception.caught(_g);
			}
			pine_Observer.stack.pop();
			this.isTriggering = false;
			if(err != null) {
				throw haxe_Exception.thrown(err);
			}
		}
	}
	stop() {
		this.isRunning = false;
		this.clearTrackedSignals();
	}
	start() {
		if(!this.isRunning) {
			this.isRunning = true;
			this.trigger();
		}
	}
	track(state) {
		if(!Lambda.has(state.observers,this)) {
			state.observers.add(this);
			this.states.add(state);
		}
	}
	clearTrackedSignals() {
		let _g_head = this.states.h;
		while(_g_head != null) {
			let val = _g_head.item;
			_g_head = _g_head.next;
			val.observers.remove(this);
		}
		this.states.clear();
	}
	dispose() {
		this.stop();
	}
	static scheduleTrigger(observers) {
		if(pine_Observer.currentQueue != null) {
			let _g_head = observers.h;
			while(_g_head != null) {
				let val = _g_head.item;
				_g_head = _g_head.next;
				let this1 = pine_Observer.currentQueue;
				if(!this1.includes(val)) {
					this1.push(val);
				}
			}
			return;
		}
		let queue = pine_Observer.currentQueue = [];
		let _g_head = observers.h;
		while(_g_head != null) {
			let val = _g_head.item;
			_g_head = _g_head.next;
			let this1 = pine_Observer.currentQueue;
			if(!this1.includes(val)) {
				this1.push(val);
			}
		}
		pine_Queue.enqueue(pine_Process.current(),function() {
			pine_Observer.currentQueue = null;
			let observer = queue.pop();
			while(observer != null) {
				observer.trigger();
				observer = queue.pop();
			}
		});
	}
}
pine_Observer.__name__ = true;
pine_Observer.__interfaces__ = [pine_Disposable];
Object.assign(pine_Observer.prototype, {
	__class__: pine_Observer
});
class pine_ProxyElement extends pine_Element {
	constructor(component) {
		if(pine_Element._hx_skip_constructor) {
			super();
			return;
		}
		pine_Element._hx_skip_constructor = true;
		super();
		pine_Element._hx_skip_constructor = false;
		this._hx_constructor(component);
	}
	_hx_constructor(component) {
		this.child = null;
		super._hx_constructor(component);
	}
	render() {
		return this.component.render(this);
	}
	performBuild(previousComponent) {
		if(previousComponent == null) {
			this.component.init(this);
		}
		this.child = this.updateChild(this.child,this.render(),this.slot);
	}
	visitChildren(visitor) {
		if(this.child != null) {
			visitor(this.child);
		}
	}
}
pine_ProxyElement.__name__ = true;
pine_ProxyElement.__super__ = pine_Element;
Object.assign(pine_ProxyElement.prototype, {
	__class__: pine_ProxyElement
});
class pine_ObserverElement extends pine_ProxyElement {
	constructor(component) {
		pine_Element._hx_skip_constructor = true;
		super();
		pine_Element._hx_skip_constructor = false;
		this._hx_constructor(component);
	}
	_hx_constructor(component) {
		this.result = null;
		this.observer = null;
		this.trackedObject = null;
		super._hx_constructor(component);
	}
	performBuild(previousComponent) {
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
	setupObserver() {
		let _gthis = this;
		this.observer = new pine_Observer(function() {
			_gthis.result = _gthis.render();
			if(_gthis.status != pine_ElementStatus.Building) {
				_gthis.invalidate();
			}
		});
	}
	dispose() {
		super.dispose();
		this.result = null;
		if(this.observer != null) {
			this.observer.dispose();
			this.observer = null;
		}
	}
}
pine_ObserverElement.__name__ = true;
pine_ObserverElement.__super__ = pine_ProxyElement;
Object.assign(pine_ObserverElement.prototype, {
	__class__: pine_ObserverElement
});
class pine_PineException extends haxe_Exception {
	constructor(message,previous,native) {
		super(message,previous,native);
	}
}
pine_PineException.__name__ = true;
pine_PineException.__super__ = haxe_Exception;
Object.assign(pine_PineException.prototype, {
	__class__: pine_PineException
});
class pine_Process {
	static current() {
		let process = pine_Process.stack.last();
		if(process == null) {
			return pine_Process.start();
		}
		return process;
	}
	static start() {
		let process = [];
		pine_Process.stack.add(process);
		pine_Process_nextFrame(function() {
			pine_Process.stack.remove(process);
			pine_Queue.dequeue(process);
		});
		return process;
	}
}
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
class pine_Queue {
	static enqueue(this1,effect) {
		this1.push(effect);
		return { cancel : function() {
			HxOverrides.remove(this1,effect);
		}};
	}
	static dequeue(this1) {
		let effect = this1.pop();
		while(effect != null) {
			effect();
			effect = this1.pop();
		}
	}
}
class pine_Record {
}
pine_Record.__name__ = true;
pine_Record.__isInterface__ = true;
pine_Record.__interfaces__ = [pine_Disposable];
class pine_Root {
}
pine_Root.__name__ = true;
pine_Root.__isInterface__ = true;
Object.assign(pine_Root.prototype, {
	__class__: pine_Root
});
class pine_RootComponent extends pine_ObjectComponent {
	constructor(props) {
		super(null);
		this.child = props.child;
	}
	createObject(_) {
		return this.getRootObject();
	}
	getChildren() {
		return [this.child];
	}
	insertObject(root,object,slot,findParent) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
	moveObject(root,object,from,to,findParent) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
	removeObject(root,object,slot) {
		throw haxe_Exception.thrown("Invalid action on a root object");
	}
}
pine_RootComponent.__name__ = true;
pine_RootComponent.__super__ = pine_ObjectComponent;
Object.assign(pine_RootComponent.prototype, {
	__class__: pine_RootComponent
});
class pine_RootElement extends pine_ObjectElement {
	constructor(rootComponent) {
		pine_Element._hx_skip_constructor = true;
		super();
		pine_Element._hx_skip_constructor = false;
		this._hx_constructor(rootComponent);
	}
	_hx_constructor(rootComponent) {
		this.invalidElements = null;
		this.isScheduled = false;
		this.child = null;
		super._hx_constructor(rootComponent);
		this.parent = null;
		this.root = this;
	}
	getRoot() {
		return this;
	}
	bootstrap() {
		this.mount(null);
	}
	performSetup(parent,slot) {
		this.slot = slot;
		this.status = pine_ElementStatus.Valid;
	}
	requestRebuild(child) {
		let _gthis = this;
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
		if(this.invalidElements.includes(child)) {
			return;
		}
		this.invalidElements.push(child);
	}
	scheduleRebuildInvalidElements() {
		if(this.isScheduled) {
			return;
		}
		this.isScheduled = true;
		pine_Queue.enqueue(pine_Process.current(),$bind(this,this.performRebuildInvalidElements));
	}
	performRebuildInvalidElements() {
		pine_Process.start();
		this.isScheduled = false;
		if(this.invalidElements != null) {
			let elements = this.invalidElements.slice();
			this.invalidElements = null;
			let _g = 0;
			while(_g < elements.length) elements[_g++].rebuild();
		}
	}
	performBuild(previousComponent) {
		pine_Process.start();
		if(previousComponent == null) {
			this.object = this.component.createObject(this);
		} else if(previousComponent != this.component) {
			this.component.updateObject(this,previousComponent);
		}
		this.child = this.updateChild(this.child,this.component.child,this.slot);
	}
	visitChildren(visitor) {
		if(this.child != null) {
			visitor(this.child);
		}
	}
}
pine_RootElement.__name__ = true;
pine_RootElement.__interfaces__ = [pine_Root];
pine_RootElement.__super__ = pine_ObjectElement;
Object.assign(pine_RootElement.prototype, {
	__class__: pine_RootElement
});
class pine_Slot {
	constructor(index,previous) {
		this.index = index;
		this.previous = previous;
	}
	indexChanged(other) {
		return this.index != other.index;
	}
}
pine_Slot.__name__ = true;
Object.assign(pine_Slot.prototype, {
	__class__: pine_Slot
});
class pine_State {
	constructor(initialValue,comparator) {
		this.isDisposed = false;
		this.observers = new haxe_ds_List();
		this.comparator = comparator != null ? comparator : function(a,b) {
			return a != b;
		};
		this.value = initialValue;
		this.notify();
	}
	get() {
		if(this.isDisposed) {
			throw new pine_PineException("Cannot use a state that has already been disposed.");
		}
		let observer = pine_Observer.stack.last();
		if(observer != null) {
			observer.track(this);
		}
		return this.value;
	}
	set(newValue) {
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
	dispose() {
		this.observers.clear();
		this.isDisposed = true;
	}
	notify() {
		if(this.observers.length > 0) {
			pine_Observer.scheduleTrigger(this.observers);
		}
	}
}
pine_State.__name__ = true;
pine_State.__interfaces__ = [pine_Disposable];
Object.assign(pine_State.prototype, {
	__class__: pine_State
});
class pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614 {
	constructor(props) {
		this.state_workLength = new pine_State(props.workLength);
		this.state_secondsElapsed = new pine_State(props.secondsElapsed);
		this.state_paused = new pine_State(props.paused);
		this.state_mode = new pine_State(props.mode);
		this.state_breakLength = new pine_State(props.breakLength);
	}
	dispose() {
		this.state_workLength.dispose();
		this.state_secondsElapsed.dispose();
		this.state_paused.dispose();
		this.state_mode.dispose();
		this.state_breakLength.dispose();
	}
}
pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614.__name__ = true;
pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614.__interfaces__ = [pine_Disposable];
Object.assign(pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614.prototype, {
	__class__: pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614
});
class pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09 {
	constructor(props) {
		this.state_timer = new pine_State(props.timer);
	}
	dispose() {
		this.state_timer.dispose();
	}
	replace(props) {
		this.state_timer.set(props.timer);
	}
}
pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.__name__ = true;
pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.__interfaces__ = [pine_Disposable];
Object.assign(pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09.prototype, {
	__class__: pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09
});
class pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e {
	constructor(props) {
	}
	dispose() {
	}
	replace(props) {
	}
}
pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e.__name__ = true;
pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e.__interfaces__ = [pine_Disposable];
Object.assign(pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e.prototype, {
	__class__: pine_TrackedObject_$d41d8cd98f00b204e9800998ecf8427e
});
class pine_html_HtmlBootstrap {
	constructor(el) {
		this.el = el == null ? this.getDefaultRoot() : el;
	}
	mount(child) {
		let el = this.createRoot(child).createElement();
		el.bootstrap();
		return el;
	}
}
pine_html_HtmlBootstrap.__name__ = true;
Object.assign(pine_html_HtmlBootstrap.prototype, {
	__class__: pine_html_HtmlBootstrap
});
class pine_html_HtmlElementComponent extends pine_ObjectComponent {
	constructor(props) {
		super(props.key);
		this.tag = props.tag;
		this.attrs = props.attrs;
		this.isSvg = props.isSvg == null ? false : props.isSvg;
		this.children = props.children;
	}
	getChildren() {
		if(this.children == null) {
			return [];
		} else {
			return this.children;
		}
	}
	createObject(root) {
		return root.createHtmlElement(this.tag,this.attrs,this.isSvg);
	}
	updateObject(root,object,previousComponent) {
		let prev = previousComponent;
		root.updateHtmlElement(object,this.attrs,prev != null ? prev.attrs : null);
		return object;
	}
	createElement() {
		return new pine_ObjectWithChildrenElement(this);
	}
}
pine_html_HtmlElementComponent.__name__ = true;
pine_html_HtmlElementComponent.__super__ = pine_ObjectComponent;
Object.assign(pine_html_HtmlElementComponent.prototype, {
	__class__: pine_html_HtmlElementComponent
});
class pine_html_HtmlRoot {
}
pine_html_HtmlRoot.__name__ = true;
pine_html_HtmlRoot.__isInterface__ = true;
pine_html_HtmlRoot.__interfaces__ = [pine_Root];
Object.assign(pine_html_HtmlRoot.prototype, {
	__class__: pine_html_HtmlRoot
});
class pine_html_HtmlTextComponent extends pine_ObjectComponent {
	constructor(props) {
		super(props.key);
		this.content = props.content;
	}
	getChildren() {
		return [];
	}
	getComponentType() {
		return pine_html_HtmlTextComponent.type;
	}
	createObject(root) {
		return root.createHtmlText(this.content);
	}
	updateObject(root,object,previousComponent) {
		let prev = previousComponent;
		root.updateHtmlText(object,this.content,prev != null ? prev.content : null);
		return object;
	}
	createElement() {
		return new pine_ObjectWithoutChildrenElement(this);
	}
}
pine_html_HtmlTextComponent.__name__ = true;
pine_html_HtmlTextComponent.__super__ = pine_ObjectComponent;
Object.assign(pine_html_HtmlTextComponent.prototype, {
	__class__: pine_html_HtmlTextComponent
});
function pine_html_TagTypes_getTypeForTag(tag) {
	let type = pine_html_TagTypes_types.h[tag];
	if(type == null) {
		type = pine_UniqueId.uid++;
		pine_html_TagTypes_types.h[tag] = type;
	}
	return type;
}
class pine_html_Html_$button extends pine_html_HtmlElementComponent {
	constructor(props) {
		let children = props.children == null ? [] : props.children;
		let key = props.key;
		Reflect.deleteField(props,"children");
		Reflect.deleteField(props,"key");
		super({ tag : "button", attrs : props, key : key, children : children, isSvg : false});
	}
	getComponentType() {
		return pine_html_Html_$button.type;
	}
}
pine_html_Html_$button.__name__ = true;
pine_html_Html_$button.__super__ = pine_html_HtmlElementComponent;
Object.assign(pine_html_Html_$button.prototype, {
	__class__: pine_html_Html_$button
});
class pine_html_Html_$div extends pine_html_HtmlElementComponent {
	constructor(props) {
		let children = props.children == null ? [] : props.children;
		let key = props.key;
		Reflect.deleteField(props,"children");
		Reflect.deleteField(props,"key");
		super({ tag : "div", attrs : props, key : key, children : children, isSvg : false});
	}
	getComponentType() {
		return pine_html_Html_$div.type;
	}
}
pine_html_Html_$div.__name__ = true;
pine_html_Html_$div.__super__ = pine_html_HtmlElementComponent;
Object.assign(pine_html_Html_$div.prototype, {
	__class__: pine_html_Html_$div
});
class pine_html_Html_$h1 extends pine_html_HtmlElementComponent {
	constructor(props) {
		let children = props.children == null ? [] : props.children;
		let key = props.key;
		Reflect.deleteField(props,"children");
		Reflect.deleteField(props,"key");
		super({ tag : "h1", attrs : props, key : key, children : children, isSvg : false});
	}
	getComponentType() {
		return pine_html_Html_$h1.type;
	}
}
pine_html_Html_$h1.__name__ = true;
pine_html_Html_$h1.__super__ = pine_html_HtmlElementComponent;
Object.assign(pine_html_Html_$h1.prototype, {
	__class__: pine_html_Html_$h1
});
class pine_html_Html_$h3 extends pine_html_HtmlElementComponent {
	constructor(props) {
		let children = props.children == null ? [] : props.children;
		let key = props.key;
		Reflect.deleteField(props,"children");
		Reflect.deleteField(props,"key");
		super({ tag : "h3", attrs : props, key : key, children : children, isSvg : false});
	}
	getComponentType() {
		return pine_html_Html_$h3.type;
	}
}
pine_html_Html_$h3.__name__ = true;
pine_html_Html_$h3.__super__ = pine_html_HtmlElementComponent;
Object.assign(pine_html_Html_$h3.prototype, {
	__class__: pine_html_Html_$h3
});
class pine_html_Html_$span extends pine_html_HtmlElementComponent {
	constructor(props) {
		let children = props.children == null ? [] : props.children;
		let key = props.key;
		Reflect.deleteField(props,"children");
		Reflect.deleteField(props,"key");
		super({ tag : "span", attrs : props, key : key, children : children, isSvg : false});
	}
	getComponentType() {
		return pine_html_Html_$span.type;
	}
}
pine_html_Html_$span.__name__ = true;
pine_html_Html_$span.__super__ = pine_html_HtmlElementComponent;
Object.assign(pine_html_Html_$span.prototype, {
	__class__: pine_html_Html_$span
});
class pine_html_dom_DomBootstrap extends pine_html_HtmlBootstrap {
	constructor(el) {
		super(el);
	}
	getDefaultRoot() {
		return window.document.getElementById("root");
	}
	createRoot(child) {
		return new pine_html_dom_DomRoot({ el : this.el, child : child});
	}
}
pine_html_dom_DomBootstrap.__name__ = true;
pine_html_dom_DomBootstrap.__super__ = pine_html_HtmlBootstrap;
Object.assign(pine_html_dom_DomBootstrap.prototype, {
	__class__: pine_html_dom_DomBootstrap
});
class pine_html_dom_DomRoot extends pine_RootComponent {
	constructor(props) {
		super(props);
		this.el = props.el;
	}
	getComponentType() {
		return pine_html_dom_DomRoot.type;
	}
	getRootObject() {
		return this.el;
	}
	createElement() {
		return new pine_html_dom_DomRootElement(this);
	}
	updateObject(root,object,previousComponent) {
		return object;
	}
}
pine_html_dom_DomRoot.__name__ = true;
pine_html_dom_DomRoot.__super__ = pine_RootComponent;
Object.assign(pine_html_dom_DomRoot.prototype, {
	__class__: pine_html_dom_DomRoot
});
class pine_html_dom_DomRootElement extends pine_RootElement {
	constructor(rootComponent) {
		super(rootComponent);
	}
	createHtmlElement(tag,attrs,isSvg) {
		let el = isSvg ? window.document.createElementNS("http://www.w3.org/2000/svg",tag) : window.document.createElement(tag);
		this.updateHtmlElement(el,attrs);
		return el;
	}
	updateHtmlElement(object,newAttrs,oldAttrs) {
		if(oldAttrs == null) {
			oldAttrs = { };
		}
		let el = object;
		pine_html_shared_ObjectTools.diffObject(oldAttrs,newAttrs,function(name,oldValue,newValue) {
			pine_html_dom_DomTools.updateNodeAttribute(el,name,oldValue,newValue);
		});
	}
	createHtmlText(content) {
		return new Text(content);
	}
	updateHtmlText(object,content,previous) {
		if(previous != null && content != previous) {
			object.textContent = content == null ? "" : content;
		}
	}
	insertObject(object,slot,findParent) {
		let el = object;
		if(slot != null && slot.previous != null) {
			slot.previous.getObject().after(el);
		} else {
			findParent().prepend(el);
		}
	}
	moveObject(object,from,to,findParent) {
		let el = object;
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
			findParent().prepend(el);
			return;
		}
		to.previous.getObject().after(el);
	}
	removeObject(object,slot) {
		object.remove();
	}
}
pine_html_dom_DomRootElement.__name__ = true;
pine_html_dom_DomRootElement.__interfaces__ = [pine_html_HtmlRoot];
pine_html_dom_DomRootElement.__super__ = pine_RootElement;
Object.assign(pine_html_dom_DomRootElement.prototype, {
	__class__: pine_html_dom_DomRootElement
});
class pine_html_dom_DomTools {
	static updateNodeAttribute(el,name,oldValue,newValue) {
		while(true) {
			let isSvg = el.namespaceURI == "http://www.w3.org/2000/svg";
			switch(name) {
			case "className":
				name = "class";
				continue;
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
						let name1 = name.toLowerCase();
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
							let name1 = name.toLowerCase();
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
						let name1 = name.toLowerCase();
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
			return;
		}
	}
	static getHtmlName(name) {
		if(name.startsWith("aria")) {
			return "aria-" + HxOverrides.substr(name,4,null).toLowerCase();
		}
		return name;
	}
}
pine_html_dom_DomTools.__name__ = true;
class pine_html_shared_ObjectTools {
	static diffObject(oldProps,newProps,apply) {
		if(oldProps == newProps) {
			return 0;
		}
		let changed = 0;
		let this1;
		if(newProps == null) {
			newProps = pine_html_shared_ObjectTools.EMPTY;
			this1 = oldProps;
		} else if(oldProps == null) {
			oldProps = pine_html_shared_ObjectTools.EMPTY;
			this1 = newProps;
		} else {
			let ret = Reflect.copy(newProps);
			let _g = 0;
			let _g1 = Reflect.fields(oldProps);
			while(_g < _g1.length) ret[_g1[_g++]] = true;
			this1 = ret;
		}
		let keys = Reflect.fields(this1);
		let _g = 0;
		while(_g < keys.length) {
			let key = keys[_g];
			++_g;
			let _g1 = oldProps[key];
			let _g2 = newProps[key];
			if(_g1 == null) {
				if(_g1 != _g2) {
					apply(key,_g1,_g2);
					++changed;
				}
			} else if(_g1 != _g2) {
				apply(key,_g1,_g2);
				++changed;
			}
		}
		return changed;
	}
}
pine_html_shared_ObjectTools.__name__ = true;
class pompom_App extends pine_ImmutableComponent {
	constructor(props) {
		pine_Component._hx_skip_constructor = true;
		super();
		pine_Component._hx_skip_constructor = false;
		this._hx_constructor(props);
	}
	_hx_constructor(props) {
		this.state = new pompom_TimerState({ mode : pompom_TimerMode.Working});
		super._hx_constructor(props.key);
		if(props.state != null) {
			this.state = props.state;
		}
	}
	init(context) {
		let _gthis = this;
		let this1 = context;
		let effect = function() {
			let title = window.document.head.querySelector("title");
			let suffix = _gthis.state.tracked.state_paused.get() ? " (Paused)" : "";
			switch(_gthis.state.tracked.state_mode.get()._hx_index) {
			case 0:
				title.innerHTML = "PomPom | Working" + suffix;
				break;
			case 1:
				title.innerHTML = "PomPom | On Break" + suffix;
				break;
			}
		};
		pine_Queue.enqueue(pine_Process.current(),function() {
			this1.addDisposable(new pine_Observer(effect));
		});
	}
	render(context) {
		let _gthis = this;
		let atom = nuke_AtomType.AtomStatic("_nu6C9FFC0A","margin:2rem auto");
		nuke_Engine.getInstance().add(atom);
		let atom1 = nuke_AtomType.AtomStatic("_nuE0EE7F3","max-width:300px");
		nuke_Engine.getInstance().add(atom1);
		let atom2 = nuke_AtomType.AtomStatic("_nuED411AB6","display:flex");
		nuke_Engine.getInstance().add(atom2);
		let atom3 = nuke_AtomType.AtomStatic("_nu2F93709C","flex-direction:column");
		nuke_Engine.getInstance().add(atom3);
		let atom4 = nuke_AtomType.AtomStatic("_nu57894D10","background-color:var(--pompom-color-dark)");
		nuke_Engine.getInstance().add(atom4);
		let atom5 = nuke_AtomType.AtomStatic("_nuDFE61DC5","color:var(--pompom-color-light)");
		nuke_Engine.getInstance().add(atom5);
		let atom6 = nuke_AtomType.AtomStatic("_nu64FB2DAE","padding:2rem");
		nuke_Engine.getInstance().add(atom6);
		let atom7 = nuke_AtomType.AtomStatic("_nu8A0E6926","border-radius:2rem");
		nuke_Engine.getInstance().add(atom7);
		return new pine_html_Html_$div({ className : nuke_ClassName.ofAtoms([atom,atom1,atom2,atom3,atom4,atom5,atom6,atom7]), children : [new pompom_TimerDisplay({ timer : this.state}),new pine_Isolate({ wrap : function(context) {
			let atom = nuke_AtomType.AtomStatic("_nuED411AB6","display:flex");
			nuke_Engine.getInstance().add(atom);
			let atom1 = nuke_AtomType.AtomStatic("_nu83065E8E","gap:1rem");
			nuke_Engine.getInstance().add(atom1);
			let tmp = nuke_ClassName.ofAtoms([atom,atom1]);
			let tmp1;
			if(_gthis.state.tracked.state_paused.get() == true) {
				let tmp;
				switch(_gthis.state.tracked.state_mode.get()._hx_index) {
				case 0:
					let atom = nuke_AtomType.AtomStatic("_nuFFB5E358","--pompom-button-bg-color:var(--pompom-color-working)");
					nuke_Engine.getInstance().add(atom);
					let atom1 = nuke_AtomType.AtomStatic("_nu442A677","--pompom-button-color:var(--pompom-color-dark)");
					nuke_Engine.getInstance().add(atom1);
					tmp = nuke_ClassName.ofAtoms([atom,atom1]);
					break;
				case 1:
					let atom2 = nuke_AtomType.AtomStatic("_nuED16048A","--pompom-button-bg-color:var(--pompom-color-on-break)");
					nuke_Engine.getInstance().add(atom2);
					let atom3 = nuke_AtomType.AtomStatic("_nu442A677","--pompom-button-color:var(--pompom-color-dark)");
					nuke_Engine.getInstance().add(atom3);
					tmp = nuke_ClassName.ofAtoms([atom2,atom3]);
					break;
				}
				tmp1 = new pompom_ui_Button({ styles : tmp, onClick : function(e) {
					e.preventDefault();
					_gthis.state.start();
				}, child : new pine_html_HtmlTextComponent({ content : "Start"})});
			} else {
				let atom = nuke_AtomType.AtomStatic("_nuD7C284A7","--pompom-button-bg-color:var(--pompom-color-light)");
				nuke_Engine.getInstance().add(atom);
				let atom1 = nuke_AtomType.AtomStatic("_nu442A677","--pompom-button-color:var(--pompom-color-dark)");
				nuke_Engine.getInstance().add(atom1);
				tmp1 = new pompom_ui_Button({ styles : nuke_ClassName.ofAtoms([atom,atom1]), onClick : function(e) {
					e.preventDefault();
					_gthis.state.pause();
				}, child : new pine_html_HtmlTextComponent({ content : "Pause"})});
			}
			let tmp2 = new pine_html_Html_$div({ children : [tmp1]});
			let atom2 = nuke_AtomType.AtomStatic("_nuED411AB6","display:flex");
			nuke_Engine.getInstance().add(atom2);
			let atom3 = nuke_AtomType.AtomStatic("_nu83065E8E","gap:1rem");
			nuke_Engine.getInstance().add(atom3);
			return new pine_html_Html_$div({ className : tmp, children : [tmp2,new pine_html_Html_$div({ className : nuke_ClassName.ofAtoms([atom2,atom3]), children : [new pompom_ui_Button({ onClick : function(e) {
				e.preventDefault();
				_gthis.state.takeBreak();
			}, child : new pine_html_HtmlTextComponent({ content : "Break"})}),new pompom_ui_Button({ onClick : function(e) {
				e.preventDefault();
				_gthis.state.startWork();
			}, child : new pine_html_HtmlTextComponent({ content : "Work"})})]})]});
		}})]});
	}
	getComponentType() {
		return pompom_App.type;
	}
}
pompom_App.__name__ = true;
pompom_App.__super__ = pine_ImmutableComponent;
Object.assign(pompom_App.prototype, {
	__class__: pompom_App
});
class pompom_TimerDisplay extends pine_ObserverComponent {
	constructor(props) {
		pine_Component._hx_skip_constructor = true;
		super();
		pine_Component._hx_skip_constructor = false;
		this._hx_constructor(props);
	}
	_hx_constructor(props) {
		this.trackedObject = null;
		super._hx_constructor(props.key);
		this.trackedObjectProps = { timer : props.timer};
	}
	render(context) {
		let atom = nuke_AtomType.AtomStatic("_nuED411AB6","display:flex");
		nuke_Engine.getInstance().add(atom);
		let atom1 = nuke_AtomType.AtomStatic("_nu50EF4B04","align-items:center");
		nuke_Engine.getInstance().add(atom1);
		let atom2 = nuke_AtomType.AtomStatic("_nu197CFB7E","margin-bottom:1rem");
		nuke_Engine.getInstance().add(atom2);
		let tmp = nuke_ClassName.ofAtoms([atom,atom1,atom2]);
		let atom3 = nuke_AtomType.AtomStatic("_nuF0F907E9","flex:1");
		nuke_Engine.getInstance().add(atom3);
		let atom4 = nuke_AtomType.AtomStatic("_nu95D0BA33","color:var(--pompom-color-dark)");
		nuke_Engine.getInstance().add(atom4);
		let atom5 = nuke_AtomType.AtomStatic("_nu169008A3","margin:0");
		nuke_Engine.getInstance().add(atom5);
		let atom6 = nuke_AtomType.AtomStatic("_nuDB0CB6EB","width:100%");
		nuke_Engine.getInstance().add(atom6);
		let atom7 = nuke_AtomType.AtomStatic("_nuF82D52C1","padding:0 1rem");
		nuke_Engine.getInstance().add(atom7);
		let atom8 = nuke_AtomType.AtomStatic("_nu8A0E6926","border-radius:2rem");
		nuke_Engine.getInstance().add(atom8);
		let atom9 = nuke_AtomType.AtomStatic("_nuCF5DC249","line-height:2rem");
		nuke_Engine.getInstance().add(atom9);
		let atom10 = nuke_AtomType.AtomStatic("_nuC8BCEFEB","text-align:center");
		nuke_Engine.getInstance().add(atom10);
		let tmp1 = nuke_ClassName.ofAtoms([atom3,atom4,atom5,atom6,atom7,atom8,atom9,atom10]);
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		let _g = this.trackedObject.state_timer.get().tracked.state_mode.get();
		let tmp2;
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		if(this.trackedObject.state_timer.get().tracked.state_paused.get()) {
			let atom = nuke_AtomType.AtomStatic("_nu4DB80EF6","background-color:var(--pompom-color-light)");
			nuke_Engine.getInstance().add(atom);
			let atom1 = nuke_AtomType.AtomStatic("_nu95D0BA33","color:var(--pompom-color-dark)");
			nuke_Engine.getInstance().add(atom1);
			tmp2 = nuke_ClassName.ofAtoms([atom,atom1]);
		} else {
			switch(_g._hx_index) {
			case 0:
				let atom11 = nuke_AtomType.AtomStatic("_nu64EA294F","background-color:var(--pompom-color-working)");
				nuke_Engine.getInstance().add(atom11);
				tmp2 = nuke_ClassName.ofAtoms([atom11]);
				break;
			case 1:
				let atom12 = nuke_AtomType.AtomStatic("_nuDAB59EFD","background-color:var(--pompom-color-on-break)");
				nuke_Engine.getInstance().add(atom12);
				tmp2 = nuke_ClassName.ofAtoms([atom12]);
				break;
			}
		}
		let tmp3 = nuke_ClassName.with(tmp1,tmp2);
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		let tmp4;
		switch(this.trackedObject.state_timer.get().tracked.state_mode.get()._hx_index) {
		case 0:
			tmp4 = new pine_html_HtmlTextComponent({ content : "Working"});
			break;
		case 1:
			tmp4 = new pine_html_HtmlTextComponent({ content : "Break"});
			break;
		}
		let tmp5 = new pine_html_Html_$h3({ className : tmp3, children : [tmp4]});
		let atom13 = nuke_AtomType.AtomStatic("_nuF0F907EA","flex:2");
		nuke_Engine.getInstance().add(atom13);
		let atom14 = nuke_AtomType.AtomStatic("_nuED411AB6","display:flex");
		nuke_Engine.getInstance().add(atom14);
		let atom15 = nuke_AtomType.AtomStatic("_nu34AD6F42","justify-content:flex-end");
		nuke_Engine.getInstance().add(atom15);
		let tmp6 = nuke_ClassName.ofAtoms([atom13,atom14,atom15]);
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		let tmp7 = new pine_html_Html_$div({ className : tmp, children : [tmp5,new pine_html_Html_$span({ className : tmp6, children : [this.trackedObject.state_timer.get().tracked.state_paused.get() ? new pine_html_HtmlTextComponent({ content : "Paused"}) : new pine_html_HtmlTextComponent({ content : ""})]})]});
		let atom16 = nuke_AtomType.AtomStatic("_nu105974EC","margin:1rem 0");
		nuke_Engine.getInstance().add(atom16);
		let atom17 = nuke_AtomType.AtomStatic("_nu67F63469","font-size:5rem");
		nuke_Engine.getInstance().add(atom17);
		let atom18 = nuke_AtomType.AtomStatic("_nuDB0CB6EB","width:100%");
		nuke_Engine.getInstance().add(atom18);
		let atom19 = nuke_AtomType.AtomStatic("_nuC8BCEFEB","text-align:center");
		nuke_Engine.getInstance().add(atom19);
		let tmp8 = nuke_ClassName.ofAtoms([atom16,atom17,atom18,atom19]);
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		let _g1 = this.trackedObject.state_timer.get().tracked.state_mode.get();
		let tmp9;
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		if(this.trackedObject.state_timer.get().tracked.state_paused.get()) {
			let atom = nuke_AtomType.AtomStatic("_nuCEF5B599","color:rgb(159,159,159)");
			nuke_Engine.getInstance().add(atom);
			tmp9 = nuke_ClassName.ofAtoms([atom]);
		} else {
			switch(_g1._hx_index) {
			case 0:
				let atom20 = nuke_AtomType.AtomStatic("_nu52363FC6","color:var(--pompom-color-working)");
				nuke_Engine.getInstance().add(atom20);
				tmp9 = nuke_ClassName.ofAtoms([atom20]);
				break;
			case 1:
				let atom21 = nuke_AtomType.AtomStatic("_nu79BA7BF0","color:var(--pompom-color-on-break)");
				nuke_Engine.getInstance().add(atom21);
				tmp9 = nuke_ClassName.ofAtoms([atom21]);
				break;
			}
		}
		let tmp10 = nuke_ClassName.with(tmp8,tmp9);
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		return new pine_html_Html_$div({ children : [tmp7,new pine_html_Html_$h1({ className : tmp10, children : [new pine_html_HtmlTextComponent({ content : this.format(new Date(this.trackedObject.state_timer.get().tracked.state_secondsElapsed.get() * 1000))})]})]});
	}
	format(date) {
		let time;
		if(this.trackedObject == null) {
			throw new pine_PineException("Failed assertion: this.trackedObject != null");
		}
		switch(this.trackedObject.state_timer.get().tracked.state_mode.get()._hx_index) {
		case 0:
			if(this.trackedObject == null) {
				throw new pine_PineException("Failed assertion: this.trackedObject != null");
			}
			time = this.trackedObject.state_timer.get().tracked.state_workLength.get();
			break;
		case 1:
			if(this.trackedObject == null) {
				throw new pine_PineException("Failed assertion: this.trackedObject != null");
			}
			time = this.trackedObject.state_timer.get().tracked.state_breakLength.get();
			break;
		}
		let minutes = (date.getSeconds() >= 1 ? time - 1 : time) - date.getMinutes() + "";
		let seconds = date.getSeconds() == 0 ? "0" : 60 - date.getSeconds() + "";
		if(minutes.length == 1) {
			minutes = "0" + minutes;
		}
		if(seconds.length == 1) {
			seconds = "0" + seconds;
		}
		return "" + minutes + ":" + seconds;
	}
	getComponentType() {
		return pompom_TimerDisplay.type;
	}
	createTrackedObject() {
		this.trackedObject = new pine_TrackedObject_$b958dd0262ea2d31051a5e42b38d7b09({ timer : this.trackedObjectProps.timer});
		return this.trackedObject;
	}
	reuseTrackedObject(trackedObject) {
		this.trackedObject = trackedObject;
		this.trackedObject.replace(this.trackedObjectProps);
		return this.trackedObject;
	}
}
pompom_TimerDisplay.__name__ = true;
pompom_TimerDisplay.__super__ = pine_ObserverComponent;
Object.assign(pompom_TimerDisplay.prototype, {
	__class__: pompom_TimerDisplay
});
var pompom_TimerMode = $hxEnums["pompom.TimerMode"] = { __ename__:true,__constructs__:null
	,Working: {_hx_name:"Working",_hx_index:0,__enum__:"pompom.TimerMode",toString:$estr}
	,Break: {_hx_name:"Break",_hx_index:1,__enum__:"pompom.TimerMode",toString:$estr}
};
pompom_TimerMode.__constructs__ = [pompom_TimerMode.Working,pompom_TimerMode.Break];
class pompom_TimerState {
	constructor(props) {
		this.timer = null;
		if(props.workLength == null) {
			props.workLength = 25;
		}
		if(props.breakLength == null) {
			props.breakLength = 5;
		}
		if(props.paused == null) {
			props.paused = true;
		}
		if(props.mode == null) {
			props.mode = pompom_TimerMode.Working;
		}
		if(props.secondsElapsed == null) {
			props.secondsElapsed = 0;
		}
		this.tracked = new pine_TrackedObject_$4a7e9a0f5c77c80394cbb0314018c614({ workLength : props.workLength, breakLength : props.breakLength, paused : props.paused, mode : props.mode, secondsElapsed : props.secondsElapsed});
	}
	start() {
		if(!this.tracked.state_paused.get()) {
			return;
		}
		this.tracked.state_paused.set(false);
		if(this.timer != null) {
			this.timer.stop();
		}
		this.timer = this.createTimer();
	}
	pause() {
		if(this.tracked.state_paused.get()) {
			return;
		}
		this.tracked.state_paused.set(true);
		this.timer.stop();
		this.timer = null;
	}
	startWork() {
		this.tracked.state_secondsElapsed.set(0);
		this.tracked.state_mode.set(pompom_TimerMode.Working);
		if(this.tracked.state_paused.get()) {
			return;
		}
		if(this.timer != null) {
			this.timer.stop();
		}
		this.timer = this.createTimer();
	}
	takeBreak() {
		this.tracked.state_secondsElapsed.set(0);
		this.tracked.state_mode.set(pompom_TimerMode.Break);
		if(this.tracked.state_paused.get()) {
			return;
		}
		if(this.timer != null) {
			this.timer.stop();
		}
		this.timer = this.createTimer();
	}
	createTimer() {
		let timer = new haxe_Timer(1000);
		timer.run = $bind(this,this.run);
		return timer;
	}
	run() {
		let value = this.tracked.state_secondsElapsed.get() + 1;
		this.tracked.state_secondsElapsed.set(value);
		switch(this.tracked.state_mode.get()._hx_index) {
		case 0:
			if(this.tracked.state_secondsElapsed.get() == this.tracked.state_workLength.get() * 60) {
				this.tracked.state_mode.set(pompom_TimerMode.Break);
				this.tracked.state_secondsElapsed.set(0);
			}
			break;
		case 1:
			if(this.tracked.state_secondsElapsed.get() == this.tracked.state_breakLength.get() * 60) {
				this.tracked.state_mode.set(pompom_TimerMode.Working);
				this.tracked.state_secondsElapsed.set(0);
			}
			break;
		default:
		}
	}
	dispose() {
		this.tracked.dispose();
	}
}
pompom_TimerState.__name__ = true;
pompom_TimerState.__interfaces__ = [pine_Record];
Object.assign(pompom_TimerState.prototype, {
	__class__: pompom_TimerState
});
class pompom_ui_Button extends pine_ImmutableComponent {
	constructor(props) {
		pine_Component._hx_skip_constructor = true;
		super();
		pine_Component._hx_skip_constructor = false;
		this._hx_constructor(props);
	}
	_hx_constructor(props) {
		this.styles = null;
		super._hx_constructor(props.key);
		if(props.styles != null) {
			this.styles = props.styles;
		}
		this.onClick = props.onClick;
		this.child = props.child;
	}
	render(context) {
		let atom = nuke_AtomType.AtomStatic("_nuAEBBA221","color:var(--pompom-button-color)");
		nuke_Engine.getInstance().add(atom);
		let atom1 = nuke_AtomType.AtomStatic("_nuA00807A0","background-color:var(--pompom-button-bg-color)");
		nuke_Engine.getInstance().add(atom1);
		let atom2 = nuke_AtomType.AtomStatic("_nu64EB7511","padding:1rem");
		nuke_Engine.getInstance().add(atom2);
		let atom3 = nuke_AtomType.AtomStatic("_nu8A2DDA60","border-radius:4rem");
		nuke_Engine.getInstance().add(atom3);
		let atom4 = nuke_AtomType.AtomStatic("_nu3D860CE6","font-weight:bold");
		nuke_Engine.getInstance().add(atom4);
		return new pine_html_Html_$button({ className : nuke_ClassName.with(nuke_ClassName.ofAtoms([atom,atom1,atom2,atom3,atom4]),this.styles), onclick : this.onClick, children : [this.child]});
	}
	getComponentType() {
		return pompom_ui_Button.type;
	}
}
pompom_ui_Button.__name__ = true;
pompom_ui_Button.__super__ = pine_ImmutableComponent;
Object.assign(pompom_ui_Button.prototype, {
	__class__: pompom_ui_Button
});
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
{
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
}
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
nuke_injector_Tools.styleId = "__nuke__";
pine_Component._hx_skip_constructor = false;
pine_Element._hx_skip_constructor = false;
pine_UniqueId.uid = 0;
pine_Isolate.__meta__ = { fields : { wrap : { prop : null}}};
pine_Isolate.type = pine_UniqueId.uid++;
pine_Observer.stack = new haxe_ds_List();
pine_Process.stack = new haxe_ds_List();
var pine_Process_hasRaf = typeof window != 'undefined' && 'requestAnimationFrame' in window;
pine_html_HtmlTextComponent.type = pine_UniqueId.uid++;
var pine_html_TagTypes_types = new haxe_ds_StringMap();
pine_html_Html_$button.type = pine_html_TagTypes_getTypeForTag("button");
pine_html_Html_$div.type = pine_html_TagTypes_getTypeForTag("div");
pine_html_Html_$h1.type = pine_html_TagTypes_getTypeForTag("h1");
pine_html_Html_$h3.type = pine_html_TagTypes_getTypeForTag("h3");
pine_html_Html_$span.type = pine_html_TagTypes_getTypeForTag("span");
pine_html_dom_DomRoot.type = pine_UniqueId.uid++;
pine_html_shared_ObjectTools.EMPTY = { };
pompom_App.__meta__ = { fields : { state : { prop : null}}};
pompom_App.type = pine_UniqueId.uid++;
pompom_TimerDisplay.type = pine_UniqueId.uid++;
pompom_ui_Button.__meta__ = { fields : { styles : { prop : null}, onClick : { prop : null}, child : { prop : null}}};
pompom_ui_Button.type = pine_UniqueId.uid++;
Pom_main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
