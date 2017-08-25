function ClozeCard(text,cloze){
    this.cloze = cloze
    this.partial = text.replace(cloze,"...")
    this.fullText = text
    this.brokenCloze = function() {
        
        if (text.indexOf(cloze) === -1){
            console.log("error")
        }
        
    }

    
}

module.exports = ClozeCard
