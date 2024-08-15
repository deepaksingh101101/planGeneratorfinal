import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          "world_best": "World's Best AI Business Plan",
          "generator": "Generator",
          "description": "Fill out simple forms, select language, and get a business plan in under 15 minutes. Try It Out!",
          "make_plan": "Make Business Plan",
          "login": "Login if you've already made a plan",
          "change_language": "Change Language",
          "plan_generation": "Plan generation",
          "loading": "Loading",
          "generateBusinessPlan": "Generate Your Business Plan In Minutes",
          "notificationDescription": "Our AI Business Plan Generator can create a comprehensive business plan for you in under 15 minutes. Fill out simple forms, select your preferred language, and get started on your path to success today!",
          "tryItNow": "Try It Now",
          "timeAgo": "1m ago",
          "helping_people": "Helping people in creating Business Plans",
          "who_is_this_for": "Who is this for?",
          "entrepreneurs_title": "Entrepreneurs looking for investor funding",
          "entrepreneurs_description": "Our AI business plan generator helps entrepreneurs in creating professional business plans designed to impress potential investors and secure funding.",
          "business_owners_title": "Business owners and entrepreneurs looking for a bank loan",
          "business_owners_description": "Our AI business plan generator is SBA-approved and follows most banks' business plan templates.",
          "anyone_title": "For anyone looking to make a business plan",
          "anyone_description": "Whether you want an AI-generated business plan for self-learning, as a reference for a project, or for submission to a non-financial institution, we've got you covered.",
          "kanye_west_name": "Kanye West",
          "tim_cook_name": "Tim Cook",
          "parag_agrawal_name": "Parag Agrawal",
          "satya_nadella_name": "Satya Nadella",
          "dan_schulman_name": "Dan Schulman",
          "rapper_entrepreneur_title": "Rapper and Entrepreneur",
          "rapper_entrepreneur_text": "I love using this product! It's revolutionized my workflow.",
          "ceo_apple_title": "CEO of Apple",
          "ceo_apple_text": "This platform has truly changed the way we do business.",
          "ceo_twitter_title": "CEO of Twitter",
          "ceo_twitter_text": "An indispensable tool for our social media strategy.",
          "ceo_microsoft_title": "CEO of Microsoft",
          "ceo_microsoft_text": "Our productivity has soared since we started using this service.",
          "ceo_paypal_title": "CEO of PayPal",
          "ceo_paypal_text": "This has transformed our payment processing.",
          "what_customers_say": "What customers say about us",
          "its_not_just_us": "It's not just us.",
          "mentioned_in": "Mentioned in...",
          "language_support": "Language Support",
          "language_support_description": "At the end of the plan creation process you can choose to generate a plan in multiple languages including.."
        }
      },
      ar: {
        translation: {
          "world_best": "أفضل خطة عمل AI في العالم",
          "generator": "مولد",
          "description": "املأ النماذج البسيطة، اختر اللغة، واحصل على خطة عمل في أقل من 15 دقيقة. جربه الآن!",
          "make_plan": "إنشاء خطة عمل",
          "login": "تسجيل الدخول إذا كنت قد أنشأت خطة بالفعل",
          "change_language": "تغيير اللغة",
          "plan_generation": "توليد الخطة",
          "loading": "جار التحميل",
          "generateBusinessPlan": "أنشئ خطة عملك في دقائق",
          "notificationDescription": "يمكن أن يقوم مولد خطة عمل AI الخاص بنا بإنشاء خطة عمل شاملة لك في أقل من 15 دقيقة. املأ النماذج البسيطة، اختر اللغة المفضلة لديك، وابدأ في طريقك إلى النجاح اليوم!",
          "tryItNow": "جربه الآن",
          "timeAgo": "قبل دقيقة",
          "helping_people": "مساعدة الناس في إنشاء خطط العمل",
          "who_is_this_for": "لمن هذا؟",
          "entrepreneurs_title": "رواد الأعمال الذين يبحثون عن تمويل المستثمرين",
          "entrepreneurs_description": "يساعد مولد خطط العمل بالذكاء الاصطناعي رواد الأعمال في إنشاء خطط أعمال احترافية تهدف إلى إقناع المستثمرين المحتملين وتأمين التمويل.",
          "business_owners_title": "أصحاب الأعمال ورواد الأعمال الذين يبحثون عن قرض بنكي",
          "business_owners_description": "مولد خطط الأعمال بالذكاء الاصطناعي معتمد من SBA ويتبع معظم قوالب خطط الأعمال للبنوك.",
          "anyone_title": "لأي شخص يبحث عن إنشاء خطة عمل",
          "anyone_description": "سواء كنت تريد خطة عمل تم إنشاؤها بالذكاء الاصطناعي للتعلم الذاتي، كمرجع لمشروع، أو لتقديمها إلى مؤسسة غير مالية، فنحن هنا لمساعدتك.",
          "kanye_west_name": "كاني ويست",
          "tim_cook_name": "تيم كوك",
          "parag_agrawal_name": "باراج أغراوال",
          "satya_nadella_name": "ساتيا نادالا",
          "dan_schulman_name": "دان شولمان",
          "rapper_entrepreneur_title": "مغني ورائد أعمال",
          "rapper_entrepreneur_text": "أحب استخدام هذا المنتج! لقد غير سير عملي بشكل جذري.",
          "ceo_apple_title": "الرئيس التنفيذي لشركة آبل",
          "ceo_apple_text": "لقد غيرت هذه المنصة تمامًا الطريقة التي ندير بها أعمالنا.",
          "ceo_twitter_title": "الرئيس التنفيذي لتويتر",
          "ceo_twitter_text": "أداة لا غنى عنها لاستراتيجيتنا في وسائل التواصل الاجتماعي.",
          "ceo_microsoft_title": "الرئيس التنفيذي لمايكروسوفت",
          "ceo_microsoft_text": "قدرتنا على الإنتاجية قد ارتفعت بشكل ملحوظ منذ أن بدأنا في استخدام هذه الخدمة.",
          "ceo_paypal_title": "الرئيس التنفيذي لبايبال",
          "ceo_paypal_text": "لقد غيرت هذه الخدمة معالجة المدفوعات لدينا.",
          "what_customers_say": "ماذا يقول العملاء عنا",
          "its_not_just_us": "ليس نحن فقط.",
          "mentioned_in": "مذكور في...",
          "language_support": "دعم اللغات",
          "language_support_description": "في نهاية عملية إنشاء الخطة، يمكنك اختيار إنشاء خطة بعدة لغات بما في ذلك.."
        }
      },
    }
  });

export default i18n;
