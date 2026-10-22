# Notehub 樂齡日記｜專案介紹網站

React 19 + TypeScript 6 + Vite 8 + Tailwind CSS 4（官方 Vite plugin）+ Lucide React。繁體中文單頁網站，部署目標為 https://idealproduct.github.io/NoteHub/ 。

## 本機執行

建議 Node.js 24 與 pnpm 12.11.2（本專案保留原有 pnpm lockfile）。

```sh
pnpm install --frozen-lockfile
npm run dev
```

開啟終端顯示的網址加 `/NoteHub/`。開發伺服器預設為 http://localhost:5173/NoteHub/ 。

```sh
npm run typecheck
npm run build
npm run preview
```

正式產物在 `dist/`。npm 可執行 scripts；安裝依賴請使用 pnpm，避免混用 lockfile。

## 檔案結構

- `src/components/Header.tsx`：桌面與手機導覽、目前閱讀區塊狀態、Escape 關閉選單、首頁主視覺。
- `src/components/Sections.tsx`：理念與團隊、已確認功能、作品、教學、聯絡與頁尾。
- `src/components/Shared.tsx`：品牌、共用標題、原始碼按鈕、手機展示框。
- `src/data/content.ts`：專案、成員、特色、導覽、教學與聯絡資料。
- `src/types/index.ts`：可擴充的團隊、教學與作品型別。
- `src/index.css`：Tailwind v4、集中管理的色彩系統、版面細節、響應式與減少動態設定。
- `public/images/app-phase2.png`：官方儲存庫既有截圖，未裁切，維持原始比例。
- `vite.config.ts`：React、Tailwind plugin 及 `/NoteHub/` base。
- `.github/workflows/deploy.yml`：main 推送／手動觸發，安裝、型別檢查、建置、官方 Pages artifact 與部署。

## GitHub Pages 部署

目前工作目錄不是 Git checkout，未進行 commit、push 或遠端設定變更。請將本網站檔案整合至 `idealproduct/NoteHub` 的 main 分支；保留原有 Android App、Gradle 與文件，不要直接覆蓋原本的 Android README，將本說明另存為網站文件。若遠端已有同名設定檔，先合併確認。

1. GitHub Repository → Settings → Pages → Build and deployment → Source 選擇 **GitHub Actions**。
2. Settings → Actions → General 確認允許 GitHub 官方及 pnpm/action-setup 工作流程；如果組織有政策限制，由管理者允許必要 action。
3. 推送 main 後檢查 Actions 的 Deploy NoteHub website to GitHub Pages；也可手動 Run workflow。
4. 若 github-pages environment 有審核規則，依儲存庫設定通過審核。
5. 部署成功後開啟 https://idealproduct.github.io/NoteHub/ 並驗證資源、錨點與手機選單。

沒有建立 React Router。所有 public 圖片以 `import.meta.env.BASE_URL` 引用，適用專案型 Pages。若更改 repo 名稱，請同步更新 Vite base。

## 內容依據與待補

查閱日期：2026-10-22。

- 功能來源：https://github.com/idealproduct/NoteHub/blob/main/README.md 。確認本機記事、分類與搜尋、月週日清單視圖、CameraX 照片記事、事項提醒及 Kotlin / Compose / Material 3 技術。
- 截圖來源：https://github.com/idealproduct/NoteHub/blob/main/phase2-screen.png 。僅為 Phase 2 早期驗證介面，不能當成最新版本截圖。首頁概念插畫明確標示「版面示意・非實際 App 畫面」。
- 成員資料尚未提供：在 `team` 陣列新增已確認的姓名、照片、職責、介紹、GitHub 或個人網站。空陣列會呈現待補說明，不會捏造人物。
- 待補最新版真實截圖、逐步操作圖片、精確操作入口、經確認的安裝說明。教學文字依 README 的功能順序整理，未宣稱已實機驗證。
- 目前未提供下載或線上體驗按鈕。公開文件提及的版本與限制應另行核對後再提供安裝連結。
- 若新增作品，請沿用 `Project` 型別擴充作品資料；目前僅呈現唯一已確認作品。

## 已執行驗證

- `npm run typecheck`：通過。
- `npm run build`：通過，包含 TypeScript project build。
- `pnpm install --frozen-lockfile --offline`：通過，鎖定版本一致。
- 本機正式預覽 HTML、截圖、favicon：皆回應 HTTP 200；UTF-8 繁體中文內容驗證通過。
- 已檢視官方截圖，圖片未裁切，圖片具有繁體中文替代文字。
- 已檢查正式 HTML 使用 `/NoteHub/assets/` 及 `/NoteHub/favicon.svg` 路徑，靜態截圖已複製至 dist。
- 已檢查內部錨點、外部連結與 mailto，外部新分頁包含 noopener noreferrer。
- 包含鍵盤焦點、跳至主內容、語意化區塊、手機選單 aria-expanded、Escape 關閉、減少動態設定。
- 原始碼已設定 320px 起的響應式布局，但環境沒有可用瀏覽器，尚未實測 320 / 768 / 1024 / 1440px、互動、主控台與實際載入。
- 未推送、未調整 GitHub Settings、未實際部署，不能宣稱網站已上線。
