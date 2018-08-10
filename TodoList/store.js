const STORAGE_KEY = 'list';
export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]'
        )
    },
    save: function(list) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
    }
}
