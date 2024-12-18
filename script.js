// 選取 DOM 元素
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
const chatContent = document.querySelector(".chat-content");

// 監聽按鈕點擊事件
sendButton.addEventListener("click", () => {
    const userMessage = messageInput.value.trim(); // 取得輸入框內容

    // 若輸入框為空則不進行處理
    if (!userMessage) return;

    // 添加用戶消息到聊天框
    addMessageToChat(userMessage, "user");

    // 清空輸入框
    messageInput.value = "";

    // 模擬機器人回應
    setTimeout(() => {
        const botReply = generateBotReply(userMessage); // 模擬回應
        addMessageToChat(botReply, "bot");
    }, 1000); // 延遲 1 秒顯示回應
});

// 添加消息到聊天框
function addMessageToChat(message, sender) {
    const messageBubble = document.createElement("div");
    messageBubble.textContent = message;
    messageBubble.classList.add(sender); // 加入 user 或 bot 的 class
    chatContent.appendChild(messageBubble);

    // 滾動到最新消息
    chatContent.scrollTop = chatContent.scrollHeight;
}

// 模擬機器人回應
function generateBotReply(userMessage) {
    // 根據用戶消息回應簡單文本（可以擴展更複雜邏輯）
    return `You said: "${userMessage}". I'm a bot, how can I help you?`;
}

// 監聽鍵盤事件，支持 Enter 發送消息
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
});
