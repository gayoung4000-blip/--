# PUMTO (품토) - 제품 요구사항 정의서 (PRD)

## 1. 제품 개요 (Product Overview)
- **앱명:** PUMTO (품토)
- **타겟 고객:** 5~10세 자녀를 둔 부모
- **제품 목적:** 내 아이의 성향, 연령, 위치에 맞는 최적의 (미술) 학원을 쉽게 찾고, 체험 수업을 예약하며, 아이의 성장 기록을 관리할 수 있는 맞춤형 학원 탐색 및 관리 플랫폼

## 2. 핵심 기능 (Core Features)

### 2.1 학원 검색 및 필터링 (Academy Search & Filter)
- **키워드 검색:** 지역, 학원명, 키워드 기반의 통합 검색 기능 제공
- **맞춤형 필터링:** 
  - **거리:** 도보 10분, 15분, 20분, 30분+
  - **시간대:** 평일 오전, 평일 오후, 토요일, 상관없음
  - **가격대:** 최소~최대 가격 슬라이더 (예: 10만 원 ~ 30만 원)
  - **커리큘럼:** 놀이미술, 이론 중심, 자유표현 등
  - **연령:** 5세, 6세, 7세, 8세, 9세 이상
  - **셔틀 운행 여부:** 셔틀 운행 학원만 보기 토글 기능
- **정렬 기준:** 거리순, 인기순, 후기순 정렬 기능
- **지도 뷰:** 내 주변에 위치한 학원을 지도로 한눈에 파악 가능

### 2.2 찜 기능 (Wishlist)
- 관심 있는 학원을 찜하여 '찜한 학원' 카테고리나 하단 '찜' 탭에서 모아보기 가능
- 찜한 학원의 혜택(체험, 할인 정보) 등을 쉽게 추적

### 2.3 체험수업 예약 (Trial Class Booking)
- '체험 수업 가능한 학원'만 따로 모아볼 수 있는 전용 뷰 및 배너 제공
- 학원 리스트 및 상세 페이지에서 '체험수업' 뱃지를 통해 직관적인 확인 가능
- 앱 내에서 간편하게 체험 수업 신청 및 일정 관리

### 2.4 성장 기록 및 리뷰 (Growth Record & Review)
- **성장 기록:** 자녀의 작품 활동이나 수업 기록을 앱 내에 아카이빙하는 공간 (하단 '성장' 탭)
- **인증 후기 시스템:** 실제 수강 및 체험을 완료한 사용자만 남길 수 있는 '인증 후기' 기능을 통해 정보의 신뢰도 향상 (하단 '후기작성' 탭 제공)

## 3. 화면별 UI/UX 요구사항 (UI/UX Requirements based on Design)

### 3.1 홈 화면 (Home Screen)
- **상단 큐레이션:** 연령별 추천(5-6세, 7-8세 등), 성향별 추천(창의형, 집중형), 내 주변 학원, 찜한 학원, 이벤트/혜택 퀵 메뉴 배치
- **맞춤형 학원 추천 섹션:** 
  - '연령별 추천 학원' 리스트
  - '지금 이 지역 인기 학원' (HOT 뱃지, 평점, 체험수업 여부 표기)
  - '새로 입점한 학원' 소개
- **커머스 연계:** '미술 특가 상품' 섹션을 통해 학원 수업 준비물, 미술 재료 할인 판매 연결
- **하단 GNB 탭바:** 홈 / 찜 / 후기작성(강조 플로팅 형태) / 성장 / 마이 탭 구성

### 3.2 검색 필터 (Filter Screen)
- 사용자가 직관적으로 선택할 수 있는 버튼형 UI (거리, 시간대, 커리큘럼, 연령)
- 가격대는 양방향 슬라이더로 범위 설정 지원
- 셔틀 운행 토글 스위치 제공
- 선택한 필터의 '초기화' 및 '적용하기' 고정 하단 버튼 제공

### 3.3 학원 목록 (Academy List Screen)
- 조건에 맞는 총 학원 개수 노출 및 정렬 탭 (거리순/인기순/후기순) 제공
- 지도 뷰로 바로 전환할 수 있는 아이콘 제공
- **학원 카드 UI 항목:**
  - 학원명 및 대표 이미지
  - 거리 및 도보/차량 소요 시간, 월 최소 수강료
  - 커리큘럼(예: 놀이미술, 이론중심), 수업 요일, 가능 연령 태그
  - 일반 후기 개수 및 인증 후기 개수 시각화

## 4. 기대 효과 (Expected Impact)
- 부모들의 발품 파는 시간을 줄이고, 아이의 성향과 조건에 완벽히 맞는 학원을 손쉽게 매칭
- '체험 수업'이라는 낮은 허브를 통해 학원 등록 전환율 극대화
- '성장 기록' 및 '인증 후기'를 통한 유저들의 자발적인 체류 시간 증대 및 커뮤니티 신뢰도 형성


아래는 UI 상세 스펙입니다.
피그마 디자인 기반으로 정확한 수치를 반영해주세요.
---

PUMTO (품토) PRD v3.2
Antigravity 바이브 코딩용

앱명: PUMTO (품토)
플랫폼: iOS (393x852px 기준)
타겟: 5~10세 자녀를 둔 30~40대 부모
핵심 가치: 탐색부터 성장 확인까지, 미술 수업의 처음부터 끝까지

---

디자인 토큰

Primary: #FF9F46
Secondary: #8DCA43
Background: #FAFAFA
Card Background: #FFFFFF
Text Primary: #1A1A1A
Text Secondary: #888888
Text Disabled: #CCCCCC
Border: #F0F0F0
Font: Pretendard

---

공통 컴포넌트

Primary Button
height 52px / border-radius 12px / background #FF9F46 / text 16px Bold White

Secondary Button
height 52px / border-radius 12px / border 1px solid #FF9F46 / background white / text 16px #FF9F46

Ghost Button
height 52px / border-radius 12px / background #F5F5F5 / text 16px #888888

Chip 선택됨
height 40px / border-radius 20px / background #FF9F46 / text 14px Bold White / padding 0 16px

Chip 미선택
height 40px / border-radius 20px / border 1px solid #E0E0E0 / background white / text 14px #555555 / padding 0 16px

Chip 비활성
height 40px / border-radius 20px / border 1px dashed #E0E0E0 / background #F5F5F5 / text 14px #CCCCCC

Card
border-radius 16px / border 1px solid #F0F0F0 / padding 16px / box-shadow 0 2px 8px rgba(0,0,0,0.06) / background white

Toggle ON
width 48px / height 28px / border-radius 14px / background #FF9F46 / handle white circle right

Toggle OFF
width 48px / height 28px / border-radius 14px / background #CCCCCC / handle white circle left

인증 배지
size 20px / circle / background #8DCA43 / white checkmark icon inside

하트 버튼
찜 활성: #FF9F46 filled heart
찜 비활성: #CCCCCC outline heart
size 24px

---

탭바 GNB

height 60px / background white / border-top 1px solid #F0F0F0
탭 5개 균등 배치: 홈 / 찜 / 후기작성 / 성장 / 마이

중앙 후기작성 버튼
원형 플로팅 / size 56px / background #FF9F46 / 연필 아이콘 white / margin-top -20px

활성 탭: icon #FF9F46 / label #FF9F46 / label font 11px Bold
비활성 탭: icon #CCCCCC / label #CCCCCC / label font 11px Regular

---

화면 1 - 홈 (Home)

헤더
height 56px / background transparent
좌: PUMTO 로고 텍스트 #FF9F46 Bold 20px
우: 알림 벨 아이콘 #1A1A1A size 24px

상단 배너
height 200px / background 크림 연두 일러스트 배경
좌측 텍스트:
  상단: "우리 아이의 상상력이 자라는" 18px Bold #1A1A1A
  하단: "미술학원 찾기" 22px Bold #FF9F46
우측: 미술하는 아이 캐릭터 일러스트

검색바
height 48px / border-radius 12px / background white / margin 0 16px
border 1px solid #F0F0F0
좌: 돋보기 아이콘 #888888
placeholder: "지역, 학원명, 키워드로 검색해보세요" 14px #CCCCCC
우: "필터" 텍스트 버튼 14px #FF9F46

퀵메뉴 5개
가로 스크롤 / padding 0 16px / gap 16px
각 아이템:
  원형 아이콘 배경 44px border-radius 50%
  라벨 13px Bold #1A1A1A center
  서브텍스트 11px #888888 center
항목: 연령별 추천 / 성향별 추천 / 내 주변 학원 / 찜한 학원 / 이벤트 혜택

연령별 추천 학원 섹션
섹션 헤더: "연령별 추천 학원" 16px Bold #1A1A1A + "더보기 >" 13px #FF9F46 우측
가로 스크롤 카드 3개 gap 12px padding 0 16px
카드:
  width 160px / border-radius 16px / padding 16px
  상단 배지: "5-6세 추천" 11px / background 파스텔 연두 / border-radius 20px
  타이틀: 2줄 Bold 15px #1A1A1A
  하단: 3D 일러스트 이미지
  배경: 파스텔 톤 (연두, 노랑, 연보라 교차)

지금 이 지역 인기 학원 섹션
섹션 헤더: "지금 이 지역 인기 학원" 16px Bold + "더보기 >" #FF9F46
가로 스크롤 카드 gap 12px padding 0 16px
카드:
  width 180px / border-radius 12px / overflow hidden
  상단 학원사진 height 100px
  좌상단 HOT 배지: background #FF9F46 / white 11px Bold / border-radius 4px
  우상단 하트 버튼
  하단 padding 10px:
    학원명 14px Bold #1A1A1A
    별점 + 리뷰수 12px #888888
    체험수업 배지: background #FFF3E0 / text #FF9F46 / 11px
    거리 + 지역 12px #888888

체험수업 배너
background #FFF8EC / border-radius 16px / margin 0 16px / padding 16px
좌측:
  "우리 아이 첫 미술," 15px Bold #1A1A1A
  "체험 수업으로 시작해보세요!" 15px Bold #1A1A1A
  설명: "체험 수업 가능한 학원을 한눈에 확인" 12px #888888
  CTA 버튼: "체험 학원 보기 >" background #8DCA43 / white 13px Bold / border-radius 8px / height 36px
우측: 3D 일러스트 이미지

지도 섹션
height 180px / border-radius 12px / margin 0 16px
카카오 지도 API 연동
학원 위치 핀 표시
우하단: "목록 보기" 버튼 white background / border-radius 8px / 12px #555555

미술 특가 상품 섹션
섹션 헤더: "지금 만나볼 수 있는 미술 특가 상품" 16px Bold + ">" #FF9F46
배너 카드:
  background #FFF8EC / border-radius 16px / margin 0 16px / height 160px
  좌측: "우리아이 + 미술재료" 일러스트 텍스트
  하단: "학원에서 쓰는 그 재료, 지금 할인 중이에요" 13px #555555
  서브: "우리 아이 수업 준비, 한 번에 해결" 12px #888888
탭하면 창의만들기 화면으로 이동

새로 입점한 학원 섹션
섹션 헤더: "이 학원 어때요? 새로 입점한 학원이에요" 16px Bold
카드:
  margin 0 16px / border-radius 12px / overflow hidden
  좌상단: "상세보기" 버튼 white background / border-radius 6px / 12px #555555
  학원 실제 사진 full width height 160px

---

화면 2 - 창의만들기 (Art Supply Shop)

헤더
height 56px / background white / border-bottom 1px solid #F0F0F0
좌: 뒤로가기 아이콘 #FF9F46
중앙: "창의만들기" 17px Bold #1A1A1A
우: 돋보기 아이콘 + 장바구니 아이콘 size 24px #1A1A1A

상단 배너 슬라이더
background #FFF8EC / border-radius 12px / margin 16px / padding 20px
좌측:
  배지: "오늘의 특가" background #FF9F46 / white 11px / border-radius 20px
  타이틀1: "우리 아이 미술 수업" 18px Bold #1A1A1A
  타이틀2: "준비물 특가!" 22px Bold #FF9F46
  설명: "다양한 재료를 특별한 가격으로 만나보세요" 13px #888888
우측: 미술 재료 실제 사진
우하단: "01/03" 인디케이터 background rgba(0,0,0,0.3) / white 12px / border-radius 10px

카테고리 필터 칩
가로 스크롤 / padding 0 16px / gap 8px / margin 16px 0
항목: 전체(선택) / 연령별 / 재료별 / 난이도별 / 집콕추천

빠른 카테고리
섹션 헤더: "학부모가 많이 찾는 준비물" 15px Bold + "더보기 >" #FF9F46
5개 아이콘 가로 배치 균등 / padding 0 16px
각 아이콘:
  원형 배경 44px (오렌지 연하게, 초록 연하게 교차)
  라벨 12px Bold #1A1A1A
  서브 11px #888888
항목: 베스트 키트(Best) / 유아 추천(5-7세) / 초등 추천(8-10세) / 창의력 UP(인기 재료) / 친환경 재료(안심 사용)

상품 목록
헤더: "전체 상품 132개" 14px #1A1A1A + "필터 콘" + "최신순" 드롭다운 우측
2열 그리드 / gap 12px / padding 0 16px

상품 카드:
  background white / border-radius 12px / overflow hidden
  상품 이미지 1:1 비율 상단
  좌상단 BEST 배지: background #FF9F46 / white 11px Bold / border-radius 4px
  우상단 하트 버튼 size 20px
  하단 padding 10px:
    브랜드명: 11px #888888
    상품명: 14px Bold #1A1A1A 2줄 말줄임
    원가: 12px #CCCCCC line-through
    할인율: 14px Bold #FF9F46 + 할인가: 16px Bold #1A1A1A

하단 고정 버튼 2개
border-top 1px solid #F0F0F0 / padding 16px / background white / gap 8px
좌: "장바구니 보기" Secondary Button flex 1
우: "지금 인기 상품 보기" Primary Button flex 2

---

화면 3 - 필터 (Filter)

헤더
height 56px / background white
좌: 뒤로가기 아이콘 #FF9F46
중앙: "필터" 17px Bold #1A1A1A
우: "초기화" 14px #888888 텍스트 버튼

섹션 구조 (각 섹션)
라벨: 16px Bold #1A1A1A / padding 20px 16px 12px
칩 목록: flex row wrap / gap 8px / padding 0 16px
섹션 하단: 구분선 1px solid #F5F5F5

거리
칩 4개: 도보 10분 / 15분 / 20분 / 30분+

시간대
칩 4개: 평일 오전 / 평일 오후 / 토요일 / 상관없음

가격대
양방향 슬라이더
track height 4px / background #E0E0E0
active range background #FF9F46
handle size 20px / white / border 2px solid #FF9F46
범위 라벨: "10만 원" 좌 / "30만 원" 우 / 12px #888888

커리큘럼
칩 3개: 놀이미술 / 이론 중심 / 자유표현

연령
칩 5개: 5세 / 6세 / 7세 / 8세 / 9세+

셔틀 운행
flex row space-between / padding 0 16px
라벨: "셔틀 운행 학원만" 15px #1A1A1A
토글 스위치 ON 상태

하단 고정 버튼
border-top 1px solid #F0F0F0 / padding 16px / background white
좌: "초기화" Ghost Button flex 1
우: "적용하기 (5)" Primary Button flex 2

---

화면 4 - 학원 목록 (Academy List)

헤더
height 56px / background white / border-bottom 1px solid #F0F0F0
좌: 뒤로가기 아이콘 #FF9F46
중앙: "학원 목록" 17px Bold #1A1A1A
우: 지도 전환 아이콘 size 24px #1A1A1A

결과 및 정렬
padding 12px 16px / background white
"총 12개 학원" 14px #1A1A1A
정렬 칩 3개 우측: 거리순(선택) / 인기순 / 후기순

학원 카드 (반복)
flex row / padding 16px / margin 0 16px 12px
border-radius 16px / border 1px solid #F0F0F0 / background white

좌측 썸네일:
  size 100x100px / border-radius 12px / object-fit cover
  인증 배지 우하단: size 20px / circle / background #8DCA43

우측 정보 flex 1 padding-left 12px:
  학원명: 18px Bold #1A1A1A
  거리 + 수강료: 13px #888888 flex row gap 8px
  태그 칩 flex row gap 6px margin-top 6px:
    background #F5F5F5 / border-radius 8px / height 26px / padding 0 10px / 11px #555555
  후기 정보 margin-top 4px:
    일반: 말풍선 아이콘 + "후기 N개" 12px #888888
    인증: 체크 아이콘 #8DCA43 + "인증후기 N개" 12px #8DCA43

우상단 하트 버튼 size 24px

플로팅 필터 버튼
position fixed / 우하단 margin 16px
size 52px / circle / background #FF9F46
필터 슬라이더 아이콘 white
box-shadow 0 4px 12px rgba(255,159,70,0.4)

---

화면 5 - 학원 상세 (Academy Detail)

히어로 이미지
full width / height 200px / object-fit cover
좌상단: 뒤로가기 아이콘 (white circle background size 36px)
우상단: 전화 아이콘 + 공유 아이콘 + 더보기 아이콘 (white circle background)
하단 그라데이션 오버레이 (투명 to rgba 0,0,0,0.5):
  학원명: 20px Bold white
  거리 배지 + 가격 배지: white semi-transparent background / border-radius 12px / 12px
우하단: "N/6" 페이지 인디케이터 / dark semi-transparent pill / white 12px

기본 정보
background white / padding 16px
학원명: 20px Bold #1A1A1A
별점 아이콘 + "4.8" 14px Bold + "(리뷰 N개)" 13px #888888
태그 칩 flex row gap 8px
체험 예약 버튼: background #8DCA43 / full width / height 48px / border-radius 12px / white 16px Bold

내부 탭바
height 44px / background white / border-bottom 1px solid #F0F0F0
5개 탭 균등: 강사소개 / 커리큘럼 / 수업사진 / 후기 / 약관
활성: border-bottom 2px solid #FF9F46 / text #FF9F46 14px Medium
비활성: text #888888 14px Regular

강사소개 탭 내용
프로필 섹션 flex row gap 12px padding 16px:
  아바타 원형 72px
  이름 18px Bold + 과목 태그
  한 줄 소개 카드: background #FFF8EC / border-radius 12px / border-left 4px solid #FF9F46 / padding 10px 14px / 14px #555555

핵심 수치 3개 가로
flex row gap 8px / padding 0 16px
각 카드: flex 1 / background #FFF8EC / border-radius 12px / padding 12px / center
  수치: 22px Bold #FF9F46
  라벨: 11px #888888 margin-top 4px

경력 타임라인 padding 16px
각 항목 flex row gap 12px:
  좌: 점 12px circle (오렌지/초록 교차) + 세로 연결선 1px #F0F0F0
  우: 연도 12px #FF9F46 Bold + 직책 13px Bold + 설명 12px #888888

수업 스타일 카드 3개 padding 0 16px gap 8px
각 카드: background #F0F7E8 / border-radius 10px / padding 10px 14px / flex row gap 10px
  좌: 이모티콘 18px
  우: 제목 13px Bold + 설명 12px #888888

자격증 수상 리스트 padding 0 16px gap 6px
각 항목: background #F8F8F8 / border-radius 10px / padding 8px 12px / flex row gap 8px / 13px #1A1A1A

커리큘럼 탭 내용
섹션 타이틀: "기초 드로잉 커리큘럼" 15px Bold padding 16px
단계 카드 3개 padding 0 16px gap 8px:
  각 카드: white / border-radius 12px / border 1px solid #F0F0F0 / padding 12px
  번호: 16px Bold #FF9F46 / 제목: 14px Bold / 설명: 13px #888888

수업 현장 갤러리:
  헤더: "수업 현장 갤러리" 15px Bold padding 16px
  가로 스크롤 4장 gap 8px padding 0 16px
  각: 80x80px / border-radius 8px / object-fit cover

수강생 리얼 후기:
  헤더: "수강생 리얼 후기" 15px Bold + "전체보기 >" #FF9F46 padding 16px
  후기 카드 2개:
    avatar 36px + 이름 13px Bold + 별점
    후기 텍스트 13px #555555 2줄

학원 요약 섹션
2열 그리드 / padding 16px / gap 12px
각 항목: 라벨 12px #888888 + 값 13px #1A1A1A
항목: 연령 / 미술 / 정원 / 수업방식 / 준비물 / 비용 / 주소 / 운영시간

학원 위치
카카오 지도 height 160px / border-radius 12px / margin 0 16px

---

화면 6 - 체험 수업 예약 (Trial Booking)

헤더
height 56px / background white
좌: 뒤로가기 아이콘 #FF9F46
중앙: "체험 수업 예약" 17px Bold #1A1A1A

학원 요약 카드
flex row / padding 12px 16px / background white / border-bottom 1px solid #F0F0F0
썸네일 60x60px border-radius 8px
우측: 학원명 15px Bold + 주소 12px #888888 + 반 태그 + 과목 태그

날짜 선택 섹션
라벨: "날짜 선택" 15px Bold / 달력 아이콘 #8DCA43 / padding 16px
월 네비게이션: flex row space-between
  "< " 아이콘 + "2026년 4월" 16px Medium center + " >" 아이콘
달력 7열 그리드 padding 0 16px gap 4px:
  요일 헤더: 일~토 / 12px #888888 / center
  날짜 셀 height 40px:
    선택됨: circle background #FF9F46 / white 14px Bold
    선택 가능: 14px #1A1A1A
    비활성: 14px #CCCCCC

시간 선택 섹션
라벨: "시간 선택" 15px Bold / 시계 아이콘 #8DCA43 / padding 16px
3열 그리드 gap 8px padding 0 16px:
  마감 칩: background #F5F5F5 / border 1px dashed #E0E0E0 / text #CCCCCC 14px
  가능 칩: background white / border 1px solid #E0E0E0 / text #555555 14px
  선택 칩: background white / border 2px solid #FF9F46 / text #FF9F46 14px Bold
칩 height 48px / border-radius 10px
범례 flex row center gap 12px margin-top 8px:
  점 6px circle + 라벨 11px #888888
  (마감 #CCCCCC / 가능 #E0E0E0 / 선택 #FF9F46)

하단 고정 영역
border-top 1px solid #F0F0F0 / padding 16px / background white
"예약 확정하기" Primary Button full width height 52px
안내 텍스트: "예약 확정 전 선택한 날짜와 시간을 다시 확인해주세요" 12px #888888 center margin-top 8px

---

화면 7 - 예약 완료 (Booking Confirmation)

헤더
height 56px / background white
중앙: "예약 완료" 17px Bold #1A1A1A

완료 영역 center padding 32px 16px
체크 원형: size 80px / circle / background #FFF3E0 / border 2px solid #FF9F46
  체크 아이콘 white size 36px
confetti 효과 (초록 오렌지 색종이)
타이틀: "체험 수업 예약이 완료되었어요!" 18px Bold #1A1A1A center
  "완료되었어요" 부분 #FF9F46
서브: "선생님과 아이에게 특별한 시간이 될 거예요" 14px #888888 center

예약 정보 카드
border-radius 16px / border 1px solid #F0F0F0 / margin 0 16px / padding 16px

학원 정보 flex row gap 10px:
  썸네일 60x60px border-radius 8px
  우측: 학원명 15px Bold + 주소 12px #888888
  반 태그(#FF9F46 연한배경) + 과목 태그(#888888 배경)

구분선 1px solid #F0F0F0 margin 12px 0

정보 행 4개 flex row space-between height 36px:
  좌: 달력아이콘(#FF9F46 size 16px) + 라벨 13px #888888
  우: 값 13px #1A1A1A
  항목: 수업 날짜 / 수업 시간 / 담당 선생님 / 연락처

구분선

알림 확인 flex row gap 6px:
  체크 아이콘 #8DCA43 size 16px
  "예약 확인 문자가 발송되었습니다" 13px #555555
  "문자 다시 보기 >" 13px #FF9F46 margin-left auto

알림 설정 섹션
padding 0 16px margin-top 16px
"알림 설정" 15px Bold #1A1A1A margin-bottom 8px
2개 카드 가로 flex row gap 8px:
  각 카드: flex 1 / background #F8F8F8 / border-radius 12px / padding 12px
  벨 아이콘 #FF9F46 size 20px
  제목 13px Bold #1A1A1A
  설명 11px #888888
  토글 ON 우측

버튼 2개
padding 16px gap 12px
"예약 내역 확인하기" Primary Button
"메인으로 돌아가기" Secondary Button

---

화면 8 - 저장 찜 있음 (Wishlist)

헤더
height 56px / background white / border-bottom 1px solid #F0F0F0
"저장" 20px Bold #1A1A1A 좌
"편집" 14px #888888 우

결과 및 정렬
padding 10px 16px / background white
좌: 점 6px circle #FF9F46 + "3개 저장됨" 13px #1A1A1A
우: 정렬 칩 2개: 최근순(선택) / 거리순

학원 카드 (반복)
flex row / padding 16px / margin 0 16px 8px
border-radius 12px / border 1px solid #F0F0F0 / background white

썸네일 80x80px / border-radius 8px
인증 배지 우하단 size 20px #8DCA43

우측 flex 1 padding-left 12px:
  학원명 16px Bold #1A1A1A
  위치 아이콘 #888888 + 주소 + 도보 시간 13px #888888
  반 태그(#FF9F46 연한 배경) + 과목 태그(#888888 배경) flex row gap 6px margin-top 6px

하트 버튼 #FF9F46 우상단

하단 요소
점선 카드:
  border 1px dashed #FF9F46 / border-radius 12px / margin 0 16px / padding 14px / center
  "+ 더 탐색하기고 저장하기" 14px Bold #FF9F46
  "마음에 드는 학원을 더 찾아보세요!" 12px #888888 margin-top 4px

인증 배너:
  background #F0F7E8 / border-radius 12px / margin 16px / padding 12px 16px
  flex row space-between align-center
  체크 배지 아이콘 #8DCA43 size 24px
  "인증된 학원이에요" 14px Bold #1A1A1A
  "실제 수업 후기와 정보를 확인해보세요" 12px #888888
  ">" 화살표 #888888

---

화면 9 - 저장 빈 상태 (Empty Wishlist)

헤더
height 56px / background white
좌: 뒤로가기 아이콘 #FF9F46
"저장한 학원" 17px Bold #1A1A1A 좌 (헤더 좌측)

Empty State center padding 40px 32px
미술 도구 일러스트 (물감, 팔레트, 붓, 스케치북) size 160px
"아직 찜한 학원이 없어요" 18px Bold #1A1A1A margin-top 24px center
"아이에게 맞는 미술학원을 지금부터 천천히 찾아보세요" 14px #888888 center margin-top 8px line-height 1.6

버튼 3개 padding 0 24px gap 8px margin-top 24px
"학원 탐색하러 가기" Primary Button full width
"인기 학원 보기" Secondary Button flex 1
"연령별 추천 보기" Secondary Button flex 1

하단 배너
background #FFF8EC / border-radius 12px / margin 0 16px / padding 12px 14px
전구 아이콘 #FF9F46 size 20px
"찜해두면 이런 점이 좋아요!" 13px Bold #1A1A1A
"나중에 비교하기 쉽고, 상담 예약도 빠르게 할 수 있어요" 12px #888888 margin-top 2px

---

화면 10 - 마이페이지 (My Page)

헤더
height 56px / background white
좌: 뒤로가기 아이콘 #FF9F46 + "마이페이지" 17px Bold #1A1A1A
우: 설정 아이콘 size 24px #1A1A1A

프로필 카드
background #FFF8EC / border-radius 16px / margin 16px / padding 16px
flex row align-center gap 12px:
  프로필 사진 원형 60px / position relative
  편집 아이콘 우하단: size 22px / circle / background #FF9F46 / 연필아이콘 white
  우측:
    이름 18px Bold #1A1A1A
    이메일 아이콘 #FF9F46 + 이메일 13px #888888
  ">" 화살표 #888888 margin-left auto

아이 정보 섹션
섹션 헤더: "아이 정보" 16px Bold + "아이 관리 >" 13px #FF9F46 / padding 0 16px margin-top 16px
flex row gap 8px padding 0 16px margin-top 8px:

아이 카드: background white / border-radius 12px / border 1px solid #F0F0F0 / padding 12px / flex 1
  아이 사진 원형 44px
  이름 14px Bold #1A1A1A margin-top 8px
  나이 + 학년 12px #888888
  최근 수업 배지: background #F0F7E8 / text #8DCA43 / 11px / border-radius 20px / margin-top 6px

아이 추가 카드: flex 1 / border 1.5px dashed #FF9F46 / border-radius 12px / padding 12px / center
  "+" 24px #FF9F46
  "아이 추가" 13px #FF9F46 margin-top 4px

예약 활동 섹션
섹션 헤더: "예약 / 활동" 16px Bold / padding 0 16px margin-top 20px
flex row gap 8px padding 0 16px margin-top 8px:

예약 내역 카드: flex 1 / background white / border-radius 12px / border 1px solid #F0F0F0 / padding 16px
  달력 체크 아이콘 #FF9F46 size 36px
  "예약 내역" 14px Bold #1A1A1A margin-top 8px
  "체험 수업 예약 현황을 확인해보세요" 12px #888888 margin-top 4px

성장 기록 카드: same structure
  노트 연필 아이콘 #8DCA43 size 36px
  "성장 기록" 14px Bold
  "아이의 수업 활동과 후기를 확인해보세요" 12px #888888

설정 섹션
섹션 헤더: "설정" 16px Bold / padding 0 16px margin-top 20px

메뉴 리스트 (각 항목)
height 56px / background white / flex row align-center / padding 0 16px / border-bottom 1px solid #F5F5F5
좌: 아이콘 size 20px #888888 + 텍스트 14px #1A1A1A margin-left 12px
우: ">" 아이콘 #CCCCCC

항목 4개:
벨 아이콘 + "알림 설정" / 설명 12px #888888 아래
사람 아이콘 + "계정 설정"
물음표 아이콘 + "고객센터"
정보 아이콘 + "앱 정보"

---

화면 11 - 성장 기록 (Growth Record)

헤더
height 56px / background white
"성장 기록" 20px Bold #1A1A1A 좌
설정 아이콘 size 24px #1A1A1A 우

아이 프로필 카드
background white / border-radius 12px / border 1px solid #F0F0F0 / margin 0 16px / padding 12px 16px
flex row space-between align-center:
  좌: 아이 사진 원형 44px + 이름 16px Bold + 나이 학년 13px #888888
  우: 비공개 배지
    background #8DCA43 / border-radius 20px / padding 5px 12px
    자물쇠 아이콘 white size 12px + "비공개" white 12px Medium

월 네비게이션
flex row space-between align-center / padding 12px 16px
"<" 아이콘 #FF9F46 size 20px
"2026년 3월" 16px Medium #1A1A1A center
">" 아이콘 #FF9F46 size 20px

핵심 수치 3개
flex row gap 8px / padding 0 16px
각 카드: flex 1 / background white / border-radius 12px / border 1px solid #F0F0F0 / padding 14px / center
  라벨: "완성작" / "출석일" / "성장 지수" 12px #888888
  수치: 12 / 20 / 98 28px Bold #FF9F46 margin-top 6px

준비물 알림 배너
background #F0F7E8 / border-radius 12px / margin 0 16px / padding 12px 14px
flex row align-start gap 10px:
  벨 아이콘 #8DCA43 size 20px margin-top 2px
  우측:
    "이번 주 미술 준비물을 확인하세요!" 13px Bold #1A1A1A
    칩 3개 flex row gap 6px margin-top 6px:
      background white / border 1px solid #8DCA43 / border-radius 20px / padding 3px 10px / 12px #8DCA43
      항목: 스케치북 / 수채화 물감 / 파레트

이달의 갤러리
섹션 헤더: "이달의 갤러리" 16px Bold + "전체보기" 13px #FF9F46 / padding 0 16px margin-top 20px
3열 그리드 gap 4px / padding 0 16px margin-top 8px
작품 사진: 1:1 비율 / border-radius 8px / object-fit cover
마지막 셀:
  border 1.5px dashed #CCCCCC / border-radius 8px / center
  "+" 20px #CCCCCC
  "추가" 11px #CCCCCC margin-top 4px

---

화면 12 - 작품 상세 (Artwork Detail)

헤더 (이미지 위 오버레이)
background transparent
좌: 뒤로가기 (white circle 36px) + "작품 상세" 17px Bold white
우: 공유 아이콘 white + "비공개" 배지 background #8DCA43 border-radius 20px white 12px

히어로 이미지
full width / height 280px / object-fit cover
하단 그라데이션 오버레이 (투명 to rgba 0,0,0,0.6) height 120px
  작품명: "햄버거 집" 20px Bold white
  설명: "우리 아이 상상력이 담긴 소중한 작품이에요" 13px white opacity 0.8
  태그 칩 flex row gap 6px: background rgba(255,255,255,0.2) / border-radius 12px / white 11px
우상단: "1/18" 인디케이터 dark semi-transparent / white 12px / border-radius 10px

기본 정보 3열
3열 균등 / padding 16px / border-bottom 1px solid #F0F0F0
각 항목 center:
  라벨: 11px #888888
  값: 13px Bold #1A1A1A margin-top 4px
항목: 작품일(2026.03.20) / 수업(창의미술) / 반·연령(유치부 A반)

담당 선생님
flex row space-between align-center / padding 12px 16px / border-bottom 1px solid #F0F0F0
좌: 선생님 아바타 원형 36px + "김미래 선생님" 14px Bold margin-left 10px
우: "선생님 프로필 >" 13px #888888

사용된 재료
padding 16px
flex row space-between align-center margin-bottom 8px:
  "사용된 재료" 15px Bold #1A1A1A
  "알림 받기" 버튼: border 1px solid #8DCA43 / border-radius 20px / padding 5px 12px / 12px #8DCA43

칩 3개 flex row gap 8px:
background white / border 1px solid #8DCA43 / border-radius 20px / padding 6px 14px / 13px #8DCA43
항목: 스케치북 / 수채화 물감 / 파레트

인증 후기 작성 CTA
padding 0 16px margin-top 16px:
  "인증 후기 작성하기" Primary Button full width height 52px
  연필 아이콘 white left
  설명: "우리 아이의 성장을 함께 기록하고 다른 부모님들도 도움이 되요" 12px #888888 center margin-top 8px

이전 다음 작품 네비게이션
flex row space-between / padding 12px 16px / border-top 1px solid #F0F0F0 / border-bottom 1px solid #F0F0F0
좌: "<" 아이콘 #888888 + "이전 작품" 11px #888888 + "우리 동네 풍경" 13px #1A1A1A
우: "다음 작품" 11px #888888 + "무지개 공룡" 13px #1A1A1A + ">" 아이콘 #888888

하단 배너
background #FFF8EC / border-radius 12px / margin 16px / padding 12px 14px
flex row space-between align-center:
  좌: 카메라 아이콘 #FF9F46 size 20px + "우리 아이의 멋진 순간을 남겨보세요!" 13px Bold #1A1A1A margin-left 8px
  우: "후기 작성하기 >" 버튼 background #FF9F46 / border-radius 20px / padding 5px 12px / white 12px Bold

---

네비게이션 플로우

홈 탭
홈 → 학원 카드 탭 → 학원 상세 → 체험 예약 버튼 → 체험 수업 예약 → 예약 확정 → 예약 완료
홈 → 미술 특가 배너 탭 → 창의만들기
홈 → 검색바 탭 → 검색 결과
홈 → 필터 버튼 탭 → 필터 → 적용하기 → 학원 목록 → 학원 카드 탭 → 학원 상세
학원 상세 → 하트 버튼 → 찜 탭에 추가

찜 탭
찜 있음 → 학원 카드 탭 → 학원 상세
찜 없음 → "학원 탐색하러 가기" → 홈

후기작성 탭
후기작성 버튼 → 후기 작성 화면 (체험 완료 후 활성)

성장 탭
성장 기록 → 작품 갤러리 탭 → 작품 상세 → "인증 후기 작성하기" → 후기 작성

마이 탭
마이페이지 → 예약 내역 카드 → 예약 목록
마이페이지 → 성장 기록 카드 → 성장 기록 화면

---

에러 및 예외 상태

검색 결과 없음
  "조건을 바꿔보세요" 안내 텍스트 center
  "필터 초기화" 버튼 Secondary

찜 없음 Empty State
  미술 도구 일러스트
  "아직 찜한 학원이 없어요"
  탐색 유도 버튼 3개

위치 권한 거부
  기본 탐색 가능 (거리 표시 제한)
  "위치 설정하기" 안내 배너 하단

네트워크 오류
  "연결을 확인해주세요" 안내
  "다시 시도" 버튼 Secondary

시간 마감
  칩 background #F5F5F5 / border 1px dashed #E0E0E0 / text #CCCCCC
  "마감" 범례 표시

---

기술 요구사항

플랫폼: iOS 393x852px Safe Area 적용
지도: 카카오 지도 API
푸시 알림: FCM Firebase Cloud Messaging
이미지 업로드: 작품 사진 다중 업로드
결제: 예약 수수료 PG 연동
소셜 로그인: 카카오 / 네이버 / 애플

---

성공 지표 KPI

인증 후기 보유 학원 vs 미보유 학원 체험 예약 전환율 비교
프리미엄 입점 학원 6개월 재구독율
앱 예약 vs 전화 예약 노쇼율 비교
월간 활성 사용자 수 MAU
평균 앱 체류 시간
준비물 알림에서 창의만들기 전환율


-----
피그마 디자인 링크를 참고해주세요.
https://www.figma.com/design/yVrsbOkQ5YlnzTjXykcLgs/%ED%92%88%ED%86%A0-%EC%95%B1-%EC%B5%9C%EC%A2%85%EB%B3%B8?node-id=1-2&t=Uckn3VtSJLt8smAG-1
