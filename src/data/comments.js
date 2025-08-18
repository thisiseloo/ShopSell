const comments = [
  {
    id: 1,
    name: "Aysel Məmmədova",
    rating: 5,
    comment:
      "Saytınızdan ilk dəfə alış-veriş etdim və çox razı qaldım. Ayaqqabılarım tam ölçüdə gəldi, keyfiyyətinə söz ola bilməz. Çantalar isə həm şık, həm də çox funksionaldır. Müştəri dəstəyi də çox nəzakətli və tez cavab verdi. Bundan sonra həmişə burada alış-veriş edəcəyəm.",
  },
  {
    id: 2,
    name: "Elvin Rzayev",
    rating: 5,
    comment:
      "Ayaqqabılar inanılmaz rahatdır və görünüşü tam fotoşəkildəki kimidir. Çantalar da həm gündəlik, həm də iş üçün ideal seçimdir. Saytın istifadəçi interfeysi sadə və rahatdır, sifarişi tamamlamaq çox asan oldu. Hər şey mükəmməl!",
  },
  {
    id: 3,
    name: "Nigar Həsənova",
    rating: 5,
    comment:
      "Mən tez-tez onlayn alış-veriş edirəm, amma bu saytın məhsulları və xidmətləri fərqlidir. Sifariş çox tez gəldi, qablaşdırma isə diqqətlə hazırlanmışdı. Ayaqqabılarım çox rahatdır və çantamın keyfiyyəti gözlədiyimdən də yaxşıdır.",
  },
  {
    id: 4,
    name: "Tural Quliyev",
    rating: 5,
    comment:
      "Saytda seçim çox genişdir. Mən həm ayaqqabı, həm də çanta aldım və hər ikisi tam gözlədiyim kimi gəldi. Ödəniş və çatdırılma prosesi çox sürətli idi. Ümumiyyətlə, alış-veriş təcrübəm çox xoş oldu.",
  },
  {
    id: 5,
    name: "Fidan Əliyeva",
    rating: 5,
    comment:
      "Bu saytı dostum tövsiyə etdi və indi mən də tövsiyə edirəm! Məhsulların keyfiyyəti çox yüksəkdir, ölçülər dəqiqdir. Çantalar çox şıkdır və çoxlu bölmələri var. Hər şey planlaşdırıldığı kimi oldu.",
  },
  {
    id: 6,
    name: "Kamran Vəliyev",
    rating: 5,
    comment:
      "Ayaqqabılar həm gündəlik, həm də iş üçün əladır. Çantalar çox rahatdır və tutumu kifayət qədər genişdir. Sifarişin çatdırılması sürətli oldu və hər şey çox səliqəli paketlənmişdi. Razıyam, 5 ulduzdan çox!",
  },
  {
    id: 7,
    name: "Aytən Məmmədova",
    rating: 5,
    comment:
      "Saytın interfeysi çox sadədir və məhsulları asanlıqla tapa bilirsiniz. Mən qara ayaqqabı və bej çanta aldım, hər ikisi fotoşəkildəkindən də gözəldir. Paketləmə də çox diqqətli idi. Satıcıya təşəkkür edirəm!",
  },
  {
    id: 8,
    name: "Rəşad Əliyev",
    rating: 5,
    comment:
      "İlk dəfə onlayn alış-veriş etdim və çox məmnun qaldım. Ayaqqabılar çox rahatdır, çantalar isə həm gündəlik, həm də xüsusi hallar üçün ideal seçimdir. Hər şey vaxtında və problemsiz çatdırıldı. Əla xidmət!",
  },
  {
    id: 9,
    name: "Leyla Məmmədova",
    rating: 5,
    comment:
      "Bu saytdan alış-veriş etmək çox rahatdır. Məhsulların keyfiyyəti gözlədiyimdən də yaxşıdır, ölçülər dəqiqdir. Çantaların detallarına qədər diqqət yetirilib. Sifariş prosesi çox sadədir və çatdırılma sürətlidir. Tövsiyə edirəm!",
  },
  {
    id: 10,
    name: "Orxan Həsənov",
    rating: 5,
    comment:
      "Mən müxtəlif markalardan onlayn alış-veriş etmişəm, amma bu saytın məhsulları və xidmətləri həqiqətən fərqlidir. Ayaqqabılar çox rahatdır, çantalar isə çox şıkdır. Satıcı da çox nəzakətlidir və hər suala tez cavab verir.",
  },
  {
    id: 11,
    name: "Nəsrin Quliyeva",
    rating: 5,
    comment:
      "Sifariş etdiyim məhsullar çox keyfiyyətlidir və fotoşəkillərdə göründüyü kimi gəldi. Çantamın ölçüsü idealdır, ayaqqabılar isə ayağıma tam oturdu. Saytın müştəri xidməti də çox səmimi və peşəkardır.",
  },
  {
    id: 12,
    name: "Elmar Əliyev",
    rating: 5,
    comment:
      "Alış-veriş prosesi çox rahat idi, ödəniş təhlükəsiz və sürətli tamamlandı. Məhsullar da çox gözəl paketlənmişdi. Ayaqqabılarım çox rahatdır və çantam gündəlik istifadə üçün çox uyğundur. Razı qaldım!",
  },
  {
    id: 13,
    name: "Səbinə Rzayeva",
    rating: 5,
    comment:
      "Mən saytda bir neçə məhsul sifariş etdim və hər biri gözlədiyimdən də yaxşı gəldi. Keyfiyyət, dizayn və çatdırılma prosesi mükəmməldir. Bundan sonra bütün alış-verişlərimi bu saytdan edəcəyəm.",
  },
  {
    id: 14,
    name: "Tunar Məmmədli",
    rating: 5,
    comment:
      "Saytda çox geniş seçim var, hər zövqə uyğun məhsul tapmaq mümkündür. Mən həm ayaqqabı, həm də çanta aldım və hər ikisi çox gözəldir. Sifariş prosesi çox asandır, çatdırılma sürətlidir və paketləmə diqqətlidir.",
  },
  {
    id: 15,
    name: "Nərgiz Hüseynova",
    rating: 5,
    comment:
      "Müştəri olaraq çox razı qaldım. Ayaqqabılarım çox rahatdır, çantalar isə həm şık, həm də funksionaldır. Saytın interfeysi istifadəçi dostudur, sifariş prosesi asan və sürətlidir. Hər şey üçün təşəkkür edirəm!",
  },
];

export default comments;
