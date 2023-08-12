import Link from "next/link"


export default function Header() {

    const navItem =[
        {
            label: 'Home',
            href:'/'
        },
        {
            label: 'About',
            href:'/about'  
        },
        {
            label: 'FAQ',
            href:'/about/faq'  
        }
    ]
  return (
    <div>
        <ul className="flex gap-5 py-10">
            {navItem.map((link, index)=>(
                <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
