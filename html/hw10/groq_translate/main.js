const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData.choices[0].message.content
}

async function translate(){
    let qNode = document.querySelector('#before')
    let responseNode = document.querySelector('#after')

    responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value +'將上述句子翻譯成英文')
    responseNode.innerText = answer
}