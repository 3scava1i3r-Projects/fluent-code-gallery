import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

// Defines the structure of a Medium article object
type Article = {
  title: string;
  link: string;
  guid: string;
  description: string;
  categories: string[];
};

// Fetches and filters articles from the Medium RSS-to-JSON feed
const fetchArticles = async (): Promise<{ items: Article[] }> => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joichiro.sai"
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  // Filters out comments and keeps only actual articles which have categories
  return { ...data, items: data.items.filter((item: Article) => item.categories.length > 0) };
};

// Creates a short text snippet from the article's HTML description
const createSnippet = (html: string, length = 120) => {
  const text = html.replace(/<[^>]*>/g, "").trim();
  if (text.length <= length) return text;
  return text.substring(0, text.lastIndexOf(" ", length)) + "...";
};

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["mediumArticles"],
    queryFn: fetchArticles,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const articles = data?.items || [];
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(articlesPerPage)].map((_, i) => (
        <Card key={i} className="flex flex-col border-border/60 bg-card">
          <CardHeader>
            <Skeleton className="h-7 w-3/4" />
          </CardHeader>
          <CardContent className="flex-grow space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
          <CardFooter className="flex justify-between items-center pt-6">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="articles" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl font-display text-center mb-16">
          Articles
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop sidebar pagination */}
          {totalPages > 0 && !isLoading && !isError && (
            <div className="hidden md:flex flex-col items-center space-y-2 sticky top-28 self-start">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="icon"
                  className="rounded-full"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              {totalPages > 1 && (
                <>
                  <div className="h-8 w-px bg-border my-1" />
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)}
                    aria-label="Next page"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          )}

          <div className="flex-1">
            {isLoading && renderSkeletons()}
            {isError && (
              <p className="text-center text-destructive">
                Failed to load articles. Please try again later.
              </p>
            )}
            {!isLoading && !isError && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {currentArticles.map((article: Article) => (
                  <Card
                    key={article.guid}
                    className="flex flex-col border-border/60 hover:border-primary/40 transition-colors duration-300 bg-card"
                  >
                    <CardHeader>
                      <CardTitle className="font-display text-xl leading-tight">
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary/80 transition-colors">{article.title}</a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">
                        {createSnippet(article.description)}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-6">
                      <Button asChild className="rounded-full" variant="default">
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          Read more
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="icon" className="rounded-full">
                        <a href={article.link} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${article.title}`}>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Pagination */}
        {totalPages > 1 && !isLoading && !isError && (
          <Pagination className="mt-12 md:hidden">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              <PaginationItem>
                <span className="font-mono text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </motion.div>
    </section>
  );
};

export default Articles;
