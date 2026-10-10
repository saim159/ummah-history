/* =========================================================
   স্কলার ডেটাবেজ — নতুন স্কলার যোগ করতে P-তে একটি লাইন যোগ করুন,
   আর G-তে তার আইডি সংশ্লিষ্ট বিভাগে বসান।
   ফরম্যাট:  id:["বাংলা নাম","English name","العربية","ভূমিকা (বাংলা)","Role (English)"]
   ========================================================= */
const GROUPS={
 comp:["সাহাবি ও তাবেঈ যুগ","Companions & Successors","#8a5a2b"],
 hanafi:["হানাফি মাজহাব","Hanafi School","#0f5a4a"],
 maliki:["মালিকি মাজহাব","Maliki School","#b8892b"],
 shafii:["শাফেয়ি মাজহাব","Shafi'i School","#2f4f8a"],
 hanbali:["হাম্বলি মাজহাব","Hanbali School","#7a2e3a"],
 hadith:["হাদিসশাস্ত্র","Hadith Sciences","#6b3fa0"],
 tafsir:["তাফসির ও উলুমুল কুরআন","Tafsir & Quranic Sciences","#c0662b"],
 aqida:["আকিদা ও কালাম","Theology (Aqida & Kalam)","#3a6d8a"],
 philosophy:["দর্শন ও যুক্তিবিদ্যা","Philosophy & Logic","#5a3f8a"],
 science:["গণিত, চিকিৎসা ও বিজ্ঞান","Mathematics, Medicine & Science","#2b8a6a"],
 history:["ইতিহাস ও জীবনীশাস্ত্র","History & Biography","#8a2b4f"],
 sufi:["তাসাউফ ও আধ্যাত্মিকতা","Tasawwuf & Spirituality","#5f7a2b"],
 ottoman:["উসমানি, মুঘল ও পরবর্তী যুগ","Ottoman, Mughal & Later Era","#a0522d"],
 modern:["আধুনিক চিন্তাবিদ","Modern Thinkers","#2b5f8a"],
 shia:["শিয়া ঐতিহ্য","Shi'a Tradition","#4a6a5a"],
 bd:["বাংলাদেশের আলেম","Scholars of Bangladesh","#1f7a4a"]
};

const P={
 /* সাহাবি ও তাবেঈ */
 ibn_abbas:["আবদুল্লাহ ইবনে আব্বাস (রা.)","Abdullah ibn Abbas","عبد الله بن عباس","তাফসির ও কুরআন ব্যাখ্যা","Tafsir and Quranic exegesis"],
 ibn_masud:["আবদুল্লাহ ইবনে মাসউদ (রা.)","Abdullah ibn Mas'ud","عبد الله بن مسعود","কুরআন, ফিকহ","Quran, Fiqh"],
 ubayy:["উবাই ইবনে কাব (রা.)","Ubayy ibn Ka'b","أبي بن كعب","কুরআন ও কিরাআত","Quran and Qira'at"],
 aisha:["আয়িশা (রা.)","Aisha bint Abi Bakr","عائشة بنت أبي بكر","হাদিস, ফিকহ ও ফতোয়া","Hadith, Fiqh and Fatwa"],
 zayd:["যায়েদ ইবনে সাবিত (রা.)","Zayd ibn Thabit","زيد بن ثابت","কুরআন সংকলন, ফারায়েজ","Quran compilation, Inheritance law"],
 abu_hurayra:["আবু হুরায়রা (রা.)","Abu Hurayra","أبو هريرة","হাদিস বর্ণনা","Hadith narration"],
 ali:["আলী ইবনে আবি তালিব (রা.)","Ali ibn Abi Talib","علي بن أبي طالب","ফিকহ, বিচার ও জ্ঞানচর্চা","Fiqh, judiciary and learning"],
 umar2:["উমর ইবনে আবদুল আজিজ (রহ.)","Umar ibn Abd al-Aziz","عمر بن عبد العزيز","হাদিস সংরক্ষণ ও প্রশাসন","Hadith preservation and administration"],
 said_musayyib:["সাঈদ ইবনে মুসাইয়্যিব","Sa'id ibn al-Musayyib","سعيد بن المسيب","ফিকহ","Fiqh"],
 hasan_basri:["হাসান আল-বসরী","Hasan al-Basri","الحسن البصري","আখলাক, তাসাউফ ও ধর্মীয় চিন্তা","Ethics, Tasawwuf and religious thought"],
 ata:["আতা ইবনে আবি রাবাহ","Ata ibn Abi Rabah","عطاء بن أبي رباح","ফিকহ","Fiqh"],
 mujahid:["মুজাহিদ ইবনে জাবর","Mujahid ibn Jabr","مجاهد بن جبر","তাফসির","Tafsir"],
 ikrima:["ইকরিমা","Ikrima","عكرمة","তাফসির ও হাদিস","Tafsir and Hadith"],
 zuhri:["মুহাম্মদ ইবনে শিহাব আয-যুহরী","Ibn Shihab al-Zuhri","ابن شهاب الزهري","হাদিস","Hadith"],
 jafar:["ইমাম জাফর আস-সাদিক","Ja'far al-Sadiq","جعفر الصادق","হাদিস, ফিকহ ও জ্ঞানচর্চা","Hadith, Fiqh and learning"],
 /* হানাফি */
 abu_hanifa:["ইমাম আবু হানিফা (রহ.)","Abu Hanifa (Imam al-A'zam)","أبو حنيفة","",""],
 abu_yusuf:["ইমাম আবু ইউসুফ (রহ.)","Abu Yusuf","أبو يوسف","",""],
 shaybani:["ইমাম মুহাম্মদ ইবনে হাসান আশ-শায়বানী (রহ.)","Muhammad ibn al-Hasan al-Shaybani","محمد بن الحسن الشيباني","",""],
 zufar:["ইমাম যুফার ইবনে হুযাইল","Zufar ibn al-Hudhayl","زفر بن الهذيل","",""],
 tahawi:["ইমাম তাহাবি","Al-Tahawi","الطحاوي","",""],
 jassas:["ইমাম জাসসাস","Al-Jassas","الجصاص","",""],
 sarakhsi:["ইমাম সারাখসি","Al-Sarakhsi","السرخسي","",""],
 kasani:["ইমাম কাসানি","Al-Kasani","الكاساني","",""],
 marghinani:["ইমাম মারগিনানি","Al-Marghinani","المرغيناني","",""],
 ibn_humam:["ইবনুল হুমাম","Ibn al-Humam","ابن الهمام","",""],
 ibn_abidin:["ইবনে আবিদিন","Ibn Abidin","ابن عابدين","",""],
 /* মালিকি */
 malik:["ইমাম মালিক ইবনে আনাস","Malik ibn Anas","مالك بن أنس","আল-মুআত্তা","Al-Muwatta"],
 ibn_abd_barr:["ইবনে আবদুল বার","Ibn Abd al-Barr","ابن عبد البر","",""],
 qadi_iyad:["ইমাম কাজি ইয়াদ","Qadi Iyad","القاضي عياض","",""],
 qarafi:["ইমাম কারাফি","Al-Qarafi","القرافي","",""],
 ibn_rushd_jadd:["ইবনে রুশদ (দাদা)","Ibn Rushd al-Jadd (the Grandfather)","ابن رشد الجد","",""],
 ibn_rushd:["ইবনে রুশদ (দার্শনিক)","Ibn Rushd (Averroes)","ابن رشد","",""],
 qurtubi:["ইমাম কুরতুবি","Al-Qurtubi","القرطبي","",""],
 shatibi:["ইমাম শাতিবি","Al-Shatibi","الشاطبي","",""],
 dardir:["ইমাম দারদির","Al-Dardir","الدردير","",""],
 /* শাফেয়ি */
 shafii:["ইমাম মুহাম্মদ ইবনে ইদরিস আশ-শাফেয়ি","Al-Shafi'i","الشافعي","",""],
 buwayti:["ইমাম বুয়াইতি","Al-Buwayti","البويطي","",""],
 muzani:["ইমাম মুযানি","Al-Muzani","المزني","",""],
 juwayni:["ইমাম জুয়াইনি","Al-Juwayni (Imam al-Haramayn)","الجويني","",""],
 ghazali:["ইমাম গাজালি","Al-Ghazali (Ghazzali)","الغزالي","",""],
 rafii:["ইমাম রাফেয়ি","Al-Rafi'i","الرافعي","",""],
 nawawi:["ইমাম নববি","Al-Nawawi","النووي","শরহ সহিহ মুসলিম, রিয়াদুস সালিহিন","Sharh Sahih Muslim, Riyad al-Salihin"],
 suyuti:["ইমাম সুয়ুতি","Al-Suyuti","السيوطي","হাদিস ও ইসলামী জ্ঞানশাস্ত্র","Hadith and Islamic sciences"],
 haytami:["ইবনে হাজার আল-হাইতামি","Ibn Hajar al-Haytami","ابن حجر الهيتمي","",""],
 ramli:["শামসুদ্দিন রামলি","Shams al-Din al-Ramli","الرملي","",""],
 /* হাম্বলি */
 ahmad:["ইমাম আহমদ ইবনে হাম্বল","Ahmad ibn Hanbal","أحمد بن حنبل","আল-মুসনাদ","Al-Musnad"],
 khallal:["ইমাম খাল্লাল","Al-Khallal","الخلال","",""],
 ibn_qudama:["ইবনে কুদামা","Ibn Qudama","ابن قدامة","",""],
 ibn_taymiyya:["ইবনে তাইমিয়্যা","Ibn Taymiyya","ابن تيمية","",""],
 ibn_qayyim:["ইবনুল কাইয়্যিম","Ibn al-Qayyim","ابن القيم","",""],
 ibn_muflih:["ইবনে মুফলিহ","Ibn Muflih","ابن مفلح","",""],
 marai:["মারঈ ইবনে ইউসুফ","Mar'i ibn Yusuf","مرعي بن يوسف","",""],
 buhuti:["ইমাম বাহুতি","Al-Buhuti","البهوتي","",""],
 /* হাদিস */
 bukhari:["ইমাম বুখারি","Al-Bukhari","البخاري","সহিহ আল-বুখারি","Sahih al-Bukhari"],
 muslim:["ইমাম মুসলিম","Muslim ibn al-Hajjaj","مسلم بن الحجاج","সহিহ মুসলিম","Sahih Muslim"],
 abu_dawud:["আবু দাউদ","Abu Dawud","أبو داود","সুনান আবি দাউদ","Sunan Abi Dawud"],
 tirmidhi:["ইমাম তিরমিজি","Al-Tirmidhi","الترمذي","জামি আত-তিরমিজি","Jami' al-Tirmidhi"],
 nasai:["ইমাম নাসাঈ","Al-Nasa'i","النسائي","সুনান আন-নাসাঈ","Sunan al-Nasa'i"],
 ibn_majah:["ইবনে মাজাহ","Ibn Majah","ابن ماجه","সুনান ইবনে মাজাহ","Sunan Ibn Majah"],
 darimi:["ইমাম দারিমি","Al-Darimi","الدارمي","সুনান আদ-দারিমি","Sunan al-Darimi"],
 daraqutni:["ইমাম দারাকুতনি","Al-Daraqutni","الدارقطني","আল-সুনান","Al-Sunan"],
 bayhaqi:["ইমাম বাইহাকি","Al-Bayhaqi","البيهقي","আস-সুনান আল-কুবরা","Al-Sunan al-Kubra"],
 ibn_abi_hatim:["ইবনে আবি হাতিম","Ibn Abi Hatim","ابن أبي حاتم","হাদিস ও রিজালশাস্ত্র","Hadith and Rijal"],
 khatib:["খতিব বাগদাদি","Al-Khatib al-Baghdadi","الخطيب البغدادي","হাদিসশাস্ত্রের ইতিহাস ও পদ্ধতি","History and methodology of Hadith"],
 ibn_hajar:["ইবনে হাজার আসকালানি","Ibn Hajar al-Asqalani","ابن حجر العسقلاني","ফাতহুল বারি","Fath al-Bari"],
 dhahabi:["শামসুদ্দিন যাহাবি","Al-Dhahabi","الذهبي","হাদিস ও জীবনীশাস্ত্র","Hadith and biography"],
 /* তাফসির */
 tabari:["ইমাম তাবারি","Al-Tabari","الطبري","",""],
 maturidi:["ইমাম মাতুরিদি","Al-Maturidi","الماتريدي","",""],
 wahidi:["ইমাম ওয়াহিদি","Al-Wahidi","الواحدي","",""],
 zamakhshari:["ইমাম জামাখশারি","Al-Zamakhshari","الزمخشري","",""],
 razi:["ইমাম ফখরুদ্দিন রাজি","Fakhr al-Din al-Razi","فخر الدين الرازي","",""],
 ibn_atiyya:["ইমাম ইবনে আতিয়্যা","Ibn Atiyya","ابن عطية","",""],
 baghawi:["ইমাম বাগাভি","Al-Baghawi","البغوي","",""],
 ibn_kathir:["ইমাম ইবনে কাসির","Ibn Kathir","ابن كثير","",""],
 abu_hayyan:["আবু হাইয়ান আল-আন্দালুসি","Abu Hayyan al-Andalusi","أبو حيان الأندلسي","",""],
 alusi:["ইমাম আলুসি","Al-Alusi","الألوسي","",""],
 ismail_haqqi:["ইসমাইল হাক্কি বুরসাভি","Ismail Haqqi Bursevi","إسماعيل حقي البروسوي","",""],
 abduh:["মুহাম্মদ আবদুহ","Muhammad Abduh","محمد عبده","",""],
 rashid_rida:["রশিদ রিদা","Rashid Rida","رشيد رضا","",""],
 mawdudi:["আবুল আ'লা মওদূদি","Abul A'la Mawdudi","أبو الأعلى المودودي","",""],
 qutb:["সাইয়্যিদ কুতুব","Sayyid Qutb","سيد قطب","",""],
 taqi_usmani:["তাকি উসমানি","Muhammad Taqi Usmani","محمد تقي العثماني","",""],
 /* আকিদা */
 ashari:["আবুল হাসান আশআরি","Abu al-Hasan al-Ash'ari","أبو الحسن الأشعري","",""],
 baqillani:["আবু বকর বাকিল্লানি","Al-Baqillani","الباقلاني","",""],
 taftazani:["সাদুদ্দিন তাফতাজানি","Sa'd al-Din al-Taftazani","التفتازاني","",""],
 jurjani:["সাইয়্যিদ শরিফ জুরজানি","Al-Sharif al-Jurjani","الشريف الجرجاني","",""],
 jubbai:["আবু আলী জুব্বাই","Abu Ali al-Jubba'i","أبو علي الجبائي","",""],
 abul_hudhayl:["আবুল হুযাইল আল-আল্লাফ","Abu al-Hudhayl al-Allaf","أبو الهذيل العلاف","",""],
 abd_jabbar:["কাজি আবদুল জব্বার","Qadi Abd al-Jabbar","القاضي عبد الجبار","",""],
 ibn_abd_wahhab:["মুহাম্মদ ইবনে আবদুল ওয়াহহাব","Muhammad ibn Abd al-Wahhab","محمد بن عبد الوهاب","",""],
 shah_waliullah:["শাহ ওয়ালিউল্লাহ দেহলভি","Shah Waliullah Dehlawi","شاه ولي الله الدهلوي","",""],
 /* দর্শন */
 kindi:["আল-কিন্দি","Al-Kindi","الكندي","",""],
 farabi:["আল-ফারাবি","Al-Farabi","الفارابي","",""],
 ibn_sina:["ইবনে সিনা","Ibn Sina (Avicenna)","ابن سينا","",""],
 ibn_bajja:["ইবনে বাজ্জা","Ibn Bajja (Avempace)","ابن باجة","",""],
 ibn_tufayl:["ইবনে তুফাইল","Ibn Tufayl","ابن طفيل","",""],
 tusi_nasir:["নাসিরুদ্দিন তুসি","Nasir al-Din al-Tusi","نصير الدين الطوسي","",""],
 ibn_khaldun:["ইবনে খালদুন","Ibn Khaldun","ابن خلدون","",""],
 mulla_sadra:["মুল্লা সাদরা","Mulla Sadra","ملا صدرا","",""],
 /* বিজ্ঞান */
 khwarizmi:["মুহাম্মদ ইবনে মুসা আল-খাওয়ারিজমি","Al-Khwarizmi","الخوارزمي","",""],
 biruni:["আল-বিরুনি","Al-Biruni","البيروني","",""],
 ibn_haytham:["ইবনে আল-হাইসাম","Ibn al-Haytham (Alhazen)","ابن الهيثم","",""],
 razi_phys:["আল-রাজি (চিকিৎসাবিদ)","Abu Bakr al-Razi (Rhazes)","أبو بكر الرازي","",""],
 jazari:["আল-জাজারি","Al-Jazari","الجزري","",""],
 ibn_nafis:["ইবনে নাফিস","Ibn al-Nafis","ابن النفيس","",""],
 ulugh_beg:["উলুঘ বেগ","Ulugh Beg","أولوغ بك","",""],
 jabir:["জাবির ইবনে হাইয়ান","Jabir ibn Hayyan","جابر بن حيان","",""],
 /* ইতিহাস */
 ibn_ishaq:["ইবনে ইসহাক","Ibn Ishaq","ابن إسحاق","",""],
 ibn_hisham:["ইবনে হিশাম","Ibn Hisham","ابن هشام","",""],
 waqidi:["আল-ওয়াকিদি","Al-Waqidi","الواقدي","",""],
 ibn_sad:["ইবনে সা'দ","Ibn Sa'd","ابن سعد","",""],
 masudi:["আল-মাসউদি","Al-Mas'udi","المسعودي","",""],
 baladhuri:["আল-বালাধুরি","Al-Baladhuri","البلاذري","",""],
 maqdisi:["আল-মাকদিসি","Al-Maqdisi","المقدسي","",""],
 miskawayh:["ইবনে মিসকাওয়াইহ","Miskawayh","مسكويه","",""],
 ibn_jawzi:["ইবনে জাওযি","Ibn al-Jawzi","ابن الجوزي","",""],
 ibn_athir:["ইবনে আসির","Ibn al-Athir","ابن الأثير","",""],
 ibn_khallikan:["ইবনে খাল্লিকান","Ibn Khallikan","ابن خلكان","",""],
 maqrizi:["আল-মাকরিজি","Al-Maqrizi","المقريزي","",""],
 sakhawi:["সাখাবি","Al-Sakhawi","السخاوي","",""],
 nadwi:["আবুল হাসান আলী নদভি","Abul Hasan Ali Nadwi","أبو الحسن الندوي","",""],
 hamidullah:["মুহাম্মদ হামিদুল্লাহ","Muhammad Hamidullah","محمد حميد الله","",""],
 /* তাসাউফ */
 ibrahim_adham:["ইব্রাহিম ইবনে আদহাম","Ibrahim ibn Adham","إبراهيم بن أدهم","",""],
 rabia:["রাবিয়া আল-আদাবিয়া","Rabi'a al-Adawiyya","رابعة العدوية","",""],
 junayd:["জুনাইদ বাগদাদি","Junayd al-Baghdadi","الجنيد البغدادي","",""],
 sari_saqati:["সারি আস-সাকাতি","Sari al-Saqati","السري السقطي","",""],
 abu_talib_makki:["আবু তালিব আল-মাক্কি","Abu Talib al-Makki","أبو طالب المكي","",""],
 sarraj:["আবু নাসর সাররাজ","Abu Nasr al-Sarraj","أبو نصر السراج","",""],
 sulami:["আবু আবদুর রহমান সুলামি","Abu Abd al-Rahman al-Sulami","السلمي","",""],
 abdul_qadir:["আবদুল কাদির জিলানি","Abd al-Qadir al-Jilani","عبد القادر الجيلاني","",""],
 ahmad_ghazali:["আহমদ আল-গাজালি","Ahmad al-Ghazali","أحمد الغزالي","",""],
 ibn_arabi:["ইবনে আরাবি","Ibn Arabi","ابن عربي","",""],
 rumi:["জালালুদ্দিন রুমি","Jalal al-Din Rumi","جلال الدين الرومي","",""],
 attar:["ফরিদুদ্দিন আত্তার","Farid al-Din Attar","فريد الدين العطار","",""],
 naqshband:["বাহাউদ্দিন নকশবন্দ","Baha al-Din Naqshband","بهاء الدين نقشبند","",""],
 thanvi:["মওলানা আশরাফ আলী থানভি","Ashraf Ali Thanvi","","",""],
 ahmad_raza:["আহমদ রেজা খান বেরেলভি","Ahmad Raza Khan Barelvi","","",""],
 /* উসমানি-মুঘল-পরবর্তী */
 ibn_kemal:["ইবনে কামাল পাশা","Ibn Kemal Pasha","","",""],
 abu_suud:["আবু সুদ এফেন্দি","Ebussuud Efendi","","",""],
 katib_celebi:["হাজি খলিফা (কাতিব চেলেবি)","Hajji Khalifa (Katip Çelebi)","حاجي خليفة","",""],
 sirhindi:["আহমদ সিরহিন্দি","Ahmad Sirhindi (Mujaddid Alf Thani)","أحمد السرهندي","",""],
 abdur_rahim_shah:["শাহ আবদুর রহিম","Shah Abd al-Rahim Dehlawi","","",""],
 abdul_aziz:["শাহ আবদুল আজিজ দেহলভি","Shah Abd al-Aziz Dehlawi","","",""],
 ahmad_shahid:["সাইয়্যিদ আহমদ শহিদ","Sayyid Ahmad Shahid","","",""],
 ismail_shahid:["শাহ ইসমাইল শহিদ","Shah Ismail Shahid","","",""],
 nanautawi:["মুহাম্মদ কাসিম নানুতভি","Muhammad Qasim Nanautawi","","",""],
 gangohi:["রশিদ আহমদ গাঙ্গুহি","Rashid Ahmad Gangohi","","",""],
 anwar_shah:["আনোয়ার শাহ কাশ্মিরি","Anwar Shah Kashmiri","","",""],
 shibli:["শিবলি নোমানি","Shibli Nomani","","",""],
 azad:["আবুল কালাম আজাদ","Abul Kalam Azad","","",""],
 /* আধুনিক */
 iqbal:["মুহাম্মদ ইকবাল","Muhammad Iqbal","محمد إقبال","",""],
 bennabi:["মালেক বেননবি","Malek Bennabi","مالك بن نبي","",""],
 fazlur_rahman:["ফজলুর রহমান মালিক","Fazlur Rahman Malik","","",""],
 faruqi:["ইসমাইল রাজি আল-ফারুকি","Ismail Raji al-Faruqi","","",""],
 nasr:["সাইয়্যিদ হোসেইন নাসর","Seyyed Hossein Nasr","","",""],
 asad:["মুহাম্মদ আসাদ","Muhammad Asad","","",""],
 tariq_ramadan:["তারিক রমাদান","Tariq Ramadan","","",""],
 wahiduddin:["ওয়াহিদুদ্দিন খান","Wahiduddin Khan","","",""],
 jasser_auda:["জাসের আওদা","Jasser Auda","","",""],
 omar_faruq:["ওমর ফারুক আবদুল্লাহ","Omar Faruq Abdullah","","",""],
 /* শিয়া */
 baqir:["ইমাম মুহাম্মদ আল-বাকির","Muhammad al-Baqir","محمد الباقر","",""],
 kulayni:["আল-কুলায়নি","Al-Kulayni","الكليني","",""],
 mufid:["শেখ আল-মুফিদ","Shaykh al-Mufid","الشيخ المفيد","",""],
 murtada:["শরিফ আল-মুরতাদা","Sharif al-Murtada","الشريف المرتضى","",""],
 tusi_shaykh:["শেখ আত-তুসি","Shaykh al-Tusi","الشيخ الطوسي","",""],
 hilli:["আল্লামা হিল্লি","Allama al-Hilli","العلامة الحلي","",""],
 majlisi:["মুহাম্মদ বাকির আল-মাজলিসি","Muhammad Baqir al-Majlisi","المجلسي","",""],
 mutahhari:["মুর্তজা মুতাহহারি","Murtada Mutahhari","","",""],
 tabatabai:["মুহাম্মদ হুসাইন তাবাতাবাই","Muhammad Husayn Tabataba'i","","",""],
 khomeini:["রুহুল্লাহ খোমেনি","Ruhollah Khomeini","","",""],
 sadr:["মুহাম্মদ বাকির আস-সদর","Muhammad Baqir al-Sadr","","",""],
 /* বাংলাদেশ */
 shah_jalal:["শাহ জালাল (রহ.)","Shah Jalal (Sylhet)","شاه جلال","",""],
 shah_paran:["শাহ পরান (রহ.)","Shah Paran","","",""],
 shariatullah:["হাজী শরীয়তুল্লাহ","Haji Shariatullah","","",""],
 dudu_miyan:["দুদু মিয়া","Dudu Miyan","","",""],
 karamat_ali:["মাওলানা কারামত আলী জৌনপুরী","Karamat Ali Jaunpuri","","",""],
 bhashani:["মাওলানা আবদুল হামিদ খান ভাসানী","Maulana Abdul Hamid Khan Bhashani","","",""],
 shamsul_haq:["শামসুল হক ফরিদপুরী","Shamsul Haq Faridpuri","","",""],
 hafezzi:["মুহাম্মদুল্লাহ হাফেজ্জী (হাফেজ্জী হুজুর)","Muhammadullah Hafezzi","","",""],
 abdur_rahim:["মুহাম্মদ আবদুর রহীম","Muhammad Abdur Rahim","","",""],
 azizul_haq:["আজিজুল হক","Azizul Haq","","",""],
 ahmad_shafi:["আহমদ শফী (শাহ আহমদ শফী)","Ahmad Shafi","","",""],
 abul_fatah:["আবুল ফাতাহ মুহাম্মদ ইয়াহইয়া","Abul Fatah Muhammad Yahya","","",""],
 abdul_hai_pahar:["আবদুল হাই পাহাড়পুরী","Abdul Hai Paharpuri","","",""]
};

const G={
 comp:["ibn_abbas","ibn_masud","ubayy","aisha","zayd","abu_hurayra","ali","umar2","said_musayyib","hasan_basri","ata","mujahid","ikrima","zuhri","jafar"],
 hanafi:["abu_hanifa","abu_yusuf","shaybani","zufar","tahawi","jassas","sarakhsi","kasani","marghinani","ibn_humam","ibn_abidin"],
 maliki:["malik","ibn_abd_barr","qadi_iyad","qarafi","ibn_rushd_jadd","ibn_rushd","qurtubi","shatibi","dardir"],
 shafii:["shafii","buwayti","muzani","juwayni","ghazali","rafii","nawawi","suyuti","haytami","ramli"],
 hanbali:["ahmad","khallal","ibn_qudama","ibn_taymiyya","ibn_qayyim","ibn_muflih","marai","buhuti"],
 hadith:["bukhari","muslim","abu_dawud","tirmidhi","nasai","ibn_majah","malik","ahmad","darimi","daraqutni","bayhaqi","ibn_abi_hatim","khatib","nawawi","ibn_hajar","dhahabi","suyuti"],
 tafsir:["ibn_abbas","mujahid","tabari","maturidi","jassas","wahidi","zamakhshari","razi","qurtubi","ibn_atiyya","baghawi","ibn_taymiyya","ibn_kathir","abu_hayyan","suyuti","alusi","ismail_haqqi","abduh","rashid_rida","mawdudi","qutb","taqi_usmani"],
 aqida:["ashari","maturidi","tahawi","baqillani","juwayni","ghazali","razi","taftazani","jurjani","jubbai","abul_hudhayl","abd_jabbar","ibn_taymiyya","ibn_qudama","ibn_abd_wahhab","shah_waliullah","abduh"],
 philosophy:["kindi","farabi","ibn_sina","ibn_rushd","ibn_bajja","ibn_tufayl","ghazali","tusi_nasir","razi","ibn_khaldun","mulla_sadra"],
 science:["khwarizmi","biruni","ibn_haytham","ibn_sina","razi_phys","jazari","ibn_nafis","tusi_nasir","ulugh_beg","jabir"],
 history:["ibn_ishaq","ibn_hisham","waqidi","ibn_sad","tabari","masudi","baladhuri","maqdisi","biruni","miskawayh","ibn_jawzi","ibn_athir","ibn_khallikan","ibn_khaldun","maqrizi","ibn_hajar","dhahabi","sakhawi","nadwi","hamidullah"],
 sufi:["hasan_basri","ibrahim_adham","rabia","junayd","sari_saqati","abu_talib_makki","sarraj","sulami","ghazali","abdul_qadir","ahmad_ghazali","ibn_arabi","rumi","attar","naqshband","thanvi","ahmad_raza","shah_waliullah"],
 ottoman:["ibn_kemal","abu_suud","katib_celebi","sirhindi","abdur_rahim_shah","shah_waliullah","abdul_aziz","ahmad_shahid","ismail_shahid","nanautawi","gangohi","thanvi","anwar_shah","shibli","azad","nadwi"],
 modern:["iqbal","abduh","rashid_rida","mawdudi","qutb","bennabi","fazlur_rahman","faruqi","nasr","asad","tariq_ramadan","wahiduddin","hamidullah","taqi_usmani","jasser_auda","omar_faruq"],
 shia:["baqir","jafar","kulayni","mufid","murtada","tusi_shaykh","tusi_nasir","hilli","majlisi","mutahhari","tabatabai","khomeini","sadr"],
 bd:["shah_jalal","shah_paran","shariatullah","dudu_miyan","karamat_ali","bhashani","shamsul_haq","hafezzi","abdur_rahim","azizul_haq","ahmad_shafi","abul_fatah","abdul_hai_pahar"]
};

/* আইডি -> বিভাগের তালিকা */
const CATS={};
Object.keys(G).forEach(g=>G[g].forEach(id=>{(CATS[id]=CATS[id]||[]).push(g)}));

/* সাহাবি ও নবী-পরিবার সংশ্লিষ্ট ব্যক্তিদের কোনো চেহারার ছবি ব্যবহার করা হবে না — শুধু প্রতীকি/ক্যালিগ্রাফি */
const NO_PORTRAIT=["ibn_abbas","ibn_masud","ubayy","aisha","zayd","abu_hurayra","ali"];

/* =========================================================
   ছবি: Wikimedia Commons থেকে যাচাই করে একটি একটি করে বসবে।
   ফরম্যাট: id:{file:"Commons ফাইলের নাম",credit:"আলোকচিত্রী/উৎস",license:"CC BY-SA 4.0",page:"Commons পেজের লিংক"}
   যতক্ষণ যাচাই না হচ্ছে, সাইটে প্রতীকি আইকন দেখাবে।
   ========================================================= */
const IMG={};

/* =========================================================
   জীবনী: যে স্কলারের জীবনী যুক্ত হয়েছে শুধু তার আইডি এখানে থাকবে।
   ========================================================= */
const BIO={
 ghazali:{
  years:["c. 1058","1111"],
  bn:{
   born:"তুস (খোরাসান, বর্তমান ইরান)",
   text:[
    "আবু হামিদ মুহাম্মদ ইবনে মুহাম্মদ আল-গাজালি তুস নগরে জন্মগ্রহণ করেন। প্রাথমিক শিক্ষার পর তিনি নিশাপুরে যান এবং ইমামুল হারামাইন জুয়াইনির কাছে ফিকহ, উসূল ও কালামশাস্ত্র অধ্যয়ন করেন।",
    "পরবর্তীতে সেলজুক উজির নিজামুল মুলকের দরবারে তাঁর খ্যাতি ছড়িয়ে পড়ে এবং ১০৯১ সালের দিকে তিনি বাগদাদের নিজামিয়া মাদ্রাসার অধ্যাপক নিযুক্ত হন। এই সময় তিনি ফিকহ ও কালামের পাশাপাশি গ্রিক দর্শনের গভীর অধ্যয়ন করেন।",
    "আনুমানিক ১০৯৫ সালে এক আধ্যাত্মিক সংকটের পর তিনি অধ্যাপনা ছেড়ে দীর্ঘ সফর ও নির্জনবাসে যান (দামেস্ক, জেরুজালেম, হিজাজ ইত্যাদি স্থানে)। এই সময়েই তাঁর প্রধান গ্রন্থ রচিত হয়। শেষ জীবনে তিনি তুসে ফিরে অধ্যাপনা ও ইবাদতে নিয়োজিত ছিলেন এবং সেখানেই ইন্তেকাল করেন।"
   ],
   works:["ইহইয়াউ উলূমিদ্দীন","তাহাফুতুল ফালাসিফা","আল-মুনকিয মিনাদ দালাল","আল-মুসতাসফা (উসূলুল ফিকহ)","মিশকাতুল আনওয়ার","মাকাসিদুল ফালাসিফা"]
  },
  en:{
   born:"Tus (Khurasan, present-day Iran)",
   text:[
    "Abu Hamid Muhammad ibn Muhammad al-Ghazali was born in Tus. After early studies he moved to Nishapur, where he studied jurisprudence, its principles and theology under al-Juwayni, known as Imam al-Haramayn.",
    "He later gained renown at the court of the Seljuk vizier Nizam al-Mulk and around 1091 was appointed professor at the Nizamiyya madrasa in Baghdad. During this period he made a deep study of Greek philosophy alongside law and theology.",
    "Around 1095, after a spiritual crisis, he left teaching for years of travel and retreat, including in Damascus, Jerusalem and the Hijaz. His major works date from this period. In his final years he returned to Tus to teach and devote himself to worship, and died there."
   ],
   works:["Ihya' 'Ulum al-Din","Tahafut al-Falasifa","Al-Munqidh min al-Dalal","Al-Mustasfa (legal theory)","Mishkat al-Anwar","Maqasid al-Falasifa"]
  },
  sources:["Ibn Khallikan — Wafayat al-A'yan","Al-Dhahabi — Siyar A'lam al-Nubala","Al-Subki — Tabaqat al-Shafi'iyya al-Kubra"]
 }
};
