import { ProductCard } from '@/components/product-card'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header>
        <div className="container mx-auto px-6 py-6 md:py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
              holdings
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 md:py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <ProductCard
            name="thickr"
            description="ios mobile application"
            platform="ios"
            logoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E8C1XDt73oZeGA7iaJOsBBCiYI86P2.png"
            imageUrl="/modern-ios-app-interface-mockup-on-iphone.jpg"
            status="in development"
          />
          
          <ProductCard
            name="knowledge vault"
            description="web application"
            platform="web"
            logoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NztIfJ8mBzeqSV5qTXl5VJ5wPvw5bm.png"
            imageUrl="/pastel-colored-illustrated-books-and-knowledge-lib.jpg"
            status="closed"
            link="https://www.tryknowledgevault.lol"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 md:mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} xora limited. all rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>enquiries:</span>
              <a 
                href="mailto:support@xora.my" 
                className="text-foreground hover:underline"
              >
                support@xora.my
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
