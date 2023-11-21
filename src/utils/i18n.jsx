import languageConfig from './lang.json'

const I18n = (keyword, lang) =>{
    return languageConfig[lang] [keyword];
}

export default I18n;