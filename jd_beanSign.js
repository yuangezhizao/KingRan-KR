/*
领京豆签到
cron:15 0,16 * * *
============Quantumultx===============
[task_local]
#领京豆签到
15 0,16 * * * jd_beanSign.js, tag=领京豆签到, enabled=true
 */

const $ = new Env('领京豆签到');
var version_='jsjiami.com.v7';const liliiI=iii1II;(function(iIIlll,I1iiiI,iiI1il,iiI1ii,I1iii1,lilii1,iIiii1){return iIIlll=iIIlll>>0x9,lilii1='hs',iIiii1='hs',function(ll1lil,IIlil1,I1Illl,ll1lii,li11){const i11lI1=iii1II;ll1lii='tfi',lilii1=ll1lii+lilii1,li11='up',iIiii1+=li11,lilii1=I1Illl(lilii1),iIiii1=I1Illl(iIiii1),I1Illl=0x0;const ilIlI1=ll1lil();while(!![]&&--iiI1ii+IIlil1){try{ll1lii=parseInt(i11lI1(0x1e0,'@nO$'))/0x1*(parseInt(i11lI1(0xb1,'DMgP'))/0x2)+parseInt(i11lI1(0x196,'38de'))/0x3*(-parseInt(i11lI1(0x160,'0Rdh'))/0x4)+-parseInt(i11lI1(0x182,'@nO$'))/0x5+-parseInt(i11lI1(0x13f,'isGF'))/0x6+parseInt(i11lI1(0x129,'1ehM'))/0x7*(-parseInt(i11lI1(0x113,'EYqm'))/0x8)+parseInt(i11lI1(0x125,'@nO$'))/0x9+-parseInt(i11lI1(0x137,'5n5)'))/0xa*(-parseInt(i11lI1(0x162,'HW2W'))/0xb);}catch(I1Illi){ll1lii=I1Illl;}finally{li11=ilIlI1[lilii1]();if(iIIlll<=iiI1ii)I1Illl?I1iii1?ll1lii=li11:I1iii1=li11:I1Illl=li11;else{if(I1Illl==I1iii1['replace'](/[WPtqpMBDxlQnLfUFdg=]/g,'')){if(ll1lii===IIlil1){ilIlI1['un'+lilii1](li11);break;}ilIlI1[iIiii1](li11);}}}}}(iiI1il,I1iiiI,function(IIlilI,Illlll,Illlli,llli1l,lI1ii1,llli1i,iiI1l1){return Illlll='\x73\x70\x6c\x69\x74',IIlilI=arguments[0x0],IIlilI=IIlilI[Illlll](''),Illlli='\x72\x65\x76\x65\x72\x73\x65',IIlilI=IIlilI[Illlli]('\x76'),llli1l='\x6a\x6f\x69\x6e',(0x135ad7,IIlilI[llli1l](''));});}(0x18c00,0xf3ace,Iii11l,0xc8),Iii11l)&&(version_=Iii11l);const iI111i=$['isNode']()?require(liliiI(0x140,'AUBe')):'',I1I1l1=$[liliiI(0x168,'jg@$')]()?require('./jdCookie.js'):'',iI111l=require('crypto-js'),i1lIii=liliiI(0x17f,'1ehM'),III11i=require('./function/krgetToken'),i1lIil=require('./function/krgetSign'),III11l=process[liliiI(0x1e8,'lp0I')][liliiI(0x177,'27o7')]||'';let llIl1i=[],llIl1l='';if($['isNode']()){Object[liliiI(0xd8,'VfIh')](I1I1l1)['forEach'](llIl1I=>{const ilIIiI=liliiI;llIl1i[ilIIiI(0x17e,'L4)b')](I1I1l1[llIl1I]);});if(process['env']['JD_DEBUG']&&process['env'][liliiI(0x16d,']3ci')]===liliiI(0x1c3,'s6Jc'))console['log']=()=>{};}else llIl1i=[$[liliiI(0xc3,'K[BZ')](liliiI(0x1e4,'z^tj')),$[liliiI(0x1db,'e6rd')](liliiI(0x1cb,'S[k#')),...IIIlIi($[liliiI(0x1af,'jg@$')](liliiI(0x1a3,'z^tj'))||'[]')[liliiI(0x197,'^5)(')](i1lIl1=>i1lIl1['cookie'])][liliiI(0x17b,'Xse8')](liIli1=>!!liIli1);let IiiII='';const Iiil=liliiI(0x1be,'DMgP');!(async()=>{const lIl1ii=liliiI,IIIlIl={'wWaCc':lIl1ii(0x163,'tk2L'),'ykLyM':lIl1ii(0x174,'5n5)'),'pZdLu':function(IIIlI,IiiI){return IIIlI(IiiI);},'AzrPr':lIl1ii(0x1ce,'4rsp'),'QyfJb':function(iIi1i,l1iIll){return iIi1i===l1iIll;},'Vmfqh':'WcutU','sZedq':lIl1ii(0x142,'4rsp'),'ckHSk':lIl1ii(0xef,'5w%3'),'zPqHP':lIl1ii(0xb2,'38de'),'KcRTS':function(l1iIli,iIi1l){return l1iIli<iIi1l;},'FhNsJ':function(i1lIlI,l1lliI){return i1lIlI===l1lliI;},'ILlyf':lIl1ii(0x18a,'jg@$'),'cpHyu':function(I1I1iI,IIIlII){return I1I1iI+IIIlII;},'FfUVz':lIl1ii(0x170,'e6rd'),'IXmNK':function(iiIiI1,ili1Il){return iiIiI1===ili1Il;},'RDUvq':lIl1ii(0xbc,'@hTe'),'HpBPD':function(ili1Ii){return ili1Ii();}};if(!llIl1i[0x0]){if(IIIlIl[lIl1ii(0x18d,'38de')](IIIlIl[lIl1ii(0x10b,'O9UW')],IIIlIl[lIl1ii(0x1a2,'(GRg')]))iii1lI[lIl1ii(0xa9,'27o7')]('签到失败,'+i1ilI1?.[lIl1ii(0x184,'L4)b')]+':'+Iiilii?.['errorMessage']);else{$[lIl1ii(0x11a,'O9UW')]($['name'],IIIlIl[lIl1ii(0xe7,'wPgn')],'https://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});return;}}console[lIl1ii(0xb3,'BoDz')](IIIlIl[lIl1ii(0x18f,'isGF')]);for(let ll11I=0x0;IIIlIl['KcRTS'](ll11I,llIl1i['length']);ll11I++){if(llIl1i[ll11I]){if(IIIlIl[lIl1ii(0xcc,'1ehM')](IIIlIl[lIl1ii(0xf3,'Hrlt')],lIl1ii(0x17d,'e6rd'))){llIl1l=llIl1i[ll11I],$[lIl1ii(0x131,'L4)b')]=decodeURIComponent(llIl1l[lIl1ii(0xa1,'@Yfx')](/pt_pin=([^; ]+)(?=;?)/)&&llIl1l['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[lIl1ii(0x130,'HW2W')]=IIIlIl[lIl1ii(0x10e,'5n5)')](ll11I,0x1),$[lIl1ii(0x14a,'5w%3')]=!![],$['nickName']='',message='',console['log']('\x0a******开始【京东账号'+$['index']+'】'+($[lIl1ii(0xad,'@nO$')]||$['UserName'])+'*********\x0a');if(!$[lIl1ii(0x18c,'MJt6')]){$[lIl1ii(0x10f,'e6rd')]($[lIl1ii(0x1bf,'4rsp')],lIl1ii(0x195,'L4)b'),lIl1ii(0x126,'^5)(')+$[lIl1ii(0x194,'Xse8')]+'\x20'+($[lIl1ii(0x122,'z^tj')]||$[lIl1ii(0x16f,'HW2W')])+lIl1ii(0xc6,'gltU'),{'open-url':IIIlIl[lIl1ii(0x1d8,'AUBe')]});if($[lIl1ii(0xe4,'dGOg')]()){if(IIIlIl[lIl1ii(0xfb,'AUBe')](IIIlIl['RDUvq'],IIIlIl['RDUvq']))await iI111i[lIl1ii(0x118,'AUBe')]($[lIl1ii(0x150,'K[BZ')]+'cookie已失效\x20-\x20'+$[lIl1ii(0x138,'&ND)')],lIl1ii(0xce,'lp0I')+$[lIl1ii(0xcd,'MJt6')]+'\x20'+$['UserName']+'\x0a请重新登录获取cookie');else return I1l1Il[llIll1[lIl1ii(0x183,'38de')](Illl1l['random']()*Illl1i[lIl1ii(0x192,'MJt6')])];}continue;}IIIlIl['HpBPD'](I1I1ii),await IIIlIl[lIl1ii(0x14f,'tk2L')](IIIli),await $['wait'](0x5dc);}else lI1Iii=[i1li['getdata'](IIIlIl[lIl1ii(0x191,'lX)(')]),li1II['getdata'](IIIlIl[lIl1ii(0xac,'VfIh')]),...IIIlIl[lIl1ii(0x149,'s6Jc')](IliI11,i1ll[lIl1ii(0xbf,'^5)(')](IIIlIl[lIl1ii(0xd2,'K[BZ')])||'[]')['map'](IlI1lI=>IlI1lI[lIl1ii(0x153,'pNcq')])][lIl1ii(0xd4,'K[BZ')](liIIi=>!!liIIi);}}if(IiiII){if($[lIl1ii(0x1ca,'5w%3')]())await iI111i[lIl1ii(0x1d7,'BoDz')](''+$[lIl1ii(0x109,'w99X')],''+IiiII);$[lIl1ii(0x175,'jlOM')]($[lIl1ii(0x1ab,'wPgn')],'',IiiII);}})()[liliiI(0xf4,'pNcq')](IilllI=>{const lIl1il=liliiI;$[lIl1il(0x1b9,'&ND)')]('','❌\x20'+$['name']+lIl1il(0x15f,'dGOg')+IilllI+'!','');})['finally'](()=>{const Ii1l11=liliiI;$[Ii1l11(0xd0,'NK)Q')]();});async function IIIli(){const IIlii1=liliiI,iI1lIi={'XNJib':function(l1lllI){return l1lllI();}};await iI1lIi['XNJib'](l1llil),await $[IIlii1(0x155,'5n5)')](0x1f4);}function ii1i1(llliIi,i1lIli=liliiI(0x18e,'Xse8')){const iiI1lI=liliiI,i1lIll={'aOFcS':function(liIlii,llii1l){return liIlii<llii1l;},'jlNYa':function(liIlil,llii1i){return liIlil!==llii1i;},'yCPpN':iiI1lI(0x171,'(GRg'),'viJkL':iiI1lI(0x19d,'1ehM'),'NflKZ':function(ll11il,iI1lIl){return ll11il*iI1lIl;}};let ll11ii='';for(let iiIiII=0x0;i1lIll[iiI1lI(0x1ae,'S[k#')](iiIiII,llliIi);iiIiII++){i1lIll[iiI1lI(0xb7,'pNcq')](i1lIll[iiI1lI(0x110,'jlOM')],i1lIll['viJkL'])?ll11ii+=i1lIli[Math['floor'](i1lIll['NflKZ'](Math[iiI1lI(0x16a,'NK)Q')](),i1lIli[iiI1lI(0x19b,'L4)b')]))]:IlIlll=IIIl1I=0x40;}return ll11ii;}function iii1II(_0x76f42,_0x3b050b){const _0x362d9d=Iii11l();return iii1II=function(_0x583848,_0x5e36f7){_0x583848=_0x583848-0x9e;let _0x4241c1=_0x362d9d[_0x583848];if(iii1II['ZCPdeU']===undefined){var _0x7b1be9=function(_0x420919){const _0x33153='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x21258f='',_0x47dcde='';for(let _0x592687=0x0,_0x482ca6,_0x39fd74,_0x53c514=0x0;_0x39fd74=_0x420919['charAt'](_0x53c514++);~_0x39fd74&&(_0x482ca6=_0x592687%0x4?_0x482ca6*0x40+_0x39fd74:_0x39fd74,_0x592687++%0x4)?_0x21258f+=String['fromCharCode'](0xff&_0x482ca6>>(-0x2*_0x592687&0x6)):0x0){_0x39fd74=_0x33153['indexOf'](_0x39fd74);}for(let _0x248773=0x0,_0x163789=_0x21258f['length'];_0x248773<_0x163789;_0x248773++){_0x47dcde+='%'+('00'+_0x21258f['charCodeAt'](_0x248773)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47dcde);};const _0x5be59d=function(_0x3d2d68,_0x127144){let _0x4a652b=[],_0x2f436c=0x0,_0x2c839f,_0x974e36='';_0x3d2d68=_0x7b1be9(_0x3d2d68);let _0x151f03;for(_0x151f03=0x0;_0x151f03<0x100;_0x151f03++){_0x4a652b[_0x151f03]=_0x151f03;}for(_0x151f03=0x0;_0x151f03<0x100;_0x151f03++){_0x2f436c=(_0x2f436c+_0x4a652b[_0x151f03]+_0x127144['charCodeAt'](_0x151f03%_0x127144['length']))%0x100,_0x2c839f=_0x4a652b[_0x151f03],_0x4a652b[_0x151f03]=_0x4a652b[_0x2f436c],_0x4a652b[_0x2f436c]=_0x2c839f;}_0x151f03=0x0,_0x2f436c=0x0;for(let _0x4865e8=0x0;_0x4865e8<_0x3d2d68['length'];_0x4865e8++){_0x151f03=(_0x151f03+0x1)%0x100,_0x2f436c=(_0x2f436c+_0x4a652b[_0x151f03])%0x100,_0x2c839f=_0x4a652b[_0x151f03],_0x4a652b[_0x151f03]=_0x4a652b[_0x2f436c],_0x4a652b[_0x2f436c]=_0x2c839f,_0x974e36+=String['fromCharCode'](_0x3d2d68['charCodeAt'](_0x4865e8)^_0x4a652b[(_0x4a652b[_0x151f03]+_0x4a652b[_0x2f436c])%0x100]);}return _0x974e36;};iii1II['GwkhnB']=_0x5be59d,_0x76f42=arguments,iii1II['ZCPdeU']=!![];}const _0x852226=_0x362d9d[0x0],_0x344869=_0x583848+_0x852226,_0x20ce69=_0x76f42[_0x344869];return!_0x20ce69?(iii1II['epemcT']===undefined&&(iii1II['epemcT']=!![]),_0x4241c1=iii1II['GwkhnB'](_0x4241c1,_0x5e36f7),_0x76f42[_0x344869]=_0x4241c1):_0x4241c1=_0x20ce69,_0x4241c1;},iii1II(_0x76f42,_0x3b050b);}function Iiii(iIi11,Iil1={}){const IliIlI=liliiI,ll11lI={'KSnCL':function(Iillli,ll11l1){return Iillli===ll11l1;},'aAeGC':function(ll111,llliII){return ll111(llliII);},'dcEZe':function(iiIiIl,IlI1l1){return iiIiIl+IlI1l1;},'cHbcq':function(liIliI,llii1I){return liIliI+llii1I;}};let llliI1=[],liIII=Iil1[IliIlI(0x1b4,'5n5)')]||'&',llii11=Object[IliIlI(0x114,'Xse8')](iIi11);if(Iil1[IliIlI(0x188,'DMgP')])llii11=llii11[IliIlI(0xf9,'XAco')]();for(let iiIiIi of llii11){let l1lll1=iIi11[iiIiIi];if(l1lll1&&ll11lI[IliIlI(0x1d0,'AUBe')](typeof l1lll1,IliIlI(0xb8,'*28J')))l1lll1=JSON[IliIlI(0xc4,'^5)(')](l1lll1);if(l1lll1&&Iil1[IliIlI(0x1bc,'4qDs')])l1lll1=ll11lI['aAeGC'](encodeURIComponent,l1lll1);llliI1[IliIlI(0xd6,'S[k#')](ll11lI[IliIlI(0x121,'O9UW')](ll11lI[IliIlI(0x1f0,'lp0I')](iiIiIi,'='),l1lll1));}return llliI1[IliIlI(0x10c,'BoDz')](liIII);}function llIl11(IilI){const IIliiI=liliiI,liIlli={'sboEJ':function(lil11,Iillll){return lil11*Iillll;}};return IilI[Math[IIliiI(0xd1,'4eny')](liIlli[IIliiI(0x147,'K[BZ')](Math[IIliiI(0xb0,'z^tj')](),IilI[IIliiI(0x103,'VfIh')]))];}function IIIll(lllI1='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',III11I='0123456789abcdef'){const i1111l=liliiI,Ilii1={'nEcqU':function(ili1I1,Iill){return ili1I1===Iill;},'kakHR':i1111l(0xe2,'4eny'),'mQhGC':i1111l(0xa8,'5n5)'),'gYfCE':function(ili1II,liIllI){return ili1II==liIllI;},'ruiUQ':function(ll11i,iI1lI1){return ll11i===iI1lI1;},'KfIQC':i1111l(0x180,'XAco'),'YtnJa':function(I1I1li,l1i11){return I1I1li*l1i11;},'udSsN':'krUSU'};let ll11i1='';for(let IlI1li of lllI1){if(Ilii1['nEcqU'](Ilii1['kakHR'],Ilii1['mQhGC']))IIIII1['signStr']=I1lIlI?.[i1111l(0xc2,'VfIh')]||'';else{if(Ilii1[i1111l(0xc9,'L4)b')](IlI1li,'x'))Ilii1[i1111l(0x17a,'^5)(')](Ilii1['KfIQC'],Ilii1[i1111l(0xcf,'@Yfx')])?ll11i1+=III11I[i1111l(0x14d,'tk2L')](Math['floor'](Ilii1[i1111l(0xc7,'*28J')](Math[i1111l(0x1c7,'MJt6')](),III11I[i1111l(0xda,'&ND)')]))):lIII1i+=l11i11[i1111l(0x9e,'gltU')](IilIl1);else IlI1li=='X'?Ilii1['nEcqU'](Ilii1[i1111l(0xab,'MJt6')],Ilii1['udSsN'])?ll11i1+=III11I[i1111l(0xee,'dGOg')](Math[i1111l(0x1f1,'S[k#')](Math[i1111l(0x145,'(GRg')]()*III11I[i1111l(0x1a6,'gltU')]))['toUpperCase']():i1lI[i1111l(0x128,'38de')]():ll11i1+=IlI1li;}}return ll11i1;}function I1I1il(liIll1){const i1111i=liliiI,l1llli={'MgYPL':function(l1llll){return l1llll();},'csrfl':function(I1I1ll,lil1i){return I1I1ll===lil1i;},'ZLtmI':i1111i(0xf7,'wPgn'),'GBGHW':'qrSZl','xFoIU':function(liiiil,IIIIli){return liiiil<IIIIli;},'pWbeL':function(lllIi,lil1l){return lllIi<lil1l;},'FyNMA':function(lllIl,Iliii){return lllIl|Iliii;},'qtOdf':function(illlii,I1lIIi){return illlii>>I1lIIi;},'qrrpO':function(l1i1i,I1iI1i){return l1i1i&I1iI1i;},'quBwS':function(l1i1l,I1iI1l){return l1i1l|I1iI1l;},'wyONp':function(illlil,Iliil){return illlil&Iliil;},'PckBj':function(I1lIIl,l1ilI1){return I1lIIl&l1ilI1;}};liIll1=liIll1[i1111i(0x134,'*28J')](/rn/g,'n');var iI1lII='';for(var ll11iI=0x0;ll11iI<liIll1[i1111i(0x117,'Hrlt')];ll11iI++){if(l1llli[i1111i(0x14b,'s6Jc')](l1llli[i1111i(0x161,'^5)(')],l1llli[i1111i(0x1a7,'z^tj')]))l1llli['MgYPL'](IIliIi);else{var l1i1I=liIll1[i1111i(0xb6,'*28J')](ll11iI);if(l1llli[i1111i(0xe5,'(GRg')](l1i1I,0x80))iI1lII+=String['fromCharCode'](l1i1I);else l1i1I>0x7f&&l1llli[i1111i(0xe8,'tk2L')](l1i1I,0x800)?(iI1lII+=String[i1111i(0x1dc,'@hTe')](l1llli[i1111i(0x19f,'dGOg')](l1llli[i1111i(0xbb,'*28J')](l1i1I,0x6),0xc0)),iI1lII+=String[i1111i(0xe0,'isGF')](l1llli[i1111i(0x169,'wPgn')](l1i1I,0x3f)|0x80)):(iI1lII+=String[i1111i(0x1e6,'^5)(')](l1llli[i1111i(0x133,'NK)Q')](l1i1I>>0xc,0xe0)),iI1lII+=String['fromCharCode'](l1llli[i1111i(0xc8,'5n5)')](l1llli['wyONp'](l1llli[i1111i(0x178,'8B)D')](l1i1I,0x6),0x3f),0x80)),iI1lII+=String[i1111i(0x9e,'gltU')](l1llli[i1111i(0x13e,'8B)D')](l1llli[i1111i(0xa0,'jlOM')](l1i1I,0x3f),0x80)));}}return iI1lII;}function Iii11l(){const iiI1li=(function(){return[version_,'FWjQQMsxjBMiLxagFmniP.cqolfpmDq.xvtd7LgU==','uMJcPIJdKG','b8o0nG8i','zttdScjK','aSo1gZddKWm','W4ZcJ29XCa','qCkFWPVcMSk5DaxcUmoT','W7NdNmk9','WQztW70OvG','mCkZWQzNWRNdQa','rCkYWRpcUCkh','imoJhdaMzmkd','W5RdQHRdP8kt','w0dcHJ/dRmoXWPHxW6q','WQJdNCoyW6O','W5JcIddcPmofW63dKSoLWRu','eSoPccVdVba','nCkNW7tdOhy','lqldOMr9WOOZ','W4rZbCoVWOGN','BGfFdCkHBtZcR8ourmkxxq','n8kaW5pdSwBcOHJdU2pdUG','W7tdMs4AW5e','pfyjuCoZpGpcJCo3','yGPzba','nCojlG','W5dcTMjHyW','WQ1UWP3cGwCk','WPKQwG','W7DUW4v/CYixzCkeWO4fWOnLW7elWQBcGvyPsJ0OuKf4rSoJysXTW7VdKvH1W7xdHCocW77cRmohhcCtW6W','WOWwW5iiBgO','xMSoWRfTyG','w8o/WRL9W5rrm8oN','W5FdIHezW7z3WR/cNCkcW6lcTSotWO4re0ZdKSkKuJy5w2n3Ev5AWQT5jSkOW4fAea','xZFdQSoy','m8oaW5RdGmo+iq','WPX0qCkMW5a','W7lcUb/dJv4yW4i','f8oGbsRdMa','WRddSZpdL0W','xvRcLsldNCoDWPnwW4aj','cmkUrItdRG','FmoTWRjRW7vD','WRpdU8o9W5LJ','WOrVvSoTsG','twpdTSkRW7q/','f8khW53dQeZcQdBdMHa','gwfTW5dcTa','ltNdUSoyda','CJNdQmowWO/cVKdcHmoG','WRzaDmoLDSoeWQS','WPPasmkUW7m','hdDyvflcGqLlWRiCEG','WQLgDa','WP8fcSkKW6e','W4VcIxXdFq','WPFcS0ZcSmkcWQSuW7dcMvdcPSk5gG','AXBdKHrj','bLWwpve+WPtdV0Pr','WPD1C8k7W4u','AxXcW4FcHqi','WRHicCkWWP4','W6NcINLUxNpcOq','WRGNWP7dTIK1fmoDW45RW6We','a8oGkreS','W5FcOtNdPCocqCkDWR/cRmocW69LWRZdT8k0W5Opm1ldS8kxq8kqW6X7WQTGWOCmW4jzo8kHrmkcBmkvpSooi8kZlSo0W4XKW7pcOLNdP8k1jvBdJZWXW41vWQOVBvxdImkjpLBdOgFdNCkCeSkuW6xcH1hcRCk+zmoAe8kBW6HTp1n7WOBdVbFdLCkpWPDPWORdSvCEWRqMWP/dGYauWPVcRSkYW6O','AGrk','W7eqkSk+hCo5WRtdUaWOaW','W7/dIX7cPa','W7ZcL8kytmkP','WRj7r8kFW77dKq','qCkFWPVcMSk5DdZcTG','WOPrE8oDuq','FvGrW4NdVJFcUqO7W6WEnq','WP3cShhcPW','W4NdRsK','5O+q5y6C6i2g5y+q5Asm6lEb772X6lwu6lYC','ASkrWOFcPmkaqrFcI8kgW7y','WPuopCkXW4m','WRzCCG','zXTD','W5ddQbm9W5i','WR15jmkhWRHuW79TbW1RW6O','W4/dIZ3dTSkr','mSkeW53dRfC','b3f9W7tcKa','W4BdQHxdSCo2W6S','WPnKxmkaW5m','o8kKWQDTWO7dQaZcNmo3EKBcOa','iSkCWP3cMSk1mtVcK8okW6BdNW4HWO8','BLhcNXldTa','WOyDWRXLdG','k1atu8oZ','BCoGWRvQW7re','dI5pvNu','AhfcW5VcHXKGbCkm','yhHpW5tcIG','W6dcJMbV','nwGxuCoI','WOxdUcW','n1iVkKC','E8oOWO98W5q','WOBdGsJdG2O','WQTaCmoGA8orWRtdHq','W5m9WPhdOG','w0dcHJ/dRmo/WPjaW7iCW6LX','CmkrWPRcLCk/Fa','WO3dUZ8KW4iJW7C','5RAg5yU05yAz5y2K77+6gWtdQUMNHEMGRftPOB7KUldOSP/dNEETUEwkSa','gvyF','BdpdItnqW54','k8oizG','jmopybhcQCoBWQ0EW7/dQa','a2XrW7RcSa','kmofAWBcICoa'].concat((function(){return['W51sW7GOvG','ACkKWPhcNCkZ','nSottGFcJa','WRaKWP/dUsW','W63dKsxdHmkL','pSk6WQfLWQpdTa','Fe8kW4ddNcVcUq','WP3dOCoBk8kuWRqhWOBdTmoJ','xNJcLCkmW7e0WRfOw1DuB8ogWP8','WP3dHqddGW','uSoXrCoquSoGzG','Af4mW43dKZJcSr4b','v0pdNSkPW5u','v+ISOEMeHEAwSoEATUw/LEIpMUwmUmk+FvBcStitW4pdM8oWiXOyWORdQSksvSk8W7uDrmkvW607W6dcVgrBW6FdHa5ynqzHW5rOWRPpW6SepstdK8kZ','hSotBYNcIW','lKWLsmof','WR7dISkRWQpcRa','p8oFwrFcHW','n8osuWRcGW','stFdRIv0','z8oIWRHQW6i','5lIa5lQF6lw55y2I','WQaAWOfxjq','cZfrxW','eXpcNMLp','DmoUq8oKqq','WOGuWQL0jqVdUfypxq','u8o9xCoavSoM','W54ZWPJdOG','jmkDW4hdQW','W7RcHvbezG','WPtdJX3dIq','qCocWOTPW6i','WPKGu8k7W4v9','xMWldq','ESo7smozrG','sh/dNW','nrzqE3m','W4pcQJddNSkJAG','WQFcQsNdSNexW5FcVLpcS8k7eW','zqnmf8khfG','fGJcM39P','WQSsc8k6W4i','kmo+nI0TAa','W4FcK2vCva','6k+X5yQu6zQI5OwQ5z+Uimk0aWVcLEI/T+wgS+AIIUs/RUAuJUweRUwSJNpLU4pORjBPGjJOVPFOHkBMNBtLJ5hOJz7LJ59qWQ7dTahdQLu','WQxdL8o9W5XS','W5/cMdZdNmkB','WRSYWPLcfq','WOqpWPDWaXy','oqldU1Pj','W43dMdFdRSoI','uuhcQYBdU8oa','iSoLgtaiEq','44c05O+a56Ac44ov6k2N5yss6i215y6t5lQ05lIf6lwj5y+P5lU7W43cLYLmW7ZdTSkL55U/5O6/5lY255ANxmoYW7ddGrdcQ+EBI+s6RUs4QEESNEwiNUImM+wpPq','WPvNqSopvG','WPtcRetcRCke','WOHUiCk9WPxcL8o2W61knq','tYDbhmkG','cMfRW4dcUq','WRPfpCkyWQu','hW9TA3y','WO3dJSogW6Ll','56+s5yUH5AEz6ls+W4G','W5/cVSkABW','WP7dHr3dRuy','WPHls8kJW7q','m8oSidG/','WO7cIKTzWQT8','W7LUWRxcSgqfWRi','i8ogAa/cK8o1WR4AW4ZdUa','m8oiuHFcMmoDWQCC','W4DMyCoPWPxdNcKRW64FW7a','WO8SASkuW7W','WPpdJWRdNvnt','cMX2W4BcV3i','gmoRWR0aW6JcJmo5ACkcgt7cJxVcG8k2oSkSf8keWOtdKSo4ymkMWRn5DmkWdxdcG8o6W7yTdCoFsCoqsCk8jZu1WOtdNCo7W7NdVvVcImkPz8orW5yEW6RdICoRWQdcMYBcJW','W4lcVdK','W4FdJXJdTCov','oCk3WRXH','WRvQjSkp','WPBdHrC','asBdTCoAmq','h1yrnW','nmosCrpcHCogWR0XW7RdJ8o4WRddGxpdOW','peKVrSoJ','W6pcNgO','r3hcPcddKa','nCkyW4ldGvdcPbddUG','tSkvWOhcKSkX','smo6WO8MW6ZdKCkD','W5zgWOvk','WR8cWOddUqS','ddjwx37cKd5aWOemz1tcGG','AG5daSkYcG','WQj2smkjW7hdISkgW5Cjuq','xc3dRtr7','oJJdTa','a8oLvrdcGG','amoefI0r','W5/cUmkpDCk3WOi3','h10zkw8','pe4xfxG','WPXKFSoFCW','mYJdLSoXpa','BmkzWPFcMSkECbVcLW','xfFcLt7dN8ofWPzbW6u','WRlcSIhdSwelW4q','W7arimk7fSkcW6/dPqa1lu9D','5lQ35lI26lwy5y2t','W47dPJ7dU8kJfmokW7ZdQq','W5KZWPldOG','ow/cK2ilWPL3W7/dOmo9x1qB','WQpdJmkA','WPxdHGJdM2K','WRmMWPy'].concat((function(){return['W4RcO8khDSkNWP4KWPpdVCoUomk9','aZfy','u8oYuSoMsq','WQHLWPFcG2S','WOZdOmkOWPlcP8o1qsO','WPrbhmknWP4','hIT9tum','nCocCq/cI8oxWQW','W4RcJslcSSozW7ddKSoK','6iYi5yYduq','BGLud8oMhZxcHCopva','WQa2wmkUW790AIW','WOGqWQfJcbddILy8wK3cKM8','WQH7j8kdWO8','qIldTCouWOJcVa','vSo8umogCSoG','W6NcLwr6eYFcPmkQnmowkCoBW6FdTeBdGCo8','E2fHW4lcLW','W7pdQN7cRaDlWOlcM0pcQ8kxlNi','W788vCkiW5hdGCk8W5eBqColW68','omkDWRjfWOm','FX/dRSoSWQ0','W4hdOX3dR8ooW55xW4BcUem','C0GgW6hdLW','W43cTgrXBSk2','zIZdKdTX','rSo2xSoXEq','hmoNea7dUq','aCoBdrxdIa','twpdTmkRW7CZWQW','eSoYgZ/dKq','emoQidtdUa','W4ZcPZ/dI8kwDG','zNVcVCkAD0K','W6FcVXZdQCkt','w8o1xmor','WOXQpmkvWQlcRW','W5vUWOXCeG','cM9WW4JcUgm','WPDQbSkdWPi','kfGosW','bLaFn0WLWPi','W6RcJNLR','wI/dG8oYWRy','omkothlcN8oqW5nrW7WKn8kChSkHEh7cSSouzW','A0nsW5FcPq','6k6E5yU/6zQq5OAS5z+5rmoWh8kmWOBOVz3LHzlMO4pKV4lML6VLHlBLRPTD5BUm6k6j6ycA6lYt6iAL5P255y+16i2M5yYIWQjkWQ50W7na','WOZdPtNdKg95b8k2WQC','u8ozWP3LPl7OTR8','uf3cGW','BCkT5Awj6lwNAc3LJBJLMyzbFq','WOVdI3FdKmkcWRZdU8oxW7lcLmkWka','qwykW4NdTa','W7a8W4ddLsrtWQGhW4FdOr99','W6ZcOdhdKSk+z8olra','WQFdJ0X6t2VcPCkyn8oya8ogW7BdT1dcK8k7yYaJWRpdOhe8hhddRmkOuJX9mSkuW4qbW7CNomobo8k3bmkGWRBdPmokfZpcICoumYVdQtldNK8','W5ddTWScW6S','WOGtWQXJ','WRSQp8kZW4O','iXtdMg94WPS','WRFdJSohW79i','ht9rxN/cIq','W6FcOureCW','W5ZdKGWmW6S5W4BdL8krW6hcTSksWO0','WQPldCk2WPpcHCocW5m','BKWoWRDr','WPr4WPBcLf0dWPqM','W6BcM3L6td3dR8oGmmoFkCobWQZcTuJdICoQy3jIW6/dUJnXnLBcL8kwD3CZf8ktW4SbWQ9opmobjmkXqSoU','W7NcJuHxBq','nmosya','5O+v5y286i2+5y6M5AAQ6lAt77+A6lA16lYT','hfyivmo/od3cPSk3','u0hcKW','W5pcUM0','WQpdKXtdRfr9jSknWONdNmkuWRhcVG','E2bSW5hcOG','grdcLG','Av8xW7hdRa','W5TkWPbnjYK','56+B5yQY5Awf6lAMWPS','W6pcVeHEsq','WQNdPSk+WOG','rbpdRrHXW7OuW5FdN8opB0aHW6ddS8kuW5eNW4FcG8otEeWltCoqFI7cISo5W6FdKwiTySk3ESkSirBdHW/dK8oSWQbKkmoeCmo+umkCvHZcMCkFW6zbWQfxdaRcRmoB','W4JcQCkMxmkm','ySoLWRzBW78','W7qrk8k5eSkaWPldRsSXlLW','W5SWWPpdQmks','WRZdOCk/WO/cM8oxqYSH','W53cMttcHW','xMOrca','oq1yc8kLfSkYfc/cRWddQ8k/AvddHCo1hfJdLKmZsh4','W4ZdKrCD','mNmEtSoK','jZtdK1rQ','BdFdGsr9W4uHW6ddJCoV','z8o/WPbGW71zma','W6WLWPRdJCkc','W4XuWPLlnIivwCk7WOKcWPX3W5OLWR7cSM0Qw3u/ubz9eG','WRVcIZFdL2i','yNpcOmkBAKVcRJj0vMNdSSko','lmk2qb/dJW','ySoPWRjOW65y','WQTQoCkzWP4','W5rnWPHCoG','44oj5O2d56E344oXWORdU0mKlrtLTi3LP7xMLPO','WO4/WQxdLCkmpsa','DKSo','tuFcLGtdT8ogWPTw','W6NcUHJdM8kw','W6JcPmo+W5pdNSkLFqSYpmk0WOa','WRxdTSkJWOFcNCo8','WPTcWQNcHhy','BIxdKtjZ'];}()));}()));}());Iii11l=function(){return iiI1li;};return Iii11l();};function l1llii(lil1I,l1l1Ii){const iliiI1=liliiI,IIIIlI={'puRii':function(liIlll,I1iI1I){return liIlll==I1iI1I;},'otiTL':iliiI1(0x1a1,'s6Jc'),'ohPjp':iliiI1(0xe6,'Hrlt'),'hbxEj':function(illll1,IIIIl1){return illll1||IIIIl1;},'aWqba':function(liiilI,lI111l){return liiilI(lI111l);},'KgKsT':function(liiii1,IIiiIl){return liiii1|IIiiIl;},'ZJojs':function(l1ilIl,IIiiIi){return l1ilIl&IIiiIi;},'semZU':function(l1ilIi,l11iIi){return l1ilIi|l11iIi;},'kyDOP':function(ll11li,iliIlI){return ll11li&iliIlI;},'hZCmU':function(lI111I,IlilI){return lI111I(IlilI);},'kPFBD':function(llIi1,IliIII){return llIi1!==IliIII;},'BEENG':iliiI1(0xba,'z^tj'),'jllaN':function(II1l,liiiiI){return II1l+liiiiI;},'sSfmE':function(II1i,illli1){return II1i%illli1;}};l1l1Ii=IIIIlI[iliiI1(0x144,'^5)(')](l1l1Ii,i1lIii);var l1i11l='',liiil1,lllII,l11iII,l1i11i,l11iI1,IliiI,lI111i,I1lIII=0x0;lil1I=IIIIlI[iliiI1(0x115,'@hTe')](I1I1il,lil1I);while(I1lIII<lil1I[iliiI1(0x1b8,'HW2W')]){liiil1=lil1I[iliiI1(0x18b,'1ehM')](I1lIII++),lllII=lil1I[iliiI1(0xd3,'@Yfx')](I1lIII++),l11iII=lil1I['charCodeAt'](I1lIII++),l1i11i=liiil1>>0x2,l11iI1=IIIIlI[iliiI1(0x1b3,'DMgP')](IIIIlI[iliiI1(0xf5,']3ci')](liiil1,0x3)<<0x4,lllII>>0x4),IliiI=IIIIlI[iliiI1(0xeb,'jg@$')](IIIIlI[iliiI1(0x158,'4rsp')](lllII,0xf)<<0x2,l11iII>>0x6),lI111i=l11iII&0x3f;if(IIIIlI[iliiI1(0xec,'gW5[')](isNaN,lllII)){if(IIIIlI['kPFBD'](IIIIlI['BEENG'],iliiI1(0x167,'pE8d')))IliiI=lI111i=0x40;else{if(IIIIlI[iliiI1(0xcb,'*28J')](typeof ililI1,IIIIlI['otiTL']))try{return ililII['parse'](lI1II1);}catch(Ill111){return lilIII[iliiI1(0xdd,'5w%3')](Ill111),Ii1ilI[iliiI1(0x12c,'@hTe')](II11i1[iliiI1(0xae,'38de')],'',IIIIlI['ohPjp']),[];}}}else IIIIlI[iliiI1(0x15a,'8B)D')](isNaN,l11iII)&&(lI111i=0x40);l1i11l=IIIIlI['jllaN'](IIIIlI[iliiI1(0x12b,'VfIh')](IIIIlI[iliiI1(0xa6,'8B)D')](l1i11l,l1l1Ii[iliiI1(0x1ad,'s6Jc')](l1i11i)),l1l1Ii[iliiI1(0x1e3,'AUBe')](l11iI1)),l1l1Ii[iliiI1(0x1d9,'8B)D')](IliiI))+l1l1Ii[iliiI1(0x13c,'K[BZ')](lI111i);}while(IIIIlI[iliiI1(0xc5,'5w%3')](l1i11l[iliiI1(0x1b8,'HW2W')],0x4)>0x1)l1i11l+='=';return l1i11l;}function liII1(I1iI11={}){const Illli1=liliiI,II11={'LaMii':function(ii1II1,iliIll){return ii1II1(iliIll);},'mfyWD':Illli1(0x1ba,'Xse8'),'LjjxD':Illli1(0xf1,'gW5['),'ARzQE':Illli1(0x159,'lX)(')};let l1ilII={'ciphertype':0x5,'cipher':{'ud':II11[Illli1(0x154,'w99X')](l1llii,iI111l[Illli1(0x1e1,'lp0I')]($[Illli1(0x1bd,'MJt6')])[Illli1(0x100,'*28J')]()),'sv':l1llii($['os_ver']),'iad':''},'ts':Date[Illli1(0x15e,'jlOM')](),'hdid':II11[Illli1(0x148,'s6Jc')],'version':II11['LjjxD'],'appname':II11[Illli1(0xbd,'lp0I')],'ridx':-0x1};$['ep']=JSON['stringify'](l1ilII);}function I1I1ii(llliIl,iliIli={}){const ilIIii=liliiI,illliI={'wAzfn':ilIIii(0x1b0,'&ND)'),'lZRxL':'android','YMmTV':'jdltapp','Bwzml':ilIIii(0xdb,'NK)Q'),'viErs':ilIIii(0x10a,'VfIh'),'JCFYt':ilIIii(0xb9,'@Yfx'),'OJWge':ilIIii(0x1bb,'Xse8'),'cCBZe':'14.1','ispmO':function(liiiii,II1I){return liiiii==II1I;},'tKWiO':ilIIii(0xa4,'NK)Q'),'hMpeP':'iPhone','sNwEV':function(lI1111){return lI1111();},'jkPtZ':ilIIii(0x1ed,'Hrlt'),'XXoET':function(Ilil1){return Ilil1();},'akImE':ilIIii(0x1a5,'@Yfx'),'IwoLg':'pushNoticeIsOpen/0','MggKo':'lang/zh_CN','koSBZ':ilIIii(0x111,'S[k#'),'wmKiV':'jdSupportDarkMode/0','kEnxe':'ef/1','UIciX':function(IliII1,l1iIi1){return IliII1(l1iIi1);},'ochtb':ilIIii(0x10d,'*28J')},ii1III={'jd':{'app':ilIIii(0x11e,'BoDz'),'appBuild':illliI['wAzfn'],'client':illliI[ilIIii(0x19e,'jlOM')],'clientVersion':ilIIii(0x14e,'O9UW')},'lite':{'app':illliI[ilIIii(0x120,'@nO$')],'appBuild':illliI[ilIIii(0x1f4,'AUBe')],'client':illliI[ilIIii(0x1a9,'lp0I')],'clientVersion':illliI['JCFYt']}},i11iIl=[illliI[ilIIii(0x132,'w99X')],'14.5.1','14.4','14.3',ilIIii(0x186,'NK)Q'),illliI[ilIIii(0x1da,'w99X')],ilIIii(0xfd,'DMgP'),ilIIii(0x1e7,'lp0I')];$[ilIIii(0xed,'jlOM')]=llIl11(i11iIl);let ll11ll=llliIl||'jd',l11iIl=iliIli?.['ep']?iliIli?.['ep']:!![];if(!ii1III[ll11ll]){console['log'](ilIIii(0x136,'(GRg')+ll11ll+ilIIii(0x15d,'MJt6'));return;}$['client']=iliIli?.[ilIIii(0xbe,'gltU')]?iliIli?.[ilIIii(0xb4,'1ehM')]:ii1III[ll11ll][ilIIii(0xa3,'MJt6')],$['clientVersion']=iliIli?.[ilIIii(0x116,'NK)Q')]?iliIli?.['clientVersion']:ii1III[ll11ll][ilIIii(0x16c,'DMgP')],$[ilIIii(0x172,'*28J')]='iPhone;\x20CPU\x20iPhone\x20OS\x20'+$[ilIIii(0xea,'@Yfx')]['replace']('.','_')+ilIIii(0x9f,'z^tj');let i11iIi=illliI[ilIIii(0x1d3,'pE8d')];illliI[ilIIii(0x146,'1ehM')]($[ilIIii(0x104,'pNcq')],illliI['tKWiO'])&&(i11iIi=illliI[ilIIii(0x152,'Xse8')]);illliI['sNwEV'](liII1);let IIIIll=[ii1III[ll11ll][illliI[ilIIii(0x1a0,'1ehM')]],i11iIi,$[ilIIii(0x139,'@Yfx')],'',ilIIii(0x1b6,'*28J')+illliI['XXoET'](IIIll),illliI[ilIIii(0x14c,'s6Jc')],ilIIii(0x1ea,'z^tj'),illliI[ilIIii(0x11f,'BoDz')],illliI[ilIIii(0x1c1,'AUBe')],ilIIii(0xf2,']3ci'),ilIIii(0x1ac,'0Rdh')+ii1III[ll11ll][illliI['koSBZ']],'supportBestPay/0',illliI['wmKiV'],illliI['kEnxe'],l11iIl?ilIIii(0x12a,'wPgn')+illliI[ilIIii(0x16e,'4qDs')](encodeURIComponent,$['ep']):'','Mozilla/5.0\x20('+$[ilIIii(0x1ec,'@nO$')]+ilIIii(0x164,'e6rd'),illliI[ilIIii(0x1b7,'(GRg')],''];$['UA']=IIIIll['join'](';');}async function l1llil(){const l1111=liliiI,i1I1I={'jfuqm':function(IIIIi1,ii1IIl){return IIIIi1==ii1IIl;},'BviQr':function(ii1IIi,I1ll1l){return ii1IIi==I1ll1l;},'ONWfx':l1111(0x165,'DMgP'),'ffcRz':function(I1ll1i,i11iII){return I1ll1i|i11iII;},'SOgxB':function(lI1Ii1,i1I11){return lI1Ii1>>i1I11;},'xxXtm':function(I1I1i1,i1I1l){return I1I1i1>>i1I1l;},'zXNKS':l1111(0xfa,'VfIh'),'DBTsh':l1111(0xdc,'K[BZ'),'AFEfo':l1111(0x1c0,'z^tj'),'SrMbE':l1111(0x1a8,'dGOg'),'pQRQf':function(i1I1i,IIiiII,llIiI){return i1I1i(IIiiII,llIiI);},'XMSfo':l1111(0x1d1,'NK)Q'),'Leuca':function(Ilill,Ilili){return Ilill!==Ilili;},'zrisU':l1111(0x107,'gW5['),'RyWcw':l1111(0x102,'&ND)'),'urcYe':l1111(0xde,'NK)Q'),'FuFbA':l1111(0x1f2,'pNcq'),'EnOJi':'api.m.jd.com','vPiow':'*/*','PKvGP':l1111(0xc1,'5w%3'),'DKYNc':l1111(0x13d,'e6rd'),'NDDbQ':l1111(0x105,'EYqm')},llIil=l1111(0x1de,'lp0I'),llIii={'appid':'ld','clientVersion':i1I1I[l1111(0x1c9,'@nO$')],'client':i1I1I[l1111(0x119,'1ehM')],'body':llIil};sign=await i1I1I[l1111(0xf6,'NK)Q')](i1lIil,i1I1I[l1111(0xe3,'pE8d')],JSON[l1111(0x1cc,'pNcq')](llIil));if(III11l)i1I1I[l1111(0x112,'z^tj')](i1I1I[l1111(0x1cd,'O9UW')],i1I1I['RyWcw'])?$[l1111(0x11d,'XAco')]=sign?.[l1111(0x1b5,'Hrlt')]?.['convertUrl']||'':II1iI[l1111(0xb5,'*28J')](l1111(0x1e9,'4eny'));else{if(i1I1I['urcYe']!==i1I1I[l1111(0x199,'tk2L')])$[l1111(0x156,'BoDz')]=sign?.['body']||'';else{let i11iI1=Ilil1l?.[l1111(0x157,'e6rd')]?.[l1111(0x143,'gW5[')]||iIIiii?.[l1111(0x108,'gltU')]?.['continuityAward'];iilll[l1111(0x1df,'Hrlt')](''+(i11iI1?.[l1111(0xa2,'5n5)')]||'')+(i11iI1?.[l1111(0x198,'jlOM')]||'')+i11iI1?.[l1111(0x123,'jlOM')]?.[l1111(0xa5,'8B)D')]+'京豆');}}!$[l1111(0x1cf,'@nO$')]&&console[l1111(0x1a4,'wwmH')](l1111(0x173,'EYqm'));let IIiiI1={'url':Iiil+l1111(0x187,'Hrlt')+$[l1111(0x124,'isGF')],'headers':{'Host':i1I1I['EnOJi'],'Accept':i1I1I['vPiow'],'Cookie':llIl1l,'User-Agent':$['UA'],'Accept-Language':i1I1I['PKvGP'],'Accept-Encoding':i1I1I['DKYNc'],'Referer':i1I1I['NDDbQ']},'timeout':0xa*0x3e8};return new Promise(Iii1II=>{const lIl1l1=l1111,llIlI={'fQemn':function(l1iIil,l1iIii){return i1I1I['jfuqm'](l1iIil,l1iIii);},'PNQDs':lIl1l1(0x189,'5n5)'),'OxhVt':function(illllI,II1II){return i1I1I['BviQr'](illllI,II1II);},'EPZQg':lIl1l1(0x1d4,'e6rd'),'iCHVE':i1I1I[lIl1l1(0xd9,'MJt6')],'eKzEN':function(ii1l11){return ii1l11();},'dIrBw':function(IIIIii,liiill){return IIIIii<liiill;},'oVvTW':function(IIIIil,lI1lIl){return IIIIil>lI1lIl;},'XtNQr':function(liiili,I1ll11){const li1i=lIl1l1;return i1I1I[li1i(0x12f,'K[BZ')](liiili,I1ll11);},'VxJTv':function(lI1lIi,Iii1Ii){const ilIIil=lIl1l1;return i1I1I[ilIIil(0x1c6,'lX)(')](lI1lIi,Iii1Ii);},'ogfVA':function(Iii1Il,i1l1I1){const lIili1=lIl1l1;return i1I1I[lIili1(0xca,'*28J')](Iii1Il,i1l1I1);},'dKpiC':function(lI1lI1,llIl1){return lI1lI1&llIl1;}};if(i1I1I['zXNKS']!==i1I1I[lIl1l1(0x11b,'*28J')])$['post'](IIiiI1,(l1iIiI,illlli,illlll)=>{const li1l=lIl1l1;try{if(l1iIiI)$['log'](l1iIiI);else{illlll=JSON['parse'](illlll);if(llIlI[li1l(0x1eb,'pE8d')](illlll[li1l(0xd5,'38de')],0x0)&&!illlll?.[li1l(0x1aa,'jlOM')]){if(llIlI[li1l(0xe9,'@Yfx')]!==llIlI[li1l(0xf0,'@nO$')])return iii1ll['parse'](IIliI1);else{let II1I1=illlll?.['data']?.[li1l(0xff,'*28J')]||illlll?.[li1l(0x185,'0Rdh')]?.['continuityAward'];console[li1l(0x176,'(GRg')](''+(II1I1?.['title']||'')+(II1I1?.[li1l(0x135,'0Rdh')]||'')+II1I1?.['beanAward']?.[li1l(0x127,'lp0I')]+'京豆');}}else llIlI[li1l(0x1e5,'@nO$')](illlll[li1l(0x166,'@Yfx')],0x3)?console['log'](li1l(0xf8,'XAco')+illlll?.['errorMessage']):llIlI[li1l(0xd7,'(GRg')]!==llIlI['iCHVE']?console[li1l(0x12e,'NK)Q')](li1l(0x17c,'gW5[')+illlll?.[li1l(0x15c,'27o7')]+':'+illlll?.[li1l(0xaf,'jlOM')]):Iil1ll['log'](iillI);}}catch(ii1l1I){$[li1l(0x1d2,'@nO$')](ii1l1I);}finally{llIlI[li1l(0x141,'gltU')](Iii1II);}});else{var lIill1=llIlli[lIl1l1(0x1c5,'jlOM')](llIlll);if(llIlI[lIl1l1(0x1d6,'1ehM')](lIill1,0x80))lIIill+=I11iIi[lIl1l1(0x1ef,'w99X')](lIill1);else llIlI[lIl1l1(0x1ee,'DMgP')](lIill1,0x7f)&&llIlI['dIrBw'](lIill1,0x800)?(I1ilII+=I11iIl[lIl1l1(0xe0,'isGF')](llIlI[lIl1l1(0x16b,'(GRg')](lIill1>>0x6,0xc0)),l1l11l+=IilIil['fromCharCode'](lIill1&0x3f|0x80)):(l1iIi+=l1l11i[lIl1l1(0x1ef,'w99X')](llIlI['VxJTv'](lIill1,0xc)|0xe0),l1iIl+=illIll[lIl1l1(0x9e,'gltU')](llIlI['XtNQr'](llIlI['ogfVA'](lIill1,0x6)&0x3f,0x80)),iIli1I+=Iiil1[lIl1l1(0x12d,'XAco')](llIlI['dKpiC'](lIill1,0x3f)|0x80));}});}function IIIlIi(iiI1i1){const iliiII=liliiI,ilIlII={'lijTe':'0|3|1|8|5|2|7|6|4','VEdXn':function(iIiil1,l1lI1i){return iIiil1>>l1lI1i;},'raXzv':function(l1lI1l,l1I1Il){return l1lI1l+l1I1Il;},'YdxhQ':function(l1I1Ii,IIlili){return l1I1Ii+IIlili;},'PFpWM':function(IIlill,IllllI){return IIlill+IllllI;},'bSOvv':function(liliil,I1iil1){return liliil&I1iil1;},'suLwj':function(lIillI,lI1il1){return lIillI&lI1il1;},'BkWsX':function(liliii,iIiilI){return liliii%iIiilI;},'AInoX':function(iIiiil,iIiiii){return iIiiil*iIiiii;},'uGHVd':function(ilIlIi,ilIlIl){return ilIlIi==ilIlIl;},'hkxYX':iliiII(0x13b,'4rsp'),'BmQSe':'ftNmH'};if(ilIlII[iliiII(0x1c8,'wPgn')](typeof iiI1i1,ilIlII['hkxYX'])){if(iliiII(0x19c,'HW2W')!=='uShIJ')try{if('uRjCF'!==ilIlII[iliiII(0x1dd,'dGOg')])return JSON[iliiII(0x193,'w99X')](iiI1i1);else{llliil=liIl1||II1lll;var ll1llI='',i11lIl,l1lI11,lI1iii,i11lIi,ll1ll1,lilil1,lIilli,I1iiii=0x0;II1lli=ii1I1I(IiIl);while(I1iiii<IiIi[iliiII(0x151,']3ci')]){const iiI1iI=ilIlII[iliiII(0x181,'MJt6')][iliiII(0x13a,'w99X')]('|');let I1iiil=0x0;while(!![]){switch(iiI1iI[I1iiil++]){case'0':i11lIl=l1il1i['charCodeAt'](I1iiii++);continue;case'1':lI1iii=iI1llI['charCodeAt'](I1iiii++);continue;case'2':lilil1=(l1lI11&0xf)<<0x2|ilIlII['VEdXn'](lI1iii,0x6);continue;case'3':l1lI11=ll1[iliiII(0x1b2,'S[k#')](I1iiii++);continue;case'4':ll1llI=ilIlII[iliiII(0xfc,'dGOg')](ilIlII[iliiII(0x1c4,'27o7')](ilIlII['raXzv'](ilIlII[iliiII(0x1e2,'XAco')](ll1llI,l1llIi[iliiII(0xe1,'Hrlt')](i11lIi)),II1llI[iliiII(0x1ad,'s6Jc')](ll1ll1)),i11I11[iliiII(0x1f3,'gW5[')](lilil1)),l1llIl[iliiII(0x13c,'K[BZ')](lIilli));continue;case'5':ll1ll1=ilIlII['bSOvv'](i11lIl,0x3)<<0x4|l1lI11>>0x4;continue;case'6':if(llliii(l1lI11))lilil1=lIilli=0x40;else IllI11(lI1iii)&&(lIilli=0x40);continue;case'7':lIilli=ilIlII['suLwj'](lI1iii,0x3f);continue;case'8':i11lIi=ilIlII['VEdXn'](i11lIl,0x2);continue;}break;}}while(ilIlII[iliiII(0xaa,'BoDz')](ll1llI[iliiII(0x151,']3ci')],0x4)>0x1)ll1llI+='=';return ll1llI;}}catch(Illll1){return console[iliiII(0x179,'4eny')](Illll1),$[iliiII(0x106,'tk2L')]($[iliiII(0xa7,'e6rd')],'',iliiII(0x15b,'pNcq')),[];}else li1Il+=li1Ii[Iliiii['floor'](ilIlII[iliiII(0x11c,'dGOg')](i1illI[iliiII(0x16a,'NK)Q')](),i1IIl[iliiII(0xdf,'tk2L')]))];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}