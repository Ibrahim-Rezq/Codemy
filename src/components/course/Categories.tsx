import { Link } from 'react-router-dom'

const Categories = ({ categories }: { categories: string[] | undefined }) => (
    <div className="text-sm breadcrumbs">
        <ul className="text-purple-400 font-semibold">
            {categories?.map((category, index) => (
                <li key={index}>
                    <Link to="/">{category}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Categories
