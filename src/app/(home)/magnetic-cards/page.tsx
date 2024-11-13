import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MagneticCards',
  description: 'MagneticCards demo',
}
const MagneticCards = () => {
  return (
    <div className="flex justify-center">
      <div className="container p-4">MagneticCards</div>
    </div>
  )
}

export default MagneticCards
