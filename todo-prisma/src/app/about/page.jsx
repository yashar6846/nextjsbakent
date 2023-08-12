import Link from "next/link";

export default function AboutPage() {
    return (
      <div>
        <h1 className="text-4xl">Home Page</h1>
        <p className="py-10 border border-4 py-4 mx-2">
          This is our about Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          orem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <Link href={'/'}>Home</Link>
      </div>
    )
  }
  