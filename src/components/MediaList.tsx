import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const mediaCategories = [
	{
    name: "Music",
    subcategories: [
      { name: "Pop", examples: ["Artist A", "Artist B"] },
      { name: "Rock", examples: ["Band X", "Band Y"] },
      { name: "Classical", examples: ["Composer M", "Composer N"] },
    ],
  },
  {
    name: "Moving Images",
    subcategories: [
      { name: "Movies", examples: ["Sci-Fi: Inception", "Drama: The Shawshank Redemption"] },
      { name: "TV Shows", examples: ["Comedy: The Office", "Drama: Breaking Bad"] },
      { name: "YouTube", examples: ["Educational: Crash Course", "Entertainment: Vlogbrothers"] },
    ],
  },
  {
    name: "Games",
    subcategories: [
      { name: "Video Games", examples: ["RPG: The Witcher 3", "Strategy: Civilization VI"] },
      { name: "Mobile Games", examples: ["Puzzle: Wordle", "Casual: Candy Crush"] },
    ],
  },
  {
    name: "Social Media",
    subcategories: [
      { name: "Instagram", examples: ["Photo sharing", "Stories"] },
      { name: "Twitter", examples: ["Microblogging", "News updates"] },
      { name: "LinkedIn", examples: ["Professional networking", "Job searching"] },
    ],
  },
]

export default function MediaList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Media Consumption and Generation</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {mediaCategories.map((category, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{category.name}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <span className="font-semibold">{subcategory.name}</span>
                      {subcategory.examples.length > 0 && (
                        <span className="text-muted-foreground"> (e.g., {subcategory.examples.join(", ")})</span>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

