import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Education = ({ texts }) => {
    return (
        <div className={'block section'} id={'education-section'}>
            <div
                id={'vzdelani'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex md:order-1 order-2 justify-center'}>
                    <div
                        className={
                            'max-w-[210px] sm:max-w-none w-full h-[235px] sm:w-[250px] sm:h-[275px] md:w-[329px] md:h-[368px] bg-cover bg-center bg-no-repeat rounded-[33px] z-10'
                        }
                        style={{
                            backgroundImage: "url('../333.jpg')"
                        }}
                    />
                    <div
                        className={
                            'max-w-[210px] sm:max-w-none w-full h-[235px] sm:w-[250px] sm:h-[275px] md:w-[329px] md:h-[368px] bg-cover bg-left bg-no-repeat rounded-[33px] mt-[145px] ml-[-50px]'
                        }
                        style={{
                            backgroundImage: "url('../222.jpg')"
                        }}
                    />
                </div>
                <div className={'flex flex-col gap-6 md:order-2 order-1'}>
                    <h2
                        className={
                            'font-extrabold uppercase text-pink text-3xl italic'
                        }
                        dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_31'))}
                    />
                    <ul className={'list-disc ml-6'}>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_32'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_33'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_34'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_35'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_36'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_37'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_38'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_39'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_40'))}/>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_41'))}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education