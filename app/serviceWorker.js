if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,a,r)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return s;case"module":return d;default:return e(i)}}))).then((e=>{const i=r(...e);return s.default||(s.default=i),s}))})))}}define("./serviceWorker.js",["./workbox-61f6b1f9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"paraview-glance-2-"}),self.skipWaiting(),e.precacheAndRoute([{url:"glance-external-ITKReader.cde6c373f64de99b334d.js",revision:null},{url:"glance-external-Workbox.acd76746f3fc2f787cd8.js",revision:null},{url:"glance.500c52805df28c5bf170.js",revision:null},{url:"itk/FloatTypes.js",revision:"786c92c0279ce8eacd7cd96eba8a48f3"},{url:"itk/IOTypes.js",revision:"274a7502c8f12328d3746e0492504140"},{url:"itk/Image.js",revision:"088184a92ce08bbc0cb664cade150176"},{url:"itk/ImageIOIndex.js",revision:"77ca6a5e8d06242fca1bdce7716eb757"},{url:"itk/ImageIOs/itkBMPImageIOJSBinding.js",revision:"327eaeaa3ea0095bbde75ed1eed6b3d3"},{url:"itk/ImageIOs/itkBMPImageIOJSBindingWasm.js",revision:"8131bfa99ba3889c6cda53090cf0862b"},{url:"itk/ImageIOs/itkBioRadImageIOJSBinding.js",revision:"7f450859a2cca4b149f22f45a1c0a9eb"},{url:"itk/ImageIOs/itkBioRadImageIOJSBindingWasm.js",revision:"d5cc1ab8b545df967c7483d9af21f754"},{url:"itk/ImageIOs/itkDCMTKImageIOJSBindingWasm.js",revision:"860114914169bac14cfc878eb3a741cd"},{url:"itk/ImageIOs/itkDICOMImageSeriesReaderJSBindingWasm.js",revision:"aea645bfcb8b4468738f81fe20a7a19c"},{url:"itk/ImageIOs/itkDICOMTagReaderJSBindingWasm.js",revision:"ff41970b92b62d11983203e9b980f396"},{url:"itk/ImageIOs/itkFDFImageIOJSBinding.js",revision:"6f7606f55bc32d186be43434659fed6a"},{url:"itk/ImageIOs/itkFDFImageIOJSBindingWasm.js",revision:"e5cddfe3fb94c4c747dd0c7512652162"},{url:"itk/ImageIOs/itkGDCMImageIOJSBindingWasm.js",revision:"9f4292d989fee556b46b88554feb1e7c"},{url:"itk/ImageIOs/itkGE4ImageIOJSBinding.js",revision:"cc107a4afbd76e43d68a471a1a1d4760"},{url:"itk/ImageIOs/itkGE4ImageIOJSBindingWasm.js",revision:"2b034e14e889b9607afe638c2d715d54"},{url:"itk/ImageIOs/itkGE5ImageIOJSBinding.js",revision:"691292cb0268c06b5400e45017b5d8d6"},{url:"itk/ImageIOs/itkGE5ImageIOJSBindingWasm.js",revision:"e82af2def865c153c5b7add4bbc70d80"},{url:"itk/ImageIOs/itkGEAdwImageIOJSBinding.js",revision:"7d80c6de3211741d0e0f321574bbac13"},{url:"itk/ImageIOs/itkGEAdwImageIOJSBindingWasm.js",revision:"ab7ea724356b11d2ee0a476718b105c4"},{url:"itk/ImageIOs/itkGiplImageIOJSBinding.js",revision:"b941fb22fbe8706a571f5ca3a9644486"},{url:"itk/ImageIOs/itkGiplImageIOJSBindingWasm.js",revision:"b77d682cfb1ca0a15a45fd680f5c6fce"},{url:"itk/ImageIOs/itkHDF5ImageIOJSBindingWasm.js",revision:"0ac22e4093d16a83fb8e17f5c868baa3"},{url:"itk/ImageIOs/itkJPEGImageIOJSBinding.js",revision:"9cf89136b8e219139bd9f90b314fcee4"},{url:"itk/ImageIOs/itkJPEGImageIOJSBindingWasm.js",revision:"f334238c676e6c7a35a76edaf15b21e3"},{url:"itk/ImageIOs/itkJSONImageIOJSBinding.js",revision:"9e5d4ba1387cbac5fdbc54f9e6be263f"},{url:"itk/ImageIOs/itkJSONImageIOJSBindingWasm.js",revision:"ebbca8363b60df4d8c1b3213b57629e8"},{url:"itk/ImageIOs/itkLSMImageIOJSBinding.js",revision:"bf6465ac727f7838be8376b3cb26d837"},{url:"itk/ImageIOs/itkLSMImageIOJSBindingWasm.js",revision:"0cdd245ecb5defac11f97485940868ed"},{url:"itk/ImageIOs/itkMGHImageIOJSBinding.js",revision:"e7730c8de6005209dced2f46213849b2"},{url:"itk/ImageIOs/itkMGHImageIOJSBindingWasm.js",revision:"4b835125d13c1570b4621fcdaf266d26"},{url:"itk/ImageIOs/itkMINCImageIOJSBindingWasm.js",revision:"b3e1c470c0b3f3d375cd977a2a383c6a"},{url:"itk/ImageIOs/itkMRCImageIOJSBinding.js",revision:"ab29d83f7fb0d1f0e83de07124e39455"},{url:"itk/ImageIOs/itkMRCImageIOJSBindingWasm.js",revision:"bc0293291d8e20b0c4634a48c4294854"},{url:"itk/ImageIOs/itkMetaImageIOJSBinding.js",revision:"79ca40783b79b1ea9ce985baf90928f8"},{url:"itk/ImageIOs/itkMetaImageIOJSBindingWasm.js",revision:"270a9a5e413ed6498062dbba011d6fff"},{url:"itk/ImageIOs/itkNiftiImageIOJSBinding.js",revision:"4d8e3020930ccfb351a84bebd639bb92"},{url:"itk/ImageIOs/itkNiftiImageIOJSBindingWasm.js",revision:"4efef5712b59a129015906802ada8afb"},{url:"itk/ImageIOs/itkNrrdImageIOJSBinding.js",revision:"4f40b7492fa3d20815b686df7156ecce"},{url:"itk/ImageIOs/itkNrrdImageIOJSBindingWasm.js",revision:"1ce73bab695437046328f04a68c30662"},{url:"itk/ImageIOs/itkPNGImageIOJSBinding.js",revision:"cfeda3ae1e36cc2ddd218d8388f018c3"},{url:"itk/ImageIOs/itkPNGImageIOJSBindingWasm.js",revision:"8a5f0585f8230ae4613b4ea9801eef28"},{url:"itk/ImageIOs/itkScancoImageIOJSBinding.js",revision:"3bc50e360b5bd41db22c3d4925724b92"},{url:"itk/ImageIOs/itkScancoImageIOJSBindingWasm.js",revision:"d27d7b973b2f8d5f62c56f6f778ba5d4"},{url:"itk/ImageIOs/itkTIFFImageIOJSBinding.js",revision:"2d6b5af145c0db0522fcf6b30c37262b"},{url:"itk/ImageIOs/itkTIFFImageIOJSBindingWasm.js",revision:"0832f3e5a2678c06ddf154c34075ff56"},{url:"itk/ImageIOs/itkVTKImageIOJSBinding.js",revision:"ae1cadb5315139d8c46eb22f579f2d40"},{url:"itk/ImageIOs/itkVTKImageIOJSBindingWasm.js",revision:"be63d3828426c299bd32ac118747edf7"},{url:"itk/ImageType.js",revision:"4d52f2d76a46b0adffd2b184b41028e3"},{url:"itk/IntTypes.js",revision:"32a87875e1d723c67e39b439d662af79"},{url:"itk/Matrix.js",revision:"696e1fd396a08372c12853fe14520607"},{url:"itk/Mesh.js",revision:"39ee277da2b2eaa8c94f989aa4cd4a6e"},{url:"itk/MeshIOIndex.js",revision:"663e93bd8be843afff0354112e3287e8"},{url:"itk/MeshIOs/itkBYUMeshIOJSBinding.js",revision:"c4a860c7426f7e784644a8c28f30dbc5"},{url:"itk/MeshIOs/itkBYUMeshIOJSBindingWasm.js",revision:"65fc0385d5bd7dd45964f06d6f147785"},{url:"itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBinding.js",revision:"5ecd71245511b5dc670d4eeb862fe8c3"},{url:"itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBindingWasm.js",revision:"45101a7ed1964399b40b61a2b3e0d5c0"},{url:"itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBinding.js",revision:"a85c58aefa9323846d7e19cd3c5c770e"},{url:"itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBindingWasm.js",revision:"c4a02a0901a4270c275391858cbad0ca"},{url:"itk/MeshIOs/itkOBJMeshIOJSBinding.js",revision:"543d85275b9054fb89336c09ba4b14a7"},{url:"itk/MeshIOs/itkOBJMeshIOJSBindingWasm.js",revision:"f3e7ee28e76e202ab545ec9fc4d5e68b"},{url:"itk/MeshIOs/itkOFFMeshIOJSBinding.js",revision:"8802542151a2d6cff0fe3445da0920c3"},{url:"itk/MeshIOs/itkOFFMeshIOJSBindingWasm.js",revision:"beaef5f064ed3fe613dd02dfd62cdae8"},{url:"itk/MeshIOs/itkSTLMeshIOJSBinding.js",revision:"18be11a2091bc3e7a3cf91d21b7e4b4c"},{url:"itk/MeshIOs/itkSTLMeshIOJSBindingWasm.js",revision:"a8a2cd35a82a2565f3d4b86ead2f4816"},{url:"itk/MeshIOs/itkVTKPolyDataMeshIOJSBinding.js",revision:"8264ebede538d591a699c5143d68768b"},{url:"itk/MeshIOs/itkVTKPolyDataMeshIOJSBindingWasm.js",revision:"412fc6c99dac94e4a213ee6e2217223b"},{url:"itk/MeshType.js",revision:"f2ec2302c5f1bf554ca8d3cac9e19c05"},{url:"itk/MimeToImageIO.js",revision:"3e76827bb8cbf4b7c540ed2805eb9b9e"},{url:"itk/MimeToMeshIO.js",revision:"aba361459fce0489e3be3cc8b0b58e23"},{url:"itk/MimeToPolyDataIO.js",revision:"aba361459fce0489e3be3cc8b0b58e23"},{url:"itk/Pipelines/CLPExample1Wasm.js",revision:"2ce80f5b67622cc1915f9243b1835dd4"},{url:"itk/Pipelines/MeshToPolyDataWasm.js",revision:"6446907dec38c03c2a7508dfc9518a46"},{url:"itk/PixelTypes.js",revision:"4fa031705ef3b81acc4a2717e0fd2049"},{url:"itk/PolyDataIOIndex.js",revision:"19671d0bb00d13b6b7913b8c5d775f71"},{url:"itk/PolyDataIOs/VTKExodusFileReaderWasm.js",revision:"13a353e3a88bc8ad4aa8321a51763224"},{url:"itk/PolyDataIOs/VTKLegacyFileReaderWasm.js",revision:"77d2284dcba250465f23b7f451222638"},{url:"itk/PolyDataIOs/VTKPLYFileReaderWasm.js",revision:"ab308ee00c9af83ce4bffc7dd2529164"},{url:"itk/PolyDataIOs/VTKXMLFileReaderWasm.js",revision:"e3440bceb3ccd1930ee2024cb0d409d4"},{url:"itk/WebWorkers/ImageIO.worker.js",revision:"e6e0af5dbb5fa369abe7725d1e4bfff0"},{url:"itk/WebWorkers/MeshIO.worker.js",revision:"3a700fd450d2e6e01d4c0466a9bf6696"},{url:"itk/WebWorkers/Pipeline.worker.js",revision:"5fba062c674ac37a352d1ba5396335fd"},{url:"itk/WorkerPool.js",revision:"006e00433e54c523be5135d3fb6b9783"},{url:"itk/bufferToTypedArray.js",revision:"d269aea2687170e428db9633d7633806"},{url:"itk/copyImage.js",revision:"8e7505ce417db0921c954227e4ef6f4b"},{url:"itk/createWebworkerPromise.js",revision:"a67988d2ac2f03d131f3b654f3caa233"},{url:"itk/extensionToImageIO.js",revision:"b027d2b8952cffad9b8c3b30e7653317"},{url:"itk/extensionToMeshIO.js",revision:"6047791b09b38e5e2dfc3e976a8ffda1"},{url:"itk/extensionToPolyDataIO.js",revision:"e238b455d8dea60aefeb1451460deb3f"},{url:"itk/getFileExtension.js",revision:"04917c3ff34191f39354bb00332572ef"},{url:"itk/getMatrixElement.js",revision:"b5b833b11487416068b17f1395023a40"},{url:"itk/getTransferable.js",revision:"dc469ef84508e8a3d322bcc88ec9583f"},{url:"itk/imageIOComponentToJSComponent.js",revision:"895102fb7c928d61e36e10d8d9391b11"},{url:"itk/imageIOPixelTypeToJSPixelType.js",revision:"5603b2b293f344b99ee6f1823ef13824"},{url:"itk/imageJSComponentToIOComponent.js",revision:"2088702a4cb9117c9116bef51376d658"},{url:"itk/imageJSPixelTypeToIOPixelType.js",revision:"31b0f68a30ede357ed4ea68fc3719601"},{url:"itk/imageSharedBufferOrCopy.js",revision:"a12d739ea218567712ff063a33330984"},{url:"itk/index.js",revision:"80409727aba608b7c0ef2acd07975927"},{url:"itk/itk-js-cli.js",revision:"adfc36e5de028a659cc1fe6ab5b00abe"},{url:"itk/itkConfig.js",revision:"a9da642a4fc895b80a933bea1de52377"},{url:"itk/itkConfigCDN.js",revision:"0d81309dd9518d64c9006374a77e946c"},{url:"itk/loadEmscriptenModuleBrowser.js",revision:"6b4e95540d9b4bf38adb149c877788be"},{url:"itk/loadEmscriptenModuleNode.js",revision:"662f4d63587344b9304226d96222833f"},{url:"itk/meshIOComponentToJSComponent.js",revision:"90de7c32cf5cd3d60126c6f919b68787"},{url:"itk/meshIOPixelTypeToJSPixelType.js",revision:"ec7177162b0dc19137f59b9f583e6add"},{url:"itk/meshJSComponentToIOComponent.js",revision:"2b27cef5a7d43957a28f4da96626fd14"},{url:"itk/meshJSPixelTypeToIOPixelType.js",revision:"05f00c2dd4bc66db539e4f414de6a2b1"},{url:"itk/node_modules/fs-extra/lib/copy-sync/copy-sync.js",revision:"23f879c19b9f42b90b56648362e092a2"},{url:"itk/node_modules/fs-extra/lib/copy-sync/index.js",revision:"95494fc7a02209518e070c5470727df1"},{url:"itk/node_modules/fs-extra/lib/copy/copy.js",revision:"f7d861c3469b46cc419136ff585c9f97"},{url:"itk/node_modules/fs-extra/lib/copy/index.js",revision:"562ca7a595a7b1b7270f140c32689ac2"},{url:"itk/node_modules/fs-extra/lib/empty/index.js",revision:"d2e0e0eb95ac259bc7f8fb65b992ef0f"},{url:"itk/node_modules/fs-extra/lib/ensure/file.js",revision:"cf3696fe43fe778d704fcf8fcd486d74"},{url:"itk/node_modules/fs-extra/lib/ensure/index.js",revision:"27a43257b6009138ffaa8a7462ddba66"},{url:"itk/node_modules/fs-extra/lib/ensure/link.js",revision:"ff62149b525aef3fbfbd4accd2256aca"},{url:"itk/node_modules/fs-extra/lib/ensure/symlink-paths.js",revision:"be9c8f74132d37198fabee775b684481"},{url:"itk/node_modules/fs-extra/lib/ensure/symlink-type.js",revision:"75871bc803a6046deefe24a3f02f4f3d"},{url:"itk/node_modules/fs-extra/lib/ensure/symlink.js",revision:"f8f10d59b5a7630a949c716876003c3f"},{url:"itk/node_modules/fs-extra/lib/fs/index.js",revision:"605f637e4a7753f3124035794c882c4f"},{url:"itk/node_modules/fs-extra/lib/index.js",revision:"f42d0d00f3abb1bd2153a75dcc7a0c49"},{url:"itk/node_modules/fs-extra/lib/json/index.js",revision:"dbced9952c4222c32a88bba2d8b4ef06"},{url:"itk/node_modules/fs-extra/lib/json/jsonfile.js",revision:"9a378d46c0c6a89b9e32d5c90ae44be9"},{url:"itk/node_modules/fs-extra/lib/json/output-json-sync.js",revision:"2e5409e141cc5ed747bf744dc62b3362"},{url:"itk/node_modules/fs-extra/lib/json/output-json.js",revision:"551ad6b0fe72dd3b16fdbde88679f03a"},{url:"itk/node_modules/fs-extra/lib/mkdirs/index.js",revision:"9cc1d8bb2c89810566f60c0664d974b9"},{url:"itk/node_modules/fs-extra/lib/mkdirs/make-dir.js",revision:"4ff0d3aa621c19135e377be1dd121bca"},{url:"itk/node_modules/fs-extra/lib/move-sync/index.js",revision:"c2e4f586bcc5bc6e0db8369003bcfd6b"},{url:"itk/node_modules/fs-extra/lib/move-sync/move-sync.js",revision:"cc9339e7d4e2ce08f6d79d08d348d824"},{url:"itk/node_modules/fs-extra/lib/move/index.js",revision:"1895bdcd799c951badcafda242a46247"},{url:"itk/node_modules/fs-extra/lib/move/move.js",revision:"75b52861f7cd90b6ed7cece7279ce037"},{url:"itk/node_modules/fs-extra/lib/output/index.js",revision:"b0adfc74c8e51ce2ab659bfc13752ed3"},{url:"itk/node_modules/fs-extra/lib/path-exists/index.js",revision:"dfb2813673ea5279a9aa7305e5fe33f3"},{url:"itk/node_modules/fs-extra/lib/remove/index.js",revision:"e8c6a5092ac319dec6888ff3686e1dd5"},{url:"itk/node_modules/fs-extra/lib/remove/rimraf.js",revision:"8af4d4abb5011a6543699bfc934d2522"},{url:"itk/node_modules/fs-extra/lib/util/stat.js",revision:"cbbd1b4970fa837c23013c2431b8c35e"},{url:"itk/node_modules/fs-extra/lib/util/utimes.js",revision:"b95e8f0f6d31e27cacaf907e04d44ad7"},{url:"itk/node_modules/jsonfile/index.js",revision:"c18cdb1953c23651297eecd0c2a35df9"},{url:"itk/node_modules/jsonfile/utils.js",revision:"dbf76159ea111d8f0a848e94285b0b68"},{url:"itk/node_modules/universalify/index.js",revision:"86ef0931da77d998bfa45c365b1300e1"},{url:"itk/readArrayBuffer.js",revision:"52c7067839ff7a061d7b7ab36c6f3060"},{url:"itk/readBlob.js",revision:"b9c4329a7319055ed6fa6bc207f38c26"},{url:"itk/readDICOMTags.js",revision:"c801e24b86536bafb9e4c684f7abe6b7"},{url:"itk/readDICOMTagsEmscriptenFSFile.js",revision:"adce13dd704fd6140e0e63bd4a116998"},{url:"itk/readDICOMTagsLocalFile.js",revision:"cb4dc49a11e3dd5a80ed2cebdff3296f"},{url:"itk/readDICOMTagsLocalFileSync.js",revision:"560f58119cf6c2864badddee2f9112ca"},{url:"itk/readFile.js",revision:"bedc9547efc2fea97cc526a4669a0d35"},{url:"itk/readImageArrayBuffer.js",revision:"a259a00465ba77dab3ab7af895c1963b"},{url:"itk/readImageBlob.js",revision:"37c28c5ca49b26a58a643701d05b3615"},{url:"itk/readImageDICOMFileSeries.js",revision:"6d18da18df85a56b10bedddc17fc9fc0"},{url:"itk/readImageEmscriptenFSDICOMFileSeries.js",revision:"e55d37cf66d30aa0af09dfc793c05d64"},{url:"itk/readImageEmscriptenFSFile.js",revision:"9dcb75216b2bcc76fb82a17a3efd49d3"},{url:"itk/readImageFile.js",revision:"6dad70cecfc462dcb31b1318ecb87349"},{url:"itk/readImageFileSeries.js",revision:"fe446ecdb53b43c469d3a7fa011b84b0"},{url:"itk/readImageHTTP.js",revision:"78e29b549f383dbb198a248f9cb15bb2"},{url:"itk/readImageLocalDICOMFileSeries.js",revision:"ae400fe4b398d153b238c3235a9bd359"},{url:"itk/readImageLocalDICOMFileSeriesSync.js",revision:"f5304b91ab32c64e97cb7914073e1e09"},{url:"itk/readImageLocalFile.js",revision:"737d2cb279cddbd825f37d09847700d5"},{url:"itk/readImageLocalFileSync.js",revision:"109df853264bcf775af5dd0b3b55f61e"},{url:"itk/readLocalFile.js",revision:"eb491746332118fe063931f33418d59a"},{url:"itk/readLocalFileSync.js",revision:"e5a2bd3e980bcebc9c693298e7da386d"},{url:"itk/readMeshArrayBuffer.js",revision:"3ac0c0d4ad2b914277576007a7f0a9d6"},{url:"itk/readMeshBlob.js",revision:"761e3e9e45b214e01df98f1f9c14f6ad"},{url:"itk/readMeshEmscriptenFSFile.js",revision:"25dc1fdbab7b50e8e47222cd8f80458f"},{url:"itk/readMeshFile.js",revision:"4846a9eda71178535634b335617e29c5"},{url:"itk/readMeshLocalFile.js",revision:"a257c746adfc7f224dd00585882d4d57"},{url:"itk/readMeshLocalFileSync.js",revision:"93367c12748c47e1b1f420285feec59e"},{url:"itk/readPolyDataArrayBuffer.js",revision:"3e4fbdd59d13e372d685d6f6c0ab8438"},{url:"itk/readPolyDataBlob.js",revision:"054aebd1b227eb71dc9220dc32c2bde5"},{url:"itk/readPolyDataFile.js",revision:"c4d76cf30c4d6b3d16d7a7c5d01c4831"},{url:"itk/readPolyDataLocalFile.js",revision:"72d197d73334673dae99747216b6f052"},{url:"itk/readPolyDataLocalFileSync.js",revision:"8a9c327159998fe88c4792c6f633a387"},{url:"itk/runPipelineBrowser.js",revision:"1edcc1e2483a8a4917d7605923819476"},{url:"itk/runPipelineEmscripten.js",revision:"aa53d4a41d35f62797339a8df706834c"},{url:"itk/runPipelineNode.js",revision:"bad2e6fb64ae0258958b5da17d166789"},{url:"itk/runPipelineNodeSync.js",revision:"5361e5412d619c76d357a7568e51d6b8"},{url:"itk/setMatrixElement.js",revision:"a0099a7c2321a96954e51816e53c6074"},{url:"itk/stackImages.js",revision:"68382b996c21f8e4d5167f6b1a63a8b8"},{url:"itk/umd/itk.js",revision:"cb45e45f3e111ad05641bf09d0ae3a40"},{url:"itk/writeArrayBuffer.js",revision:"30d656c5e27d8146da1c971482dd8706"},{url:"itk/writeImageArrayBuffer.js",revision:"b3bdf59f416acc5c9d36bd49b485b7e7"},{url:"itk/writeImageEmscriptenFSFile.js",revision:"6b45773bc0eccf6dd0ef17773a7dbc46"},{url:"itk/writeImageLocalFile.js",revision:"4e0622719fdc7a2e51dea811a1aa401a"},{url:"itk/writeImageLocalFileSync.js",revision:"38932fa7a9d4746850294a61ad1b7a80"},{url:"itk/writeLocalFile.js",revision:"f9d99f8f674622d089cbecabd848669b"},{url:"itk/writeLocalFileSync.js",revision:"811f2e370fac4bf4ce9dd05180903807"},{url:"itk/writeMeshArrayBuffer.js",revision:"4766a1caa590a090ea1078c9a9fb2cc5"},{url:"itk/writeMeshEmscriptenFSFile.js",revision:"ec1057f541c847b05666501a649c9327"},{url:"itk/writeMeshLocalFile.js",revision:"0797ad346c4a1b0e6655b79c78813313"},{url:"itk/writeMeshLocalFileSync.js",revision:"23fb1410a127c4861127777e7d39ab87"},{url:"itkfiltering.js",revision:"a55dff12a5238a103952ef680be08464"},{url:"itkfilteringWasm.js",revision:"8ea89ffd951781e94b46a64452064fc6"},{url:"runtime.9318517ed0f5fd41d22b.js",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/(\.css|\.ttf|\.eot|\.woff|\.js|\.png|\.svg|\.wasm)$/,new e.NetworkFirst,"GET")}));
