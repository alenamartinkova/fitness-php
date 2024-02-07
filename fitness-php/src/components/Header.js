import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Header = ({ texts }) => {
    return (
        <div className={'block mt-[150px]'}>
            <div
                className={
                    'flex justify-end relative items-center md:flex-row flex-col'
                }
            >
                <div
                    className={
                        'flex flex-col gap-10 md:max-w-[600px] lg:max-w-[800px] md:absolute justify-center left-0'
                    }
                >
                    <h1
                        className={'italic font-extrabold text-5xl lg:text-7xl'}
                        dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_1'))}
                    />
                    <p className={'lg:max-w-[575px] md:max-w-[400px]'} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_2'))} />
                    <strong className={'mb-4'}>RESPECT club Ostrava</strong>
                </div>
                <div
                    className={
                        'rounded-[33px] bg-grey md:max-w-[500px]'
                    }
                >
                    <img src={'111.jpg'} alt={'klarka'} />
                </div>
            </div>
        </div>
    )
}

export default Header