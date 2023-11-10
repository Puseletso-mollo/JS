fetch ('./data.json')
.then(resp => resp.json())
.then(data =>{
    const dataList = document.getElementById('data-list');
    //Let's get our items and create a list from data source
    data.forEach(item =>{
        const itemList = document.createElement('li');
        itemList.innerHTMl= `<strong>Name:</strong> ${item.name}<br><strong>Email:</strong> ${name.email}`
        dataList.appendChild(itemList)


    });
});
.catch(error=>{
    console.error('Error loading data from data source', error);
})