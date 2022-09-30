window.onload = logNamesandPoints;
window.onafterprint = logNamesandPoints;

function logNamesandPoints(){
    const sheetId = '1lIxkHORiR1LZuLCI7yY0kWw0XgMztvAR9iQ2KnSiY6E';
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'Tournament Data';
    const query = encodeURIComponent('Select *');
    const url = `${base}&sheet=${sheetName}&td=${query}`;

    const data = [];
    const colz = [];

    var nameOfChamp = document.getElementsByClassName("champName");
    var resultsOfChamp = document.getElementsByClassName("results");

    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(jsonData)
 
 
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                }
            })
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            
            for(let i = 0; i < nameOfChamp.length; i++) {
                nameOfChamp[i].textContent = data[1+i].NameSurname;
                resultsOfChamp[i].textContent = data[1+i].Point;
            }
        })
}