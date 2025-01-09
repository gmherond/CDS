// ==UserScript==
// @name         Cloudwatch Extras
// @namespace    https://cw-dashboards.aka.amazon.com/cloudwatch/
// @version      1.1.0
// @description  Changes the default view of a cloudwatch dashboard.
// @author       elgustav@
// @match        https://cw-dashboards.aka.amazon.com/cloudwatch/*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1NiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4wNTkyIDMxLjc3NzRDNDMuMDU5MiAyNy44NjggMzkuODU3NiAyNC42ODc2IDM1LjkyMjEgMjQuNjg3NkMzMS45ODY2IDI0LjY4NzYgMjguNzg1OSAyNy44NjggMjguNzg1OSAzMS43Nzc0QzI4Ljc4NTkgMzUuNjg2NyAzMS45ODY2IDM4Ljg2NzEgMzUuOTIyMSAzOC44NjcxQzM5Ljg1NzYgMzguODY3MSA0My4wNTkyIDM1LjY4NjcgNDMuMDU5MiAzMS43Nzc0Wk00NS4wNjk3IDMxLjc3NzRDNDUuMDY5NyAzNi43ODgxIDQwLjk2NjMgNDAuODY0MiAzNS45MjIxIDQwLjg2NDJDMzAuODc4OCA0MC44NjQyIDI2Ljc3NTQgMzYuNzg4MSAyNi43NzU0IDMxLjc3NzRDMjYuNzc1NCAyNi43NjY2IDMwLjg3ODggMjIuNjkwNSAzNS45MjIxIDIyLjY5MDVDNDAuOTY2MyAyMi42OTA1IDQ1LjA2OTcgMjYuNzY2NiA0NS4wNjk3IDMxLjc3NzRaTTUzLjUwOTcgNDUuNDczNUw0Ni41MDEyIDM5LjIwMjZDNDUuOTM1MiAzOS45OTQ1IDQ1LjI4MDggNDAuNzE3NCA0NC41NTQgNDEuMzYzNUw1MS41NTI1IDQ3LjYzMzRDNTIuMTQ5NiA0OC4xNjg3IDUzLjA3ODQgNDguMTE4NyA1My42MTgyIDQ3LjUyNTZDNTQuMTU1IDQ2LjkzMjQgNTQuMTA2OCA0Ni4wMTA4IDUzLjUwOTcgNDUuNDczNVpNMzUuOTIyMSA0Mi42NjE2QzQxLjk2NDUgNDIuNjYxNiA0Ni44ODAxIDM3Ljc3ODcgNDYuODgwMSAzMS43Nzc0QzQ2Ljg4MDEgMjUuNzc1MSA0MS45NjQ1IDIwLjg5MzEgMzUuOTIyMSAyMC44OTMxQzI5Ljg4MDYgMjAuODkzMSAyNC45NjUgMjUuNzc1MSAyNC45NjUgMzEuNzc3NEMyNC45NjUgMzcuNzc4NyAyOS44ODA2IDQyLjY2MTYgMzUuOTIyMSA0Mi42NjE2Wk01NS4xMTIgNDguODYyNkM1NC40MjY0IDQ5LjYxNjYgNTMuNDc4NSA1MCA1Mi41Mjg1IDUwQzUxLjcwMDIgNTAgNTAuODY5OSA0OS43MDg0IDUwLjIwNzUgNDkuMTE3M0w0Mi45MzA2IDQyLjU5ODdDNDAuOTA3IDQzLjg5NjggMzguNTA1NSA0NC42NTg3IDM1LjkyMjEgNDQuNjU4N0MyOC43NzE4IDQ0LjY1ODcgMjIuOTU0NSAzOC44ODAxIDIyLjk1NDUgMzEuNzc3NEMyMi45NTQ1IDI0LjY3NDYgMjguNzcxOCAxOC44OTYgMzUuOTIyMSAxOC44OTZDNDMuMDczMyAxOC44OTYgNDguODkwNiAyNC42NzQ2IDQ4Ljg5MDYgMzEuNzc3NEM0OC44OTA2IDMzLjgxNTQgNDguMzk5IDM1LjczNjYgNDcuNTQ2NiAzNy40NTEyTDU0Ljg1NTcgNDMuOTkwN0M1Ni4yNzUxIDQ1LjI2NTkgNTYuMzg5NyA0Ny40NDk3IDU1LjExMiA0OC44NjI2Wk05LjI4MDMzIDE0LjM5MjVDOS4yODAzMyAxNC45MTE4IDkuMzEyNDkgMTUuNDI5IDkuMzczODEgMTUuOTI5M0M5LjQwOSAxNi4yMTM5IDkuMzIwNTQgMTYuNDk4NSA5LjEyOTU0IDE2LjcxMzJDOC45Nzc3NSAxNi44ODM5IDguNzczNjkgMTYuOTk2OCA4LjU1MDUzIDE3LjAzNDdDNi4wNzg2NiAxNy42Njg4IDIuMDEwNDcgMTkuNTg4IDIuMDEwNDcgMjUuMzQ1N0MyLjAxMDQ3IDI5LjY5MzQgNC40MjQwNCAzMi4wOTI5IDYuNDQ5NTkgMzMuMzQxMUM3LjE0MTE5IDMzLjc3NDUgNy45NTk0NSAzNC4wMDUxIDguODIyOTUgMzQuMDE0MUwyMC45NDUxIDM0LjAyNTFMMjAuOTQzMSAzNi4wMjIyTDguODExODkgMzYuMDExMkM3LjU2NjQgMzUuOTk4MyA2LjM4NDI1IDM1LjY2MDggNS4zODQwNCAzNS4wMzQ3QzMuMzc2NTggMzMuNzk3NCAwIDMwLjg4OTcgMCAyNS4zNDU3QzAgMTguNjYyMyA0LjU5OTk1IDE2LjE5MTkgNy4zMDAwMSAxNS4zMTkyQzcuMjc5OTEgMTUuMDExNiA3LjI2OTg2IDE0LjcwMjEgNy4yNjk4NiAxNC4zOTI1QzcuMjY5ODYgOC45MzI0MyAxMC45OTgzIDMuMjY5NjMgMTUuOTQyIDEuMjIxNTlDMjEuNzI0MSAtMS4xODQ5MyAyNy44NSAwLjAwODM0NDY1IDMyLjMyNjMgNC40MTA5N0MzMy43MTM2IDUuNzc1IDM0Ljg1NDUgNy40MzE2IDM1LjczMDEgOS4zNDc4M0MzNi45MDYyIDguMzgwMjMgMzguMzU1NyA3Ljg0NiAzOS44ODM3IDcuODQ2QzQyLjg4NjMgNy44NDYgNDYuMjY1OSAxMC4xMDk3IDQ2Ljg2ODEgMTUuMDYwNkM0OS42Nzk3IDE1LjcwNDYgNTUuNjIwNiAxNy45NTU0IDU1LjYyMDYgMjUuNDIyNkM1NS42MjA2IDI4LjQwNDMgNTQuNjc5NyAzMC44NjY3IDUyLjgyMzEgMzIuNzQyTDUxLjM4OTYgMzEuMzQxQzUyLjg2MzMgMjkuODUzMiA1My42MTAyIDI3Ljg2MiA1My42MTAyIDI1LjQyMjZDNTMuNjEwMiAxOC44OTEgNDguMTA1NSAxNy4yNjY0IDQ1LjczNzIgMTYuODcxOUM0NS40Njc4IDE2LjgyNyA0NS4yMjk1IDE2LjY3NTIgNDUuMDc1NyAxNi40NTE1QzQ0LjkyNiAxNi4yMzU5IDQ0Ljg2ODcgMTUuOTcxMiA0NC45MTM5IDE1LjcxNDZDNDQuNTg1MiAxMS42NjA1IDQyLjE2MDYgOS44NDMxMSAzOS44ODM3IDkuODQzMTFDMzguNDQ3MiA5Ljg0MzExIDM3LjEwMDIgMTAuNTM4MSAzNi4xODc0IDExLjc1MDRDMzUuOTY1MyAxMi4wNDM5IDM1LjYwNDQgMTIuMTkzNyAzNS4yMzQ1IDEyLjEzOThDMzQuODY5NiAxMi4wODU5IDM0LjU2MyAxMS44MzYyIDM0LjQzNzMgMTEuNDkxN0MzMy42MTQgOS4yMjYgMzIuNDI3OSA3LjMyMDc2IDMwLjkxMiA1LjgzMDkyQzI3LjAzMjggMi4wMTU0NCAyMS43MjgxIDAuOTgwOTM3IDE2LjcxNzEgMy4wNjQ5MkMxMi41NDYzIDQuNzkyNDIgOS4yODAzMyA5Ljc2NzIyIDkuMjgwMzMgMTQuMzkyNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMjgiIHkxPSIwIiB4Mj0iMjgiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREIxMTY0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEY4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/gmherond/CDS/main/CloudwatchTampermonkeyScript.js
// @require      http://code.jquery.com/jquery-3.7.1.min.js
// @sandbox      MAIN_WORLD
// ==/UserScript==

/*
--------------------------------------------------------------------------------------------------------------------------------
Changelog 1.1.0 01/09/2025
-Rewritten 90%+ of the code.
-Changed the method of displaying the dashboard data. Now the script will copy the source code of the currently opened dashboard,
and will use the function "CloudWatchDashboards.displayCustomDashboard()" with modified parameters so that the total spent time
is shown.
-Existing charts have been rearranged for a more concise view.
-Added a "recent dashboards" option that keeps track of recently visited dashboards and makes it easier to switch between them.
-Added a "simplified view" option that shows a summary of each important user metric based on the login typed in the login bar.
-Added styling for new elements.
--------------------------------------------------------------------------------------------------------------------------------
Changelog 1.0.5 12/23/2024
-Added an icon for CloudWatch.
--------------------------------------------------------------------------------------------------------------------------------
Changelog 1.0.4 11/22/2024
-Fixed a bug where the time interval button was not being read properly.
--------------------------------------------------------------------------------------------------------------------------------
*/

let cloudwatchAddonsHtml=`
<div id="cwAddonsContainer">
    <div id="cwpAddonsBar">
        <div id="dashboardHistory">
            <label class="cwplabel" for="dHistorySelect">Recent dashboards:</label>
            <select class="cwpinput" id="dHistorySelect" name="dHistorySelect" onchange="location = this.value;">
                <option class="dHistoryOption" value="">Loading...</option>
            </select>
        </div>
        <div id="loginItems">
            <div id="loginContainer">
                <label class="cwplabel" for="loginInput">Login:</label>
                <input class="cwpinput" name="loginInput" value="${localStorage.getItem("login")}" placeholder="Type your login here" id="loginInput" oninput='localStorage.setItem("login",loginInput.value)'>
            </div>
            <div id="simpleViewToggle">
                <label class="cwplabel" for="simpleViewInput">Simplified View</label>
                <input name="simpleViewInput" id="simpleViewInput" type="checkbox" ${localStorage.getItem("simpleView")=="true"?"checked":""}>
            </div>
        </div>
    </div>
    <div id="cwpSimpleView" ${localStorage.getItem("simpleView")=="true"?"style='display:flex'":"style='display:none'"}>
        <div id="cwpSimpleViewContainer">
            <label id="simpleViewLogin"></label>
            <div id="simpleViewMetrics">
                <div class="simpleViewItem">
                    <label class="simpleViewLabel" id="simpleViewCountL">Throughput</label>
                    <span id="simpleViewCountV">--</span>
                </div>
                <div class="simpleViewItem">
                    <label class="simpleViewLabel" id="simpleViewAHTL">AHT</label>
                    <span id="simpleViewAHTV">--</span>
                </div>
                <div class="simpleViewItem">
                    <label class="simpleViewLabel" id="simpleViewBandwidthL">Bandwidth</label>
                    <span id="simpleViewBandwidthV">--</span>
                </div>
            </div>
        </div>
    <div>
</div>
`;

let cloudwatchAddonsStyle=`
#cwpAddonsBar{
    display:flex;
    justify-content:left;
    flex-direction:column;
}

.cwplabel{
    margin:0.5rem;
}

#loginItems{
    display:flex;
    justify-content:left;
    align-items:center;
}

#simpleViewToggle{
    display:flex;
    justify-content:center;
    align-items:center;
}

#loginContainer,#dashboardHistory{
    margin:0.5rem;
}

.cwpinput{
    border-radius:1rem;
    padding:0.2rem 0.5rem;
    border:none;
    text-align:center;
}

#loginInput{
    width:13.5rem;
}

#cwpSimpleView{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

#cwpSimpleViewContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
}

.simpleViewLabel{
    font-weight:bold;
    color: #0073bb;
}

#simpleViewLogin{
    font-size:3.5rem;
    margin-bottom:4rem;
    font-weight:bold;
}

#simpleViewMetrics{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
}

.simpleViewItem{
    font-size:2.5rem;
    margin:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:3rem;
    width:15rem;
}
`;

let cloudwatchAddonsdiv = document.createElement("div");
cloudwatchAddonsdiv.innerHTML=cloudwatchAddonsHtml;
let cloudwatchAddonsStyleElement = document.createElement("style");
cloudwatchAddonsStyleElement.innerHTML=cloudwatchAddonsStyle;
document.head.append(cloudwatchAddonsStyleElement);

let favicon = `
<link rel="shortcut icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1NiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4wNTkyIDMxLjc3NzRDNDMuMDU5MiAyNy44NjggMzkuODU3NiAyNC42ODc2IDM1LjkyMjEgMjQuNjg3NkMzMS45ODY2IDI0LjY4NzYgMjguNzg1OSAyNy44NjggMjguNzg1OSAzMS43Nzc0QzI4Ljc4NTkgMzUuNjg2NyAzMS45ODY2IDM4Ljg2NzEgMzUuOTIyMSAzOC44NjcxQzM5Ljg1NzYgMzguODY3MSA0My4wNTkyIDM1LjY4NjcgNDMuMDU5MiAzMS43Nzc0Wk00NS4wNjk3IDMxLjc3NzRDNDUuMDY5NyAzNi43ODgxIDQwLjk2NjMgNDAuODY0MiAzNS45MjIxIDQwLjg2NDJDMzAuODc4OCA0MC44NjQyIDI2Ljc3NTQgMzYuNzg4MSAyNi43NzU0IDMxLjc3NzRDMjYuNzc1NCAyNi43NjY2IDMwLjg3ODggMjIuNjkwNSAzNS45MjIxIDIyLjY5MDVDNDAuOTY2MyAyMi42OTA1IDQ1LjA2OTcgMjYuNzY2NiA0NS4wNjk3IDMxLjc3NzRaTTUzLjUwOTcgNDUuNDczNUw0Ni41MDEyIDM5LjIwMjZDNDUuOTM1MiAzOS45OTQ1IDQ1LjI4MDggNDAuNzE3NCA0NC41NTQgNDEuMzYzNUw1MS41NTI1IDQ3LjYzMzRDNTIuMTQ5NiA0OC4xNjg3IDUzLjA3ODQgNDguMTE4NyA1My42MTgyIDQ3LjUyNTZDNTQuMTU1IDQ2LjkzMjQgNTQuMTA2OCA0Ni4wMTA4IDUzLjUwOTcgNDUuNDczNVpNMzUuOTIyMSA0Mi42NjE2QzQxLjk2NDUgNDIuNjYxNiA0Ni44ODAxIDM3Ljc3ODcgNDYuODgwMSAzMS43Nzc0QzQ2Ljg4MDEgMjUuNzc1MSA0MS45NjQ1IDIwLjg5MzEgMzUuOTIyMSAyMC44OTMxQzI5Ljg4MDYgMjAuODkzMSAyNC45NjUgMjUuNzc1MSAyNC45NjUgMzEuNzc3NEMyNC45NjUgMzcuNzc4NyAyOS44ODA2IDQyLjY2MTYgMzUuOTIyMSA0Mi42NjE2Wk01NS4xMTIgNDguODYyNkM1NC40MjY0IDQ5LjYxNjYgNTMuNDc4NSA1MCA1Mi41Mjg1IDUwQzUxLjcwMDIgNTAgNTAuODY5OSA0OS43MDg0IDUwLjIwNzUgNDkuMTE3M0w0Mi45MzA2IDQyLjU5ODdDNDAuOTA3IDQzLjg5NjggMzguNTA1NSA0NC42NTg3IDM1LjkyMjEgNDQuNjU4N0MyOC43NzE4IDQ0LjY1ODcgMjIuOTU0NSAzOC44ODAxIDIyLjk1NDUgMzEuNzc3NEMyMi45NTQ1IDI0LjY3NDYgMjguNzcxOCAxOC44OTYgMzUuOTIyMSAxOC44OTZDNDMuMDczMyAxOC44OTYgNDguODkwNiAyNC42NzQ2IDQ4Ljg5MDYgMzEuNzc3NEM0OC44OTA2IDMzLjgxNTQgNDguMzk5IDM1LjczNjYgNDcuNTQ2NiAzNy40NTEyTDU0Ljg1NTcgNDMuOTkwN0M1Ni4yNzUxIDQ1LjI2NTkgNTYuMzg5NyA0Ny40NDk3IDU1LjExMiA0OC44NjI2Wk05LjI4MDMzIDE0LjM5MjVDOS4yODAzMyAxNC45MTE4IDkuMzEyNDkgMTUuNDI5IDkuMzczODEgMTUuOTI5M0M5LjQwOSAxNi4yMTM5IDkuMzIwNTQgMTYuNDk4NSA5LjEyOTU0IDE2LjcxMzJDOC45Nzc3NSAxNi44ODM5IDguNzczNjkgMTYuOTk2OCA4LjU1MDUzIDE3LjAzNDdDNi4wNzg2NiAxNy42Njg4IDIuMDEwNDcgMTkuNTg4IDIuMDEwNDcgMjUuMzQ1N0MyLjAxMDQ3IDI5LjY5MzQgNC40MjQwNCAzMi4wOTI5IDYuNDQ5NTkgMzMuMzQxMUM3LjE0MTE5IDMzLjc3NDUgNy45NTk0NSAzNC4wMDUxIDguODIyOTUgMzQuMDE0MUwyMC45NDUxIDM0LjAyNTFMMjAuOTQzMSAzNi4wMjIyTDguODExODkgMzYuMDExMkM3LjU2NjQgMzUuOTk4MyA2LjM4NDI1IDM1LjY2MDggNS4zODQwNCAzNS4wMzQ3QzMuMzc2NTggMzMuNzk3NCAwIDMwLjg4OTcgMCAyNS4zNDU3QzAgMTguNjYyMyA0LjU5OTk1IDE2LjE5MTkgNy4zMDAwMSAxNS4zMTkyQzcuMjc5OTEgMTUuMDExNiA3LjI2OTg2IDE0LjcwMjEgNy4yNjk4NiAxNC4zOTI1QzcuMjY5ODYgOC45MzI0MyAxMC45OTgzIDMuMjY5NjMgMTUuOTQyIDEuMjIxNTlDMjEuNzI0MSAtMS4xODQ5MyAyNy44NSAwLjAwODM0NDY1IDMyLjMyNjMgNC40MTA5N0MzMy43MTM2IDUuNzc1IDM0Ljg1NDUgNy40MzE2IDM1LjczMDEgOS4zNDc4M0MzNi45MDYyIDguMzgwMjMgMzguMzU1NyA3Ljg0NiAzOS44ODM3IDcuODQ2QzQyLjg4NjMgNy44NDYgNDYuMjY1OSAxMC4xMDk3IDQ2Ljg2ODEgMTUuMDYwNkM0OS42Nzk3IDE1LjcwNDYgNTUuNjIwNiAxNy45NTU0IDU1LjYyMDYgMjUuNDIyNkM1NS42MjA2IDI4LjQwNDMgNTQuNjc5NyAzMC44NjY3IDUyLjgyMzEgMzIuNzQyTDUxLjM4OTYgMzEuMzQxQzUyLjg2MzMgMjkuODUzMiA1My42MTAyIDI3Ljg2MiA1My42MTAyIDI1LjQyMjZDNTMuNjEwMiAxOC44OTEgNDguMTA1NSAxNy4yNjY0IDQ1LjczNzIgMTYuODcxOUM0NS40Njc4IDE2LjgyNyA0NS4yMjk1IDE2LjY3NTIgNDUuMDc1NyAxNi40NTE1QzQ0LjkyNiAxNi4yMzU5IDQ0Ljg2ODcgMTUuOTcxMiA0NC45MTM5IDE1LjcxNDZDNDQuNTg1MiAxMS42NjA1IDQyLjE2MDYgOS44NDMxMSAzOS44ODM3IDkuODQzMTFDMzguNDQ3MiA5Ljg0MzExIDM3LjEwMDIgMTAuNTM4MSAzNi4xODc0IDExLjc1MDRDMzUuOTY1MyAxMi4wNDM5IDM1LjYwNDQgMTIuMTkzNyAzNS4yMzQ1IDEyLjEzOThDMzQuODY5NiAxMi4wODU5IDM0LjU2MyAxMS44MzYyIDM0LjQzNzMgMTEuNDkxN0MzMy42MTQgOS4yMjYgMzIuNDI3OSA3LjMyMDc2IDMwLjkxMiA1LjgzMDkyQzI3LjAzMjggMi4wMTU0NCAyMS43MjgxIDAuOTgwOTM3IDE2LjcxNzEgMy4wNjQ5MkMxMi41NDYzIDQuNzkyNDIgOS4yODAzMyA5Ljc2NzIyIDkuMjgwMzMgMTQuMzkyNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMjgiIHkxPSIwIiB4Mj0iMjgiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREIxMTY0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEY4QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" />
`;
document.head.innerHTML+=favicon;

let lastURL=location.href;
let saveURLInterval;
let initInterval;
let checkTitleInterval;
let checkURLInterval;
let setMetricsInterval;

saveURLInterval = setInterval(saveURL,1);
initInterval = setInterval(init,1);
checkURLInterval = setInterval(checkURLChange,10);

function saveURL(){
    if(document.getElementsByClassName("dashboard-title-text")[0]){
        if(document.getElementsByClassName("dashboard-title-text")[0].innerText.length>0){
            let dashboardTitle=document.getElementsByClassName("dashboard-title-text")[0].innerText;
            let curUrl = {url:location.href,title:dashboardTitle};
            document.getElementsByClassName("cwdb-dashboard-content")[0].style="opacity:0";
            if(localStorage.getItem("urlHistory")){

                let savedUrls=JSON.parse(localStorage.getItem("urlHistory"));
                let indexOfUrl = savedUrls.findIndex((e)=>e.url==curUrl.url);
                if(indexOfUrl>=0){
                    savedUrls.splice(indexOfUrl,1);
                }
                savedUrls.push(curUrl);
                while(savedUrls.length>30){
                    savedUrls.splice(0,1);
                }
                localStorage.setItem("urlHistory",JSON.stringify(savedUrls));
            }
            else{
                let savedUrls=[];
                savedUrls.push(curUrl);
                localStorage.setItem("urlHistory",JSON.stringify(savedUrls));
            }

            clearInterval(saveURLInterval);
            checkTitleInterval=setInterval(checkDashboardTitle,10);
        }
    }
}

function init(){
    if(Array.from(document.getElementsByClassName("cwdb-single-value-label-text")).find((e)=>e.innerText=="TasksSubmitted")){
        //Clicks the "Actions" button
        document.getElementsByClassName("dashboard-controls-actions")[0].children[0].children[0].children[0].children[0].children[0].click();
        //Clicks the "View Source" button
        document.getElementsByClassName("dashboard-controls-actions")[0].children[0].children[0].children[2].children[1].children[0].children[0].children[0].children[1].click();
        //Sets the page zoom to 25% to display all the source code
        //document.getElementsByClassName("source-title")[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style="zoom:30%;opacity:0;";
        Array.from(document.getElementsByTagName("button")).find((e)=>e.innerText=="Copy source").click();
        navigator.clipboard.readText().then((result)=>{
            newDashboard(result);
        });
        //document.body.style="zoom:100%";
        //Clicks the "Cancel" button
        Array.from(document.getElementsByTagName("span")).find((e)=>e.innerText=="Cancel").click();
        clearInterval(initInterval);
    }
}

function newDashboard(data){
    let params = JSON.parse(data);
    //Tasks Submitted
    params.widgets[0].height=3;
    params.widgets[0].width=7;
    params.widgets[0].y=0;
    params.widgets[0].x=5;
    params.widgets[0].properties.title="Tasks Submitted";
    //Tasks Completed
    params.widgets[1].height=3;
    params.widgets[1].width=7;
    params.widgets[1].y=3;
    params.widgets[1].x=5;
    //Worker Productivity
    params.widgets[2].height=6;
    params.widgets[2].width=7;
    params.widgets[2].y=0;
    params.widgets[2].x=12;
    params.widgets[2].properties.view="singleValue";
    //Average Handle Time
    params.widgets[3].height=6;
    params.widgets[3].width=7;
    params.widgets[3].y=6;
    params.widgets[3].x=5;
    params.widgets[3].properties.view="singleValue";
    //Total Time Spent
    params.widgets.push(structuredClone(params.widgets[3]));
    params.widgets[4].x=12;
    params.widgets[4].properties.stat="Sum";
    params.widgets[4].properties.title="Total Time Spent";

    console.log(params);

    CloudWatchDashboards.displayCustomDashboard(params);
    document.getElementsByClassName("cwdb-dashboard-content")[0].style="";
    localStorage.getItem("simpleView")=="true"? document.getElementsByClassName("cwdb-dashboard-content")[0].style="zoom:50%;opacity:0%;" :document.getElementsByClassName("cwdb-dashboard-content")[0].style="display:block";
    //Time range: 12h
    if(Array.from(document.getElementsByTagName("button")).find((e)=>e.innerText=="12h")){
        Array.from(document.getElementsByTagName("button")).find((e)=>e.innerText=="12h").click();
    }
    //Refresh interval: 10 seconds
    document.getElementsByClassName('refresh-controls')[0].children[0].children[0].children[0].children[0].children[1].children[0].click();
    Array.from(document.getElementsByTagName("span")).find((e)=>e.innerText=="10 seconds").click();
    let toolbar = document.getElementsByClassName("cwdb-toolbar-v2")[0];
    document.getElementsByClassName("cwdb-dashboard-content")[0].parentElement.prepend(cloudwatchAddonsdiv);
    document.getElementById("simpleViewInput").addEventListener("input",showSimpleView);
    setMetricsInterval = setInterval(setSimpleViewValues,1000);
    document.getElementsByClassName("cwdb-dashboard-content")[0].parentElement.prepend(toolbar);
    setURLs();
}

function checkURLChange(){
    let currentURL=location.href;
    if(currentURL!=lastURL){
        location.reload();
        lastURL=currentURL;
        saveURLInterval = setInterval(saveURL,1);
        initInterval = setInterval(init,1);
    }
}

function setSimpleViewValues(){
    localStorage.getItem("simpleView")=="true"? document.getElementsByClassName("cwdb-dashboard-content")[0].style="display:none" :document.getElementsByClassName("cwdb-dashboard-content")[0].style="display:block";
    let login = localStorage.getItem("login");
    if(login==""){
        login="not found";
    }
    document.getElementById("simpleViewLogin").innerText=login;
    let metrics = Array.from(document.getElementsByClassName("cwdb-single-value-section")).filter((e)=>e.innerText.includes(login));
    if(metrics.length==3){
        let throughput=metrics[0].innerText.replace(login,"").replaceAll("\n","");
        let aht=metrics[1].innerText.replace(login,"").replaceAll("\n","");
        let bandwidth=metrics[2].innerText.replace(login,"").replaceAll("\n","");
        document.getElementById("simpleViewCountV").innerText=throughput;
        document.getElementById("simpleViewAHTV").innerText=aht;
        document.getElementById("simpleViewBandwidthV").innerText=bandwidth;
    }
}

function setURLs(){
    let savedUrls=JSON.parse(localStorage.getItem("urlHistory")).toReversed();
    let dHistorySelect = document.getElementById("dHistorySelect");
    dHistorySelect.innerHTML="";
    for(let i=0;i<savedUrls.length;i++){
        let curUrl = savedUrls[i];
        dHistorySelect.innerHTML+=`<option class="dHistoryOption" value="${curUrl.url}">${curUrl.title}</option>`;
    }
}

function showSimpleView(){
    localStorage.setItem("simpleView",this.checked);
    let style = localStorage.getItem("simpleView")=="true"?'display:flex':'display:none';
    document.getElementById("cwpSimpleView").style=style;
}

function checkDashboardTitle(){
    if(document.getElementsByClassName("dashboard-title-text")){
        if(document.getElementsByClassName("dashboard-title-text")[0].innerText.length==0){
            let urlHistory = JSON.parse(localStorage.getItem("urlHistory"));
            document.getElementsByClassName("dashboard-title-text")[0].innerText=urlHistory[urlHistory.length-1].title;
        }
    }
}

function setValue(){
    //old function
    let lsLogin=localStorage.getItem("login");
    let userValue = "";
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
