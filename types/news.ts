export default class News {
  post: string
  category: string
  datetime: Date
  title: string
  lang: 'en' | 'zh'

  constructor() {
    this.post = ''
    this.category = ''
    this.datetime = new Date()
    this.title = ''
    this.lang = 'en'
  }
}