import Navbar from '@/components/my-ui/navbar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: 'About',
    //   link: '/about',
    //   // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    // {
    //   name: 'Contact',
    //   link: '/contact',
    //   // icon: (
    //   //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   // ),
    // },
  ]
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
