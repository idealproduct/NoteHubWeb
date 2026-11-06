import { ArrowUpRight, BookOpen, Code2 as Github } from 'lucide-react'
import type { ReactNode } from 'react'
import { project } from '../data/content'
export function Brand() { return <a href="#home" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Notehub 樂齡日記，回首頁"><span className="brand-icon"><BookOpen size={23} /></span><span className="text-2xl">Notehub<span className="ml-2 text-base font-medium">樂齡日記</span></span></a> }
export function SourceLink({ children = '查看專案原始碼', light = false }: { children?: ReactNode; light?: boolean }) { return <a href={project.repository} target="_blank" rel="noopener noreferrer" className={`button ${light ? 'button-light' : 'button-outline'}`}><Github size={19} />{children}<ArrowUpRight size={17} /></a> }
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="mb-10"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="mt-4 text-muted text-lg">{description}</p>}</div> }
export function Phone({ compact = false, actual = false }: { compact?: boolean; actual?: boolean }) {
  return <div className={`phone ${compact ? 'phone-small' : ''}`}><div className="phone-camera" />{actual ? <img src={project.screenshot} alt="NoteHub Android 應用程式截圖" className="w-full h-auto" /> : <div className="phone-page">
  <div className="phone-status"><span>9:41</span><span aria-hidden="true">● ▰</span></div>
  <div className="phone-brand"><BookOpen size={22} /><b>Notehub</b></div>
  <div><p className="phone-tagline">把生活，寫成回憶</p><p className="phone-message">日子很平凡，<br />也很珍貴。</p></div>
  <div className="diary-art"><span className="sun" /><span className="hill hill-back" /><span className="hill" /><span className="path" /></div>
  <p className="phone-memory">生活裡的小美好</p>
  <p className="phone-caption">版面示意<br />非實際 App 畫面</p></div>}</div>
}
export function WebSourceLink({ children = '查看網頁原始碼', light = false }: { children?: ReactNode; light?: boolean }) { return <a href={project.webRepository} target="_blank" rel="noopener noreferrer" className={`button ${light ? 'button-light' : 'button-outline'}`}><Github size={19} />{children}<ArrowUpRight size={17} /></a> }


