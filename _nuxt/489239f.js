(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{410:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));const o="year",r="month",h="day",d="hour",l="minute",_="second",c="millisecond",m={en:["January","February","March","April","May","June","July","August","September","October","November","December"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],ptBr:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]};var w={parse(t,e="-",n=/[.:]/){if(t instanceof Date)return t;if("string"==typeof t){let o,r;const h=t.split(" ");o=h[0].split(e).map((t=>parseInt(t,10))),r=h[1]&&h[1].split(n),o[1]=o[1]-1;let d=o;return r&&r.length&&(4==r.length&&(r[3]="0."+r[3],r[3]=1e3*parseFloat(r[3])),d=d.concat(r)),new Date(...d)}},to_string(t,e=!1){if(!(t instanceof Date))throw new TypeError("Invalid argument type");const n=this.get_date_values(t).map(((t,i)=>(1===i&&(t+=1),f(t+"",6===i?3:2,"0")))),o=`${n[0]}-${n[1]}-${n[2]}`,r=`${n[3]}:${n[4]}:${n[5]}.${n[6]}`;return o+(e?" "+r:"")},format(t,e="YYYY-MM-DD HH:mm:ss.SSS",n="en"){const o=this.get_date_values(t).map((t=>f(t,2,0))),r={YYYY:o[0],MM:f(+o[1]+1,2,0),DD:o[2],HH:o[3],mm:o[4],ss:o[5],SSS:o[6],D:o[2],MMMM:m[n][+o[1]],MMM:m[n][+o[1]]};let h=e;const d=[];return Object.keys(r).sort(((a,b)=>b.length-a.length)).forEach((t=>{h.includes(t)&&(h=h.replace(t,`$${d.length}`),d.push(r[t]))})),d.forEach(((t,i)=>{h=h.replace(`$${i}`,t)})),h},diff(t,e,n=h){let o,r,d,l,_,c,m;return o=t-e,r=o/1e3,l=r/60,d=l/60,_=d/24,c=_/30,m=c/12,n.endsWith("s")||(n+="s"),Math.floor({milliseconds:o,seconds:r,minutes:l,hours:d,days:_,months:c,years:m}[n])},today(){const t=this.get_date_values(new Date).slice(0,3);return new Date(...t)},now:()=>new Date,add(t,e,n){e=parseInt(e,10);const m=[t.getFullYear()+(n===o?e:0),t.getMonth()+(n===r?e:0),t.getDate()+(n===h?e:0),t.getHours()+(n===d?e:0),t.getMinutes()+(n===l?e:0),t.getSeconds()+(n===_?e:0),t.getMilliseconds()+(n===c?e:0)];return new Date(...m)},start_of(t,e){const n={[o]:6,[r]:5,[h]:4,[d]:3,[l]:2,[_]:1,[c]:0};function m(t){return n[t]<=n[e]}const w=[t.getFullYear(),m(o)?0:t.getMonth(),m(r)?1:t.getDate(),m(h)?0:t.getHours(),m(d)?0:t.getMinutes(),m(l)?0:t.getSeconds(),m(_)?0:t.getMilliseconds()];return new Date(...w)},clone(t){return new Date(...this.get_date_values(t))},get_date_values:t=>[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()],get_days_in_month(t){const e=[31,28,31,30,31,30,31,31,30,31,30,31],n=t.getMonth();if(1!==n)return e[n];const o=t.getFullYear();return o%4==0&&o%100!=0||o%400==0?29:28}};function f(t,e,n){return t+="",e>>=0,n=String(void 0!==n?n:" "),t.length>e?String(t):((e-=t.length)>n.length&&(n+=n.repeat(e/n.length)),n.slice(0,e)+String(t))}function y(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function k(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",t);for(let t in e)if("append_to"===t){e.append_to.appendChild(n)}else"innerHTML"===t?n.innerHTML=e.innerHTML:n.setAttribute(t,e[t]);return n}function v(t,e,n,o){const r=function(t,e,n,o,r="0.4s",h="0.1s"){const d=t.querySelector("animate");if(d)return y.attr(d,{attributeName:e,from:n,to:o,dur:r,begin:"click + "+h}),t;const l=k("animate",{attributeName:e,from:n,to:o,dur:r,begin:h,calcMode:"spline",values:n+";"+o,keyTimes:"0; 1",keySplines:x("ease-out")});return t.appendChild(l),t}(t,e,n,o);if(r===t){const t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),t.eventName="click",r.dispatchEvent(t)}}function x(t){return{ease:".25 .1 .25 1",linear:"0 0 1 1","ease-in":".42 0 1 1","ease-out":"0 0 .58 1","ease-in-out":".42 0 .58 1"}[t]}y.on=(element,t,e,n)=>{n?y.delegate(element,t,e,n):(n=e,y.bind(element,t,n))},y.off=(element,t,e)=>{element.removeEventListener(t,e)},y.bind=(element,t,e)=>{t.split(/\s+/).forEach((function(t){element.addEventListener(t,e)}))},y.delegate=(element,t,e,n)=>{element.addEventListener(t,(function(t){const o=t.target.closest(e);o&&(t.delegatedTarget=o,n.call(this,t,o))}))},y.closest=(t,element)=>element?element.matches(t)?element:y.closest(t,element.parentNode):null,y.attr=(element,t,e)=>{if(!e&&"string"==typeof t)return element.getAttribute(t);if("object"!=typeof t)element.setAttribute(t,e);else for(let e in t)y.attr(element,e,t[e])};class ${constructor(t,e){this.set_defaults(t,e),this.prepare(),this.draw(),this.bind()}set_defaults(t,e){this.action_completed=!1,this.gantt=t,this.task=e}prepare(){this.prepare_values(),this.prepare_helpers()}prepare_values(){this.invalid=this.task.invalid,this.height=this.gantt.options.bar_height,this.x=this.compute_x(),this.y=this.compute_y(),this.corner_radius=this.gantt.options.bar_corner_radius,this.duration=w.diff(this.task._end,this.task._start,"hour")/this.gantt.options.step,this.width=this.gantt.options.column_width*this.duration,this.progress_width=this.gantt.options.column_width*this.duration*(this.task.progress/100)||0,this.group=k("g",{class:"bar-wrapper "+(this.task.custom_class||""),"data-id":this.task.id}),this.bar_group=k("g",{class:"bar-group",append_to:this.group}),this.handle_group=k("g",{class:"handle-group",append_to:this.group})}prepare_helpers(){SVGElement.prototype.getX=function(){return+this.getAttribute("x")},SVGElement.prototype.getY=function(){return+this.getAttribute("y")},SVGElement.prototype.getWidth=function(){return+this.getAttribute("width")},SVGElement.prototype.getHeight=function(){return+this.getAttribute("height")},SVGElement.prototype.getEndX=function(){return this.getX()+this.getWidth()}}draw(){this.draw_bar(),this.draw_progress_bar(),this.draw_label(),this.draw_resize_handles()}draw_bar(){this.$bar=k("rect",{x:this.x,y:this.y,width:this.width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar",append_to:this.bar_group}),v(this.$bar,"width",0,this.width),this.invalid&&this.$bar.classList.add("bar-invalid")}draw_progress_bar(){this.invalid||(this.$bar_progress=k("rect",{x:this.x,y:this.y,width:this.progress_width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar-progress",append_to:this.bar_group}),v(this.$bar_progress,"width",0,this.progress_width))}draw_label(){k("text",{x:this.x+this.width/2,y:this.y+this.height/2,innerHTML:this.task.name,class:"bar-label",append_to:this.bar_group}),requestAnimationFrame((()=>this.update_label_position()))}draw_resize_handles(){if(this.invalid)return;const t=this.$bar;k("rect",{x:t.getX()+t.getWidth()-9,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle right",append_to:this.handle_group}),k("rect",{x:t.getX()+1,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle left",append_to:this.handle_group}),this.task.progress&&this.task.progress<100&&(this.$handle_progress=k("polygon",{points:this.get_progress_polygon_points().join(","),class:"handle progress",append_to:this.handle_group}))}get_progress_polygon_points(){const t=this.$bar_progress;return[t.getEndX()-5,t.getY()+t.getHeight(),t.getEndX()+5,t.getY()+t.getHeight(),t.getEndX(),t.getY()+t.getHeight()-8.66]}bind(){this.invalid||this.setup_click_event()}setup_click_event(){y.on(this.group,"focus "+this.gantt.options.popup_trigger,(t=>{this.action_completed||(this.show_popup(),this.gantt.unselect_all(),this.group.classList.add("active"))})),y.on(this.group,"dblclick",(t=>{this.action_completed||this.gantt.trigger_event("click",[this.task])}))}show_popup(){if(this.gantt.bar_being_dragged)return;const t=w.format(this.task._start,"MMM D",this.gantt.options.language)+" - "+w.format(w.add(this.task._end,-1,"second"),"MMM D",this.gantt.options.language);this.gantt.show_popup({target_element:this.$bar,title:this.task.name,subtitle:t,task:this.task})}update_bar_position({x:t=null,width:e=null}){const n=this.$bar;if(t){if(!this.task.dependencies.map((t=>this.gantt.get_bar(t).$bar.getX())).reduce(((e,n)=>t>=n),t))return void(e=null);this.update_attr(n,"x",t)}e&&e>=this.gantt.options.column_width&&this.update_attr(n,"width",e),this.update_label_position(),this.update_handle_position(),this.update_progressbar_position(),this.update_arrow_position()}date_changed(){let t=!1;const{new_start_date:e,new_end_date:n}=this.compute_start_end_date();Number(this.task._start)!==Number(e)&&(t=!0,this.task._start=e),Number(this.task._end)!==Number(n)&&(t=!0,this.task._end=n),t&&this.gantt.trigger_event("date_change",[this.task,e,w.add(n,-1,"second")])}progress_changed(){const t=this.compute_progress();this.task.progress=t,this.gantt.trigger_event("progress_change",[this.task,t])}set_action_completed(){this.action_completed=!0,setTimeout((()=>this.action_completed=!1),1e3)}compute_start_end_date(){const t=this.$bar,e=t.getX()/this.gantt.options.column_width,n=w.add(this.gantt.gantt_start,e*this.gantt.options.step,"hour"),o=t.getWidth()/this.gantt.options.column_width;return{new_start_date:n,new_end_date:w.add(n,o*this.gantt.options.step,"hour")}}compute_progress(){const progress=this.$bar_progress.getWidth()/this.$bar.getWidth()*100;return parseInt(progress,10)}compute_x(){const{step:t,column_width:e}=this.gantt.options,n=this.task._start,o=this.gantt.gantt_start;let r=w.diff(n,o,"hour")/t*e;if(this.gantt.view_is("Month")){r=w.diff(n,o,"day")*e/30}return r}compute_y(){return this.gantt.options.header_height+this.gantt.options.padding+this.task._index*(this.height+this.gantt.options.padding)}get_snap_position(t){let e,n,o=t;return this.gantt.view_is("Week")?(e=t%(this.gantt.options.column_width/7),n=o-e+(e<this.gantt.options.column_width/14?0:this.gantt.options.column_width/7)):this.gantt.view_is("Month")?(e=t%(this.gantt.options.column_width/30),n=o-e+(e<this.gantt.options.column_width/60?0:this.gantt.options.column_width/30)):(e=t%this.gantt.options.column_width,n=o-e+(e<this.gantt.options.column_width/2?0:this.gantt.options.column_width)),n}update_attr(element,t,e){return e=+e,isNaN(e)||element.setAttribute(t,e),element}update_progressbar_position(){this.$bar_progress.setAttribute("x",this.$bar.getX()),this.$bar_progress.setAttribute("width",this.$bar.getWidth()*(this.task.progress/100))}update_label_position(){const t=this.$bar,label=this.group.querySelector(".bar-label");label.getBBox().width>t.getWidth()?(label.classList.add("big"),label.setAttribute("x",t.getX()+t.getWidth()+5)):(label.classList.remove("big"),label.setAttribute("x",t.getX()+t.getWidth()/2))}update_handle_position(){const t=this.$bar;this.handle_group.querySelector(".handle.left").setAttribute("x",t.getX()+1),this.handle_group.querySelector(".handle.right").setAttribute("x",t.getEndX()-9);const e=this.group.querySelector(".handle.progress");e&&e.setAttribute("points",this.get_progress_polygon_points())}update_arrow_position(){this.arrows=this.arrows||[];for(let t of this.arrows)t.update()}}class M{constructor(t,e,n){this.gantt=t,this.from_task=e,this.to_task=n,this.calculate_path(),this.draw()}calculate_path(){let t=this.from_task.$bar.getX()+this.from_task.$bar.getWidth()/2;const e=()=>this.to_task.$bar.getX()<t+this.gantt.options.padding&&t>this.from_task.$bar.getX()+this.gantt.options.padding;for(;e();)t-=10;const n=this.gantt.options.header_height+this.gantt.options.bar_height+(this.gantt.options.padding+this.gantt.options.bar_height)*this.from_task.task._index+this.gantt.options.padding,o=this.to_task.$bar.getX()-this.gantt.options.padding/2,r=this.gantt.options.header_height+this.gantt.options.bar_height/2+(this.gantt.options.padding+this.gantt.options.bar_height)*this.to_task.task._index+this.gantt.options.padding,h=this.from_task.task._index>this.to_task.task._index,d=this.gantt.options.arrow_curve,l=h?1:0,_=h?-d:d,c=h?r+this.gantt.options.arrow_curve:r-this.gantt.options.arrow_curve;if(this.path=`\n            M ${t} ${n}\n            V ${c}\n            a ${d} ${d} 0 0 ${l} ${d} ${_}\n            L ${o} ${r}\n            m -5 -5\n            l 5 5\n            l -5 5`,this.to_task.$bar.getX()<this.from_task.$bar.getX()+this.gantt.options.padding){const e=this.gantt.options.padding/2-d,h=this.to_task.$bar.getY()+this.to_task.$bar.getHeight()/2-_,c=this.to_task.$bar.getX()-this.gantt.options.padding;this.path=`\n                M ${t} ${n}\n                v ${e}\n                a ${d} ${d} 0 0 1 -${d} ${d}\n                H ${c}\n                a ${d} ${d} 0 0 ${l} -${d} ${_}\n                V ${h}\n                a ${d} ${d} 0 0 ${l} ${d} ${_}\n                L ${o} ${r}\n                m -5 -5\n                l 5 5\n                l -5 5`}}draw(){this.element=k("path",{d:this.path,"data-from":this.from_task.task.id,"data-to":this.to_task.task.id})}update(){this.calculate_path(),this.element.setAttribute("d",this.path)}}class D{constructor(t,e){this.parent=t,this.custom_html=e,this.make()}make(){this.parent.innerHTML='\n            <div class="title"></div>\n            <div class="subtitle"></div>\n            <div class="pointer"></div>\n        ',this.hide(),this.title=this.parent.querySelector(".title"),this.subtitle=this.parent.querySelector(".subtitle"),this.pointer=this.parent.querySelector(".pointer")}show(t){if(!t.target_element)throw new Error("target_element is required to show popup");t.position||(t.position="left");const e=t.target_element;if(this.custom_html){let html=this.custom_html(t.task);html+='<div class="pointer"></div>',this.parent.innerHTML=html,this.pointer=this.parent.querySelector(".pointer")}else this.title.innerHTML=t.title,this.subtitle.innerHTML=t.subtitle,this.parent.style.width=this.parent.clientWidth+"px";let n;e instanceof HTMLElement?n=e.getBoundingClientRect():e instanceof SVGElement&&(n=t.target_element.getBBox()),"left"===t.position&&(this.parent.style.left=n.x+(n.width+10)+"px",this.parent.style.top=n.y+"px",this.pointer.style.transform="rotateZ(90deg)",this.pointer.style.left="-7px",this.pointer.style.top="2px"),this.parent.style.opacity=1}hide(){this.parent.style.opacity=0}}n(411);const Y={QUARTER_DAY:"Quarter Day",HALF_DAY:"Half Day",DAY:"Day",WEEK:"Week",MONTH:"Month",YEAR:"Year"};class E{constructor(t,e,n){this.setup_wrapper(t),this.setup_options(n),this.setup_tasks(e),this.change_view_mode(),this.bind_events()}setup_wrapper(element){let t,e;if("string"==typeof element&&(element=document.querySelector(element)),element instanceof HTMLElement)e=element,t=element.querySelector("svg");else{if(!(element instanceof SVGElement))throw new TypeError("Frappé Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");t=element}t?(this.$svg=t,this.$svg.classList.add("gantt")):this.$svg=k("svg",{append_to:e,class:"gantt"}),this.$container=document.createElement("div"),this.$container.classList.add("gantt-container");this.$svg.parentElement.appendChild(this.$container),this.$container.appendChild(this.$svg),this.popup_wrapper=document.createElement("div"),this.popup_wrapper.classList.add("popup-wrapper"),this.$container.appendChild(this.popup_wrapper)}setup_options(t){const e={header_height:50,column_width:30,step:24,view_modes:[...Object.values(Y)],bar_height:20,bar_corner_radius:3,arrow_curve:5,padding:18,view_mode:"Day",date_format:"YYYY-MM-DD",popup_trigger:"click",custom_popup_html:null,language:"en"};this.options=Object.assign({},e,t)}setup_tasks(t){this.tasks=t.map(((t,i)=>{if(t._start=w.parse(t.start),t._end=w.parse(t.end),w.diff(t._end,t._start,"year")>10&&(t.end=null),t._index=i,!t.start&&!t.end){const e=w.today();t._start=e,t._end=w.add(e,2,"day")}!t.start&&t.end&&(t._start=w.add(t._end,-2,"day")),t.start&&!t.end&&(t._end=w.add(t._start,2,"day"));if(w.get_date_values(t._end).slice(3).every((t=>0===t))&&(t._end=w.add(t._end,24,"hour")),t.start&&t.end||(t.invalid=!0),"string"==typeof t.dependencies||!t.dependencies){let e=[];t.dependencies&&(e=t.dependencies.split(",").map((t=>t.trim())).filter((t=>t))),t.dependencies=e}return t.id||(t.id=function(t){return t.name+"_"+Math.random().toString(36).slice(2,12)}(t)),t})),this.setup_dependencies()}setup_dependencies(){this.dependency_map={};for(let t of this.tasks)for(let e of t.dependencies)this.dependency_map[e]=this.dependency_map[e]||[],this.dependency_map[e].push(t.id)}refresh(t){this.setup_tasks(t),this.change_view_mode()}change_view_mode(t=this.options.view_mode){this.update_view_scale(t),this.setup_dates(),this.render(),this.trigger_event("view_change",[t])}update_view_scale(t){this.options.view_mode=t,t===Y.DAY?(this.options.step=24,this.options.column_width=38):t===Y.HALF_DAY?(this.options.step=12,this.options.column_width=38):t===Y.QUARTER_DAY?(this.options.step=6,this.options.column_width=38):t===Y.WEEK?(this.options.step=168,this.options.column_width=140):t===Y.MONTH?(this.options.step=720,this.options.column_width=120):t===Y.YEAR&&(this.options.step=8760,this.options.column_width=120)}setup_dates(){this.setup_gantt_dates(),this.setup_date_values()}setup_gantt_dates(){this.gantt_start=this.gantt_end=null;for(let t of this.tasks)(!this.gantt_start||t._start<this.gantt_start)&&(this.gantt_start=t._start),(!this.gantt_end||t._end>this.gantt_end)&&(this.gantt_end=t._end);this.gantt_start=w.start_of(this.gantt_start,"day"),this.gantt_end=w.start_of(this.gantt_end,"day"),this.view_is([Y.QUARTER_DAY,Y.HALF_DAY])?(this.gantt_start=w.add(this.gantt_start,-7,"day"),this.gantt_end=w.add(this.gantt_end,7,"day")):this.view_is(Y.MONTH)?(this.gantt_start=w.start_of(this.gantt_start,"year"),this.gantt_end=w.add(this.gantt_end,1,"year")):this.view_is(Y.YEAR)?(this.gantt_start=w.add(this.gantt_start,-2,"year"),this.gantt_end=w.add(this.gantt_end,2,"year")):(this.gantt_start=w.add(this.gantt_start,-1,"month"),this.gantt_end=w.add(this.gantt_end,1,"month"))}setup_date_values(){this.dates=[];let t=null;for(;null===t||t<this.gantt_end;)t=t?this.view_is(Y.YEAR)?w.add(t,1,"year"):this.view_is(Y.MONTH)?w.add(t,1,"month"):w.add(t,this.options.step,"hour"):w.clone(this.gantt_start),this.dates.push(t)}bind_events(){this.bind_grid_click(),this.bind_bar_events()}render(){this.clear(),this.setup_layers(),this.make_grid(),this.make_dates(),this.make_bars(),this.make_arrows(),this.map_arrows_on_bars(),this.set_width(),this.set_scroll_position()}setup_layers(){this.layers={};const t=["grid","date","arrow","progress","bar","details"];for(let e of t)this.layers[e]=k("g",{class:e,append_to:this.$svg})}make_grid(){this.make_grid_background(),this.make_grid_rows(),this.make_grid_header(),this.make_grid_ticks(),this.make_grid_highlights()}make_grid_background(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+this.options.padding+(this.options.bar_height+this.options.padding)*this.tasks.length;k("rect",{x:0,y:0,width:t,height:e,class:"grid-background",append_to:this.layers.grid}),y.attr(this.$svg,{height:e+this.options.padding+100,width:"100%"})}make_grid_rows(){const t=k("g",{append_to:this.layers.grid}),e=k("g",{append_to:this.layers.grid}),n=this.dates.length*this.options.column_width,o=this.options.bar_height+this.options.padding;let r=this.options.header_height+this.options.padding/2;for(let h of this.tasks)k("rect",{x:0,y:r,width:n,height:o,class:"grid-row",append_to:t}),k("line",{x1:0,y1:r+o,x2:n,y2:r+o,class:"row-line",append_to:e}),r+=this.options.bar_height+this.options.padding}make_grid_header(){k("rect",{x:0,y:0,width:this.dates.length*this.options.column_width,height:this.options.header_height+10,class:"grid-header",append_to:this.layers.grid})}make_grid_ticks(){let t=0,e=this.options.header_height+this.options.padding/2,n=(this.options.bar_height+this.options.padding)*this.tasks.length;for(let o of this.dates){let r="tick";this.view_is(Y.DAY)&&1===o.getDate()&&(r+=" thick"),this.view_is(Y.WEEK)&&o.getDate()>=1&&o.getDate()<8&&(r+=" thick"),this.view_is(Y.MONTH)&&(o.getMonth()+1)%3==0&&(r+=" thick"),k("path",{d:`M ${t} ${e} v ${n}`,class:r,append_to:this.layers.grid}),this.view_is(Y.MONTH)?t+=w.get_days_in_month(o)*this.options.column_width/30:t+=this.options.column_width}}make_grid_highlights(){if(this.view_is(Y.DAY)){k("rect",{x:w.diff(w.today(),this.gantt_start,"hour")/this.options.step*this.options.column_width,y:0,width:this.options.column_width,height:(this.options.bar_height+this.options.padding)*this.tasks.length+this.options.header_height+this.options.padding/2,class:"today-highlight",append_to:this.layers.grid})}}make_dates(){for(let t of this.get_dates_to_draw())if(k("text",{x:t.lower_x,y:t.lower_y,innerHTML:t.lower_text,class:"lower-text",append_to:this.layers.date}),t.upper_text){const e=k("text",{x:t.upper_x,y:t.upper_y,innerHTML:t.upper_text,class:"upper-text",append_to:this.layers.date});e.getBBox().x2>this.layers.grid.getBBox().width&&e.remove()}}get_dates_to_draw(){let t=null;return this.dates.map(((e,i)=>{const n=this.get_date_info(e,t,i);return t=e,n}))}get_date_info(t,e,i){e||(e=w.add(t,1,"year"));const n={"Quarter Day_lower":w.format(t,"HH",this.options.language),"Half Day_lower":w.format(t,"HH",this.options.language),Day_lower:t.getDate()!==e.getDate()?w.format(t,"D",this.options.language):"",Week_lower:t.getMonth()!==e.getMonth()?w.format(t,"D MMM",this.options.language):w.format(t,"D",this.options.language),Month_lower:w.format(t,"MMMM",this.options.language),Year_lower:w.format(t,"YYYY",this.options.language),"Quarter Day_upper":t.getDate()!==e.getDate()?w.format(t,"D MMM",this.options.language):"","Half Day_upper":t.getDate()!==e.getDate()?t.getMonth()!==e.getMonth()?w.format(t,"D MMM",this.options.language):w.format(t,"D",this.options.language):"",Day_upper:t.getMonth()!==e.getMonth()?w.format(t,"MMMM",this.options.language):"",Week_upper:t.getMonth()!==e.getMonth()?w.format(t,"MMMM",this.options.language):"",Month_upper:t.getFullYear()!==e.getFullYear()?w.format(t,"YYYY",this.options.language):"",Year_upper:t.getFullYear()!==e.getFullYear()?w.format(t,"YYYY",this.options.language):""},o={x:i*this.options.column_width,lower_y:this.options.header_height,upper_y:this.options.header_height-25},r={"Quarter Day_lower":4*this.options.column_width/2,"Quarter Day_upper":0,"Half Day_lower":2*this.options.column_width/2,"Half Day_upper":0,Day_lower:this.options.column_width/2,Day_upper:30*this.options.column_width/2,Week_lower:0,Week_upper:4*this.options.column_width/2,Month_lower:this.options.column_width/2,Month_upper:12*this.options.column_width/2,Year_lower:this.options.column_width/2,Year_upper:30*this.options.column_width/2};return{upper_text:n[`${this.options.view_mode}_upper`],lower_text:n[`${this.options.view_mode}_lower`],upper_x:o.x+r[`${this.options.view_mode}_upper`],upper_y:o.upper_y,lower_x:o.x+r[`${this.options.view_mode}_lower`],lower_y:o.lower_y}}make_bars(){this.bars=this.tasks.map((t=>{const e=new $(this,t);return this.layers.bar.appendChild(e.group),e}))}make_arrows(){this.arrows=[];for(let t of this.tasks){let e=[];e=t.dependencies.map((e=>{const n=this.get_task(e);if(!n)return;const o=new M(this,this.bars[n._index],this.bars[t._index]);return this.layers.arrow.appendChild(o.element),o})).filter(Boolean),this.arrows=this.arrows.concat(e)}}map_arrows_on_bars(){for(let t of this.bars)t.arrows=this.arrows.filter((e=>e.from_task.task.id===t.task.id||e.to_task.task.id===t.task.id))}set_width(){const t=this.$svg.getBoundingClientRect().width,e=this.$svg.querySelector(".grid .grid-row").getAttribute("width");t<e&&this.$svg.setAttribute("width",e)}set_scroll_position(){const t=this.$svg.parentElement;if(!t)return;const e=w.diff(this.get_oldest_starting_date(),this.gantt_start,"hour")/this.options.step*this.options.column_width-this.options.column_width;t.scrollLeft=e}bind_grid_click(){y.on(this.$svg,this.options.popup_trigger,".grid-row, .grid-header",(()=>{this.unselect_all(),this.hide_popup()}))}bind_bar_events(){let t=!1,e=0,n=0,o=!1,r=!1,h=null,d=[];this.bar_being_dragged=null,y.on(this.$svg,"mousedown",".bar-wrapper, .handle",((l,element)=>{const _=y.closest(".bar-wrapper",element);element.classList.contains("left")?o=!0:element.classList.contains("right")?r=!0:element.classList.contains("bar-wrapper")&&(t=!0),_.classList.add("active"),e=l.offsetX,n=l.offsetY,h=_.getAttribute("data-id");const c=[h,...this.get_all_dependent_tasks(h)];d=c.map((t=>this.get_bar(t))),this.bar_being_dragged=h,d.forEach((t=>{const e=t.$bar;e.ox=e.getX(),e.oy=e.getY(),e.owidth=e.getWidth(),e.finaldx=0}))})),y.on(this.$svg,"mousemove",(n=>{if(!(t||o||r))return;const l=n.offsetX-e;n.offsetY;d.forEach((e=>{const n=e.$bar;n.finaldx=this.get_snap_position(l),o?h===e.task.id?e.update_bar_position({x:n.ox+n.finaldx,width:n.owidth-n.finaldx}):e.update_bar_position({x:n.ox+n.finaldx}):r?h===e.task.id&&e.update_bar_position({width:n.owidth+n.finaldx}):t&&e.update_bar_position({x:n.ox+n.finaldx})}))})),document.addEventListener("mouseup",(e=>{(t||o||r)&&d.forEach((t=>t.group.classList.remove("active"))),t=!1,o=!1,r=!1})),y.on(this.$svg,"mouseup",(t=>{this.bar_being_dragged=null,d.forEach((t=>{t.$bar.finaldx&&(t.date_changed(),t.set_action_completed())}))})),this.bind_bar_progress()}bind_bar_progress(){let t=0,e=0,n=null,o=null,r=null,h=null;y.on(this.$svg,"mousedown",".handle.progress",((d,l)=>{n=!0,t=d.offsetX,e=d.offsetY;const _=y.closest(".bar-wrapper",l).getAttribute("data-id");o=this.get_bar(_),r=o.$bar_progress,h=o.$bar,r.finaldx=0,r.owidth=r.getWidth(),r.min_dx=-r.getWidth(),r.max_dx=h.getWidth()-r.getWidth()})),y.on(this.$svg,"mousemove",(e=>{if(!n)return;let h=e.offsetX-t;e.offsetY;h>r.max_dx&&(h=r.max_dx),h<r.min_dx&&(h=r.min_dx);const d=o.$handle_progress;y.attr(r,"width",r.owidth+h),y.attr(d,"points",o.get_progress_polygon_points()),r.finaldx=h})),y.on(this.$svg,"mouseup",(()=>{n=!1,r&&r.finaldx&&(o.progress_changed(),o.set_action_completed())}))}get_all_dependent_tasks(t){let e=[],n=[t];for(;n.length;){const t=n.reduce(((t,e)=>t=t.concat(this.dependency_map[e])),[]);e=e.concat(t),n=t.filter((t=>!n.includes(t)))}return e.filter(Boolean)}get_snap_position(t){let e,n,o=t;return this.view_is(Y.WEEK)?(e=t%(this.options.column_width/7),n=o-e+(e<this.options.column_width/14?0:this.options.column_width/7)):this.view_is(Y.MONTH)?(e=t%(this.options.column_width/30),n=o-e+(e<this.options.column_width/60?0:this.options.column_width/30)):(e=t%this.options.column_width,n=o-e+(e<this.options.column_width/2?0:this.options.column_width)),n}unselect_all(){[...this.$svg.querySelectorAll(".bar-wrapper")].forEach((t=>{t.classList.remove("active")}))}view_is(t){return"string"==typeof t?this.options.view_mode===t:!!Array.isArray(t)&&t.some((t=>this.options.view_mode===t))}get_task(t){return this.tasks.find((e=>e.id===t))}get_bar(t){return this.bars.find((e=>e.task.id===t))}show_popup(t){this.popup||(this.popup=new D(this.popup_wrapper,this.options.custom_popup_html)),this.popup.show(t)}hide_popup(){this.popup&&this.popup.hide()}trigger_event(t,e){this.options["on_"+t]&&this.options["on_"+t].apply(null,e)}get_oldest_starting_date(){return this.tasks.map((t=>t._start)).reduce(((t,e)=>e<=t?e:t))}clear(){this.$svg.innerHTML=""}}E.VIEW_MODE=Y},411:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("42b8e9d0",content,!0,{sourceMap:!1})},412:function(t,e,n){var o=n(63)(!1);o.push([t.i,".gantt .grid-background{fill:none}.gantt .grid-header{fill:#fff;stroke:#e0e0e0;stroke-width:1.4}.gantt .grid-row{fill:#fff}.gantt .grid-row:nth-child(2n){fill:#f5f5f5}.gantt .row-line{stroke:#ebeff2}.gantt .tick{stroke:#e0e0e0;stroke-width:.2}.gantt .tick.thick{stroke-width:.4}.gantt .today-highlight{fill:#fcf8e3;opacity:.5}.gantt .arrow{fill:none;stroke:#666;stroke-width:1.4}.gantt .bar{fill:#b8c2cc;stroke:#8d99a6;stroke-width:0;transition:stroke-width .3s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt .bar-progress{fill:#a3a3ff}.gantt .bar-invalid{fill:transparent;stroke:#8d99a6;stroke-width:1;stroke-dasharray:5}.gantt .bar-invalid~.bar-label{fill:#555}.gantt .bar-label{fill:#fff;dominant-baseline:central;text-anchor:middle;font-size:12px;font-weight:lighter}.gantt .bar-label.big{fill:#555;text-anchor:start}.gantt .handle{fill:#ddd;cursor:ew-resize;opacity:0;visibility:hidden;transition:opacity .3s ease}.gantt .bar-wrapper{cursor:pointer;outline:none}.gantt .bar-wrapper:hover .bar{fill:#a9b5c1}.gantt .bar-wrapper:hover .bar-progress{fill:#8a8aff}.gantt .bar-wrapper:hover .handle{visibility:visible;opacity:1}.gantt .bar-wrapper.active .bar{fill:#a9b5c1}.gantt .bar-wrapper.active .bar-progress{fill:#8a8aff}.gantt .lower-text,.gantt .upper-text{font-size:12px;text-anchor:middle}.gantt .upper-text{fill:#555}.gantt .lower-text{fill:#333}.gantt .hide{display:none}.gantt-container{position:relative;overflow:auto;font-size:12px}.gantt-container .popup-wrapper{position:absolute;top:0;left:0;background:rgba(0,0,0,.8);padding:0;color:#959da5;border-radius:3px}.gantt-container .popup-wrapper .title{border-bottom:3px solid #a3a3ff;padding:10px}.gantt-container .popup-wrapper .subtitle{padding:10px;color:#dfe2e5}.gantt-container .popup-wrapper .pointer{position:absolute;height:5px;margin:0 0 0 -5px;border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}",""]),t.exports=o}}]);