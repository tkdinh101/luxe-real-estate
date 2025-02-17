import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="relative h-[70vh] bg-cover bg-center bg-[url('/mnt/data/image.png')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Luxe Real Estate</h1>
          <p className="text-lg md:text-xl mt-2">Book your next luxury stay with ease</p>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-3">Explore Listings</Button>
        </div>
      </header>
      
      {/* Search Bar */}
      <div className="flex justify-center mt-[-30px] px-4">
        <Card className="p-4 shadow-lg w-full max-w-4xl bg-white">
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Location" className="p-2 border rounded-lg" />
            <Input type="date" placeholder="Check-in" className="p-2 border rounded-lg" />
            <Input type="date" placeholder="Check-out" className="p-2 border rounded-lg" />
            <Button className="md:col-span-3 bg-blue-500 hover:bg-blue-600">Search</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Featured Listings */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden shadow-lg">
            <img src="/mnt/data/image.png" alt="Urban Comfort in HTX" className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Urban Comfort in HTX</h3>
              <p className="text-gray-600">Click below to view details and book.</p>
              <Button className="mt-3 bg-blue-500 hover:bg-blue-600 w-full">View Listing</Button>
            </CardContent>
          </Card>
          {["Spacious Home King Bed", "Cozy Apt Near Hobby"].map((title, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <img src={`/property-${index + 2}.jpg`} alt={title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">Click below to view details and book.</p>
                <Button className="mt-3 bg-blue-500 hover:bg-blue-600 w-full">View Listing</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Local Recommendations */}
      <section className="py-10 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6">Local Recommendations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Space Center Houston", "Buffalo Bayou Park", "Moody Gardens"].map((place, index) => (
            <Card key={index} className="p-4 shadow-md">
              <h3 className="text-xl font-semibold">{place}</h3>
              <p className="text-gray-600">A must-visit attraction near our properties.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
