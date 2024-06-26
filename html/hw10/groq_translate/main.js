﻿const main = document.querySelector('main')

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

async function chat() {
    let lgu = document.querySelector('#trans')
    let qNode = document.querySelector('#before')
    let responseNode = document.querySelector('#after')
    responseNode.innerText = '詢問 ChatGPT 中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value+ '翻譯成' + lgu.value + '翻譯結果將以用戶需求的語言形式呈現，不適用羅馬拼音。 ## 翻譯格式範例 "您的翻譯是：<翻譯內容>"## 約束：- 只進行直接的語言翻譯，不包含譯自羅馬拼音的內容。- 按用戶需求提供的語言釋出內容。')
    responseNode.innerText = answer 
}