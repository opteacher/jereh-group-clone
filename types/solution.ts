export default class Solution {
  key: string
  post: string
  title: string
  desc: string
  icon: string
  lang: 'en' | 'zh'

  constructor() {
    this.key = ''
    this.post = ''
    this.title = ''
    this.desc = ''
    this.icon = ''
    this.lang = 'en'
  }
}