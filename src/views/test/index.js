export default class Test{
    constructor($root){
        this.$root = $root
        this.render();
        this.events = {
          "click #tab-link1": "add"
        }
    }
    
    render(){
      var indexTmpl = require('./test.art');
      this.$root.html(indexTmpl)
    }
    add(){
      alert(565656);
    }
  }