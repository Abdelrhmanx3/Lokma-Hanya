export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // in EGP — undefined means price varies (see description)
  unit?: string; // e.g. "1 كيلو", "رغيف", "جوز"
  image: string;
  isTopSeller?: boolean
};

export type MenuCategory = {
  id: number;
  slug: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 1,
    slug: "salads",
    name: "السلطات",
    items: [
      {
        id: "salad-baladi",
        name: "سلطة بلدي",
        price: 50,
        description:
          "تشكيلة طازجة من الطماطم والخيار والفلفل والبصل، بلمسة ليمون منعشة تفتح الشهية.",
        image: "/images/salad/SaladBaldi.png",
      },
      {
        id: "salad-special",
        name: "سلطة سبيشال",
        price: 70,
        description: "تشكيلة مميزة من أجود الخضروات الطازجة بلمسة خاصة.",
        image: "/images/salad/SaladBaldi.png",

      },
      {
        id: "salad-tahini",
        name: "سلطة طحينة",
        price: 70,
        description: "طحينة كريمية ناعمة متبلة بالليمون والثوم بنكهة أصيلة.",
        image: "/images/salad/tahiniSalad.png",

      },
      {
        id: "salad-yogurt-cucumber",
        name: "سلطة زبادي بالخيار",
        price: 80,
        description: "زبادي طازج ممزوج بالخيار والنعناع، طبق منعش وخفيف.",
        image: "/images/salad/yougurtSalad.png",

      },
      {
        id: "salad-coleslaw",
        name: "سلطة كول سلو",
        price: 80,
        description: "ملفوف وجزر مقرمش بصوص كريمي غني ولذيذ.",
        image: "/images/salad/colslow.png",

      },
      {
        id: "salad-baba-ghanoush",
        name: "سلطة بابا غنوج",
        price: 70,
        description: "باذنجان مشوي مهروس ممزوج بالطحينة والثوم بنكهة مدخنة مميزة.",
        image: "/images/salad/babaGnoug.png",

      },
      {
        id: "pickled-eggplant",
        name: "باذنجان مخلل",
        price: 50,
        description: "باذنجان محشي بتتبيلة الثوم والفلفل، مخلل بطريقة بيتي أصيلة.",
        image: "/images/salad/PickeldEggPlanet.png",

      },
      {
        id: "pickled-tomato",
        name: "طماطم مخللة",
        price: 50,
        description: "طماطم متبلة ومخللة بنكهة مميزة، إضافة منعشة لأي طبق.",
        image: "/images/salad/pickeldTomato.png",

      },
    ],
  },
  {
    id: 2,
    slug: "appetizers",
    name: "المقبلات",
    items: [
      {
        id: "samosa-meat",
        name: "سمبوسك لحمة",
        price: 400,
        unit: "1 كيلو",
        description: "1 كيلو – رقائق مقرمشة محشوة بلحمة مفرومة متبلة بالبهارات الشرقية.",
        image: "/images/appetizers/sambosakMeat.png",


      },
      {
        id: "samosa-cheese",
        name: "سمبوسك جبنة",
        price: 350,
        unit: "1 كيلو",
        description: "1 كيلو – رقائق ذهبية مقرمشة محشوة بالجبنة الذائبة الشهية.",
        image: "/images/appetizers/sambosakCheese.png",


      },
      {
        id: "hawawshi",
        name: "حواوشي",
        price: 150,
        unit: "رغيف",
        description: "رغيف – خبز بلدي محشو باللحم المفروم المتبل ومخبوز حتى القرمشة.",
        image: "/images/appetizers/hwawshi.png",


      },
      {
        id: "moussaka",
        name: "مسقعة",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – باذنجان مطهو مع صلصة الطماطم والثوم بطعم بيتي غني.",
        image: "/images/appetizers/msaka.png",


      },
    ],
  },
  {
    id: 3,
    slug: "stuffed-vegetables",
    name: "المحاشي",
    items: [
      {
        id: "vine-leaves",
        name: "ورق عنب",
        price: 250,
        unit: "1 كيلو",
        description: "1 كيلو – أوراق عنب طرية محشوة بالأرز والأعشاب العطرية.",
        image: "/images/mahshi/warkEnab.png",


        isTopSeller: true

      },
      {
        id: "stuffed-cabbage",
        name: "كرنب",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – أوراق كرنب طرية محشوة بالأرز والصلصة بطعم بيتي أصيل.",
        image: "/images/mahshi/kronb.png",



      },

      {
        id: "stuffed-eggplant",
        name: "باذنجان",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – باذنجان محشو بالأرز المتبل بنكهات مصرية مميزة.",
        image: "/images/mahshi/btngan.png",



      },
      {
        id: "stuffed-zucchini",
        name: "كوسة",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – كوسة طرية محشوة بالأرز المتبل بطعم شهي.",
        image: "/images/mahshi/kosa.png",



      },
      {
        id: "stuffed-pepper",
        name: "فلفل",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – فلفل محشو بالأرز والبهارات المصرية الأصيلة.",
        image: "/images/mahshi/flfl.png",


      },
      {
        id: "mixed-stuffed",
        name: "مشكل",
        price: 200,
        unit: "1 كيلو",
        description: "1 كيلو – تشكيلة متنوعة من أشهى أطباق المحاشي في طبق واحد.",
        image: "/images/mahshi/mixMahashi.png",



      },
      {
        id: "mombar",
        name: "ممبار",
        price: 300,
        unit: "1 كيلو",
        description: "1 كيلو – أمعاء محشوة بالأرز والخلطة المصرية المميزة، طبق تقليدي أصيل.",
        image: "/images/mahshi/mombar.png",



      },
    ],
  },
  {
    id: 4,
    slug: "trays",
    name: "الصواني",
    items: [
      {
        id: "tray-ra2a2",
        name: "صينية رقاق",
        price: 500,
        description: "رقاق مقرمش باللحم المفروم بطعم شرقي أصيل.",
        image: "/images/swani/rokak.png",


      },
      {
        id: "tray-goulash",
        name: "صينية جولاش",
        price: 500,
        description: "طبقات ذهبية مقرمشة محشوة باللحم المتبل.",
        image: "/images/swani/goulash.png",


      },
      {
        id: "tray-bechamel-pasta",
        name: "صينية مكرونة بشاميل",
        price: 500,
        description: "مكرونة بطبقات من البشاميل الكريمي واللحم المفروم.",
        image: "/images/swani/macronaBshamel.png",


      },
      {
        id: "tray-bechamel-zucchini",
        name: "صينية كوسة بشاميل",
        price: 450,
        description: "كوسة طازجة مغطاة بصوص البشاميل الغني والشهي.",
        image: "/images/swani/kosaBshamel.png",


      },
    ],
  },
  {
    id: 5,
    slug: "poultry",
    name: "الدواجن",
    items: [
      {
        id: "pigeon-rice-regular",
        name: "جوز حمام محشي أرز عادي",
        price: 400,
        unit: "جوز",
        description: "جوز – حمام بلدي طري محشو بالأرز المتبل بالطريقة المصرية.",
        image: "/images/dwagn/hamam.png",


      },
      {
        id: "pigeon-freekeh-regular",
        name: "جوز حمام محشي فريك عادي",
        price: 430,
        unit: "جوز",
        description: "جوز – حمام بلدي محشو بالفريك المصري الشهي ذو النكهة المميزة.",
        image: "/images/dwagn/hamam.png",


      },
      {
        id: "pigeon-rice-jumbo",
        name: "جوز حمام محشي أرز جامبو",
        price: 500,
        unit: "جوز",
        description: "جوز – حمام بلدي جامبو محشو بالأرز المتبل، حجم أكبر ومذاق أغنى.",
        image: "/images/dwagn/hamam.png",


      },
      {
        id: "pigeon-freekeh-jumbo",
        name: "جوز حمام محشي فريك جامبو",
        price: 550,
        unit: "جوز",
        description: "جوز – حمام بلدي جامبو محشو بالفريك المصري، حجم أكبر ومذاق أغنى.",
        image: "/images/dwagn/hamam.png",


      },
      {
        id: "grilled-chicken",
        name: "فراخة مشوية",
        price: 400,
        description: "دجاج متبل بتتبيلة خاصة ومشوي على الفحم حتى اللون الذهبي.",
        image: "/images/dwagn/chikenGrilled.png",


      },
      {
        id: "stuffed-chicken-rice",
        name: "فراخ بلدي محشية أرز محمرة",
        price: 450,
        description: "فراخ بلدي طرية محشوة بأرز متبل ومحمرة بالفرن بالنكهات المصرية الأصيلة.",
        image: "/images/dwagn/chikWithRice.png",


      },
      {
        id: "duck",
        name: "بط",
        description: "السعر حسب سعر اليوم – بط بلدي مطهو ببطء حتى يصبح طريًا وغنيًا بالمذاق.",
        image: "/images/dwagn/duck.png",
        price: 850

      },
      {
        id: "panne",
        name: "بانيه",
        price: 400,
        unit: "1 كيلو",
        description: "1 كيلو – شرائح صدور دجاج متبلة ومغطاة بطبقة مقرمشة ذهبية.",
        image: "/images/dwagn/chikenBani.png",


      },
      {
        id: "shish-tawook",
        name: "شيش طاووق",
        price: 400,
        unit: "1 كيلو",
        description: "1 كيلو – قطع دجاج متبلة بالزبادي والتوابل ومشوية بإتقان.",
        image: "/images/dwagn/shesh.png",


      },
    ],
  },
  {
    id: 6,
    slug: "meats",
    name: "اللحوم",
    items: [
      {
        id: "meat-onion",
        name: "لحمة بالبصل",
        price: 850,
        unit: "1 كيلو",
        description: "1 كيلو – قطع لحم طرية مطهوة مع البصل والتوابل الشرقية.",
        image: "/images/beef/beefWithOnion.png",


        isTopSeller: true
      },
      {
        id: "steak",
        name: "لحمة ستيك",
        price: 800,
        unit: "1 كيلو",
        description: "1 كيلو – شرائح لحم مشوية ومتبلة بتتبيلة خاصة.",
        image: "/images/beef/steak.png",


      },
      {
        id: "kofta-grilled",
        name: "كفتة مشوية",
        price: 800,
        unit: "1 كيلو",
        description: "1 كيلو – كفتة لحم بلدي مشوية على الفحم بنكهة مميزة.",
        image: "/images/beef/kofta.png",


        isTopSeller: true
      },
      {
        id: "kofta-rice",
        name: "كفتة أرز",
        price: 450,
        unit: "1 كيلو",
        description: "1 كيلو – كفتة مصرية بالأرز والبهارات، مقرمشة من الخارج وطرية من الداخل.",
        image: "/images/beef/koftaRice.png",


      },
      {
        id: "beef-tek",
        name: "بوفتيك",
        price: 850,
        unit: "1 كيلو",
        description: "1 كيلو – شرائح لحم متبلة ومغطاة بالبقسماط الذهبي المقرمش.",
        image: "/images/beef/beftek.png",


      },

      {
        id: "sausage-alexandrian",
        name: "سجق إسكندراني",
        price: 750,
        unit: "1 كيلو",
        description: "1 كيلو – سجق شرقي متبل بالفلفل والثوم والطماطم على الطريقة الإسكندرانية.",
        image: "/images/beef/sausageAlex.png",


      },
      {
        id: "liver-alexandrian",
        name: "كبدة إسكندراني",
        price: 750,
        unit: "1 كيلو",
        description: "1 كيلو – كبدة طازجة متبلة بالثوم والفلفل الحار على الطريقة الإسكندرانية.",
        image: "/images/beef/kebdaAlex.png",


      },
      {
        id: "burger",
        name: "برجر",
        price: 900,
        description: "1 كيلو – برجر لحم بلدي مشوي بطعم غني وشهي..",
        image: "/images/beef/burger.png",


      },
    ],
  },
  {
    id: 7,
    slug: "side-dishes",
    name: "الأطباق الجانبية",
    items: [
      {
        id: "white-rice",
        name: "أرز أبيض سادة",
        price: 150,
        unit: "1 كيلو",
        description: "1 كيلو – أرز مصري أبيض مطهو بحبات مفلفلة.",
        image: "/images/sides/whiteRice.png",


      },
      {
        id: "rice-vermicelli",
        name: "أرز بالشعيرية",
        price: 150,
        unit: "1 كيلو",
        description: "1 كيلو – أرز مصري بالشعيرية المحمرة بطعم بيتي أصيل.",
        image: "/images/sides/riceWithSheraya.png",


      },
      {
        id: "basmati-rice",
        name: "أرز بسمتي سادة",
        price: 230,
        unit: "1 كيلو",
        description: "1 كيلو – أرز بسمتي طويل الحبة بنكهة مميزة.",
        image: "/images/sides/yellowRice.png",


      },
      {
        id: "basmati-nuts",
        name: "أرز بسمتي بالمكسرات",
        price: 350,
        unit: "1 كيلو",
        description: "1 كيلو – أرز بسمتي فاخر مزين بالمكسرات المحمصة.",
        image: "/images/sides/basmatyWithMksrat.png",


      },
      {
        id: "pommes-frites",
        name: "بطاطس بوم فريت محمرة",
        price: 100,
        description: "أصابع بطاطس مقلية ذهبية ومقرمشة.",
        image: "/images/sides/potato.png",


      },
      {
        id: "rice-cream-tagen",
        name: "طاجن أرز معمر بالقشطة البلدي",
        price: 200,
        description: "أرز مصري مخبوز بالقشطة البلدي حتى يكتسب وجهًا ذهبيًا شهيًا.",
        image: "/images/sides/riceWithMilk.png",


      },
    ],
  },
];

export interface FlatMenuItem extends MenuItem {
  categorySlug: string;
  categoryName: string;
}

export const allMenuItems: FlatMenuItem[] = menu.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    id: `/${item.id}`,
    categorySlug: category.slug,
    categoryName: category.name,
  }))
);

export const topSales: FlatMenuItem[] = allMenuItems.filter(
  (item) => item.isTopSeller
);