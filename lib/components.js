class Components{
    constructor(children = []){
        this.children = children;
    }
    render(){
        throw new Error("Child class must implement render() method.");
    }
    renderInnerHTML(){
        let innerHTML = "";
        for(let i=0;i<this.children.length;i++){
            if(typeof this.children[i] === "string" ){
                innerHTML += this.chidlren[i];
            }else{
                innerHTML += this.children[i].render();
            }
        }
        return innerHTML;
    }
}

module.exports = Components;

// class Header extends Components{
//     constructor(header){
//     }
//     render(){
//         return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
//     }
// }

// class TaskListItem extends Components{
//     constructor(){

//     }
// }

// class TaskList extends Components{
//     constructor(){

//     }
// }


