import React from 'react'
import PropTypes from 'prop-types'
import './ListViewCard.css'
function ListViewCard({List_view,backgroundColor,TextOneColor,comment,commentBackground,borderColor,}) {
    return (
        <>
        {
            List_view.map((key)=>                     
        <div className="ListViewCard" style={{backgroundColor:backgroundColor,borderColor:borderColor}}>
            <div className="Logo">
                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnPjxwYXRoIGQ9Im01MTIgMjU2YzAgNTYuNS0xOC4zMSAxMDguNzItNDkuMzEgMTUxLjA2LTQ2LjU3IDYzLjYyLTEyMS44MSAzOS41MjMtMjA2LjY5IDM5LjUyM3MtMTYwLjEyIDI0LjA5Ny0yMDYuNjktMzkuNTIzYy0zMS00Mi4zNC00OS4zMS05NC41Ni00OS4zMS0xNTEuMDYgMC0xNDEuMzggMTE0LjYyLTI1NiAyNTYtMjU2czI1NiAxMTQuNjIgMjU2IDI1NnoiIGZpbGw9IiNlZjliMTQiLz48L2c+PC9nPjxwYXRoIGQ9Im0yNTYgNDQ2LjU4M2M4NC44OCAwIDE2MC4xMiAyNC4wOTcgMjA2LjY5LTM5LjUyMyAzMS00Mi4zNCA0OS4zMS05NC41NiA0OS4zMS0xNTEuMDYgMC0xLjQ5OS0uMDMxLTIuOTkxLS4wNTctNC40ODRsLTE3OC4yMzUtMTc4LjIzNi0xNzYuNzIyIDE0Ni43OTMgMzYuMTg1IDM2LjQyM2M0LjI4NSAxNS43ODkgMjEuNjQ5IDU4LjY4NCAyMS42NDkgNTguNjg0bC0xNjUuNTEgOTEuODh2LjAwMWM0Ni41NzEgNjMuNjE5IDEyMS44MSAzOS41MjIgMjA2LjY5IDM5LjUyMnoiIGZpbGw9IiNkYjgyMDAiLz48Zz48cGF0aCBkPSJtMTcyLjI0NiAzMDAuMzNoMTY3LjUwN3Y0My42N2gtMTY3LjUwN3oiIGZpbGw9IiM1ODRiNjYiLz48cGF0aCBkPSJtMjU2IDMwMC4zM2g4My43NXY0My42N2gtODMuNzV6IiBmaWxsPSIjNGEzZTU2Ii8+PHBhdGggZD0ibTE5OS45NyAyNjAuNDg4aDExMi4wNnYxMTguODRoLTExMi4wNnoiIGZpbGw9IiNmZmJiN2QiLz48cGF0aCBkPSJtMjU2IDI2MC40OTFoNTYuMDN2MTE4Ljg0aC01Ni4wM3oiIGZpbGw9IiNlZmEzNmEiLz48cGF0aCBkPSJtMTM0LjU2MyAzMzIuMjkyaDI0Mi44NzV2MTE0LjI5NGgtMjQyLjg3NXoiIGZpbGw9IiNmZmQ0YTYiLz48cGF0aCBkPSJtMjU2IDMzMi4yOTJoMTIxLjQ0djExNC4yOTFoLTEyMS40NHoiIGZpbGw9IiNmZmJiN2QiLz48cGF0aCBkPSJtNDYyLjY5IDQwNy4wNmMtNDYuNTcgNjMuNjItMTIxLjgxIDEwNC45NC0yMDYuNjkgMTA0Ljk0cy0xNjAuMTItNDEuMzItMjA2LjY5LTEwNC45NGMxLjI4LTQxLjUxIDM1LjM0LTc0Ljc3IDc3LjE2LTc0Ljc3aDczLjVsNTYuMDMgNTMuNzEgNTYuMDMtNTMuNzFoNzMuNTFjNDEuODMgMCA3NS44OCAzMy4yNSA3Ny4xNSA3NC43N3oiIGZpbGw9IiM3YjcyODQiLz48cGF0aCBkPSJtNDYyLjY5IDQwNy4wNmMtNDYuNTcgNjMuNjItMTIxLjgxIDEwNC45NC0yMDYuNjkgMTA0Ljk0di0xMjZsNDMuODEtNDIgMTIuMjItMTEuNzFoNzMuNTFjNDEuODMgMCA3NS44OCAzMy4yNSA3Ny4xNSA3NC43N3oiIGZpbGw9IiM2MzVhNmQiLz48cGF0aCBkPSJtMzQ5LjYyIDE1MS4xNDljLTMuOTU1LTYwLjA0My01Mi41MjMtODIuMjMzLTkzLjYyLTgyLjIzM3MtODkuNjY1IDIyLjE5LTkzLjYyIDgyLjIzM2MtMTAuNjI4IDIuMDU1LTE4LjE3NyAxNS45OTUtMTYuOTg4IDI3LjI2NWwxLjgyMiAyNS42NDhjMS4yNDcgMTEuODM1IDExLjY1IDIwLjQ3NiAyMy4xMTUgMTkuMTlsMS45NzctLjIxNGMyMy40ODUgNjMuMDYzIDYwLjMxNiA2OS42MzggODMuNjk0IDczLjMzIDIzLjM3OC0zLjY5MiA2MC4yMDktMTAuMjY3IDgzLjY5NC03My4zM2wxLjk3Ny4yMTRjMTEuNDY1IDEuMjg2IDIxLjg2OC03LjM1NCAyMy4xMTUtMTkuMTlsMS44MjItMjUuNjQ4YzEuMTg5LTExLjI3LTYuMzYtMjUuMjEtMTYuOTg4LTI3LjI2NXoiIGZpbGw9IiNmZmQ0YTYiLz48cGF0aCBkPSJtMzY2LjYwOSAxNzguNDE0LTEuODIyIDI1LjY0OGMtMS4yNDcgMTEuODM1LTExLjY1IDIwLjQ3Ni0yMy4xMTUgMTkuMTlsLTEuOTc3LS4yMTRjLTguMDI3IDIxLjUyOC0xNy42MDIgMzYuNDgtMjcuNjY0IDQ2Ljk3MS0xOS40MDQgMjAuMjQyLTQwLjYyOSAyMy45MjQtNTYuMDMgMjYuMzU5di0yMjcuNDUyYzQxLjA5NyAwIDg5LjY2NSAyMi4xOSA5My42MiA4Mi4yMzMgMTAuNjI3IDIuMDU1IDE4LjE3NiAxNS45OTUgMTYuOTg4IDI3LjI2NXoiIGZpbGw9IiNmZmJiN2QiLz48cGF0aCBkPSJtMjc1LjgyNiAyMDQuNTIzYy0xMS40MzEtOS43MTktMjguMjIxLTkuNzE5LTM5LjY1MiAwLTEyLjc0OCAxMC44MzgtMjguNzU4IDE3LjA5NC00NS40NzcgMTcuNzcxbC0xOC4zOTIuNzQ0IDEuMjMzIDcuNDE0YzYuNzA1IDQwLjMyMiA0MS41ODYgNjkuODgyIDgyLjQ2MSA2OS44ODIgNDEuNzkxLTIuMzE4IDc2LjM4MS0zMy4zMTggODMuMjQ3LTc0LjYwNmwuNDQ3LTIuNjktMTguMzkyLS43NDRjLTE2LjcxNy0uNjc3LTMyLjcyNy02LjkzMy00NS40NzUtMTcuNzcxeiIgZmlsbD0iI2VmZWJkYyIvPjxwYXRoIGQ9Im0zMzkuNjkgMjIzLjA0LS40NCAyLjY5Yy0zLjQzIDIwLjY1LTEzLjggMzguNzItMjguNTMgNTEuOTJzLTMzLjgyIDIxLjUzLTU0LjcyIDIyLjY4di0xMDMuMWM3LjA2IDAgMTQuMTIgMi40MyAxOS44MyA3LjI5IDEyLjc0IDEwLjg0IDI4Ljc1IDE3LjEgNDUuNDcgMTcuNzd6IiBmaWxsPSIjZDZjZmJkIi8+PHBhdGggZD0ibTE3Mi4yNDYgMzAwLjMzIDgzLjc1NCA4NS42Ny00MS44NzcgNDUtNzEuNjIzLTk4LjcwOHoiIGZpbGw9IiM5ZDk3YTUiLz48cGF0aCBkPSJtMzM5Ljc1NCAzMDAuMzMtODMuNzU0IDg1LjY3IDQxLjg3NyA0NSA3MS42MjMtOTguNzA4eiIgZmlsbD0iIzdmNzg4NyIvPjxwYXRoIGQ9Im0xOTkuMjUgMjkuNXMtNTQuMTQ4IDUyLjc4LTQyLjkzMyAxMDQuODYzbDcuODE2IDUxLjg4N2gyMS41bDEwLjI3OS0zOC4yNjJjMy42NTctMTMuNjEzIDE3LjY5LTIxLjg2OCAzMS4yNjQtMTguMDcgMS4zMDYuMzY1IDIuNjA1Ljc3NyAzLjg5NSAxLjIzNWwzLjc1OSAxLjMzNGMxMy43NjYgNC44ODYgMjguNzc4IDQuNDAyIDQyLjM4OC0uOTAxIDIuNzQyLTEuMDY4IDUuNTM0LTEuOTI0IDguMzU0LTIuNTcgMTMuMzc2LTMuMDYzIDI2Ljc3NCA1LjA1MSAzMC4zMzQgMTguMzA0bDEwLjQ1OSAzOC45M2gyMS41bDcuNzk1LTU0LjAyNGMxLjY3My00Ni4zMDktMzUuNTU0LTEwMi43MjYtMTU2LjQxLTEwMi43MjZ6IiBmaWxsPSIjNDk0OTQ5Ii8+PHBhdGggZD0ibTM1NS42NiAxMzIuMjMtNy43OSA1NC4wMmgtMjEuNWwtMTAuNDYtMzguOTNjLTMuNTYtMTMuMjUtMTYuOTYtMjEuMzctMzAuMzQtMTguMy0yLjgyLjY0LTUuNjEgMS41LTguMzUgMi41Ny02Ljg0IDIuNjYtMTQuMDIgNC4xMS0yMS4yMiA0LjI3di0xMDEuMzljNzYuMTEgMTQuNzYgMTAxLjAzIDU5LjY4IDk5LjY2IDk3Ljc2eiIgZmlsbD0iIzMzMyIvPjwvZz48L2c+PC9zdmc+" alt="logo" />
            </div>
            <div className="List">
                <div className="ListHeading">
                    <h4 style={{color:TextOneColor}}>{key.title}</h4>
                </div>
                <div className="ListComment">
                    <span><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTEuMDcyIDUxMS4wNzIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTExLjA3MiA1MTEuMDcyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJTcGVlY2hfQnViYmxlXzQ4XyI+PGc+PHBhdGggZD0ibTc0LjM5IDQ4MC41MzZoLTM2LjIxM2wyNS42MDctMjUuNjA3YzEzLjgwNy0xMy44MDcgMjIuNDI5LTMxLjc2NSAyNC43NDctNTEuMjQ2LTM2LjAyOS0yMy42NDQtNjIuMzc1LTU0Ljc1MS03Ni40NzgtOTAuNDI1LTE0LjA5My0zNS42NDctMTUuODY0LTc0Ljg4OC01LjEyMS0xMTMuNDgyIDEyLjg5LTQ2LjMwOSA0My4xMjMtODguNTE4IDg1LjEyOC0xMTguODUzIDQ1LjY0Ni0zMi45NjMgMTAyLjQ3LTUwLjM4NyAxNjQuMzMtNTAuMzg3IDc3LjkyNyAwIDE0My42MTEgMjIuMzg5IDE4OS45NDggNjQuNzQ1IDQxLjc0NCAzOC4xNTkgNjQuNzM0IDg5LjYzIDY0LjczNCAxNDQuOTMzIDAgMjYuODY4LTUuNDcxIDUzLjAxMS0xNi4yNiA3Ny43MDMtMTEuMTY1IDI1LjU1MS0yNy41MTQgNDguMzAyLTQ4LjU5MyA2Ny42MTktNDYuMzk5IDQyLjUyMy0xMTIuMDQyIDY1LTE4OS44MyA2NS0yOC44NzcgMC01OS4wMS0zLjg1NS04NS45MTMtMTAuOTI5LTI1LjQ2NSAyNi4xMjMtNTkuOTcyIDQwLjkyOS05Ni4wODYgNDAuOTI5em0xODItNDIwYy0xMjQuMDM5IDAtMjAwLjE1IDczLjk3My0yMjAuNTU3IDE0Ny4yODUtMTkuMjg0IDY5LjI4IDkuMTQzIDEzNC43NDMgNzYuMDQzIDE3NS4xMTVsNy40NzUgNC41MTEtLjIzIDguNzI3Yy0uNDU2IDE3LjI3NC00LjU3NCAzMy45MTItMTEuOTQ1IDQ4Ljk1MiAxNy45NDktNi4wNzMgMzQuMjM2LTE3LjA4MyA0Ni45OS0zMi4xNTFsNi4zNDItNy40OTMgOS40MDUgMi44MTNjMjYuMzkzIDcuODk0IDU3LjEwNCAxMi4yNDEgODYuNDc3IDEyLjI0MSAxNTQuMzcyIDAgMjI0LjY4Mi05My40NzMgMjI0LjY4Mi0xODAuMzIyIDAtNDYuNzc2LTE5LjUyNC05MC4zODQtNTQuOTc2LTEyMi43OS00MC43MTMtMzcuMjE2LTk5LjM5Ny01Ni44ODgtMTY5LjcwNi01Ni44ODh6Ii8+PC9nPjwvZz48L3N2Zz4=" alt=""/>
                        <h5  style={{color:TextOneColor}}>{key.CommentNo}</h5></span>                    
                </div>
                <div className="HelpSupport">
                    <h4 style={{color:TextOneColor}}>{key.subTitle}</h4>
                </div>
                <div className="combined">
                    <div className="LastEdited">
                        <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzgzLjk0NyAzODMuOTQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODMuOTQ3IDM4My45NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwb2x5Z29uIHBvaW50cz0iMCwzMDMuOTQ3IDAsMzgzLjk0NyA4MCwzODMuOTQ3IDMxNi4wNTMsMTQ3Ljg5MyAyMzYuMDUzLDY3Ljg5MyAJCQkiLz4NCgkJCTxwYXRoIGQ9Ik0zNzcuNzA3LDU2LjA1M0wzMjcuODkzLDYuMjRjLTguMzItOC4zMi0yMS44NjctOC4zMi0zMC4xODcsMGwtMzkuMDQsMzkuMDRsODAsODBsMzkuMDQtMzkuMDQNCgkJCQlDMzg2LjAyNyw3Ny45MiwzODYuMDI3LDY0LjM3MywzNzcuNzA3LDU2LjA1M3oiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="" /><h5 style={{color:TextOneColor}}>{key.UserName}</h5><h6 style={{color:TextOneColor}}>Started{key.EditedDate}</h6></span>
                    </div>
                    <div className="Replied">
                        <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMS42M3B4IiBoZWlnaHQ9IjUxMS42MzFweCIgdmlld0JveD0iMCAwIDUxMS42MyA1MTEuNjMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjMgNTExLjYzMTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ5Ni41LDIzMy44NDJjLTMwLjg0MS03Ni43MDYtMTE0LjExMi0xMTUuMDYtMjQ5LjgyMy0xMTUuMDZoLTYzLjk1M1Y0NS42OTNjMC00Ljk1Mi0xLjgwOS05LjIzNS01LjQyNC0xMi44NQ0KCQljLTMuNjE3LTMuNjE3LTcuODk2LTUuNDI2LTEyLjg0Ny01LjQyNmMtNC45NTIsMC05LjIzNSwxLjgwOS0xMi44NSw1LjQyNkw1LjQyNCwxNzkuMDIxQzEuODA5LDE4Mi42NDEsMCwxODYuOTIyLDAsMTkxLjg3MQ0KCQljMCw0Ljk0OCwxLjgwOSw5LjIyOSw1LjQyNCwxMi44NDdMMTUxLjYwNCwzNTAuOWMzLjYxOSwzLjYxMyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOGM0Ljk0NywwLDkuMjI5LTEuODE0LDEyLjg0Ny01LjQyOA0KCQljMy42MTYtMy42MTQsNS40MjQtNy44OTgsNS40MjQtMTIuODQ4di03My4wOTRoNjMuOTUzYzE4LjY0OSwwLDM1LjM0OSwwLjU2OCw1MC4wOTksMS43MDhjMTQuNzQ5LDEuMTQzLDI5LjQxMywzLjE4OSw0My45NjgsNi4xNDMNCgkJYzE0LjU2NCwyLjk1LDI3LjIyNCw2Ljk5MSwzNy45NzksMTIuMTM1YzEwLjc1Myw1LjE0NCwyMC43OTQsMTEuNzU2LDMwLjEyMiwxOS44NDJjOS4zMjksOC4wOTQsMTYuOTQzLDE3LjcsMjIuODQ3LDI4LjgzOQ0KCQljNS44OTYsMTEuMTM2LDEwLjUxMywyNC4zMTEsMTMuODQ2LDM5LjUzOWMzLjMyNiwxNS4yMjksNC45OTcsMzIuNDU2LDQuOTk3LDUxLjY3NWMwLDEwLjQ2Ni0wLjQ3OSwyMi4xNzYtMS40MjgsMzUuMTE4DQoJCWMwLDEuMTM3LTAuMjM2LDMuMzc1LTAuNzE1LDYuNzA4Yy0wLjQ3MywzLjMzMy0wLjcxMiw1Ljg1Mi0wLjcxMiw3LjU2MmMwLDIuODUxLDAuODA4LDUuMjMyLDIuNDIzLDcuMTM2DQoJCWMxLjYyMiwxLjkwMiwzLjg2LDIuODUxLDYuNzE0LDIuODUxYzMuMDQ2LDAsNS43MDgtMS42MTUsNy45OTQtNC44NTNjMS4zMjgtMS43MTEsMi41NjEtMy44MDYsMy43MS02LjI4Mw0KCQljMS4xNDMtMi40NzEsMi40My01LjMyNSwzLjg1NC04LjU2MmMxLjQzMS0zLjIzNywyLjQzLTUuNTEzLDIuOTk4LTYuODQ4YzI0LjE3LTU0LjIzOCwzNi4yNTgtOTcuMTU4LDM2LjI1OC0xMjguNzU2DQoJCUM1MTEuNjMsMjkxLjAzOSw1MDYuNTg5LDI1OS4zNDQsNDk2LjUsMjMzLjg0MnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="" /><h5 style={{color:TextOneColor}}>{key.RepliedUser}</h5><h6 style={{color:TextOneColor}}>replies {key.RepliedDate}</h6></span>
                    </div>                    
                </div>
                <div className="Viewed">
                        <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA4Ljc0NSwyNDYuMDQxYy00LjU3NC02LjI1Ny0xMTMuNTU3LTE1My4yMDYtMjUyLjc0OC0xNTMuMjA2UzcuODE4LDIzOS43ODQsMy4yNDksMjQ2LjAzNQ0KCQkJYy00LjMzMiw1LjkzNi00LjMzMiwxMy45ODcsMCwxOS45MjNjNC41NjksNi4yNTcsMTEzLjU1NywxNTMuMjA2LDI1Mi43NDgsMTUzLjIwNnMyNDguMTc0LTE0Ni45NSwyNTIuNzQ4LTE1My4yMDENCgkJCUM1MTMuMDgzLDI2MC4wMjgsNTEzLjA4MywyNTEuOTcxLDUwOC43NDUsMjQ2LjA0MXogTTI1NS45OTcsMzg1LjQwNmMtMTAyLjUyOSwwLTE5MS4zMy05Ny41MzMtMjE3LjYxNy0xMjkuNDE4DQoJCQljMjYuMjUzLTMxLjkxMywxMTQuODY4LTEyOS4zOTUsMjE3LjYxNy0xMjkuMzk1YzEwMi41MjQsMCwxOTEuMzE5LDk3LjUxNiwyMTcuNjE3LDEyOS40MTgNCgkJCUM0NDcuMzYxLDI4Ny45MjMsMzU4Ljc0NiwzODUuNDA2LDI1NS45OTcsMzg1LjQwNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1NS45OTcsMTU0LjcyNWMtNTUuODQyLDAtMTAxLjI3NSw0NS40MzMtMTAxLjI3NSwxMDEuMjc1czQ1LjQzMywxMDEuMjc1LDEwMS4yNzUsMTAxLjI3NQ0KCQkJczEwMS4yNzUtNDUuNDMzLDEwMS4yNzUtMTAxLjI3NVMzMTEuODM5LDE1NC43MjUsMjU1Ljk5NywxNTQuNzI1eiBNMjU1Ljk5NywzMjMuNTE2Yy0zNy4yMywwLTY3LjUxNi0zMC4yODctNjcuNTE2LTY3LjUxNg0KCQkJczMwLjI4Ny02Ny41MTYsNjcuNTE2LTY3LjUxNnM2Ny41MTYsMzAuMjg3LDY3LjUxNiw2Ny41MTZTMjkzLjIyNywzMjMuNTE2LDI1NS45OTcsMzIzLjUxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="" />
                        <h5 style={{color:TextOneColor}}>{key.ViewedBy}</h5></span>
                </div>                
            </div>
            <div className="comment" style={{background:commentBackground}}>
                    <h4 style={{color:comment}}>{key.comments}</h4>
                </div>
        </div>
           )        
        }
        </>
    )
}

ListViewCard.propTypes = {
List_view:PropTypes.array,
TextOneColor:PropTypes.string,
backgroundColor:PropTypes.string,
commentBackground:PropTypes.string,
comment:PropTypes.string,
borderColor:PropTypes.string,
title:PropTypes.string,
subTitle:PropTypes.string,
UserName:PropTypes.string,
EditedDate:PropTypes.string,
RepliedUser:PropTypes.string,
RepliedDate:PropTypes.string,
CommentNo:PropTypes.string,
ViewedBy:PropTypes.string,
comments:PropTypes.string,
}
ListViewCard.defaultProps = {
    TextOneColor:"RGBA(44,42,126,1)",
    backgroundColor:"RGBA(105,90,177,1)",
    commentBackground:"RGBA(132,118,201,1)",
    comment:"RGBA(21,4,110,1)",
    borderColor:"RGBA(134,23,23,1)",    
    title: "Racharging a prepaid giffgaff number",
    subTitle:"Help Support",
    UserName:"Kamlesh",
    EditedDate:" 27 Jul",
    RepliedUser:"Seeta",
    RepliedDate:"27 Jul",
    CommentNo:"3",
    ViewedBy:"69",
    comments:"Hello. i'd like to ask how may i recharge a prepaid giffgaff number with credit directly from a bank account or a paypal please? Thank you",

    List_view:[ {
            title: "Racharging a prepaid giffgaff number",
            subTitle:"Help Support",
            UserName:"Kamlesh",
            EditedDate:" 27 Jul",
            RepliedUser:"Seeta",
            RepliedDate:"27 Jul",
            CommentNo:"3",
            ViewedBy:"69", 
            comments:"Hello. i'd like to ask how may i recharge a prepaid giffgaff number with credit directly from a bank account or a paypal please? Thank you",       
        },
        {
            title: "This is the basic title example ",
            subTitle:"Sub Title are Used here",
            UserName:"UserName",
            EditedDate:" 27 Jul",
            RepliedUser:"Replier Name",
            RepliedDate:"27 Jul",
            CommentNo:"3",
            ViewedBy:"69", 
            comments:"Hello. i'd like to ask how may i recharge a prepaid giffgaff number with credit directly from a bank account or a paypal please? Thank you",
        }]
        
}

export default ListViewCard

