const comments = [
  {
    id: 1,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Müştəri olaraq çox razı qaldım. Ayaqqabılarım çox rahatdır, çantalar isə həm şık, həm də funksionaldır. Sifariş prosesi asan və sürətlidir. Hər şey üçün təşəkkür edirəm!",
  },
  {
    id: 2,
    name: "Rəşad Q.",
    rating: 4,
    comment:
      "Saytınızdan ilk dəfə alış-veriş etdim və çox razı qaldım. Ayaqqabılarım tam ölçüdə gəldi, keyfiyyətinə söz ola bilməz. Çantalar isə həm şık, həm də çox funksionaldır. Müştəri dəstəyi də çox nəzakətli və tez cavab verdi. Bundan sonra həmişə burada alış-veriş edəcəyəm",
  },
  {
    id: 3,
    name: "Leyla K.",
    rating: 5,
    comment:
      "Ayaqqabılar inanılmaz rahatdır və görünüşü tam fotoşəkildəki kimidir. Çantalar da həm gündəlik, həm də iş üçün ideal seçimdir. Saytın istifadəçi interfeysi sadə və rahatdır, sifarişi tamamlamaq çox asan oldu. Hər şey mükəmməl!",
  },
  {
    id: 4,
    name: "Elvin H.",
    rating: 3,
    comment:
      "Mən tez-tez onlayn alış-veriş edirəm, amma bu saytın məhsulları və xidmətləri fərqlidir. Sifariş çox tez gəldi, qablaşdırma isə diqqətlə hazırlanmışdı. Ayaqqabılarım çox rahatdır və çantamın keyfiyyəti gözlədiyimdən də yaxşıdır.",
  },
  {
    id: 5,
    name: "Nuray M.",
    rating: 5,
    comment:
      "Saytda seçim çox genişdir. Mən həm ayaqqabı, həm də çanta aldım və hər ikisi tam gözlədiyim kimi gəldi. Ödəniş və çatdırılma prosesi çox sürətli idi. Ümumiyyətlə, alış-veriş təcrübəm çox xoş oldu.",
  },
  {
    id: 6,
    name: "Cingiz Q.",
    rating: 4,
    comment:
      "Bu saytı dostum tövsiyə etdi və indi mən də tövsiyə edirəm! Məhsulların keyfiyyəti çox yüksəkdir, ölçülər dəqiqdir. Çantalar çox şıkdır və çoxlu bölmələri var. Hər şey planlaşdırıldığı kimi oldu.",
  },
  {
    id: 7,
    name: "Murad K.",
    rating: 5,
    comment:
      "Ayaqqabılar həm gündəlik, həm də iş üçün əladır. Çantalar çox rahatdır və tutumu kifayət qədər genişdir. Sifarişin çatdırılması sürətli oldu və hər şey çox səliqəli paketlənmişdi. Razıyam, 5 ulduzdan çox!",
  },
  {
    id: 8,
    name: "Sehla H.",
    rating: 4,
    comment:
      "Saytın interfeysi çox sadədir və məhsulları asanlıqla tapa bilirsiniz. Mən qara ayaqqabı və bej çanta aldım, hər ikisi fotoşəkildəkindən də gözəldir. Paketləmə də çox diqqətli idi. Satıcıya təşəkkür edirəm!",
  },
  {
    id: 9,
    name: "Aysel M.",
    rating: 5,
    comment:
      "İlk dəfə onlayn alış-veriş etdim və çox məmnun qaldım. Ayaqqabılar çox rahatdır, çantalar isə həm gündəlik, həm də xüsusi hallar üçün ideal seçimdir. Hər şey vaxtında və problemsiz çatdırıldı. Əla xidmət!",
  },
  {
    id: 10,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Bu saytdan alış-veriş etmək çox rahatdır. Məhsulların keyfiyyəti gözlədiyimdən də yaxşıdır, ölçülər dəqiqdir. Çantaların detallarına qədər diqqət yetirilib. Sifariş prosesi çox sadədir və çatdırılma sürətlidir. Tövsiyə edirəm!",
  },
  {
    id: 11,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Mən müxtəlif markalardan onlayn alış-veriş etmişəm, amma bu saytın məhsulları və xidmətləri həqiqətən fərqlidir. Ayaqqabılar çox rahatdır, çantalar isə çox şıkdır. Satıcı da çox nəzakətlidir və hər suala tez cavab verir.",
  },
  {
    id: 12,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Sifariş etdiyim məhsullar çox keyfiyyətlidir və fotoşəkillərdə göründüyü kimi gəldi. Çantamın ölçüsü idealdır, ayaqqabılar isə ayağıma tam oturdu. Saytın müştəri xidməti də çox səmimi və peşəkardır.",
  },
  {
    id: 13,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Alış-veriş prosesi çox rahat idi, ödəniş təhlükəsiz və sürətli tamamlandı. Məhsullar da çox gözəl paketlənmişdi. Ayaqqabılarım çox rahatdır və çantam gündəlik istifadə üçün çox uyğundur. Razı qaldım!",
  },
  {
    id: 14,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Mən saytda bir neçə məhsul sifariş etdim və hər biri gözlədiyimdən də yaxşı gəldi. Keyfiyyət, dizayn və çatdırılma prosesi mükəmməldir. Bundan sonra bütün alış-verişlərimi bu saytdan edəcəyəm.",
  },
  {
    id: 15,
    name: "Aysel M.",
    rating: 5,
    comment:
      "Saytda çox geniş seçim var, hər zövqə uyğun məhsul tapmaq mümkündür. Mən həm ayaqqabı, həm də çanta aldım və hər ikisi çox gözəldir. Sifariş prosesi çox asandır, çatdırılma sürətlidir və paketləmə diqqətlidir.",
  },
];

export default comments;
