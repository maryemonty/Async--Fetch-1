fetch('https://striveschool-api.herokuapp.com/books')
    .then(r => r.json())
    .then(books => {
        const grid = document.getElementById('books-container');
        grid.innerHTML = ''

        books.forEach((books) => {
            const col = document.createElement('div');
            col.className = 'col'
            col.innerHTML = `
            <div class="card m-3" style="min-height: 600px; max-height: 600px;">
            <img style="min-height: 300px; max-height: 300px;" src="${books.img}" class="card-img-top">
                <div class="card-body">
                    <h5 style="height: 160px;" class="card-title">${books.title}</h5>
                    <p class="card-text">${books.price} $</p>
                    <button id="btn" class="btn btn-primary">Scarta</button>
                </div>
            </div>`

            const discard = col.querySelector('#btn')
            discard.onclick = () => {
                col.remove()
            }
            grid.append(col)
        });
    })
    .catch(error => console.log("CATCH", error))

