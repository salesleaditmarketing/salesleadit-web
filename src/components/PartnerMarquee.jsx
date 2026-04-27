import { clients } from '../data/clients'

export default function PartnerMarquee() {
  const marqueeItems = [...clients, ...clients, ...clients]

  return (
    <section className="py-20 bg-sli-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="font-mono text-sli-muted text-sm uppercase tracking-widest">
          Trusted by families & small businesses across Canada
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="marquee-r flex">
          {marqueeItems.map((client, i) => (
            <div key={i} className="flex-shrink-0 mx-3 rounded-[1.25rem] overflow-hidden relative w-52 h-36 ring-1 ring-sli-border">
              <img 
                src={client.img} 
                crossOrigin="anonymous" 
                alt={client.name}
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="font-mono text-white text-[10px]">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="marquee-l flex">
          {marqueeItems.map((client, i) => (
            <div key={i} className="flex-shrink-0 mx-3 rounded-[1.25rem] overflow-hidden relative w-52 h-36 ring-1 ring-sli-border">
              <img 
                src={client.img} 
                crossOrigin="anonymous" 
                alt={client.name}
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="font-mono text-white text-[10px]">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
