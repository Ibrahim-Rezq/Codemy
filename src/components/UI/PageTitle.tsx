const PageTitle = ({ title }: { title: string }) => {
    return (
        <div className="header w-full font-bold">
            <div className="title text-4xl py-6">{title}</div>
        </div>
    )
}

export default PageTitle
