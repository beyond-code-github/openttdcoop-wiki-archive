# #openttdcoop wiki: unofficial preservation copy

A static, readable copy of the old **#openttdcoop wiki** (`wiki.openttdcoop.org`), rebuilt from
[Internet Archive Wayback Machine](https://web.archive.org/) captures. The original site was taken offline
by its admin because of its outdated PHP stack.

- **Unofficial.** This is not the original site, not affiliated with the #openttdcoop community or its admin, and not complete:
  it contains the roughly 400 wiki articles that had a usable capture, plus 156 user pages of #openttdcoop members (linked from the Community Members page), plus their images. Pages are shown as last captured
  (mostly 2014-2026) and may be out of date. Spam pages were left out. The old #openttdcoop blog is included under `blog/` (371 posts, 2006-2017, from captures of the www host, the bare domain and later blog.openttdcoop.org; spam comments dropped, many embedded images were never archived). Forum, dev and ps (savegame) hosts are not included.

Save games: the public server game saves (PublicServerGame_N_Final.sav and PSG_N.sav) are hosted as the `psg-saves` release of this repository, and links to them point there; other saves stay on Wayback.
- **Provenance.** Every page footer names the original URL and the Wayback capture it came from. Links to articles that were
  not captured point at the Wayback Machine.
- **Content** is by the #openttdcoop community. The original footer reads "(c) 2005 - 2026 The #openttdcoop Blog & Wiki"; no open licence
  is stated on the site, so no licence is granted here beyond what the original terms allow.
- **Takedown.** If you are a rights holder or the site owner and want this copy removed or changed, open an issue or contact the
  repository owner and it will be taken down promptly.
- **Theme.** A modern stylesheet inspired by the original skin (blue header, lime accent). Original skin files are kept in
  `assets/original/` for reference. Search is client-side (`search-data.js` / `search.json`), no server needed.

## Viewing

No build step: serve the folder as is (GitHub Pages from the `main` branch root, `.nojekyll` included), or preview locally:

```
python3 -m http.server 8000   # then open http://localhost:8000/
```

Opening `index.html` straight from disk also works, except that some browsers block the search index over `file://`.

## Corrections

Missing pages, broken images or wrong captures: open an issue naming the page. A better source than the Wayback Machine
(for example a MediaWiki XML export of the original wiki) would replace this copy wholesale.
