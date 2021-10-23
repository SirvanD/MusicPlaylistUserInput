let playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'Sugar',
  'test'
  
  
];

function myFunction() {
  playlist.push(document.getElementById("myText").value);
  document.querySelector('main').innerHTML = createListItems(playlist)
  } ;
  
  
  
function createListItems(arr) {
  let items = '';
   for ( i=0; i< arr.length; i++ ) {
    items += `<li> ${ arr[i] } </li>`;
   };
   let myList = `<ol>
   ${items}
   </ol>`
   return myList;
};
let myNewList = createListItems (playlist);
document.querySelector('main').innerHTML = myNewList;