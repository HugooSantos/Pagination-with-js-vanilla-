function populateList(){
    
const data = Array.from({length: 100}).map((_ , i) => `<div class= 'item' > item ${(i + 1)}</div>`)
const list = document.querySelector('.list')
list.innerHTML = data.join("")
return data
}
const data = populateList()

let perPage = 10
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)

}


const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPage
        if(lastPage){
            state.page--
        }
    },
    prev() {},
    goTo() {}
}


console.log(populateList());