import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PersonalInfo from '@/components/PersonalInfo'
import MediaList from '@/components/MediaList'
import Challenge from '@/components/Challenge'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto bg-background">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-3xl font-bold">CSCE 445 Assignment 1</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="space-y-6">
          <PersonalInfo />
          <Separator className="my-4" />
          <MediaList />
          <Separator className="my-4" />
          <Challenge />
        </CardContent>
      </Card>
    </main>
  )
}

