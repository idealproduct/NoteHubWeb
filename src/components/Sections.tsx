import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  Camera,
  Code2 as Github,
  Heart,
  Mail,
  Sprout,
  Users,
} from 'lucide-react'
import { contact, features, navigation, project, team, tutorial } from '../data/content'
import { Brand, Phone, SectionHeading, SourceLink } from './Shared'

const icons = {
  notebook: BookOpen,
  calendar: CalendarDays,
  camera: Camera,
  bell: Bell,
}

export function About() {
  return (
    <section id="about" className="section container">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="lg:col-span-2 max-w-3xl">
          <SectionHeading
            eyebrow="01 / ABOUT US"
            title="認識我們"
            description="用心打造，讓生活紀錄更加簡單。"
          />
          <p className="text-muted text-lg leading-8">
            我們相信，值得記錄的不只有特別的日子。一次散步、一場相聚，或是想留給明天的話，都能成為生活的一部分。
          </p>
          <p className="mt-5 text-muted leading-8">
            NoteHub 樂齡日記是一款為長者打造的 Android 應用程式。我們以長者的日常紀錄需求為出發點，將記事、行事曆與照片放進生活的節奏裡，讓每一份回憶都能被好好留下。
          </p>
          <div className="mt-8 flex items-center gap-3 text-teal">
            <Sprout size={22} />
            <span>讓科技親近生活，讓紀錄回到日常。</span>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-3xl bg-sage p-6 sm:p-10">
          <div className="flex justify-between items-center">
            <span className="eyebrow">THE PEOPLE BEHIND NOTEHUB</span>
            <Users className="text-teal" />
          </div>
          <h3 className="mt-8 text-2xl font-semibold">一起，把想法變成日常。</h3>

          {team.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {team.map(member => (
                <article key={member.id} className="rounded-2xl border border-line bg-white p-6">
                  {member.avatar ? (
                    <img
                      className="h-20 w-20 rounded-full object-cover"
                      src={member.avatar}
                      alt={`${member.name}的照片`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage text-teal" aria-label="成員照片待補">
                      <Users size={32} aria-hidden="true" />
                    </div>
                  )}
                  <h4 className="mt-5 text-xl font-bold">
                    {member.name}
                  </h4>
                  <p className="mt-2 font-medium text-teal">{member.role}</p>
                  <p className="mt-3 text-muted">{member.bio}</p>
                  {member.github && (
                    <a
                      className="inline-flex min-h-11 items-center underline"
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {member.website && (
                    <a
                      className="ml-4 inline-flex min-h-11 items-center underline"
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      個人網站
                    </a>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-7 border-t border-teal/20 pt-6 flex items-start gap-4">
                <span className="rounded-full bg-white p-3">
                  <Users size={22} />
                </span>
                <div>
                  <p className="font-semibold">團隊介紹準備中</p>
                  <p className="mt-2 text-muted">
                    成員姓名、職責與個人介紹尚待補充，確認後將在這裡與大家見面。
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm text-muted">資料待補 · 不使用虛構人物或照片</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="section bg-white border-y border-line">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            eyebrow="02 / MADE FOR EVERYDAY"
            title="為日常紀錄而設計"
            description="從一則記事開始，慢慢收藏生活的樣子。"
          />
          <p className="mb-10 text-sm text-muted">以下功能依官方 README 整理</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons]

            return (
              <article className="feature-card" key={feature.title}>
                <div className="flex justify-between items-center">
                  <span className="rounded-2xl bg-sage p-3 text-teal">
                    <Icon size={25} />
                  </span>
                  <span className="text-sm text-muted">0{index + 1}</span>
                </div>
                <p className="mt-7 text-xs tracking-widest text-teal">{feature.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-8">{feature.title}</h3>
                <p className="mt-4 text-muted leading-7">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Works() {
  return (
    <section id="works" className="section container">
      <SectionHeading
        eyebrow="03 / OUR WORK"
        title="作品介紹"
        description="認識 Notehub 樂齡日記，探索我們的專案成果。"
      />
      <div className="grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
        <div className="work-stage flex items-center justify-center px-6 py-12">
          <Phone compact actual />
        </div>
        <div className="bg-white p-7 sm:p-12 lg:self-stretch lg:flex lg:flex-col lg:justify-center">
          <p className="eyebrow">ANDROID APPLICATION</p>
          <h3 className="mt-5 text-3xl font-semibold">{project.name}</h3>
          <p className="mt-5 text-muted leading-8">
            以本機記事與行事曆為核心的 Android App，結合多種時間視圖、照片記事與事項提醒，讓日常安排與生活記憶有序留存。
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="rounded-md border border-line px-3 py-1 text-sm text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <SourceLink>查看 GitHub 原始碼</SourceLink>
          </div>
          <p className="mt-5 text-sm text-muted">
            此為 Android 應用程式，沒有瀏覽器線上體驗版本。
          </p>
          <p className="mt-3 text-sm text-muted">官方 Phase 2 驗證截圖，非最新版介面。</p>
        </div>
      </div>
      <a
        href="https://github.com/idealproduct/NoteHub/blob/main/README.md"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-teal underline underline-offset-4"
      >
        閱讀完整功能與開發文件
        <ArrowUpRight size={16} />
      </a>
    </section>
  )
}

export function Tutorial() {
  const [first] = tutorial

  return (
    <section id="tutorial" className="section bg-sage/55 border-y border-line">
      <div className="container">
        <SectionHeading
          eyebrow="04 / GETTING STARTED"
          title="使用教學"
          description="跟著簡單的步驟，開始認識 Notehub。"
        />
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <figure className="rounded-3xl border border-line bg-white p-6 sm:p-8 self-start">
            <img
              className="mx-auto w-full max-w-72 h-auto rounded-xl"
              src={project.screenshot}
              alt="官方 Phase 2 驗證截圖：我的行事曆、搜尋、分類與月週日清單選項"
              width="1344"
              height="2992"
              loading="lazy"
            />
            <figcaption className="mt-5 text-sm text-muted leading-6">
              官方儲存庫 Phase 2 驗證截圖，保留原始比例。這是早期介面，最新版本外觀可能不同。
              <span className="block mt-1">對應「{first.title}」與搜尋操作。</span>
            </figcaption>
          </figure>

          <div>
            {tutorial.map((step, index) => (
              <article className="step-row" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-muted leading-8">{step.description}</p>
                  <p className="mt-3 text-sm text-teal">{step.note}</p>
                </div>
              </article>
            ))}
            <div className="mt-6 rounded-xl bg-white p-5 text-sm text-muted leading-7">
              <b className="text-ink">開始之前</b>
              <p>
                本教學依 README 功能整理。安裝方式與逐步操作截圖待確認；請先閱讀原始碼文件，或聯絡團隊取得協助。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="contact-panel grid gap-10 rounded-3xl px-7 py-12 sm:p-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow !text-white/75">05 / SAY HELLO</p>
          <h2 className="section-title !text-white">與我們聯絡</h2>
          <p className="mt-5 text-white/85 leading-8">
            對 Notehub 有任何疑問、建議或合作想法嗎？
            <br />
            歡迎與我們分享，讓每一個想法被好好聽見。
          </p>
          <Heart className="mt-8 text-white/70" size={28} />
        </div>

        <div className="space-y-4 self-center">
          <a className="contact-link" href={`mailto:${contact.email}`}>
            <Mail size={23} />
            <span className="min-w-0">
              <span className="block text-sm text-white/75">電子郵件</span>
              <span className="break-all">{contact.email}</span>
            </span>
            <ArrowUpRight className="shrink-0 ml-auto" size={20} />
          </a>
          <a
            className="contact-link"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={23} />
            <span>
              <span className="block text-sm text-white/75">GitHub 專案</span>
              idealproduct / NoteHub
            </span>
            <ArrowUpRight className="ml-auto" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-4 text-muted">記錄日常，珍藏每一份回憶。</p>
          </div>
          <nav aria-label="頁尾快速連結" className="grid grid-cols-2 gap-2">
            {navigation.map(item => (
              <a
                className="inline-flex min-h-11 items-center text-muted hover:text-teal"
                key={item.id}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-start gap-2">
            <a
              className="inline-flex min-h-11 items-center gap-2 text-teal"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 原始碼
              <ArrowUpRight size={16} />
            </a>
            <a className="break-all min-h-11 text-muted" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} Notehub 樂齡日記。保留相關權利。</p>
          <a className="inline-flex min-h-11 items-center gap-2" href="#home">
            回到頁首
            <ArrowRight className="-rotate-90" size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
