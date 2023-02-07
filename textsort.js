function textsort(unsortiert) {
    const separator = " ";
    var words = unsortiert.split(separator);
    
    for (let i = 0; i < words.length - 1; i++) {

        for (let j = i+1; j < words.length; j++) {

            if (words[i] > words[j]){
                var c=words[i];
                words[i]=words[j];
                words[j] = c;
            }
            
        }
        
    }
    return words.join(separator);
}