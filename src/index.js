
function renderTasks(){
    console.log("In renderTasks")
    console.log(data)

    for (let i = 0; i < data.length; i++){
        const card = data[i]
        const cardLi = document.createElement('li')

        card.className = 'card';
        const title = document.createElement('h2');
        title.className = 'card--title';
        title.textContent = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1).toLowerCase();

        const image = document.createElement('img');
        image.className = 'card--img';
        image.width = 256;
        image.src = data[i].sprites.other['official-artwork'].front_default;

        const stats = document.createElement('ul');
        stats.className = 'card--text';

        data[i].stats.forEach(stat => {
        const statItem = document.createElement('li');
        statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
        stats.appendChild(statItem);
        });
        
        cardLi.className = 'card';
        cardLi.appendChild(title);
        cardLi.appendChild(image);
        cardLi.appendChild(stats);
        document.querySelector('.cards').appendChild(cardLi);
    }
}

function main(){
    renderTasks()

}
main()

