import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalInfo() {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/Headshot.JPG?height=300&width=300"
          alt="Your Name"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Nicolas Romero</h2>
          <p className="text-muted-foreground">
            I&apos;m taking this class because I&apos;m passionate about understanding how media shapes our society 
            and influences our daily lives. I&apos;m excited to explore the intersection of technology and communication, 
            and to develop skills that will help me navigate the ever-evolving media landscape.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

