const fs = require('fs');
let base_js = fs.readFileSync('js/index-CMhpX1FL.js', 'utf8');

base_js = base_js.replace('onClick:(e)=>{e.preventDefault();},children:["Project Overview"]})]})]})},G0e=', 'onClick:(e)=>{e.preventDefault();},G0e=')
base_js = base_js.replace('onClick:(e)=>{e.preventDefault();},children:["Project Overview"]})]})},G0e=', 'onClick:(e)=>{e.preventDefault();},G0e=')
base_js = base_js.replace('onClick:(e)=>{e.preventDefault();},children:["Project Overview"]})})},zS=', 'onClick:(e)=>{e.preventDefault();},zS=')
base_js = base_js.replace('onClick:(e)=>{e.preventDefault();},children:["Project Overview"]})]})]},x.slug)', 'onClick:(e)=>{e.preventDefault();},x.slug)')
base_js = base_js.replace('onClick:(e)=>{e.preventDefault();},children:["Project Overview"]})]})},x.slug)', 'onClick:(e)=>{e.preventDefault();},x.slug)')

const lines = base_js.split('\n');
const matches = [];
let idx = 0;
while (true) {
    let nextIdx = base_js.indexOf('onClick:(e)=>{e.preventDefault();},', idx);
    if (nextIdx === -1) break;
    matches.push(nextIdx);
    idx = nextIdx + 1;
}

for (let i = 0; i < matches.length; i++) {
    // Find the line number
    let chars = 0;
    for (let l = 0; l < lines.length; l++) {
        chars += lines[l].length + 1; // +1 for newline
        if (chars > matches[i]) {
            console.log(`MATCH ${i} is on line ${l + 1}, column ${lines[l].length - (chars - matches[i])}`);
            break;
        }
    }
}
