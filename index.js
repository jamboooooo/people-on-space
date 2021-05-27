window.addEventListener('DOMContentLoaded', () => {
    const countPeople = document.getElementById('count')
    const table = document.querySelector('table')
    fetch("http://api.open-1notify.org/astros.json")
        .then((res) => res.json())
        .then((data) => {
            // ТВОЕ РЕШЕНИЕ
            countPeople.textContent = data.number
            data.people.forEach((item, i) => {
                const num = document.createElement('td')
                const place = document.createElement('td')
                const nameHuman = document.createElement('td')
                const row = document.createElement('tr')
                nameHuman.textContent = item.name;
                place.textContent = item.craft;
                num.textContent = i + 1;
                row.append(num, place, nameHuman)
                table.append(row)
            });
        })
        .catch((error) => {
            // ОБРАБОТКА ОШИБОК
            countPeople.textContent = 'неизвестно';
            table.remove();
            const container = document.querySelector('.container')
            const div = document.createElement('div')
            div.textContent = error.message
            container.append(div)
            console.log(data.message)


        })
});