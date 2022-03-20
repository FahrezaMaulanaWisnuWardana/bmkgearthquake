import utilData from "./utilities/bmkg-data.js"
import "./views/listItem"
import "./components/headLine.js"
// Style
import "./css/style.css";

const containerEl = document.querySelector(".container")
const headlineEl = document.querySelector(".headline")

const dataItemEl = document.createElement("headline-item")
dataItemEl.news = await utilData.headLine()
const listItemEl = document.createElement("list-item")
listItemEl.listItem = await utilData.listNews()

containerEl.appendChild(listItemEl)
headlineEl.appendChild(dataItemEl)