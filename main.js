
class WordCounter{
    constructor(text){
        this.text = text;
        this.text.addEventListener('input',() => {this.count()})
    }
    count(){
        let wordStat = this.getWordStat(this.text.value.trim());
        this.emitEvent(wordStat);
    }
    getWordStat(str) {
        let matches = str.match(/\S+/g);
        return {
            characters: str.length,
            words: matches ? matches.length : 0,
        };
    }
    emitEvent(wordStat) {
        // Create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat
            }
        });
        // dispatch the count event
        this.text.dispatchEvent(countEvent);
    }
}
const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

new WordCounter(inputText);

const render = (event) => {
    statElem.innerHTML = `<p>You've written <span class="highlight">${event.detail.wordStat.words} words</span> 
    and <span class="highlight">${event.detail.wordStat.characters} characters</span>.</p>`;
}

inputText.addEventListener('count', render);
