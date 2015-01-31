YUI.add("moodle-atto_structure-button",function(e,t){var n="atto_structure",r="structure_width",i="structure_height",s="atto_structure",o={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",WIDTHCONTROL:"widthcontrol",HEIGHTCONTROL:"heightcontrol"},u={WIDTHCONTROL:".widthcontrol",HEIGHTCONTROL:".heightcontrol"},a='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><strong>{{get_string "instructions" component}}</strong><table><tr><td><label for="{{elementid}}_{{WIDTHCONTROL}}">{{get_string "width" component}}</label></td><td><input class="{{CSS.WIDTHCONTROL}}" size="6" id="{{elementid}}_{{WIDTHCONTROL}}" name="{{elementid}}_{{WIDTHCONTROL}}"value="{{defaultwidth}}" /></td><td></td></tr><tr><td><label for="{{elementid}}_{{HEIGHTCONTROL}}">{{get_string "height" component}}</label></td><td><input class="{{CSS.HEIGHTCONTROL}}" size="6" id="{{elementid}}_{{HEIGHTCONTROL}}" name="{{elementid}}_{{HEIGHTCONTROL}}" value="{{defaultheight}}" /><td><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></td></tr></table></div></form>';e.namespace("M.atto_structure").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_usercontextid:null,_filename:null,initializer:function(e){this._usercontextid=e.usercontextid;var t=(new Date).getTime();this._filename=t;var n=this.get("host"),r=n.get("filepickeroptions");if(!r.image||!r.image.itemid)return;this._itemid=r.image.itemid;if(this.get("disabled"))return;this.addButton({icon:"icon",iconComponent:"atto_structure",buttonName:"icon",callback:this._displayDialogue,callbackArgs:"icon"})},_displayDialogue:function(t,r){t.preventDefault();var i=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:"768px",focusAfterHide:r}),s=e.Node.create("<iframe></iframe>");s.setStyles({height:"510px",border:"none",width:"100%"}),s.setAttribute("src",this._getIframeURL()),s.setAttribute("id","sketch"),s.setAttribute("data-toolbars","reaction");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o).append(s),i.set("bodyContent",u),i.show(),this.markUpdated()},_getFormContent:function(t){var s=e.Handlebars.compile(a),u=e.Node.create(s({elementid:this.get("host").get("elementid"),CSS:o,WIDTHCONTROL:r,HEIGHTCONTROL:i,component:n,defaultwidth:this.get("defaultwidth"),defaultheight:this.get("defaultheight"),clickedicon:t}));return this._form=u,this._form.one("."+o.INPUTSUBMIT).on("click",this._getImgURL,this),u},_getIframeURL:function(){return this.get("path")+"/editor.html"},_uploadFile:function(e,t,n){var r=new XMLHttpRequest,i="png";r.onreadystatechange=function(){return function(){if(r.readyState===4&&r.status===200){var e=r.responseText,t=e.indexOf("success<error>");if(t<1)return}}}(this);var s="datatype=uploadfile";s+="&paramone="+encodeURIComponent(e),s+="&paramtwo="+i,s+="&paramthree=image",s+="&requestid="+n,s+="&contextid="+this._usercontextid,s+="&component=user",s+="&filearea=draft",s+="&itemid="+this._itemid,r.open("POST",M.cfg.wwwroot+"/lib/editor/atto/plugins/structure/structurefilelib.php",!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.setRequestHeader("Cache-Control","no-cache"),r.setRequestHeader("Content-length",s.length),r.setRequestHeader("Connection","close"),r.send(s)},_getImgURL:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=this._form.one(u.WIDTHCONTROL),r="",i=(new Date).getTime(),s="upfile_"+i+".png",o="";n.get("value")?r=n.get("value"):r=this.get("defaultwidth");var a=this._form.one(u.HEIGHTCONTROL),f="";a.get("value")?f=a.get("value"):f=this.get("defaultheight");var l=this;e.Get.js([this.get("path")+"/gui/gui.nocache.js",this.get("path")+"/js/marvinjslauncher.js",this.get("path")+"/js/promise-0.1.1.min.js"],function(e){if(e)return;var t;MarvinJSUtil.getEditor("#sketch").then(function(e){t=new MarvinControllerClass(e),exportPromise=t.sketcherInstance.exportStructure("mrv",null),exportPromise.then(function(e){function n(e,n){imgURL=marvin.ImageExporter.mrvToDataUrl(e,"image/png",t),l._uploadFile(imgURL,"1",i);var r=M.cfg.wwwroot,s=r+"/draftfile.php/"+l._usercontextid+"/user/draft/"+l._itemid+"/"+n;o='<img name="pict" src="'+s+'" alt="MarvinJS PNG"/>',l.editor.focus(),l.get("host").insertContentAtFocusPoint(o),l.markUpdated()}var t={carbonLabelVisible:!1,chiralFlagVisible:!0,valenceErrorVisible:!0,lonePairsVisible:!0,implicitHydrogen:"TERMINAL_AND_HETERO",width:r,height:f};marvin.onReady(function(){n(e,s)})})}),MarvinControllerClass=function(){function e(e){this.sketcherInstance=e}return e}()})}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},defaultwidth:{value:"600"},defaultheight:{value:"100"},path:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
