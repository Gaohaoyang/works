import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'MagneticCards',
  description: 'MagneticCards demo',
}
const MagneticCards = () => {
  return (
    <div>
      MagneticCards
      <Button>Button</Button>
    </div>
  )
}

export default MagneticCards
