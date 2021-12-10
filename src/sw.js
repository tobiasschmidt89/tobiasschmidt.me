const version = 'v005'
const assetCacheName = `${version}--assets`
const pageCacheName = `${version}--pages`
const articleCacheName = `${version}--articles`
const imageCacheName = `${version}--images`

const staticAssets = [
    '/manifest.json',
    '/assets/css/theme.css',
    '/assets/js/main.js',
    '/assets/fonts/Recursive.woff2',
]

const staticPages = [
    '/',
    '/profile/',
    '/legal/',
    '/privacy/',
]

self.addEventListener('install', async () => {
    const assetCache = await caches.open(assetCacheName)
    await assetCache.addAll(staticAssets)

    const pageCache = await caches.open(pageCacheName)
    await pageCache.addAll(staticPages)
})

self.addEventListener('activate', async () => {
    const cacheKeys = await caches.keys()

    await Promise.all(
        cacheKeys.map(async (key) => {
            if (key.indexOf(version) === -1) {
                return caches.delete(key)
            }
        })
    )
})

self.addEventListener('fetch', async (e) => {
    const request = e.request
    const url = new URL(request.url)
    const method = request.method
    const destination = request.destination

    if (method !== 'GET' || url.origin !== location.origin) {
        return
    }

    if (destination === 'document' && staticPages.includes(url.pathname)) {
        e.respondWith(networkFirst(request, { cache: pageCacheName }))
        return
    } else if (destination === 'document') {
        e.respondWith(
            networkFirst(request, { cache: articleCacheName, limit: 5 })
        )
        return
    }

    if (destination === 'image') {
        e.respondWith(
            networkFirst(request, { cache: imageCacheName, limit: 20 })
        )
        return
    }

    if (['style', 'script', 'font'].includes(destination)) {
        e.respondWith(networkFirst(request, { cache: assetCacheName }))
        return
    }

    if (url.pathname === '/manifest.json') {
        e.respondWith(networkFirst(request, { cache: assetCacheName }))
        return
    }
})

async function networkFirst(req, { cache: cacheName, limit }) {
    const cleanUrl = new URL(req.url)
    cleanUrl.search = ''
    cleanUrl.fragment = ''

    const cleanRequest = new Request(cleanUrl)

    const cache = await caches.open(cacheName)

    try {
        const fresh = await fetch(req)
        await stash(cache, cleanRequest, fresh.clone(), { limit })
        return fresh
    } catch (e) {
        const cached = await cache.match(cleanRequest)
        return cached
    }
}

async function stash(cache, req, res, { limit }) {
    if (!limit) {
        cache.put(req, res)
        return
    }

    const keys = await cache.keys()

    if (keys.length >= limit) {
        await cache.delete(keys[0])
    }

    cache.put(req, res)
}
