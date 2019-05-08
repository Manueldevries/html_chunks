const y = [true,false,true,true,false,false,false,false,false,false]
const x = [true,true,false,false,false,false,true,false,true,false]
const fn = (arg) => console.log(arg);
y.map( item => item ? fn('tab>tr>td>tr>td') : fn('tr>td') )