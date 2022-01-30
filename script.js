let countCode;
let promise;
function dis(word){
  
  promise = fetch(`https://restcountries.com/v2/name/${word}?fullText=true`)
  .then(response => response.json())
  .then(data=> {
    countCode = data[0].alpha2Code;
    
  }).catch(()=>{
    document.querySelector('.image').insertAdjacentHTML('beforeend', `<h1>COUNTRY NOT FOUND</h1>`);
  });
}

const word = prompt("enter word");
dis(word);

      promise.then(()=>{
        if(countCode){
            const image = `https://corona.dnsforfamily.com/graph.png?c=${countCode}`;
            const html = `
            <img src ='${image}' class="countryimage">`;
            document.querySelector('.image').insertAdjacentHTML('beforeend', html);
        }
      });
