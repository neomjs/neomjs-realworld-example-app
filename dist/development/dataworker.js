/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultConfig)
/* harmony export */ });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * The current environment. Valid values: 'development', 'dist/development', 'dist/production'
     * This config will get auto-generated
     * @default 'dist/production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'dist/production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * true will log the delta updates inside the main thread(s) as well as the requestAnimation frames
     * @default false
     * @memberOf! module:Neo
     * @name config.logDeltaUpdates
     * @type Boolean
     */
    logDeltaUpdates: false,
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, DragDrop, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet, WindowPosition
     * (src/main/addon)
     * @default ['DragDrop','Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Stylesheet'],
    /**
     * You can visually show the amount of delta updates per second using this config.
     * It expects a dom node with the id "neo-delta-updates" as the rendering target.
     * @default false
     * @memberOf! module:Neo
     * @name config.renderCountDeltas
     * @type Boolean
     */
    renderCountDeltas: false,
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCssVars === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS variable based stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCssVars: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * Creates App, Data & VDom as SharedWorkers.
     * Set this one to true in case you want to connect multiple main threads.
     * @default false
     * @memberOf! module:Neo
     * @name config.useSharedWorkers
     * @type Boolean
     */
    useSharedWorkers: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: `${Neo.config.basePath || DefaultConfig.basePath}resources/`,
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: `${Neo.config.basePath || DefaultConfig.basePath}src/worker/`,
});




/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Neo)
/* harmony export */ });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @protected
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @protected
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @protected
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            proto         = cls.prototype || cls,
            protos        = [],
            config, ctor, staticConfig;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config,       true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       ? baseCfg       : {};
        staticConfig = baseStaticCfg ? baseStaticCfg : {};

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig       && ctor.getConfig()       || {},
                staticCfg = ctor.getStaticConfig && ctor.getStaticConfig() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg && staticCfg.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length > 0) {
                applyMixins(ctor, mixins);

                if (Neo.ns('Neo.core.Observable', false, ctor.prototype.mixins)) {
                    staticCfg.observable = true;
                }
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize',
     *     decamel          : 'decamel',
     *     isArray          : 'isArray',
     *     isBoolean        : 'isBoolean',
     *     isDefined        : 'isDefined',
     *     isNumber         : 'isNumber',
     *     isObject         : 'isObject',
     *     isString         : 'isString',
     *     toArray          : 'toArray'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && config && typeof config === 'object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && defaults && typeof defaults === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        if (Array.isArray(obj)) {
            return !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))];
        }

        if (obj !== null && typeof obj === 'object') {
            if (obj.constructor.isClass && obj instanceof Neo.core.Base) {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            } else if(obj.constructor.isClass) {
                return obj;
            } else if (obj instanceof Date) {
                obj = new Date(obj.valueOf());
            } else if (obj instanceof Map) {
                obj = new Map(obj); // shallow copy
            } else {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances);
                });

                return out;
            }
        }

        return obj; // return all other data types
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};

        delete config._id;
        delete config.id;

        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.button.Base' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.button.Base',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let cls, instance;

        if (typeof className === 'function' && undefined !== className.constructor) {
            cls = className;
        } else {
            if (typeof className === 'object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className ? config.className : config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.button.Base = self.Neo.button.Base || {};
     * // return self.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    }
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = 'beforeGet' + Neo.capitalize(key),
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                    delete me[configSymbol][key];
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = Neo.capitalize(key),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items') {
                    value = Neo.clone(value, true, true);
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                if (hasChanged(value, oldValue)) {
                    if (typeof me[afterSet] === 'function') {
                        me[afterSet](value, oldValue);
                    }
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 * Checks if the value of a config has changed
 * todo: we could compare objects & arrays for equality
 * @param {*} value
 * @param {*} oldValue
 * @returns {Boolean}
 * @private
 */
function hasChanged(value, oldValue) {
    if (Array.isArray(value)) {
        return true;
    } else if (Neo.isObject(value)) {
        if (oldValue instanceof Date && value instanceof Date) {
            return oldValue.valueOf() !== value.valueOf();
        }

        return true;
    }

    return oldValue !== value;
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key] && proto[key]._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                proto.className + ': Multiple mixins defining same property (' +
                mixinProto.className + ', ' +
                proto[key]._from + ') => ' +
                key
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__.default);




/***/ }),

/***/ "./node_modules/neo.mjs/src/Xhr.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Xhr.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_connection_Xhr_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/connection/Xhr.mjs */ "./node_modules/neo.mjs/src/data/connection/Xhr.mjs");


/**
 * @class Neo.Xhr
 * @extends Neo.data.connection.Xhr
 * @singleton
 */
class Xhr extends _data_connection_Xhr_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.Xhr'
         * @protected
         */
        className: 'Neo.Xhr',
        /**
         * @member {String} ntype='xhr'
         * @protected
         */
        ntype: 'xhr',
        /**
         * @member {Object} remote={app:['promiseRequest','promiseJson']}
         * @protected
         */
        remote: {
            app: [
                'promiseJson',
                'promiseRequest'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}
}

Neo.applyClassConfig(Xhr);

let instance = Neo.create(Xhr);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Base.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Base'
         * @protected
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @protected
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @protected
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {Array} items_=[]
         */
        items_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {string} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @protected
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @protected
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    add(item) {
        this.splice(0, null, item);
        return this.getCount();
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        if (oldValue) {
            me.filter();
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetItems(value, oldValue) {
        let me          = this,
            keyProperty = me.keyProperty,
            i           = 0,
            len         = value.length,
            item;

        for (; i < len; i++) {
            item = value[i];
            me.map.set(item[keyProperty], item);
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        if (oldValue && me.autoSort) {
            me.doSort();
        }
    }

    /**
     *
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig); // todo: core.Observable.un needs to support this syntax
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @protected
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            operator: key.operator,
                            property: key.property,
                            value   : key.value
                        });

                        hasMatch = true;
                        break;
                    } else if (
                        oldValue[i].operator === (key.operator || '===') &&
                        oldValue[i].property === key.property &&
                        oldValue[i].value    === key.value
                    ) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__.default, key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @protected
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            direction: key.direction,
                            property : key.property
                        });

                        hasMatch = true;
                        break;
                    } else if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__.default, key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param opts
     * @protected
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);
        return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     *
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     * @protected
     */
    doSort() {
        let me                = this,
            items             = me._items,
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index: index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (me[updatingIndex] === 0) {
            me.fire('sort');
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * @protected
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems && me.allItems._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            me.clear();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        me.fire('filter');
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} value
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        scope = scope || me;

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     *
     * @returns {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @returns {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item && item[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     *
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default.isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Number} the collection count
     */
    insert(index, item) {
        this.splice(index, 0, item);
        return this.getCount();
    }

    /**
     *
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     *
     * @param {Object} item
     * @returns {boolean}
     * @protected
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);

        // console.log('onMutate', me.getCount(), me.id, opts);
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     *
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Array} [removeCountOrToRemoveArray]
     * @param {Array| Object} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default.isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!index && removeCountAtIndex) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__.default.error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default.isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default.isObject(item) ? item[keyProperty] : item;

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default.isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems  : addedItems,
                removedItems: removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems  : addedItems,
            removedItems: removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Filter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Filter.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @protected
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @protected
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @protected
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function, has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=true
         */
        includeEmptyValues: true,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            this.fireChangeEvent(value, oldValue);
        }
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @protected
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     *
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a collection item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this,
            filterValue, recordValue;

        if (me._disabled) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        filterValue = me._value;
        recordValue = item[me._property];

        if (filterValue instanceof Date && recordValue instanceof Date) {
            filterValue = filterValue.valueOf();
            recordValue = recordValue.valueOf();
        }

        return !Filter[me._operator](recordValue, filterValue);
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a.toLowerCase().includes(b.toLowerCase());
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Sorter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Sorter.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Sorter'
         * @protected
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @protected
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @protected
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @protected
         */
        useTransformValue: true
    }}

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     *
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol = Symbol.for('configSymbol'),
      isInstance   = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
         */
        ntype: 'base',
        /**
         * Neo.create() will change this flag to true after the onConstructed() chain is done.
         * @member {Boolean} isConstructed=false
         * @protected
         */
        isConstructed: false,
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null,
        /**
         * You can create a new instance by passing an imported class (JS module default export)
         * @member {Class} module=null
         * @protected
         */
        module: null
    }}

    /**
     * Consumes the static getConfig() object
     * Applies the observable mixin if needed, grants remote access if needed
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        if (me.getStaticConfig('observable')) {
            me.initObservable(config);
        }

        me.initConfig(config);

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        if (me.remote) {
            setTimeout(me.initRemote.bind(me), 1);
        }
    }

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        let me = this;

        me.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(me.getIdKey());

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            if (!Neo.idMap) {
                Neo.idMap = {};
            }

            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Gets triggered after onConstructed() is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access is only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     *
     */
    onAfterConstructed() {
        let me = this;

        me.isConstructed = true;

        // We can only fire the event in case the Observable mixin is included.
        if (me.getStaticConfig('observable')) {
            me.fire('constructed', me);
        }
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     *
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action   : 'registerRemote',
                    methods  : methods,
                    className: className
                });
            }
        });
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // instead of using:
        // me[configSymbol] = values;
        // we keep the Object instance (defined via Object.defineProperties() => non enumerable)

        Object.keys(me[configSymbol]).forEach(key => {
            delete me[configSymbol][key];
        });

        Object.assign(me[configSymbol], values);

        me.processConfigs(true);
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }

    init() {}

    onAfterConstructed() {}

    onConstructed() {}
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @protected
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @protected
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @protected
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @protected
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String|null} eventId null in case an object gets passed as the name (multiple ids)
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me         = this,
            nameObject = typeof name === 'object',
            listener, existing, eventConfig;

        if (nameObject) {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        if (!nameObject) {
            eventConfig = {
                fn    : listener,
                scope : scope,
                data  : data,
                id    : eventId || Neo.getId('event')
            };

            if (existing = me.listeners && me.listeners[name]) {
                existing.forEach(cfg => {
                    if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                        console.error('Duplicate event handler attached:', name, me);
                    }
                });

                if (typeof order === 'number') {
                    existing.splice(order, 0, eventConfig);
                } else if (order === 'before') {
                    existing.unshift(eventConfig);
                } else {
                    existing.push(eventConfig);
                }
            } else {
                me.listeners[name] = [eventConfig];
            }

            return eventConfig.id;
        }

        return null;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

            me.addListener(listeners);
        }

        while (proto && proto.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     *
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    removeListener(name, eventId) {
        let me = this,
            i, len, listener, listeners, match, scope;

        if (Neo.isObject(name)) {
            if (name.scope) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                listeners = me.listeners[key] || [];
                i         = 0;
                len       = listeners.length;

                for (; i < len; i++) {
                    listener = listeners[i];

                    if (
                        listener.fn.name === (Neo.isString(value) ? value : value.name) &&
                        listener.scope   === scope
                    ) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            });
        } else if (Neo.isString(eventId)) {
            listeners = me.listeners[name];
            match     = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for removeListener
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     *
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Converts a styles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Date) {
            return false;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }

    /**
     *
     * @param {*} item
     * @returns {String}
     */
    static typeOf(item) {
        switch (typeof item) {
            case 'bigint' : return 'BigInt';
            case 'boolean': return 'Boolean';
            case 'number' : return 'Number';
            case 'string' : return 'String';
            case 'symbol' : return 'Symbol';

            case 'function': {
                if (item.constructor.prototype.isClass) {
                    return 'NeoClass';
                }

                return 'Function';
            }

            case 'object': {
                if (Array.isArray(item)) {
                    return 'Array';
                }

                if (item instanceof Date) {
                    return 'Date';
                }

                if (item instanceof Map) {
                    return 'Map';
                }

                if (item instanceof RegExp) {
                    return 'RegExp';
                }

                if (item instanceof Set) {
                    return 'Set';
                }

                if (item.constructor.isClass) {
                    if (item instanceof Neo.core.Base) {
                        return 'NeoInstance';
                    }
                }

                return 'Object';
            }
        }

        return 'Undefined';
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray',
    typeOf           : 'typeOf'
}, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);


/***/ }),

/***/ "./node_modules/neo.mjs/src/data/connection/Xhr.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/data/connection/Xhr.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Xhr)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.data.connection.Xhr
 * @extends Neo.core.Base
 */
class Xhr extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.data.connection.Xhr'
         * @protected
         */
        className: 'Neo.data.connection.Xhr',
        /**
         * @member {String} ntype='xhr'
         * @protected
         */
        ntype: 'xhr-connection',
        /**
         * @member {Function} callback=null
         */
        callback: null,
        /**
         * @member {Object|null} defaultHeaders=null
         */
        defaultHeaders: null,
        /**
         * @member {Object} requests={}
         */
        requests: {},
        /**
         * @member {Object} scope=null
         */
        scope: null,
        /**
         * @member {Number} timeout=5000
         */
        timeout: 5000
    }}

    /**
     * We cannot clone event objects across messaging
     * @param {Object} event
     */
    getResponse(event) {
        let target = event.target;

        return {
            readyState: target.readyState,
            response  : target.response,
            status    : target.status,
            statusText: target.statusText,
            headers   : target.getAllResponseHeaders()
        };
    }

    /**
     *
     * @param {Object} e
     */
    onError(e) {
        let me      = this,
            id      = e.currentTarget.neoId,
            request = me.requests[id],
            cb      = request.callback;

        cb && cb.apply(request.scope || me, [me.getResponse(e), false]);

        Object.entries(request).forEach(([key, value]) => {
            request[key] = null;
        });

        delete me.requests[id];
    }

    /**
     *
     * @param {Object} e
     */
    onLoad(e) {
        let me      = this,
            id      = e.currentTarget.neoId,
            request = me.requests[id],
            cb      = request.callback;

        cb && cb.apply(request.scope || me, [me.getResponse(e), true]);

        Object.entries(request).forEach(([key, value]) => {
            request[key] = null;
        });

        delete me.requests[id];
    }

    /**
     *
     */
    onProgress() {

    }

    /**
     *
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    promiseJson(opts) {
        let me = this;

        return new Promise((resolve, reject) => {
            opts.callback = function(data, success) {
                if (success) {
                    let json;
                    try {
                        json = JSON.parse(data.response);

                        resolve(Object.assign(data, {
                            json: json
                        }));
                    } catch(err) {
                        reject({
                            reject : true,
                            error  : err.message
                        });
                    }
                } else {
                    reject(data);
                }
            };
            me.request(opts);
        });
    }

    /**
     *
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    promiseRequest(opts) {
        let me = this;

        return new Promise((resolve, reject) => {
            opts.callback = function(data, success) {
                if (success) {
                    resolve(data);
                } else {
                    reject(data);
                }
            };
            me.request(opts);
        });
    }

    /**
     *
     * @param {Object} opts
     * @param {Function} opts.callback
     * @param {Object} opts.data
     * @param {Object} opts.headers
     * @param {Boolean} opts.insideNeo true for calls with relative URLs inside the framework scope
     * @param {String} opts.method DELETE, GET, POST, PUT
     * @param {Object} opts.params
     * @param {String} opts.responseType
     * @param {Object} opts.scope
     * @param {String} opts.url
     * @returns {XMLHttpRequest}
     * @protected
     */
    request(opts) {
        let me      = this,
            headers = {...me.defaultHeaders || {}, ...opts.headers || {}},
            id      = Neo.getId('xhr-request'),
            method  = opts.method || 'GET',
            xhr     = new XMLHttpRequest();

        if (!opts.url) {
            console.error('Neo.Xhr.request without a given url' + JSON.stringify(opts));
        } else {
            if (!opts.insideNeo && location.href.includes('/node_modules/neo.mjs/') && !location.href.includes('https://neomjs.github.io/')) {
                if (opts.url.startsWith('./') || opts.url.startsWith('../')) {
                    opts.url = '../../' + opts.url;
                }
            }

            if (opts.params) {
                opts.url += ('?' + new URLSearchParams(opts.params).toString());
            }

            xhr.neoId = id;

            me.requests[id] = {
                callback: typeof opts.callback === 'function' && opts.callback,
                scope   : opts.scope,
                xhr     : xhr
            };

            xhr.responseType = opts.responseType || 'text';
            xhr.timeout      = me.timeout;

            xhr.addEventListener('abort',    me.onError.bind(me));
            xhr.addEventListener('error',    me.onError.bind(me));
            xhr.addEventListener('load',     me.onLoad.bind(me));
            xhr.addEventListener('progress', me.onProgress.bind(me));

            xhr.open(method, opts.url, true);

            Object.entries(headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.send(opts.data);

            return xhr;
        }
    }

    /**
     *
     * @param form
     * @param {Object} opts
     * @returns {XMLHttpRequest}
     */
    sendForm(form, opts) {
        opts.data = new FormData(form);

        return this.request(opts);
    }
}

Neo.applyClassConfig(Xhr);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Base.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @protected
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @protected
         */
        ntype: 'base-manager'
    }}

    /**
     *
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return id && this.get(id) || null;
    }

    /**
     *
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     *
     * @param {Object} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Store.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Store.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");


/**
 * todo: except createRandomData a legacy class, since stores live directly inside the app worker
 * @class Neo.manager.Store
 * @extends Neo.manager.Base
 * @singleton
 */
class Store extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Store'
         * @protected
         */
        className: 'Neo.manager.Store',
        /**
         * @member {String} ntype='store-manager'
         * @protected
         */
        ntype: 'store-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Object} listeners={}
         * @protected
         */
        listeners: {},
        /**
         * @member {Object} remote={app: ['createRandomData', 'filter', 'load', 'sort']}
         * @protected
         */
        remote: {
            app: ['createRandomData', 'filter', 'load', 'sort']
        }
    }}

    /**
     *
     * Dummy method until we have a data package in place
     * @param {Number} amountColumns
     * @param {Number} amountRows
     */
    createRandomData(amountColumns, amountRows) {
        let data = [],
            i    = 0,
            j;

        for (; i < amountRows; i++) {
            data.push({});

            j = 0;

            for (; j < amountColumns; j++) {
                data[i]['column' + j] = 'Column' + (j + 1) + ' - ' + Math.round(Math.random() / 1.5);
                data[i]['column' + j + 'style'] = Math.round(Math.random() / 1.7) > 0 ? 'brown' : i%2 ? '#3c3f41' : '#323232';
            }
        }

        return data;
    }

    /**
     *
     * @param storeId
     * @param fieldName
     * @param value
     */
    filter(storeId, fieldName, value) {

    }

    /**
     *
     * @param storeId
     * @param params
     */
    load(storeId, params) {

    }

    /**
     *
     * @param storeId
     * @param fieldName
     * @param value
     */
    sort(storeId, fieldName, value) {

    }
}

Neo.applyClassConfig(Store);

let instance = Neo.create(Store);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Base'
         * @protected
         */
        className: 'Neo.worker.Base',
        /**
         * @member {String} ntype='worker'
         * @protected
         */
        ntype: 'worker',
        /**
         * Only needed for SharedWorkers
         * @member {Boolean} isConnected=false
         * @protected
         */
        isConnected: false,
        /**
         * @member {Boolean} isSharedWorker=false
         * @protected
         */
        isSharedWorker: false,
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__.default, _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__.default],
        /**
         * Only needed for SharedWorkers
         * @member {Array|null} ports=null
         */
        ports : null,
        /**
         * @member {String|null} workerId=null
         * @protected
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        Object.assign(me, {
            isSharedWorker: self.toString() === '[object SharedWorkerGlobalScope]',
            ports         : [],
            promises      : {}
        });

        if (me.isSharedWorker) {
            self.onconnect = me.onConnected.bind(me);
        } else {
            self.onmessage = me.onMessage.bind(me);
        }

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     *
     * @param {Object} opts
     * @returns {Object|null}
     */
    getPort(opts) {
        let returnPort = null,
            hasMatch;

        this.ports.forEach(port => {
            hasMatch = true;

            Object.entries(opts).forEach(([key, value]) => {
                if (value !== port[key]) {
                    hasMatch = false;
                }
            });

            if (hasMatch) {
                returnPort = port;
            }
        });

        return returnPort;
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    onConnect(data) {
        // short delay to ensure app VCs are in place
        setTimeout(() => {
            this.fire('connect', {
                appName: data.appName
            });
        }, 10);
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} e
     */
    onConnected(e) {
        let me = this,
            id = Neo.getId('port');

        me.isConnected = true;

        me.ports.push({
            appName: null,
            id     : id,
            port   : e.ports[0]
        });

        me.ports[me.ports.length - 1].port.onmessage = me.onMessage.bind(me);

        // core.Base: initRemote() subscribes to this event for the SharedWorkers context
        me.fire('connected');

        me.sendMessage('main', {action: 'workerConstructed', port: id});
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        if (!this.isSharedWorker) {
            this.sendMessage('main', {action: 'workerConstructed'});
        }
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    onDisconnect(data) {
        this.fire('disconnect', {
            appName: data.appName
        });
    }

    /**
     *
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            me['on' + Neo.capitalize(action)](data);
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                resolve: resolve,
                reject : reject
            };
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let me = this,
            message, port, portObject;

        if (!me.isSharedWorker) {
            port = self;
        } else {
            if (opts.port) {
                port = me.getPort({id: opts.port}).port;
            } else if (opts.appName) {
                portObject = me.getPort({appName: opts.appName});
                port       = portObject.port;

                opts.port = portObject.id;
            } else {
                port = me.ports[0].port;
            }
        }

        message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__.default(opts);

        port.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoteMethodAccess)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixin.RemoteMethodAccess'
         * @protected
         */
        className: 'Neo.worker.mixin.RemoteMethodAccess',
        /**
         * @member {String} ntype='mixin-remote-method-access'
         * @protected
         */
        ntype: 'mixin-remote-method-access',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data           : data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            if (me.isSharedWorker) {
                opts.appName = opts.appName || data && data.appName;
                opts.port    = opts.port    || data && data.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                exists    = false,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                } else {
                    exists = true;
                }
            });

            if (!exists && Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(data => {
                me.resolve(msg, data);
            })
            .catch(err => {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let opts = {
            action : 'reply',
            data   : data,
            reject : true,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let opts = {
            action : 'reply',
            data   : data,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }
}

Neo.applyClassConfig(RemoteMethodAccess);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Data.mjs ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _manager_Store_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/Store.mjs */ "./node_modules/neo.mjs/src/manager/Store.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony import */ var _Xhr_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Xhr.mjs */ "./node_modules/neo.mjs/src/Xhr.mjs");






/**
 * The Data worker is responsible to handle all of the communication to the backend (e.g. Ajax-calls).
 * See the tutorials for further infos.
 * @class Neo.worker.Data
 * @extends Neo.worker.Base
 * @singleton
 */
class Data extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Data'
         * @protected
         */
        className: 'Neo.worker.Data',
        /**
         * @member {String} ntype='data-worker'
         * @protected
         */
        ntype: 'data-worker',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} workerId='data'
         * @protected
         */
        workerId: 'data'
    }}

    /**
     *
     */
    onLoad() {
        console.log('worker.Data onLoad');
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyClassConfig(Data);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.create(Data);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL1hoci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9Tb3J0ZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9Mb2dnZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL2Nvbm5lY3Rpb24vWGhyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0Jhc2UubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvU3RvcmUubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvRGF0YS5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0E7QUFDVTtBQUNKO0FBQ047O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFJO0FBQ3ZCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUFvQjs7QUFFcEIsZUFBZSxvREFBVTs7QUFFekIsNkRBQW1COztBQUVuQixpRUFBZSxRQUFRLEUiLCJmaWxlIjoiZGF0YXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuLyoqXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgY29uZmlncywgZS5nLiBpbnNpZGUgdGhlIGluZGV4Lmh0bWwgb2YgeW91ciBhcHBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gKiBAbmFtZSBjb25maWdcbiAqIEB0eXBlIE9iamVjdFxuICovXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAnbmVvLWJvZHknIHRvIHRoZSBkb2N1bWVudC5ib2R5IGNsYXNzTGlzdFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlCb2R5Q2xzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogJ2RldmVsb3BtZW50JywgJ2Rpc3QvZGV2ZWxvcG1lbnQnLCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIFRoaXMgY29uZmlnIHdpbGwgZ2V0IGF1dG8tZ2VuZXJhdGVkXG4gICAgICogQGRlZmF1bHQgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZW52aXJvbm1lbnRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBlbnZpcm9ubWVudDogJ2Rpc3QvcHJvZHVjdGlvbicsXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVBbmFseXRpY3MgbWFpblRocmVhZEFkZG9uIG9yIHVzZUdvb2dsZUFuYWx5dGljczogdHJ1ZSxcbiAgICAgKiB5b3UgY2FuIGNoYW5nZSB0aGUgZ3RhZyBpZCBoZXJlLiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyAoZ2ggcGFnZXMpXG4gICAgICogQGRlZmF1bHQgJ1VBLTE1MzczNDQwNC0xJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5ndGFnSWRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBndGFnSWQ6ICdVQS0xNTM3MzQ0MDQtMScsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyBvbiBodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvXG4gICAgICogPT4gdG8gdXNlIGxvY2FsIGltYWdlcyBwYXRocyBpbnN0ZWFkIG9mIHJhdy5naXRodWJ1c2VyY29udGVudC5jb21cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0dpdEh1YlBhZ2VzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzR2l0SHViUGFnZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgdGhlIGRlbHRhIHVwZGF0ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZChzKSBhcyB3ZWxsIGFzIHRoZSByZXF1ZXN0QW5pbWF0aW9uIGZyYW1lc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvZ0RlbHRhVXBkYXRlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dEZWx0YVVwZGF0ZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCBhZGRvbnMgZm9yIHRoZSBtYWluIHRocmVhZFxuICAgICAqIFBvc3NpYmxlIHZhbHVlczogQW1DaGFydHMsIEFuYWx5dGljc0J5R29vZ2xlLCBEcmFnRHJvcCwgSGlnaGxpZ2h0SlMsIExvY2FsU3RvcmFnZSwgTWFwYm94R0wsIE1hcmtkb3duLCBTaWVzdGEsIFN0eWxlc2hlZXQsIFdpbmRvd1Bvc2l0aW9uXG4gICAgICogKHNyYy9tYWluL2FkZG9uKVxuICAgICAqIEBkZWZhdWx0IFsnRHJhZ0Ryb3AnLCdTdHlsZXNoZWV0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubWFpblRocmVhZEFkZG9uc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgbWFpblRocmVhZEFkZG9uczogWydEcmFnRHJvcCcsICdTdHlsZXNoZWV0J10sXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB2aXN1YWxseSBzaG93IHRoZSBhbW91bnQgb2YgZGVsdGEgdXBkYXRlcyBwZXIgc2Vjb25kIHVzaW5nIHRoaXMgY29uZmlnLlxuICAgICAqIEl0IGV4cGVjdHMgYSBkb20gbm9kZSB3aXRoIHRoZSBpZCBcIm5lby1kZWx0YS11cGRhdGVzXCIgYXMgdGhlIHJlbmRlcmluZyB0YXJnZXQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVuZGVyQ291bnREZWx0YXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgcmVuZGVyQ291bnREZWx0YXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIElmIGNvbmZpZy51c2VDc3NWYXJzID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3Igc3RhbmRhbG9uZSBTaWVzdGEgbW9kdWxlIHRlc3RzID0+IHByZXZlbnQgcmVnaXN0ZXJSZW1vdGUgd29ya2VyIG1lc3NhZ2VzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudW5pdFRlc3RNb2RlXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVuaXRUZXN0TW9kZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiBDU1MgdmFyaWFibGUgYmFzZWQgc3R5bGVzaGVldHMgYXJlIGluIHVzZSAoaW1wb3J0YW50IGZvciBzd2l0Y2hpbmcgdGhlbWVzKVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ3NzVmFyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VDc3NWYXJzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEludGVuZGVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIHdoZXJlIHdlIG5lZWQgYW4gZWFzeSB3YXkgdG8gYWRkIEdBIHRvIGV2ZXJ5IGdlbmVyYXRlZCBhcHBcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkcyBnbG9iYWwgZG9tIGV2ZW50IGxpc3RlbmVycyBmb3IgbW9iaWxlIHJlbGF0ZWQgZXZlbnRzIGxpa2Ugcm90YXRlLCBzd2lwZSwgdGFwXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUb3VjaEV2ZW50c1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VUb3VjaEV2ZW50czogdHJ1ZVxufTtcblxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHJlc291cmNlc1BhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1yZXNvdXJjZXMvYCxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHdvcmtlckJhc2VQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9c3JjL3dvcmtlci9gLFxufSk7XG5cbmV4cG9ydCB7RGVmYXVsdENvbmZpZyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxuICogQG1vZHVsZSBOZW9cbiAqIEBzaW5nbGV0b25cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCBhcyBjcmVhdGVTdHlsZU9iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0FycmF5ICAgICAgICAgICBhcyBpc0FycmF5XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNOdW1iZXIgICAgICAgICAgYXMgaXNOdW1iZXJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwudG9BcnJheSAgICAgICAgICAgYXMgdG9BcnJheVxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcbiAqL1xubGV0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuXG5OZW8gPSBzZWxmLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGFwcGx5Q2xhc3NDb25maWcoY2xzKSB7XG4gICAgICAgIGxldCBiYXNlQ2ZnICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIGJhc2VTdGF0aWNDZmcgPSBudWxsLFxuICAgICAgICAgICAgcHJvdG8gICAgICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxuICAgICAgICAgICAgcHJvdG9zICAgICAgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnLCBjdG9yLCBzdGF0aWNDb25maWc7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcbiAgICAgICAgICAgICAgICBiYXNlQ2ZnICAgICAgID0gTmVvLmNsb25lKGN0b3IuY29uZmlnLCAgICAgICB0cnVlKTtcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgICAgICAgPSBiYXNlQ2ZnICAgICAgID8gYmFzZUNmZyAgICAgICA6IHt9O1xuICAgICAgICBzdGF0aWNDb25maWcgPSBiYXNlU3RhdGljQ2ZnID8gYmFzZVN0YXRpY0NmZyA6IHt9O1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBsZXQgY2ZnICAgICAgID0gY3Rvci5nZXRDb25maWcgICAgICAgJiYgY3Rvci5nZXRDb25maWcoKSAgICAgICB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZyAmJiBzdGF0aWNDZmcub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgZmFsc2UsIGN0b3IucHJvdG90eXBlLm1peGlucykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2ZnLm9ic2VydmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgICAqICAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgICogICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fCp9IG9ialxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9IGVsc2UgaWYob2JqLmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IERhdGUob2JqLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBNYXAob2JqKTsgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSAhZGVlcCA/IHZhbHVlIDogTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkICE9PSBjbGFzc05hbWUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSA/IGNvbmZpZy5jbGFzc05hbWUgOiBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5vbkFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuXG4gICAgZW1wdHlGbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBzZWxmLk5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5idXR0b24uQmFzZSA9IHNlbGYuTmVvLmJ1dHRvbi5CYXNlIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5idXR0b24uQmFzZTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzIFRoZSBjbGFzcyBuYW1lIHN0cmluZyBjb250YWluaW5nIGRvdHMgb3IgYW4gQXJyYXkgb2YgdGhlIHN0cmluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnMobmFtZXMsIGNyZWF0ZSwgc2NvcGUpIHtcbiAgICAgICAgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5hbWVzKSA/IG5hbWVzIDogbmFtZXMuc3BsaXQoJy4nKTtcblxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JlYXRlICYmICFwcmV2W2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUgfHwgc2VsZik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSgnYnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoe1xuICAgICAqICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cbiAgICAgKiBAc2VlIHtAbGluayBtb2R1bGU6TmVvLmNyZWF0ZSBjcmVhdGV9XG4gICAgICovXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xuICAgICAgICBpZiAodHlwZW9mIG50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uZmlnID0gbnR5cGU7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpO1xuICAgIH1cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnLFxuICAgICdyZWdpc3RlclRvR2xvYmFsTnMnXG5dO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gbWl4aW5zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhcHBseU1peGlucyhjbHMsIG1peGlucykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xuICAgIH1cblxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxuICAgICAgICBsZW4gICAgICAgICAgPSBtaXhpbnMubGVuZ3RoLFxuICAgICAgICBtaXhpbkNsYXNzZXMgPSB7fSxcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xuXG4gICAgZm9yICg7aSA8IGxlbjtpKyspIHtcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XG5cbiAgICAgICAgaWYgKG1peGluLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluUHJvdG8uY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbkNscy5wcm90b3R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZShtaXhSZWR1Y2UobWl4aW5DbHMpLCBtaXhpbkNsYXNzZXMpO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XG4gICAgfVxuXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkpIHtcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gJ2JlZm9yZUdldCcgKyBOZW8uY2FwaXRhbGl6ZShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBtZVtjb25maWdTeW1ib2xdLmhhc093blByb3BlcnR5KGtleSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgID0gaGFzTmV3S2V5ID8gbmV3S2V5IDogbWVbJ18nICsga2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc05ld0tleSkge1xuICAgICAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7IC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgc2V0dGVyID0+IGJlZm9yZVNldCwgYWZ0ZXJTZXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVsnXycgKyBrZXldOyAvLyByZXR1cm4gdGhlIHZhbHVlIHBhcnNlZCBieSB0aGUgc2V0dGVyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgdUtleSAgICAgID0gTmVvLmNhcGl0YWxpemUoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYWZ0ZXJTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0odmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgTmVvW2dldFNldENhY2hlXVtrZXldKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgIH0sIHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgb2YgYSBjb25maWcgaGFzIGNoYW5nZWRcbiAqIHRvZG86IHdlIGNvdWxkIGNvbXBhcmUgb2JqZWN0cyAmIGFycmF5cyBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWUudmFsdWVPZigpICE9PSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2xkVmFsdWUgIT09IHZhbHVlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIHByb3BlcnR5IGtleSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICBsZXQgZGVzY3JpcHRvcjtcblxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXG4gICAgICAgICAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUgKyAnLCAnICtcbiAgICAgICAgICAgICAgICBwcm90b1trZXldLl9mcm9tICsgJykgPT4gJyArXG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1peGluQ2xzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcbiAgICByZXR1cm4gKHByZXYsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xuICAgIH07XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IFhockNvbm5lY3Rpb24gZnJvbSAnLi9kYXRhL2Nvbm5lY3Rpb24vWGhyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5YaHJcbiAqIEBleHRlbmRzIE5lby5kYXRhLmNvbm5lY3Rpb24uWGhyXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFhociBleHRlbmRzIFhockNvbm5lY3Rpb24ge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uWGhyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uWGhyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3hocidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd4aHInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDpbJ3Byb21pc2VSZXF1ZXN0JywncHJvbWlzZUpzb24nXX1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAncHJvbWlzZUpzb24nLFxuICAgICAgICAgICAgICAgICdwcm9taXNlUmVxdWVzdCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFhocik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoWGhyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEZpbHRlciAgICAgZnJvbSAnLi9GaWx0ZXIubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgU29ydGVyICAgICBmcm9tICcuL1NvcnRlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcblxuY29uc3QgY291bnRNdXRhdGlvbnMgICA9IFN5bWJvbCgnY291bnRNdXRhdGlvbnMnKSxcbiAgICAgIGlzRmlsdGVyZWQgICAgICAgPSBTeW1ib2woJ2lzRmlsdGVyZWQnKSxcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXG4gICAgICBzaWxlbnRVcGRhdGVNb2RlID0gU3ltYm9sKCdzaWxlbnRVcGRhdGVNb2RlJyksXG4gICAgICB0b0FkZEFycmF5ICAgICAgID0gU3ltYm9sKCd0b0FkZEFycmF5JyksXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXG4gICAgICB1cGRhdGluZ0luZGV4ICAgID0gU3ltYm9sKCd1cGRhdGluZ0luZGV4Jyk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb2xsZWN0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBmaWx0ZXJpbmcgdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lLCBhbGxJdGVtcyB3aWxsIGJlY29tZSBhIG5ldyBjb2xsZWN0aW9uIGZvciB0aGUgdW5maWx0ZXJlZFxuICAgICAgICAgKiBzdGF0ZSwgdXNpbmcgdGhpcyBpZCBhcyB0aGUgc291cmNlQ29sbGVjdGlvbklkXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb2xsZWN0aW9uLkJhc2V8bnVsbH0gYWxsSXRlbXNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYWxsSXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1NvcnRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlICdwcmltaXRpdmUnIGZvciBkZWZhdWx0IGZpbHRlcnMsIHVzZSAnYWR2YW5jZWQnIGZvciBmaWx0ZXJzIHVzaW5nIGEgZmlsdGVyQnkgbWV0aG9kXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNb2RlPSdwcmltaXRpdmUnXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuRmlsdGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc189W11cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgY29udGFpbmluZyB0aGUga2V5ICYgcmVmZXJlbmNlIG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXBfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgZGlyZWN0aW9ucyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydERpcmVjdGlvbnM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0RGlyZWN0aW9uczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVybmFsIEFycmF5IG9mIHRoZSBzb3J0IHByb3BlcnRpZXMgZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnRQcm9wZXJ0aWVzPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc29ydFByb3BlcnRpZXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBBcnJheSBjb250YWluaW5nIE5lby51dGlsLlNvcnRlciBjb25maWcgb2JqZWN0cyBvciBpbnN0YW5jZXNcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnRlcnNfPVtdXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0ZXJzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgYW5vdGhlciBjb2xsZWN0aW9uIGluc3RhbmNlIHRvIHVzZSBhcyB0aGlzIGRhdGEgc291cmNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzb3VyY2VJZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlSWRfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3ltYm9sQ29uZmlnID0ge2VudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb3VudE11dGF0aW9uc10gIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtpc0ZpbHRlcmVkXSAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtpc1NvcnRlZF0gICAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtzaWxlbnRVcGRhdGVNb2RlXTogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFt0b0FkZEFycmF5XSAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IFtdfSxcbiAgICAgICAgICAgIFt0b1JlbW92ZUFycmF5XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IFtdfSxcbiAgICAgICAgICAgIFt1cGRhdGluZ0luZGV4XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IDB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIG51bGwsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLm9uKCdjaGFuZ2UnLCBtZS5vbkZpbHRlckNoYW5nZSwgbWUpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SXRlbXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSA9IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgIG1lLm1hcC5zZXQoaXRlbVtrZXlQcm9wZXJ0eV0sIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hcHBseVNvcnRlckNvbmZpZ3MoKTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKHNvcnRlciA9PiB7XG4gICAgICAgICAgICBpZiAoc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzb3J0ZXIub24oJ2NoYW5nZScsIG1lLm9uU29ydGVyQ2hhbmdlLCBtZSk7XG4gICAgICAgICAgICAgICAgc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAmJiBtZS5hdXRvU29ydCkge1xuICAgICAgICAgICAgbWUuZG9Tb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U291cmNlSWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IFsuLi5zb3VyY2UuX2l0ZW1zXTtcbiAgICAgICAgICAgIG1lLm1hcCAgICA9IG5ldyBNYXAoc291cmNlLm1hcCk7IC8vIGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgbWFwXG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyc0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG1lLm9uTXV0YXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXJTZXRTb3VyY2VJZCcsIHNvdXJjZSk7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQob2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS51bihsaXN0ZW5lcnNDb25maWcpOyAvLyB0b2RvOiBjb3JlLk9ic2VydmFibGUudW4gbmVlZHMgdG8gc3VwcG9ydCB0aGlzIHN5bnRheFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5U29ydGVyQ29uZmlncygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICBtZS5zb3J0UHJvcGVydGllcyA9IFtdO1xuXG4gICAgICAgIG1lLnNvcnRlcnMuZm9yRWFjaChzb3J0ZXIgPT4gey8vY29uc29sZS5sb2coJ2ZvckVhY2gnLCBzb3J0ZXIpO1xuICAgICAgICAgICAgbWUuc29ydERpcmVjdGlvbnMucHVzaChzb3J0ZXIuZGlyZWN0aW9uTXVsdGlwbGllcik7XG4gICAgICAgICAgICBtZS5zb3J0UHJvcGVydGllcy5wdXNoKHNvcnRlci5wcm9wZXJ0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBrZXkub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGtleS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDoga2V5LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnZhbHVlICAgID09PSBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoRmlsdGVyLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0TWFwKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gIXZhbHVlID8gbmV3IE1hcCgpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNvcnRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBbdmFsdWVdIDogW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVuID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGkgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBrZXkuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDoga2V5LnByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWVbaV0ucHJvcGVydHkgPT09IGtleS5wcm9wZXJ0eSAmJiBvbGRWYWx1ZVtpXS5kaXJlY3Rpb24gPT09IGtleS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShTb3J0ZXIsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAga2V5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY2FjaGVVcGRhdGUob3B0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVVcGRhdGUnLCBvcHRzLCB0aGlzW3RvQWRkQXJyYXldKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSA9IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgaW5kZXgsIHRvQWRkTWFwLCB0b1JlbW92ZU1hcDtcblxuICAgICAgICBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICB0b0FkZE1hcCAgICA9IG1lW3RvQWRkQXJyYXldICAgLm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcbiAgICAgICAgICAgIHRvUmVtb3ZlTWFwID0gbWVbdG9SZW1vdmVBcnJheV0ubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgICAgICBvcHRzLmFkZGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9BZGRNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG9wdHMucmVtb3ZlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID0gdG9BZGRNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuX2l0ZW1zLnNwbGljZSgwLCBtZS5nZXRDb3VudCgpKTtcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IGZpbHRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsRmlsdGVycz1mYWxzZV1cbiAgICAgKi9cbiAgICBjbGVhckZpbHRlcnMocmVzdG9yZU9yaWdpbmFsRmlsdGVycykge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSByZXN0b3JlT3JpZ2luYWxGaWx0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuZmlsdGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBzb3J0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxuICAgICAqIFdpdGhvdXQgcmVzdG9yZUluaXRpYWxTdGF0ZSBhcyB0cnVlIHRoaXMgd2lsbCBub3QgYWZmZWN0IHRoZSBjdXJyZW50IHNvcnRpbmcgb2YgdGhpcyBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbFNvcnRlcnM9ZmFsc2VdXG4gICAgICovXG4gICAgY2xlYXJTb3J0ZXJzKHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMpIHtcbiAgICAgICAgdGhpcy5zb3J0ZXJzID0gcmVzdG9yZU9yaWdpbmFsU29ydGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLnNvcnRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBUaGUgY2xvbmVkIGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnICA9IE5lby5jbG9uZShtZS5vcmlnaW5hbENvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICBmaWx0ZXJzID0gbWUuX2ZpbHRlcnMgfHwgW10sXG4gICAgICAgICAgICBzb3J0ZXJzID0gbWUuX3NvcnRlcnMgfHwgW107XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5maWx0ZXJzO1xuICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1zO1xuICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgaWYgKG1lLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbLi4ubWUuX2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzID0gW107XG4gICAgICAgIGNvbmZpZy5zb3J0ZXJzID0gW107XG5cbiAgICAgICAgLy8gdG9kbzogZmlsdGVycyAmIHNvcnRlcnMgc2hvdWxkIHB1c2ggdGhlaXIgY3VycmVudCBzdGF0ZSBhbmQgbm90IHRoZSBvcmlnaW5hbCBvbmVcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25maWcuZmlsdGVycy5wdXNoKGZpbHRlci5vcmlnaW5hbENvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvcnRlcnMuZm9yRWFjaChmdW5jdGlvbihzb3J0ZXIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zb3J0ZXJzLnB1c2goc29ydGVyLm9yaWdpbmFsQ29uZmlnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoQmFzZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIG1hcCAmIGl0ZW1zIGFycmF5IGJlZm9yZSB0aGUgc3VwZXIgY2FsbFxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXRlbXMuc3BsaWNlKDAsIG1lLl9pdGVtcy5sZW5ndGgpO1xuICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRvU29ydCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgICAgPSBtZS5zb3J0ZXJzLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbnMgICAgPSBtZS5zb3J0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgIHNvcnRQcm9wZXJ0aWVzICAgID0gbWUuc29ydFByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb3VudFNvcnRlcnMgICAgICA9IHNvcnRQcm9wZXJ0aWVzLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gZmFsc2UsXG4gICAgICAgICAgICBpLCBtYXBwZWRJdGVtcywgb2JqLCBzb3J0ZXIsIHNvcnRQcm9wZXJ0eSwgc29ydFZhbHVlO1xuXG4gICAgICAgIGlmIChjb3VudFNvcnRlcnMgPiAwKSB7XG4gICAgICAgICAgICBzb3J0ZXJzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkudXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzU29ydEJ5TWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRlcltzb3J0ZXIuc29ydEJ5ID8gJ3NvcnRCeScgOiAnZGVmYXVsdFNvcnRCeSddKGEsIGIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge2luZGV4OiBpbmRleH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3NvcnRQcm9wZXJ0aWVzW2ldXSA9IHNvcnRlcnNbaV0udHJhbnNmb3JtVmFsdWUoaXRlbVtzb3J0UHJvcGVydGllc1tpXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcbiAgICAgKiB5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoaXMgY2FsbC5cbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI3N0YXJ0VXBkYXRlIHN0YXJ0VXBkYXRlfVxuICAgICAqL1xuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XG4gICAgICAgICAgICBtZVt1cGRhdGluZ0luZGV4XS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBtZVt0b0FkZEFycmF5XSxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XG4gICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoMCwgbWVbdG9SZW1vdmVBcnJheV0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmaWx0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICAgICAgID0gbWUuX2ZpbHRlcnMsXG4gICAgICAgICAgICBjb3VudEFsbEZpbHRlcnMgPSBmaWx0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvdW50RmlsdGVycyAgICA9IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgPSBtZS5hbGxJdGVtcyAmJiBtZS5hbGxJdGVtcy5faXRlbXMgfHwgbWUuX2l0ZW1zLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50SXRlbXMgICAgICA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnLCBpc0luY2x1ZGVkLCBpdGVtLCBqLCB0bXBJdGVtcztcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50QWxsRmlsdGVyczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb3VudEZpbHRlcnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudEZpbHRlcnMgPT09IDAgJiYgbWUuYWxsSXRlbXMpIHtcbiAgICAgICAgICAgIG1lLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zID0gWy4uLm1lLmFsbEl0ZW1zLl9pdGVtc107XG4gICAgICAgICAgICBtZS5tYXAuc2V0KC4uLm1lLmFsbEl0ZW1zLm1hcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gey4uLm1lLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1zO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcblxuICAgICAgICAgICAgICAgIG1lLmFsbEl0ZW1zID0gTmVvLmNyZWF0ZShCYXNlLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLk5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkICAgOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoaWxkIGNvbGxlY3Rpb24nLCBtZS5hbGxJdGVtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTW9kZSA9PT0gJ3ByaW1pdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBmb3IgbG9vcHMgb24gcHVycG9zZSAtPiBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gICAgICAgPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaiAgICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcnNbal0uaXNGaWx0ZXJlZChpdGVtLCBpdGVtcywgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm1hcC5zZXQoaXRlbVttZS5rZXlQcm9wZXJ0eV0sIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zID0gZmlsdGVyZWRJdGVtczsgLy8gc2lsZW50IHVwZGF0ZSwgdGhlIG1hcCBpcyBhbHJlYWR5IGluIHBsYWNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBbLi4uaXRlbXNdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyc1tqXS5pc0ZpbHRlcmVkKGZpbHRlcmVkSXRlbXNbaV0sIGZpbHRlcmVkSXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEl0ZW1zLnB1c2goZmlsdGVyZWRJdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLnRtcEl0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtcyAgICA9IGZpbHRlcmVkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLml0ZW1zID0gZmlsdGVyZWRJdGVtczsgLy8gdXBkYXRlIHRoZSBtYXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lW2lzRmlsdGVyZWRdID0gY291bnRGaWx0ZXJzICE9PSAwO1xuXG4gICAgICAgIG1lLmZpcmUoJ2ZpbHRlcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGl0ZW1zIHdoaWNoIG1hdGNoIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbiBlbXB0eSBBcnJheSBpbiBjYXNlIG5vIGl0ZW1zIGFyZSBmb3VuZFxuICAgICAqL1xuICAgIGZpbmQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGlzT2JqZWN0UHJvcGVydHkgPSBOZW8uaXNPYmplY3QocHJvcGVydHkpLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSwgcHJvcGVydGllc0FycmF5LCBwcm9wZXJ0aWVzTGVuZ3RoO1xuXG4gICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMocHJvcGVydHkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0xlbmd0aCA9IHByb3BlcnRpZXNBcnJheS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gcHJvcGVydGllc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1bcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBmb3Igd2hpY2ggdGhlIHBhc3NlZCBmdW5jdGlvbiByZXR1cm5zIHRydWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIGl0ZW0gaW5zaWRlIHRoZSBzdGFydC1lbmQgcmFuZ2UuIFJldHVybiB0cnVlIGZvciBhIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmbi5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGU9dGhpc10gVGhlIHNjb3BlIGluIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gZ2V0cyBleGVjdXRlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9dGhpcy5nZXRDb3VudCgpXSBUaGUgZW5kIGluZGV4ICh1cCB0bywgbGFzdCB2YWx1ZSBleGNsdWRlZClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kQnkoZm4sIHNjb3BlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IFtdLFxuICAgICAgICAgICAgaSAgICAgPSBzdGFydCB8fCAwLFxuICAgICAgICAgICAgbGVuICAgPSBlbmQgICB8fCBtZS5nZXRDb3VudCgpO1xuXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgbWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZuLmNhbGwoc2NvcGUsIG1lLml0ZW1zW2ldKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobWUuaXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW5zaWRlIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NvdW50TXV0YXRpb25zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRjaGluZyBmaWx0ZXIgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uRmlsdGVyfG51bGx9XG4gICAgICovXG4gICAgZ2V0RmlsdGVyKHByb3BlcnR5KSB7XG4gICAgICAgIGxldCBmaWx0ZXJzID0gdGhpcy5maWx0ZXJzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgID0gZmlsdGVycy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0ucHJvcGVydHkgPT09IHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgZm9yIGEgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0S2V5QXQoaW5kZXgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiBpdGVtICYmIGl0ZW1bdGhpcy5rZXlQcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgY29weSBvZiBhIHBvcnRpb24gb2YgdGhlIGl0ZW1zIGFycmF5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gWmVyby1iYXNlZCBpbmRleCBhdCB3aGljaCB0byBiZWdpbiBleHRyYWN0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kXSBaZXJvLWJhc2VkIGluZGV4IGJlZm9yZSB3aGljaCB0byBlbmQgZXh0cmFjdGlvbiAoZXh0cmFjdHMgdXAgdG8gYnV0IG5vdCBpbmNsdWRpbmcgZW5kKS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc2xpY2VcbiAgICAgKi9cbiAgICBnZXRSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBTb3VyY2UgQ29sbGVjdGlvbiBpbiBjYXNlIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWQgY29uZmlnIHdhcyBzZXRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZXx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0U291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VJZCAmJiBOZW8uZ2V0KHRoaXMuc291cmNlSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gYXNzZXJ0aW5nIHdoZXRoZXIgYSB2YWx1ZSBoYXMgYmVlbiBhc3NvY2lhdGVkIHRvIHRoZSBrZXkgaW4gdGhlIENvbGxlY3Rpb24gb3Igbm90XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhbiBpdGVtIGV4aXN0cyBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc0l0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGl0ZW1bdGhpcy5rZXlQcm9wZXJ0eV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGtleSBvciBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0ga2V5XG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoVXRpbC5pc09iamVjdChrZXkpID8ga2V5IDogdGhpcy5tYXAuZ2V0KGtleSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2ZJdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZih0aGlzLm1hcC5nZXQoa2V5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFuIGFycmF5IG9mIGl0ZW1zIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgaW5zZXJ0KGluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbGxlY3Rpb24gaXMgZmlsdGVyZWRcbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpc0ZpbHRlcmVkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBpc0ZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0uaXNGaWx0ZXJlZChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZFxuICAgICAqL1xuICAgIGlzU29ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpc1NvcnRlZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RoaXMuZ2V0Q291bnQoKSAtMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZpbHRlckNoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbk11dGF0ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9wdHMucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICBtZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3BsaWNlKG51bGwsIG9wdHMucmVtb3ZlZEl0ZW1zLCBvcHRzLmFkZGVkSXRlbXMpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbk11dGF0ZScsIG1lLmdldENvdW50KCksIG1lLmlkLCBvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU29ydGVyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5hcHBseVNvcnRlckNvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcHVzaChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2l2ZW4ga2V5LCBpdGVtIG9yIEFycmF5IGNvbnRhaW5pbmcga2V5c3xpdGVtc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogSW50ZW5kZWQgZm9yIGNvbGxlY3Rpb25zIHdpdGhvdXQgc29ydGVycy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBzaGlmdCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5hZGRlZEl0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gdGVzdCBmb3IgZWFjaCBpdGVtLCB0YWtpbmcgdGhyZWUgcGFyYW1ldGVyczpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjYWxsYmFjay5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIFtjYWxsYmFjay5pbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gICBbY2FsbGJhY2suaXRlbXNdIFRoZSBpdGVtcyBhcnJheSBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gVmFsdWUgdG8gdXNlIGFzIFwidGhpc1wiIHdoZW4gZXhlY3V0aW5nIHRoZSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIGZvciBhbnkgY29sbGVjdGlvbiBpdGVtLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBzb21lKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNvbWUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBpdGVtcyBmcm9tIGFuZC9vciBhZGRzIGl0ZW1zIHRvIHRoaXMgY29sbGVjdGlvblxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxuICAgICAqIElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHRvQWRkQXJyYXkgaXMgYXBwZW5kZWQgdG8gdGhlIENvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcnxBcnJheX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxuICAgICAqIEBwYXJhbSB7QXJyYXl8IE9iamVjdH0gW3RvQWRkQXJyYXldXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXG4gICAgICovXG4gICAgc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSwgdG9BZGRBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxuICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIG1hcCAgICAgICAgICAgICAgICA9IG1lLm1hcCxcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICB0b1JlbW92ZUFycmF5ICAgICAgPSBBcnJheS5pc0FycmF5KHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcbiAgICAgICAgICAgIGksIGl0ZW0sIGtleSwgbGVuLCB0b0FkZE1hcDtcblxuICAgICAgICBpZiAoIWluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XG5cbiAgICAgICAgaWYgKHRvUmVtb3ZlQXJyYXkgJiYgKGxlbiA9IHRvUmVtb3ZlQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9SZW1vdmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBVdGlsLmlzT2JqZWN0KGl0ZW0pID8gaXRlbVtrZXlQcm9wZXJ0eV0gOiBpdGVtO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkgJiYgIW1lLmlzRmlsdGVyZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldChrZXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShVdGlsLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbWUucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdXJjZSBzcGxpY2UnLCBzb3VyY2UuaWQsICdhZGRlZDonLCAuLi50b0FkZEFycmF5LCAncmVtb3ZlZDonLCAuLi5yZW1vdmVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UobnVsbCwgdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXMsIHRvQWRkQXJyYXkpO1xuICAgICAgICAgICAgICAgIG1lLmVuZFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5wcmV2ZW50QnViYmxlVXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwIHx8IHJlbW92ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgOiB0b0FkZEFycmF5LFxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgIDogdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtczogcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRlZEl0ZW1zICA6IGFkZGVkSXRlbXMsXG4gICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSBjb2xsZWN0aW9uIGZyb20gZmlyaW5nIGV2ZW50cyB1bnRpbCBlbmRVcGRhdGUgZ2V0cyBjYWxsZWQuXG4gICAgICogSWYgeW91IHN0YXJ0IGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtLFxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXG4gICAgICogKHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhlIGVuZFVwZGF0ZSBjYWxsIGluIGNhc2UgeW91IHVzZWRcbiAgICAgKiBzdGFydFNpbGVudFVwZGF0ZU1vZGUgaGVyZSlcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNlbmRVcGRhdGUgZW5kVXBkYXRlfVxuICAgICAqL1xuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBpZiAoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzW3NpbGVudFVwZGF0ZU1vZGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdXBkYXRpbmdJbmRleF0rKztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgdW5zaGlmdChpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgbXV0YXRlIGV2ZW50IGZpcmVzIGFmdGVyIGV2ZXJ5IHNwbGljZSBjYWxsIChpbnZva2VkIGJ5IGFsbCBtZXRob2RzIHdoaWNoIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgaXRlbXMgYXJyYXkpLlxuICogQGV2ZW50IG11dGF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gYWRkZWRJdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBwcmV2ZW50QnViYmxlVXAgcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkZpbHRlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIG9wZXJhdG9yIGNvbmZpZzo8YnI+XG4gICAgICAgICAqIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLCAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb3BlcmF0b3JzOiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkZpbHRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uRmlsdGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGluZyBkaXNhYmxlZCB0byB0cnVlIHdpbGwgZXhjbHVkZSB0aGlzIGZpbHRlciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZpbHRlcmluZyBsb2dpY1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gZmlsdGVyQnlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgbWVhbnMgbm90IGZpbHRlcmluZyBvdXQgaXRlbXMgaW4gY2FzZSB0aGUgdmFsdWUgaXMgJycsIG51bGwsIFtdIG9yIHt9XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBpbmNsdWRlRW1wdHlWYWx1ZXM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBmbGFnIHRvIHRydWUgYmVmb3JlIHN0YXJ0aW5nIGJ1bGsgdXBkYXRlcyAoZS5nLiBjaGFuZ2luZyBwcm9wZXJ0eSAmIHZhbHVlKVxuICAgICAgICAgKiB0byBwcmV2ZW50IG11bHRpcGxlIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNVcGRhdGluZ189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGlzVXBkYXRpbmdfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvd25lciB1dGlsLkNvbGxlY3Rpb24gbmVlZHMgdG8gYXBwbHkgYW4gb25DaGFuZ2UgbGlzdGVuZXIgb25jZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcGVyYXRvciB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgICAgICpcbiAgICAgICAgICogPT0gKG5vdCByZWNvbW1lbmRlZClcbiAgICAgICAgICogPT09XG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqICE9PVxuICAgICAgICAgKiA8XG4gICAgICAgICAqID49XG4gICAgICAgICAqID5cbiAgICAgICAgICogPj1cbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxuICAgICAgICAgKiBpbmNsdWRlZCAoZXhwZWN0cyB2YWx1ZSB0byBiZSBhbiBhcnJheSlcbiAgICAgICAgICogZXhjbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yXzogJz09PScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICB9XG5cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZnRlclNldE9wZXJhdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0VmFsdWUoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBiZWZvcmVTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIG9wZXJhdG9yIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRPcGVyYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ29wZXJhdG9yJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBmaXJlQ2hhbmdlRXZlbnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbWUuaXNVcGRhdGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBtZS5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbWUucHJvcGVydHksXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNvbGxlY3Rpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRJdGVtcyBJZiB0aGUgY29sbGVjdGlvbiBmaWx0ZXJNb2RlIGlzIG5vdCBwcmltaXRpdmUgY29udGFpbnMgdGhlIGl0ZW1zIHdoaWNoIHBhc3NlZFxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxJdGVtcyBhbGwgY29sbGVjdGlvbiBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlclZhbHVlLCByZWNvcmRWYWx1ZTtcblxuICAgICAgICBpZiAobWUuX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuX2ZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwgaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJWYWx1ZSA9IG1lLl92YWx1ZTtcbiAgICAgICAgcmVjb3JkVmFsdWUgPSBpdGVtW21lLl9wcm9wZXJ0eV07XG5cbiAgICAgICAgaWYgKGZpbHRlclZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiByZWNvcmRWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudmFsdWVPZigpO1xuICAgICAgICAgICAgcmVjb3JkVmFsdWUgPSByZWNvcmRWYWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIUZpbHRlclttZS5fb3BlcmF0b3JdKHJlY29yZFZhbHVlLCBmaWx0ZXJWYWx1ZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGI7fVxuICAgIHN0YXRpYyBbJz09PSddKGEsIGIpIHtyZXR1cm4gYSA9PT0gYjt9XG4gICAgc3RhdGljIFsnIT0nXSAoYSwgYikge3JldHVybiBhICE9IGI7fVxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYjt9XG4gICAgc3RhdGljIFsnPCddICAoYSwgYikge3JldHVybiBhIDwgYjt9XG4gICAgc3RhdGljIFsnPD0nXSAoYSwgYikge3JldHVybiBhIDw9IGI7fVxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGI7fVxuICAgIHN0YXRpYyBbJz49J10gKGEsIGIpIHtyZXR1cm4gYSA+PSBiO31cblxuICAgIHN0YXRpYyBbJ2V4Y2x1ZGVkJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYi5pbmRleE9mKGEpIDwgMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpbmNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA+IC0xO1xuICAgIH1cblxuICAgIHN0YXRpYyBbJ2lzRGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc1VuZGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydsaWtlJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGIudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLlNvcnRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllcjogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzb3J0IGRpcmVjdGlvbiB3aGVuIHVzaW5nIGEgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uXz0nQVNDJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uXzogJ0FTQycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gc29ydCBieS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uLCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSAmIGRpcmVjdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzb3J0Qnk9bnVsbFxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHVzZSB0aGUgdHJhbnNmb3JtVmFsdWUgbWV0aG9kIGZvciBlYWNoIGl0ZW0gKHRoZSBtZXRob2QgY2FuIGdldCBvdmVycmlkZGVuKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VUcmFuc2Zvcm1WYWx1ZT10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU29ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKCkgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIHRvIHRydWUgYWZ0ZXIgdGhlIG9uQ29uc3RydWN0ZWQoKSBjaGFpbiBpcyBkb25lLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0NvbnN0cnVjdGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RydWN0ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIG1peGlucyBhcyBhbiBhcnJheSBvZiBjbGFzc05hbWVzLCBpbXBvcnRlZCBtb2R1bGVzIG9yIGEgbWl4ZWQgdmVyc2lvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGluc3RhbmNlIGJ5IHBhc3NpbmcgYW4gaW1wb3J0ZWQgY2xhc3MgKEpTIG1vZHVsZSBkZWZhdWx0IGV4cG9ydClcbiAgICAgICAgICogQG1lbWJlciB7Q2xhc3N9IG1vZHVsZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZHVsZTogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyB0aGUgc3RhdGljIGdldENvbmZpZygpIG9iamVjdFxuICAgICAqIEFwcGxpZXMgdGhlIG9ic2VydmFibGUgbWl4aW4gaWYgbmVlZGVkLCBncmFudHMgcmVtb3RlIGFjY2VzcyBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5jb25zdHJ1Y3Rvci5jb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykpIHtcbiAgICAgICAgICAgIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0aWNOYW1lKSA/IHN0YXRpY05hbWUgOiB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignU3VwcG9ydGVkIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGFyZTonLCB2YWx1ZXMuam9pbignLCAnKSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKG1lLmdldElkS2V5KCkpO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UucmVnaXN0ZXIobWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFOZW8uaWRNYXApIHtcbiAgICAgICAgICAgICAgICBOZW8uaWRNYXAgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLmlkTWFwW21lLmlkXSA9IG1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgdGhpcyBpbnN0YW5jZSBmcm9tIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbbWUuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1lLCBrZXkpLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgaW5zaWRlIGNyZWF0ZUlkKCkgYXMgdGhlIGRlZmF1bHQgdmFsdWUgcGFzc2VkIHRvIHRoZSBJZEdlbmVyYXRvci5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBhcyBuZWVkZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG4gICAgICAgIHJldHVybiAoa2V5ID8gY2ZnW2tleV0gOiBjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQoKSBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVtb3RlICAgICAgICA9IG1lLnJlbW90ZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5jbGFzc05hbWUsXG4gICAgICAgICAgICBjdXJyZW50V29ya2VyID0gTmVvLmN1cnJlbnRXb3JrZXIsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicgJiYgY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlciAmJiAhY3VycmVudFdvcmtlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIudW4oJ2Nvbm5lY3RlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25BZnRlckNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlzQ29uc3RydWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFdlIGNhbiBvbmx5IGZpcmUgdGhlIGV2ZW50IGluIGNhc2UgdGhlIE9ic2VydmFibGUgbWl4aW4gaXMgaW5jbHVkZWQuXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY29uc3RydWN0ZWQnLCBtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBhbGwgY29uc3RydWN0b3JzIGFyZSBkb25lXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHNldCgpLCBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlIGNhbiBhbHJlYWR5IGJlIGFzc2lnbmVkLFxuICAgICAqIHNvIHRoZSBoYXNPd25Qcm9wZXJ0eSgpIGNoZWNrIHdpbGwgcmV0dXJuIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZUFzc2lnbj1mYWxzZV1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBnb3QgYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKGZvcmNlQXNzaWduIHx8ICFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICA6ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgIDogbWV0aG9kcyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG11bHRpcGxlIGNvbmZpZ3MgYXQgb25jZSwgZW5zdXJpbmcgdGhhdCBhbGwgYWZ0ZXJTZXQgbWV0aG9kcyBnZXQgYWxsIG5ldyBhc3NpZ25lZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdXNpbmc6XG4gICAgICAgIC8vIG1lW2NvbmZpZ1N5bWJvbF0gPSB2YWx1ZXM7XG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcblxuICAgICAgICBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XG5cbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3ModHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGJ5IGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29uZmlnIGV4aXN0cyBhbmQgZ290IGNoYW5nZWRcbiAgICAgKi9cbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc3RhdGljQ29uZmlnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzdGF0aWNDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgaW5zdGFuY2VvZiBtZXRob2QuIFdpdGhvdXQgdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IGZhbHNlYDxicj5cbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2lzSW5zdGFuY2VdID09PSB0cnVlID8gc3VwZXJbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkgOiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5CYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IGZhbHNlO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkxvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsZXZlbDogJ2xvZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzICYmIG1lLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNmZy5pZCA9PT0gZXZlbnRJZCB8fCAoY2ZnLmZuID09PSBsaXN0ZW5lciAmJiBjZmcuc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRHVwbGljYXRlIGV2ZW50IGhhbmRsZXIgYXR0YWNoZWQ6JywgbmFtZSwgbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy51bnNoaWZ0KGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudENvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICBmaXJlKG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnMsXG4gICAgICAgICAgICBldmVudENvbmZpZywgZXZlbnRzLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xuICAgICAgICAgICAgbGVuICAgID0gZXZlbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcgPSBldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBldmVudENvbmZpZy5mbi5hcHBseShldmVudENvbmZpZy5zY29wZSB8fCBtZSwgZXZlbnRDb25maWcuZGF0YSA/IGFyZ3MuY29uY2F0KGV2ZW50Q29uZmlnLmRhdGEpIDogYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgbGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gey4uLmxpc3RlbmVyc307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGxpc3RlbmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaCwgc2NvcGU7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChuYW1lKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4ubmFtZSA9PT0gKE5lby5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSAgID09PSBzY29wZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyByZXN1bWVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSBSZXR1cm5zIGZhbHNlIGZvciBub24gc3RyaW5nIGlucHV0c1xuICAgICAqL1xuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXRpbC5pc1N0cmluZyhzdHJpbmcpICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGlucHV0IGNvbnRhaW5pbmcgdXBwZXJjYXNlIGNoYXJhY3RlcnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gZW1wdHkgQXJyYXksIE9iamVjdCBvciBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbnVtYmVyLiBSZXR1cm5zIGZhbHNlIGZvciBub24tZmluaXRlIG51bWJlcnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbnkgaXRlcmFibGUgKHN0cmluZ3MsIG51bWVyaWMgaW5kaWNlcyBhbmQgYSBsZW5ndGggcHJvcGVydHkpIGludG8gYSB0cnVlIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD1pdGVyYWJsZS5sZW5ndGhdIGVuZCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9BcnJheShpdGVyYWJsZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbGVuO1xuXG4gICAgICAgIGlmICghaXRlcmFibGUgfHwgIShsZW4gPSBpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyB0eXBlT2YoaXRlbSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBpdGVtKSB7XG4gICAgICAgICAgICBjYXNlICdiaWdpbnQnIDogcmV0dXJuICdCaWdJbnQnO1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6IHJldHVybiAnQm9vbGVhbic7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInIDogcmV0dXJuICdOdW1iZXInO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJyA6IHJldHVybiAnU3RyaW5nJztcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCcgOiByZXR1cm4gJ1N5bWJvbCc7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdBcnJheSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGF0ZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdNYXAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnUmVnRXhwJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1NldCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvSW5zdGFuY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdVbmRlZmluZWQnO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XG5cbi8vIGFsaWFzZXNcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICBiaW5kTWV0aG9kcyAgICAgIDogJ2JpbmRNZXRob2RzJyxcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5JyxcbiAgICB0eXBlT2YgICAgICAgICAgIDogJ3R5cGVPZidcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kYXRhLmNvbm5lY3Rpb24uWGhyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFhociBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGF0YS5jb25uZWN0aW9uLlhocidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRhdGEuY29ubmVjdGlvbi5YaHInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0neGhyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3hoci1jb25uZWN0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufSBjYWxsYmFjaz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkZWZhdWx0SGVhZGVycz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0SGVhZGVyczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVxdWVzdHM9e31cbiAgICAgICAgICovXG4gICAgICAgIHJlcXVlc3RzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRpbWVvdXQ9NTAwMFxuICAgICAgICAgKi9cbiAgICAgICAgdGltZW91dDogNTAwMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBXZSBjYW5ub3QgY2xvbmUgZXZlbnQgb2JqZWN0cyBhY3Jvc3MgbWVzc2FnaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgZ2V0UmVzcG9uc2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHlTdGF0ZTogdGFyZ2V0LnJlYWR5U3RhdGUsXG4gICAgICAgICAgICByZXNwb25zZSAgOiB0YXJnZXQucmVzcG9uc2UsXG4gICAgICAgICAgICBzdGF0dXMgICAgOiB0YXJnZXQuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogdGFyZ2V0LnN0YXR1c1RleHQsXG4gICAgICAgICAgICBoZWFkZXJzICAgOiB0YXJnZXQuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25FcnJvcihlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgICAgPSBlLmN1cnJlbnRUYXJnZXQubmVvSWQsXG4gICAgICAgICAgICByZXF1ZXN0ID0gbWUucmVxdWVzdHNbaWRdLFxuICAgICAgICAgICAgY2IgICAgICA9IHJlcXVlc3QuY2FsbGJhY2s7XG5cbiAgICAgICAgY2IgJiYgY2IuYXBwbHkocmVxdWVzdC5zY29wZSB8fCBtZSwgW21lLmdldFJlc3BvbnNlKGUpLCBmYWxzZV0pO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlcXVlc3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdFtrZXldID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIG1lLnJlcXVlc3RzW2lkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25Mb2FkKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICAgICA9IGUuY3VycmVudFRhcmdldC5uZW9JZCxcbiAgICAgICAgICAgIHJlcXVlc3QgPSBtZS5yZXF1ZXN0c1tpZF0sXG4gICAgICAgICAgICBjYiAgICAgID0gcmVxdWVzdC5jYWxsYmFjaztcblxuICAgICAgICBjYiAmJiBjYi5hcHBseShyZXF1ZXN0LnNjb3BlIHx8IG1lLCBbbWUuZ2V0UmVzcG9uc2UoZSksIHRydWVdKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXF1ZXN0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3Rba2V5XSA9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSBtZS5yZXF1ZXN0c1tpZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblByb2dyZXNzKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZUpzb24ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRzLmNhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSwgc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBqc29uO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjoganNvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yICA6IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWUucmVxdWVzdChvcHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZVJlcXVlc3Qob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRzLmNhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSwgc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZS5yZXF1ZXN0KG9wdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0cy5jYWxsYmFja1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5oZWFkZXJzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvcHRzLmluc2lkZU5lbyB0cnVlIGZvciBjYWxscyB3aXRoIHJlbGF0aXZlIFVSTHMgaW5zaWRlIHRoZSBmcmFtZXdvcmsgc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5tZXRob2QgREVMRVRFLCBHRVQsIFBPU1QsIFBVVFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnBhcmFtc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLnJlc3BvbnNlVHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudXJsXG4gICAgICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZXF1ZXN0KG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGVhZGVycyA9IHsuLi5tZS5kZWZhdWx0SGVhZGVycyB8fCB7fSwgLi4ub3B0cy5oZWFkZXJzIHx8IHt9fSxcbiAgICAgICAgICAgIGlkICAgICAgPSBOZW8uZ2V0SWQoJ3hoci1yZXF1ZXN0JyksXG4gICAgICAgICAgICBtZXRob2QgID0gb3B0cy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgICAgICB4aHIgICAgID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgaWYgKCFvcHRzLnVybCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTmVvLlhoci5yZXF1ZXN0IHdpdGhvdXQgYSBnaXZlbiB1cmwnICsgSlNPTi5zdHJpbmdpZnkob3B0cykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFvcHRzLmluc2lkZU5lbyAmJiBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcvbm9kZV9tb2R1bGVzL25lby5tanMvJykgJiYgIWxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2h0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby8nKSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnVybC5zdGFydHNXaXRoKCcuLycpIHx8IG9wdHMudXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMudXJsID0gJy4uLy4uLycgKyBvcHRzLnVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIG9wdHMudXJsICs9ICgnPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKG9wdHMucGFyYW1zKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLm5lb0lkID0gaWQ7XG5cbiAgICAgICAgICAgIG1lLnJlcXVlc3RzW2lkXSA9IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIG9wdHMuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgb3B0cy5jYWxsYmFjayxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogb3B0cy5zY29wZSxcbiAgICAgICAgICAgICAgICB4aHIgICAgIDogeGhyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0cy5yZXNwb25zZVR5cGUgfHwgJ3RleHQnO1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgICAgICA9IG1lLnRpbWVvdXQ7XG5cbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICAgIG1lLm9uRXJyb3IuYmluZChtZSkpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgICAgbWUub25FcnJvci5iaW5kKG1lKSk7XG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICAgICBtZS5vbkxvYWQuYmluZChtZSkpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbWUub25Qcm9ncmVzcy5iaW5kKG1lKSk7XG5cbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgb3B0cy51cmwsIHRydWUpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB4aHIuc2VuZChvcHRzLmRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICAgICAqL1xuICAgIHNlbmRGb3JtKGZvcm0sIG9wdHMpIHtcbiAgICAgICAgb3B0cy5kYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0cyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhYaHIpO1xuXG5leHBvcnQge1hociBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29sbGVjdGlvbkJhc2UgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIG90aGVyIG1hbmFnZXIgY2xhc3Nlc1xuICogQGNsYXNzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbGxlY3Rpb25CYXNle1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UtbWFuYWdlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlLW1hbmFnZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gaWQgJiYgdGhpcy5nZXQoaWQpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZ2V0KGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYW4gaXRlbSB3aXRoIGFuIGFscmVhZHkgZXhpc3RpbmcgaWQnLCBpdGVtLCBtZS5nZXQoaXRlbS5pZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIHRvZG86IGV4Y2VwdCBjcmVhdGVSYW5kb21EYXRhIGEgbGVnYWN5IGNsYXNzLCBzaW5jZSBzdG9yZXMgbGl2ZSBkaXJlY3RseSBpbnNpZGUgdGhlIGFwcCB3b3JrZXJcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5TdG9yZVxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBTdG9yZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5TdG9yZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuU3RvcmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc3RvcmUtbWFuYWdlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzdG9yZS1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGlzdGVuZXJzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbJ2NyZWF0ZVJhbmRvbURhdGEnLCAnZmlsdGVyJywgJ2xvYWQnLCAnc29ydCddfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogWydjcmVhdGVSYW5kb21EYXRhJywgJ2ZpbHRlcicsICdsb2FkJywgJ3NvcnQnXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogRHVtbXkgbWV0aG9kIHVudGlsIHdlIGhhdmUgYSBkYXRhIHBhY2thZ2UgaW4gcGxhY2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYW1vdW50Q29sdW1uc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnRSb3dzXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG9tRGF0YShhbW91bnRDb2x1bW5zLCBhbW91bnRSb3dzKSB7XG4gICAgICAgIGxldCBkYXRhID0gW10sXG4gICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yICg7IGkgPCBhbW91bnRSb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCh7fSk7XG5cbiAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IGFtb3VudENvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2NvbHVtbicgKyBqXSA9ICdDb2x1bW4nICsgKGogKyAxKSArICcgLSAnICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpIC8gMS41KTtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjb2x1bW4nICsgaiArICdzdHlsZSddID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpIC8gMS43KSA+IDAgPyAnYnJvd24nIDogaSUyID8gJyMzYzNmNDEnIDogJyMzMjMyMzInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVJZFxuICAgICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBmaWx0ZXIoc3RvcmVJZCwgZmllbGROYW1lLCB2YWx1ZSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVJZFxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBsb2FkKHN0b3JlSWQsIHBhcmFtcykge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmVJZFxuICAgICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzb3J0KHN0b3JlSWQsIGZpZWxkTmFtZSwgdmFsdWUpIHtcblxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3RvcmUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFN0b3JlKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgZnJvbSAnLi9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nd29ya2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3dvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0Nvbm5lY3RlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1NoYXJlZFdvcmtlcj1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc1NoYXJlZFdvcmtlcjogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gcG9ydHM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcG9ydHMgOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHdvcmtlcklkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBpc1NoYXJlZFdvcmtlcjogc2VsZi50b1N0cmluZygpID09PSAnW29iamVjdCBTaGFyZWRXb3JrZXJHbG9iYWxTY29wZV0nLFxuICAgICAgICAgICAgcG9ydHMgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgcHJvbWlzZXMgICAgICA6IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgc2VsZi5vbmNvbm5lY3QgPSBtZS5vbkNvbm5lY3RlZC5iaW5kKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlcklkICAgICAgPSBtZS53b3JrZXJJZDtcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGdldFBvcnQob3B0cykge1xuICAgICAgICBsZXQgcmV0dXJuUG9ydCA9IG51bGwsXG4gICAgICAgICAgICBoYXNNYXRjaDtcblxuICAgICAgICB0aGlzLnBvcnRzLmZvckVhY2gocG9ydCA9PiB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcG9ydFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVyblBvcnQgPSBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuUG9ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbm5lY3QoZGF0YSkge1xuICAgICAgICAvLyBzaG9ydCBkZWxheSB0byBlbnN1cmUgYXBwIFZDcyBhcmUgaW4gcGxhY2VcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ2Nvbm5lY3QnLCB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogZGF0YS5hcHBOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uQ29ubmVjdGVkKGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGlkID0gTmVvLmdldElkKCdwb3J0Jyk7XG5cbiAgICAgICAgbWUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIG1lLnBvcnRzLnB1c2goe1xuICAgICAgICAgICAgYXBwTmFtZTogbnVsbCxcbiAgICAgICAgICAgIGlkICAgICA6IGlkLFxuICAgICAgICAgICAgcG9ydCAgIDogZS5wb3J0c1swXVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5wb3J0c1ttZS5wb3J0cy5sZW5ndGggLSAxXS5wb3J0Lm9ubWVzc2FnZSA9IG1lLm9uTWVzc2FnZS5iaW5kKG1lKTtcblxuICAgICAgICAvLyBjb3JlLkJhc2U6IGluaXRSZW1vdGUoKSBzdWJzY3JpYmVzIHRvIHRoaXMgZXZlbnQgZm9yIHRoZSBTaGFyZWRXb3JrZXJzIGNvbnRleHRcbiAgICAgICAgbWUuZmlyZSgnY29ubmVjdGVkJyk7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UoJ21haW4nLCB7YWN0aW9uOiAnd29ya2VyQ29uc3RydWN0ZWQnLCBwb3J0OiBpZH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgnbWFpbicsIHthY3Rpb246ICd3b3JrZXJDb25zdHJ1Y3RlZCd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGlzY29ubmVjdChkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZSgnZGlzY29ubmVjdCcsIHtcbiAgICAgICAgICAgIGFwcE5hbWU6IGRhdGEuYXBwTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25NZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcbiAgICAgICAgICAgIHJlcGx5SWQgPSBkYXRhLnJlcGx5SWQsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIG1lWydvbicgKyBOZW8uY2FwaXRhbGl6ZShhY3Rpb24pXShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7XG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcblxuICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge1xuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBtZXNzYWdlLCBwb3J0LCBwb3J0T2JqZWN0O1xuXG4gICAgICAgIGlmICghbWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIHBvcnQgPSBzZWxmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdHMucG9ydCkge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5nZXRQb3J0KHtpZDogb3B0cy5wb3J0fSkucG9ydDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy5hcHBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9ydE9iamVjdCA9IG1lLmdldFBvcnQoe2FwcE5hbWU6IG9wdHMuYXBwTmFtZX0pO1xuICAgICAgICAgICAgICAgIHBvcnQgICAgICAgPSBwb3J0T2JqZWN0LnBvcnQ7XG5cbiAgICAgICAgICAgICAgICBvcHRzLnBvcnQgPSBwb3J0T2JqZWN0LmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gbWUucG9ydHNbMF0ucG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlc3RpbmF0aW9uPSdtYWluJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcbiAgICAgICAgY29uZmlnLmlkICAgICAgICAgID0gY29uZmlnLmlkICAgICAgICAgIHx8IElkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZCk7XG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIH1cbn1cblxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xuXG5leHBvcnQge01lc3NhZ2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgICAgOiAncmVtb3RlTWV0aG9kJyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmFwcE5hbWUgPSBvcHRzLmFwcE5hbWUgfHwgZGF0YSAmJiBkYXRhLmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gb3B0cy5wb3J0ICAgIHx8IGRhdGEgJiYgZGF0YS5wb3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBleGlzdHMgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcbiAgICAgICAgICAgICAgICBwa2cgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUub3JpZ2luICE9PSAnbWFpbicgJiYgcGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcGtnW21ldGhvZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzICYmIE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xuXG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBvdXQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1zZy5hcHBOYW1lO1xuICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gbXNnLnBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOZW8gICAgICAgICAgZnJvbSAnLi4vTmVvLm1qcyc7XG5pbXBvcnQgQmFzZSAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IFN0b3JlTWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL1N0b3JlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgIGZyb20gJy4uL2NvcmUvVXRpbC5tanMnO1xuaW1wb3J0IFhociAgICAgICAgICBmcm9tICcuLi9YaHIubWpzJztcblxuLyoqXG4gKiBUaGUgRGF0YSB3b3JrZXIgaXMgcmVzcG9uc2libGUgdG8gaGFuZGxlIGFsbCBvZiB0aGUgY29tbXVuaWNhdGlvbiB0byB0aGUgYmFja2VuZCAoZS5nLiBBamF4LWNhbGxzKS5cbiAqIFNlZSB0aGUgdHV0b3JpYWxzIGZvciBmdXJ0aGVyIGluZm9zLlxuICogQGNsYXNzIE5lby53b3JrZXIuRGF0YVxuICogQGV4dGVuZHMgTmVvLndvcmtlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERhdGEgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5EYXRhJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLkRhdGEnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZGF0YS13b3JrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZGF0YS13b3JrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB3b3JrZXJJZD0nZGF0YSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICdkYXRhJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmtlci5EYXRhIG9uTG9hZCcpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0YSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRGF0YSk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9