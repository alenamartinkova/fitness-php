import {createMarkup, filterArrayByKey} from "../lib/helper";

export const AboutMe = ({ texts }) => {
    return (
        <div className={'block section'} id={'about-me-section'}>
            <div
                id={'o_me'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-4'}>
                    <h2
                        className={
                            'font-extrabold uppercase text-pink text-3xl italic'
                        }
                        dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_26'))}
                    />
                    <strong dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_27'))} />
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_28'))} />
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_29'))} />
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_30'))} />
                </div>

                <div
                    className={
                        'rounded-[33px] sm:h-[659px] h-[420px] bg-cover bg-center bg-no-repeat'
                    }
                    style={{
                        backgroundImage: "url('../about-me.jpeg')"
                    }}
                ></div>
            </div>
        </div>
    )
}

export default AboutMe