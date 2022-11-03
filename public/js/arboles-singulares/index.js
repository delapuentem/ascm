const content = document.querySelector('.grid')

// Get arboles

fetch('http://localhost:3000/api/get')
    .then(response => response.json())
    .then(data => {
        data.forEach(function(item){


    // Get municipio

    fetch('http://localhost:3000/api/municipios')
        .then(response => response.json())
        .then(data => {
            const card = document.createElement('componente-tarjeta')
            card.imagen = item.imagen
            card.titulo = item.nombre
            card.estado = item.estado
            card.numero = item.numero

            data.forEach(function(municipio){
                if(item.ascmMunicipiosId === municipio.ascmMunicipiosId){
                    card.municipio = municipio.municipio
                }
            })
            content.appendChild(card)
        })                  
    })
 });