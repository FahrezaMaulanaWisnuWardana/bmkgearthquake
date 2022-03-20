class headLine extends HTMLElement{
    set news(data){
        this._news = data
        this.render()
    }
    render(){
        this.innerHTML = `
            <h2>Berita gempa terbaru</h2>
            <img class="w-custom" src=https://data.bmkg.go.id/DataMKG/TEWS/${this._news.Infogempa.gempa.Shakemap}>
            <p>
                Magnitude:${this._news.Infogempa.gempa.Magnitude}, ${this._news.Infogempa.gempa.Tanggal} ${this._news.Infogempa.gempa.Jam}
                Lokasi: ${this._news.Infogempa.gempa.Lintang},${this._news.Infogempa.gempa.Bujur}<br>
                (${this._news.Infogempa.gempa.Wilayah}), 
                Kedalaman: ${this._news.Infogempa.gempa.Kedalaman}, 
                Dirasakan: ${this._news.Infogempa.gempa.Dirasakan}
            </p>
        `
    }
}
customElements.define("headline-item",headLine)