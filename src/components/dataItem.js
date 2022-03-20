import KedalamanIcon from "../image/kedalaman.png"
import KoordinatIcon from "../image/koordinat.png"
import MagnitudeIcon from "../image/magnitude.png"
class dataGempa extends HTMLElement{
    set news(news){
        this._news = news
        this.render()
    }
    render(){
        this.innerHTML = `
        <div class="card">
            <h3 class="card-header" id="title">${this._news.Wilayah}</h3>
            <small class="pb">${this._news.Tanggal} , ${this._news.Jam}</small>
            <p>Dirasakan : ${this._news.Dirasakan}</p>
            <div class="d-flex content-center mt">
                <div class="d-flex content-center mr">
                    <img src="${KedalamanIcon}" alt="icon" class="icon-img mr">
                    <div class="flex-column">
                        <div class="text-bold">Kedalaman</div>
                        <div class="text-bold">${this._news.Kedalaman}</div>
                    </div>
                </div>
                <div class="d-flex content-center mr">
                    <img src="${MagnitudeIcon}" alt="icon" class="icon-img mr">
                    <div class="flex-column">
                        <div class="text-bold">Magnitude</div>
                        <div class="text-bold">${this._news.Magnitude}</div>
                    </div>
                </div>
                <div class="content-center" id="show-desktop">
                    <img src="${KoordinatIcon}" alt="icon" class="icon-img mr">
                    <div class="flex-column">
                        <div class="text-bold">Koordinat</div>
                        <div class="text-bold">${this._news.Coordinates} (${this._news.Lintang} , ${this._news.Bujur})</div>
                    </div>
                </div>
            </div>
            <div class="justify-center mt" id="show-mobile">
                <img src="${KoordinatIcon}" alt="icon" class="icon-img mr">
                <div class="flex-column">
                    <div class="text-bold">Koordinat</div>
                    <div class="text-bold">${this._news.Coordinates} (${this._news.Lintang} , ${this._news.Bujur})</div>
                </div>
            </div>
        </div>`
    }
}
customElements.define("data-gempa",dataGempa)