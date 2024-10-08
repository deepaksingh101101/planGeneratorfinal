import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true, // Enable debug mode for development
    fallbackLng: 'en', // Default language if translation is not available
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
    // Language resources
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
          "language_support_description": "At the end of the plan creation process you can choose to generate a plan in multiple languages including..",
          "step1": "Step 1",
          "step2": "Step 2",
          "step3": "Step 3",
          "step4": "Step 4",
          "enter_business_information": "Enter Business Information",
          "business_info_description": "Only basic business information is required e.g. business name, number of employees, and a little financial data.",
          "edit_and_save": "Edit and Save",
          "edit_plan_description": "Once your AI plan is generated, you can easily edit the plan with our 'Talk To Plan' feature. You can input what you want changed and AI will take care of the rest.",
          "export": "Export",
          "export_description": "You can export the final business plan in PDF or Word format for your records or presentations.",
          "working_process": "Working Process",
          "how_it_works": "How it works?",
          "business_plan_description": "Our AI business plan generator guides you through a few questions. Once done, a business plan example will be generated.",
          "explore_now": "Explore Now",
          "signUp": "Sign Up",
          "name": "Name",
          "email": "Email",
          "password": "Password",
          "sendOtp": "Send Otp",
          "otp": "Otp",
          "verify": "Verify",
          "already": "Already have an account?",
          "signin": "Sign In",
          "aggre": "I agree to abide by the site's",
          "terms": "Terms of Service",
          "and": "and",
          "privacy": "Privacy Policy",
          "business": "Business Plan Generator",
          "simplify": " Simplify your business planning process with our intuitive generator. Whether you're a startup or an established business, create comprehensive plans with ease.",
          "join": " Join us today and bring your business ideas to life!",


          "allFields": "All Fields are required",
          "failedtosend": "Failed to Send Otp. Please try again.",
          "otpSend": "Otp Sended to your mail.",
          "incorrectOtp": "Incorrect Otp",


          "failedSignin": "Failed to sign in. Please check your credentials and try again.",
          "wrongEmailorpassowrd": "Wrong Email or Password",
          "dont": " Don’t have an account?",
          "createOne": "Create One",


          // ---Homepage -> services ----

          "Tasweeqy_AI_title": "Tasweeqy AI made for Businessman",
          "Tasweeqy_AI_subtitle":"Tasweeqy unlocks the potential of AI-powered applications",
          "Tasweeqy_AI_tool":"Tasweeqy’s AI-powered tools provide:",
          "Tasweeqy_AI_tool_text":"Tasweegv unlocks the potential of AI-powered applications",
          "Service1":"Unmatched Intelligence",
          "Service2":"Comprehensive Insights",
          "Service3":"Time Efficiency",

          // ---Homepage -> Footer ----

          "Footer_heading":"Our AI-generated business plan won't disappoint",
          "Footer_subheading":"create a business plan in just 15 minutes with our AI business plan generator",
          "button1":"Make Business Plan",
          "button2":"Login if you've already made a plan",
          "copyright":"Tasweegv.ai, 2024",
          "privacy_policy":"Privacy Policy",
          "refund":"Refund Policy",






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
          "language_support_description": "في نهاية عملية إنشاء الخطة، يمكنك اختيار إنشاء خطة بعدة لغات بما في ذلك..",
          "step1": "الخطوة 1",
          "step2": "الخطوة 2",
          "step3": "الخطوة 3",
          "step4": "الخطوة 4",
          "enter_business_information": "أدخل معلومات العمل",
          "business_info_description": "تطلب فقط معلومات أساسية عن العمل مثل اسم العمل، عدد الموظفين، وبيانات مالية بسيطة.",
          "edit_and_save": "تحرير وحفظ",
          "edit_plan_description": "بمجرد إنشاء خطتك بالذكاء الاصطناعي، يمكنك بسهولة تحرير الخطة باستخدام ميزة 'تحدث إلى الخطة'. يمكنك إدخال ما تريد تغييره وسيقوم الذكاء الاصطناعي بالباقي.",
          "export": "تصدير",
          "export_description": "يمكنك تصدير خطة العمل النهائية بتنسيق PDF أو Word لسجلاتك أو عروضك التقديمية.",
          "working_process": "عملية العمل",
          "how_it_works": "كيف يعمل؟",
          "business_plan_description": "يرشدك مولد خطة العمل بالذكاء الاصطناعي من خلال بعض الأسئلة. بمجرد الانتهاء، سيتم إنشاء مثال لخطة العمل.",
          "explore_now": "استكشف الآن",
          "signUp": "اشترك",
          "name": "اسم",
          "email": "البريد الإلكتروني",
          "password": "كلمة المرور",
          "sendOtp": "إرسال رمز التحقق",
          "otp": "رمز التحقق",
          "verify": "تحقق",
          "already": "لديك حساب بالفعل؟",
          "signin": "تسجيل الدخول",
          "aggre": "أوافق على الالتزام بـ",
          "terms": "شروط الخدمة",
          "and": "و",
          "privacy": "سياسة الخصوصية",
          "business": "مولد خطة العمل",
          "simplify": "بسط عملية تخطيط عملك مع مولدنا السهل. سواء كنت شركة ناشئة أو مؤسسة قائمة، قم بإنشاء خطط شاملة بسهولة.",
          "join": "انضم إلينا اليوم وحول أفكار عملك إلى واقع!",
          "allFields": "جميع الحقول مطلوبة",
          "failedtosend": "فشل في إرسال رمز التحقق. يرجى المحاولة مرة أخرى.",
          "otpSend": "تم إرسال رمز التحقق إلى بريدك الإلكتروني.",
          "incorrectOtp": "رمز التحقق غير صحيح",
          "failedSignin": "فشل في تسجيل الدخول. يرجى التحقق من بياناتك والمحاولة مرة أخرى.",
          "wrongEmailorpassowrd": "البريد الإلكتروني أو كلمة المرور غير صحيحة",
          "dont": "ليس لديك حساب؟",
          "createOne": "أنشئ حسابًا",

          // ---Homepage -> services ----
          
          "Tasweeqy_AI_title": "تسويقي AI مصمم لرجال الأعمال",
          "Tasweeqy_AI_subtitle": "تسويقي يفتح إمكانيات التطبيقات المدعومة بالذكاء الاصطناعي",
          "Tasweeqy_AI_tool": "الأدوات المدعومة بالذكاء الاصطناعي في تسويقي توفر:",
          "Tasweeqy_AI_tool_text": "تسويقي يفتح إمكانيات التطبيقات المدعومة بالذكاء الاصطناعي",
          "Service1": "ذكاء لا مثيل له",
          "Service2": "رؤى شاملة",
          "Service3": "كفاءة الوقت",

          // ---Homepage -> Footer ----
          
          "Footer_heading": "خطة العمل المدعومة بالذكاء الاصطناعي لن تخيب ظنك",
          "Footer_subheading": "قم بإنشاء خطة عمل في 15 دقيقة فقط باستخدام مولد خطة العمل بالذكاء الاصطناعي",
          "button1": "قم بإنشاء خطة عمل",
          "button2": "تسجيل الدخول إذا كنت قد أنشأت خطة بالفعل",
          "copyright": "تسويقي.ai، 2024",
          "privacy_policy": "سياسة الخصوصية",
          "refund": "سياسة الاسترجاع"
          
          
          
          
          


        }
      },
    }
  });

export default i18n;
