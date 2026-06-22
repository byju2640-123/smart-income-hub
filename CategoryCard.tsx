import { Link } from "wouter";
import { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <a className="article-card group cursor-pointer text-center py-8 hover:bg-primary/5 transition-colors">
        <div className="text-5xl mb-4">{category.icon}</div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {category.description}
        </p>
      </a>
    </Link>
  );
}
