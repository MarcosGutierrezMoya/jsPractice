class WordCounter{
    constructor(text){
        this.text = text;
        this.text.addEventListener('input',this.count)
    }
    count(){
        let wordStat = this.getWordStat(this.inputText.value.trim());
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
        this.inputText.dispatchEvent(countEvent);
}
}