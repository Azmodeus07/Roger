selectTag=document.querySelectorAll("select");
translateButton = document.querySelector('button');
fromText=document.querySelector('.from-text');
toText=document.querySelector('.to-text');
exchangeButton = document.querySelector();
icons=document.querySelectorAll(".row i");

const copyContent=(content) =>{
    navigator.clipboard.writeText(text);
}

const utterText=(text,language) =>{
    // const synth= window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang=language;
    window.speechSynthesis.speak(utterThis);
}

selectTag.forEach((tag, id)=>{
    for(let language in languages){
        let selected= id==0 ? language== "en-GB"?"selected":"":language=="hi-IN"?"selected":"";
        let option = `<option ${selected} value="${language}">${language[languages]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
})

exchangeButton.addEventListener("click",() =>{
    let tempValue=fromText.value
})

translateButton.addEventListener("click", ()=>{
    fromLanguage= selectTag[0].value
    toLanguage= selectTag[1].value
    console.log(fromLanguage,toLanguage,fromLanguage);
    let text=fromtext.value;

    let url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`;
    fetch(url).then(res=>res.json()).then(data =>{
        toText.value=data.responseData.translatedText;
    })
})

icons.forEach(icon=>{
    icon.addEventListener("click",({target})=>{
        if(!fromText.value || !toText.value) return;
if(target.classList.contains("fa-copy")){
    if(target.id== "from"){
        copyContent(fromText.value);
    } else{
        copyContent(toText.value);
    }
}else{
    if(target.id== "from"){
        utterText(fromText.value,slectTage[0].value);
    } else {
        utterText(toText.value,slectTage[1].value);
    }

}
    })
})