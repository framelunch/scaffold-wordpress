!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}({3:function(e,t){document.addEventListener("DOMContentLoaded",function(){function e(e){var t=!0,n="";for(var r in e)n+=t?"?":"&",n+=r+"="+e[r],t=!1;return n}function t(){var e=document.querySelectorAll(".field-add-button"),t=document.querySelectorAll(".field-del-button"),r=document.querySelectorAll(".readonly"),d=document.querySelectorAll(".chk");e&&e.forEach(function(e){e.addEventListener("click",n,!1)}),t&&t.forEach(function(e){e.addEventListener("click",o,!1)}),r&&r.forEach(function(e){e.addEventListener("keydown",a,!1)}),d&&d.forEach(function(e){e.addEventListener("change",u,!1)}),"undefined"!=typeof uploadBindEvent&&uploadBindEvent()}function n(e){var t=e.currentTarget,n=t.attributes,o=n["data-template"].nodeValue,u=n["data-config-path"].nodeValue,a=n["data-current-sequence"].nodeValue,d=n["data-append-target"].nodeValue,c=n["data-group-key"].nodeValue;t.classList.add("hidden"),r(u,a,t,d,c,o)}function r(n,r,o,u,a,c){var l={action:"get_form_group_html",template:c,path:n,sequence:r,group_id:u,group_key:a},i=new XMLHttpRequest;i.onreadystatechange=function(e){if(4===i.readyState)if(200===i.status){var n=document.createElement("div"),r=JSON.parse(i.responseText.trim());if(r.success){n.innerHTML=r.html.trim(),n=n.firstChild;var a=document.querySelector("#"+u),d=a.parentNode;d.insertBefore(n,a.nextSibling),t()}else console.log(r.error)}else o.classList.remove("hidden"),console.log(i.statusText)},i.onerror=function(e){console.log(e.type)},i.open("GET",d+e(l),!0),i.send()}function o(e){if(confirm("本当に削除しますか？")){var t=e.currentTarget,n=t.attributes,r=n["data-group-key"].nodeValue,o=n["data-delete-target"].nodeValue,u=n["data-bf-group-id"].nodeValue,a=null,d=null,l=document.querySelector("#"+o);if(""===u)return alert("最後の要素は削除できません。"),!1;a=document.querySelector("#"+u),d=a.querySelector(".field-add-button"),d&&!l.querySelector(".field-add-button.hidden")&&d.classList.remove("hidden");var i=l.nextElementSibling;if(i&&i.classList.contains(r)){i.querySelector(".field-del-button").setAttribute("data-bf-group-id",u)}return l.querySelectorAll(".input").forEach(function(e){var t=e.attributes.name.nodeValue;t=t.replace("[]",""),-1===c.indexOf(t)&&c.push(t)}),l.remove(),!0}}function u(e){var t=e.currentTarget.attributes;document.querySelector("#"+t["data-real-value-input"].nodeValue).value=e.currentTarget.checked?"on":"off"}function a(e){e.preventDefault()}var d=customizer.ajax_url,c=[];!function(){var e=document.querySelector("#auto-form");e=e||document.querySelector("form#post"),(e=e||document.querySelector("form#edittag"))&&e.addEventListener("submit",function(){var t=document.createElement("input");return t.type="hidden",t.name="delete_names",t.value=c,e.appendChild(t),!0},!1)}(),t()},!1)}});