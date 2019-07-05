import axios from 'axios'

class NovelApi {
    getNovelChapterContent (data) {
        return axios.get('/api/crawl/test3', { params: data })
    }
}

export default new NovelApi()