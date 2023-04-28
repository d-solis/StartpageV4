/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"IT7Yl5i4bxT5Qb5y","label":"Work/School","bookmarks":[{"id":"W9QQ2pQNifI9v8LU","label":"Clever","url":"https://clever.com/oauth/sis/login?"},{"id":"I4G4QRe26oFB7pCS","label":"Docs","url":"https://docs.google.com"},{"id":"V7P5S4MNdeVANVdA","label":"Slides","url":"https://docs.google.com/presentation/u/0/"},{"id":"L3lmG8QslzDbqawu","label":"Sheets","url":"https://docs.google.com/spreadsheets/"}]},{"id":"QMTsXhkeg0q75OOv","label":"","bookmarks":[{"id":"0a6T75fO18H1y4oH","label":"Google Mail","url":"https://mail.google.com/mail/"},{"id":"wDcFF5KERi597ylG","label":"Outlook","url":"https://outlook.live.com/"},{"id":"1RkUPXXO0kWWT7Wp","label":"ChatGpt","url":"https://chat.openai.com/"},{"id":"1NacD1n8RmZ5SMuK","label":"HwHelp","url":"https://hwhelp.cc"}]},{"id":"hkjex7bqRQBsnDSd","label":"Code","bookmarks":[{"id":"fX73XsXk9F2kagyS","label":"Github","url":"https://github.com"},{"id":"cmeDM9cUKOmEldtW","label":"Gitlab","url":"https://gitlab.com/"},{"id":"wTE9x8wWECooAuU9","label":"Freecodecamp.org","url":"https://www.freecodecamp.org/"},{"id":"chejedUjoU2OG0Mp","label":"Vscode","url":"https://vscode.dev/"}]},{"id":"1EWjOc1CEvjsHKGj","label":"Misc.","bookmarks":[{"id":"lErsfu12eQkU05gX","label":"YouTube","url":"https://www.youtube.com"},{"id":"3LhkWtXFXOgsbBPb","label":"Plex","url":"https://app.plex.tv/desktop/#!/"},{"id":"WWVZFW68J3iGh157","label":"Anime","url":"https://9animetv.to/"},{"id":"XsBpk7PMTs5igFL5","label":"Movies & TV","url":"https://movies4discord.xyz/"}]},{"id":"nDPGAxIjMwjvWO1t","label":"","bookmarks":[{"id":"YJDc969WTAqUokiW","label":"Pixlr","url":"https://pixlr.com/e/"},{"id":"UXIGpXylQM9yRJvi","label":"Spotify","url":"https://open.spotify.com/?"},{"id":"8cMw3o5KAM2LV01p","label":"remove.bg","url":"https://www.remove.bg/"},{"id":"roaeHdoymyuHcimr","label":"Convertio","url":"https://convertio.co/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
