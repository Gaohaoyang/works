import Navbar from '@/components/my-ui/navbar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
