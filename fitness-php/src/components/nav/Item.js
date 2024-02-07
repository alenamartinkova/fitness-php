export const Item = ({ setIsOpen, name, anchor, textClass }) => {
    return (
        <a
            href={anchor}
            className={`uppercase font-bold italic ${textClass}`}
            onClick={() => setIsOpen(false)}
        >
            {name}
        </a>
    )
}
