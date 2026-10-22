export interface TeamMember { id: string; name: string; role: string; bio: string; avatar?: string; github?: string; website?: string }
export interface TutorialStep { title: string; description: string; note: string }
export interface Project { name: string; platform: string; repository: string; screenshot?: string; screenshotCaption: string; tags: string[] }
