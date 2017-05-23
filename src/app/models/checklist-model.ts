export class ChecklistModel {
 
    constructor(public title: string, public items: any[]){
 
    }
 
    addItem(item){
        this.items.push({
            title: item,
            checked: false
        });
    }
 
    removeItem(item){
 
        var index = this.items.indexOf(item);
        if(index > -1) {
            this.items.splice(index, 1);
        }
 
    }
 
    renameItem(item, title){
        var index = this.items.indexOf(item);
        if(index > -1) {
            this.items[index].title = title;
        }
    }
 
    setTitle(title){
        this.title = title;
    }
}