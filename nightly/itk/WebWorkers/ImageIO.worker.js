(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function RegisterPromise(e){var t=_defineProperty({},DEFAULT_HANDLER,e),r=self.postMessage.bind(self),n=new(function(e){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return _inherits(n,e),_createClass(n,[{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return r({eventName:e,args:n}),this}},{key:"emitLocally",value:function(e){for(var t,r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];(t=_get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"emit",this)).call.apply(t,[this,e].concat(o))}},{key:"operation",value:function(e,r){return t[e]=r,this}}]),n}(TinyEmitter)),o=function(e,t,r){var n=function(t){t&&t instanceof TransferableResponse?a(e,RESULT_SUCCESS,t.payload,t.transferable):a(e,RESULT_SUCCESS,t)},o=function(t){a(e,RESULT_ERROR,{message:t.message,stack:t.stack})};try{var s=i(e,t,r);isPromise(s)?s.then(n).catch(o):n(s)}catch(e){o(e)}},i=function(e,r,n){var o=t[n||DEFAULT_HANDLER];if(!o)throw new Error("Not found handler for this request");return o(r,s.bind(null,e))},a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];r([MESSAGE_RESULT,e,t,n],o)},s=function(e,t,n){if(!t)throw new Error("eventName is required");if("string"!=typeof t)throw new Error("eventName should be string");r([MESSAGE_EVENT,e,t,n])};return self.addEventListener("message",function(e){var t=e.data;Array.isArray(t)?o.apply(void 0,_toConsumableArray(t)):t&&t.eventName&&n.emitLocally.apply(n,[t.eventName].concat(_toConsumableArray(t.args)))}),n}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},TinyEmitter=require("./tiny-emitter"),MESSAGE_RESULT=0,MESSAGE_EVENT=1,RESULT_ERROR=0,RESULT_SUCCESS=1,DEFAULT_HANDLER="main",isPromise=function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&"function"==typeof e.then&&"function"==typeof e.catch},TransferableResponse=function e(t,r){_classCallCheck(this,e),this.payload=t,this.transferable=r};module.exports=RegisterPromise,module.exports.TransferableResponse=TransferableResponse;
},{"./tiny-emitter":2}],2:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),TinyEmitter=function(){function e(){_classCallCheck(this,e),Object.defineProperty(this,"__listeners",{value:{},enumerable:!1,writable:!1})}return _createClass(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=!0,s=!1,a=void 0;try{for(var l,o=this.__listeners[e][Symbol.iterator]();!(i=(l=o.next()).done);i=!0){l.value.apply(void 0,n)}}catch(e){s=!0,a=e}finally{try{!i&&o.return&&o.return()}finally{if(s)throw a}}return this}},{key:"once",value:function(e,t){var n=this,r=function r(){n.off(e,r),t.apply(void 0,arguments)};return this.on(e,r)}},{key:"on",value:function(e,t){return this.__listeners[e]||(this.__listeners[e]=[]),this.__listeners[e].push(t),this}},{key:"off",value:function(e,t){return this.__listeners[e]=t?this.__listeners[e].filter(function(e){return e!==t}):[],this}}]),e}();module.exports=TinyEmitter;
},{}],3:[function(require,module,exports){
"use strict";var Float32="float",Float64="double",SpacePrecisionType="double";module.exports={Float32:Float32,Float64:Float64,SpacePrecisionType:SpacePrecisionType};

},{}],4:[function(require,module,exports){
"use strict";var ImageType=require("./ImageType.js"),Matrix=require("./Matrix.js"),Image=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ImageType;this.imageType=i,this.name="Image";var e=i.dimension;this.origin=new Array(e),this.origin.fill(0),this.spacing=new Array(e),this.spacing.fill(1),this.direction=new Matrix(e,e),this.direction.setIdentity(),this.size=new Array(e),this.size.fill(0),this.data=new ArrayBuffer(0)};module.exports=Image;

},{"./ImageType.js":6,"./Matrix.js":8}],5:[function(require,module,exports){
"use strict";var ImageIOIndex=["itkPNGImageIOJSBinding","itkMetaImageIOJSBinding","itkDCMTKImageIOJSBinding","itkTIFFImageIOJSBinding","itkNiftiImageIOJSBinding","itkJPEGImageIOJSBinding","itkNrrdImageIOJSBinding","itkVTKImageIOJSBinding","itkBMPImageIOJSBinding","itkHDF5ImageIOJSBinding","itkMINCImageIOJSBinding","itkMRCImageIOJSBinding","itkLSMImageIOJSBinding","itkMGHImageIOJSBinding","itkBioRadImageIOJSBinding","itkGiplImageIOJSBinding","itkGEAdwImageIOJSBinding","itkGE4ImageIOJSBinding","itkGE5ImageIOJSBinding","itkGDCMImageIOJSBinding","itkJSONImageIOJSBinding"];module.exports=ImageIOIndex;

},{}],6:[function(require,module,exports){
"use strict";var IntTypes=require("./IntTypes.js"),PixelTypes=require("./PixelTypes.js"),ImageType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:IntTypes.UInt8,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:PixelTypes.Scalar,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.dimension=e,this.componentType=i,this.pixelType=t,this.components=s};module.exports=ImageType;

},{"./IntTypes.js":7,"./PixelTypes.js":10}],7:[function(require,module,exports){
"use strict";var Int8="int8_t",UInt8="uint8_t",Int16="int16_t",UInt16="uint16_t",Int32="int32_t",UInt32="uint32_t",Int64="int64_t",UInt64="uint64_t",SizeValueType=UInt64,IdentifierType=SizeValueType,IndexValueType=Int64,OffsetValueType=Int64;module.exports={Int8:Int8,UInt8:UInt8,Int16:Int16,UInt16:UInt16,Int32:Int32,UInt32:UInt32,Int64:Int64,UInt64:UInt64,SizeValueType:SizeValueType,IdentifierType:IdentifierType,IndexValueType:IndexValueType,OffsetValueType:OffsetValueType};

},{}],8:[function(require,module,exports){
"use strict";function Matrix(t,s){if(t instanceof Matrix){var i=t;this.rows=i.rows,this.columns=i.columns,this.data=i.data.slice()}else this.rows=t,this.columns=s,this.data=new Array(t*s),this.data.fill(0)}Matrix.prototype.setIdentity=function(){for(var t=0;t<this.rows;++t)for(var s=0;s<this.columns;++s)this.data[s+t*this.columns]=t===s?1:0},Matrix.prototype.setElement=function(t,s,i){this.data[s+t*this.columns]=i},Matrix.prototype.getElement=function(t,s){return this.data[s+t*this.columns]},module.exports=Matrix;

},{}],9:[function(require,module,exports){
"use strict";var mimeToIO={};mimeToIO["image/jpeg"]="itkJPEGImageIOJSBinding",mimeToIO["image/png"]="itkPNGImageIOJSBinding",mimeToIO["image/tiff"]="itkTIFFImageIOJSBinding",mimeToIO["image/x-ms-bmp"]="itkBMPImageIOJSBinding",mimeToIO["image/x-bmp"]="itkBMPImageIOJSBinding",mimeToIO["image/bmp"]="itkBMPImageIOJSBinding",mimeToIO["application/dicom"]="itkDCMTKImageIOJSBinding",module.exports=mimeToIO;

},{}],10:[function(require,module,exports){
"use strict";var Unknown=0,Scalar=1,RGB=2,RGBA=3,Offset=4,Vector=5,Point=6,CovariantVector=7,SymmetricSecondRankTensor=8,DiffusionTensor3D=9,Complex=10,FixedArray=11,Array=12,Matrix=13,VariableLengthVector=14,VariableSizeMatrix=15;module.exports={Unknown:Unknown,Scalar:Scalar,RGB:RGB,RGBA:RGBA,Offset:Offset,Vector:Vector,Point:Point,CovariantVector:CovariantVector,SymmetricSecondRankTensor:SymmetricSecondRankTensor,DiffusionTensor3D:DiffusionTensor3D,Complex:Complex,FixedArray:FixedArray,Array:Array,Matrix:Matrix,VariableLengthVector:VariableLengthVector,VariableSizeMatrix:VariableSizeMatrix};

},{}],11:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _register=require("webworker-promise/lib/register"),_register2=_interopRequireDefault(_register),_MimeToImageIO=require("../MimeToImageIO"),_MimeToImageIO2=_interopRequireDefault(_MimeToImageIO),_getFileExtension=require("../getFileExtension"),_getFileExtension2=_interopRequireDefault(_getFileExtension),_extensionToImageIO=require("../extensionToImageIO"),_extensionToImageIO2=_interopRequireDefault(_extensionToImageIO),_ImageIOIndex=require("../ImageIOIndex"),_ImageIOIndex2=_interopRequireDefault(_ImageIOIndex),_loadEmscriptenModuleBrowser=require("../loadEmscriptenModuleBrowser"),_loadEmscriptenModuleBrowser2=_interopRequireDefault(_loadEmscriptenModuleBrowser),_readImageEmscriptenFSFile=require("../readImageEmscriptenFSFile"),_readImageEmscriptenFSFile2=_interopRequireDefault(_readImageEmscriptenFSFile),_writeImageEmscriptenFSFile=require("../writeImageEmscriptenFSFile"),_writeImageEmscriptenFSFile2=_interopRequireDefault(_writeImageEmscriptenFSFile),_readImageEmscriptenFSDICOMFileSeries=require("../readImageEmscriptenFSDICOMFileSeries"),_readImageEmscriptenFSDICOMFileSeries2=_interopRequireDefault(_readImageEmscriptenFSDICOMFileSeries),ioToModule={},seriesReaderModule=null,readImage=function(e){var r=(0,_getFileExtension2.default)(e.name),o=null;if(_MimeToImageIO2.default.hasOwnProperty(e.type))o=_MimeToImageIO2.default[e.type];else if(_extensionToImageIO2.default.hasOwnProperty(r))o=_extensionToImageIO2.default[r];else for(var i=0;i<_ImageIOIndex2.default.length;++i){var a=null,n=_ImageIOIndex2.default[i];n in ioToModule?a=ioToModule[n]:(ioToModule[n]=(0,_loadEmscriptenModuleBrowser2.default)(e.config.itkModulesPath,"ImageIOs",n),a=ioToModule[n]);var t=new a.ITKImageIO,l=new Blob([e.data]),u=[{name:e.name,data:l}];a.mountBlobs("/work",u);var s="/work/"+e.name;if(t.SetFileName(s),t.CanReadFile(s)){o=n,a.unmountBlobs("/work");break}a.unmountBlobs("/work")}if(null===o)return ioToModule={},Promise.reject(new Error("Could not find IO for: "+e.name));var d=null;o in ioToModule?d=ioToModule[o]:(ioToModule[o]=(0,_loadEmscriptenModuleBrowser2.default)(e.config.itkModulesPath,"ImageIOs",o),d=ioToModule[o]);var m=new Blob([e.data]),I=[{name:e.name,data:m}];d.mountBlobs("/work",I);var g="/work/"+e.name,f=(0,_readImageEmscriptenFSFile2.default)(d,g);return d.unmountBlobs("/work"),new _register2.default.TransferableResponse(f,[f.data.buffer])},writeImage=function(e){var r=(0,_getFileExtension2.default)(e.name),o=null;if(_MimeToImageIO2.default.hasOwnProperty(e.type))o=_MimeToImageIO2.default[e.type];else if(_extensionToImageIO2.default.hasOwnProperty(r))o=_extensionToImageIO2.default[r];else for(var i=0;i<_ImageIOIndex2.default.length;++i){var a=null,n=_ImageIOIndex2.default[i];n in ioToModule?a=ioToModule[n]:(ioToModule[n]=(0,_loadEmscriptenModuleBrowser2.default)(e.config.itkModulesPath,"ImageIOs",n),a=ioToModule[n]);var t=new a.ITKImageIO,l="/work/"+e.name;if(t.SetFileName(l),t.CanWriteFile(l)){o=n;break}}if(null===o)return ioToModule={},Promise.reject(new Error("Could not find IO for: "+e.name));var u=null;o in ioToModule?u=ioToModule[o]:(ioToModule[o]=(0,_loadEmscriptenModuleBrowser2.default)(e.config.itkModulesPath,"ImageIOs",o),u=ioToModule[o]);var s="/work/"+e.name;u.mkdirs("/work"),(0,_writeImageEmscriptenFSFile2.default)(u,e.useCompression,e.image,s);var d=u.readFile(s,{encoding:"binary"});return new _register2.default.TransferableResponse(d.buffer,[d.buffer])},readDICOMImageSeries=function(e){seriesReaderModule||(seriesReaderModule=(0,_loadEmscriptenModuleBrowser2.default)(e.config.itkModulesPath,"ImageIOs","itkDICOMImageSeriesReaderJSBinding"));var r=e.fileDescriptions.map(function(e){var r=new Blob([e.data]);return{name:e.name,data:r}});seriesReaderModule.mountBlobs("/work",r);var o="/work/"+e.fileDescriptions[0].name,i=(0,_readImageEmscriptenFSDICOMFileSeries2.default)(seriesReaderModule,"/work",o);return seriesReaderModule.unmountBlobs("/work"),new _register2.default.TransferableResponse(i,[i.data.buffer])};(0,_register2.default)(function(e){return"readImage"===e.operation?Promise.resolve(readImage(e)):"writeImage"===e.operation?Promise.resolve(writeImage(e)):"readDICOMImageSeries"===e.operation?Promise.resolve(readDICOMImageSeries(e)):Promise.resolve(new Error("Unknown worker operation"))});

},{"../ImageIOIndex":5,"../MimeToImageIO":9,"../extensionToImageIO":12,"../getFileExtension":13,"../loadEmscriptenModuleBrowser":19,"../readImageEmscriptenFSDICOMFileSeries":20,"../readImageEmscriptenFSFile":21,"../writeImageEmscriptenFSFile":22,"webworker-promise/lib/register":1}],12:[function(require,module,exports){
"use strict";var extensionToIO={};extensionToIO.bmp="itkBMPImageIOJSBinding",extensionToIO.BMP="itkBMPImageIOJSBinding",extensionToIO.dcm="itkDCMTKImageIOJSBinding",extensionToIO.DCM="itkDCMTKImageIOJSBinding",extensionToIO.gipl="itkGiplImageIOJSBinding",extensionToIO["gipl.gz"]="itkGiplImageIOJSBinding",extensionToIO.hdf5="itkHDF5ImageIOJSBinding",extensionToIO.jpg="itkJPEGImageIOJSBinding",extensionToIO.JPG="itkJPEGImageIOJSBinding",extensionToIO.jpeg="itkJPEGImageIOJSBinding",extensionToIO.JPEG="itkJPEGImageIOJSBinding",extensionToIO.json="itkJSONImageIOJSBinding",extensionToIO.lsm="itkLSMImageIOJSBinding",extensionToIO.mnc="itkMINCImageIOJSBinding",extensionToIO.MNC="itkMINCImageIOJSBinding",extensionToIO["mnc.gz"]="itkMINCImageIOJSBinding",extensionToIO["MNC.GZ"]="itkMINCImageIOJSBinding",extensionToIO.mnc2="itkMINCImageIOJSBinding",extensionToIO.MNC2="itkMINCImageIOJSBinding",extensionToIO.mgh="itkMGHImageIOJSBinding",extensionToIO.mgz="itkMGHImageIOJSBinding",extensionToIO["mgh.gz"]="itkMGHImageIOJSBinding",extensionToIO.mha="itkMetaImageIOJSBinding",extensionToIO.mhd="itkMetaImageIOJSBinding",extensionToIO.mrc="itkMRCImageIOJSBinding",extensionToIO.nia="itkNiftiImageIOJSBinding",extensionToIO.nii="itkNiftiImageIOJSBinding",extensionToIO["nii.gz"]="itkNiftiImageIOJSBinding",extensionToIO.hdr="itkNiftiImageIOJSBinding",extensionToIO.nrrd="itkNrrdImageIOJSBinding",extensionToIO.NRRD="itkNrrdImageIOJSBinding",extensionToIO.nhdr="itkNrrdImageIOJSBinding",extensionToIO.NHDR="itkNrrdImageIOJSBinding",extensionToIO.png="itkPNGImageIOJSBinding",extensionToIO.PNG="itkPNGImageIOJSBinding",extensionToIO.pic="itkBioRadImageIOJSBinding",extensionToIO.PIC="itkBioRadImageIOJSBinding",extensionToIO.tif="itkTIFFImageIOJSBinding",extensionToIO.TIF="itkTIFFImageIOJSBinding",extensionToIO.tiff="itkTIFFImageIOJSBinding",extensionToIO.TIFF="itkTIFFImageIOJSBinding",extensionToIO.vtk="itkVTKImageIOJSBinding",extensionToIO.VTK="itkVTKImageIOJSBinding",module.exports=extensionToIO;

},{}],13:[function(require,module,exports){
"use strict";var getFileExtension=function(e){var t=e.slice(2+(e.lastIndexOf(".")-1>>>0));if("gz"===t.toLowerCase()){var s=e.slice(0,-3).lastIndexOf(".");t=e.slice(2+(s-1>>>0))}return t};module.exports=getFileExtension;

},{}],14:[function(require,module,exports){
"use strict";var getMatrixElement=function(t,e,r){return t.data[r+e*t.columns]};module.exports=getMatrixElement;

},{}],15:[function(require,module,exports){
"use strict";var IntTypes=require("./IntTypes.js"),FloatTypes=require("./FloatTypes.js"),imageIOComponentToJSComponent=function(e,n){var t=null;switch(n){case e.IOComponentType.UCHAR:t=IntTypes.UInt8;break;case e.IOComponentType.CHAR:t=IntTypes.Int8;break;case e.IOComponentType.USHORT:t=IntTypes.UInt16;break;case e.IOComponentType.SHORT:t=IntTypes.Int16;break;case e.IOComponentType.UINT:t=IntTypes.UInt32;break;case e.IOComponentType.INT:t=IntTypes.Int32;break;case e.IOComponentType.ULONG:t=IntTypes.UInt64;break;case e.IOComponentType.LONG:t=IntTypes.Int64;break;case e.IOComponentType.ULONGLONG:t=IntTypes.UInt64;break;case e.IOComponentType.LONGLONG:t=IntTypes.Int64;break;case e.IOComponentType.FLOAT:t=FloatTypes.Float32;break;case e.IOComponentType.DOUBLE:t=FloatTypes.Float64;break;default:throw new Error("Unknown IO component type")}return t};module.exports=imageIOComponentToJSComponent;

},{"./FloatTypes.js":3,"./IntTypes.js":7}],16:[function(require,module,exports){
"use strict";var PixelTypes=require("./PixelTypes.js"),imageIOPixelTypeToJSPixelType=function(e,i){var T=null;switch(i){case e.IOPixelType.UNKNOWNPIXELTYPE:T=PixelTypes.Unknown;break;case e.IOPixelType.SCALAR:T=PixelTypes.Scalar;break;case e.IOPixelType.RGB:T=PixelTypes.RGB;break;case e.IOPixelType.RGBA:T=PixelTypes.RGBA;break;case e.IOPixelType.OFFSET:T=PixelTypes.Offset;break;case e.IOPixelType.VECTOR:T=PixelTypes.Vector;break;case e.IOPixelType.POINT:T=PixelTypes.Point;break;case e.IOPixelType.COVARIANTVECTOR:T=PixelTypes.CovariantVector;break;case e.IOPixelType.SYMMETRICSECONDRANKTENSOR:T=PixelTypes.SymmetricSecondRankTensor;break;case e.IOPixelType.DIFFUSIONTENSOR3D:T=PixelTypes.DiffusionTensor3D;break;case e.IOPixelType.COMPLEX:T=PixelTypes.Complex;break;case e.IOPixelType.FIXEDARRAY:T=PixelTypes.FixedArray;break;case e.IOPixelType.MATRIX:T=PixelTypes.Matrix;break;default:throw new Error("Unknown IO pixel type")}return T};module.exports=imageIOPixelTypeToJSPixelType;

},{"./PixelTypes.js":10}],17:[function(require,module,exports){
"use strict";var IntTypes=require("./IntTypes.js"),FloatTypes=require("./FloatTypes.js"),imageJSComponentToIOComponent=function(e,n){var t=null;switch(n){case IntTypes.UInt8:t=e.IOComponentType.UCHAR;break;case IntTypes.Int8:t=e.IOComponentType.CHAR;break;case IntTypes.UInt16:t=e.IOComponentType.USHORT;break;case IntTypes.Int16:t=e.IOComponentType.SHORT;break;case IntTypes.UInt32:t=e.IOComponentType.UINT;break;case IntTypes.Int32:t=e.IOComponentType.INT;break;case IntTypes.UInt64:t=e.IOComponentType.ULONGLONG;break;case IntTypes.Int64:t=e.IOComponentType.LONGLONG;break;case FloatTypes.Float32:t=e.IOComponentType.FLOAT;break;case FloatTypes.Float64:t=e.IOComponentType.DOUBLE;break;default:throw new Error("Unknown IO component type")}return t};module.exports=imageJSComponentToIOComponent;

},{"./FloatTypes.js":3,"./IntTypes.js":7}],18:[function(require,module,exports){
"use strict";var PixelTypes=require("./PixelTypes.js"),imageJSPixelTypeToIOPixelType=function(e,i){var T=null;switch(i){case PixelTypes.Unknown:T=e.IOPixelType.UNKNOWNPIXELTYPE;break;case PixelTypes.Scalar:T=e.IOPixelType.SCALAR;break;case PixelTypes.RGB:T=e.IOPixelType.RGB;break;case PixelTypes.RGBA:T=e.IOPixelType.RGBA;break;case PixelTypes.Offset:T=e.IOPixelType.OFFSET;break;case PixelTypes.Vector:T=e.IOPixelType.VECTOR;break;case PixelTypes.Point:T=e.IOPixelType.POINT;break;case PixelTypes.CovariantVector:T=e.IOPixelType.COVARIANTVECTOR;break;case PixelTypes.SymmetricSecondRankTensor:T=e.IOPixelType.SYMMETRICSECONDRANKTENSOR;break;case PixelTypes.DiffusionTensor3D:T=e.IOPixelType.DIFFUSIONTENSOR3D;break;case PixelTypes.Complex:T=e.IOPixelType.COMPLEX;break;case PixelTypes.FixedArray:T=e.IOPixelType.FIXEDARRAY;break;case PixelTypes.Matrix:T=e.IOPixelType.MATRIX;break;default:throw new Error("Unknown IO pixel type")}return T};module.exports=imageJSPixelTypeToIOPixelType;

},{"./PixelTypes.js":10}],19:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},loadEmscriptenModule=function(e,o,t){var r=e;"/"!==e[0]&&(r="..");var n=r+"/"+o+"/"+t+".js";return"object"===("undefined"==typeof WebAssembly?"undefined":_typeof(WebAssembly))&&"function"==typeof WebAssembly.Memory&&(n=r+"/"+o+"/"+t+"Wasm.js"),importScripts(n),Module};exports.default=loadEmscriptenModule;

},{}],20:[function(require,module,exports){
"use strict";var Image=require("./Image.js"),ImageType=require("./ImageType.js"),imageIOComponentToJSComponent=require("./imageIOComponentToJSComponent.js"),imageIOPixelTypeToJSPixelType=require("./imageIOPixelTypeToJSPixelType.js"),readImageEmscriptenFSDICOMFileSeries=function(e,i,r){var o=new e.ITKDICOMImageSeriesReader;if(!o.CanReadTestFile(r))throw new Error("Could not read file: "+r);o.SetTestFileName(r),o.ReadTestImageInformation();var t=new ImageType(3),n=o.GetIOComponentType();t.componentType=imageIOComponentToJSComponent(e,n);var a=o.GetIOPixelType();t.pixelType=imageIOPixelTypeToJSPixelType(e,a),t.components=o.GetNumberOfComponents();var m=new Image(t);if(o.SetIOComponentType(n),o.SetIOPixelType(a),o.SetDirectory(i),o.Read())throw new Error("Could not read series");for(var p=0;p<3;++p){m.spacing[p]=o.GetSpacing(p),m.size[p]=o.GetSize(p),m.origin[p]=o.GetOrigin(p);for(var I=0;I<3;++I)m.direction.setElement(p,I,o.GetDirection(p,I))}return m.data=o.GetPixelBufferData(),m};module.exports=readImageEmscriptenFSDICOMFileSeries;

},{"./Image.js":4,"./ImageType.js":6,"./imageIOComponentToJSComponent.js":15,"./imageIOPixelTypeToJSPixelType.js":16}],21:[function(require,module,exports){
"use strict";var Image=require("./Image.js"),ImageType=require("./ImageType.js"),Matrix=require("./Matrix.js"),imageIOComponentToJSComponent=require("./imageIOComponentToJSComponent.js"),imageIOPixelTypeToJSPixelType=require("./imageIOPixelTypeToJSPixelType.js"),readImageEmscriptenFSFile=function(e,i){var n=new e.ITKImageIO;if(n.SetFileName(i),!n.CanReadFile(i))throw new Error("Could not read file: "+i);n.ReadImageInformation();var o=n.GetNumberOfDimensions(),r=new ImageType(o),t=n.GetComponentType();r.componentType=imageIOComponentToJSComponent(e,t);var a=n.GetPixelType();r.pixelType=imageIOPixelTypeToJSPixelType(e,a),r.components=n.GetNumberOfComponents();for(var m=new Image(r),p=new Matrix(o,o),s=0;s<o;++s)for(var g=n.GetDirection(s),T=0;T<o;++T)p.setElement(T,s,g.get(T));for(var l=0;l<m.imageType.dimension;++l)if(l<o){m.size[l]=n.GetDimensions(l),m.spacing[l]=n.GetSpacing(l),m.origin[l]=n.GetOrigin(l);for(var I=0;I<m.imageType.dimension;++I)if(I<o){var d=p.getElement(I,l);m.direction.setElement(I,l,d)}else m.direction.setElement(I,l,0)}else m.size[l]=0,m.spacing[l]=1,m.origin[l]=0,m.direction.setIdentity();for(var c=0;c<m.imageType.dimension;++c)if(m.spacing[c]<0){m.spacing[c]=-m.spacing[c];for(var y=0;y<m.imageType.dimension;++y)m.direction.setElement(c,y,-1*m.direction.getElement(c,y))}return m.data=n.Read(),m};module.exports=readImageEmscriptenFSFile;

},{"./Image.js":4,"./ImageType.js":6,"./Matrix.js":8,"./imageIOComponentToJSComponent.js":15,"./imageIOPixelTypeToJSPixelType.js":16}],22:[function(require,module,exports){
"use strict";var getMatrixElement=require("./getMatrixElement.js"),imageJSComponentToIOComponent=require("./imageJSComponentToIOComponent.js"),imageJSPixelTypeToIOPixelType=require("./imageJSPixelTypeToIOPixelType.js"),writeImageEmscriptenFSFile=function(e,i,t,n){var r=new e.ITKImageIO;if(r.SetFileName(n),!r.CanWriteFile(n))throw new Error("Could not write file: "+n);var o=t.imageType.dimension;r.SetNumberOfDimensions(o);var a=imageJSComponentToIOComponent(e,t.imageType.componentType);r.SetComponentType(a);var m=imageJSPixelTypeToIOPixelType(e,t.imageType.pixelType);r.SetPixelType(m),r.SetNumberOfComponents(t.imageType.components);for(var p=0;p<o;++p){r.SetDimensions(p,t.size[p]),r.SetSpacing(p,t.spacing[p]),r.SetOrigin(p,t.origin[p]);var s=new e.AxisDirectionType;s.resize(o,0);for(var T=0;T<o;++T)s.set(T,getMatrixElement(t.direction,T,p));r.SetDirection(p,s)}r.SetUseCompression(i);var g=t.data.length*t.data.BYTES_PER_ELEMENT,l=e._malloc(g),S=new Uint8Array(e.HEAPU8.buffer,l,g);S.set(new Uint8Array(t.data.buffer)),r.Write(S.byteOffset),e._free(S.byteOffset)};module.exports=writeImageEmscriptenFSFile;

},{"./getMatrixElement.js":14,"./imageJSComponentToIOComponent.js":17,"./imageJSPixelTypeToIOPixelType.js":18}]},{},[11]);
