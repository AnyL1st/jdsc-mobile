const LOCAL_KEY = 'JDSC-Info'
const HISTORY_KEY = 'JDSC-search-history'

export const setUserStor = (data) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
}
export const getUserStor = () => {
  const data = localStorage.getItem(LOCAL_KEY)
  return data ? JSON.parse(data) : { token: '', userId: '' }
}
export const removeUserStor = () => {

}

export const setHistoryStor = (data) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(data))
}
export const getHistoryStor = () => {
  const data = localStorage.getItem(HISTORY_KEY)
  return data ? JSON.parse(data) : []
}
