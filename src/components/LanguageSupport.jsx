import { useTranslation } from "react-i18next";


const languages = [
    {
        svg:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="w-20 h-20">
        <title>US</title>
        <path fill="#FFF" d="M0 0h513v342H0z"></path>
        <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
        <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
        <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
      </svg>,
        lang: "English (US &amp; UK)",
    },
    {
        svg:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className="w-20 h-20"><title>SA</title><path fill="#055e1c" d="M0 85.333h512v341.333H0z"></path><g fill="#FFF"><path d="M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"></path><path d="M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"></path><path d="M207.093 248.57h32.601v22.261h-32.601z"></path></g></svg>,
        lang: "Arabic",
    },
]

export default function LanguageSupport() {
    const { t } = useTranslation();

  return (
    <div className="section flex justify-center my-16" >
    <div className="content container mx-auto px-4 max-w-[1300px]">
        <div className="block-heading">
            <h1 className="text-start text-[32px] lg:text-[54px] font-medium mb-6">{t('language_support')}</h1>
            <p className='mb-[28px]'>{t('language_support_description')}</p>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-10 justify-center items-center">
            {languages.map((data, key) => (
                <div key={key} style={{ opacity: 1, transform: 'none' }}>
                    <div className="language_box flex shadow-on-hover p-3 rounded-3xl">
                        <div className="w-1/2 flex justify-center items-center">
                            {data.svg}
                        </div>
                        <div className="w-1/2 flex justify-start items-center">{data.lang}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}
