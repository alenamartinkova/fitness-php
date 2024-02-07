import { PricingBlock } from './pricing/PricingBlock'
import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Pricing = ({ texts }) => {
    return (
        <div className={'block section'} id={'pricing-section'}>
            <div
                id={'cenik'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <h2
                className={
                    'font-extrabold uppercase text-pink text-3xl italic mb-6'
                }
                dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_50'))}
            />
            <div className={'grid md:grid-cols-2 gap-6 mb-6'}>
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_92')}
                    text3={filterArrayByKey(texts, 'text_91')}
                    text2={filterArrayByKey(texts, 'text_90')}
                    text={filterArrayByKey(texts, 'text_52')}
                    title={filterArrayByKey(texts, 'text_53')}
                    price={filterArrayByKey(texts, 'text_54')}
                    accordion={filterArrayByKey(texts, 'text_55')}
                />
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_89')}
                    text3={filterArrayByKey(texts, 'text_88')}
                    text2={filterArrayByKey(texts, 'text_87')}
                    text={filterArrayByKey(texts, 'text_56')}
                    title={filterArrayByKey(texts, 'text_57')}
                    price={filterArrayByKey(texts, 'text_58')}
                    accordion={filterArrayByKey(texts, 'text_59')}
                />
            </div>
            <div className={'grid md:grid-cols-2 gap-6'}>
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_86')}
                    text3={filterArrayByKey(texts, 'text_85')}
                    text2={filterArrayByKey(texts, 'text_84')}
                    text={filterArrayByKey(texts, 'text_61')}
                    title={filterArrayByKey(texts, 'text_62')}
                    price={filterArrayByKey(texts, 'text_63')}
                    accordion={filterArrayByKey(texts, 'text_64')}
                    bgClass={'bg-grey'}
                />
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_83')}
                    text3={filterArrayByKey(texts, 'text_82')}
                    text2={filterArrayByKey(texts, 'text_81')}
                    text={filterArrayByKey(texts, 'text_65')}
                    title={filterArrayByKey(texts, 'text_66')}
                    price={filterArrayByKey(texts, 'text_67')}
                    accordion={filterArrayByKey(texts, 'text_68')}
                    bgClass={'bg-grey'}
                />
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_80')}
                    text3={filterArrayByKey(texts, 'text_79')}
                    text2={filterArrayByKey(texts, 'text_78')}
                    text={filterArrayByKey(texts, 'text_69')}
                    title={filterArrayByKey(texts, 'text_70')}
                    price={filterArrayByKey(texts, 'text_71')}
                    bgClass={'bg-grey'}
                />
                <PricingBlock
                    text4={filterArrayByKey(texts, 'text_77')}
                    text3={filterArrayByKey(texts, 'text_76')}
                    text2={filterArrayByKey(texts, 'text_75')}
                    text={filterArrayByKey(texts, 'text_73')}
                    title={filterArrayByKey(texts, 'text_72')}
                    price={filterArrayByKey(texts, 'text_74')}
                    bgClass={'bg-grey'}
                />
            </div>
        </div>
    )
}

export default Pricing
