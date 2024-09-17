// ==UserScript==
// @name         Cloudwatch Initializer
// @namespace    https://cw-dashboards.aka.amazon.com/cloudwatch/
// @version      1.0.2
// @description  Changes the default filter values of a cloudwatch dashboard.
// @author       elgustav
// @match        https://cw-dashboards.aka.amazon.com/cloudwatch/*
// @icon         https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg
// @grant        none
// ==/UserScript==

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
        document.getElementsByClassName('refresh-controls')[0].children[1].children[0].children[0].children[0].children[0].click();
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
