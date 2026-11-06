export interface TeamMember { id: string; name: string; role: string; bio: string; avatar?: string; github?: string; website?: string }
export interface TutorialStep { title: string; description: string; note: string }
export interface Project { version: string; name: string; platform: string; repository: string; webRepository: string; screenshot?: string; screenshotCaption: string; tags: string[] }
export interface MemberInfo {
  class?: string
  name?: string
  role?: string
  bio?: string
}