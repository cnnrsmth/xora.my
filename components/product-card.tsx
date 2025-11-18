import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface ProductCardProps {
  name: string
  description: string
  platform: string
  logoUrl: string
  imageUrl: string
  status?: 'in development' | 'closed' | 'active'
  link?: string
}

export function ProductCard({
  name,
  description,
  platform,
  logoUrl,
  imageUrl,
  status,
  link,
}: ProductCardProps) {
  const statusColors = {
    'in development': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    'closed': 'bg-red-500/10 text-red-600 border-red-500/20',
    'active': 'bg-green-500/10 text-green-600 border-green-500/20',
  }

  const cardContent = (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
      <div className="aspect-[3/4] relative bg-gradient-to-br from-accent to-secondary overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-32 h-16">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt={`${name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="text-xl font-medium text-card-foreground mb-2 text-center">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 text-center leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
            {platform}
          </span>
          {status && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}>
              {status}
            </span>
          )}
        </div>
      </div>
    </Card>
  )

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
}
