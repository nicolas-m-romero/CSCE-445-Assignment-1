import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const mediaCategories = [
	{
    name: "Music",
    subcategories: [
      { name: "Alt", examples: ["Mk.gee", "Weston Estate", "Imogen Heap", "Cigarettes After Sex"] },
      { name: "Rock", examples: ["Dance Gavin Dance", "Deftones", ] },
      { name: "Rap", examples: ["Drake", "Gunna", "Travis Scott"] },
      { name: "RNB", examples: ["Frank Ocean", "Bryson Tiller", "PARTYNEXTDOOR"] },
    ],
  },
  {
    name: "TV Shows",
    subcategories: [
      { name: "Comedy", examples: ["Modern Family", "Pen15"] },
      { name: "Drama", examples: ["The Bear", "The White Lotus", "Euphoria"] },
      { name: "Crime & Thriller", examples: ["Narcos", "Fargo", "Breaking Bad"] },
      { name: "Historical & Period Pieces", examples: ["Peaky Blinders", "Chernobyl", "Vikings"] },
    ],
  },
  {
    name: "Movies",
    subcategories: [
      { name: "Action", examples: ["John Wick", "The Dark Knight", "Gladiator"] },
      { name: "Sci-Fi", examples: ["Interstellar", "The Matrix", "Blade Runner 2049"] },
      { name: "Comedy", examples: ["Superbad", "Anchorman", "Step Brothers"] },
      { name: "Drama", examples: ["Schindler's List", "Forest Gump", "The Shawshank Redemption"] },
    ],
  },
  {
    name: "Video Games",
    subcategories: [
      { name: "Online Games", examples: ["Marvel Rivals", "Destiny 2", "Fortnite"] },
      { name: "Story Games", examples: ["The Last of Us", "God of War"] },
    ],
  },
  {
    name: "Social Media",
    subcategories: [
      { name: "Instagram", examples: ["Posting/Viewing Photos", "Posting/Viewing Stories"] },
      { name: "LinkedIn", examples: ["Professional networking", "Job searching", "Posting Career Advancements"] },
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

