import { InstagramEmbed } from './components/InstagramEmbed'
import { data } from './data'

export default function InstagramPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Instagram 展示墙</h1>
      </div>
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-6 w-full break-inside-avoid rounded-lg bg-gray-50 shadow-sm"
          >
            <InstagramEmbed url={item.link} />
          </div>
        ))}
      </div>
    </div>
  )
}
