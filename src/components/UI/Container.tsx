const Container = (props: React.HTMLAttributes<HTMLElement> & { wide?: true }) => {
    if (props.wide)
        return <div className="containe w-full h-full m-auto flex flex-col justify-start items-center" {...props} />
    return <div className="container  w-full h-full m-auto flex flex-col justify-start items-center px-4" {...props} />
}

export default Container
