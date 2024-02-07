import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Divider = ({ texts }) => {
    return (
        <div
            className={
                'bg-pink rounded-[33px] w-full px-6 py-8 uppercase italic text-center font-bold text-lg'
            }
            dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_25'))}
        />
    )
}

export default Divider
