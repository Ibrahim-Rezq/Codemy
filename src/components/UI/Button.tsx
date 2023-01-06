import { ReactNode } from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    wide?: string
}

const Button = (props: ButtonProps) => {
    if (props.wide) return <button className="btn btn-wide btn-primary rounded-none" {...props} />
    return <button className="btn btn-primary rounded-none" {...props} />
}
export default Button
