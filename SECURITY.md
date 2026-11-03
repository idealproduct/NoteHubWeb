# 網站安全性確認

檢查日期：2026-10-31。本次確認的是目前本機程式及建置產物，不代表已發布版本已套用。

## 安全邊界

這是 GitHub Pages 靜態介紹網站，沒有後端程式、登入、資料庫或私有 API。瀏覽器必須取得公開文字、圖片與 JavaScript 才能顯示網站，因此爬蟲及 F12 可以讀取這些內容，無法也不應承諾阻止。團隊姓名、系級、職責及聯絡信箱都是公開內容，發布前應確認適合公開。

不要把私人資料、日記、密碼、憑證或未公開文件放在 src、public 或前端環境變數。VITE_ 環境變數會被打包至瀏覽器。未來如需私人資料，必須使用具備伺服器端身分驗證及逐項授權的後端；不能以隱藏網址、前端密碼或停用 F12 保護。

## 已實作

- 正式建置明確停用 source maps，清空舊 dist，僅發布 dist。
- 正式 HTML 加入 CSP：只允許本站腳本、樣式、圖片及字型；禁止頁面發起 fetch/WebSocket 等連線、外掛物件、表單提交與 base URL 改寫。不允許 unsafe-inline / unsafe-eval。
- no-referrer 政策避免從網站連結傳送來源網址。
- build 最後自動檢查發布檔案白名單、source map 引用及常見憑證格式。發現問題會以非零狀態阻止後續 predeploy / Actions 發布。新增公開圖片時需先調整 scripts/check-dist.mjs。
- .gitignore 加入環境檔與常見私鑰檔。這不能移除已提交的檔案或 Git 歷史。

檢查未發現應用程式使用 fetch、瀏覽器儲存、eval 或 innerHTML 注入。未發現符合檢查器規則的憑證；自動比對不能保證涵蓋所有秘密格式。

## GitHub 與網域設定

- 保留目前自訂網域及 Vite base `/`，沒有改回舊專案路徑。
- `pnpm deploy` 透過 gh-pages 僅發布 dist；或使用 Actions 官方 Pages artifact 部署。Settings → Pages 應選擇實際採用的發布來源，避免兩種流程互相覆蓋。
- 在 Settings → Pages 確認自訂網域正確且 Enforce HTTPS 已啟用；檢查 DNS 不再使用時移除以防網域接管風險。
- 公開 GitHub 儲存庫及其歷史仍可被讀取，dist 檢查不能隱藏公開 repo。若曾提交憑證，立即撤銷與輪換，再處理歷史。
- 本次未修改 GitHub Settings、DNS 或推送部署。公開網站無法由本次網路工具取得，HTTPS、實際回應標頭與線上檔案未驗證。

CSP 使用 HTML meta，GitHub Pages 無法透過本專案檔案任意設定 HTTP 安全標頭。frame-ancestors（防嵌入）、HSTS、X-Content-Type-Options 等須由支援的 CDN／反向代理或託管平台設定，不能把它們放入 meta 假裝已啟用。CSP 是降低注入風險的機制，不能阻止使用者從 DevTools 讀取頁面或執行自己的指令。

## 驗證

執行 `npm run build`（型別檢查、正式打包與安全檢查），或建置後執行 `npm run security:dist`。

本機安全檢查以檔案白名單與常見憑證格式為範圍，不等同滲透測試或完整第三方相依性稽核。環境沒有可用瀏覽器，CSP 的實際瀏覽器相容性及主控台需於上線後確認。

本次結果：正式建置與 6 個發布檔案檢查通過；以暫存測試 .env 驗證可阻止發布，測試檔已移除。pnpm audit --prod 因網路未完成，不能宣稱依賴漏洞稽核通過。
