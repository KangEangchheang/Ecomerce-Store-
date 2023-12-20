
function SectionTitle({text,isbg}) {
    return(
        <div className={`mb-4 text-center text-2xl tracking-[4.8px] py-2 font-semibold ${
            isbg? 'bg-secondary1 text-secondary rounded shadow-md':'text-secondary1'
        }`}>{text}</div>
    )
}

export default SectionTitle;