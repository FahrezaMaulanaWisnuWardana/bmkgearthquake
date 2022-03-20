import "../components/dataItem.js"
class listItem extends HTMLElement{
    set listItem(listData){
        this._listItem = listData
        this.render()
    }
    render(){
        this._listItem.Infogempa.gempa.forEach(listData =>{
            const dataGempaEl = document.createElement("data-gempa")
            dataGempaEl.news = listData
            this.appendChild(dataGempaEl)
        })
    }
}
customElements.define("list-item",listItem)