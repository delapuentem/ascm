class Tarjeta extends HTMLElement{
    constructor(){
        super()
        this.titulo = "Titulo default"
        this.imagen = "Imagen default"     
        this.municipio = "Municipio default"
        this.numero = "Numero default"
        this.estado = "Estado default"
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/componentes/Tarjeta/Tarjeta.css">

        <div class="card">
        <div class="image">
        </div>

        <div class="card-footer">
        <h1>${this.titulo}</h1>
   
        <p>${this.municipio}</p>
        <p style="color:black;">Árbol número <b>${this.numero}</b> - ${this.estado === 1 ? 'Existe' : 'Ya no existe'}</p>     

        </div>


        </div>
        `
        const card = this.querySelector('.image')

        card.style.backgroundImage = `url("upload/${this.imagen}")`
    }

}

window.customElements.define("componente-tarjeta", Tarjeta)