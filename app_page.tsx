import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Building2, Thermometer, Hospital, Factory, Shield, ClockIcon as Clock24, ThumbsUp, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="relative bg-primary text-primary-foreground">
        <Image
          src="/placeholder.svg?height=200&width=1600"
          alt="Industrial technology background"
          width={1600}
          height={200}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 bg-primary/80">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-2xl font-bold">HYRIATECH</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#why-choose-us" className="hover:underline">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-20 overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Industrial equipment"
            width={1600}
            height={600}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-white">24/7 Critical Equipment Support</h1>
            <p className="text-xl mb-8 text-gray-200">Expert technicians ready to assist you anytime, day or night.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Factory className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Factories</h3>
                  <p className="text-center">Keeping production lines running smoothly 24/7.</p>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Factory equipment"
                    width={300}
                    height={200}
                    className="mt-4 rounded-md"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Thermometer className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cold Storage</h3>
                  <p className="text-center">Maintaining optimal temperatures for your valuable inventory.</p>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Cold storage facility"
                    width={300}
                    height={200}
                    className="mt-4 rounded-md"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Hospital className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hospitals</h3>
                  <p className="text-center">Ensuring critical medical equipment is always operational.</p>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Hospital equipment"
                    width={300}
                    height={200}
                    className="mt-4 rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose HYRIATECH</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Clock24 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-center">Round-the-clock support for your peace of mind.</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-center">Quick dispatch of technicians to minimize downtime.</p>
              </div>
              <div className="flex flex-col items-center">
                <ThumbsUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-center">Highly skilled professionals for all your equipment needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="John Doe"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">Factory Manager</p>
                    </div>
                  </div>
                  <p className="italic mb-4">"HYRIATECH's rapid response saved our production line during a critical malfunction. Their technicians are true lifesavers!"</p>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-muted-foreground">Verified Client</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Jane Smith"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">Logistics Director</p>
                    </div>
                  </div>
                  <p className="italic mb-4">"We rely on HYRIATECH for our cold storage facility maintenance. Their 24/7 support gives us peace of mind."</p>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-muted-foreground">Verified Client</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">HYRIATECH - Your Trusted Partner in 24/7 Equipment Support</p>
          <p className="mb-4">Contact us: info@hyriatech.com | (555) 123-4567</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Button>
        </div>
      </footer>
    </div>
  )
}

