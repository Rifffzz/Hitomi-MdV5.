'use strict';const _0x406d02=_0x2d18;function _0x14ac(){const _0x8cefb9=['tictactoe','penantang','2512270kYtmhN','\x20menolak\x0aKirim\x20','80yXMkHP','hadiah','log','splice','split','TicTacToe','titactoe\x20@tag','./package.json','Hasil\x20Seri\x0a\x0a@','18940668bpAOxW','\x20=\x20❌\x0a@','4LRvWtZ','\x20Menang\x0a\x0a@','[ERROR]','916089LxjZjA','Yah\x20@','\x20menerima\x20tantangan\x0a\x0a@','\x20=\x20⭕\x0a\x0a\x20\x20\x20\x20','Nomor\x20tersebut\x20sudah\x20terisi','\x0a\x0aHadiah\x20:\x20','192927DSNWHc','\x0a\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x0aGiliran\x20@','status','irfanhariyanto','\x20balance\x0aIngin\x20bermain\x20lagi?\x20','2eCHcBN','Untuk\x20melanjutkan\x20fitur\x20tictactoe\x20package\x20tidak\x20boleh\x20diganti!','700526DBIhDM','parse','151839eBThQF','\x0a\x0aIngin\x20bermain\x20lagi?\x20','./color','toLowerCase','11AXjrqC','ditantang','176BnFNdU','red','2702994lLoxSP'];_0x14ac=function(){return _0x8cefb9;};return _0x14ac();}(function(_0x26c0c2,_0x16ab31){const _0x37636c=_0x2d18,_0x5793c7=_0x26c0c2();while(!![]){try{const _0x362f64=-parseInt(_0x37636c(0x1a4))/0x1*(parseInt(_0x37636c(0x1a6))/0x2)+-parseInt(_0x37636c(0x198))/0x3*(parseInt(_0x37636c(0x195))/0x4)+-parseInt(_0x37636c(0x1b3))/0x5+-parseInt(_0x37636c(0x1b0))/0x6+parseInt(_0x37636c(0x19e))/0x7*(parseInt(_0x37636c(0x1ae))/0x8)+parseInt(_0x37636c(0x1a8))/0x9*(parseInt(_0x37636c(0x1b5))/0xa)+parseInt(_0x37636c(0x1ac))/0xb*(parseInt(_0x37636c(0x193))/0xc);if(_0x362f64===_0x16ab31)break;else _0x5793c7['push'](_0x5793c7['shift']());}catch(_0x34a0df){_0x5793c7['push'](_0x5793c7['shift']());}}}(_0x14ac,0x58199));function _0x2d18(_0x5c2985,_0x3c4481){const _0x14ac78=_0x14ac();return _0x2d18=function(_0x2d18fd,_0x39be1e){_0x2d18fd=_0x2d18fd-0x18e;let _0x49edbc=_0x14ac78[_0x2d18fd];return _0x49edbc;},_0x2d18(_0x5c2985,_0x3c4481);}const fs=require('fs'),{color,bgcolor}=require(_0x406d02(0x1aa)),{isTicTacToe,getPosTic,KeisiSemua,cekIsi,cekTicTac}=require('./tictactoe'),pack=JSON[_0x406d02(0x1a7)](fs['readFileSync'](_0x406d02(0x191))),cek=pack['name']==='hitomi-md'&&pack['author']===_0x406d02(0x1a2);module['exports']=async(_0x37835f,_0x53d71a,_0x68d1b5,_0x4122c6,_0x53cdff,_0x2afff3,_0x519cad,_0x58bb7b,_0x4c23c9)=>{const _0x178ac0=_0x406d02;if(!cek)return _0x2afff3(_0x178ac0(0x1a5));try{if(isTicTacToe(_0x4122c6,_0x68d1b5)){let _0x3953c3=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],_0x6211a3=_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)],_0x231217=_0x6211a3[_0x178ac0(0x18f)];if(_0x6211a3['status']===null){if(_0x53cdff===_0x6211a3[_0x178ac0(0x1ad)]){if(_0x37835f[_0x178ac0(0x1ab)]()==='y')_0x519cad('@'+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x19a)+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0]+'\x20=\x20❌\x0a@'+_0x6211a3[_0x178ac0(0x1ad)]['split']('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x1a0)+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0],[_0x6211a3[_0x178ac0(0x1b2)],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x1a1)]=!![];else _0x37835f[_0x178ac0(0x1ab)]()==='n'&&(_0x519cad(_0x178ac0(0x199)+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x1b4)+_0x53d71a+_0x178ac0(0x190),[_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[_0x178ac0(0x1b8)](getPosTic(_0x4122c6,_0x68d1b5),0x1));}}else{if(_0x6211a3['status']===!![]){if(_0x53cdff===_0x6211a3[_0x178ac0(0x1b2)])for(let _0x3a9e20 of _0x3953c3){if(Number(_0x37835f)===_0x3a9e20){if(cekIsi(Number(_0x37835f)-0x1,_0x231217))return _0x2afff3(_0x178ac0(0x19c));_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x18f)][Number(_0x37835f)-0x1]='❌';if(cekTicTac(_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x18f)]))_0x519cad('@'+_0x6211a3['penantang'][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x196)+_0x6211a3[_0x178ac0(0x1b2)]['split']('@')[0x0]+'\x20=\x20❌\x0a@'+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+'\x0a\x20\x20\x20\x20'+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x19d)+_0x6211a3['hadiah']+_0x178ac0(0x1a3)+_0x53d71a+_0x178ac0(0x1b1),[_0x6211a3[_0x178ac0(0x1b2)],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x58bb7b(_0x6211a3[_0x178ac0(0x1b2)],_0x6211a3[_0x178ac0(0x1b6)],_0x4c23c9),_0x68d1b5['splice'](getPosTic(_0x4122c6,_0x68d1b5),0x1);else KeisiSemua(_0x231217)?(_0x519cad(_0x178ac0(0x192)+_0x6211a3[_0x178ac0(0x1b2)]['split']('@')[0x0]+_0x178ac0(0x194)+_0x6211a3['ditantang'][_0x178ac0(0x18e)]('@')[0x0]+'\x20=\x20⭕\x0a\x0a\x20\x20\x20\x20'+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x1a9)+_0x53d71a+_0x178ac0(0x1b1),[_0x6211a3[_0x178ac0(0x1b2)],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[_0x178ac0(0x1b8)](getPosTic(_0x4122c6,_0x68d1b5),0x1)):(_0x519cad('@'+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0]+'\x20telah\x20mengisi\x0a\x0a@'+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x194)+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x1a0)+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0],[_0x6211a3['penantang'],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x1a1)]=![]);}}}else{if(_0x6211a3['status']===![]){if(_0x53cdff===_0x6211a3['ditantang'])for(let _0x2f4532 of _0x3953c3){if(Number(_0x37835f)===_0x2f4532){if(cekIsi(Number(_0x37835f)-0x1,_0x231217))return _0x2afff3(_0x178ac0(0x19c));_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x18f)][Number(_0x37835f)-0x1]='⭕';if(cekTicTac(_0x231217))_0x519cad('@'+_0x6211a3[_0x178ac0(0x1ad)]['split']('@')[0x0]+'\x20Menang\x0a\x0a@'+_0x6211a3['penantang'][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x194)+_0x6211a3['ditantang']['split']('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x19d)+_0x6211a3['hadiah']+_0x178ac0(0x1a3)+_0x53d71a+_0x178ac0(0x1b1),[_0x6211a3['penantang'],_0x6211a3['ditantang']],![]),_0x58bb7b(_0x6211a3[_0x178ac0(0x1ad)],_0x6211a3[_0x178ac0(0x1b6)],_0x4c23c9),_0x68d1b5[_0x178ac0(0x1b8)](getPosTic(_0x4122c6,_0x68d1b5),0x1);else KeisiSemua(_0x231217)?(_0x519cad(_0x178ac0(0x192)+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x194)+_0x6211a3['ditantang'][_0x178ac0(0x18e)]('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+'\x0a\x20\x20\x20\x20'+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x1a9)+_0x53d71a+_0x178ac0(0x1b1),[_0x6211a3[_0x178ac0(0x1b2)],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[_0x178ac0(0x1b8)](getPosTic(_0x4122c6,_0x68d1b5),0x1)):(_0x519cad('@'+_0x6211a3[_0x178ac0(0x1ad)][_0x178ac0(0x18e)]('@')[0x0]+'\x20telah\x20mengisi\x0a\x0a@'+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0]+'\x20=\x20❌\x0a@'+_0x6211a3[_0x178ac0(0x1ad)]['split']('@')[0x0]+_0x178ac0(0x19b)+_0x231217[0x0]+_0x231217[0x1]+_0x231217[0x2]+_0x178ac0(0x19f)+_0x231217[0x3]+_0x231217[0x4]+_0x231217[0x5]+_0x178ac0(0x19f)+_0x231217[0x6]+_0x231217[0x7]+_0x231217[0x8]+_0x178ac0(0x1a0)+_0x6211a3[_0x178ac0(0x1b2)][_0x178ac0(0x18e)]('@')[0x0],[_0x6211a3['penantang'],_0x6211a3[_0x178ac0(0x1ad)]],![]),_0x68d1b5[getPosTic(_0x4122c6,_0x68d1b5)][_0x178ac0(0x1a1)]=!![]);}}}}}}}catch(_0x244f48){console[_0x178ac0(0x1b7)](color(_0x178ac0(0x197),_0x178ac0(0x1af)),_0x244f48);}};