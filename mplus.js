// ==UserScript==
// @name New Userscript
// @namespace http://tampermonkey.net/
// @version v2.0
// @description try to take over the world!
// @author You
// @match https://web.mplusapp.com/chat.do
// @grant none
// ==/UserScript==

(function() {
'use strict';

//好友列增長
document.getElementsByClassName("fun0")[0].style.height = "800px";
document.querySelector(".fun0 > div:nth-child(2)").style.height = "750px";
//聊天室列表增長
document.getElementsByClassName("fun1")[0].style.height = "800px";
document.querySelector(".fun1 > div.fun1").style.height = "750px";
document.querySelector(".fun1 > div.fun1 > div:nth-child(1)").style.height = "750px";
document.getElementById("Toplogo").style.display = "none";

function chatroomModify(){
let roomCount = document.getElementsByClassName("ChatroomWRAP").length;
if(roomCount > 1){
for(let i=0;i<roomCount;i++){
document.querySelectorAll(".chatroom")[i].style.height = "700px";
document.querySelectorAll(".chatroombody")[i].style.height = "700px";
}
}
console.log("count rooms");
}
//聊天室增長
document.querySelectorAll(".allchatroom > li").forEach(rooms => rooms.addEventListener('click', chatroomModify));

})();
