import type { Metadata } from 'next'
import cardsData from './cardsData'

export const metadata: Metadata = {
  title: 'MagneticCards',
  description: 'MagneticCards demo',
}

const MagneticCards = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-10"></div>
      <div className="overflow-x-auto">
        <div className="flex flex-col gap-4">
          {cardsData.map((row) => (
            <div className="flex gap-4">
              {row.map((card) => (
                <div
                  key={card.id}
                  className="flex h-60 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 shadow dark:bg-slate-500"
                >
                  {card.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MagneticCards
