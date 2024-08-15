import { useTranslation } from "react-i18next";
import { AP_logo, Yahoo_logo, Market_logo, Bloomberg_logo, Medium_logo, Seeking_logo, Finanzen_logo, Benzinga_logo, Web10_logo } from "../assets";
const Companies = () => {

    const { t } = useTranslation();


    const companies_logo = [
        {
            url: "https://apnews.com/press-release/ein-presswire-newsmatics/artificial-intelligence-f08eb45f39d6c0bcbbc09119379744c2",
            img_src: AP_logo,
            width: 80,
        },
        {
            url: "https://finance.yahoo.com/news/15minuteplan-ai-introduces-novel-ai-211500897.html",
            img_src: Yahoo_logo,
            width: 150,
        },
        {
            url: "https://www.marketwatch.com/press-release/15minuteplan-ai-introduces-novel-ai-powered-business-plan-creation-tool-e28abe8d?mod=search_headline",
            img_src: Market_logo,
            width: 200,
        },
        {
            url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal",
            img_src: Bloomberg_logo,
            width: 150,
        },
        {
            url: "https://medium.com/aasaan-blog/10-business-plan-ai-generators-01556e856e52",
            img_src: Medium_logo,
            width: 200,
        },
        {
            url: "https://seekingalpha.com/pr/19596934-15minuteplan-ai-introduces-novel-ai-powered-business-plan-creation-tool",
            img_src: Seeking_logo,
            width: 200,
        },
        {
            url: "https://www.finanzen.net/nachricht/aktien/15minuteplan-ai-introduces-novel-ai-powered-business-plan-creation-tool-13192156",
            img_src: Finanzen_logo,
            width: 200,
        },
        {
            url: "https://www.benzinga.com/pressreleases/24/01/n36702136/15minuteplan-ai-introduces-novel-ai-powered-business-plan-creation-tool",
            img_src: Benzinga_logo,
            width: 200,
        },
        {
            url:"https://10web.io/blog/ai-business-plan-generators/" ,
            img_src: Web10_logo,
            width: 200,
        }

    ]
    return (
        <div className="section flex justify-center" >
            <div className="content container mx-auto px-4 max-w-[1300px]">
                <div className="block-heading">
                    <h1 className="text-start text-[32px] lg:text-[54px] font-medium mb-6">{t('mentioned_in')}</h1>
                </div>
                <br />
                <div className="flex flex-wrap gap-10 justify-center items-center lg:mt-5">
                    {companies_logo.map((data, key) => (
                        <a
                            key={key}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={data.url}
                        >
                            <img
                                alt="AP_logo"
                                src={data.img_src}
                                width={data.width}
                                height="100"
                                decoding="async"
                                loading="lazy"
                                style={{ color: 'transparent',filter:"invert(1)" }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies