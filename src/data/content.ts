import type { Project, TeamMember, TutorialStep, MemberInfo } from '../types'

// const memberinfo: string[][] = [
//   ['余光昇', '電機四', '', ''],
//   ['邱鈺璇', '護理三', '協助長者健康需求評估、參與輔具設計發想', ''],
//   ['楊喻翔', '資工一', '', ''],
//   ['陳怡光', '資工一', '機動組員', ''],
//   ['林奕丞', '資工一', '網頁設計、應用程式設計', ''],
//   ['沈少宇', '資工一', '', '']
// ] 一坨答辯

const memberinfo: MemberInfo[] = [
  {
    class: '電機四',
    name: '余O昇',
    role: '上台報告、測試與反饋',
    bio: ''
  },
  {
    class: '護理三',
    name: '邱O璇',
    role: '協助長者健康需求評估、參與輔具設計發想',
    bio: ''
  },
  {
    class: '資工一',
    name: '楊O翔',
    role: '機動組員',
    bio: ''
  },
  {
    class: '資工一',
    name: '陳O光',
    role: '機動組員',
    bio: ''
  },
  {
    class: '資工一',
    name: '林O丞',
    role: '網頁設計、應用程式設計',
    bio: ''
  },
  {
    class: '資工一',
    name: '沈O宇',
    role: ' 參與討論、想法提供、技術支援',
    bio: ''
  }
]

export const project: Project = {
  version: '0.10.0',
  name: 'Notehub 樂齡日記', platform: 'Android App', repository: 'https://github.com/idealproduct/NoteHub', webRepository: 'https://github.com/idealproduct/NoteHubWeb',
  screenshot: import.meta.env.BASE_URL + 'images/app-phase2.png',
  screenshotCaption: '官方 Phase 2 驗證截圖，非目前操作介面',
  tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Material 3', 'Room', 'DataStore', 'CameraX', 'ExifInterface', 'AlarmManager', 'WorkManager', 'Google Calendar API'],
}
// 填入已確認的指導教授姓名。
// export const course = { advisor: '黃玉苹教授 趙于翔教授' }
export const contact = { email: 's111314108@student.nqu.edu.tw' }
// 僅加入已取得本人同意且確認的成員資料；avatar 可使用 import.meta.env.BASE_URL + 'images/檔名'。
export const team: TeamMember[] = Array.from({ length: 6 }, (_, index) => ({
  id: `member-${index + 1}`,
  // name: `成員 ${String(index + 1).padStart(2, '0')}・姓名待補`,
  // name: `${memberinfo[index].class}    ${memberinfo[index].name}`,
  name: `${memberinfo[index].name}`,
  // role: '團隊職責待補',
  role: `${memberinfo[index].role ? memberinfo[index].role : '團隊職責待補'}`,
  // bio: '個人簡介待補，確認後將在這裡介紹這位夥伴。',
  bio: `${memberinfo[index].bio ? memberinfo[index].bio : ''}`
}))
export const navigation = [{ id: 'home', label: '首頁' }, { id: 'about', label: '關於我們' }, { id: 'features', label: '專案特色' }, { id: 'works', label: '作品介紹' }, { id: 'tutorial', label: '使用教學' }, { id: 'contact', label: '聯絡我們' }]
export const features = [
  { icon: 'notebook', title: '把日常，好好寫下來', description: '分類記事、查看行程，輕鬆找回日常。', label: '記事與行事曆' },
  { icon: 'camera', title: '用照片，留下生活片刻', description: '預覽照片、編輯說明，單張匯出留念。', label: '照片預覽與匯出' },
  { icon: 'bell', title: '重要的小事，記得提醒', description: '同篇記事設定多筆提醒，重要小事不忘記。', label: '照片記事提醒' },
  { icon: 'calendar', title: '行事曆同步，由你決定', description: '授權後啟用雙向同步，衝突由你確認。', label: '選用 Google 雙向同步' },
]
export const productHighlights = [
  { title: '照片就在記事裡', description: '點開記事照片，即可預覽與編輯說明。' },
  { title: '單張匯出，自行選擇位置', description: '匯出 JPEG 副本，保留拍攝時間與方向。' },
  { title: '同步前，先由你授權', description: '授權才同步；照片檔案與提醒不上傳。' },
]
// 僅依 RELEASE_NOTES.md 0.10.0 及之前版本整理，不採用後續版本流程。
export const tutorial: TutorialStep[] = [
  { title: '查看行事曆，建立生活記事', description: '切換月、週、日與清單視圖，新增事項並填寫標題、描述與分類，依需要設定日期及時間。也可用搜尋與篩選找回記事。', note: '對應操作截圖待補' },
  { title: '開啟記事，查看與編輯照片', description: '開啟事件詳情，直接查看記事中的照片；點選照片進入預覽，編輯照片說明。原始拍攝時間不會因稍後儲存或修改說明而改變。', note: '照片預覽與說明畫面待補' },
  { title: '匯出一張珍貴的照片', description: '使用單張照片匯出功能，選擇副本的儲存位置。匯出格式為 JPEG，保留拍攝時間及方向資訊。', note: '單張匯出；匯出入口與選擇位置截圖待補' },
  { title: '為照片記事加上提醒', description: '在照片記事頁開啟提醒管理，為同一篇記事新增多筆獨立鬧鐘。通知與精準鬧鐘權限請依裝置提示確認。', note: '未允許精準鬧鐘時，排程可能延遲；操作截圖待補' },
  { title: '依需要啟用 Google 同步', description: '如需雙向同步，額外授予 Google 讀寫權限並主動啟用，再選擇立即同步或每 1／6／12／24 小時同步。遇到雙邊修改衝突或刪除，需手動確認。', note: '此為選用功能；照片檔案與提醒不會上傳，實際背景執行仍受裝置環境影響' },
]