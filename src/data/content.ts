import type { Project, TeamMember, TutorialStep } from '../types'
export const project: Project = {
  name: 'Notehub 樂齡日記', platform: 'Android App', repository: 'https://github.com/idealproduct/NoteHub',
  screenshot: import.meta.env.BASE_URL + 'images/app-phase2.png',
  screenshotCaption: '版面示意・非實際 App 畫面',
  tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Android'],
}
export const contact = { email: 's111314108@student.nqu.edu.tw' }
// 僅加入已取得本人同意且確認的成員資料；avatar 可使用 import.meta.env.BASE_URL + 'images/檔名'。
export const team: TeamMember[] = Array.from({ length: 6 }, (_, index) => ({
  id: `member-${index + 1}`,
  name: `成員 ${String(index + 1).padStart(2, '0')}・姓名待補`,
  role: '團隊職責待補',
  bio: '個人簡介待補，確認後將在這裡介紹這位夥伴。',
}))
export const navigation = [{ id: 'home', label: '首頁' }, { id: 'about', label: '關於我們' }, { id: 'features', label: '專案特色' }, { id: 'works', label: '作品介紹' }, { id: 'tutorial', label: '使用教學' }, { id: 'contact', label: '聯絡我們' }]
export const features = [
  { icon: 'notebook', title: '把日常，好好寫下來', description: '新增與編輯記事，記下標題、描述與自訂分類，讓生活點滴有個安放的地方。', label: '記事與分類' },
  { icon: 'calendar', title: '每一天，都有自己的安排', description: '透過月、週、日與清單視圖查看事項，也能搜尋標題、描述與分類。', label: '行事曆與搜尋' },
  { icon: 'camera', title: '用照片，留下生活片刻', description: '拍攝並加入多張照片，為照片寫下說明，讓記事多一份回憶的溫度。', label: '照片記事' },
  { icon: 'bell', title: '重要的小事，記得提醒', description: '為事項設定多個提醒，並依需要調整時間、停用或移除。', label: '事項提醒' },
]
// 依官方 README 可操作功能整理；精確按鈕位置與最新對應截圖待補。
export const tutorial: TutorialStep[] = [
  { title: '先認識你的行事曆', description: '在月、週、日與清單視圖之間切換，查看不同時間範圍的事項；使用「今天」回到當日。', note: '對應操作截圖待補' },
  { title: '建立一則生活記事', description: '新增事項並填寫標題、描述與分類，依需要設定開始與結束日期、時間。', note: '新增入口與編輯畫面待補' },
  { title: '為記憶加上照片與提醒', description: '依需要拍攝照片、加入說明，或為事項設定提醒。相機及通知權限請依裝置提示操作。', note: '照片與提醒操作截圖待補' },
  { title: '隨時回顧，輕鬆尋找', description: '以標題、描述或分類搜尋記事，並透過分類與完成狀態篩選，找到想回顧的內容。', note: '搜尋與篩選畫面待補' },
]
