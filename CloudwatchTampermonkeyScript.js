// ==UserScript==
// @name         Cloudwatch Initializer
// @namespace    https://cw-dashboards.aka.amazon.com/cloudwatch/
// @version      1.0.5
// @description  Changes the default filter values of a cloudwatch dashboard.
// @author       elgustav
// @match        https://cw-dashboards.aka.amazon.com/cloudwatch/*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1NiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4wNTkyIDMxLjc3NzRDNDMuMDU5MiAyNy44NjggMzkuODU3NiAyNC42ODc2IDM1LjkyMjEgMjQuNjg3NkMzMS45ODY2IDI0LjY4NzYgMjguNzg1OSAyNy44NjggMjguNzg1OSAzMS43Nzc0QzI4Ljc4NTkgMzUuNjg2NyAzMS45ODY2IDM4Ljg2NzEgMzUuOTIyMSAzOC44NjcxQzM5Ljg1NzYgMzguODY3MSA0My4wNTkyIDM1LjY4NjcgNDMuMDU5MiAzMS43Nzc0Wk00NS4wNjk3IDMxLjc3NzRDNDUuMDY5NyAzNi43ODgxIDQwLjk2NjMgNDAuODY0MiAzNS45MjIxIDQwLjg2NDJDMzAuODc4OCA0MC44NjQyIDI2Ljc3NTQgMzYuNzg4MSAyNi43NzU0IDMxLjc3NzRDMjYuNzc1NCAyNi43NjY2IDMwLjg3ODggMjIuNjkwNSAzNS45MjIxIDIyLjY5MDVDNDAuOTY2MyAyMi42OTA1IDQ1LjA2OTcgMjYuNzY2NiA0NS4wNjk3IDMxLjc3NzRaTTUzLjUwOTcgNDUuNDczNUw0Ni41MDEyIDM5LjIwMjZDNDUuOTM1MiAzOS45OTQ1IDQ1LjI4MDggNDAuNzE3NCA0NC41NTQgNDEuMzYzNUw1MS41NTI1IDQ3LjYzMzRDNTIuMTQ5NiA0OC4xNjg3IDUzLjA3ODQgNDguMTE4NyA1My42MTgyIDQ3LjUyNTZDNTQuMTU1IDQ2LjkzMjQgNTQuMTA2OCA0Ni4wMTA4IDUzLjUwOTcgNDUuNDczNVpNMzUuOTIyMSA0Mi42NjE2QzQxLjk2NDUgNDIuNjYxNiA0Ni44ODAxIDM3Ljc3ODcgNDYuODgwMSAzMS43Nzc0QzQ2Ljg4MDEgMjUuNzc1MSA0MS45NjQ1IDIwLjg5MzEgMzUuOTIyMSAyMC44OTMxQzI5Ljg4MDYgMjAuODkzMSAyNC45NjUgMjUuNzc1MSAyNC45NjUgMzEuNzc3NEMyNC45NjUgMzcuNzc4NyAyOS44ODA2IDQyLjY2MTYgMzUuOTIyMSA0Mi42NjE2Wk01NS4xMTIgNDguODYyNkM1NC40MjY0IDQ5LjYxNjYgNTMuNDc4NSA1MCA1Mi41Mjg1IDUwQzUxLjcwMDIgNTAgNTAuODY5OSA0OS43MDg0IDUwLjIwNzUgNDkuMTE3M0w0Mi45MzA2IDQyLjU5ODdDNDAuOTA3IDQzLjg5NjggMzguNTA1NSA0NC42NTg3IDM1LjkyMjEgNDQuNjU4N0MyOC43NzE4IDQ0LjY1ODcgMjIuOTU0NSAzOC44ODAxIDIyLjk1NDUgMzEuNzc3NEMyMi45NTQ1IDI0LjY3NDYgMjguNzcxOCAxOC44OTYgMzUuOTIyMSAxOC44OTZDNDMuMDczMyAxOC44OTYgNDguODkwNiAyNC42NzQ2IDQ4Ljg5MDYgMzEuNzc3NEM0OC44OTA2IDMzLjgxNTQgNDguMzk5IDM1LjczNjYgNDcuNTQ2NiAzNy40NTEyTDU0Ljg1NTcgNDMuOTkwN0M1Ni4yNzUxIDQ1LjI2NTkgNTYuMzg5NyA0Ny40NDk3IDU1LjExMiA0OC44NjI2Wk05LjI4MDMzIDE0LjM5MjVDOS4yODAzMyAxNC45MTE4IDkuMzEyNDkgMTUuNDI5IDkuMzczODEgMTUuOTI5M0M5LjQwOSAxNi4yMTM5IDkuMzIwNTQgMTYuNDk4NSA5LjEyOTU0IDE2LjcxMzJDOC45Nzc3NSAxNi44ODM5IDguNzczNjkgMTYuOTk2OCA4LjU1MDUzIDE3LjAzNDdDNi4wNzg2NiAxNy42Njg4IDIuMDEwNDcgMTkuNTg4IDIuMDEwNDcgMjUuMzQ1N0MyLjAxMDQ3IDI5LjY5MzQgNC40MjQwNCAzMi4wOTI5IDYuNDQ5NTkgMzMuMzQxMUM3LjE0MTE5IDMzLjc3NDUgNy45NTk0NSAzNC4wMDUxIDguODIyOTUgMzQuMDE0MUwyMC45NDUxIDM0LjAyNTFMMjAuOTQzMSAzNi4wMjIyTDguODExODkgMzYuMDExMkM3LjU2NjQgMzUuOTk4MyA2LjM4NDI1IDM1LjY2MDggNS4zODQwNCAzNS4wMzQ3QzMuMzc2NTggMzMuNzk3NCAwIDMwLjg4OTcgMCAyNS4zNDU3QzAgMTguNjYyMyA0LjU5OTk1IDE2LjE5MTkgNy4zMDAwMSAxNS4zMTkyQzcuMjc5OTEgMTUuMDExNiA3LjI2OTg2IDE0LjcwMjEgNy4yNjk4NiAxNC4zOTI1QzcuMjY5ODYgOC45MzI0MyAxMC45OTgzIDMuMjY5NjMgMTUuOTQyIDEuMjIxNTlDMjEuNzI0MSAtMS4xODQ5MyAyNy44NSAwLjAwODM0NDY1IDMyLjMyNjMgNC40MTA5N0MzMy43MTM2IDUuNzc1IDM0Ljg1NDUgNy40MzE2IDM1LjczMDEgOS4zNDc4M0MzNi45MDYyIDguMzgwMjMgMzguMzU1NyA3Ljg0NiAzOS44ODM3IDcuODQ2QzQyLjg4NjMgNy44NDYgNDYuMjY1OSAxMC4xMDk3IDQ2Ljg2ODEgMTUuMDYwNkM0OS42Nzk3IDE1LjcwNDYgNTUuNjIwNiAxNy45NTU0IDU1LjYyMDYgMjUuNDIyNkM1NS42MjA2IDI4LjQwNDMgNTQuNjc5NyAzMC44NjY3IDUyLjgyMzEgMzIuNzQyTDUxLjM4OTYgMzEuMzQxQzUyLjg2MzMgMjkuODUzMiA1My42MTAyIDI3Ljg2MiA1My42MTAyIDI1LjQyMjZDNTMuNjEwMiAxOC44OTEgNDguMTA1NSAxNy4yNjY0IDQ1LjczNzIgMTYuODcxOUM0NS40Njc4IDE2LjgyNyA0NS4yMjk1IDE2LjY3NTIgNDUuMDc1NyAxNi40NTE1QzQ0LjkyNiAxNi4yMzU5IDQ0Ljg2ODcgMTUuOTcxMiA0NC45MTM5IDE1LjcxNDZDNDQuNTg1MiAxMS42NjA1IDQyLjE2MDYgOS44NDMxMSAzOS44ODM3IDkuODQzMTFDMzguNDQ3MiA5Ljg0MzExIDM3LjEwMDIgMTAuNTM4MSAzNi4xODc0IDExLjc1MDRDMzUuOTY1MyAxMi4wNDM5IDM1LjYwNDQgMTIuMTkzNyAzNS4yMzQ1IDEyLjEzOThDMzQuODY5NiAxMi4wODU5IDM0LjU2MyAxMS44MzYyIDM0LjQzNzMgMTEuNDkxN0MzMy42MTQgOS4yMjYgMzIuNDI3OSA3LjMyMDc2IDMwLjkxMiA1LjgzMDkyQzI3LjAzMjggMi4wMTU0NCAyMS43MjgxIDAuOTgwOTM3IDE2LjcxNzEgMy4wNjQ5MkMxMi41NDYzIDQuNzkyNDIgOS4yODAzMyA5Ljc2NzIyIDkuMjgwMzMgMTQuMzkyNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMjgiIHkxPSIwIiB4Mj0iMjgiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREIxMTY0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEY4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/gmherond/CDS/main/CloudwatchTampermonkeyScript.js
// ==/UserScript==

/*
Changelog 1.0.5 12/23/2024
-Added an icon for CloudWatch.
Changelog 1.0.4 11/22/2024
-Fixed a bug where the time interval button was not being read properly.
*/

let loginInfoDiv=document.createElement('div');
let loginInput= document.createElement("input");
let loginLabel = document.createElement("label");
loginInfoDiv.append(loginLabel);
loginInfoDiv.append(loginInput);
loginInput.id="loginInput";
loginInput.value=localStorage.getItem("login");
loginInput.placeholder="Type your login here";
loginInput.addEventListener("input",setLoginLS);
let userValue="loading...";
let initInterval;
let lastURL=location.href;

initInterval = setInterval(setInitialState,100);
setInterval(checkURLChange,100);

let favicon = `
<link rel="shortcut icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1NiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4wNTkyIDMxLjc3NzRDNDMuMDU5MiAyNy44NjggMzkuODU3NiAyNC42ODc2IDM1LjkyMjEgMjQuNjg3NkMzMS45ODY2IDI0LjY4NzYgMjguNzg1OSAyNy44NjggMjguNzg1OSAzMS43Nzc0QzI4Ljc4NTkgMzUuNjg2NyAzMS45ODY2IDM4Ljg2NzEgMzUuOTIyMSAzOC44NjcxQzM5Ljg1NzYgMzguODY3MSA0My4wNTkyIDM1LjY4NjcgNDMuMDU5MiAzMS43Nzc0Wk00NS4wNjk3IDMxLjc3NzRDNDUuMDY5NyAzNi43ODgxIDQwLjk2NjMgNDAuODY0MiAzNS45MjIxIDQwLjg2NDJDMzAuODc4OCA0MC44NjQyIDI2Ljc3NTQgMzYuNzg4MSAyNi43NzU0IDMxLjc3NzRDMjYuNzc1NCAyNi43NjY2IDMwLjg3ODggMjIuNjkwNSAzNS45MjIxIDIyLjY5MDVDNDAuOTY2MyAyMi42OTA1IDQ1LjA2OTcgMjYuNzY2NiA0NS4wNjk3IDMxLjc3NzRaTTUzLjUwOTcgNDUuNDczNUw0Ni41MDEyIDM5LjIwMjZDNDUuOTM1MiAzOS45OTQ1IDQ1LjI4MDggNDAuNzE3NCA0NC41NTQgNDEuMzYzNUw1MS41NTI1IDQ3LjYzMzRDNTIuMTQ5NiA0OC4xNjg3IDUzLjA3ODQgNDguMTE4NyA1My42MTgyIDQ3LjUyNTZDNTQuMTU1IDQ2LjkzMjQgNTQuMTA2OCA0Ni4wMTA4IDUzLjUwOTcgNDUuNDczNVpNMzUuOTIyMSA0Mi42NjE2QzQxLjk2NDUgNDIuNjYxNiA0Ni44ODAxIDM3Ljc3ODcgNDYuODgwMSAzMS43Nzc0QzQ2Ljg4MDEgMjUuNzc1MSA0MS45NjQ1IDIwLjg5MzEgMzUuOTIyMSAyMC44OTMxQzI5Ljg4MDYgMjAuODkzMSAyNC45NjUgMjUuNzc1MSAyNC45NjUgMzEuNzc3NEMyNC45NjUgMzcuNzc4NyAyOS44ODA2IDQyLjY2MTYgMzUuOTIyMSA0Mi42NjE2Wk01NS4xMTIgNDguODYyNkM1NC40MjY0IDQ5LjYxNjYgNTMuNDc4NSA1MCA1Mi41Mjg1IDUwQzUxLjcwMDIgNTAgNTAuODY5OSA0OS43MDg0IDUwLjIwNzUgNDkuMTE3M0w0Mi45MzA2IDQyLjU5ODdDNDAuOTA3IDQzLjg5NjggMzguNTA1NSA0NC42NTg3IDM1LjkyMjEgNDQuNjU4N0MyOC43NzE4IDQ0LjY1ODcgMjIuOTU0NSAzOC44ODAxIDIyLjk1NDUgMzEuNzc3NEMyMi45NTQ1IDI0LjY3NDYgMjguNzcxOCAxOC44OTYgMzUuOTIyMSAxOC44OTZDNDMuMDczMyAxOC44OTYgNDguODkwNiAyNC42NzQ2IDQ4Ljg5MDYgMzEuNzc3NEM0OC44OTA2IDMzLjgxNTQgNDguMzk5IDM1LjczNjYgNDcuNTQ2NiAzNy40NTEyTDU0Ljg1NTcgNDMuOTkwN0M1Ni4yNzUxIDQ1LjI2NTkgNTYuMzg5NyA0Ny40NDk3IDU1LjExMiA0OC44NjI2Wk05LjI4MDMzIDE0LjM5MjVDOS4yODAzMyAxNC45MTE4IDkuMzEyNDkgMTUuNDI5IDkuMzczODEgMTUuOTI5M0M5LjQwOSAxNi4yMTM5IDkuMzIwNTQgMTYuNDk4NSA5LjEyOTU0IDE2LjcxMzJDOC45Nzc3NSAxNi44ODM5IDguNzczNjkgMTYuOTk2OCA4LjU1MDUzIDE3LjAzNDdDNi4wNzg2NiAxNy42Njg4IDIuMDEwNDcgMTkuNTg4IDIuMDEwNDcgMjUuMzQ1N0MyLjAxMDQ3IDI5LjY5MzQgNC40MjQwNCAzMi4wOTI5IDYuNDQ5NTkgMzMuMzQxMUM3LjE0MTE5IDMzLjc3NDUgNy45NTk0NSAzNC4wMDUxIDguODIyOTUgMzQuMDE0MUwyMC45NDUxIDM0LjAyNTFMMjAuOTQzMSAzNi4wMjIyTDguODExODkgMzYuMDExMkM3LjU2NjQgMzUuOTk4MyA2LjM4NDI1IDM1LjY2MDggNS4zODQwNCAzNS4wMzQ3QzMuMzc2NTggMzMuNzk3NCAwIDMwLjg4OTcgMCAyNS4zNDU3QzAgMTguNjYyMyA0LjU5OTk1IDE2LjE5MTkgNy4zMDAwMSAxNS4zMTkyQzcuMjc5OTEgMTUuMDExNiA3LjI2OTg2IDE0LjcwMjEgNy4yNjk4NiAxNC4zOTI1QzcuMjY5ODYgOC45MzI0MyAxMC45OTgzIDMuMjY5NjMgMTUuOTQyIDEuMjIxNTlDMjEuNzI0MSAtMS4xODQ5MyAyNy44NSAwLjAwODM0NDY1IDMyLjMyNjMgNC40MTA5N0MzMy43MTM2IDUuNzc1IDM0Ljg1NDUgNy40MzE2IDM1LjczMDEgOS4zNDc4M0MzNi45MDYyIDguMzgwMjMgMzguMzU1NyA3Ljg0NiAzOS44ODM3IDcuODQ2QzQyLjg4NjMgNy44NDYgNDYuMjY1OSAxMC4xMDk3IDQ2Ljg2ODEgMTUuMDYwNkM0OS42Nzk3IDE1LjcwNDYgNTUuNjIwNiAxNy45NTU0IDU1LjYyMDYgMjUuNDIyNkM1NS42MjA2IDI4LjQwNDMgNTQuNjc5NyAzMC44NjY3IDUyLjgyMzEgMzIuNzQyTDUxLjM4OTYgMzEuMzQxQzUyLjg2MzMgMjkuODUzMiA1My42MTAyIDI3Ljg2MiA1My42MTAyIDI1LjQyMjZDNTMuNjEwMiAxOC44OTEgNDguMTA1NSAxNy4yNjY0IDQ1LjczNzIgMTYuODcxOUM0NS40Njc4IDE2LjgyNyA0NS4yMjk1IDE2LjY3NTIgNDUuMDc1NyAxNi40NTE1QzQ0LjkyNiAxNi4yMzU5IDQ0Ljg2ODcgMTUuOTcxMiA0NC45MTM5IDE1LjcxNDZDNDQuNTg1MiAxMS42NjA1IDQyLjE2MDYgOS44NDMxMSAzOS44ODM3IDkuODQzMTFDMzguNDQ3MiA5Ljg0MzExIDM3LjEwMDIgMTAuNTM4MSAzNi4xODc0IDExLjc1MDRDMzUuOTY1MyAxMi4wNDM5IDM1LjYwNDQgMTIuMTkzNyAzNS4yMzQ1IDEyLjEzOThDMzQuODY5NiAxMi4wODU5IDM0LjU2MyAxMS44MzYyIDM0LjQzNzMgMTEuNDkxN0MzMy42MTQgOS4yMjYgMzIuNDI3OSA3LjMyMDc2IDMwLjkxMiA1LjgzMDkyQzI3LjAzMjggMi4wMTU0NCAyMS43MjgxIDAuOTgwOTM3IDE2LjcxNzEgMy4wNjQ5MkMxMi41NDYzIDQuNzkyNDIgOS4yODAzMyA5Ljc2NzIyIDkuMjgwMzMgMTQuMzkyNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMjgiIHkxPSIwIiB4Mj0iMjgiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREIxMTY0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEY4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" />
`;

document.head.innerHTML+=favicon;

function setInitialState(){
    if(getFirstElementByInnerText('div','TasksSubmitted')){

        loginLabel.innerHTML="Login: ";
        document.getElementsByClassName('cwdb-dashboard')[0].prepend(loginInfoDiv);

        //Worker Productivity type: Number
        document.getElementsByClassName('cwui-dropdown')[2].children[0].children[0].children[0].children[0].children[0].children[0].click();
        getFirstElementByInnerText('span','Widget type').click();
        getFirstElementByInnerText('span','Number').click();
        //Average Time Spent Per Task type: Number
        document.getElementsByClassName('cwui-dropdown')[3].children[0].children[0].children[0].children[0].children[0].children[0].click();
        getFirstElementByInnerText('span','Widget type').click();
        getFirstElementByInnerText('span','Number').click();
        //Sum attempt
        /*
        document.getElementsByClassName('cwui-dropdown')[3].children[0].children[0].children[0].children[0].children[0].children[0].click();
        getFirstElementByInnerText('span','Edit [Read Only]').click();
        getFirstElementByInnerText('span','Update widget').click();
        */
        //Time range: 12h
        getFirstElementByInnerText('button','12h').click();
        //Refresh interval: 10 seconds
        document.getElementsByClassName('refresh-controls')[0].children[0].children[0].children[0].children[0].children[1].children[0].click();
        getFirstElementByInnerText('span','10 seconds').click();

        setTimeout(setInterval(setValue,1000),1000);
        clearInterval(initInterval);
    }
}

function checkURLChange(){
    let currentURL=location.href;
    if(currentURL!=lastURL){
        lastURL=currentURL;
        initInterval = setInterval(setInitialState,100);
    }
}

function setValue(){
    let lsLogin=localStorage.getItem("login");
    if(getElementsByInnerText('div',localStorage.getItem('login')).length==0){
        userValue="user not found";
    }
    else{
        userValue = getElementsByInnerText('div',localStorage.getItem('login'))[1].parentElement.parentElement.parentElement.children[0].children[0].children[0].innerText;
    }
    if(localStorage.getItem("login").length>0){
        document.title=localStorage.getItem("login")+": "+userValue;
    }
}

function setLoginLS(){
    localStorage.setItem("login",loginInput.value);
}

function getElementsByInnerText(tag,innerText){
    let elements = document.getElementsByTagName(tag);
    let foundElements = [];
    for(let i=0;i<elements.length;i++){
        let element=elements[i];
        if(element.innerText==innerText){
            foundElements.push(element);
        }
    }
    return foundElements;
}

function getFirstElementByInnerText(tag,innerText){
    let elements = document.getElementsByTagName(tag);
    let foundElement;
    for(let i=0;i<elements.length;i++){
        let element=elements[i];
        if(element.innerText==innerText){
            foundElement = element;
        }
    }
    return foundElement;
}
