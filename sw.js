const CACHE_NAME = 'pumto-static-v6';
const IMAGE_CACHE_NAME = 'pumto-images-v1';

// 설치 시 캐시할 필수 핵심 리소스 (앱 쉘)
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/intro.html',
  '/intro-blue.html',
  '/intro-orange.html',
  '/intro-green.html',
  '/login.html',
  '/home.html',
  '/growth.html',
  '/mypage.html',
  '/save.html',
  '/save-academy.html',
  '/intro_final.css',
  '/intro-blue.css',
  '/intro-orange.css',
  '/intro-green.css',
  '/login.css',
  '/home.css',
  '/growth.css',
  '/mypage.css',
  '/save.css',
  '/save-academy.css',
  '/pwa-loader.js'
];

// 서비스 워커 설치 및 핵심 리소스 캐싱
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 활성화 및 구버전 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 요청 처리 (패치) 전략
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // 1. 이미지 요청인 경우: Cache-First (캐시에 있으면 즉시 반환, 없으면 네트워크 후 캐시)
  if (requestUrl.pathname.includes('/PUMTO.img/') || event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // 캐시에서 즉시 리턴
            return cachedResponse;
          }
          // 없으면 네트워크 패치 후 캐시에 추가
          return fetch(event.request).then(networkResponse => {
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // 네트워크 실패 시 대비 기본 폴백 처리(필요 시)
          });
        });
      })
    );
    return;
  }

  // 2. HTML, CSS, JS 등 일반 자원: Stale-While-Revalidate (캐시 즉시 반환 + 백그라운드 업데이트)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse.status === 200) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // 오프라인 상태일 때 캐시된 것 반환
      });

      return cachedResponse || fetchPromise;
    })
  );
});
