let name = 'izanderson-guacy-herminio-florencio';
let newName = name.split('-');

for (let key in newName) {
  newName[key] = newName[key].charAt(0).toUpperCase() + newName[key].slice(1);
}

newName = newName.join(' ');

console.log(newName);
