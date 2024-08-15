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
          "plan_generation": "Plan generation"
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
          "plan_generation": "توليد الخطة"
        }
      },
    }
  });

export default i18n;
