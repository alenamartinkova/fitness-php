import { SpecialBlock } from './special/SpecialBlock'
import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Special = ({ texts }) => {
    return (
        <div className={'block section'} id={'special-section'}>
            <div
                id={'sluzby'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <h2
                className={
                    'uppercase font-extrabold text-4xl text-pink italic max-w-2xl mb-4'
                }
                dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_3'))}
            />
            <p className={'text-black mb-6'} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_4'))} />

            <div
                className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                }
            >
                <SpecialBlock
                    svg={'hand.svg'}
                    text={filterArrayByKey(texts, 'text_5')}
                />
                <SpecialBlock
                    svg={'heart.svg'}
                    text={filterArrayByKey(texts, 'text_6')}
                />
                <SpecialBlock
                    svg={'muscle.svg'}
                    text={filterArrayByKey(texts, 'text_7')}
                />

                <SpecialBlock
                    svg={'yoga.svg'}
                    text={filterArrayByKey(texts, 'text_8')}
                />
                <SpecialBlock
                    svg={'food.svg'}
                    text={filterArrayByKey(texts, 'text_9')}
                />
            </div>
        </div>
    )
}

export default Special