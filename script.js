// 選取 DOM 元素
const 訊息輸入框 = document.getElementById("message");
const 送出按鈕 = document.getElementById("send");
const 聊天內容 = document.querySelector(".chat-content");

// 監聽按鈕點擊事件
送出按鈕.addEventListener("click", () => {
    const 用戶訊息 = 訊息輸入框.value.trim(); // 取得輸入框內容

    // 若輸入框為空則不進行處理
    if (!用戶訊息) return;

    // 添加用戶訊息到聊天框
    添加訊息到聊天框(用戶訊息, "user");

    // 清空輸入框
    訊息輸入框.value = "";

    // 模擬機器人回應
    setTimeout(() => {
        const 機器人回應 = 生成機器人回應(用戶訊息); // 模擬回應
        添加訊息到聊天框(機器人回應, "bot");
    }, 1000); // 延遲 1 秒顯示回應
});

// 添加訊息到聊天框
function 添加訊息到聊天框(訊息, 發送者) {
    const 訊息氣泡 = document.createElement("div");
    訊息氣泡.textContent = 訊息;
    訊息氣泡.classList.add(發送者); // 加入 user 或 bot 的 class
    聊天內容.appendChild(訊息氣泡);

    // 滾動到最新消息
    聊天內容.scrollTop = 聊天內容.scrollHeight;
}

// 模擬機器人回應
function 生成機器人回應(用戶訊息) {
    // 根據用戶訊息回應簡單文本（可以擴展更複雜邏輯）
    return `此程式尚在開發階段，謝謝您的留言，祝您期末輕鬆All Pass`;
}

// 監聽鍵盤事件，支持 Enter 鍵發送訊息
訊息輸入框.addEventListener("keypress", (e) => {
    if (e.key === "Enter") 送出按鈕.click();
});
