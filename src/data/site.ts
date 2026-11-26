// 店舗情報・メニュー・文章はこのファイルにまとめています。
// 内容は参考サイト（Readdy で作成したデザイン）に掲載されていた情報に基づきます。
// 未確認の情報（営業時間・個別の価格など）は載せていません。
import type { ImageName } from './images'

export const DEMO_NOTICE = '本サイトはWebサイト制作提案用の非公式デモです。店舗が運営する公式サイトではありません。'

const INSTAGRAM_URL = 'https://www.instagram.com/atacucafe/'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=atacu+cafe+%E7%A5%9E%E4%BF%9D%E7%94%BA'

export const shop = {
  name: 'atacu cafe',
  nameKana: 'アタクカフェ',
  tagline: 'Good Food. Good Sweets. Good Coffee.',
  owner: '安宅 智彦',
  postalCode: '〒101-0051',
  address: '東京都千代田区神田神保町1-26 CK126 1F',
  access: '神保町駅A5出口から徒歩約3分',
  tel: '090-2154-9516',
  telHref: 'tel:09021549516',
  hours: '営業時間・定休日は公式Instagramをご確認ください。',
  service: 'イートイン・テイクアウト',
  budget: '1,000〜2,000円（目安）',
  opened: '2023年オープン',
  instagram: { handle: '@atacucafe', url: INSTAGRAM_URL },
  mapsUrl: MAPS_URL,
  mapEmbedUrl:
    'https://www.google.com/maps?q=atacu+cafe+%E7%A5%9E%E7%94%B0%E7%A5%9E%E4%BF%9D%E7%94%BA1-26&output=embed',
}

export const nav = [
  { id: 'concept', label: 'Concept', ja: 'コンセプト' },
  { id: 'lunch', label: 'Lunch', ja: 'ランチ' },
  { id: 'sweets', label: 'Sweets', ja: 'スイーツ' },
  { id: 'coffee', label: 'Coffee', ja: 'コーヒー' },
  { id: 'access', label: 'Access', ja: 'アクセス' },
] as const

/** 見出しは1行ずつ配列で持ちます。「/」は文節の区切り（そこでだけ折り返す）、accent の語は色を変えます */
export type Heading = { lines: string[]; accent?: string }

export const hero = {
  place: 'Jimbocho, Tokyo',
  heading: { lines: ['おいしいを、', 'ひとつの/場所で。'], accent: '場所' } as Heading,
  lead: ['料理も、ケーキも、コーヒーも。', '神保町で出会う、こだわりのひと皿と心地よい時間。'],
  facts: [
    { main: '徒歩約3分', sub: '神保町駅A5出口から' },
    { main: 'イートイン', sub: 'テイクアウト対応' },
    { main: '2023年', sub: 'オープン' },
  ],
  videoCaption: '料理・菓子・珈琲',
  inset: { image: 'table-window' as ImageName, alt: '窓辺のテーブルに並ぶ器（イメージ画像）' },
}

export const concept = {
  heading: { lines: ['ひとりの/料理人から/広がる、', 'おいしさの/可能性。'], accent: '可能性' } as Heading,
  lead: 'ジャンルにとらわれないランチから、パティシエとしての経験を活かしたスイーツ、食後のコーヒーまで。日常の中で、さまざまなおいしさに出会える場所です。',
  body: '料理、スイーツ、コーヒー。それぞれの分野で経験を重ねてきた料理人が営む、神保町のatacu cafe。ひとつの店で、まったく違うおいしさに出会えることが、この場所のいちばんの特徴です。',
  pillars: [
    {
      en: 'Food',
      ja: '料理',
      text: '日本料理から始まった料理人としての経験を活かした、ジャンルにとらわれないランチ。',
    },
    {
      en: 'Sweets',
      ja: '菓子',
      text: 'パティシエとしての経験から生まれる、食後にも午後のひと休みにも嬉しい手作りスイーツ。',
    },
    { en: 'Coffee', ja: '珈琲', text: 'バリスタとしての経験を持つ店主が淹れる、料理やスイーツに寄り添うコーヒー。' },
  ],
  note: '掲載写真はすべてイメージ画像です。店舗提供の写真に差し替えられる構成にしています。',
}

export const lunch = {
  heading: { lines: ['今日の/ランチを、', '少し/特別に。'], accent: '特別' } as Heading,
  lead: '彩り豊かな野菜を使った料理から、食べ応えのあるランチまで。ジャンルにとらわれない、多彩なメニューをご紹介します。ランチセットにデザートなどが付く提供実績もあります（すべてのメニューではありません）。',
  items: [
    {
      name: '旅するタコライス',
      text: '好みのソースを選んで楽しめるタコライス。彩り豊かな盛り付けで、食事としての満足感もしっかり。',
    },
    {
      name: 'グリーンサラダボウル',
      text: '野菜をたっぷり楽しめるサラダボウル。おにぎりまたはトーストが付く提供実績があります。',
    },
    {
      name: 'キーマカレー',
      text: '辛さを1〜10段階から選べる提供実績のある一皿。辛さの選択肢や提供状況は店舗でご確認ください。',
    },
    { name: 'オムライス', text: 'Googleマップの口コミでも名前が挙がるランチメニューのひとつです。' },
  ],
  note: '掲載メニューは提供実績のある商品の一例です。内容・価格・提供状況は変更される場合があります。個別の価格は掲載していません。写真はイメージ画像です。',
}

export const sweets = {
  heading: { lines: ['食後にも、', '午後の/ひと休みにも。'], accent: 'ひと休み' } as Heading,
  lead: 'パティシエとしての経験を活かした、atacu cafeのスイーツ。ランチの後やコーヒーのお供に、甘いひとときをお楽しみください。',
  items: [
    { name: 'チーズケーキ', image: 'sweets-cheesecake' },
    { name: 'プリン', image: 'sweets-pudding' },
    { name: 'バナナのトライフル', image: 'sweets-trifle' },
    { name: '抹茶ロールケーキ', image: 'sweets-matcha-roll' },
  ] satisfies { name: string; image: ImageName }[],
  note: '提供実績のあるスイーツの一例です。種類や販売状況は日によって異なる場合があります。現在のラインナップは店舗または公式Instagramでご確認ください。',
}

export const coffee = {
  display: ['Good Coffee,', 'Good Time.'],
  text: 'お食事の後に。街歩きの途中に。バリスタとしての経験を持つ店主のコーヒーとスイーツを楽しみながら、神保町でゆっくりと過ごすひとときを。',
  note: '写真はイメージ画像です。豆の産地・焙煎・抽出の詳細は、店舗でご確認ください。',
}

export const story = {
  heading: {
    lines: ['料理人、/パティシエ、/バリスタ。', 'その経験を、/ひとつの/カフェに。'],
    accent: 'ひとつ',
  } as Heading,
  career: ['日本料理', 'パティシエ', 'バリスタ', '飲食店運営'],
  paragraphs: [
    '日本料理から始まった、料理人としてのキャリア。そこからパティシエやバリスタ、飲食店の運営へと、安宅智彦さんはさまざまな分野で経験を重ねてきました。',
    'それぞれの現場で身につけた技術と感覚を、ひとつの店に集めたのがatacu cafeです。料理は料理人の視点で、菓子はパティシエの視点で、コーヒーはバリスタの視点で。',
    'だからこの店では、ランチも、ケーキも、コーヒーも、同じテーブルの上で自然につながります。ひとつの分野を突き詰めるのではなく、いくつものおいしさを並べて楽しめること。それが、この店のいちばんの特徴です。',
  ],
  note: '経歴は公開されている取材記事等の情報をもとに記載しています。',
  photoNote: '写真はイメージです。店主ご本人の写真は掲載していません。',
}

export const reviews = {
  heading: { lines: ['お客様から/寄せられた/評価。'], accent: '評価' } as Heading,
  lead: '口コミで多く見られるのは、料理の味わい、スイーツの種類、ランチの満足感、そして落ち着いた店内の雰囲気についての声です。',
  rating: '4.7',
  count: '76',
  asOf: '2026年11月26日',
  note: '口コミの傾向を要約したもので、実際の口コミの転載ではありません。',
  themes: [
    { title: '料理のおいしさ', text: 'ひと皿ごとの味わいと丁寧さに触れる声が見られます。' },
    { title: 'スイーツの種類', text: 'ケーキやプリンなど、選ぶ楽しさのあるスイーツが評価されています。' },
    { title: 'ランチの満足感', text: '彩りと食べ応えを両立したランチへの満足の声が目立ちます。' },
    { title: '落ち着いた雰囲気', text: 'ひとりでも過ごしやすい、穏やかな店内の空気に触れる声があります。' },
  ],
}

export const space = {
  heading: { lines: ['神保町で、', '自分だけの/ひと休み。'], accent: 'ひと休み' } as Heading,
  lead: 'ひとりで味わうランチ、友人とのカフェタイム、古書店めぐりの途中のひと息。それぞれのペースで過ごせる時間が、ここにあります。',
  note: '店内の写真はイメージです。実際の内装・座席数・設備については店舗でご確認ください。',
  takeout: {
    heading: ['お店のおいしさを、', 'いつもの日常にも。'],
    text: 'テイクアウトに対応しています。対象メニューや最新の対応状況は、店舗または公式Instagramでご確認ください。',
  },
}

export const gallery = {
  heading: { lines: ['ひと皿ごとの、', '小さな/物語。'], accent: '物語' } as Heading,
  lead: '料理、スイーツ、コーヒー、そして店内。雑誌のフォトエッセイのように、日々の風景を少しずつ並べました。掲載写真はすべてイメージ画像です。',
  photos: [
    { image: 'grilled-vegetable-rice', caption: '野菜をたっぷりのせた一皿' },
    { image: 'lunch-table', caption: 'ランチとコーヒーが並ぶテーブル' },
    { image: 'pudding-closeup', caption: 'カラメルのプリン' },
    { image: 'window-bench', caption: '窓辺に差し込む午後の光' },
  ] satisfies { image: ImageName; caption: string }[],
}

export const instagramHeading: Heading = { lines: ['今日のおいしい/情報は、/Instagramで。'] }

export const access = {
  heading: { lines: ['神保町で、', 'お待ちしています。'], accent: 'お待ち' } as Heading,
  lead: '神保町駅A5出口から徒歩約3分。ランチにも、午後のコーヒーにも。ご来店を心よりお待ちしています。',
}

export const faqHeading: Heading = { lines: ['はじめての方へ、', 'よくあるご質問。'] }

export const faq = [
  {
    q: '営業時間と定休日を教えてください。',
    a: '情報源によって内容が異なるため、本サイトでは掲載していません。最新情報は公式Instagram（@atacucafe）をご確認ください。',
  },
  {
    q: '予算はどのくらいですか？',
    a: '価格帯の目安は1,000〜2,000円です（提供情報に基づく目安）。個別のメニュー価格は店舗または公式Instagramでご確認ください。',
  },
  {
    q: 'テイクアウトはできますか？',
    a: 'テイクアウトに対応しています。対象メニューや最新の対応状況は、店舗または公式Instagramでご確認ください。',
  },
  {
    q: '最寄り駅からの行き方は？',
    a: '神保町駅A5出口から徒歩約3分です。住所は東京都千代田区神田神保町1-26 CK126 1F。Google Mapsでのご確認がおすすめです。',
  },
  {
    q: 'ひとりでも利用しやすいですか？',
    a: '口コミでは落ち着いた店内の雰囲気に触れる声が見られます。ひとりでのランチやカフェタイムにもどうぞ。',
  },
]
