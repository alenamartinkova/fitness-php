import { createMarkup } from "../../lib/helper";

export const SpecialBlock = ({ svg, text }) => {
    return (
        <div
            className={
                'bg-grey text-center rounded-[33px] p-10 flex flex-col gap-3 items-center justify-center'
            }
        >
            <img className={'max-w-[111px]'} src={svg} alt="description" />
            <p className={'uppercase font-bold text-lg italic'} dangerouslySetInnerHTML={createMarkup(text)} />
        </div>
    )
}
