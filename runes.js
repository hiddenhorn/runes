//© 2017 Wotan's Rabbit with help from Thor
function convert(from,to) {
x=[
['ch','ᚳᛃ'],['ng','ᛜ'],['ei','ᛇ'],['th','ᚦ'],['q','ᚳᚹ'],['x','ᚳᛊ'],['y','ᛃᛃ'],['f','ᚠ'],['u','ᚢ'],['a','ᚨ'],['r','ᚱ'],['c','ᚳ'],['k','ᚲ'],['g','ᚷ'],['v','ᚡ'],['w','ᚹ'],['h','ᚺ'],['n','ᚾ'],['i','ᛁ'],['j','ᛃ'],['p','ᛈ'],['z','ᛉ'],['s','ᛊ'],['t','ᛏ'],['b','ᛒ'],['e','ᛖ'],['m','ᛗ'],['l','ᛚ'],['d','ᛞ'],['o','ᛟ']];

var str = document.getElementById("runes").value.toLowerCase();   
for (k=0;k<30;++k) {     
    var re = new RegExp(x[k][from], 'g');
    var str = str.replace(re,x[k][to]);
    }
document.getElementById("runes").value = str;
}
