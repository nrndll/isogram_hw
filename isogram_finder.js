const IsogramFinder = function (word) {
this.wordLower = word.toLowerCase();
this.wordArray = this.wordLower.split('');
}

IsogramFinder.prototype.isIsogram = function () {
    const characters = this.wordArray.reduce((array, character) => {
    if (array.indexOf(character) === -1){
      array.push(character);
    }
    return array;
    }, []);

    if(characters.length === this.wordArray.length){
        return true;
    } else {
        return false;
    };
}

module.exports = IsogramFinder;
