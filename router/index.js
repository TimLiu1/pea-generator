'use strict';
var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    constructor(args, opts){
        super(args, opts);
        this.option('babel');
    }
    ok(){
        console.log('this.name', process.argv[3]); 
        
    }
    // if the controller name is suffixed with ctrl, remove the suffix
    // if the controller name is just "ctrl," don't append/remove "ctrl"
    // if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    //     this.name = this.name.slice(0, -4);
    // }
};



