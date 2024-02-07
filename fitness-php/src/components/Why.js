import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Why = ({ texts }) => {
    return (
        <div className={'block'}>
            <h3
                className={
                    'text-pink uppercase text-2xl font-extrabold italic mb-6'
                }
                dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_10'))}
            />
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-4'}>
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_11'))}></p>
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_12'))}></p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_13'))}></p>
                    <ul className={'list-disc ml-6'}>
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_14'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_15'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_16'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_17'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_18'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_19'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_20'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_21'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_22'))} />
                        <li dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_23'))} />
                    </ul>
                    <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_24'))}></p>
                </div>
            </div>
        </div>
    )
}

export default Why